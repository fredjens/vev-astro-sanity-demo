function o(i,c){return i=new URL(i,import.meta.url).toString(),document.head!==c&&i.endsWith("shared.css")&&o(i,document.head),new Promise(n=>{const e=document.createElement("link");e.rel="stylesheet",e.href=i,e.onload=()=>n(),c.appendChild(e)})}export async function init({target:i,shadow:c,vars:n}){const e={"i-gU3M_iqVaZ":{type:"image",value:{key:"background-cgi-computer-art-7275953",src:"https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=1280/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",meta:{description:"background, cgi, computer art"},srcset:[["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=320/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",320],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=640/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",640],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=960/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",960],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=1280/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",1280],["https://cdn.vev.design/cdn-cgi/image/f=auto,q=82,w=2560/private/sSh27nYTPBc9oijoH3onf2eolMH2/image/background-cgi-computer-art-7275953",2560]]}},"t-ZtEL6BClv1":{type:"text",value:"Image Right title"},"t-BO6UhgLq6N":{type:"text",value:"Mauris iaculis consectetur aliquet. Duis tortor sem, pulvinar eget faucibus sed, dictum ac ligula.  Pellentesque laoreet enim vel tincidunt auctor. Praesent rutrum pulvinar metus, et tempor nibh euismod accumsan.  Proin semper, sapien a accumsan vestibulum, dui sapien consequat nulla, at luctus nunc neque commodo tortor."}};n&&Object.assign(e,n);let t=i?document.getElementById(i)||document.querySelector(i):document.createElement("div");if(t.tagName==="SCRIPT"){const a=document.createElement("div");t.after(a),t=a}for(const a in e)e[a].type=="color"&&t.style.setProperty("--vev-"+a,e[a].value);if(!t)throw new Error("No target found");t.style.display="none",c&&t.attachShadow({mode:"open"});const s=t.shadowRoot||t;c&&(self.vevRoot=s),s.innerHTML=`<div data-path="6A5lyRJAZs/poszfFeLg7f" class="vev p6A5lyRJAZs"><main><div id="eXCobVVb9UO" class="__v __c __sc section"><div id="euV6emJFXJS" class="__v"><div id="euV6emJFXJSc" class="__w image"><img src="${e["i-gU3M_iqVaZ"].value?.src||""}" srcset="${e["i-gU3M_iqVaZ"].value?.srcset?.map(a=>`${a[0]} ${a[1]}w`).join(",")||""}" alt="${e["i-gU3M_iqVaZ"].value?.meta?.description||""}"/></div></div><div id="ezM84ynz5W9" class="__v __c frame"><div id="eu53qhXjwzi" class="__v"><div id="eu53qhXjwzic" class="__w text"><h2>${e["t-ZtEL6BClv1"].value}</h2></div></div><div id="edZNB52GczE" class="__v"><div id="edZNB52GczEc" class="__w text"><p>${e["t-BO6UhgLq6N"].value}</p></div></div></div></div></main></div>`,i||document.body.appendChild(t),await Promise.all([o("../assets/vev.css",c?s:document.head),o("../assets/shared.css",c?s:document.head),o("../assets/4a14e3f589918c74.css",c?s:document.head)]),t.style.display=null}const d=new URL(import.meta.url),r=d.searchParams.get("target"),u=d.searchParams.has("shadow");r&&init({target:r,shadow:u});
