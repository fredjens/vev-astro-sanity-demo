function o(e,i){return e=new URL(e,import.meta.url).toString(),document.head!==i&&e.endsWith("shared.css")&&o(e,document.head),new Promise(u=>{const s=document.createElement("link");s.rel="stylesheet",s.href=e,s.onload=()=>u(),i.appendChild(s)})}function d(){let e;const i=new Promise(s=>e=s),u=window.__vevEmbedQueue||(window.__vevEmbedQueue=[]);return u.push(i),()=>(e(),console.log(window.__vevEmbedQueue,u),Promise.all(u))}export async function init({target:e,shadow:i,vars:u}){const s=d(),a={"t-u3bN5pn-37":{type:"text",value:"Rich text title"},"t-hwRbSuZX71":{type:"text",value:"<p> Mauris iaculis consectetur aliquet. Duis tortor sem, pulvinar eget faucibus sed, dictum ac ligula.  Pellentesque laoreet enim vel tincidunt auctor. Praesent rutrum pulvinar metus, et tempor nibh euismod accumsan.  </p><p> Proin semper, sapien a accumsan vestibulum, dui sapien consequat nulla, at luctus nunc neque commodo tortor. Donec mattis  vitae justo ac consequat. Nam turpis urna, venenatis et justo nec, fringilla lobortis odio. Cras viverra tempus arcu eget  viverra. Vestibulum gravida turpis sed sem sollicitudin, ut vestibulum enim pretium. Vestibulum a turpis non erat  fringilla cursus non vitae neque. Ut ut gravida velit. Nunc quis faucibus velit. </p><p>  <h2>Rich text</h2> Nulla dapibus pharetra ipsum, a congue nulla imperdiet eu. Proin semper, sapien a accumsan vestibulum, dui sapien consequat nulla, at luctus nunc neque commodo tortor. Donec mattis  vitae justo ac consequat. Nam turpis urna, venenatis et justo nec, fringilla lobortis odio. Cras viverra tempus arcu eget  viverra. Vestibulum gravida turpis sed sem sollicitudin, ut vestibulum enim pretium. Vestibulum a turpis non erat  fringilla cursus non vitae neque. Ut ut gravida velit. Nunc quis faucibus velit. </p><p>   Fringilla lobortis odio. Cras viverra tempus arcu eget  viverra. Vestibulum gravida turpis sed sem sollicitudin, ut vestibulum enim pretium. Vestibulum a turpis non erat  fringilla cursus non vitae neque. Ut ut gravida velit. Nunc quis faucibus velit. </p>"}};u&&Object.assign(a,u);let t=e?document.getElementById(e)||document.querySelector(e):document.createElement("div");if(t.tagName==="SCRIPT"){const n=document.createElement("div");t.after(n),t=n}for(const n in a)a[n].type=="color"&&t.style.setProperty("--vev-"+n,a[n].value);if(!t)throw new Error("No target found");t.style.display="none",i&&t.attachShadow({mode:"open"});const r=t.shadowRoot||t;i&&(self.vevRoot=r),r.innerHTML=`<div data-path="6A5lyRJAZs/pBAE6KOf6qq" class="vev p6A5lyRJAZs"><main><div id="eo3jSKLXn4D" class="__v __c __sc section"><div id="e1Nm9EU2azD" class="__v __c frame"><div id="ebZ0ewXq8r-" class="__v"><div id="ebZ0ewXq8r-c" class="__w text"><h2>${a["t-u3bN5pn-37"].value}</h2></div></div><div id="eU8zQE_Yjui" class="__v"><div id="eU8zQE_Yjuic" class="__w text"><div>${a["t-hwRbSuZX71"].value}</div></div></div></div></div></main></div>`,e||document.body.appendChild(t),await Promise.all([o("../assets/vev.css",i?r:document.head),o("../assets/shared.css",i?r:document.head),o("../assets/183d182c5b8df054.css",i?r:document.head)]),await s(),t.style.display=null}const c=new URL(import.meta.url),l=c.searchParams.get("target"),v=c.searchParams.has("shadow");l&&init({target:l,shadow:v});
