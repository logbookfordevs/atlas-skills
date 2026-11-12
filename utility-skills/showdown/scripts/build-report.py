#!/usr/bin/env python3
"""Build a Showdown fighting-game report from a showdown folder.

Usage: python3 build-report.py <showdown-dir> [out.html]

Reads <showdown-dir>/showdown.json (card, prose and evidence choices), map.json,
rulings.json and verdicts/verdict-<stage>-<judge>.json, as described in
references/report.md. Scores, winners, damage, plant coverage and citations come
from the JSON; screenshots and fonts are embedded as data URIs.
"""

import base64
import html
import json
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile

SKILL = pathlib.Path(__file__).resolve().parent.parent
ROOT = pathlib.Path(sys.argv[1]).resolve()
OUT = pathlib.Path(sys.argv[2]) if len(sys.argv) > 2 else ROOT / "index.html"

card = json.loads((ROOT / "showdown.json").read_text())
rulings = json.loads((ROOT / "rulings.json").read_text())
label_map = json.loads((ROOT / "map.json").read_text())

P1, P2 = card["contenders"]
SIDE = {P1["id"]: "p1", P2["id"]: "p2"}
NAME = {P1["id"]: P1["name"], P2["id"]: P2["name"]}
STAGES = card["stages"]
ROUNDS = card["rounds"]
DAMAGE_FACTOR = card.get("damageFactor", 3)
IMG_WIDTH = card.get("imageWidth", 1000)
IMG_QUALITY = card.get("imageQuality", 68)

verdicts = {}
for path in sorted((ROOT / "verdicts").glob("verdict-*.json")):
    v = json.loads(path.read_text())
    verdicts[(v["stage"], v["judge"])] = v
JUDGES = sorted({j for _, j in verdicts})


def e(text):
    return html.escape(str(text), quote=True)


def md(text):
    """Escape, then allow `code`, **bold** and [text](href)."""
    out = e(text)
    out = re.sub(r"`([^`]+)`", r"<code>\1</code>", out)
    out = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", out)
    out = re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", r'<a href="\2">\1</a>', out)
    return out


def jpeg_bytes(path):
    """Downscale to JPEG with Pillow or sips when available; otherwise embed as-is."""
    try:
        from PIL import Image

        with Image.open(path) as im:
            if im.format == "JPEG" and im.width <= IMG_WIDTH:
                return path.read_bytes(), "image/jpeg"
            im = im.convert("RGB")
            if im.width > IMG_WIDTH:
                im = im.resize((IMG_WIDTH, round(im.height * IMG_WIDTH / im.width)))
            tmp = tempfile.NamedTemporaryFile(suffix=".jpg", delete=False)
            im.save(tmp.name, "JPEG", quality=IMG_QUALITY)
            return pathlib.Path(tmp.name).read_bytes(), "image/jpeg"
    except ImportError:
        pass
    if shutil.which("sips"):
        probe = subprocess.run(["sips", "-g", "pixelWidth", str(path)], capture_output=True, text=True, check=False)
        width = int(re.search(r"pixelWidth: (\d+)", probe.stdout).group(1)) if "pixelWidth" in probe.stdout else 0
        if path.suffix.lower() in (".jpg", ".jpeg") and width <= IMG_WIDTH:
            return path.read_bytes(), "image/jpeg"
        resize = ["--resampleWidth", str(IMG_WIDTH)] if width > IMG_WIDTH else []
        tmp = pathlib.Path(tempfile.mkdtemp()) / "shot.jpg"
        subprocess.run(
            ["sips", "-s", "format", "jpeg", "-s", "formatOptions", str(IMG_QUALITY), *resize, str(path), "--out", str(tmp)],
            capture_output=True,
            check=False,
        )
        if tmp.exists():
            return tmp.read_bytes(), "image/jpeg"
    mime = "image/png" if path.suffix.lower() == ".png" else "image/jpeg"
    return path.read_bytes(), mime


_img_cache = {}


def img(rel):
    if rel not in _img_cache:
        data, mime = jpeg_bytes(ROOT / rel)
        _img_cache[rel] = f"data:{mime};base64," + base64.b64encode(data).decode()
    return _img_cache[rel]


def font(name):
    return "data:font/woff2;base64," + base64.b64encode((SKILL / "assets/fonts" / f"{name}.woff2").read_bytes()).decode()


def figure(shot):
    owner = shot.get("contender")
    cls = f" {SIDE[owner]}b" if owner in SIDE else ""
    return f'<figure class="shot{cls}"><img loading="lazy" src="{img(shot["src"])}" alt="{e(shot["alt"])}"><figcaption>{e(shot["caption"])}</figcaption></figure>'


def who(cid):
    if cid in SIDE:
        return f'<b class="{SIDE[cid]}">{e(NAME[cid])}</b>'
    return "<b>draw</b>"


def scores_for(round_key):
    """{contender: [score per judge x stage]} plus per-cell rows, resolved through the sealed map."""
    per = {P1["id"]: [], P2["id"]: []}
    rows = []
    for stage in STAGES:
        for judge in JUDGES:
            v = verdicts.get((stage["id"], judge))
            if not v or round_key not in v["rounds"]:
                continue
            labels = label_map[stage["id"]]
            cell = {labels[label]: v["rounds"][round_key][label] for label in labels}
            for cid in per:
                per[cid].append(cell[cid])
            rows.append((stage["name"], judge, cell))
    return per, rows


def mean(xs):
    return sum(xs) / len(xs) if xs else 10


def judge_label(judge):
    return card.get("judges", {}).get(judge, judge)


hp = {P1["id"]: 100.0, P2["id"]: 100.0}
record = {P1["id"]: [0, 0, 0], P2["id"]: [0, 0, 0]}
round_html = []

for n, rnd in enumerate(ROUNDS, start=1):
    key = rnd["key"]
    ruling = rulings["rounds"][key]
    per, rows = scores_for(key)
    damage = {cid: (10 - mean(per[cid])) * DAMAGE_FACTOR for cid in per}
    for cid in hp:
        hp[cid] -= damage[cid]

    combined = ruling["combined"]
    for cid in record:
        if combined == "draw":
            record[cid][1] += 1
        elif combined == cid:
            record[cid][0] += 1
        else:
            record[cid][2] += 1

    ev = card.get("evidence", {}).get(key, {})
    shots = "".join(figure(s) for s in ev.get("shots", []))
    metrics = ""
    if ev.get("metrics"):
        body = "".join(
            f'<tr><th scope="row">{e(m["label"])}</th><td class="num">{e(m[P1["id"]])}</td><td class="num">{e(m[P2["id"]])}</td></tr>'
            for m in ev["metrics"]
        )
        metrics = f'<div class="tablewrap"><table class="metrics"><thead><tr><th scope="col">Captured metric (seed → output)</th><th scope="col" class="p1">{e(P1["name"])}</th><th scope="col" class="p2">{e(P2["name"])}</th></tr></thead><tbody>{body}</tbody></table></div>'
    facts = "".join(f"<li>{md(f)}</li>" for f in ev.get("facts", []))
    score_rows = "".join(
        f'<tr><th scope="row">{e(stage)} <span class="dim">{e(judge_label(judge))}</span></th><td class="num p1">{cell[P1["id"]]:g}</td><td class="num p2">{cell[P2["id"]]:g}</td></tr>'
        for stage, judge, cell in rows
    )
    score_table = f'<table class="scores"><caption class="sr">Blind scores out of 10</caption><thead><tr><th scope="col">Judge × stage</th><th scope="col" class="p1">{e(P1["short"] if "short" in P1 else P1["name"])}</th><th scope="col" class="p2">{e(P2["short"] if "short" in P2 else P2["name"])}</th></tr></thead><tbody>{score_rows}</tbody></table>'

    rule_cols = []
    for c in (P1, P2):
        items = "".join(
            f'<li class="eff-{e(r.get("effect", "helped"))}"><span class="eff">{e(r.get("effect", "helped"))}</span> {e(r["rule"])} <code>{e(r["cite"])}</code></li>'
            for r in ruling["rules"].get(c["id"], [])
        )
        rule_cols.append(f'<div><h4 class="{SIDE[c["id"]]}">{e(c["name"])} rules in play</h4><ul class="rules {SIDE[c["id"]]}">{items}</ul></div>')
    depth = ruling.get("instructionDepth", {})
    depth_line = " · ".join(f'{e(c["name"])} <b class="num">{depth.get(c["id"], "?")}/5</b>' for c in (P1, P2))

    if combined == "draw":
        stamp_cls, stamp = "stamp draw", "DRAW"
    else:
        stamp_cls = f"stamp {SIDE[combined]}s"
        stamp = "K.O." if ruling.get("confidence") == "high" else "WIN"
    winner_label = "DRAW" if combined == "draw" else e(NAME[combined]).upper()
    split = " · ".join(
        f'{e(s["name"])} {who(ruling["byStage"][s["id"]]["winner"])} <span class="dim">({e(ruling["byStage"][s["id"]].get("agreement", ""))})</span>'
        for s in STAGES
        if s["id"] in ruling.get("byStage", {})
    )
    ko = f'<p class="ko-line">{e(rnd["ko"])}</p>' if rnd.get("ko") else ""

    round_html.append(f"""
<section class="round" id="r-{e(key)}" data-round="{n}" data-hp-p1="{hp[P1['id']]:.1f}" data-hp-p2="{hp[P2['id']]:.1f}" aria-labelledby="h-{e(key)}">
  <header class="round-head">
    <p class="round-no">Round {n}</p>
    <h2 id="h-{e(key)}">{e(rnd['title'])}</h2>
    <p class="round-sub">{e(rnd.get('question', ''))}</p>
  </header>
  <div class="round-grid">
    <div class="col evidence">
      <h3>Evidence</h3>
      {f'<div class="shots">{shots}</div>' if shots else ''}
      {metrics}
      {f'<ul class="facts">{facts}</ul>' if facts else ''}
      {score_table}
    </div>
    <div class="col rationale">
      <h3>Judge rationale</h3>
      <p class="why">{e(ruling['why'])}</p>
      <div class="rulecols">{''.join(rule_cols)}</div>
      <p class="depth"><span class="tag">Instruction depth</span> {depth_line}. {e(depth.get('note', ''))}</p>
      <p class="variance"><span class="tag">Instructions or luck?</span> {e(ruling.get('variance', ''))}</p>
    </div>
  </div>
  <footer class="verdict">
    <div class="{stamp_cls}" aria-hidden="true">{stamp}</div>
    <div class="verdict-text">
      <p class="winner">Winner: <strong>{winner_label}</strong> <span class="conf">confidence {e(ruling.get('confidence', ''))}</span></p>
      <p class="split">{split}</p>
      {ko}
      <p class="dmg dim">Damage this round: {e(P1['name'])} −{damage[P1['id']]:.1f} · {e(P2['name'])} −{damage[P2['id']]:.1f}, from (10 − mean blind score) × {DAMAGE_FACTOR}</p>
    </div>
  </footer>
</section>""")

ship = {P1["id"]: 0, P2["id"]: 0}
for (stage, judge), v in verdicts.items():
    ship[label_map[stage][v["ship"]["pick"]]] += 1
ship_total = sum(ship.values())

plant_rows = []
for stage in STAGES:
    for judge in JUDGES:
        v = verdicts.get((stage["id"], judge))
        if not v:
            continue
        labels = label_map[stage["id"]]
        inv = {cid: label for label, cid in labels.items()}
        total = len(v["plants"])
        fixed = {cid: sum(1 for p in v["plants"].values() if p.get(inv[cid]) == "fixed") for cid in inv}
        plant_rows.append(f'<tr><th scope="row">{e(stage["name"])} · {e(judge_label(judge))}</th><td class="num">{fixed[P1["id"]]} / {total}</td><td class="num">{fixed[P2["id"]]} / {total}</td></tr>')

probe_html = []
for probe in card.get("refusalProbes", []):
    ruled = {p["contender"]: p for p in rulings.get("refusalProbes", [])}
    cols = []
    for c in (P1, P2):
        entry = probe["entries"].get(c["id"], {})
        r = ruled.get(c["id"], {})
        body = []
        if entry.get("status") == "declined":
            body.append(f'<div class="forfeit"><b>DOES NOT ENTER</b><span class="dim">{e(entry.get("note", ""))}</span></div>')
        body.append('<div class="shots">' + "".join(figure(s) for s in entry.get("shots", [])) + "</div>" if entry.get("shots") else "")
        if entry.get("quote"):
            body.append(f'<blockquote>{e(entry["quote"])}</blockquote>')
        for field, tag in (("behavior", ""), ("quality", "Quality"), ("contractAdherence", "Contract"), ("risks", "Risks")):
            if r.get(field):
                body.append(f'<p class="variance">{f"<span class=tag>{tag}</span>" if tag else ""}{e(r[field])}</p>')
        cols.append(f'<div class="col"><h3>{e(c["name"])}</h3>{"".join(body)}</div>')
    result = probe.get("result", "")
    stamp_side = SIDE.get(probe.get("walkover"), "")
    probe_html.append(f"""
<section class="round bonus" id="probe-{e(probe['id'])}" aria-labelledby="h-probe-{e(probe['id'])}">
  <header class="round-head">
    <p class="round-no">Bonus stage · not counted in the rounds</p>
    <h2 id="h-probe-{e(probe['id'])}">{e(probe['title'])}</h2>
    <p class="round-sub">{e(probe.get('request', ''))}</p>
  </header>
  <div class="round-grid">{''.join(cols)}</div>
  <footer class="verdict">
    <div class="stamp {stamp_side + 's' if stamp_side else 'draw'}" aria-hidden="true">{'W/O' if stamp_side else 'N/C'}</div>
    <div class="verdict-text"><p class="winner">{md(result)}</p><p class="dim">{e(rulings.get('refusalProbeVerdict', ''))}</p></div>
  </footer>
</section>""")

refusal_panels = "".join(
    f'<div class="panel"><h3 class="{SIDE[c["id"]]}">{e(c["name"])}</h3><ul>'
    + "".join(f'<li>{e(r["what"])} <code>{e(r["cite"])}</code></li>' for r in rulings.get("refusals", []) if r["contender"] == c["id"])
    + "</ul></div>"
    for c in (P1, P2)
)


def li(items):
    return "".join(f"<li>{md(i)}</li>" for i in items)


def card_html(c):
    rows = "".join(f"<dt>{e(k)}</dt><dd>{md(v)}</dd>" for k, v in c.get("facts", []))
    side = SIDE[c["id"]]
    return f'<article class="card c{side[-1]}"><h2 class="{side}">{side.upper()} · {e(c["name"])}</h2><dl>{rows}</dl></article>'


DEFAULT_PIPELINE = [
    ["1 · Audit", "Every instruction file of every contender read in full, with line-ranged ledgers and cited rule inventories."],
    ["2 · Seeds", "Starting material from the real subject, with skill-neutral planted defects written before any run."],
    ["3 · Fight", "Every contender on every brief, same model and effort, isolated folders, non-interactive."],
    ["4 · Capture", "Screenshots at desktop and 390px, keyboard focus, axe-core, overflow, infinite animations and reduced motion."],
    ["5 · Blind judges", "Judges from other model families scored labelled outputs per round against a written rubric; the map stayed sealed."],
    ["6 · Rule judge", "Unblinded judge combined the verdicts and tied every result to rules verified in each contender's files."],
]

tally = [
    (f'<b class="{SIDE[c["id"]]}">{record[c["id"]][0]}</b>', f'rounds to {e(c["name"])}') for c in (P1, P2)
] + [(f"<b>{record[P1['id']][1]}</b>", "draws")]
leader = max(ship, key=ship.get)
tally.append((f'<b class="{SIDE[leader]}">{ship[leader]}/{ship_total}</b>', f"blind ship picks to {e(NAME[leader])}"))
tally_html = "".join(f"<div>{a}<span>{b}</span></div>" for a, b in tally)

stage_shots = "".join(figure(s) for s in card.get("stageShots", []))
score_rows = "".join(
    f'<tr><th scope="row">{e(r["title"])}</th>'
    + "".join(f'<td>{who(rulings["rounds"][r["key"]]["byStage"].get(s["id"], {}).get("winner", "draw"))}</td>' for s in STAGES)
    + f'<td>{who(rulings["rounds"][r["key"]]["combined"])}</td><td>{e(rulings["rounds"][r["key"]].get("confidence", ""))}</td>'
    + f'<td class="num">{rulings["rounds"][r["key"]].get("instructionDepth", {}).get(P1["id"], "?")} / {rulings["rounds"][r["key"]].get("instructionDepth", {}).get(P2["id"], "?")}</td></tr>'
    for r in ROUNDS
)
stage_heads = "".join(f'<th scope="col">{e(s["name"])}</th>' for s in STAGES)


def record_line(cid):
    w, d, l = record[cid]
    return f"{w} win{'s' if w != 1 else ''} · {d} draw{'s' if d != 1 else ''} · {l} loss{'es' if l != 1 else ''}"


body = f"""
  <header class="title">
    <p class="eyebrow-free">{e(card['event'])}</p>
    <h1 class="versus"><span class="p1">{e(P1['name'])}</span><span class="x">vs</span><span class="p2">{e(P2['name'])}</span></h1>
    <p class="lede">{md(card['lede'])}</p>
    <div class="cards">{card_html(P1)}{card_html(P2)}</div>
    <section class="upfront" aria-labelledby="h-upfront">
      <h2 id="h-upfront">Result up front</h2>
      <div class="tally">{tally_html}</div>
      <ul>{li(card.get('headline', []))}</ul>
    </section>
  </header>

  <section class="block" id="method" aria-labelledby="h-method">
    <h2 id="h-method">Tale of the tape</h2>
    <p>{md(card.get('methodIntro', ''))}</p>
    <ol class="pipeline">{''.join(f'<li><b>{e(a)}</b>{md(b)}</li>' for a, b in card.get('pipeline', DEFAULT_PIPELINE))}</ol>
    <div class="two">
      <div class="panel"><h3>Why these tasks</h3><ul>{li(card.get('taskRationale', []))}</ul></div>
      <div class="panel"><h3>The stages</h3><div class="stage-shots">{stage_shots}</div></div>
    </div>
  </section>

  <div id="rounds">{''.join(round_html)}</div>
  {''.join(probe_html)}

  <section class="block" id="scorecard" aria-labelledby="h-score">
    <h2 id="h-score">Final scorecard</h2>
    <div class="final">
      <div class="panel"><span class="dim">{e(P1['name'])} · health left</span><span class="big p1">{hp[P1['id']]:.0f}</span><span class="dim">{record_line(P1['id'])}</span></div>
      <div class="panel"><span class="dim">{e(P2['name'])} · health left</span><span class="big p2">{hp[P2['id']]:.0f}</span><span class="dim">{record_line(P2['id'])}</span></div>
    </div>
    <div class="tablewrap"><table><thead><tr><th scope="col">Round</th>{stage_heads}<th scope="col">Combined</th><th scope="col">Confidence</th><th scope="col">Instruction depth ({e(P1['name'])} / {e(P2['name'])})</th></tr></thead><tbody>{score_rows}</tbody></table></div>
    <p class="dim">Health starts at 100. Each round deals (10 − the contender's mean blind score across judge × stage cells) × {DAMAGE_FACTOR}. Instruction depth is the rule judge's reading of each contender's files, separate from this run's outcome.</p>
    <div class="tablewrap"><table><thead><tr><th scope="col">Planted defects fixed</th><th scope="col" class="p1">{e(P1['name'])}</th><th scope="col" class="p2">{e(P2['name'])}</th></tr></thead><tbody>{''.join(plant_rows)}</tbody></table></div>
  </section>

  <section class="block" id="split" aria-labelledby="h-split">
    <h2 id="h-split">Stage split</h2>
    <div class="two">{''.join(f'<div class="panel"><h3>{e(s["name"])}</h3><ul>{li(s.get("split", []))}</ul></div>' for s in STAGES)}</div>
  </section>

  <section class="block" id="refusals" aria-labelledby="h-ref">
    <h2 id="h-ref">Where each refuses to fight</h2>
    <p>Scope limits, routing elsewhere and ask-first rules, each cited to the contender's own files.</p>
    <div class="two">{refusal_panels}</div>
    {f'<p>{md(card["refusalSummary"])}</p>' if card.get('refusalSummary') else ''}
  </section>

  <section class="block" id="caveats" aria-labelledby="h-cav">
    <h2 id="h-cav">Honest caveats</h2>
    <div class="two">{''.join(f'<div class="panel"><h3>{e(group["title"])}</h3><ul>{li(group["items"])}</ul></div>' for group in card.get('caveats', []))}</div>
    <p><b>Rule judge's summary:</b> {e(rulings.get('overall', ''))}</p>
  </section>

  <section class="block" id="evidence" aria-labelledby="h-ev">
    <h2 id="h-ev">Evidence locker</h2>
    <p>{md(card.get('evidenceIntro', 'Everything sits next to this file. Open the outputs themselves to check hover, focus and motion.'))}</p>
    <div class="two">{''.join(f'<div class="panel"><h3>{e(group["title"])}</h3><ul>{li(group["items"])}</ul></div>' for group in card.get('evidence_locker', []))}</div>
  </section>
"""

colors = {
    "P1_COLOR": P1.get("color", "#f2a541"),
    "P1_DEEP": P1.get("deep", "#8a5a17"),
    "P2_COLOR": P2.get("color", "#4cc6ff"),
    "P2_DEEP": P2.get("deep", "#17607f"),
}
fill = {
    **colors,
    "TITLE": e(card["title"]),
    "DESCRIPTION": e(card.get("description", "")),
    "P1_NAME": e(P1["name"]),
    "P2_NAME": e(P2["name"]),
    "ROUND_COUNT": str(len(ROUNDS)),
    "FOOTER": md(card.get("footer", "")),
    "FONT_BUNGEE": font("bungee-latin-400-normal"),
    "FONT_ATK400": font("atkinson-hyperlegible-latin-400-normal"),
    "FONT_ATK700": font("atkinson-hyperlegible-latin-700-normal"),
    "FONT_JB400": font("jetbrains-mono-latin-400-normal"),
    "FONT_JB700": font("jetbrains-mono-latin-700-normal"),
    "BODY": body,
}
page = (SKILL / "assets/report-template.html").read_text()
for k, v in fill.items():
    page = page.replace("{{" + k + "}}", v)
leftover = re.search(r"\{\{[A-Z0-9_]+\}\}", page)
if leftover:
    sys.exit(f"Unfilled placeholder {leftover.group(0)}")
OUT.write_text(page)
print(f"{OUT} · {len(page) // 1024} KB · health {P1['name']} {hp[P1['id']]:.1f} / {P2['name']} {hp[P2['id']]:.1f}")
