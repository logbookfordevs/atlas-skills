#!/bin/bash
# Usage: capture.sh <out-dir> <url> [state ...]
# Captures one page (or each ?state=<state> variant) with agent-browser:
# screenshots at 1440x900 and 390x844, a focus shot after four Tab presses,
# axe-core WCAG 2.1 AA + best-practice results, overflow and animation metrics,
# and a reduced-motion pass. Results land in <out-dir>/metrics.jsonl.
set -u

OUT=$1
URL=$2
shift 2
STATES=("$@")
SESSION="showdown-$$"
mkdir -p "$OUT"

ab() { agent-browser --session "$SESSION" "$@" 2>/dev/null; }

with_state() {
  if [ -z "$1" ]; then echo "$URL"; return; fi
  case "$URL" in *\?*) echo "$URL&state=$1" ;; *) echo "$URL?state=$1" ;; esac
}

AXE='new Promise(r=>{const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js";s.onload=()=>axe.run(document,{runOnly:["wcag2a","wcag2aa","wcag21aa","best-practice"]}).then(x=>r(JSON.stringify(x.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,help:v.help})))));document.head.appendChild(s);})'
METRICS='JSON.stringify({scrollW:document.documentElement.scrollWidth,clientW:document.documentElement.clientWidth,hOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,infiniteAnims:document.getAnimations().filter(a=>a.effect&&a.effect.getTiming().iterations===Infinity).length,runningAnims:document.getAnimations().length,reducedMotionRefs:(document.documentElement.outerHTML.match(/prefers-reduced-motion/g)||[]).length})'

shoot() {
  local url=$1 name=$2 w=$3 h=$4
  ab set viewport "$w" "$h" >/dev/null
  ab open "$url" >/dev/null
  ab wait 2500 >/dev/null
  ab screenshot "$OUT/$name-$w.png" >/dev/null
  ab screenshot --full "$OUT/$name-$w-full.png" >/dev/null
  echo "{\"shot\":\"$name-$w\",\"metrics\":$(ab eval "$METRICS")}" >> "$OUT/metrics.jsonl"
}

[ ${#STATES[@]} -eq 0 ] && STATES=("")

for st in "${STATES[@]}"; do
  name=${st:-page}
  u=$(with_state "$st")
  shoot "$u" "$name" 1440 900
  shoot "$u" "$name" 390 844
  ab set viewport 1440 900 >/dev/null
  ab open "$u" >/dev/null
  ab wait 2000 >/dev/null
  echo "{\"axe\":\"$name\",\"violations\":$(ab eval "$AXE")}" >> "$OUT/metrics.jsonl"
done

first=$(with_state "${STATES[0]}")
ab set viewport 1440 900 >/dev/null
ab open "$first" >/dev/null
ab wait 2000 >/dev/null
for _ in 1 2 3 4; do ab press Tab >/dev/null; done
ab screenshot "$OUT/focus-1440.png" >/dev/null

ab set media reduced-motion >/dev/null
ab open "$first" >/dev/null
ab wait 1500 >/dev/null
echo "{\"reducedMotion\":true,\"metrics\":$(ab eval "$METRICS")}" >> "$OUT/metrics.jsonl"

agent-browser --session "$SESSION" close >/dev/null 2>&1
