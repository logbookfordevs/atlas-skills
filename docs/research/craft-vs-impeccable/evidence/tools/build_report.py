import base64, html, json, pathlib, sys

A = pathlib.Path(sys.argv[1])
OUT = pathlib.Path(sys.argv[2])

rul = json.loads((A / "judging/rules/rulings.json").read_text())
scores = json.loads((A / "report/scores.json").read_text())


def b64(p, mime):
    return f"data:{mime};base64," + base64.b64encode(p.read_bytes()).decode()


def img(name):
    return b64(A / "report/img" / f"{name}.jpg", "image/jpeg")


def font(name):
    return b64(A / "fonts" / f"{name}.woff2", "font/woff2")


e = html.escape

PILLARS = [
    ("color", "Color", "Palette, contrast, accent discipline"),
    ("typography", "Typography", "Scale, roles, wrapping, measure"),
    ("layout", "Layout / hierarchy", "Spacing, grouping, primary action, 390px"),
    ("accessibility", "Accessibility", "Semantics, focus, names, live regions"),
    ("states", "States / polish", "Empty, loading, error, destructive safety"),
    ("copy", "Copy", "Truth, labels, recovery messages, voice"),
    ("motion", "Motion", "atlas-motion vs impeccable animate"),
    ("ux", "UX / direction", "What it is, what to do, identity kept"),
]

EVIDENCE = {
    "color": {
        "shots": [("craft-landing", "Craft · landing hero"), ("imp-landing", "impeccable · landing hero")],
        "facts": [
            "Both purged the seed's purple/pink gradients and restored the Desk tokens.",
            "G measured Dim/Wall 7.49:1 and Screen/Wall 15.47:1 on both landing pages. axe: 0 violations each (seed: 3 contrast failures).",
            "In-app, G measured craft's input border at 5.65:1 vs impeccable's seam-on-wall 1.40:1.",
            "impeccable left one static brass step numeral (imp-landing/index.html:285), a minor break of the One Brass Rule.",
        ],
    },
    "typography": {
        "shots": [("craft-app-ready", "Craft · in-app ready"), ("imp-app-ready", "impeccable · in-app ready")],
        "facts": [
            "Both moved language back to Geist and kept Geist Mono for data, as DESIGN.md requires (the seed set everything in mono).",
            "G: craft sets counts and durations in mono and wraps file paths on purpose. impeccable left room counts in sans.",
            "M preferred impeccable's casing and spacing of facts. G called every type sub-score a tie within 0.5.",
        ],
    },
    "layout": {
        "shots": [("craft-landing-390", "Craft · landing 390"), ("imp-landing-390", "impeccable · landing 390"), ("craft-app-390", "Craft · in-app 390"), ("imp-app-390", "impeccable · in-app 390")],
        "facts": [
            "Landing: impeccable puts captioned work in the first viewport. Craft spends the whole first screen before any sample, and its last nav label hides behind a fade at 390px.",
            "In-app: craft keeps a compact four-file list, current-room tabs and a stacked mobile form. impeccable gives the latest render a hero frame that pushes older files below the fold.",
            "Both removed the seed's horizontal scroll (scrollWidth 1180→390 and 996→390).",
        ],
    },
    "accessibility": {
        "shots": [("craft-app-focus", "Craft · in-app after 4×Tab"), ("imp-app-focus", "impeccable · in-app after 4×Tab")],
        "facts": [
            "Landing: a tie. Both have landmarks, a skip link, alt text, real controls and 0 axe violations. Craft's nav clips its focus ring; impeccable's comparison ledger hides its column meaning from AT.",
            "In-app, G scored craft 8 and impeccable 5.5. impeccable's mobile Jump to and Tablet buttons lose their only names (display:none, no aria-label) and its loading view has no live region.",
            "Craft: native <dialog> for delete, a loading announcement and a labelled Tablet control.",
        ],
    },
    "states": {
        "shots": [("craft-app-error", "Craft · error"), ("imp-app-error", "impeccable · error"), ("craft-app-loading", "Craft · loading"), ("imp-app-loading", "impeccable · loading")],
        "facts": [
            "Craft's Try again sets the state to loading and never settles (craft-app/index.html:1008): a recovery deadlock.",
            "impeccable's retry returns to the error after 900ms and offers a Board-specific recovery: \"Desk records are optional, and a missing desk/ file never breaks a piece.\"",
            "Craft's delete dialog says the piece has 4 renders, even on the empty state.",
            "Both replaced the seed's one-click Delete with a confirmation.",
        ],
    },
    "copy": {
        "shots": [("craft-app-empty", "Craft · empty"), ("imp-app-empty", "impeccable · empty")],
        "facts": [
            "Both deleted the seed's false \"AI-Powered Video\" claim. It contradicts house rule 1: video is rendered from code.",
            "Both turned \"Initiate Render Pipeline\" into an ask, because PRODUCT.md says the Desk never runs a skill.",
            "Craft's error headline \"This piece couldn't load\" overstates a missing board file. impeccable scopes it to the board.",
            "Both still claim saves and deletions that a static page can't perform.",
        ],
    },
    "motion": {
        "shots": [],
        "facts": [
            "Seed: an infinite 0.9s CTA pulse, back-overshoot easing, hover animating top and width, 80px scroll fades and 0 reduced-motion rules.",
            "Landing, craft: the pulse is gone, but a 500ms staggered hero entrance and press scale still run under reduced motion (craft-landing/index.html:238, 561–577).",
            "Landing, impeccable: one authored moment. A frame lights on hover and the hero glow takes that frame's colour. Long fades are shortened under reduced motion.",
            "In-app, craft: the spinner keeps spinning under reduced motion and views swap with no continuity. That spinner is permitted by craft's own motion-and-zoom.md:32.",
            "In-app, impeccable: 15 infinite skeleton sweeps while loading (they stop under reduced motion) and a 220ms opacity arrival.",
        ],
        "metrics": [
            ("Infinite animations, landing", "2 → 0", "2 → 0"),
            ("Reduced-motion rules, landing", "0 → 2", "0 → 2"),
            ("Infinite animations, in-app loading", "1 → 1", "1 → 15"),
            ("Animations running with reduced motion (landing)", "4 (finite)", "0"),
        ],
    },
    "ux": {
        "shots": [("seed-landing", "Seed · before"), ("imp-landing", "impeccable · after")],
        "facts": [
            "Landing: impeccable's main action is the real command, pnpm desk:start with Copy. Craft's \"Start the Desk\" only scrolls to instructions.",
            "Both made the studio credible and kept the screening-room identity. Neither invented a feature that runs models.",
            "In-app: tied. impeccable leads with the work; craft keeps scanning and room navigation.",
        ],
    },
}

KO = {
    "states": "CRITICAL HIT: craft's retry deadlock",
    "motion": "COMBO: one authored moment beats a stagger",
    "accessibility": "COUNTER: craft's names survive on mobile",
    "ux": "FINISHER: the CTA is the real command",
}


def mean(xs):
    return sum(xs) / len(xs)


rounds_data = []
hp = {"craft": 100.0, "imp": 100.0}
for key, title, sub in PILLARS:
    s = scores[key]
    allc = [s[surf][j]["craft"] for surf in ("landing", "app") for j in "GM"]
    alli = [s[surf][j]["imp"] for surf in ("landing", "app") for j in "GM"]
    dc = (10 - mean(allc)) * 3
    di = (10 - mean(alli)) * 3
    hp["craft"] -= dc
    hp["imp"] -= di
    rounds_data.append({"key": key, "craft": round(hp["craft"], 1), "imp": round(hp["imp"], 1), "dc": round(dc, 1), "di": round(di, 1)})

WIN_LABEL = {"craft": "TEAM CRAFT", "imp": "IMPECCABLE", "tie": "DRAW"}


def surf_badge(w):
    return {"craft": '<b class="p1">Craft</b>', "imp": '<b class="p2">impeccable</b>', "tie": "<b>draw</b>"}[w]


def rule_list(items, kind):
    li = []
    for r in items:
        eff = r.get("effect", "helped")
        li.append(f'<li class="eff-{eff}"><span class="eff">{e(eff)}</span> {e(r["rule"])} <code>{e(r["cite"])}</code></li>')
    return f'<ul class="rules {kind}">' + "".join(li) + "</ul>"


def score_table(key):
    s = scores[key]
    cells = []
    for surf, lab in (("landing", "Landing"), ("app", "In-app")):
        for j, jl in (("G", "G · GPT-6.1 Sol"), ("M", "M · Gemini 3.8 Flash")):
            c, i = s[surf][j]["craft"], s[surf][j]["imp"]
            cells.append(f"<tr><th scope=\"row\">{lab} <span class=\"dim\">{jl}</span></th><td class=\"num p1\">{c:g}</td><td class=\"num p2\">{i:g}</td></tr>")
    return '<table class="scores"><caption class="sr">Blind scores out of 10</caption><thead><tr><th scope="col">Judge × surface</th><th scope="col" class="p1">Craft</th><th scope="col" class="p2">imp.</th></tr></thead><tbody>' + "".join(cells) + "</tbody></table>"


rounds_html = []
for n, ((key, title, sub), rd) in enumerate(zip(PILLARS, rounds_data), start=1):
    p = rul["pillars"][key]
    ev = EVIDENCE[key]
    w = p["combined"]
    shots = "".join(
        f'<figure class="shot {"p1b" if nm.startswith("craft") else "p2b" if nm.startswith("imp") else ""}"><img loading="lazy" src="{img(nm)}" alt="{e(cap)} screenshot"><figcaption>{e(cap)}</figcaption></figure>'
        for nm, cap in ev["shots"]
    )
    metrics = ""
    if ev.get("metrics"):
        metrics = '<div class="tablewrap"><table class="metrics"><thead><tr><th scope="col">Captured metric (seed → output)</th><th scope="col" class="p1">Craft</th><th scope="col" class="p2">impeccable</th></tr></thead><tbody>' + "".join(
            f"<tr><th scope=\"row\">{e(a)}</th><td class=\"num\">{e(b)}</td><td class=\"num\">{e(c)}</td></tr>" for a, b, c in ev["metrics"]
        ) + "</tbody></table></div>"
    facts = "".join(f"<li>{e(f)}</li>" for f in ev["facts"])
    ko = f'<p class="ko-line">{e(KO[key])}</p>' if key in KO else ""
    stamp_cls = {"craft": "stamp p1s", "imp": "stamp p2s", "tie": "stamp draw"}[w]
    stamp_txt = "DRAW" if w == "tie" else ("K.O." if p["confidence"] == "high" else "WIN")
    rounds_html.append(f"""
<section class="round" id="r-{key}" data-round="{n}" data-hp-craft="{rd['craft']}" data-hp-imp="{rd['imp']}" aria-labelledby="h-{key}">
  <header class="round-head">
    <p class="round-no">Round {n}</p>
    <h2 id="h-{key}">{e(title)}</h2>
    <p class="round-sub">{e(sub)}</p>
  </header>
  <div class="round-grid">
    <div class="col evidence">
      <h3>Evidence</h3>
      {'<div class="shots">' + shots + '</div>' if shots else ''}
      {metrics}
      <ul class="facts">{facts}</ul>
      {score_table(key)}
    </div>
    <div class="col rationale">
      <h3>Judge rationale</h3>
      <p class="why">{e(p['why'])}</p>
      <div class="rulecols">
        <div><h4 class="p1">Craft rules in play</h4>{rule_list(p['craftRules'], 'p1')}</div>
        <div><h4 class="p2">impeccable rules in play</h4>{rule_list(p['impRules'], 'p2')}</div>
      </div>
      <p class="depth"><span class="tag">Instruction depth</span> Craft <b class="num">{p['instructionDepth']['craft']}/5</b> · impeccable <b class="num">{p['instructionDepth']['imp']}/5</b>. {e(p['instructionDepth']['note'])}</p>
      <p class="variance"><span class="tag">Instructions or luck?</span> {e(p['variance'])}</p>
    </div>
  </div>
  <footer class="verdict">
    <div class="{stamp_cls}" aria-hidden="true">{stamp_txt}</div>
    <div class="verdict-text">
      <p class="winner">Winner: <strong>{WIN_LABEL[w]}</strong> <span class="conf">confidence {e(p['confidence'])}</span></p>
      <p class="split">Landing {surf_badge(p['landing']['winner'])} <span class="dim">({e(p['landing']['agreement'])})</span> · In-app {surf_badge(p['app']['winner'])} <span class="dim">({e(p['app']['agreement'])})</span></p>
      {ko}
      <p class="dmg dim">Damage this round: Craft −{rd['dc']} · impeccable −{rd['di']}, from (10 − mean blind score) × 3</p>
    </div>
  </footer>
</section>""")

d = rul["direction"]
refusals = rul["refusals"]


def ref_rows(who):
    return "".join(f"<li>{e(r['what'])} <code>{e(r['cite'])}</code></li>" for r in refusals if r["skill"] == who)


table_rows = []
for key, title, _ in PILLARS:
    p = rul["pillars"][key]
    table_rows.append(
        f"<tr><th scope=\"row\">{e(title)}</th><td>{surf_badge(p['landing']['winner'])}</td><td>{surf_badge(p['app']['winner'])}</td><td>{surf_badge(p['combined'])}</td><td>{e(p['confidence'])}</td><td class=\"num\">{p['instructionDepth']['craft']} / {p['instructionDepth']['imp']}</td></tr>"
    )

final_craft = rounds_data[-1]["craft"]
final_imp = rounds_data[-1]["imp"]

tpl = (A / "tools/report_template.html").read_text()
fill = {
    "FONT_BUNGEE": font("bungee-latin-400-normal"),
    "FONT_ATK400": font("atkinson-hyperlegible-latin-400-normal"),
    "FONT_ATK700": font("atkinson-hyperlegible-latin-700-normal"),
    "FONT_JB400": font("jetbrains-mono-latin-400-normal"),
    "FONT_JB700": font("jetbrains-mono-latin-700-normal"),
    "ROUNDS": "".join(rounds_html),
    "SCORE_ROWS": "".join(table_rows),
    "FINAL_CRAFT": f"{final_craft:.0f}",
    "FINAL_IMP": f"{final_imp:.0f}",
    "REF_CRAFT": ref_rows("craft"),
    "REF_IMP": ref_rows("imp"),
    "DIR_CRAFT_BEHAVIOR": e(d["craft"]["behavior"]),
    "DIR_CRAFT_CONTRACT": e(d["craft"]["contractAdherence"]),
    "DIR_IMP_BEHAVIOR": e(d["imp"]["behavior"]),
    "DIR_IMP_QUALITY": e(d["imp"]["quality"]),
    "DIR_IMP_CONTRACT": e(d["imp"]["contractAdherence"]),
    "DIR_IMP_RISKS": e(d["imp"]["risks"]),
    "DIR_VERDICT": e(d["verdict"]),
    "OVERALL": e(rul["overall"]),
}
for name in ["seed-landing", "seed-app-ready", "seed-app-loading", "seed-app-error", "imp-direction", "imp-direction-390", "seed-landing-390"]:
    fill["IMG_" + name.upper().replace("-", "_")] = img(name)
for k, v in fill.items():
    tpl = tpl.replace("{{" + k + "}}", v)
assert "{{" not in tpl, tpl[tpl.index("{{"):tpl.index("{{") + 60]
OUT.write_text(tpl)
print(OUT, len(tpl) // 1024, "KB", "final HP", final_craft, final_imp)
