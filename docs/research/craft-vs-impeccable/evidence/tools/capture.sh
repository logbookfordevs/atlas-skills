#!/bin/bash
# usage: capture.sh <run-dir> <out-dir> <landing|app>
RUN=$1; OUT=$2; KIND=$3; S="--session cap$$"
mkdir -p "$OUT"
ab() { agent-browser $S "$@" 2>/dev/null; }
AXE='new Promise(r=>{const s=document.createElement("script");s.src="https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js";s.onload=()=>axe.run(document,{runOnly:["wcag2a","wcag2aa","wcag21aa","best-practice"]}).then(x=>r(JSON.stringify(x.violations.map(v=>({id:v.id,impact:v.impact,n:v.nodes.length,help:v.help})))));document.head.appendChild(s);})'
METRICS='JSON.stringify({scrollW:document.documentElement.scrollWidth,clientW:document.documentElement.clientWidth,hOverflow:document.documentElement.scrollWidth>document.documentElement.clientWidth,infiniteAnims:document.getAnimations().filter(a=>a.effect&&a.effect.getTiming().iterations===Infinity).length,runningAnims:document.getAnimations().length,rmQueries:[...document.styleSheets].flatMap(s=>{try{return [...s.cssRules]}catch(e){return []}}).filter(r=>r.media&&/reduced-motion/.test(r.media.mediaText)).length + (document.documentElement.outerHTML.match(/prefers-reduced-motion/g)||[]).length})'
shoot() { # url name w h
  ab set viewport $3 $4; ab open "$1"; ab wait 2500
  ab screenshot "$OUT/$2-$3.png"; ab screenshot --full "$OUT/$2-$3-full.png"
  echo "{\"shot\":\"$2-$3\",\"metrics\":$(ab eval "$METRICS")}" >> "$OUT/metrics.jsonl"
}
U="file://$RUN/index.html"
if [ "$KIND" = landing ]; then
  shoot "$U" page 1440 900; shoot "$U" page 390 844
  ab set viewport 1440 900; ab open "$U"; ab wait 2000
  for i in 1 2 3; do ab press Tab; done; ab screenshot "$OUT/focus-tab3-1440.png"
  echo "{\"axe\":\"page\",\"violations\":$(ab eval "$AXE")}" >> "$OUT/metrics.jsonl"
  ab set media reduced-motion; ab open "$U"; ab wait 1500
  echo "{\"reducedMotion\":true,\"metrics\":$(ab eval "$METRICS")}" >> "$OUT/metrics.jsonl"
else
  for st in ready empty loading error; do shoot "$U?state=$st" $st 1440 900; done
  shoot "$U?state=ready" ready 390 844; shoot "$U?state=error" error 390 844
  for st in ready empty loading error; do ab set viewport 1440 900; ab open "$U?state=$st"; ab wait 2000
    echo "{\"axe\":\"$st\",\"violations\":$(ab eval "$AXE")}" >> "$OUT/metrics.jsonl"; done
  ab open "$U?state=ready"; ab wait 2000; for i in 1 2 3 4; do ab press Tab; done; ab screenshot "$OUT/focus-tab4-1440.png"
  ab set media reduced-motion; ab open "$U?state=ready"; ab wait 1500
  echo "{\"reducedMotion\":true,\"metrics\":$(ab eval "$METRICS")}" >> "$OUT/metrics.jsonl"
fi
agent-browser $S close >/dev/null 2>&1
