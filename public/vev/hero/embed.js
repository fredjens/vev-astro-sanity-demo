function v(e,i){return e=new URL(e,import.meta.url).toString(),document.head!==i&&e.endsWith("shared.css")&&v(e,document.head),new Promise(a=>{const n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=()=>a(),i.appendChild(n)})}function m(){let e;const i=new Promise(n=>e=n),a=window.__vevEmbedQueue||(window.__vevEmbedQueue=[]);return a.push(i),()=>(e(),console.log(window.__vevEmbedQueue,a),Promise.all(a))}export async function init({target:e,shadow:i,vars:a}){const n=m(),s={"i-JZiYWYXa7J":{type:"image",value:{key:"Wrfm23jdX5s",src:"https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=1280/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",meta:{description:"3D Render"},srcset:[["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=320/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",320],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=640/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",640],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=960/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",960],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=1280/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",1280],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=2560/private/bMr1QSeVx7Yd4NBjyWjU75yXzVn2/image/Wrfm23jdX5s",2560]]}},"t-4RyfGtGYj2":{type:"text",value:"Hero Title"},"t-hd1jsFgPV5":{type:"text",value:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at elementum urna, in auctor sapien. "},"t-DzxChO2qSm":{type:"text",value:"Click me"}};a&&Object.assign(s,a);let t=e?document.getElementById(e)||document.querySelector(e):document.createElement("div");if(t.tagName==="SCRIPT"){const d=document.createElement("div");t.after(d),t=d}for(const d in s)s[d].type=="color"&&t.style.setProperty("--vev-"+d,s[d].value);if(!t)throw new Error("No target found");t.style.display="none",i&&t.attachShadow({mode:"open"});const c=t.shadowRoot||t;i&&(self.vevRoot=c),c.innerHTML=`<div data-path="6A5lyRJAZs/p8S9MxkirVE" class="vev p6A5lyRJAZs"><main><div id="ebXMIWI6IPJ" class="__v __c __sc section"><div id="e2rbHVpQxti" class="__v"><div id="e2rbHVpQxtic" class="__w image"><img src="${s["i-JZiYWYXa7J"].value?.src||""}" srcset="${s["i-JZiYWYXa7J"].value?.srcset?.map(d=>`${d[0]} ${d[1]}w`).join(",")||""}" alt="${s["i-JZiYWYXa7J"].value?.meta?.description||""}"/></div></div><div id="ewnkXDtEjat" class="__v __c frame"></div><div id="exdCoHrx_OU" class="__v __c frame"><div id="e2K29OTcNnl" class="__v __c frame"><div id="eW7-4fvMljq" class="__v"><div id="eW7-4fvMljqc" class="__w text"><h1>${s["t-4RyfGtGYj2"].value}</h1></div></div><div id="eXORuyPe0qC" class="__v"><div id="eXORuyPe0qCc" class="__w text"><p>${s["t-hd1jsFgPV5"].value}</p></div></div></div><div id="e4OgycmTvsc" class="__v __c frame"><div tabindex="0" role="button" id="eLXP2unFjMF" class="__v __c frame"><div id="emJjNkRX_XY" class="__v"><div id="emJjNkRX_XYc" class="__w text"><h2>${s["t-DzxChO2qSm"].value}</h2></div></div></div></div></div></div></main></div>`,e||document.body.appendChild(t),await Promise.all([v("../assets/vev.css",i?c:document.head),v("../assets/shared.css",i?c:document.head),v("../assets/7f529b9295099825.css",i?c:document.head),import("../assets/f0a3e777f8f8b7b1.js")]),await n(),t.style.display=null}const r=new URL(import.meta.url),o=r.searchParams.get("target"),l=r.searchParams.has("shadow");o&&init({target:o,shadow:l});
