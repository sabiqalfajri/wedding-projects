(()=>{var K=(()=>{let n=null,t=null,e=0,r=0,s=!0,o=!1,a=null,u=()=>{e+=1},h=()=>`(${r}/${e}) [${parseInt(r/e*100).toFixed(0)}%]`;return{init:()=>{n=document.getElementById("progress-info"),t=document.getElementById("progress-bar"),n.classList.remove("d-none"),a=new Promise(I=>document.addEventListener("undangan.progress.invalid",I))},add:u,invalid:I=>{s&&!o&&(s=!1,t.style.backgroundColor="red",n.innerText=`Error loading ${I} ${h()}`,document.dispatchEvent(new Event("undangan.progress.invalid")))},complete:(I,S=!1)=>{s&&(r+=1,n.innerText=`Loading ${I} ${S?"skipped":"complete"} ${h()}`,t.style.width=Math.min(r/e*100,100).toString()+"%",r===e&&(o=!0,document.dispatchEvent(new Event("undangan.progress.done"))))},getAbort:()=>a}})();var X=(()=>{let n='<span class="spinner-border spinner-border-sm my-0 ms-0 me-1 p-0" style="height: 0.8rem; width: 0.8rem;"></span>',t=[["*",'<strong class="text-theme-auto">$1</strong>'],["_",'<em class="text-theme-auto">$1</em>'],["~",'<del class="text-theme-auto">$1</del>'],["```",'<code class="font-monospace text-theme-auto">$1</code>']],e=[{type:"Mobile",regex:/Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i},{type:"Tablet",regex:/iPad|Android(?!.*Mobile)|Tablet/i},{type:"Desktop",regex:/Windows NT|Macintosh|Linux/i}],r=[{name:"Chrome",regex:/Chrome|CriOS/i},{name:"Safari",regex:/Safari/i},{name:"Edge",regex:/Edg|Edge/i},{name:"Firefox",regex:/Firefox|FxiOS/i},{name:"Opera",regex:/Opera|OPR/i},{name:"Internet Explorer",regex:/MSIE|Trident/i},{name:"Samsung Browser",regex:/SamsungBrowser/i}],s=[{name:"Windows",regex:/Windows NT ([\d.]+)/i},{name:"MacOS",regex:/Mac OS X ([\d_.]+)/i},{name:"Android",regex:/Android ([\d.]+)/i},{name:"iOS",regex:/OS ([\d_]+) like Mac OS X/i},{name:"Linux",regex:/Linux/i},{name:"Ubuntu",regex:/Ubuntu/i},{name:"Chrome OS",regex:/CrOS/i}],o=N=>String(N).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),a=N=>{let V=x=>{window.alert(`${x} ${N}`)};return{success:()=>V("\u{1F7E9}"),error:()=>V("\u{1F7E5}"),warning:()=>V("\u{1F7E8}"),info:()=>V("\u{1F7E6}"),custom:x=>V(x)}},u=N=>window.confirm(`\u{1F7E6} ${N}`),h=(N,V)=>(N.replaceChildren(document.createRange().createContextualFragment(V)),N),d=(N,V,x=.05)=>new Promise(_=>{let p=parseFloat(N.style.opacity),g=V?1:0,E=()=>{if(p+=V?x:-x,p=Math.max(0,Math.min(1,p)),N.style.opacity=p.toFixed(2),!V){let T=parseFloat(N.dataset.y||0);T-=2,N.dataset.y=T,N.style.transform=`translateY(${T}px)`}V&&p>=g||!V&&p<=g?(N.style.opacity=g.toString(),_(N)):requestAnimationFrame(E)};requestAnimationFrame(E)}),m=(N,V=0)=>{let x=null;x=setTimeout(()=>{N(),clearTimeout(x),x=null},V)};return{loader:n,ask:u,copy:async(N,V=null,x=1500)=>{let _=N.getAttribute("data-copy");if(!_||_.length===0){a("Nothing to copy").warning();return}N.disabled=!0;try{await navigator.clipboard.writeText(_)}catch(g){console.error("Clipboard error:",g),N.disabled=!1,a("Failed to copy").error();return}let p=N.innerHTML;h(N,V||'<p class="fw-bold m-0"><i class="fa-solid fa-check"></i> Success</p>'),m(()=>{N.disabled=!1,N.innerHTML=p},x)},notify:a,timeOut:m,debounce:(N,V=100)=>{let x=null;return(..._)=>{clearTimeout(x),x=setTimeout(()=>N(..._),V)}},escapeHtml:o,base64Encode:N=>{let x=new TextEncoder().encode(N);return window.btoa(String.fromCharCode(...x))},base64Decode:N=>{let V=new TextDecoder,x=Uint8Array.from(window.atob(N),_=>_.charCodeAt(0));return V.decode(x)},disableButton:(N,V="Loading",x=!1)=>{N.disabled=!0;let _=N.innerHTML;return h(N,x?V:n+V),{restore:(p=!1)=>{N.innerHTML=_,N.disabled=p}}},disableCheckbox:N=>{N.disabled=!0;let V=document.querySelector(`label[for="${N.id}"]`),x=V.innerHTML;return h(V,n+x),{restore:()=>{V.innerHTML=x,N.disabled=!1}}},safeInnerHTML:h,parseUserAgent:N=>{if(!N||typeof N!="string")return"Unknown";let V=e.find(E=>E.regex.test(N))?.type??"Unknown",x=r.find(E=>E.regex.test(N))?.name??"Unknown",_=s.find(E=>E.regex.test(N)),p=_?_.name:"Unknown",g=_?N.match(_.regex)?.[1]?.replace(/_/g,".")??null:null;return`${x} ${V} ${g?`${p} ${g}`:p}`},changeOpacity:d,getGMTOffset:N=>{let V=new Date,x=new Intl.DateTimeFormat("en-US",{timeZone:N,hourCycle:"h23",hour:"numeric"}),_=(parseInt(x.format(V))-V.getUTCHours()+24)%24;return _>12&&(_-=24),`GMT${_>=0?"+":""}${_}`},convertMarkdownToHTML:N=>(t.forEach(([V,x])=>{N=N.replace(new RegExp(`\\${V}(\\S(?:[\\s\\S]*?\\S)?)\\${V}`,"g"),x)}),N)}})();var Nt="GET";var Gc="POST";var $c="AbortError",jd="TypeError",zc={Accept:"application/json","Content-Type":"application/json"},$d="request",zd=(()=>{let n=null;return{getInstance:()=>(n||(n=window.caches.open($d)),n),purge:()=>{n=null}}})();var On=n=>({set:(s,o,a,u)=>o.clone().arrayBuffer().then(h=>{if(!o.ok||!window.isSecureContext)return o;let d=new Date,m=new Headers(o.headers);if(m.has("Date")||m.set("Date",d.toUTCString()),a||!m.has("Cache-Control")){if(!a&&m.has("Expires")){let y=new Date(m.get("Expires"));u=Math.max(0,y.getTime()-d.getTime())}m.set("Cache-Control",`public, max-age=${Math.floor(u/1e3)}`)}return m.has("Content-Length")||m.set("Content-Length",String(h.byteLength)),n.put(s,new Response(h,{headers:m})).then(()=>o)}),has:s=>n.match(s).then(o=>{if(!o)return null;let a=o.headers.get("Cache-Control").match(/max-age=(\d+)/)[1],u=Date.parse(o.headers.get("Date"))+parseInt(a)*1e3;return Date.now()>u?null:o}),del:s=>n.delete(s)}),jt=(n,t)=>{let e=new AbortController,r={signal:e.signal,credential:"include",headers:new Headers(zc),method:String(n).toUpperCase()};window.addEventListener("offline",()=>e.abort(),{once:!0}),window.addEventListener("popstate",()=>e.abort(),{once:!0});let s=0,o=0,a=0,u=0,h=!1,d=null,m=null,y=null,v=S=>{let P=()=>{let L=()=>window.fetch(S,r).then(async O=>{if(!O.ok||!y)return O;let U=parseInt(O.headers.get("Content-Length")??0);if(U===0)return O;let N=[],V=0,x=O.body.getReader();for(;;){let{done:p,value:g}=await x.read();if(p)break;N.push(g),V+=g.length,await y(V,U,window.structuredClone?window.structuredClone(N):N)}let _=O.headers.get("Content-Type")??"application/octet-stream";return new Response(new Blob(N,{type:_}),{status:O.status,statusText:O.statusText,headers:new Headers(O.headers)})});return s===0||!window.isSecureContext?L():r.method!==Nt?(console.warn("Only method GET can be cached"),L()):zd.getInstance().then(On).then(O=>O.has(S).then(U=>U?Promise.resolve(U):O.del(S).then(L).then(N=>O.set(S,N,h,s))))};if(o===0&&a===0)return P();let R=async()=>{try{return await P()}catch(L){if(L.name===$c)throw L;if(a*=2,u++,u>o)throw new Error(`Max retries reached: ${L}`);return console.warn(`Retrying fetch (${u}/${o}): ${S.toString()}`),await new Promise(O=>window.setTimeout(O,a)),R()}};return R()},I=S=>{if(S.status!==200)return S;let P=document.querySelector("a[download]");P&&document.body.removeChild(P);let R=S.headers.get("Content-Disposition")?.match(/filename="(.+)"/)?.[1];return S.clone().blob().then(L=>{let O=document.createElement("a"),U=window.URL.createObjectURL(L);return O.href=U,O.download=R||`${m}.${d||(L.type.split("/")?.[1]??"bin")}`,document.body.appendChild(O),O.click(),document.body.removeChild(O),window.URL.revokeObjectURL(U),S})};return{send(S=null){return m&&Object.keys(zc).forEach(P=>r.headers.delete(P)),v(new URL(t,document.body.getAttribute("data-url"))).then(P=>m&&P.ok?{code:P.status,data:I(P),error:null}:P.json().then(R=>{if(R.error){let L=R.error.at(0),O=P.status>=500;throw new Error(O?`ID: ${R.id}
\u{1F7E5} ${L}`:`\u{1F7E8} ${L}`)}return S&&(R.data=S(R.data)),Object.assign(R,{code:P.status})})).catch(P=>{if(P.name===$c)return console.warn("Fetch aborted:",P),P;throw P.name===jd&&(P=new Error("\u{1F7E5} Network error or rate limit exceeded")),alert(P.message??String(P)),P})},withCache(S=1e3*60*60*6){return s=S,this},withForceCache(){return h=!0,this},withRetry(S=3,P=1e3){return o=S,a=P,this},withCancel(S){return S==null?this:((async()=>(await S,e.abort()))(),this)},withDownload(S,P=null){return m=S,d=P,this},withProgressFunc(S=null){return y=S,this},default(S=null){return r.headers=new Headers(S??{}),v(t).then(P=>m?I(P):P)},token(S){return S.split(".").length===3?(r.headers.append("Authorization","Bearer "+S),this):(r.headers.append("x-access-key",S),this)},body(S){if(r.method===Nt)throw new Error("GET method does not support body");return r.body=JSON.stringify(S),this}}};var Gd=(()=>{let n=null;return{getInstance:t=>(n||(n=new Map),n.has(t)||n.set(t,window.caches.open(t)),n.get(t))}})(),ie=n=>{let t=new Map,e=new Map,r=null,s=1e3*60*60*6,o=!1,a=async()=>(!r&&window.isSecureContext&&(r=await Gd.getInstance(n)),r),u=(I,S)=>a().then(On).then(P=>{if(!S.ok)throw new Error(S.statusText);return P.set(I,S,o,s)}),h=I=>a().then(On).then(S=>S.has(I)),d=I=>a().then(On).then(S=>S.del(I)),m=(I,S=null)=>{if(t.has(I))return Promise.resolve(t.get(I));if(e.has(I))return e.get(I);let P=()=>jt(Nt,I).withCancel(S).withRetry().default(),R=a().then(()=>window.isSecureContext?h(I).then(L=>L?Promise.resolve(L):d(I).then(P).then(O=>u(I,O))):P()).then(L=>L.blob()).then(L=>t.set(I,URL.createObjectURL(L))).then(()=>t.get(I)).finally(()=>e.delete(I));return e.set(I,R),R};return{run:(I,S=null)=>a().then(()=>{let P=new Map;return window.isSecureContext||console.warn("Cache is not supported in insecure context"),I.filter(R=>R!==null).forEach(R=>{let L=P.get(R.url)??[];P.set(R.url,[...L,[R.res,R?.rej]])}),Promise.allSettled(Array.from(P).map(([R,L])=>m(R,S).then(O=>(L.forEach(U=>U[0]?.(O)),O)).catch(O=>(L.forEach(U=>U[1]?.(O)),O))))}),del:d,has:h,set:u,get:m,open:a,download:async(I,S)=>{if(!new Map(Array.from(t.entries()).map(([R,L])=>[L,R])).has(I))try{if(!new URL(I).protocol.includes("blob"))throw new Error("Is not blob")}catch{I=await m(I)}return jt(Nt,I).withDownload(S).default()},setTtl(I){return s=Number(I),this},withForceCache(){return o=!0,this}}};var Kc=(()=>{let n=null,t=()=>{let r=document.getElementById("video-love-stroy");if(!r||!r.hasAttribute("data-src"))return r?.remove(),K.complete("video",!0),Promise.resolve();let s=r.getAttribute("data-src");if(!s)return K.complete("video",!0),Promise.resolve();let o=document.createElement("video");o.className=r.getAttribute("data-vid-class"),o.loop=!0,o.muted=!0,o.controls=!0,o.autoplay=!1,o.playsInline=!0,o.preload="metadata",o.disableRemotePlayback=!0,o.disablePictureInPicture=!0,o.controlsList="noremoteplayback nodownload noplaybackrate";let a=new IntersectionObserver(d=>d.forEach(m=>m.isIntersecting?o.play():o.pause())),u=d=>(o.addEventListener("loadedmetadata",()=>{o.style.removeProperty("height"),document.getElementById("video-love-stroy-loading")?.remove()},{once:!0}),d.clone().blob().then(m=>(o.src=URL.createObjectURL(m),d))),h=()=>{let d=document.getElementById("progress-bar-video-love-stroy"),m=document.getElementById("progress-info-video-love-stroy");return jt(Nt,s).withCancel(new Promise(y=>o.addEventListener("undangan.video.prefetch",y,{once:!0}))).default({Range:"bytes=0-1"}).then(y=>{if(o.dispatchEvent(new Event("undangan.video.prefetch")),y.status===200)return o.preload="none",o.src=X.escapeHtml(s),r.appendChild(o),Promise.resolve();if(y.status!==206)throw new Error("failed to fetch video");o.addEventListener("error",()=>K.invalid("video"),{once:!0});let v=new Promise(I=>o.addEventListener("loadedmetadata",I,{once:!0}));return o.src=X.escapeHtml(s),r.appendChild(o),v}).then(()=>{K.complete("video");let y=o.getBoundingClientRect().width*(o.videoHeight/o.videoWidth);return o.style.height=`${y}px`,jt(Nt,o.src).withProgressFunc((v,I)=>{let S=Number(v/I*100).toFixed(0)+"%";d.style.width=S,m.innerText=S}).withRetry().default().then(u).catch(v=>{d.style.backgroundColor="red",m.innerText="Error loading video",console.error(v)}).finally(()=>a.observe(o))})};return window.isSecureContext?n.has(s).then(d=>d?(K.complete("video"),u(d).finally(()=>{r.appendChild(o),a.observe(o)})):n.del(s).then(h).then(m=>n.set(s,m))):h()};return{init:()=>(K.add(),n=ie("video").withForceCache(),{load:t})}})();var Hc=(()=>{let n=null,t=null,e=!1,r=[],s=v=>new Promise((I,S)=>{let P=new Image;P.onload=()=>I(P),P.onerror=S,P.src=v}),o=(v,I)=>new Promise((S,P)=>{let R=new Image;R.src=I,R.onload=()=>{R.decode?R.decode().then(()=>{v.width=R.naturalWidth,v.height=R.naturalHeight,v.src=R.src,K.complete("image"),S()}).catch(L=>{console.warn("decode gagal, fallback ke onload biasa",L),v.width=R.naturalWidth,v.height=R.naturalHeight,v.src=R.src,K.complete("image"),S()}):(v.width=R.naturalWidth,v.height=R.naturalHeight,v.src=R.src,K.complete("image"),S())},R.onerror=L=>{console.error("Image load error:",L),K.invalid("image"),P(L)}}),a=v=>{r.push({url:v.getAttribute("data-src"),res:I=>o(v,I),rej:I=>{console.error(I),K.invalid("image")}})},u=v=>{v.onerror=()=>K.invalid("image"),v.onload=()=>{v.width=v.naturalWidth,v.height=v.naturalHeight,K.complete("image")},v.complete&&v.naturalWidth!==0&&v.naturalHeight!==0?K.complete("image"):v.complete&&K.invalid("image")},h=()=>e,d=async()=>{let v=Array.from(n);v.filter(I=>I.getAttribute("data-fetch-img")!=="high").forEach(I=>{I.hasAttribute("data-src")?a(I):u(I)}),e&&(await t.open(),await Promise.allSettled(v.filter(I=>I.getAttribute("data-fetch-img")==="high").map(I=>t.get(I.getAttribute("data-src"),K.getAbort()).then(S=>o(I,S)).then(()=>I.classList.remove("opacity-0")))),await t.run(r,K.getAbort()))},m=v=>t.download(v,`image_${Date.now()}`);return{init:()=>(t=ie("image").withForceCache(),n=document.querySelectorAll("img"),n.forEach(K.add),e=Array.from(n).some(v=>v.hasAttribute("data-src")),{load:d,download:m,hasDataSrc:h})}})();var Wc=(()=>{let n='<i class="fa-solid fa-microphone-lines fa-2x spin-button"></i>',t='<i class="fa-solid fa-microphone-lines-slash fa-2x"></i>',e=async(s=!0)=>{let o=document.body.getAttribute("data-audio");if(!o){K.complete("audio",!0);return}let a=null;try{a=new Audio(await ie("audio").withForceCache().get(o,K.getAbort())),a.loop=!0,a.muted=!1,a.autoplay=!1,a.controls=!1,K.complete("audio")}catch{K.invalid("audio");return}let u=!1,h=document.getElementById("button-music"),d=async()=>{if(!(!navigator.onLine||!h)){h.disabled=!0;try{await a.play(),u=!0,h.disabled=!1,h.innerHTML=n}catch(y){u=!1,X.notify(y).error()}}},m=()=>{u=!1,a.pause(),h.innerHTML=t};document.addEventListener("undangan.open",()=>{h.classList.remove("d-none"),s&&d()}),h.addEventListener("offline",m),h.addEventListener("click",()=>u?m():d())};return{init:()=>(K.add(),{load:e})}})();var Qc={tab:e=>window.bootstrap.Tab.getOrCreateInstance(document.getElementById(e)),modal:e=>window.bootstrap.Modal.getOrCreateInstance(document.getElementById(e))};var Hd="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css",Wd="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js",Qd="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.js",Jd=n=>{let t=()=>n.get(Hd).then(r=>new Promise((s,o)=>{let a=document.createElement("link");a.onload=s,a.onerror=o,a.rel="stylesheet",a.href=r,document.head.appendChild(a)})),e=()=>n.get(Wd).then(r=>new Promise((s,o)=>{let a=document.createElement("script");a.onload=s,a.onerror=o,a.src=r,document.head.appendChild(a)}));return Promise.all([t(),e()]).then(()=>{if(typeof window.AOS>"u")throw new Error("AOS library failed to load");window.AOS.init()})},Xd=n=>n.get(Qd).then(t=>new Promise((e,r)=>{let s=document.createElement("script");s.onerror=r,s.onload=()=>{typeof window.confetti>"u"?r(new Error("Confetti library failed to load")):e()},s.src=t,document.head.appendChild(s)})),Jc=(n={})=>{let t=ie("libs");return t.open().then(()=>{let e=[];return(n?.aos??!0)&&e.push(Jd(t)),(n?.confetti??!0)&&e.push(Xd(t)),Promise.all(e)})};var bt=n=>{let t=(a=null)=>{let u=JSON.parse(localStorage.getItem(n));return a?u[String(a)]:u},e=(a,u)=>{let h=t();h[String(a)]=u,localStorage.setItem(n,JSON.stringify(h))},r=a=>Object.keys(t()).includes(String(a)),s=a=>{if(!r(a))return;let u=t();delete u[String(a)],localStorage.setItem(n,JSON.stringify(u))},o=()=>localStorage.setItem(n,"{}");return localStorage.getItem(n)||o(),{set:e,get:t,has:r,clear:o,unset:s}};var xr=(()=>{let n={"#000000":"#ffffff","#ffffff":"#000000","#212529":"#f8f9fa","#f8f9fa":"#212529"},t=["#ffffff","#f8f9fa"],e=["#000000","#212529"],r=!1,s=null,o=null,a=()=>s.set("active","light"),u=()=>s.set("active","dark"),h=R=>{let L=o.getAttribute("content");o.setAttribute("content",R.some(O=>O===L)?n[L]:L)},d=()=>{a(),document.documentElement.setAttribute("data-bs-theme","light"),h(e)},m=()=>{u(),document.documentElement.setAttribute("data-bs-theme","dark"),h(t)},y=(R=null,L=null)=>{let O=s.get("active")==="dark";return R&&L?O?R:L:O};return{init:()=>{switch(s=bt("theme"),o=document.querySelector('meta[name="theme-color"]'),s.has("active")||(window.matchMedia("(prefers-color-scheme: dark)").matches?u():a()),document.documentElement.getAttribute("data-bs-theme")){case"dark":u();break;case"light":a();break;default:r=!0}y()?m():d()},spyTop:()=>{let R=O=>O.filter(U=>U.isIntersecting).forEach(U=>{let N=U.target.classList.contains("bg-white-black")?y(e[0],t[0]):y(e[1],t[1]);o.setAttribute("content",N)}),L=new IntersectionObserver(R,{rootMargin:"0% 0% -95% 0%"});document.querySelectorAll("section").forEach(O=>L.observe(O))},change:()=>y()?d():m(),isDarkMode:y,isAutoMode:()=>r}})();var Xc=(()=>{let n={id:"ID",en:"US",fr:"FR",de:"DE",es:"ES",zh:"CN",ja:"JP",ko:"KR",ar:"SA",ru:"RU",it:"IT",nl:"NL",pt:"PT",tr:"TR",th:"TH",vi:"VN",ms:"MY",hi:"IN"},t=null,e=null,r=null,s=null;return{on(o,a){return s.set(o,a),this},get(){let o=s.get(r);return s.clear(),o},getCountry(){return t},getLocale(){return e},getLanguage(){return r},setDefault(o){let a=!0;n[o]||(a=!1,console.warn("Language not found, please add manually in countryMapping")),t=a?n[o]:"US",r=a?o:"en",e=`${r}_${t}`},init(){s=new Map,this.setDefault(navigator.language.split("-").shift())}}})();var Yc=(()=>{let n=({uuid:m,own:y,name:v,presence:I,comment:S,created_at:P,is_admin:R,is_parent:L,gif_url:O,ip:U,user_agent:N,comments:V,like_count:x})=>({uuid:m,own:y,name:v,presence:I,comment:S,created_at:P,is_admin:R??!1,is_parent:L,gif_url:O,ip:U,user_agent:N,comments:V?.map(n)??[],like_count:x??0}),t=m=>m.map(n);return{uuidResponse:({uuid:m})=>({uuid:m}),tokenResponse:({token:m})=>({token:m}),statusResponse:({status:m})=>({status:m}),getCommentResponse:n,getCommentsResponse:t,getCommentsResponseV2:m=>({count:m.count,lists:t(m.lists)}),commentShowMore:(m,y=!1)=>({uuid:m,show:y}),postCommentRequest:(m,y,v,I,S)=>({id:m,name:y,presence:v,comment:I,gif_id:S}),postSessionRequest:(m,y)=>({email:m,password:y}),updateCommentRequest:(m,y,v)=>({presence:m,comment:y,gif_id:v})}})();var Pr=(()=>{let n=null,t=()=>n.get("token"),e=d=>n.set("token",d),r=d=>jt(Gc,"/api/session").body(d).send(Yc.tokenResponse).then(m=>(m.code===200&&e(m.data.token),m.code===200)),s=()=>n.unset("token"),o=()=>String(t()??".").split(".").length===3;return{init:()=>{n=bt("session")},guest:d=>jt(Nt,"/api/v2/config").withCache(1e3*60*30).withForceCache().token(d).send().then(m=>{if(m.code!==200)throw new Error("failed to get config.");let y=bt("config");for(let[v,I]of Object.entries(m.data))y.set(v,I);return e(d),m}),login:r,logout:s,decode:()=>{if(!o())return null;try{return JSON.parse(X.base64Decode(t().split(".")[1]))}catch{return null}},isAdmin:o,setToken:e,getToken:t}})();var Zc=(()=>{let n=null,t=!0,e=["input[data-offline-disabled]","button[data-offline-disabled]","select[data-offline-disabled]","textarea[data-offline-disabled]"],r=()=>t,s=()=>{let y=n.firstElementChild.firstElementChild;y.classList.remove("bg-success"),y.classList.add("bg-danger"),y.firstElementChild.innerHTML='<i class="fa-solid fa-ban me-2"></i>Koneksi tidak tersedia'},o=()=>{let y=n.firstElementChild.firstElementChild;y.classList.remove("bg-danger"),y.classList.add("bg-success"),y.firstElementChild.innerHTML='<i class="fa-solid fa-cloud me-2"></i>Koneksi tersedia kembali'},a=async()=>{t&&(await X.changeOpacity(n,!1),s())},u=()=>{document.querySelectorAll(e.join(", ")).forEach(y=>{y.dispatchEvent(new Event(r()?"online":"offline")),y.setAttribute("data-offline-disabled",r()?"false":"true"),y.tagName==="BUTTON"?r()?y.classList.remove("disabled"):y.classList.add("disabled"):r()?y.removeAttribute("disabled"):y.setAttribute("disabled","true")})},h=()=>{t=!1,s(),X.changeOpacity(n,!0),u()},d=()=>{t=!0,o(),X.timeOut(a,3e3),u()};return{init:()=>{window.addEventListener("online",d),window.addEventListener("offline",h),n=document.createElement("div"),n.classList.add("fixed-top","pe-none"),n.style.cssText="opacity: 0; z-index: 1057;",n.innerHTML=`
        <div class="d-flex justify-content-center mx-auto">
            <div class="d-flex justify-content-center align-items-center rounded-pill my-2 bg-danger shadow">
                <small class="text-center py-1 px-2 mx-1 mt-1 mb-0 text-white" style="font-size: 0.8rem;"></small>
            </div>
        </div>`,document.body.insertBefore(n,document.body.lastChild)},isOnline:r}})();var tu=()=>{};var ru=function(n){let t=[],e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Yd=function(n){let t=[],e=0,r=0;for(;e<n.length;){let s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){let o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){let o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{let o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},su={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){let o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,y=(o&3)<<4|u>>4,v=(u&15)<<2|d>>6,I=d&63;h||(I=64,a||(v=64)),r.push(e[m],e[y],e[v],e[I])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ru(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Yd(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();let e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){let o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;let d=s<n.length?e[n.charAt(s)]:64;++s;let y=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new ei;let v=o<<2|u>>4;if(r.push(v),d!==64){let I=u<<4&240|d>>2;if(r.push(I),y!==64){let S=d<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ei=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Zd=function(n){let t=ru(n);return su.encodeByteArray(t,!0)},Fn=function(n){return Zd(n).replace(/\./g,"")},iu=function(n){try{return su.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ou(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var tf=()=>ou().__FIREBASE_DEFAULTS__,ef=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},nf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=n&&iu(n[1]);return t&&JSON.parse(t)},ni=()=>{try{return tu()||tf()||ef()||nf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},rf=n=>{var t,e;return(e=(t=ni())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},au=n=>{let t=rf(n);if(!t)return;let e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ri=()=>{var n;return(n=ni())===null||n===void 0?void 0:n.config};var Dr=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}};function Vr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cu(n){return(await fetch(n,{credentials:"include"})).ok}function uu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fn(JSON.stringify(e)),Fn(JSON.stringify(a)),""].join(".")}var Mn={};function sf(){let n={prod:[],emulator:[]};for(let t of Object.keys(Mn))Mn[t]?n.emulator.push(t):n.prod.push(t);return n}function of(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}var eu=!1;function lu(n,t){if(typeof window>"u"||typeof document>"u"||!Vr(window.location.host)||Mn[n]===t||Mn[n]||eu)return;Mn[n]=t;function e(v){return`__firebase__banner__${v}`}let r="__firebase__banner",o=sf().prod.length>0;function a(){let v=document.getElementById(r);v&&v.remove()}function u(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function h(v,I){v.setAttribute("width","24"),v.setAttribute("id",I),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){let v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{eu=!0,a()},v}function m(v,I){v.setAttribute("id",I),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function y(){let v=of(r),I=e("text"),S=document.getElementById(I)||document.createElement("span"),P=e("learnmore"),R=document.getElementById(P)||document.createElement("a"),L=e("preprendIcon"),O=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){let U=v.element;u(U),m(R,P);let N=d();h(O,L),U.append(O,S,R,N),document.body.appendChild(U)}o?(S.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}function hu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){var n;let t=(n=ni())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function du(){return!af()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function si(){try{return typeof indexedDB=="object"}catch{return!1}}function fu(){return new Promise((n,t)=>{try{let e=!0,r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}var cf="FirebaseError",$t=class n extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=cf,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bn.prototype.create)}},Bn=class{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){let r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?uf(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new $t(s,u,r)}};function uf(n,t){return n.replace(lf,(e,r)=>{let s=t[r];return s!=null?String(s):`<${r}?>`})}var lf=/\{\$([^}]+)}/g;function ze(n,t){if(n===t)return!0;let e=Object.keys(n),r=Object.keys(t);for(let s of e){if(!r.includes(s))return!1;let o=n[s],a=t[s];if(nu(o)&&nu(a)){if(!ze(o,a))return!1}else if(o!==a)return!1}for(let s of r)if(!e.includes(s))return!1;return!0}function nu(n){return n!==null&&typeof n=="object"}var iy=4*60*60*1e3;function oe(n){return n&&n._delegate?n._delegate:n}var zt=class{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var Ie="[DEFAULT]";var ii=class{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let r=new Dr;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{let s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(df(t))try{this.getOrInitializeService({instanceIdentifier:Ie})}catch{}for(let[e,r]of this.instancesDeferred.entries()){let s=this.normalizeInstanceIdentifier(e);try{let o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Ie){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ie){return this.instances.has(t)}getOptions(t=Ie){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(let[o,a]of this.instancesDeferred.entries()){let u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;let s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);let a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){let r=this.onInitCallbacks.get(e);if(r)for(let s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hf(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ie){return this.component?this.component.multipleInstances?t:Ie:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function hf(n){return n===Ie?void 0:n}function df(n){return n.instantiationMode==="EAGER"}var Nr=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new ii(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}};var ff=[],W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));var mf={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},pf=W.INFO,gf={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},yf=(n,t,...e)=>{if(t<n.logLevel)return;let r=new Date().toISOString(),s=gf[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Ge=class{constructor(t){this.name=t,this._logLevel=pf,this._logHandler=yf,this._userLogHandler=null,ff.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in W))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?mf[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...t),this._logHandler(this,W.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...t),this._logHandler(this,W.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,W.INFO,...t),this._logHandler(this,W.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,W.WARN,...t),this._logHandler(this,W.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...t),this._logHandler(this,W.ERROR,...t)}};var _f=(n,t)=>t.some(e=>n instanceof e),mu,pu;function wf(){return mu||(mu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vf(){return pu||(pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var gu=new WeakMap,ai=new WeakMap,yu=new WeakMap,oi=new WeakMap,ui=new WeakMap;function Ef(n){let t=new Promise((e,r)=>{let s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(kt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&gu.set(e,n)}).catch(()=>{}),ui.set(t,n),t}function Tf(n){if(ai.has(n))return;let t=new Promise((e,r)=>{let s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ai.set(n,t)}var ci={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ai.get(n);if(t==="objectStoreNames")return n.objectStoreNames||yu.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return kt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function _u(n){ci=n(ci)}function If(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){let r=n.call(kr(this),t,...e);return yu.set(r,t.sort?t.sort():[t]),kt(r)}:vf().includes(n)?function(...t){return n.apply(kr(this),t),kt(gu.get(this))}:function(...t){return kt(n.apply(kr(this),t))}}function bf(n){return typeof n=="function"?If(n):(n instanceof IDBTransaction&&Tf(n),_f(n,wf())?new Proxy(n,ci):n)}function kt(n){if(n instanceof IDBRequest)return Ef(n);if(oi.has(n))return oi.get(n);let t=bf(n);return t!==n&&(oi.set(n,t),ui.set(t,n)),t}var kr=n=>ui.get(n);function vu(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){let a=indexedDB.open(n,t),u=kt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(kt(a.result),h.oldVersion,h.newVersion,kt(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}var Af=["get","getKey","getAll","getAllKeys","count"],Sf=["put","add","delete","clear"],li=new Map;function wu(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(li.get(t))return li.get(t);let e=t.replace(/FromIndex$/,""),r=t!==e,s=Sf.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Af.includes(e)))return;let o=async function(a,...u){let h=this.transaction(a,s?"readwrite":"readonly"),d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return li.set(t,o),o}_u(n=>({...n,get:(t,e,r)=>wu(t,e)||n.get(t,e,r),has:(t,e)=>!!wu(t,e)||n.has(t,e)}));var di=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Cf(e)){let r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}};function Cf(n){let t=n.getComponent();return t?.type==="VERSION"}var fi="@firebase/app",Eu="0.13.2";var Gt=new Ge("@firebase/app"),Rf="@firebase/app-compat",xf="@firebase/analytics-compat",Pf="@firebase/analytics",Df="@firebase/app-check-compat",Vf="@firebase/app-check",Nf="@firebase/auth",kf="@firebase/auth-compat",Of="@firebase/database",Lf="@firebase/data-connect",Mf="@firebase/database-compat",Ff="@firebase/functions",Bf="@firebase/functions-compat",Uf="@firebase/installations",qf="@firebase/installations-compat",jf="@firebase/messaging",$f="@firebase/messaging-compat",zf="@firebase/performance",Gf="@firebase/performance-compat",Kf="@firebase/remote-config",Hf="@firebase/remote-config-compat",Wf="@firebase/storage",Qf="@firebase/storage-compat",Jf="@firebase/firestore",Xf="@firebase/ai",Yf="@firebase/firestore-compat",Zf="firebase",tm="11.10.0";var mi="[DEFAULT]",em={[fi]:"fire-core",[Rf]:"fire-core-compat",[Pf]:"fire-analytics",[xf]:"fire-analytics-compat",[Vf]:"fire-app-check",[Df]:"fire-app-check-compat",[Nf]:"fire-auth",[kf]:"fire-auth-compat",[Of]:"fire-rtdb",[Lf]:"fire-data-connect",[Mf]:"fire-rtdb-compat",[Ff]:"fire-fn",[Bf]:"fire-fn-compat",[Uf]:"fire-iid",[qf]:"fire-iid-compat",[jf]:"fire-fcm",[$f]:"fire-fcm-compat",[zf]:"fire-perf",[Gf]:"fire-perf-compat",[Kf]:"fire-rc",[Hf]:"fire-rc-compat",[Wf]:"fire-gcs",[Qf]:"fire-gcs-compat",[Jf]:"fire-fst",[Yf]:"fire-fst-compat",[Xf]:"fire-vertex","fire-js":"fire-js",[Zf]:"fire-js-all"};var Or=new Map,nm=new Map,pi=new Map;function Tu(n,t){try{n.container.addComponent(t)}catch(e){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Un(n){let t=n.name;if(pi.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;pi.set(t,n);for(let e of Or.values())Tu(e,n);for(let e of nm.values())Tu(e,n);return!0}function Su(n,t){let e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Cu(n){return n==null?!1:n.settings!==void 0}var rm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ae=new Bn("app","Firebase",rm);var gi=class{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw ae.create("app-deleted",{appName:this._name})}};var Ru=tm;function wi(n,t={}){let e=n;typeof t!="object"&&(t={name:t});let r=Object.assign({name:mi,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw ae.create("bad-app-name",{appName:String(s)});if(e||(e=ri()),!e)throw ae.create("no-options");let o=Or.get(s);if(o){if(ze(e,o.options)&&ze(r,o.config))return o;throw ae.create("duplicate-app",{appName:s})}let a=new Nr(s);for(let h of pi.values())a.addComponent(h);let u=new gi(e,r,a);return Or.set(s,u),u}function xu(n=mi){let t=Or.get(n);if(!t&&n===mi&&ri())return wi();if(!t)throw ae.create("no-app",{appName:n});return t}function ce(n,t,e){var r;let s=(r=em[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);let o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(u.join(" "));return}Un(new zt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}var sm="firebase-heartbeat-database",im=1,qn="firebase-heartbeat-store",hi=null;function Pu(){return hi||(hi=vu(sm,im,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(qn)}catch(e){console.warn(e)}}}}).catch(n=>{throw ae.create("idb-open",{originalErrorMessage:n.message})})),hi}async function om(n){try{let e=(await Pu()).transaction(qn),r=await e.objectStore(qn).get(Du(n));return await e.done,r}catch(t){if(t instanceof $t)Gt.warn(t.message);else{let e=ae.create("idb-get",{originalErrorMessage:t?.message});Gt.warn(e.message)}}}async function Iu(n,t){try{let r=(await Pu()).transaction(qn,"readwrite");await r.objectStore(qn).put(t,Du(n)),await r.done}catch(e){if(e instanceof $t)Gt.warn(e.message);else{let r=ae.create("idb-set",{originalErrorMessage:e?.message});Gt.warn(r.message)}}}function Du(n){return`${n.name}!${n.options.appId}`}var am=1024,cm=30,yi=class{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new _i(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{let s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bu();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>cm){let a=lm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Gt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=bu(),{heartbeatsToSend:r,unsentEntries:s}=um(this._heartbeatsCache.heartbeats),o=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Gt.warn(e),""}}};function bu(){return new Date().toISOString().substring(0,10)}function um(n,t=am){let e=[],r=n.slice();for(let s of n){let o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Au(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Au(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}var _i=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return si()?fu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let e=await om(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){let s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){let s=await this.read();return Iu(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}};function Au(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}function lm(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}function hm(n){Un(new zt("platform-logger",t=>new di(t),"PRIVATE")),Un(new zt("heartbeat",t=>new yi(t),"PRIVATE")),ce(fi,Eu,n),ce(fi,Eu,"esm2017"),ce("fire-js","")}hm("");var dm="firebase",fm="11.10.0";ce(dm,fm,"app");var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nu={};var Kt,vi;(function(){var n;function t(_,p){function g(){}g.prototype=p.prototype,_.D=p.prototype,_.prototype=new g,_.prototype.constructor=_,_.C=function(E,T,b){for(var w=Array(arguments.length-2),Vt=2;Vt<arguments.length;Vt++)w[Vt-2]=arguments[Vt];return p.prototype[T].apply(E,w)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(_,p,g){g||(g=0);var E=Array(16);if(typeof p=="string")for(var T=0;16>T;++T)E[T]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(T=0;16>T;++T)E[T]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=_.g[0],g=_.g[1],T=_.g[2];var b=_.g[3],w=p+(b^g&(T^b))+E[0]+3614090360&4294967295;p=g+(w<<7&4294967295|w>>>25),w=b+(T^p&(g^T))+E[1]+3905402710&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(g^b&(p^g))+E[2]+606105819&4294967295,T=b+(w<<17&4294967295|w>>>15),w=g+(p^T&(b^p))+E[3]+3250441966&4294967295,g=T+(w<<22&4294967295|w>>>10),w=p+(b^g&(T^b))+E[4]+4118548399&4294967295,p=g+(w<<7&4294967295|w>>>25),w=b+(T^p&(g^T))+E[5]+1200080426&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(g^b&(p^g))+E[6]+2821735955&4294967295,T=b+(w<<17&4294967295|w>>>15),w=g+(p^T&(b^p))+E[7]+4249261313&4294967295,g=T+(w<<22&4294967295|w>>>10),w=p+(b^g&(T^b))+E[8]+1770035416&4294967295,p=g+(w<<7&4294967295|w>>>25),w=b+(T^p&(g^T))+E[9]+2336552879&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(g^b&(p^g))+E[10]+4294925233&4294967295,T=b+(w<<17&4294967295|w>>>15),w=g+(p^T&(b^p))+E[11]+2304563134&4294967295,g=T+(w<<22&4294967295|w>>>10),w=p+(b^g&(T^b))+E[12]+1804603682&4294967295,p=g+(w<<7&4294967295|w>>>25),w=b+(T^p&(g^T))+E[13]+4254626195&4294967295,b=p+(w<<12&4294967295|w>>>20),w=T+(g^b&(p^g))+E[14]+2792965006&4294967295,T=b+(w<<17&4294967295|w>>>15),w=g+(p^T&(b^p))+E[15]+1236535329&4294967295,g=T+(w<<22&4294967295|w>>>10),w=p+(T^b&(g^T))+E[1]+4129170786&4294967295,p=g+(w<<5&4294967295|w>>>27),w=b+(g^T&(p^g))+E[6]+3225465664&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^g&(b^p))+E[11]+643717713&4294967295,T=b+(w<<14&4294967295|w>>>18),w=g+(b^p&(T^b))+E[0]+3921069994&4294967295,g=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(g^T))+E[5]+3593408605&4294967295,p=g+(w<<5&4294967295|w>>>27),w=b+(g^T&(p^g))+E[10]+38016083&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^g&(b^p))+E[15]+3634488961&4294967295,T=b+(w<<14&4294967295|w>>>18),w=g+(b^p&(T^b))+E[4]+3889429448&4294967295,g=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(g^T))+E[9]+568446438&4294967295,p=g+(w<<5&4294967295|w>>>27),w=b+(g^T&(p^g))+E[14]+3275163606&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^g&(b^p))+E[3]+4107603335&4294967295,T=b+(w<<14&4294967295|w>>>18),w=g+(b^p&(T^b))+E[8]+1163531501&4294967295,g=T+(w<<20&4294967295|w>>>12),w=p+(T^b&(g^T))+E[13]+2850285829&4294967295,p=g+(w<<5&4294967295|w>>>27),w=b+(g^T&(p^g))+E[2]+4243563512&4294967295,b=p+(w<<9&4294967295|w>>>23),w=T+(p^g&(b^p))+E[7]+1735328473&4294967295,T=b+(w<<14&4294967295|w>>>18),w=g+(b^p&(T^b))+E[12]+2368359562&4294967295,g=T+(w<<20&4294967295|w>>>12),w=p+(g^T^b)+E[5]+4294588738&4294967295,p=g+(w<<4&4294967295|w>>>28),w=b+(p^g^T)+E[8]+2272392833&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^g)+E[11]+1839030562&4294967295,T=b+(w<<16&4294967295|w>>>16),w=g+(T^b^p)+E[14]+4259657740&4294967295,g=T+(w<<23&4294967295|w>>>9),w=p+(g^T^b)+E[1]+2763975236&4294967295,p=g+(w<<4&4294967295|w>>>28),w=b+(p^g^T)+E[4]+1272893353&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^g)+E[7]+4139469664&4294967295,T=b+(w<<16&4294967295|w>>>16),w=g+(T^b^p)+E[10]+3200236656&4294967295,g=T+(w<<23&4294967295|w>>>9),w=p+(g^T^b)+E[13]+681279174&4294967295,p=g+(w<<4&4294967295|w>>>28),w=b+(p^g^T)+E[0]+3936430074&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^g)+E[3]+3572445317&4294967295,T=b+(w<<16&4294967295|w>>>16),w=g+(T^b^p)+E[6]+76029189&4294967295,g=T+(w<<23&4294967295|w>>>9),w=p+(g^T^b)+E[9]+3654602809&4294967295,p=g+(w<<4&4294967295|w>>>28),w=b+(p^g^T)+E[12]+3873151461&4294967295,b=p+(w<<11&4294967295|w>>>21),w=T+(b^p^g)+E[15]+530742520&4294967295,T=b+(w<<16&4294967295|w>>>16),w=g+(T^b^p)+E[2]+3299628645&4294967295,g=T+(w<<23&4294967295|w>>>9),w=p+(T^(g|~b))+E[0]+4096336452&4294967295,p=g+(w<<6&4294967295|w>>>26),w=b+(g^(p|~T))+E[7]+1126891415&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~g))+E[14]+2878612391&4294967295,T=b+(w<<15&4294967295|w>>>17),w=g+(b^(T|~p))+E[5]+4237533241&4294967295,g=T+(w<<21&4294967295|w>>>11),w=p+(T^(g|~b))+E[12]+1700485571&4294967295,p=g+(w<<6&4294967295|w>>>26),w=b+(g^(p|~T))+E[3]+2399980690&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~g))+E[10]+4293915773&4294967295,T=b+(w<<15&4294967295|w>>>17),w=g+(b^(T|~p))+E[1]+2240044497&4294967295,g=T+(w<<21&4294967295|w>>>11),w=p+(T^(g|~b))+E[8]+1873313359&4294967295,p=g+(w<<6&4294967295|w>>>26),w=b+(g^(p|~T))+E[15]+4264355552&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~g))+E[6]+2734768916&4294967295,T=b+(w<<15&4294967295|w>>>17),w=g+(b^(T|~p))+E[13]+1309151649&4294967295,g=T+(w<<21&4294967295|w>>>11),w=p+(T^(g|~b))+E[4]+4149444226&4294967295,p=g+(w<<6&4294967295|w>>>26),w=b+(g^(p|~T))+E[11]+3174756917&4294967295,b=p+(w<<10&4294967295|w>>>22),w=T+(p^(b|~g))+E[2]+718787259&4294967295,T=b+(w<<15&4294967295|w>>>17),w=g+(b^(T|~p))+E[9]+3951481745&4294967295,_.g[0]=_.g[0]+p&4294967295,_.g[1]=_.g[1]+(T+(w<<21&4294967295|w>>>11))&4294967295,_.g[2]=_.g[2]+T&4294967295,_.g[3]=_.g[3]+b&4294967295}r.prototype.u=function(_,p){p===void 0&&(p=_.length);for(var g=p-this.blockSize,E=this.B,T=this.h,b=0;b<p;){if(T==0)for(;b<=g;)s(this,_,b),b+=this.blockSize;if(typeof _=="string"){for(;b<p;)if(E[T++]=_.charCodeAt(b++),T==this.blockSize){s(this,E),T=0;break}}else for(;b<p;)if(E[T++]=_[b++],T==this.blockSize){s(this,E),T=0;break}}this.h=T,this.o+=p},r.prototype.v=function(){var _=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);_[0]=128;for(var p=1;p<_.length-8;++p)_[p]=0;var g=8*this.o;for(p=_.length-8;p<_.length;++p)_[p]=g&255,g/=256;for(this.u(_),_=Array(16),p=g=0;4>p;++p)for(var E=0;32>E;E+=8)_[g++]=this.g[p]>>>E&255;return _};function o(_,p){var g=u;return Object.prototype.hasOwnProperty.call(g,_)?g[_]:g[_]=p(_)}function a(_,p){this.h=p;for(var g=[],E=!0,T=_.length-1;0<=T;T--){var b=_[T]|0;E&&b==p||(g[T]=b,E=!1)}this.g=g}var u={};function h(_){return-128<=_&&128>_?o(_,function(p){return new a([p|0],0>p?-1:0)}):new a([_|0],0>_?-1:0)}function d(_){if(isNaN(_)||!isFinite(_))return y;if(0>_)return R(d(-_));for(var p=[],g=1,E=0;_>=g;E++)p[E]=_/g|0,g*=4294967296;return new a(p,0)}function m(_,p){if(_.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(_.charAt(0)=="-")return R(m(_.substring(1),p));if(0<=_.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(p,8)),E=y,T=0;T<_.length;T+=8){var b=Math.min(8,_.length-T),w=parseInt(_.substring(T,T+b),p);8>b?(b=d(Math.pow(p,b)),E=E.j(b).add(d(w))):(E=E.j(g),E=E.add(d(w)))}return E}var y=h(0),v=h(1),I=h(16777216);n=a.prototype,n.m=function(){if(P(this))return-R(this).m();for(var _=0,p=1,g=0;g<this.g.length;g++){var E=this.i(g);_+=(0<=E?E:4294967296+E)*p,p*=4294967296}return _},n.toString=function(_){if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S(this))return"0";if(P(this))return"-"+R(this).toString(_);for(var p=d(Math.pow(_,6)),g=this,E="";;){var T=N(g,p).g;g=L(g,T.j(p));var b=((0<g.g.length?g.g[0]:g.h)>>>0).toString(_);if(g=T,S(g))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(_){return 0>_?0:_<this.g.length?this.g[_]:this.h};function S(_){if(_.h!=0)return!1;for(var p=0;p<_.g.length;p++)if(_.g[p]!=0)return!1;return!0}function P(_){return _.h==-1}n.l=function(_){return _=L(this,_),P(_)?-1:S(_)?0:1};function R(_){for(var p=_.g.length,g=[],E=0;E<p;E++)g[E]=~_.g[E];return new a(g,~_.h).add(v)}n.abs=function(){return P(this)?R(this):this},n.add=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],E=0,T=0;T<=p;T++){var b=E+(this.i(T)&65535)+(_.i(T)&65535),w=(b>>>16)+(this.i(T)>>>16)+(_.i(T)>>>16);E=w>>>16,b&=65535,w&=65535,g[T]=w<<16|b}return new a(g,g[g.length-1]&-2147483648?-1:0)};function L(_,p){return _.add(R(p))}n.j=function(_){if(S(this)||S(_))return y;if(P(this))return P(_)?R(this).j(R(_)):R(R(this).j(_));if(P(_))return R(this.j(R(_)));if(0>this.l(I)&&0>_.l(I))return d(this.m()*_.m());for(var p=this.g.length+_.g.length,g=[],E=0;E<2*p;E++)g[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<_.g.length;T++){var b=this.i(E)>>>16,w=this.i(E)&65535,Vt=_.i(T)>>>16,Ct=_.i(T)&65535;g[2*E+2*T]+=w*Ct,O(g,2*E+2*T),g[2*E+2*T+1]+=b*Ct,O(g,2*E+2*T+1),g[2*E+2*T+1]+=w*Vt,O(g,2*E+2*T+1),g[2*E+2*T+2]+=b*Vt,O(g,2*E+2*T+2)}for(E=0;E<p;E++)g[E]=g[2*E+1]<<16|g[2*E];for(E=p;E<2*p;E++)g[E]=0;return new a(g,0)};function O(_,p){for(;(_[p]&65535)!=_[p];)_[p+1]+=_[p]>>>16,_[p]&=65535,p++}function U(_,p){this.g=_,this.h=p}function N(_,p){if(S(p))throw Error("division by zero");if(S(_))return new U(y,y);if(P(_))return p=N(R(_),p),new U(R(p.g),R(p.h));if(P(p))return p=N(_,R(p)),new U(R(p.g),p.h);if(30<_.g.length){if(P(_)||P(p))throw Error("slowDivide_ only works with positive integers.");for(var g=v,E=p;0>=E.l(_);)g=V(g),E=V(E);var T=x(g,1),b=x(E,1);for(E=x(E,2),g=x(g,2);!S(E);){var w=b.add(E);0>=w.l(_)&&(T=T.add(g),b=w),E=x(E,1),g=x(g,1)}return p=L(_,T.j(p)),new U(T,p)}for(T=y;0<=_.l(p);){for(g=Math.max(1,Math.floor(_.m()/p.m())),E=Math.ceil(Math.log(g)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(g),w=b.j(p);P(w)||0<w.l(_);)g-=E,b=d(g),w=b.j(p);S(b)&&(b=v),T=T.add(b),_=L(_,w)}return new U(T,_)}n.A=function(_){return N(this,_).h},n.and=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)&_.i(E);return new a(g,this.h&_.h)},n.or=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)|_.i(E);return new a(g,this.h|_.h)},n.xor=function(_){for(var p=Math.max(this.g.length,_.g.length),g=[],E=0;E<p;E++)g[E]=this.i(E)^_.i(E);return new a(g,this.h^_.h)};function V(_){for(var p=_.g.length+1,g=[],E=0;E<p;E++)g[E]=_.i(E)<<1|_.i(E-1)>>>31;return new a(g,_.h)}function x(_,p){var g=p>>5;p%=32;for(var E=_.g.length-g,T=[],b=0;b<E;b++)T[b]=0<p?_.i(b+g)>>>p|_.i(b+g+1)<<32-p:_.i(b+g);return new a(T,_.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vi=Nu.Md5=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Kt=Nu.Integer=a}).apply(typeof Vu<"u"?Vu:typeof self<"u"?self:typeof window<"u"?window:{});var Lr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ht={};var Ei,mm,Ke,Ti,jn,Mr,Ii,bi,Ai;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Lr=="object"&&Lr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var A=i[f];if(!(A in l))break t;l=l[A]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,A={next:function(){if(!f&&l<i.length){var C=l++;return{value:c(C,i[C]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function m(i,c,l){return i.call.apply(i.bind,arguments)}function y(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),i.apply(c,A)}}return function(){return i.apply(c,arguments)}}function v(i,c,l){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,v.apply(null,arguments)}function I(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function S(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,A,C){for(var M=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)M[Z-2]=arguments[Z];return c.prototype[A].apply(f,M)}}function P(i){let c=i.length;if(0<c){let l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function R(i,c){for(let l=1;l<arguments.length;l++){let f=arguments[l];if(h(f)){let A=i.length||0,C=f.length||0;i.length=A+C;for(let M=0;M<C;M++)i[A+M]=f[M]}else i.push(f)}}class L{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(i){return/^[\s\xa0]*$/.test(i)}function U(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function N(i){return N[" "](i),i}N[" "]=function(){};var V=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function x(i,c,l){for(let f in i)c.call(l,i[f],f,i)}function _(i,c){for(let l in i)c.call(void 0,i[l],l,i)}function p(i){let c={};for(let l in i)c[l]=i[l];return c}let g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(i,c){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)i[l]=f[l];for(let C=0;C<g.length;C++)l=g[C],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var c=1;i=i.split(":");let l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function b(i){u.setTimeout(()=>{throw i},0)}function w(){var i=Ps;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class Vt{constructor(){this.h=this.g=null}add(c,l){let f=Ct.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Ct=new L(()=>new hr,i=>i.reset());class hr{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let _e,Tt=!1,Ps=new Vt,ja=()=>{let i=u.Promise.resolve(void 0);_e=()=>{i.then(ud)}};var ud=()=>{for(var i;i=w();){try{i.h.call(i.g)}catch(l){b(l)}var c=Ct;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}Tt=!1};function ee(){this.s=this.s,this.C=this.C}ee.prototype.s=!1,ee.prototype.ma=function(){this.s||(this.s=!0,this.N())},ee.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var ld=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{let l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function wn(i,c){if(ft.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(V){t:{try{N(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:hd[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&wn.aa.h.call(this)}}S(wn,ft);var hd={2:"touch",3:"pen",4:"mouse"};wn.prototype.h=function(){wn.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var vn="closure_listenable_"+(1e6*Math.random()|0),dd=0;function fd(i,c,l,f,A){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=A,this.key=++dd,this.da=this.fa=!1}function dr(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function fr(i){this.src=i,this.g={},this.h=0}fr.prototype.add=function(i,c,l,f,A){var C=i.toString();i=this.g[C],i||(i=this.g[C]=[],this.h++);var M=Vs(i,c,f,A);return-1<M?(c=i[M],l||(c.fa=!1)):(c=new fd(c,this.src,C,!!f,A),c.fa=l,i.push(c)),c};function Ds(i,c){var l=c.type;if(l in i.g){var f=i.g[l],A=Array.prototype.indexOf.call(f,c,void 0),C;(C=0<=A)&&Array.prototype.splice.call(f,A,1),C&&(dr(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Vs(i,c,l,f){for(var A=0;A<i.length;++A){var C=i[A];if(!C.da&&C.listener==c&&C.capture==!!l&&C.ha==f)return A}return-1}var Ns="closure_lm_"+(1e6*Math.random()|0),ks={};function $a(i,c,l,f,A){if(f&&f.once)return Ga(i,c,l,f,A);if(Array.isArray(c)){for(var C=0;C<c.length;C++)$a(i,c[C],l,f,A);return null}return l=Fs(l),i&&i[vn]?i.K(c,l,d(f)?!!f.capture:!!f,A):za(i,c,l,!1,f,A)}function za(i,c,l,f,A,C){if(!c)throw Error("Invalid event type");var M=d(A)?!!A.capture:!!A,Z=Ls(i);if(Z||(i[Ns]=Z=new fr(i)),l=Z.add(c,l,f,M,C),l.proxy)return l;if(f=md(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)ld||(A=M),A===void 0&&(A=!1),i.addEventListener(c.toString(),f,A);else if(i.attachEvent)i.attachEvent(Ha(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function md(){function i(l){return c.call(i.src,i.listener,l)}let c=pd;return i}function Ga(i,c,l,f,A){if(Array.isArray(c)){for(var C=0;C<c.length;C++)Ga(i,c[C],l,f,A);return null}return l=Fs(l),i&&i[vn]?i.L(c,l,d(f)?!!f.capture:!!f,A):za(i,c,l,!0,f,A)}function Ka(i,c,l,f,A){if(Array.isArray(c))for(var C=0;C<c.length;C++)Ka(i,c[C],l,f,A);else f=d(f)?!!f.capture:!!f,l=Fs(l),i&&i[vn]?(i=i.i,c=String(c).toString(),c in i.g&&(C=i.g[c],l=Vs(C,l,f,A),-1<l&&(dr(C[l]),Array.prototype.splice.call(C,l,1),C.length==0&&(delete i.g[c],i.h--)))):i&&(i=Ls(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Vs(c,l,f,A)),(l=-1<i?c[i]:null)&&Os(l))}function Os(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[vn])Ds(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Ha(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Ls(c))?(Ds(l,i),l.h==0&&(l.src=null,c[Ns]=null)):dr(i)}}}function Ha(i){return i in ks?ks[i]:ks[i]="on"+i}function pd(i,c){if(i.da)i=!0;else{c=new wn(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&Os(i),i=l.call(f,c)}return i}function Ls(i){return i=i[Ns],i instanceof fr?i:null}var Ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fs(i){return typeof i=="function"?i:(i[Ms]||(i[Ms]=function(c){return i.handleEvent(c)}),i[Ms])}function mt(){ee.call(this),this.i=new fr(this),this.M=this,this.F=null}S(mt,ee),mt.prototype[vn]=!0,mt.prototype.removeEventListener=function(i,c,l,f){Ka(this,i,c,l,f)};function vt(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new ft(c,i);else if(c instanceof ft)c.target=c.target||i;else{var A=c;c=new ft(f,i),E(c,A)}if(A=!0,l)for(var C=l.length-1;0<=C;C--){var M=c.g=l[C];A=mr(M,f,!0,c)&&A}if(M=c.g=i,A=mr(M,f,!0,c)&&A,A=mr(M,f,!1,c)&&A,l)for(C=0;C<l.length;C++)M=c.g=l[C],A=mr(M,f,!1,c)&&A}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)dr(l[f]);delete i.g[c],i.h--}}this.F=null},mt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},mt.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function mr(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,C=0;C<c.length;++C){var M=c[C];if(M&&!M.da&&M.capture==l){var Z=M.listener,dt=M.ha||M.src;M.fa&&Ds(i.i,M),A=Z.call(dt,f)!==!1&&A}}return A&&!f.defaultPrevented}function Wa(i,c,l){if(typeof i=="function")l&&(i=v(i,l));else if(i&&typeof i.handleEvent=="function")i=v(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function Qa(i){i.g=Wa(()=>{i.g=null,i.i&&(i.i=!1,Qa(i))},i.l);let c=i.h;i.h=null,i.m.apply(null,c)}class gd extends ee{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Qa(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function En(i){ee.call(this),this.h=i,this.g={}}S(En,ee);var Ja=[];function Xa(i){x(i.g,function(c,l){this.g.hasOwnProperty(l)&&Os(c)},i),i.g={}}En.prototype.N=function(){En.aa.N.call(this),Xa(this)},En.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Bs=u.JSON.stringify,yd=u.JSON.parse,_d=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function Us(){}Us.prototype.h=null;function Ya(i){return i.h||(i.h=i.i())}function Za(){}var Tn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qs(){ft.call(this,"d")}S(qs,ft);function js(){ft.call(this,"c")}S(js,ft);var we={},tc=null;function pr(){return tc=tc||new mt}we.La="serverreachability";function ec(i){ft.call(this,we.La,i)}S(ec,ft);function In(i){let c=pr();vt(c,new ec(c))}we.STAT_EVENT="statevent";function nc(i,c){ft.call(this,we.STAT_EVENT,i),this.stat=c}S(nc,ft);function Et(i){let c=pr();vt(c,new nc(c,i))}we.Ma="timingevent";function rc(i,c){ft.call(this,we.Ma,i),this.size=c}S(rc,ft);function bn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function An(){this.g=!0}An.prototype.xa=function(){this.g=!1};function wd(i,c,l,f,A,C){i.info(function(){if(i.g)if(C)for(var M="",Z=C.split("&"),dt=0;dt<Z.length;dt++){var J=Z[dt].split("=");if(1<J.length){var pt=J[0];J=J[1];var gt=pt.split("_");M=2<=gt.length&&gt[1]=="type"?M+(pt+"="+J+"&"):M+(pt+"=redacted&")}}else M=null;else M=C;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+l+`
`+M})}function vd(i,c,l,f,A,C,M){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+l+`
`+C+" "+M})}function Ue(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Td(i,l)+(f?" "+f:"")})}function Ed(i,c){i.info(function(){return"TIMEOUT: "+c})}An.prototype.info=function(){};function Td(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var C=A[0];if(C!="noop"&&C!="stop"&&C!="close")for(var M=1;M<A.length;M++)A[M]=""}}}}return Bs(l)}catch{return c}}var gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$s;function yr(){}S(yr,Us),yr.prototype.g=function(){return new XMLHttpRequest},yr.prototype.i=function(){return{}},$s=new yr;function ne(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new En(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var oc={},zs={};function Gs(i,c,l){i.L=1,i.v=Er(Ut(c)),i.m=l,i.P=!0,ac(i,null)}function ac(i,c){i.F=Date.now(),_r(i),i.A=Ut(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Ec(l.i,"t",f),i.C=0,l=i.j.J,i.h=new ic,i.g=Bc(i.j,l?c:null,!i.m),0<i.O&&(i.M=new gd(v(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ja[0]=A.toString()),A=Ja);for(var C=0;C<A.length;C++){var M=$a(l,A[C],f||c.handleEvent,!1,c.h||c);if(!M)break;c.g[M.key]=M}c=i.H?p(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),In(),wd(i.i,i.u,i.A,i.l,i.R,i.m)}ne.prototype.ca=function(i){i=i.target;let c=this.M;c&&qt(i)==3?c.j():this.Y(i)},ne.prototype.Y=function(i){try{if(i==this.g)t:{let gt=qt(this.g);var c=this.g.Ba();let $e=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Rc(this.g)))){this.J||gt!=4||c==7||(c==8||0>=$e?In(3):In(2)),Ks(this);var l=this.g.Z();this.X=l;e:if(cc(this)){var f=Rc(this.g);i="";var A=f.length,C=qt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ve(this),Sn(this);var M="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(C&&c==A-1)});f.length=0,this.h.g+=i,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=l==200,vd(this.i,this.u,this.A,this.l,this.R,gt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Z,dt=this.g;if((Z=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Z)){var J=Z;break e}}J=null}if(l=J)Ue(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hs(this,l);else{this.o=!1,this.s=3,Et(12),ve(this),Sn(this);break t}}if(this.P){l=!0;let Rt;for(;!this.J&&this.C<M.length;)if(Rt=Id(this,M),Rt==zs){gt==4&&(this.s=4,Et(14),l=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==oc){this.s=4,Et(15),Ue(this.i,this.l,M,"[Invalid Chunk]"),l=!1;break}else Ue(this.i,this.l,Rt,null),Hs(this,Rt);if(cc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||M.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)Ue(this.i,this.l,M,"[Invalid Chunked Response]"),ve(this),Sn(this);else if(0<M.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Zs(pt),pt.M=!0,Et(11))}}else Ue(this.i,this.l,M,null),Hs(this,M);gt==4&&ve(this),this.o&&!this.J&&(gt==4?Oc(this.j,this):(this.o=!1,_r(this)))}else Ud(this.g),l==400&&0<M.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ve(this),Sn(this)}}}catch{}finally{}};function cc(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Id(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?zs:(l=Number(c.substring(l,f)),isNaN(l)?oc:(f+=1,f+l>c.length?zs:(c=c.slice(f,f+l),i.C=f+l,c)))}ne.prototype.cancel=function(){this.J=!0,ve(this)};function _r(i){i.S=Date.now()+i.I,uc(i,i.I)}function uc(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=bn(v(i.ba,i),c)}function Ks(i){i.B&&(u.clearTimeout(i.B),i.B=null)}ne.prototype.ba=function(){this.B=null;let i=Date.now();0<=i-this.S?(Ed(this.i,this.A),this.L!=2&&(In(),Et(17)),ve(this),this.s=2,Sn(this)):uc(this,this.S-i)};function Sn(i){i.j.G==0||i.J||Oc(i.j,i)}function ve(i){Ks(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,Xa(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function Hs(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||Ws(l.h,i))){if(!i.K&&Ws(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Sr(l),br(l);else break t;Ys(l),Et(18)}}else l.za=A[1],0<l.za-l.T&&37500>A[2]&&l.F&&l.v==0&&!l.C&&(l.C=bn(v(l.Za,l),6e3));if(1>=dc(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else Te(l,11)}else if((i.K||l.g==i)&&Sr(l),!O(c))for(A=l.Da.g.parse(c),c=0;c<A.length;c++){let J=A[c];if(l.T=J[0],J=J[1],l.G==2)if(J[0]=="c"){l.K=J[1],l.ia=J[2];let pt=J[3];pt!=null&&(l.la=pt,l.j.info("VER="+l.la));let gt=J[4];gt!=null&&(l.Aa=gt,l.j.info("SVER="+l.Aa));let $e=J[5];$e!=null&&typeof $e=="number"&&0<$e&&(f=1.5*$e,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;let Rt=i.g;if(Rt){let Rr=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var C=f.h;C.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Qs(C,C.h),C.h=null))}if(f.D){let ti=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ti&&(f.ya=ti,tt(f.I,f.D,ti))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var M=i;if(f.qa=Fc(f,f.J?f.ia:null,f.W),M.K){fc(f.h,M);var Z=M,dt=f.L;dt&&(Z.I=dt),Z.B&&(Ks(Z),_r(Z)),f.g=M}else Nc(f);0<l.i.length&&Ar(l)}else J[0]!="stop"&&J[0]!="close"||Te(l,7);else l.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Te(l,7):Xs(l):J[0]!="noop"&&l.l&&l.l.ta(J),l.v=0)}}In(4)}catch{}}var bd=class{constructor(i,c){this.g=i,this.map=c}};function lc(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hc(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function dc(i){return i.h?1:i.g?i.g.size:0}function Ws(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Qs(i,c){i.g?i.g.add(c):i.h=c}function fc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}lc.prototype.cancel=function(){if(this.i=mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let i of this.g.values())i.cancel();this.g.clear()}};function mc(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(let l of i.g.values())c=c.concat(l.D);return c}return P(i.i)}function Ad(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function Sd(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(let f in i)c[l++]=f;return c}}}function pc(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=Sd(i),f=Ad(i),A=f.length,C=0;C<A;C++)c.call(void 0,f[C],l&&l[C],i)}var gc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),A=null;if(0<=f){var C=i[l].substring(0,f);A=i[l].substring(f+1)}else C=i[l];c(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ee(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof Ee){this.h=i.h,wr(this,i.j),this.o=i.o,this.g=i.g,vr(this,i.s),this.l=i.l;var c=i.i,l=new xn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),yc(this,l),this.m=i.m}else i&&(c=String(i).match(gc))?(this.h=!1,wr(this,c[1]||"",!0),this.o=Cn(c[2]||""),this.g=Cn(c[3]||"",!0),vr(this,c[4]),this.l=Cn(c[5]||"",!0),yc(this,c[6]||"",!0),this.m=Cn(c[7]||"")):(this.h=!1,this.i=new xn(null,this.h))}Ee.prototype.toString=function(){var i=[],c=this.j;c&&i.push(Rn(c,_c,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(Rn(c,_c,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Rn(l,l.charAt(0)=="/"?Pd:xd,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Rn(l,Vd)),i.join("")};function Ut(i){return new Ee(i)}function wr(i,c,l){i.j=l?Cn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function vr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function yc(i,c,l){c instanceof xn?(i.i=c,Nd(i.i,i.h)):(l||(c=Rn(c,Dd)),i.i=new xn(c,i.h))}function tt(i,c,l){i.i.set(c,l)}function Er(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Cn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Rn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,Rd),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Rd(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var _c=/[#\/\?@]/g,xd=/[#\?:]/g,Pd=/[#\?]/g,Dd=/[#\?@]/g,Vd=/#/g;function xn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function re(i){i.g||(i.g=new Map,i.h=0,i.i&&Cd(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=xn.prototype,n.add=function(i,c){re(this),this.i=null,i=qe(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function wc(i,c){re(i),c=qe(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function vc(i,c){return re(i),c=qe(i,c),i.g.has(c)}n.forEach=function(i,c){re(this),this.g.forEach(function(l,f){l.forEach(function(A){i.call(c,A,f,this)},this)},this)},n.na=function(){re(this);let i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){let A=i[f];for(let C=0;C<A.length;C++)l.push(c[f])}return l},n.V=function(i){re(this);let c=[];if(typeof i=="string")vc(this,i)&&(c=c.concat(this.g.get(qe(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return re(this),this.i=null,i=qe(this,i),vc(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Ec(i,c,l){wc(i,c),0<l.length&&(i.i=null,i.g.set(qe(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";let i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];let C=encodeURIComponent(String(f)),M=this.V(f);for(f=0;f<M.length;f++){var A=C;M[f]!==""&&(A+="="+encodeURIComponent(String(M[f]))),i.push(A)}}return this.i=i.join("&")};function qe(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function Nd(i,c){c&&!i.j&&(re(i),i.i=null,i.g.forEach(function(l,f){var A=f.toLowerCase();f!=A&&(wc(this,f),Ec(this,A,l))},i)),i.j=c}function kd(i,c){let l=new An;if(u.Image){let f=new Image;f.onload=I(se,l,"TestLoadImage: loaded",!0,c,f),f.onerror=I(se,l,"TestLoadImage: error",!1,c,f),f.onabort=I(se,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=I(se,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Od(i,c){let l=new An,f=new AbortController,A=setTimeout(()=>{f.abort(),se(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(C=>{clearTimeout(A),C.ok?se(l,"TestPingServer: ok",!0,c):se(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),se(l,"TestPingServer: error",!1,c)})}function se(i,c,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function Ld(){this.g=new _d}function Md(i,c,l){let f=l||"";try{pc(i,function(A,C){let M=A;d(A)&&(M=Bs(A)),c.push(f+C+"="+encodeURIComponent(M))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function Pn(i){this.l=i.Ub||null,this.j=i.eb||!1}S(Pn,Us),Pn.prototype.g=function(){return new Tr(this.l,this.j)},Pn.prototype.i=function(i){return function(){return i}}({});function Tr(i,c){mt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Tr,mt),n=Tr.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,Vn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Tc(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Tc(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Dn(this):Vn(this),this.readyState==3&&Tc(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,Dn(this))},n.Qa=function(i){this.g&&(this.response=i,Dn(this))},n.ga=function(){this.g&&Dn(this)};function Dn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,Vn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";let i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Vn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ic(i){let c="";return x(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Js(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=Ic(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):tt(i,c,l))}function rt(i){mt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(rt,mt);var Fd=/^https?$/i,Bd=["POST","PUT"];n=rt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$s.g(),this.v=this.o?Ya(this.o):Ya($s),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(C){bc(this,C);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(let C of f.keys())l.set(C,f.get(C));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(C=>C.toLowerCase()=="content-type"),A=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Bd,c,void 0))||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[C,M]of l)this.g.setRequestHeader(C,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Cc(this),this.u=!0,this.g.send(i),this.u=!1}catch(C){bc(this,C)}};function bc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,Ac(i),Ir(i)}function Ac(i){i.A||(i.A=!0,vt(i,"complete"),vt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,vt(this,"complete"),vt(this,"abort"),Ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),rt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Sc(this):this.bb())},n.bb=function(){Sc(this)};function Sc(i){if(i.h&&typeof a<"u"&&(!i.v[1]||qt(i)!=4||i.Z()!=2)){if(i.u&&qt(i)==4)Wa(i.Ea,0,i);else if(vt(i,"readystatechange"),qt(i)==4){i.h=!1;try{let M=i.Z();t:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=M===0){var A=String(i.D).match(gc)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),f=!Fd.test(A?A.toLowerCase():"")}l=f}if(l)vt(i,"complete"),vt(i,"success");else{i.m=6;try{var C=2<qt(i)?i.g.statusText:""}catch{C=""}i.l=C+" ["+i.Z()+"]",Ac(i)}}finally{Ir(i)}}}}function Ir(i,c){if(i.g){Cc(i);let l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||vt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Cc(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function qt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<qt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),yd(c)}};function Rc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ud(i){let c={};i=(i.g&&2<=qt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(O(i[f]))continue;var l=T(i[f]);let A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();let C=c[A]||[];c[A]=C,C.push(l)}_(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nn(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function xc(i){this.Aa=0,this.i=[],this.j=new An,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nn("baseRetryDelayMs",5e3,i),this.cb=Nn("retryDelaySeedMs",1e4,i),this.Wa=Nn("forwardChannelMaxRetries",2,i),this.wa=Nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new lc(i&&i.concurrentRequestLimit),this.Da=new Ld,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xc.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){Et(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=Fc(this,null,this.W),Ar(this)};function Xs(i){if(Pc(i),i.G==3){var c=i.U++,l=Ut(i.I);if(tt(l,"SID",i.K),tt(l,"RID",c),tt(l,"TYPE","terminate"),kn(i,l),c=new ne(i,i.j,c),c.L=2,c.v=Er(Ut(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=Bc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),_r(c)}Mc(i)}function br(i){i.g&&(Zs(i),i.g.cancel(),i.g=null)}function Pc(i){br(i),i.u&&(u.clearTimeout(i.u),i.u=null),Sr(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function Ar(i){if(!hc(i.h)&&!i.s){i.s=!0;var c=i.Ga;_e||ja(),Tt||(_e(),Tt=!0),Ps.add(c,i),i.B=0}}function qd(i,c){return dc(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=bn(v(i.Ga,i,c),Lc(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;let A=new ne(this,this.j,i),C=this.o;if(this.S&&(C?(C=p(C),E(C,this.S)):C=this.S),this.m!==null||this.O||(A.H=C,C=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=Vc(this,A,c),l=Ut(this.I),tt(l,"RID",i),tt(l,"CVER",22),this.D&&tt(l,"X-HTTP-Session-Id",this.D),kn(this,l),C&&(this.O?c="headers="+encodeURIComponent(String(Ic(C)))+"&"+c:this.m&&Js(l,this.m,C)),Qs(this.h,A),this.Ua&&tt(l,"TYPE","init"),this.P?(tt(l,"$req",c),tt(l,"SID","null"),A.T=!0,Gs(A,l,null)):Gs(A,l,c),this.G=2}}else this.G==3&&(i?Dc(this,i):this.i.length==0||hc(this.h)||Dc(this))};function Dc(i,c){var l;c?l=c.l:l=i.U++;let f=Ut(i.I);tt(f,"SID",i.K),tt(f,"RID",l),tt(f,"AID",i.T),kn(i,f),i.m&&i.o&&Js(f,i.m,i.o),l=new ne(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Vc(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Qs(i.h,l),Gs(l,f,c)}function kn(i,c){i.H&&x(i.H,function(l,f){tt(c,f,l)}),i.l&&pc({},function(l,f){tt(c,f,l)})}function Vc(i,c,l){l=Math.min(i.i.length,l);var f=i.l?v(i.l.Na,i.l,i):null;t:{var A=i.i;let C=-1;for(;;){let M=["count="+l];C==-1?0<l?(C=A[0].g,M.push("ofs="+C)):C=0:M.push("ofs="+C);let Z=!0;for(let dt=0;dt<l;dt++){let J=A[dt].g,pt=A[dt].map;if(J-=C,0>J)C=Math.max(0,A[dt].g-100),Z=!1;else try{Md(pt,M,"req"+J+"_")}catch{f&&f(pt)}}if(Z){f=M.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function Nc(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;_e||ja(),Tt||(_e(),Tt=!0),Ps.add(c,i),i.v=0}}function Ys(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=bn(v(i.Fa,i),Lc(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,kc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=bn(v(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),br(this),kc(this))};function Zs(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function kc(i){i.g=new ne(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=Ut(i.qa);tt(c,"RID","rpc"),tt(c,"SID",i.K),tt(c,"AID",i.T),tt(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(c,"TO",i.ja),tt(c,"TYPE","xmlhttp"),kn(i,c),i.m&&i.o&&Js(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Er(Ut(c)),l.m=null,l.P=!0,ac(l,i)}n.Za=function(){this.C!=null&&(this.C=null,br(this),Ys(this),Et(19))};function Sr(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Oc(i,c){var l=null;if(i.g==c){Sr(i),Zs(i),i.g=null;var f=2}else if(Ws(i.h,c))l=c.D,fc(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var A=i.B;f=pr(),vt(f,new rc(f,l)),Ar(i)}else Nc(i);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&qd(i,c)||f==2&&Ys(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),A){case 1:Te(i,5);break;case 4:Te(i,10);break;case 3:Te(i,6);break;default:Te(i,2)}}}function Lc(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function Te(i,c){if(i.j.info("Error code "+c),c==2){var l=v(i.fb,i),f=i.Xa;let A=!f;f=new Ee(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||wr(f,"https"),Er(f),A?kd(f.toString(),l):Od(f.toString(),l)}else Et(2);i.G=0,i.l&&i.l.sa(c),Mc(i),Pc(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Mc(i){if(i.G=0,i.ka=[],i.l){let c=mc(i.h);(c.length!=0||i.i.length!=0)&&(R(i.ka,c),R(i.ka,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.ra()}}function Fc(i,c,l){var f=l instanceof Ee?Ut(l):new Ee(l);if(f.g!="")c&&(f.g=c+"."+f.g),vr(f,f.s);else{var A=u.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var C=new Ee(null);f&&wr(C,f),c&&(C.g=c),A&&vr(C,A),l&&(C.l=l),f=C}return l=i.D,c=i.ya,l&&c&&tt(f,l,c),tt(f,"VER",i.la),kn(i,f),f}function Bc(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new rt(new Pn({eb:l})):new rt(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}n=Uc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Cr(){}Cr.prototype.g=function(i,c){return new It(i,c)};function It(i,c){mt.call(this),this.g=new xc(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!O(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!O(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new je(this)}S(It,mt),It.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){Xs(this.g)},It.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Bs(i),i=l);c.i.push(new bd(c.Ya++,i)),c.G==3&&Ar(c)},It.prototype.N=function(){this.g.l=null,delete this.j,Xs(this.g),delete this.g,It.aa.N.call(this)};function qc(i){qs.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(let l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}S(qc,qs);function jc(){js.call(this),this.status=1}S(jc,js);function je(i){this.g=i}S(je,Uc),je.prototype.ua=function(){vt(this.g,"a")},je.prototype.ta=function(i){vt(this.g,new qc(i))},je.prototype.sa=function(i){vt(this.g,new jc)},je.prototype.ra=function(){vt(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,Ai=Ht.createWebChannelTransport=function(){return new Cr},bi=Ht.getStatEventTarget=function(){return pr()},Ii=Ht.Event=we,Mr=Ht.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,jn=Ht.ErrorCode=gr,sc.COMPLETE="complete",Ti=Ht.EventType=sc,Za.EventType=Tn,Tn.OPEN="a",Tn.CLOSE="b",Tn.ERROR="c",Tn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ke=Ht.WebChannel=Za,mm=Ht.FetchXmlHttpFactory=Pn,rt.prototype.listenOnce=rt.prototype.L,rt.prototype.getLastError=rt.prototype.Ka,rt.prototype.getLastErrorCode=rt.prototype.Ba,rt.prototype.getStatus=rt.prototype.Z,rt.prototype.getResponseJson=rt.prototype.Oa,rt.prototype.getResponseText=rt.prototype.oa,rt.prototype.send=rt.prototype.ea,rt.prototype.setWithCredentials=rt.prototype.Ha,Ei=Ht.XhrIo=rt}).apply(typeof Lr<"u"?Lr:typeof self<"u"?self:typeof window<"u"?window:{});var ku="@firebase/firestore",Ou="4.8.0";var lt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");var pn="11.10.0";var xe=new Ge("@firebase/firestore");function He(){return xe.logLevel}function B(n,...t){if(xe.logLevel<=W.DEBUG){let e=t.map(_a);xe.debug(`Firestore (${pn}): ${n}`,...e)}}function Qt(n,...t){if(xe.logLevel<=W.ERROR){let e=t.map(_a);xe.error(`Firestore (${pn}): ${n}`,...e)}}function fe(n,...t){if(xe.logLevel<=W.WARN){let e=t.map(_a);xe.warn(`Firestore (${pn}): ${n}`,...e)}}function _a(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}function j(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,Rl(n,r,e)}function Rl(n,t,e){let r=`FIRESTORE (${pn}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Qt(r),new Error(r)}function Y(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||Rl(t,s,r)}function $(n,t){return n}var D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},F=class extends $t{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Wt=class{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}};var zr=class{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},Pi=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(lt.UNAUTHENTICATED))}shutdown(){}},Di=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}},Vi=class{constructor(t){this.t=t,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){Y(this.o===void 0,42304);let r=this.i,s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve(),o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};let a=()=>{let h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){let h=this.t.getImmediate({optional:!0});h?u(h):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){let t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new zr(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let t=this.auth&&this.auth.getUid();return Y(t===null||typeof t=="string",2055,{h:t}),new lt(t)}},Ni=class{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}},ki=class{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Ni(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Gr=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Oi=class{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cu(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){Y(this.o===void 0,3512);let r=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);let a=o.token!==this.m;return this.m=o.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};let s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){let o=this.V.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Gr(this.p));let t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Y(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Gr(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}};function pm(n){let t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}function xl(){return new TextEncoder}var Qn=class{static newId(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516),r="";for(;r.length<20;){let s=pm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}};function G(n,t){return n<t?-1:n>t?1:0}function Li(n,t){let e=0;for(;e<n.length&&e<t.length;){let r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return G(r,s);{let o=xl(),a=gm(o.encode(Lu(n,e)),o.encode(Lu(t,e)));return a!==0?a:G(r,s)}}e+=r>65535?2:1}return G(n.length,t.length)}function Lu(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function gm(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return G(n[e],t[e]);return G(n.length,t.length)}function en(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}var Mu="__name__",Kr=class n{constructor(t,e,r){e===void 0?e=0:e>t.length&&j(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&j(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return n.comparator(this,t)===0}child(t){let e=this.segments.slice(this.offset,this.limit());return t instanceof n?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){let r=Math.min(t.length,e.length);for(let s=0;s<r;s++){let o=n.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return G(t.length,e.length)}static compareSegments(t,e){let r=n.isNumericId(t),s=n.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?n.extractNumericId(t).compare(n.extractNumericId(e)):Li(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Kt.fromString(t.substring(4,t.length-2))}},nt=class n extends Kr{construct(t,e,r){return new n(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){let e=[];for(let r of t){if(r.indexOf("//")>=0)throw new F(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new n(e)}static emptyPath(){return new n([])}},ym=/^[_a-zA-Z][_a-zA-Z0-9]*$/,At=class n extends Kr{construct(t,e,r){return new n(t,e,r)}static isValidIdentifier(t){return ym.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),n.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mu}static keyField(){return new n([Mu])}static fromServerFormat(t){let e=[],r="",s=0,o=()=>{if(r.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""},a=!1;for(;s<t.length;){let u=t[s];if(u==="\\"){if(s+1===t.length)throw new F(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new F(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new n(e)}static emptyPath(){return new n([])}};var q=class n{constructor(t){this.path=t}static fromPath(t){return new n(nt.fromString(t))}static fromName(t){return new n(nt.fromString(t).popFirst(5))}static empty(){return new n(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&nt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return nt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new n(new nt(t.slice()))}};function Pl(n,t,e){if(!e)throw new F(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function _m(n,t,e,r){if(t===!0&&r===!0)throw new F(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fu(n){if(!q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Bu(n){if(q.isDocumentKey(n))throw new F(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ts(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{let t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function zn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let e=Ts(n);throw new F(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function ct(n,t){let e={typeString:n};return t&&(e.value=t),e}function cr(n,t){if(!Dl(n))throw new F(D.INVALID_ARGUMENT,"JSON must be an object");let e;for(let r in t)if(t[r]){let s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}let a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new F(D.INVALID_ARGUMENT,e);return!0}var Uu=-62135596800,qu=1e6,ut=class n{static now(){return n.fromMillis(Date.now())}static fromDate(t){return n.fromMillis(t.getTime())}static fromMillis(t){let e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*qu);return new n(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Uu)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qu}_compareTo(t){return this.seconds===t.seconds?G(this.nanoseconds,t.nanoseconds):G(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(cr(t,n._jsonSchema))return new n(t.seconds,t.nanoseconds)}valueOf(){let t=this.seconds-Uu;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:ct("string",ut._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};var z=class n{static fromTimestamp(t){return new n(t)}static min(){return new n(new ut(0,0))}static max(){return new n(new ut(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Jn=-1,Mi=class{constructor(t,e,r,s){this.indexId=t,this.collectionGroup=e,this.fields=r,this.indexState=s}};Mi.UNKNOWN_ID=-1;function wm(n,t){let e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new ut(e+1,0):new ut(e,r));return new Pe(s,q.empty(),t)}function vm(n){return new Pe(n.readTime,n.key,Jn)}var Pe=class n{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new n(z.min(),q.empty(),Jn)}static max(){return new n(z.max(),q.empty(),Jn)}};function Em(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:G(n.largestBatchId,t.largestBatchId))}var Tm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Fi=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}};async function gn(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==Tm)throw n;B("LocalStore","Unexpectedly lost primary lease")}var k=class n{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new n((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{let e=t();return e instanceof n?e:n.resolve(e)}catch(e){return n.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):n.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):n.reject(e)}static resolve(t){return new n((e,r)=>{e(t)})}static reject(t){return new n((e,r)=>{r(t)})}static waitFor(t){return new n((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=n.resolve(!1);for(let r of t)e=e.next(s=>s?n.resolve(s):r());return e}static forEach(t,e){let r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new n((r,s)=>{let o=t.length,a=new Array(o),u=0;for(let h=0;h<o;h++){let d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new n((r,s)=>{let o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}};function Im(n){let t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function yn(n){return n.name==="IndexedDbTransactionError"}var nn=class{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){let t=++this.previousValue;return this.ae&&this.ae(t),t}};nn.ue=-1;var wa=-1;function Is(n){return n==null}function Xn(n){return n===0&&1/n==-1/0}function bm(n){return typeof n=="number"&&Number.isInteger(n)&&!Xn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}var Vl="";function Am(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=ju(t)),t=Sm(n.get(e),t);return ju(t)}function Sm(n,t){let e=t,r=n.length;for(let s=0;s<r;s++){let o=n.charAt(s);switch(o){case"\0":e+="";break;case Vl:e+="";break;default:e+=o}}return e}function ju(n){return n+Vl+""}var Cm="remoteDocuments",Nl="owner";var kl="mutationQueues";var Ol="mutations";var Ll="documentMutations",Rm="remoteDocumentsV14";var Ml="remoteDocumentGlobal";var Fl="targets";var Bl="targetDocuments";var Ul="targetGlobal",ql="collectionParents";var jl="clientMetadata";var $l="bundles";var zl="namedQueries";var xm="indexConfiguration";var Pm="indexState";var Dm="indexEntries";var Gl="documentOverlays";var Vm="globals";var Nm=[kl,Ol,Ll,Cm,Fl,Nl,Ul,Bl,jl,Ml,ql,$l,zl],By=[...Nm,Gl],km=[kl,Ol,Ll,Rm,Fl,Nl,Ul,Bl,jl,Ml,ql,$l,zl,Gl],Om=km,Lm=[...Om,xm,Pm,Dm];var Uy=[...Lm,Vm];function $u(n){let t=0;for(let e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Fe(n,t){for(let e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Kl(n){for(let t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}var st=class n{constructor(t,e){this.comparator=t,this.root=e||Lt.EMPTY}insert(t,e){return new n(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Lt.BLACK,null,null))}remove(t){return new n(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){let r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){let s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){let t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xe(this.root,t,this.comparator,!0)}},Xe=class{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},Lt=class n{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??n.RED,this.left=s??n.EMPTY,this.right=o??n.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new n(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this,o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return n.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return n.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});let t=this.left.check();if(t!==this.right.check())throw j(27949);return t+(this.isRed()?0:1)}};Lt.EMPTY=null,Lt.RED=!0,Lt.BLACK=!1;Lt.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var ht=class n{constructor(t){this.comparator=t,this.data=new st(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){let r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){let s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){let e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Hr(this.data.getIterator())}getIteratorFrom(t){return new Hr(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof n)||this.size!==t.size)return!1;let e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){let s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(e=>{t.push(e)}),t}toString(){let t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){let e=new n(this.comparator);return e.data=t,e}},Hr=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Ot=class n{constructor(t){this.fields=t,t.sort(At.comparator)}static empty(){return new n([])}unionWith(t){let e=new ht(At.comparator);for(let r of this.fields)e=e.add(r);for(let r of t)e=e.add(r);return new n(e.toArray())}covers(t){for(let e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return en(this.fields,t.fields,(e,r)=>e.isEqual(r))}};var Wr=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var wt=class n{constructor(t){this.binaryString=t}static fromBase64String(t){let e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Wr("Invalid base64 string: "+o):o}}(t);return new n(e)}static fromUint8Array(t){let e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new n(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){let r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return G(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};wt.EMPTY_BYTE_STRING=new wt("");var Mm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(Y(!!n,39018),typeof n=="string"){let t=0,e=Mm.exec(n);if(Y(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}let r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Xt(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}var Hl="server_timestamp",Wl="__type__",Ql="__previous_value__",Jl="__local_write_time__";function va(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Wl])===null||e===void 0?void 0:e.stringValue)===Hl}function bs(n){let t=n.mapValue.fields[Ql];return va(t)?bs(t):t}function Yn(n){let t=Jt(n.mapValue.fields[Jl].timestampValue);return new ut(t.seconds,t.nanos)}var Bi=class{constructor(t,e,r,s,o,a,u,h,d,m){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}},Qr="(default)",Jr=class n{constructor(t,e){this.projectId=t,this.database=e||Qr}static empty(){return new n("","")}get isDefaultDatabase(){return this.database===Qr}isEqual(t){return t instanceof n&&t.projectId===this.projectId&&t.database===this.database}};var Ea="__type__",Xl="__max__",Fr={mapValue:{fields:{__type__:{stringValue:Xl}}}},Ta="__vector__",rn="value";function me(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?va(n)?4:Zl(n)?9007199254740991:Yl(n)?10:11:j(28295,{value:n})}function Bt(n,t){if(n===t)return!0;let e=me(n);if(e!==me(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Yn(n).isEqual(Yn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;let a=Jt(s.timestampValue),u=Jt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Xt(s.bytesValue).isEqual(Xt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){let a=et(s.doubleValue),u=et(o.doubleValue);return a===u?Xn(a)===Xn(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return en(n.arrayValue.values||[],t.arrayValue.values||[],Bt);case 10:case 11:return function(s,o){let a=s.mapValue.fields||{},u=o.mapValue.fields||{};if($u(a)!==$u(u))return!1;for(let h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!Bt(a[h],u[h])))return!1;return!0}(n,t);default:return j(52216,{left:n})}}function Zn(n,t){return(n.values||[]).find(e=>Bt(e,t))!==void 0}function sn(n,t){if(n===t)return 0;let e=me(n),r=me(t);if(e!==r)return G(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,t.booleanValue);case 2:return function(o,a){let u=et(o.integerValue||o.doubleValue),h=et(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return zu(n.timestampValue,t.timestampValue);case 4:return zu(Yn(n),Yn(t));case 5:return Li(n.stringValue,t.stringValue);case 6:return function(o,a){let u=Xt(o),h=Xt(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){let u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){let m=G(u[d],h[d]);if(m!==0)return m}return G(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){let u=G(et(o.latitude),et(a.latitude));return u!==0?u:G(et(o.longitude),et(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Gu(n.arrayValue,t.arrayValue);case 10:return function(o,a){var u,h,d,m;let y=o.fields||{},v=a.fields||{},I=(u=y[rn])===null||u===void 0?void 0:u.arrayValue,S=(h=v[rn])===null||h===void 0?void 0:h.arrayValue,P=G(((d=I?.values)===null||d===void 0?void 0:d.length)||0,((m=S?.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:Gu(I,S)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Fr.mapValue&&a===Fr.mapValue)return 0;if(o===Fr.mapValue)return 1;if(a===Fr.mapValue)return-1;let u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){let v=Li(h[y],m[y]);if(v!==0)return v;let I=sn(u[h[y]],d[m[y]]);if(I!==0)return I}return G(h.length,m.length)}(n.mapValue,t.mapValue);default:throw j(23264,{le:e})}}function zu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return G(n,t);let e=Jt(n),r=Jt(t),s=G(e.seconds,r.seconds);return s!==0?s:G(e.nanos,r.nanos)}function Gu(n,t){let e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){let o=sn(e[s],r[s]);if(o)return o}return G(e.length,r.length)}function on(n){return Ui(n)}function Ui(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){let r=Jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Xt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(let o of e.values||[])s?s=!1:r+=",",r+=Ui(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){let r=Object.keys(e.fields||{}).sort(),s="{",o=!0;for(let a of r)o?o=!1:s+=",",s+=`${a}:${Ui(e.fields[a])}`;return s+"}"}(n.mapValue):j(61005,{value:n})}function qr(n){switch(me(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let t=bs(n);return t?16+qr(t):16;case 5:return 2*n.stringValue.length;case 6:return Xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+qr(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Fe(r.fields,(o,a)=>{s+=o.length+qr(a)}),s}(n.mapValue);default:throw j(13486,{value:n})}}function Ku(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function qi(n){return!!n&&"integerValue"in n}function Ia(n){return!!n&&"arrayValue"in n}function Hu(n){return!!n&&"nullValue"in n}function Wu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jr(n){return!!n&&"mapValue"in n}function Yl(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ea])===null||e===void 0?void 0:e.stringValue)===Ta}function Gn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){let t={mapValue:{fields:{}}};return Fe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Gn(r)),t}if(n.arrayValue){let t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Gn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Zl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Xl}var jy={mapValue:{fields:{[Ea]:{stringValue:Ta},[rn]:{arrayValue:{}}}}};var xt=class n{constructor(t){this.value=t}static empty(){return new n({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!jr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Gn(e)}setAll(t){let e=At.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){let h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Gn(a):s.push(u.lastSegment())});let o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){let e=this.field(t.popLast());jr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];jr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Fe(e,(s,o)=>t[s]=o);for(let s of r)delete t[s]}clone(){return new n(Gn(this.value))}};function th(n){let t=[];return Fe(n.fields,(e,r)=>{let s=new At([e]);if(jr(r)){let o=th(r.mapValue).fields;if(o.length===0)t.push(s);else for(let a of o)t.push(s.child(a))}else t.push(s)}),new Ot(t)}var Pt=class n{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new n(t,0,z.min(),z.min(),z.min(),xt.empty(),0)}static newFoundDocument(t,e,r,s){return new n(t,1,e,z.min(),r,s,0)}static newNoDocument(t,e){return new n(t,2,e,z.min(),z.min(),xt.empty(),0)}static newUnknownDocument(t,e){return new n(t,3,e,z.min(),z.min(),xt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof n&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new n(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var an=class{constructor(t,e){this.position=t,this.inclusive=e}};function Qu(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){let o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=sn(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ju(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Bt(n.position[e],t.position[e]))return!1;return!0}var De=class{constructor(t,e="asc"){this.field=t,this.dir=e}};function Fm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}var Xr=class{},at=class n extends Xr{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new $i(t,e,r):e==="array-contains"?new Ki(t,r):e==="in"?new Hi(t,r):e==="not-in"?new Wi(t,r):e==="array-contains-any"?new Qi(t,r):new n(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new zi(t,r):new Gi(t,r)}matches(t){let e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(sn(e,this.value)):e!==null&&me(this.value)===me(e)&&this.matchesComparison(sn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Dt=class n extends Xr{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new n(t,e)}matches(t){return eh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}};function eh(n){return n.op==="and"}function nh(n){return Bm(n)&&eh(n)}function Bm(n){for(let t of n.filters)if(t instanceof Dt)return!1;return!0}function ji(n){if(n instanceof at)return n.field.canonicalString()+n.op.toString()+on(n.value);if(nh(n))return n.filters.map(t=>ji(t)).join(",");{let t=n.filters.map(e=>ji(e)).join(",");return`${n.op}(${t})`}}function rh(n,t){return n instanceof at?function(r,s){return s instanceof at&&r.op===s.op&&r.field.isEqual(s.field)&&Bt(r.value,s.value)}(n,t):n instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&rh(a,s.filters[u]),!0):!1}(n,t):void j(19439)}function sh(n){return n instanceof at?function(e){return`${e.field.canonicalString()} ${e.op} ${on(e.value)}`}(n):n instanceof Dt?function(e){return e.op.toString()+" {"+e.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}var $i=class extends at{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){let e=q.comparator(t.key,this.key);return this.matchesComparison(e)}},zi=class extends at{constructor(t,e){super(t,"in",e),this.keys=ih("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}},Gi=class extends at{constructor(t,e){super(t,"not-in",e),this.keys=ih("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}};function ih(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}var Ki=class extends at{constructor(t,e){super(t,"array-contains",e)}matches(t){let e=t.data.field(this.field);return Ia(e)&&Zn(e.arrayValue,this.value)}},Hi=class extends at{constructor(t,e){super(t,"in",e)}matches(t){let e=t.data.field(this.field);return e!==null&&Zn(this.value.arrayValue,e)}},Wi=class extends at{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Zn(this.value.arrayValue,e)}},Qi=class extends at{constructor(t,e){super(t,"array-contains-any",e)}matches(t){let e=t.data.field(this.field);return!(!Ia(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}};var Ji=class{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Pe=null}};function Xu(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Ji(n,t,e,r,s,o,a)}function ba(n){let t=$(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ji(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Is(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>on(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>on(r)).join(",")),t.Pe=e}return t.Pe}function Aa(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Fm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!rh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ju(n.startAt,t.startAt)&&Ju(n.endAt,t.endAt)}function Xi(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}var pe=class{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}};function Um(n,t,e,r,s,o,a,u){return new pe(n,t,e,r,s,o,a,u)}function Sa(n){return new pe(n)}function Yu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function oh(n){return n.collectionGroup!==null}function Kn(n){let t=$(n);if(t.Te===null){t.Te=[];let e=new Set;for(let o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());let r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(At.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new De(o,r))}),e.has(At.keyField().canonicalString())||t.Te.push(new De(At.keyField(),r))}return t.Te}function Mt(n){let t=$(n);return t.Ie||(t.Ie=qm(t,Kn(n))),t.Ie}function qm(n,t){if(n.limitType==="F")return Xu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{let o=s.dir==="desc"?"asc":"desc";return new De(s.field,o)});let e=n.endAt?new an(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new an(n.startAt.position,n.startAt.inclusive):null;return Xu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Yi(n,t){let e=n.filters.concat([t]);return new pe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Zi(n,t,e){return new pe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function As(n,t){return Aa(Mt(n),Mt(t))&&n.limitType===t.limitType}function ah(n){return`${ba(Mt(n))}|lt:${n.limitType}`}function We(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>sh(s)).join(", ")}]`),Is(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>on(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>on(s)).join(",")),`Target(${r})`}(Mt(n))}; limitType=${n.limitType})`}function Ss(n,t){return t.isFoundDocument()&&function(r,s){let o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(let o of Kn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(let o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){let d=Qu(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Kn(r),s)||r.endAt&&!function(a,u,h){let d=Qu(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Kn(r),s))}(n,t)}function jm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ch(n){return(t,e)=>{let r=!1;for(let s of Kn(n)){let o=$m(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function $m(n,t,e){let r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,u){let h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?sn(h,d):j(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}var Yt=class{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){let e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(let[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){let r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){let e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Fe(this.inner,(e,r)=>{for(let[s,o]of r)t(s,o)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}};var zm=new st(q.comparator);function Zt(){return zm}var uh=new st(q.comparator);function $n(...n){let t=uh;for(let e of n)t=t.insert(e.key,e);return t}function lh(n){let t=uh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function be(){return Hn()}function hh(){return Hn()}function Hn(){return new Yt(n=>n.toString(),(n,t)=>n.isEqual(t))}var Gm=new st(q.comparator),Km=new ht(q.comparator);function H(...n){let t=Km;for(let e of n)t=t.add(e);return t}var Hm=new ht(G);function Wm(){return Hm}function Ca(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(t)?"-0":t}}function dh(n){return{integerValue:""+n}}function Qm(n,t){return bm(t)?dh(t):Ca(n,t)}var cn=class{constructor(){this._=void 0}};function Jm(n,t,e){return n instanceof Ve?function(s,o){let a={fields:{[Wl]:{stringValue:Hl},[Jl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&va(o)&&(o=bs(o)),o&&(a.fields[Ql]=o),{mapValue:a}}(e,t):n instanceof Ne?mh(n,t):n instanceof ke?ph(n,t):function(s,o){let a=fh(s,o),u=Zu(a)+Zu(s.Ee);return qi(a)&&qi(s.Ee)?dh(u):Ca(s.serializer,u)}(n,t)}function Xm(n,t,e){return n instanceof Ne?mh(n,t):n instanceof ke?ph(n,t):e}function fh(n,t){return n instanceof un?function(r){return qi(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}var Ve=class extends cn{},Ne=class extends cn{constructor(t){super(),this.elements=t}};function mh(n,t){let e=gh(t);for(let r of n.elements)e.some(s=>Bt(s,r))||e.push(r);return{arrayValue:{values:e}}}var ke=class extends cn{constructor(t){super(),this.elements=t}};function ph(n,t){let e=gh(t);for(let r of n.elements)e=e.filter(s=>!Bt(s,r));return{arrayValue:{values:e}}}var un=class extends cn{constructor(t,e){super(),this.serializer=t,this.Ee=e}};function Zu(n){return et(n.integerValue||n.doubleValue)}function gh(n){return Ia(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}var to=class{constructor(t,e){this.field=t,this.transform=e}};function Ym(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Ne&&s instanceof Ne||r instanceof ke&&s instanceof ke?en(r.elements,s.elements,Bt):r instanceof un&&s instanceof un?Bt(r.Ee,s.Ee):r instanceof Ve&&s instanceof Ve}(n.transform,t.transform)}var eo=class{constructor(t,e){this.version=t,this.transformResults=e}},Ce=class n{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new n}static exists(t){return new n(void 0,t)}static updateTime(t){return new n(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}};function $r(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}var ln=class{};function yh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Yr(n.key,Ce.none()):new Oe(n.key,n.data,Ce.none());{let e=n.data,r=xt.empty(),s=new ht(At.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new te(n.key,r,new Ot(s.toArray()),Ce.none())}}function Zm(n,t,e){n instanceof Oe?function(s,o,a){let u=s.value.clone(),h=el(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof te?function(s,o,a){if(!$r(s.precondition,o))return void o.convertToUnknownDocument(a.version);let u=el(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(_h(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function Wn(n,t,e,r){return n instanceof Oe?function(o,a,u,h){if(!$r(o.precondition,a))return u;let d=o.value.clone(),m=nl(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof te?function(o,a,u,h){if(!$r(o.precondition,a))return u;let d=nl(o.fieldTransforms,h,a),m=a.data;return m.setAll(_h(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(y=>y.field))}(n,t,e,r):function(o,a,u){return $r(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function tp(n,t){let e=null;for(let r of n.fieldTransforms){let s=t.data.field(r.field),o=fh(r.transform,s||null);o!=null&&(e===null&&(e=xt.empty()),e.set(r.field,o))}return e||null}function tl(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&en(r,s,(o,a)=>Ym(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}var Oe=class extends ln{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}},te=class extends ln{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}};function _h(n){let t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){let r=n.data.field(e);t.set(e,r)}}),t}function el(n,t,e){let r=new Map;Y(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){let o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Xm(a,u,e[s]))}return r}function nl(n,t,e){let r=new Map;for(let s of n){let o=s.transform,a=e.data.field(s.field);r.set(s.field,Jm(o,a,t))}return r}var Yr=class extends ln{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},no=class extends ln{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var ro=class{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){let r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){let o=this.mutations[s];o.key.isEqual(t.key)&&Zm(o,t,r[s])}}applyToLocalView(t,e){for(let r of this.baseMutations)r.key.isEqual(t.key)&&(e=Wn(r,t,e,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(t.key)&&(e=Wn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){let r=hh();return this.mutations.forEach(s=>{let o=t.get(s.key),a=o.overlayedDocument,u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;let h=yh(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),H())}isEqual(t){return this.batchId===t.batchId&&en(this.mutations,t.mutations,(e,r)=>tl(e,r))&&en(this.baseMutations,t.baseMutations,(e,r)=>tl(e,r))}},so=class n{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Y(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=function(){return Gm}(),o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new n(t,e,r,s)}};var io=class{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var oo=class{constructor(t,e){this.count=t,this.unchangedNames=e}};var it,Q;function ep(n){switch(n){case D.OK:return j(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function wh(n){if(n===void 0)return Qt("GRPC error has no .code"),D.UNKNOWN;switch(n){case it.OK:return D.OK;case it.CANCELLED:return D.CANCELLED;case it.UNKNOWN:return D.UNKNOWN;case it.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case it.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case it.INTERNAL:return D.INTERNAL;case it.UNAVAILABLE:return D.UNAVAILABLE;case it.UNAUTHENTICATED:return D.UNAUTHENTICATED;case it.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case it.NOT_FOUND:return D.NOT_FOUND;case it.ALREADY_EXISTS:return D.ALREADY_EXISTS;case it.PERMISSION_DENIED:return D.PERMISSION_DENIED;case it.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case it.ABORTED:return D.ABORTED;case it.OUT_OF_RANGE:return D.OUT_OF_RANGE;case it.UNIMPLEMENTED:return D.UNIMPLEMENTED;case it.DATA_LOSS:return D.DATA_LOSS;default:return j(39323,{code:n})}}(Q=it||(it={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";var rl=null;var np=new Kt([4294967295,4294967295],0);function sl(n){let t=xl().encode(n),e=new vi;return e.update(t),new Uint8Array(e.digest())}function il(n){let t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Kt([e,r],0),new Kt([s,o],0)]}var ao=class n{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ae(`Invalid padding: ${e}`);if(r<0)throw new Ae(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ae(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ae(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Kt.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(Kt.fromNumber(r)));return s.compare(np)===1&&(s=new Kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;let e=sl(t),[r,s]=il(e);for(let o=0;o<this.hashCount;o++){let a=this.pe(r,s,o);if(!this.ye(a))return!1}return!0}static create(t,e,r){let s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new n(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.fe===0)return;let e=sl(t),[r,s]=il(e);for(let o=0;o<this.hashCount;o++){let a=this.pe(r,s,o);this.we(a)}}we(t){let e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}},Ae=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var Zr=class n{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){let s=new Map;return s.set(t,tr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new n(z.min(),s,new st(G),Zt(),H())}},tr=class n{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new n(r,e,H(),H(),H())}};var Ye=class{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}},ts=class{constructor(t,e){this.targetId=t,this.De=e}},es=class{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}},ns=class{constructor(){this.ve=0,this.Ce=ol(),this.Fe=wt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=H(),e=H(),r=H();return this.Ce.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:j(38017,{changeType:o})}}),new tr(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=ol()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}},co=class{constructor(t){this.We=t,this.Ge=new Map,this.ze=Zt(),this.je=Br(),this.Je=Br(),this.He=new st(G)}Ye(t){for(let e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(let e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,e=>{let r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:j(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach((r,s)=>{this.nt(s)&&e(s)})}it(t){let e=t.targetId,r=t.De.count,s=this.st(e);if(s){let o=s.target;if(Xi(o))if(r===0){let a=new q(o.path);this.Xe(e,a,Pt.newNoDocument(a,z.min()))}else Y(r===1,20013,{expectedCount:r});else{let a=this.ot(e);if(a!==r){let u=this._t(t),h=u?this.ut(u,t,a):1;if(h!==0){this.rt(e);let d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}rl?.ct(function(m,y,v,I,S){var P,R,L,O,U,N;let V={localCacheCount:m,existenceFilterCount:y.count,databaseId:v.database,projectId:v.projectId},x=y.unchangedNames;return x&&(V.bloomFilter={applied:S===0,hashCount:(P=x?.hashCount)!==null&&P!==void 0?P:0,bitmapLength:(O=(L=(R=x?.bits)===null||R===void 0?void 0:R.bitmap)===null||L===void 0?void 0:L.length)!==null&&O!==void 0?O:0,padding:(N=(U=x?.bits)===null||U===void 0?void 0:U.padding)!==null&&N!==void 0?N:0,mightContain:_=>{var p;return(p=I?.mightContain(_))!==null&&p!==void 0&&p}}),V}(a,t.De,this.We.lt(),u,h))}}}}_t(t){let e=t.De.unchangedNames;if(!e||!e.bits)return null;let{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e,a,u;try{a=Xt(r).toUint8Array()}catch(h){if(h instanceof Wr)return fe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new ao(a,s,o)}catch(h){return fe(h instanceof Ae?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.fe===0?null:u}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){let r=this.We.getRemoteKeysForTarget(e),s=0;return r.forEach(o=>{let a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Xe(e,o,null),s++)}),s}Pt(t){let e=new Map;this.Ge.forEach((o,a)=>{let u=this.st(a);if(u){if(o.current&&Xi(u.target)){let h=new q(u.target.path);this.Tt(h).has(a)||this.It(a,h)||this.Xe(a,h,Pt.newNoDocument(h,t))}o.Ne&&(e.set(a,o.Le()),o.ke())}});let r=H();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{let d=this.st(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ze.forEach((o,a)=>a.setReadTime(t));let s=new Zr(t,e,this.He,this.ze,r);return this.ze=Zt(),this.je=Br(),this.Je=Br(),this.He=new st(G),s}Ze(t,e){if(!this.nt(t))return;let r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;let s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){let e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new ns,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ht(G),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ht(G),this.je=this.je.insert(t,e)),e}nt(t){let e=this.st(t)!==null;return e||B("WatchChangeAggregator","Detected inactive target",t),e}st(t){let e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new ns),this.We.getRemoteKeysForTarget(t).forEach(e=>{this.Xe(t,e,null)})}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}};function Br(){return new st(q.comparator)}function ol(){return new st(q.comparator)}var rp={asc:"ASCENDING",desc:"DESCENDING"},sp={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ip={and:"AND",or:"OR"},uo=class{constructor(t,e){this.databaseId=t,this.useProto3Json=e}};function lo(n,t){return n.useProto3Json||Is(t)?t:{value:t}}function rs(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function op(n,t){return rs(n,t.toTimestamp())}function Ft(n){return Y(!!n,49232),z.fromTimestamp(function(e){let r=Jt(e);return new ut(r.seconds,r.nanos)}(n))}function Ra(n,t){return ho(n,t).canonicalString()}function ho(n,t){let e=function(s){return new nt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Eh(n){let t=nt.fromString(n);return Y(Sh(t),10190,{key:t.toString()}),t}function fo(n,t){return Ra(n.databaseId,t.path)}function Si(n,t){let e=Eh(t);if(e.get(1)!==n.databaseId.projectId)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Ih(e))}function Th(n,t){return Ra(n.databaseId,t)}function ap(n){let t=Eh(n);return t.length===4?nt.emptyPath():Ih(t)}function mo(n){return new nt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ih(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function al(n,t,e){return{name:fo(n,t),fields:e.value.mapValue.fields}}function cp(n,t){let e;if("targetChange"in t){t.targetChange;let r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(Y(m===void 0||typeof m=="string",58123),wt.fromBase64String(m||"")):(Y(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),wt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){let m=d.code===void 0?D.UNKNOWN:wh(d.code);return new F(m,d.message||"")}(a);e=new es(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let s=Si(n,r.document.name),o=Ft(r.document.updateTime),a=r.document.createTime?Ft(r.document.createTime):z.min(),u=new xt({mapValue:{fields:r.document.fields}}),h=Pt.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new Ye(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let s=Si(n,r.document),o=r.readTime?Ft(r.readTime):z.min(),a=Pt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new Ye([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let s=Si(n,r.document),o=r.removedTargetIds||[];e=new Ye([],o,s,null)}else{if(!("filter"in t))return j(11601,{At:t});{t.filter;let r=t.filter;r.targetId;let{count:s=0,unchangedNames:o}=r,a=new oo(s,o),u=r.targetId;e=new ts(u,a)}}return e}function up(n,t){let e;if(t instanceof Oe)e={update:al(n,t.key,t.value)};else if(t instanceof Yr)e={delete:fo(n,t.key)};else if(t instanceof te)e={update:al(n,t.key,t.data),updateMask:_p(t.fieldMask)};else{if(!(t instanceof no))return j(16599,{Rt:t.type});e={verify:fo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){let u=a.transform;if(u instanceof Ve)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ne)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ke)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof un)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw j(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:op(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)}(n,t.precondition)),e}function lp(n,t){return n&&n.length>0?(Y(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ft(s.updateTime):Ft(o);return a.isEqual(z.min())&&(a=Ft(o)),new eo(a,s.transformResults||[])}(e,t))):[]}function hp(n,t){return{documents:[Th(n,t.path)]}}function dp(n,t){let e={structuredQuery:{}},r=t.path,s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Th(n,s);let o=function(d){if(d.length!==0)return Ah(Dt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);let a=function(d){if(d.length!==0)return d.map(m=>function(v){return{field:Qe(v.field),direction:pp(v.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);let u=lo(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{Vt:e,parent:s}}function fp(n){let t=ap(n.parent),e=n.structuredQuery,r=e.from?e.from.length:0,s=null;if(r>0){Y(r===1,65062);let m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(y){let v=bh(y);return v instanceof Dt&&nh(v)?v.getFilters():[v]}(e.where));let a=[];e.orderBy&&(a=function(y){return y.map(v=>function(S){return new De(Je(S.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(v))}(e.orderBy));let u=null;e.limit&&(u=function(y){let v;return v=typeof y=="object"?y.value:y,Is(v)?null:v}(e.limit));let h=null;e.startAt&&(h=function(y){let v=!!y.before,I=y.values||[];return new an(I,v)}(e.startAt));let d=null;return e.endAt&&(d=function(y){let v=!y.before,I=y.values||[];return new an(I,v)}(e.endAt)),Um(t,s,a,o,u,"F",h,d)}function mp(n,t){let e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":let r=Je(e.unaryFilter.field);return at.create(r,"==",{doubleValue:NaN});case"IS_NULL":let s=Je(e.unaryFilter.field);return at.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let o=Je(e.unaryFilter.field);return at.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let a=Je(e.unaryFilter.field);return at.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(e){return at.create(Je(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Dt.create(e.compositeFilter.filters.map(r=>bh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(e.compositeFilter.op))}(n):j(30097,{filter:n})}function pp(n){return rp[n]}function gp(n){return sp[n]}function yp(n){return ip[n]}function Qe(n){return{fieldPath:n.canonicalString()}}function Je(n){return At.fromServerFormat(n.fieldPath)}function Ah(n){return n instanceof at?function(e){if(e.op==="=="){if(Wu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NAN"}};if(Hu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NAN"}};if(Hu(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(e.field),op:gp(e.op),value:e.value}}}(n):n instanceof Dt?function(e){let r=e.getFilters().map(s=>Ah(s));return r.length===1?r[0]:{compositeFilter:{op:yp(e.op),filters:r}}}(n):j(54877,{filter:n})}function _p(n){let t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Sh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}var er=class n{constructor(t,e,r,s,o=z.min(),a=z.min(),u=wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new n(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}};var po=class{constructor(t){this.gt=t}};function wp(n){let t=fp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zi(t,t.limit,"L"):t}var ss=class{constructor(){}bt(t,e){this.Dt(t,e),e.vt()}Dt(t,e){if("nullValue"in t)this.Ct(e,5);else if("booleanValue"in t)this.Ct(e,10),e.Ft(t.booleanValue?1:0);else if("integerValue"in t)this.Ct(e,15),e.Ft(et(t.integerValue));else if("doubleValue"in t){let r=et(t.doubleValue);isNaN(r)?this.Ct(e,13):(this.Ct(e,15),Xn(r)?e.Ft(0):e.Ft(r))}else if("timestampValue"in t){let r=t.timestampValue;this.Ct(e,20),typeof r=="string"&&(r=Jt(r)),e.Mt(`${r.seconds||""}`),e.Ft(r.nanos||0)}else if("stringValue"in t)this.xt(t.stringValue,e),this.Ot(e);else if("bytesValue"in t)this.Ct(e,30),e.Nt(Xt(t.bytesValue)),this.Ot(e);else if("referenceValue"in t)this.Bt(t.referenceValue,e);else if("geoPointValue"in t){let r=t.geoPointValue;this.Ct(e,45),e.Ft(r.latitude||0),e.Ft(r.longitude||0)}else"mapValue"in t?Zl(t)?this.Ct(e,Number.MAX_SAFE_INTEGER):Yl(t)?this.Lt(t.mapValue,e):(this.kt(t.mapValue,e),this.Ot(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Ot(e)):j(19022,{Qt:t})}xt(t,e){this.Ct(e,25),this.$t(t,e)}$t(t,e){e.Mt(t)}kt(t,e){let r=t.fields||{};this.Ct(e,55);for(let s of Object.keys(r))this.xt(s,e),this.Dt(r[s],e)}Lt(t,e){var r,s;let o=t.fields||{};this.Ct(e,53);let a=rn,u=((s=(r=o[a].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Ct(e,15),e.Ft(et(u)),this.xt(a,e),this.Dt(o[a],e)}qt(t,e){let r=t.values||[];this.Ct(e,50);for(let s of r)this.Dt(s,e)}Bt(t,e){this.Ct(e,37),q.fromName(t).path.forEach(r=>{this.Ct(e,60),this.$t(r,e)})}Ct(t,e){t.Ft(e)}Ot(t){t.Ft(2)}};ss.Ut=new ss;var go=class{constructor(){this.Dn=new yo}addToCollectionParentIndex(t,e){return this.Dn.add(e),k.resolve()}getCollectionParents(t,e){return k.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return k.resolve()}deleteFieldIndex(t,e){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,e){return k.resolve()}getDocumentsMatchingTarget(t,e){return k.resolve(null)}getIndexType(t,e){return k.resolve(0)}getFieldIndexes(t,e){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,e){return k.resolve(Pe.min())}getMinOffsetFromCollectionGroup(t,e){return k.resolve(Pe.min())}updateCollectionGroup(t,e,r){return k.resolve()}updateIndexEntries(t,e){return k.resolve()}},yo=class{constructor(){this.index={}}add(t){let e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(nt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){let e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(nt.comparator)).toArray()}};var $y=new Uint8Array(0);var cl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Ch=41943040,St=class n{static withCacheSize(t){return new n(t,n.DEFAULT_COLLECTION_PERCENTILE,n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}};St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(Ch,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);var nr=class n{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new n(0)}static ur(){return new n(-1)}};var ul="LruGarbageCollector",vp=1048576;function ll([n,t],[e,r]){let s=G(n,e);return s===0?G(t,r):s}var _o=class{constructor(t){this.Tr=t,this.buffer=new ht(ll),this.Ir=0}dr(){return++this.Ir}Er(t){let e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{let r=this.buffer.last();ll(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}},wo=class{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){B(ul,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){yn(e)?B(ul,"Ignoring IndexedDB error during garbage collection: ",e):await gn(e)}await this.Rr(3e5)})}},vo=class{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return k.resolve(nn.ue);let r=new _o(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(cl)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cl):this.pr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,a,u,h,d,m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(t,s))).next(y=>(r=y,u=Date.now(),this.removeTargets(t,r,e))).next(y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(y=>(d=Date.now(),He()<=W.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y})))}};function Ep(n,t){return new vo(n,t)}var Eo=class{constructor(){this.changes=new Yt(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Pt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();let r=this.changes.get(e);return r!==void 0?k.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}};var To=class{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}};var Io=class{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&Wn(r.mutation,s,Ot.empty(),ut.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,H()).next(()=>r))}getLocalViewOfDocuments(t,e,r=H()){let s=be();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=$n();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){let r=be();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,H()))}populateOverlays(t,e,r){let s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Zt(),a=Hn(),u=function(){return Hn()}();return e.forEach((h,d)=>{let m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof te)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Wn(m.mutation,d,m.mutation.getFieldMask(),ut.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>{var y;return u.set(d,new To(m,(y=a.get(d))!==null&&y!==void 0?y:null))}),u))}recalculateAndSaveOverlays(t,e){let r=Hn(),s=new st((a,u)=>a-u),o=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(let u of a)u.keys().forEach(h=>{let d=e.get(h);if(d===null)return;let m=r.get(h)||Ot.empty();m=u.applyToLocalView(d,m),r.set(h,m);let y=(s.get(u.batchId)||H()).add(h);s=s.insert(u.batchId,y)})}).next(()=>{let a=[],u=s.getReverseIterator();for(;u.hasNext();){let h=u.getNext(),d=h.key,m=h.value,y=hh();m.forEach(v=>{if(!o.has(v)){let I=yh(e.get(v),r.get(v));I!==null&&y.set(v,I),o=o.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,y))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):oh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{let a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):k.resolve(be()),u=Jn,h=o;return a.next(d=>k.forEach(d,(m,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(m)?k.resolve():this.remoteDocumentCache.getEntry(t,m).next(v=>{h=h.insert(m,v)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,H())).next(m=>({batchId:u,changes:lh(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=$n();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){let o=e.collectionGroup,a=$n();return this.indexManager.getCollectionParents(t,o).next(u=>k.forEach(u,h=>{let d=function(y,v){return new pe(v,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((y,v)=>{a=a.insert(y,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{let m=d.getKey();a.get(m)===null&&(a=a.insert(m,Pt.newInvalidDocument(m)))});let u=$n();return a.forEach((h,d)=>{let m=o.get(h);m!==void 0&&Wn(m.mutation,d,Ot.empty(),ut.now()),Ss(e,d)&&(u=u.insert(h,d))}),u})}};var bo=class{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return k.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ft(s.createTime)}}(e)),k.resolve()}getNamedQuery(t,e){return k.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,function(s){return{name:s.name,query:wp(s.bundledQuery),readTime:Ft(s.readTime)}}(e)),k.resolve()}};var Ao=class{constructor(){this.overlays=new st(q.comparator),this.kr=new Map}getOverlay(t,e){return k.resolve(this.overlays.get(e))}getOverlays(t,e){let r=be();return k.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.wt(t,e,o)}),k.resolve()}removeOverlaysForBatchId(t,e,r){let s=this.kr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(t,e,r){let s=be(),o=e.length+1,a=new q(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){let h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return k.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new st((d,m)=>d-m),a=this.overlays.getIterator();for(;a.hasNext();){let d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=be(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}let u=be(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return k.resolve(u)}wt(t,e,r){let s=this.overlays.get(r.key);if(s!==null){let a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new io(e,r));let o=this.kr.get(e);o===void 0&&(o=H(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}};var So=class{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(t){return k.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,k.resolve()}};var rr=class{constructor(){this.qr=new ht(ot.Qr),this.$r=new ht(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){let r=new ot(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach(r=>this.removeReference(r,e))}zr(t){let e=new q(new nt([])),r=new ot(e,t),s=new ot(e,t+1),o=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}jr(){this.qr.forEach(t=>this.Wr(t))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){let e=new q(new nt([])),r=new ot(e,t),s=new ot(e,t+1),o=H();return this.$r.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){let e=new ot(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}},ot=class{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return q.comparator(t.key,e.key)||G(t.Hr,e.Hr)}static Ur(t,e){return G(t.Hr,e.Hr)||q.comparator(t.key,e.key)}};var Co=class{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ht(ot.Qr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){let o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let a=new ro(o,e,r,s);this.mutationQueue.push(a);for(let u of s)this.Yr=this.Yr.add(new ot(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return k.resolve(a)}lookupMutationBatch(t,e){return k.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){let r=e+1,s=this.Xr(r),o=s<0?0:s;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?wa:this.er-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){let r=new ot(e,0),s=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],a=>{let u=this.Zr(a.Hr);o.push(u)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(G);return e.forEach(s=>{let o=new ot(s,0),a=new ot(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){let r=e.path,s=r.length+1,o=r;q.isDocumentKey(o)||(o=o.child(""));let a=new ot(new q(o),0),u=new ht(G);return this.Yr.forEachWhile(h=>{let d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),k.resolve(this.ei(u))}ei(t){let e=[];return t.forEach(r=>{let s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Y(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(e.mutations,s=>{let o=new ot(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Yr=r})}rr(t){}containsKey(t,e){let r=new ot(e,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){let e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}};var Ro=class{constructor(t){this.ni=t,this.docs=function(){return new st(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){let r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){let e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){let r=this.docs.get(e);return k.resolve(r?r.document.mutableCopy():Pt.newInvalidDocument(e))}getEntries(t,e){let r=Zt();return e.forEach(s=>{let o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Pt.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Zt(),a=e.path,u=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){let{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Em(vm(m),r)<=0||(s.has(m.key)||Ss(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(t,e,r,s){j(9500)}ri(t,e){return k.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new xo(this)}getSize(t){return k.resolve(this.size)}},xo=class extends Eo{constructor(t){super(),this.Or=t}applyChanges(t){let e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)}),k.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}};var Po=class{constructor(t){this.persistence=t,this.ii=new Yt(e=>ba(e),Aa),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new rr,this.targetCount=0,this._i=nr.ar()}forEachTarget(t,e){return this.ii.forEach((r,s)=>e(s)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),k.resolve()}hr(t){this.ii.set(t.target,t);let e=t.targetId;e>this.highestTargetId&&(this._i=new nr(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,k.resolve()}updateTargetData(t,e){return this.hr(e),k.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,e,r){let s=0,o=[];return this.ii.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ii.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),k.waitFor(o).next(()=>s)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,e){let r=this.ii.get(e)||null;return k.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),k.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);let s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),k.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),k.resolve()}getMatchingKeysForTargetId(t,e){let r=this.oi.Jr(e);return k.resolve(r)}containsKey(t,e){return k.resolve(this.oi.containsKey(e))}};var is=class{constructor(t,e){this.ai={},this.overlays={},this.ui=new nn(0),this.ci=!1,this.ci=!0,this.li=new So,this.referenceDelegate=t(this),this.hi=new Po(this),this.indexManager=new go,this.remoteDocumentCache=function(s){return new Ro(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new po(e),this.Ti=new bo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Ao,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Co(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){B("MemoryPersistence","Starting transaction:",t);let s=new Do(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(o=>this.referenceDelegate.di(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return k.or(Object.values(this.ai).map(r=>()=>r.containsKey(t,e)))}},Do=class extends Fi{constructor(t){super(),this.currentSequenceNumber=t}},Vo=class n{constructor(t){this.persistence=t,this.Ai=new rr,this.Ri=null}static Vi(t){return new n(t)}get mi(){if(this.Ri)return this.Ri;throw j(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),k.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),k.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach(s=>this.mi.add(s.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.mi.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ii(){this.Ri=new Set}di(t){let e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,r=>{let s=q.fromPath(r);return this.fi(t,s).next(o=>{o||e.removeEntry(s,z.min())})}).next(()=>(this.Ri=null,e.apply(t)))}updateLimboDocument(t,e){return this.fi(t,e).next(r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())})}Pi(t){return 0}fi(t,e){return k.or([()=>k.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}},os=class n{constructor(t,e){this.persistence=t,this.gi=new Yt(r=>Am(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ep(this,e)}static Vi(t,e){return new n(t,e)}Ii(){}di(t){return k.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){let e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}yr(t){let e=0;return this.gr(t,r=>{e++}).next(()=>e)}gr(t,e){return k.forEach(this.gi,(r,s)=>this.Sr(t,r,s).next(o=>o?k.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0,s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,a=>this.Sr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),k.resolve()}removeTarget(t,e){let r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),k.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),k.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),k.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=qr(t.data.value)),e}Sr(t,e,r){return k.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{let s=this.gi.get(e);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}};var No=class n{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=H(),s=H();for(let o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new n(t,e.fromCache,r,s)}};var ko=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}};var Oo=class{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return du()?8:Im(hu())>0?6:4}()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){let o={result:null};return this.ps(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ys(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;let a=new ko;return this.ws(t,e,a).next(u=>{if(o.result=u,this.Rs)return this.Ss(t,e,a,u.size)})}).next(()=>o.result)}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(He()<=W.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",We(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(He()<=W.DEBUG&&B("QueryEngine","Query:",We(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(He()<=W.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",We(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Mt(e))):k.resolve())}ps(t,e){if(Yu(e))return k.resolve(null);let r=Mt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Zi(e,null,"F"),r=Mt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{let a=H(...o);return this.gs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{let d=this.bs(e,u);return this.Ds(e,d,a,h.readTime)?this.ps(t,Zi(e,null,"F")):this.vs(t,d,e,h)}))})))}ys(t,e,r,s){return Yu(e)||s.isEqual(z.min())?k.resolve(null):this.gs.getDocuments(t,r).next(o=>{let a=this.bs(e,o);return this.Ds(e,a,r,s)?k.resolve(null):(He()<=W.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),We(e)),this.vs(t,a,e,wm(s,Jn)).next(u=>u))})}bs(t,e){let r=new ht(ch(t));return e.forEach((s,o)=>{Ss(t,o)&&(r=r.add(o))}),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;let o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return He()<=W.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",We(e)),this.gs.getDocumentsMatchingQuery(t,e,Pe.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}};var xa="LocalStore",Tp=3e8,Lo=class{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new st(G),this.Ms=new Yt(o=>ba(o),Aa),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Io(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Fs))}};function Ip(n,t,e,r){return new Lo(n,t,e,r)}async function Rh(n,t){let e=$(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{let a=[],u=[],h=H();for(let d of s){a.push(d.batchId);for(let m of d.mutations)h=h.add(m.key)}for(let d of o){u.push(d.batchId);for(let m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Bs:d,removedBatchIds:a,addedBatchIds:u}))})})}function bp(n,t){let e=$(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){let y=d.batch,v=y.keys(),I=k.resolve();return v.forEach(S=>{I=I.next(()=>m.getEntry(h,S)).next(P=>{let R=d.docVersions.get(S);Y(R!==null,48541),P.version.compareTo(R)<0&&(y.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))})}),I.next(()=>u.mutationQueue.removeMutationBatch(h,y))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=H();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function xh(n){let t=$(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function Ap(n,t){let e=$(n),r=t.snapshotVersion,s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{let a=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;let u=[];t.targetChanges.forEach((m,y)=>{let v=s.get(y);if(!v)return;u.push(e.hi.removeMatchingKeys(o,m.removedDocuments,y).next(()=>e.hi.addMatchingKeys(o,m.addedDocuments,y)));let I=v.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(y)!==null?I=I.withResumeToken(wt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(m.resumeToken,r)),s=s.insert(y,I),function(P,R,L){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Tp?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(v,I,m)&&u.push(e.hi.updateTargetData(o,I))});let h=Zt(),d=H();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Sp(o,a,t.documentUpdates).next(m=>{h=m.Ls,d=m.ks})),!r.isEqual(z.min())){let m=e.hi.getLastRemoteSnapshotVersion(o).next(y=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return k.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.Fs=s,o))}function Sp(n,t,e){let r=H(),s=H();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Zt();return e.forEach((u,h)=>{let d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):B(xa,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Ls:a,ks:s}})}function Cp(n,t){let e=$(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=wa),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Rp(n,t){let e=$(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.hi.getTargetData(r,t).next(o=>o?(s=o,k.resolve(s)):e.hi.allocateTargetId(r).next(a=>(s=new er(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{let s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r})}async function Mo(n,t,e){let r=$(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!yn(a))throw a;B(xa,`Failed to update sequence numbers for target ${t}: ${a}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function hl(n,t,e){let r=$(n),s=z.min(),o=H();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){let y=$(h),v=y.Ms.get(m);return v!==void 0?k.resolve(y.Fs.get(v)):y.hi.getTargetData(d,m)}(r,a,Mt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:z.min(),e?o:H())).next(u=>(xp(r,jm(t),u),{documents:u,qs:o})))}function xp(n,t,e){let r=n.xs.get(t)||z.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.xs.set(t,r)}var as=class{constructor(){this.activeTargetIds=Wm()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){let t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}};var Fo=class{constructor(){this.Fo=new as,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new as,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}};var Bo=class{xo(t){}shutdown(){}};var dl="ConnectivityMonitor",cs=class{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){B(dl,"Network connectivity changed: AVAILABLE");for(let t of this.ko)t(0)}Lo(){B(dl,"Network connectivity changed: UNAVAILABLE");for(let t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var Ur=null;function Uo(){return Ur===null?Ur=function(){return 268435456+Math.round(2147483648*Math.random())}():Ur++,"0x"+Ur.toString(16)}var Ci="RestConnection",Pp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"},qo=class{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Qr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){let a=Uo(),u=this.Go(t,e.toUriEncodedString());B(Ci,`Sending RPC '${t}' ${a}:`,u,r);let h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);let{host:d}=new URL(u),m=Vr(d);return this.jo(t,u,h,r,m).then(y=>(B(Ci,`Received RPC '${t}' ${a}: `,y),y),y=>{throw fe(Ci,`RPC '${t}' ${a} failed with error: `,y,"url: ",u,"request:",r),y})}Jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Go(t,e){let r=Pp[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}};var jo=class{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}};var yt="WebChannelConnection",$o=class extends qo{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){let a=Uo();return new Promise((u,h)=>{let d=new Ei;d.setWithCredentials(!0),d.listenOnce(Ti.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case jn.NO_ERROR:let y=d.getResponseJson();B(yt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(y)),u(y);break;case jn.TIMEOUT:B(yt,`RPC '${t}' ${a} timed out`),h(new F(D.DEADLINE_EXCEEDED,"Request time out"));break;case jn.HTTP_ERROR:let v=d.getStatus();if(B(yt,`RPC '${t}' ${a} failed with status:`,v,"response text:",d.getResponseText()),v>0){let I=d.getResponseJson();Array.isArray(I)&&(I=I[0]);let S=I?.error;if(S&&S.status&&S.message){let P=function(L){let O=L.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(O)>=0?O:D.UNKNOWN}(S.status);h(new F(P,S.message))}else h(new F(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new F(D.UNAVAILABLE,"Connection failed."));break;default:j(9055,{c_:t,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{B(yt,`RPC '${t}' ${a} completed.`)}});let m=JSON.stringify(s);B(yt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}P_(t,e,r){let s=Uo(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ai(),u=bi(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;let m=o.join("");B(yt,`Creating RPC '${t}' stream ${s}: ${m}`,h);let y=a.createWebChannel(m,h);this.T_(y);let v=!1,I=!1,S=new jo({Ho:R=>{I?B(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,R):(v||(B(yt,`Opening RPC '${t}' stream ${s} transport.`),y.open(),v=!0),B(yt,`RPC '${t}' stream ${s} sending:`,R),y.send(R))},Yo:()=>y.close()}),P=(R,L,O)=>{R.listen(L,U=>{try{O(U)}catch(N){setTimeout(()=>{throw N},0)}})};return P(y,Ke.EventType.OPEN,()=>{I||(B(yt,`RPC '${t}' stream ${s} transport opened.`),S.s_())}),P(y,Ke.EventType.CLOSE,()=>{I||(I=!0,B(yt,`RPC '${t}' stream ${s} transport closed`),S.__(),this.I_(y))}),P(y,Ke.EventType.ERROR,R=>{I||(I=!0,fe(yt,`RPC '${t}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),S.__(new F(D.UNAVAILABLE,"The operation could not be completed")))}),P(y,Ke.EventType.MESSAGE,R=>{var L;if(!I){let O=R.data[0];Y(!!O,16349);let U=O,N=U?.error||((L=U[0])===null||L===void 0?void 0:L.error);if(N){B(yt,`RPC '${t}' stream ${s} received error:`,N);let V=N.status,x=function(g){let E=it[g];if(E!==void 0)return wh(E)}(V),_=N.message;x===void 0&&(x=D.INTERNAL,_="Unknown error status: "+V+" with message "+N.message),I=!0,S.__(new F(x,_)),y.close()}else B(yt,`RPC '${t}' stream ${s} received:`,O),S.a_(O)}}),P(u,Ii.STAT_EVENT,R=>{R.stat===Mr.PROXY?B(yt,`RPC '${t}' stream ${s} detected buffering proxy`):R.stat===Mr.NOPROXY&&B(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.o_()},0),S}terminate(){this.u_.forEach(t=>t.close()),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter(e=>e===t)}};function Ri(){return typeof document<"u"?document:null}function Cs(n){return new uo(n,!0)}var us=class{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();let e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),t())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}};var fl="PersistentStream",ls=class{constructor(t,e,r,s,o,a,u,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new us(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(Qt(e.toString()),Qt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;let t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===e&&this.W_(r,s)},r=>{t(()=>{let s=new F(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(t,e){let r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(t){return B(fl,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget(()=>this.b_===t?e():(B(fl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},zo=class extends ls{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();let e=cp(this.serializer,t),r=function(o){if(!("targetChange"in o))return z.min();let a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?Ft(a.readTime):z.min()}(t);return this.listener.J_(e,r)}H_(t){let e={};e.database=mo(this.serializer),e.addTarget=function(o,a){let u,h=a.target;if(u=Xi(h)?{documents:hp(o,h)}:{query:dp(o,h).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=vh(o,a.resumeToken);let d=lo(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=rs(o,a.snapshotVersion.toTimestamp());let d=lo(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);let r=mp(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){let e={};e.database=mo(this.serializer),e.removeTarget=t,this.k_(e)}},Go=class extends ls{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return Y(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Y(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){Y(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();let e=lp(t.writeResults,t.commitTime),r=Ft(t.commitTime);return this.listener.ta(r,e)}na(){let t={};t.database=mo(this.serializer),this.k_(t)}X_(t){let e={streamToken:this.lastStreamToken,writes:t.map(r=>up(this.serializer,r))};this.k_(e)}};var Ko=class{},Ho=class extends Ko{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,ho(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(D.UNKNOWN,o.toString())})}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Jo(t,ho(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(D.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}},Wo=class{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){let e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Qt(e),this._a=!1):B("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}};var Le="RemoteStore",Qo=class{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Be(this)&&(B(Le,"Restarting streams for network reachability change."),await async function(h){let d=$(h);d.Ia.add(4),await ur(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Rs(d)}(this))})}),this.Aa=new Wo(r,s)}};async function Rs(n){if(Be(n))for(let t of n.da)await t(!0)}async function ur(n){for(let t of n.da)await t(!1)}function Ph(n,t){let e=$(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Na(e)?Va(e):_n(e).x_()&&Da(e,t))}function Pa(n,t){let e=$(n),r=_n(e);e.Ta.delete(t),r.x_()&&Dh(e,t),e.Ta.size===0&&(r.x_()?r.B_():Be(e)&&e.Aa.set("Unknown"))}function Da(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){let e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}_n(n).H_(t)}function Dh(n,t){n.Ra.$e(t),_n(n).Y_(t)}function Va(n){n.Ra=new co({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),_n(n).start(),n.Aa.aa()}function Na(n){return Be(n)&&!_n(n).M_()&&n.Ta.size>0}function Be(n){return $(n).Ia.size===0}function Vh(n){n.Ra=void 0}async function Dp(n){n.Aa.set("Online")}async function Vp(n){n.Ta.forEach((t,e)=>{Da(n,t)})}async function Np(n,t){Vh(n),Na(n)?(n.Aa.la(t),Va(n)):n.Aa.set("Unknown")}async function kp(n,t,e){if(n.Aa.set("Online"),t instanceof es&&t.state===2&&t.cause)try{await async function(s,o){let a=o.cause;for(let u of o.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))}(n,t)}catch(r){B(Le,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await hs(n,r)}else if(t instanceof Ye?n.Ra.Ye(t):t instanceof ts?n.Ra.it(t):n.Ra.et(t),!e.isEqual(z.min()))try{let r=await xh(n.localStore);e.compareTo(r)>=0&&await function(o,a){let u=o.Ra.Pt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){let m=o.Ta.get(d);m&&o.Ta.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{let m=o.Ta.get(h);if(!m)return;o.Ta.set(h,m.withResumeToken(wt.EMPTY_BYTE_STRING,m.snapshotVersion)),Dh(o,h);let y=new er(m.target,h,d,m.sequenceNumber);Da(o,y)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){B(Le,"Failed to raise snapshot:",r),await hs(n,r)}}async function hs(n,t,e){if(!yn(t))throw t;n.Ia.add(1),await ur(n),n.Aa.set("Offline"),e||(e=()=>xh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B(Le,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await Rs(n)})}function Nh(n,t){return t().catch(e=>hs(n,e,t))}async function xs(n){let t=$(n),e=ge(t),r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:wa;for(;Op(t);)try{let s=await Cp(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,Lp(t,s)}catch(s){await hs(t,s)}kh(t)&&Oh(t)}function Op(n){return Be(n)&&n.Pa.length<10}function Lp(n,t){n.Pa.push(t);let e=ge(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function kh(n){return Be(n)&&!ge(n).M_()&&n.Pa.length>0}function Oh(n){ge(n).start()}async function Mp(n){ge(n).na()}async function Fp(n){let t=ge(n);for(let e of n.Pa)t.X_(e.mutations)}async function Bp(n,t,e){let r=n.Pa.shift(),s=so.from(r,t,e);await Nh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await xs(n)}async function Up(n,t){t&&ge(n).Z_&&await async function(r,s){if(function(a){return ep(a)&&a!==D.ABORTED}(s.code)){let o=r.Pa.shift();ge(r).N_(),await Nh(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await xs(r)}}(n,t),kh(n)&&Oh(n)}async function ml(n,t){let e=$(n);e.asyncQueue.verifyOperationInProgress(),B(Le,"RemoteStore received new credentials");let r=Be(e);e.Ia.add(3),await ur(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Rs(e)}async function qp(n,t){let e=$(n);t?(e.Ia.delete(2),await Rs(e)):t||(e.Ia.add(2),await ur(e),e.Aa.set("Unknown"))}function _n(n){return n.Va||(n.Va=function(e,r,s){let o=$(e);return o.ia(),new zo(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:Dp.bind(null,n),e_:Vp.bind(null,n),n_:Np.bind(null,n),J_:kp.bind(null,n)}),n.da.push(async t=>{t?(n.Va.N_(),Na(n)?Va(n):n.Aa.set("Unknown")):(await n.Va.stop(),Vh(n))})),n.Va}function ge(n){return n.ma||(n.ma=function(e,r,s){let o=$(e);return o.ia(),new Go(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Mp.bind(null,n),n_:Up.bind(null,n),ea:Fp.bind(null,n),ta:Bp.bind(null,n)}),n.da.push(async t=>{t?(n.ma.N_(),await xs(n)):(await n.ma.stop(),n.Pa.length>0&&(B(Le,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}var Jo=class n{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){let a=Date.now()+r,u=new n(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function ka(n,t){if(Qt("AsyncQueue",`${t}: ${n}`),yn(n))return new F(D.UNAVAILABLE,`${t}: ${n}`);throw n}var ds=class n{static emptySet(t){return new n(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=$n(),this.sortedSet=new st(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){let e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){let e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){let e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof n)||this.size!==t.size)return!1;let e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){let s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){let t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){let r=new n;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}};var fs=class{constructor(){this.fa=new st(q.comparator)}track(t){let e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):j(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){let t=[];return this.fa.inorderTraversal((e,r)=>{t.push(r)}),t}},hn=class n{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){let a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new n(t,e,ds.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&As(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;let e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}};var Xo=class{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(t=>t.ba())}},Yo=class{constructor(){this.queries=pl(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){let s=$(e),o=s.queries;s.queries=pl(),o.forEach((a,u)=>{for(let h of u.wa)h.onError(r)})})(this,new F(D.ABORTED,"Firestore shutting down"))}};function pl(){return new Yt(n=>ah(n),As)}async function jp(n,t){let e=$(n),r=3,s=t.query,o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new Xo,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){let u=ka(a,`Initialization of query '${We(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Oa(e)}async function $p(n,t){let e=$(n),r=t.query,s=3,o=e.queries.get(r);if(o){let a=o.wa.indexOf(t);a>=0&&(o.wa.splice(a,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function zp(n,t){let e=$(n),r=!1;for(let s of t){let o=s.query,a=e.queries.get(o);if(a){for(let u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&Oa(e)}function Gp(n,t,e){let r=$(n),s=r.queries.get(t);if(s)for(let o of s.wa)o.onError(e);r.queries.delete(t)}function Oa(n){n.Da.forEach(t=>{t.next()})}var Zo,gl;(gl=Zo||(Zo={})).Fa="default",gl.Cache="cache";var ta=class{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){let r=[];for(let s of t.docChanges)s.type!==3&&r.push(s);t=new hn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;let r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;let e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=hn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Zo.Cache}};var ms=class{constructor(t){this.key=t}},ps=class{constructor(t){this.key=t}},ea=class{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=H(),this.mutatedKeys=H(),this.Xa=ch(t),this.eu=new ds(this.Xa)}get tu(){return this.Ha}nu(t,e){let r=e?e.ru:new fs,s=e?e.eu:this.eu,o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1,h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,y)=>{let v=s.get(m),I=Ss(this.query,y)?y:null,S=!!v&&this.mutatedKeys.has(v.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations),R=!1;v&&I?v.data.isEqual(I.data)?S!==P&&(r.track({type:3,doc:I}),R=!0):this.iu(v,I)||(r.track({type:2,doc:I}),R=!0,(h&&this.Xa(I,h)>0||d&&this.Xa(I,d)<0)&&(u=!0)):!v&&I?(r.track({type:0,doc:I}),R=!0):v&&!I&&(r.track({type:1,doc:v}),R=!0,(h||d)&&(u=!0)),R&&(I?(a=a.add(I),o=P?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){let m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:u,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){let o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;let a=t.ru.pa();a.sort((m,y)=>function(I,S){let P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{At:R})}};return P(I)-P(S)}(m.type,y.type)||this.Xa(m.doc,y.doc)),this.su(r),s=s!=null&&s;let u=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,d=h!==this.Ya;return this.Ya=h,a.length!==0||d?{snapshot:new hn(this.query,t.eu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fs,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=t.current)}ou(){if(!this.current)return[];let t=this.Za;this.Za=H(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});let e=[];return t.forEach(r=>{this.Za.has(r)||e.push(new ps(r))}),this.Za.forEach(r=>{t.has(r)||e.push(new ms(r))}),e}uu(t){this.Ha=t.qs,this.Za=H();let e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return hn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}},La="SyncEngine",na=class{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}},ra=class{constructor(t){this.key=t,this.lu=!1}},sa=class{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Yt(u=>ah(u),As),this.Tu=new Map,this.Iu=new Set,this.du=new st(q.comparator),this.Eu=new Map,this.Au=new rr,this.Ru={},this.Vu=new Map,this.mu=nr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}};async function Kp(n,t,e=!0){let r=qh(n),s,o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Lh(r,t,e,!0),s}async function Hp(n,t){let e=qh(n);await Lh(e,t,!0,!1)}async function Lh(n,t,e,r){let s=await Rp(n.localStore,Mt(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e),u;return r&&(u=await Wp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ph(n.remoteStore,s),u}async function Wp(n,t,e,r,s){n.gu=(y,v,I)=>async function(P,R,L,O){let U=R.view.nu(L);U.Ds&&(U=await hl(P.localStore,R.query,!1).then(({documents:_})=>R.view.nu(_,U)));let N=O&&O.targetChanges.get(R.targetId),V=O&&O.targetMismatches.get(R.targetId)!=null,x=R.view.applyChanges(U,P.isPrimaryClient,N,V);return _l(P,R.targetId,x._u),x.snapshot}(n,y,v,I);let o=await hl(n.localStore,t,!0),a=new ea(t,o.qs),u=a.nu(o.documents),h=tr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);_l(n,e,d._u);let m=new na(t,e,a);return n.Pu.set(t,m),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),d.snapshot}async function Qp(n,t,e){let r=$(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter(a=>!As(a,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Pa(r.remoteStore,s.targetId),ia(r,s.targetId)}).catch(gn)):(ia(r,s.targetId),await Mo(r.localStore,s.targetId,!0))}async function Jp(n,t){let e=$(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Pa(e.remoteStore,r.targetId))}async function Xp(n,t,e){let r=sg(n);try{let s=await function(a,u){let h=$(a),d=ut.now(),m=u.reduce((I,S)=>I.add(S.key),H()),y,v;return h.persistence.runTransaction("Locally write mutations","readwrite",I=>{let S=Zt(),P=H();return h.Os.getEntries(I,m).next(R=>{S=R,S.forEach((L,O)=>{O.isValidDocument()||(P=P.add(L))})}).next(()=>h.localDocuments.getOverlayedDocuments(I,S)).next(R=>{y=R;let L=[];for(let O of u){let U=tp(O,y.get(O.key).overlayedDocument);U!=null&&L.push(new te(O.key,U,th(U.value.mapValue),Ce.exists(!0)))}return h.mutationQueue.addMutationBatch(I,d,L,u)}).next(R=>{v=R;let L=R.applyToLocalDocumentSet(y,P);return h.documentOverlayCache.saveOverlays(I,R.batchId,L)})}).then(()=>({batchId:v.batchId,changes:lh(y)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.Ru[a.currentUser.toKey()];d||(d=new st(G)),d=d.insert(u,h),a.Ru[a.currentUser.toKey()]=d}(r,s.batchId,e),await lr(r,s.changes),await xs(r.remoteStore)}catch(s){let o=ka(s,"Failed to persist write");e.reject(o)}}async function Mh(n,t){let e=$(n);try{let r=await Ap(e.localStore,t);t.targetChanges.forEach((s,o)=>{let a=e.Eu.get(o);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Y(a.lu,14607):s.removedDocuments.size>0&&(Y(a.lu,42227),a.lu=!1))}),await lr(e,r,t)}catch(r){await gn(r)}}function yl(n,t,e){let r=$(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){let s=[];r.Pu.forEach((o,a)=>{let u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){let h=$(a);h.onlineState=u;let d=!1;h.queries.forEach((m,y)=>{for(let v of y.wa)v.va(u)&&(d=!0)}),d&&Oa(h)}(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Yp(n,t,e){let r=$(n);r.sharedClientState.updateQueryState(t,"rejected",e);let s=r.Eu.get(t),o=s&&s.key;if(o){let a=new st(q.comparator);a=a.insert(o,Pt.newNoDocument(o,z.min()));let u=H().add(o),h=new Zr(z.min(),new Map,new st(G),a,u);await Mh(r,h),r.du=r.du.remove(o),r.Eu.delete(t),Ma(r)}else await Mo(r.localStore,t,!1).then(()=>ia(r,t,e)).catch(gn)}async function Zp(n,t){let e=$(n),r=t.batch.batchId;try{let s=await bp(e.localStore,t);Bh(e,r,null),Fh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await lr(e,s)}catch(s){await gn(s)}}async function tg(n,t,e){let r=$(n);try{let s=await function(a,u){let h=$(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(y=>(Y(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(d,y))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Bh(r,t,e),Fh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await lr(r,s)}catch(s){await gn(s)}}function Fh(n,t){(n.Vu.get(t)||[]).forEach(e=>{e.resolve()}),n.Vu.delete(t)}function Bh(n,t,e){let r=$(n),s=r.Ru[r.currentUser.toKey()];if(s){let o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function ia(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(let r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach(r=>{n.Au.containsKey(r)||Uh(n,r)})}function Uh(n,t){n.Iu.delete(t.path.canonicalString());let e=n.du.get(t);e!==null&&(Pa(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),Ma(n))}function _l(n,t,e){for(let r of e)r instanceof ms?(n.Au.addReference(r.key,t),eg(n,r)):r instanceof ps?(B(La,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Uh(n,r.key)):j(19791,{yu:r})}function eg(n,t){let e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(B(La,"New document in limbo: "+e),n.Iu.add(r),Ma(n))}function Ma(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){let t=n.Iu.values().next().value;n.Iu.delete(t);let e=new q(nt.fromString(t)),r=n.mu.next();n.Eu.set(r,new ra(e)),n.du=n.du.insert(e,r),Ph(n.remoteStore,new er(Mt(Sa(e.path)),r,"TargetPurposeLimboResolution",nn.ue))}}async function lr(n,t,e){let r=$(n),s=[],o=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((u,h)=>{a.push(r.gu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){let y=d?!d.fromCache:(m=e?.targetChanges.get(h.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(d){s.push(d);let y=No.Es(h.targetId,d);o.push(y)}}))}),await Promise.all(a),r.hu.J_(s),await async function(h,d){let m=$(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>k.forEach(d,v=>k.forEach(v.Is,I=>m.persistence.referenceDelegate.addReference(y,v.targetId,I)).next(()=>k.forEach(v.ds,I=>m.persistence.referenceDelegate.removeReference(y,v.targetId,I)))))}catch(y){if(!yn(y))throw y;B(xa,"Failed to update sequence numbers: "+y)}for(let y of d){let v=y.targetId;if(!y.fromCache){let I=m.Fs.get(v),S=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(S);m.Fs=m.Fs.insert(v,P)}}}(r.localStore,o))}async function ng(n,t){let e=$(n);if(!e.currentUser.isEqual(t)){B(La,"User change. New user:",t.toKey());let r=await Rh(e.localStore,t);e.currentUser=t,function(o,a){o.Vu.forEach(u=>{u.forEach(h=>{h.reject(new F(D.CANCELLED,a))})}),o.Vu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await lr(e,r.Bs)}}function rg(n,t){let e=$(n),r=e.Eu.get(t);if(r&&r.lu)return H().add(r.key);{let s=H(),o=e.Tu.get(t);if(!o)return s;for(let a of o){let u=e.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function qh(n){let t=$(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Yp.bind(null,t),t.hu.J_=zp.bind(null,t.eventManager),t.hu.pu=Gp.bind(null,t.eventManager),t}function sg(n){let t=$(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Zp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=tg.bind(null,t),t}var dn=class{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Cs(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Ip(this.persistence,new Oo,t.initialUser,this.serializer)}Du(t){return new is(Vo.Vi,this.serializer)}bu(t){return new Fo}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};dn.provider={build:()=>new dn};var oa=class extends dn{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){Y(this.persistence.referenceDelegate instanceof os,46915);let r=this.persistence.referenceDelegate.garbageCollector;return new wo(r,t.asyncQueue,e)}Du(t){let e=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new is(r=>os.Vi(r,e),this.serializer)}};var sr=class{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ng.bind(null,this.syncEngine),await qp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Yo}()}createDatastore(t){let e=Cs(t.databaseInfo.databaseId),r=function(o){return new $o(o)}(t.databaseInfo);return function(o,a,u,h){return new Ho(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new Qo(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>yl(this.syncEngine,e,0),function(){return cs.C()?new cs:new Bo}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){let y=new sa(s,o,a,u,h,d);return m&&(y.fu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){let o=$(s);B(Le,"RemoteStore shutting down."),o.Ia.add(5),await ur(o),o.Ea.shutdown(),o.Aa.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}};sr.provider={build:()=>new sr};var aa=class{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):Qt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout(()=>{this.muted||t(e)},0)}};var ye="FirestoreClient",ca=class{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=Qn.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{B(ye,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(B(ye,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();let t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){let r=ka(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}};async function xi(n,t){n.asyncQueue.verifyOperationInProgress(),B(ye,"Initializing OfflineComponentProvider");let e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Rh(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>{fe("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{B("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{fe("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=t}async function wl(n,t){n.asyncQueue.verifyOperationInProgress();let e=await ig(n);B(ye,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ml(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ml(t.remoteStore,s)),n._onlineComponents=t}async function ig(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(ye,"Using user provided OfflineComponentProvider");try{await xi(n,n._uninitializedComponentsProvider._offline)}catch(t){let e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;fe("Error using user provided cache. Falling back to memory cache: "+e),await xi(n,new dn)}}else B(ye,"Using default OfflineComponentProvider"),await xi(n,new oa(void 0));return n._offlineComponents}async function jh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(ye,"Using user provided OnlineComponentProvider"),await wl(n,n._uninitializedComponentsProvider._online)):(B(ye,"Using default OnlineComponentProvider"),await wl(n,new sr))),n._onlineComponents}function og(n){return jh(n).then(t=>t.syncEngine)}async function vl(n){let t=await jh(n),e=t.eventManager;return e.onListen=Kp.bind(null,t.syncEngine),e.onUnlisten=Qp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Hp.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Jp.bind(null,t.syncEngine),e}function $h(n){let t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}var El=new Map;var zh="firestore.googleapis.com",Tl=!0,gs=class{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=zh,this.ssl=Tl}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Tl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ch;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<vp)throw new F(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_m("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$h((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new F(D.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}},fn=class{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gs(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pi;switch(r.type){case"firstParty":return new ki(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let r=El.get(e);r&&(B("ComponentProvider","Removing Datastore"),El.delete(e),r.terminate())}(this),Promise.resolve()}};function ag(n,t,e,r={}){var s;n=zn(n,fn);let o=Vr(t),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(cu(`https://${h}`),lu("Firestore",!0)),a.host!==zh&&a.host!==h&&fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let d=Object.assign(Object.assign({},a),{host:h,ssl:o,emulatorOptions:r});if(!ze(d,u)&&(n._setSettings(d),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=lt.MOCK_USER;else{m=uu(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);let v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new F(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new lt(v)}n._authCredentials=new Di(new zr(m,y))}}var Me=class n{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new n(this.firestore,t,this._query)}},_t=class n{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new n(this.firestore,t,this._key)}toJSON(){return{type:n._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(cr(e,n._jsonSchema))return new n(t,r||null,new q(nt.fromString(e.referencePath)))}};_t._jsonSchemaVersion="firestore/documentReference/1.0",_t._jsonSchema={type:ct("string",_t._jsonSchemaVersion),referencePath:ct("string")};var ue=class n extends Me{constructor(t,e,r){super(t,e,Sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new _t(this.firestore,null,new q(t))}withConverter(t){return new n(this.firestore,t,this._path)}};function Fa(n,t,...e){if(n=oe(n),Pl("collection","path",t),n instanceof fn){let r=nt.fromString(t,...e);return Bu(r),new ue(n,null,r)}{if(!(n instanceof _t||n instanceof ue))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(nt.fromString(t,...e));return Bu(r),new ue(n.firestore,null,r)}}function cg(n,t,...e){if(n=oe(n),arguments.length===1&&(t=Qn.newId()),Pl("doc","path",t),n instanceof fn){let r=nt.fromString(t,...e);return Fu(r),new _t(n,null,new q(r))}{if(!(n instanceof _t||n instanceof ue))throw new F(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=n._path.child(nt.fromString(t,...e));return Fu(r),new _t(n.firestore,n instanceof ue?n.converter:null,new q(r))}}var Il="AsyncQueue",ys=class{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new us(this,"async_queue_retry"),this.oc=()=>{let r=Ri();r&&B(Il,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;let e=Ri();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;let e=Ri();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise(()=>{});let e=new Wt;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Zu.push(t),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!yn(t))throw t;B(Il,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(t){let e=this._c.then(()=>(this.nc=!0,t().catch(r=>{throw this.tc=r,this.nc=!1,Qt("INTERNAL UNHANDLED ERROR: ",bl(r)),r}).then(r=>(this.nc=!1,r))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);let s=Jo.createAndSchedule(this,t,e,r,o=>this.lc(o));return this.ec.push(s),s}ac(){this.tc&&j(47125,{hc:bl(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(let e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then(()=>{this.ec.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(let e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()})}dc(t){this.sc.push(t)}lc(t){let e=this.ec.indexOf(t);this.ec.splice(e,1)}};function bl(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}function Al(n){return function(e,r){if(typeof e!="object"||e===null)return!1;let s=e;for(let o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}var mn=class extends fn{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ys,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let t=this._firestoreClient.terminate();this._queue=new ys(t),this._firestoreClient=void 0,await t}}};function Gh(n,t){let e=typeof n=="object"?n:xu(),r=typeof n=="string"?n:t||Qr,s=Su(e,"firestore").getImmediate({identifier:r});if(!s._initialized){let o=au("firestore");o&&ag(s,...o)}return s}function Kh(n){if(n._terminated)throw new F(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ug(n),n._firestoreClient}function ug(n){var t,e,r;let s=n._freezeSettings(),o=function(u,h,d,m){return new Bi(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,$h(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ca(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(u){let h=u?._online.build();return{_offline:u?._offline.build(h),_online:h}}(n._componentsProvider))}var le=class n{constructor(t){this._byteString=t}static fromBase64String(t){try{return new n(wt.fromBase64String(t))}catch(e){throw new F(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new n(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:n._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(cr(t,n._jsonSchema))return n.fromBase64String(t.bytes)}};le._jsonSchemaVersion="firestore/bytes/1.0",le._jsonSchema={type:ct("string",le._jsonSchemaVersion),bytes:ct("string")};var ir=class{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new At(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var or=class{constructor(t){this._methodName=t}};var he=class n{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return G(this._lat,t._lat)||G(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:n._jsonSchemaVersion}}static fromJSON(t){if(cr(t,n._jsonSchema))return new n(t.latitude,t.longitude)}};he._jsonSchemaVersion="firestore/geoPoint/1.0",he._jsonSchema={type:ct("string",he._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};var de=class n{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(cr(t,n._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new n(t.vectorValues);throw new F(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};de._jsonSchemaVersion="firestore/vectorValue/1.0",de._jsonSchema={type:ct("string",de._jsonSchemaVersion),vectorValues:ct("object")};var lg=/^__.*__$/,ua=class{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new te(t,this.data,this.fieldMask,e,this.fieldTransforms):new Oe(t,this.data,e,this.fieldTransforms)}};function Hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ec:n})}}var la=class n{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new n(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;let r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;let r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return _s(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(Hh(this.Ec)&&lg.test(t))throw this.wc('Document fields cannot begin and end with "__"')}},ha=class{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Cs(t)}Dc(t,e,r,s=!1){return new la({Ec:t,methodName:e,bc:r,path:At.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Wh(n){let t=n._freezeSettings(),e=Cs(n._databaseId);return new ha(n._databaseId,!!t.ignoreUndefinedProperties,e)}function hg(n,t,e,r,s,o={}){let a=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);Xh("Data must be an object, but it was:",a,r);let u=Qh(r,a),h,d;if(o.merge)h=new Ot(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){let m=[];for(let y of o.mergeFields){let v=fg(t,y,e);if(!a.contains(v))throw new F(D.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);pg(m,v)||m.push(v)}h=new Ot(m),d=a.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,d=a.fieldTransforms;return new ua(new xt(u),h,d)}var da=class n extends or{_toFieldTransform(t){return new to(t.path,new Ve)}isEqual(t){return t instanceof n}};function dg(n,t,e,r=!1){return Ba(e,n.Dc(r?4:3,t))}function Ba(n,t){if(Jh(n=oe(n)))return Xh("Unsupported field value:",t,n),Qh(n,t);if(n instanceof or)return function(r,s){if(!Hh(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);let o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return function(r,s){let o=[],a=0;for(let u of r){let h=Ba(u,s.yc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qm(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let o=ut.fromDate(r);return{timestampValue:rs(s.serializer,o)}}if(r instanceof ut){let o=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rs(s.serializer,o)}}if(r instanceof he)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof le)return{bytesValue:vh(s.serializer,r._byteString)};if(r instanceof _t){let o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof de)return function(a,u){return{mapValue:{fields:{[Ea]:{stringValue:Ta},[rn]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Ca(u.serializer,d)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Ts(r)}`)}(n,t)}function Qh(n,t){let e={};return Kl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fe(n,(r,s)=>{let o=Ba(s,t.Vc(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Jh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ut||n instanceof he||n instanceof le||n instanceof _t||n instanceof or||n instanceof de)}function Xh(n,t,e){if(!Jh(e)||!Dl(e)){let r=Ts(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function fg(n,t,e){if((t=oe(t))instanceof ir)return t._internalPath;if(typeof t=="string")return Yh(n,t);throw _s("Field path arguments must be of type string or ",n,!1,void 0,e)}var mg=new RegExp("[~\\*/\\[\\]]");function Yh(n,t,e){if(t.search(mg)>=0)throw _s(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ir(...t.split("."))._internalPath}catch{throw _s(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function _s(n,t,e,r,s){let o=r&&!r.isEmpty(),a=s!==void 0,u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new F(D.INVALID_ARGUMENT,u+n+h)}function pg(n,t){return n.some(e=>e.isEqual(t))}var ws=class{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new fa(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){let e=this._document.data.field(Ua("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}},fa=class extends ws{data(){return super.data()}};function Ua(n,t){return typeof t=="string"?Yh(n,t):t instanceof ir?t._internalPath:t._delegate._internalPath}function gg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ar=class{},vs=class extends ar{};function Zh(n,t,...e){let r=[];t instanceof ar&&r.push(t),r=r.concat(e),function(o){let a=o.filter(h=>h instanceof pa).length,u=o.filter(h=>h instanceof ma).length;if(a>1||a>0&&u>0)throw new F(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let s of r)n=s._apply(n);return n}var ma=class n extends vs{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new n(t,e,r)}_apply(t){let e=this._parse(t);return ed(t._query,e),new Me(t.firestore,t.converter,Yi(t._query,e))}_parse(t){let e=Wh(t.firestore);return function(o,a,u,h,d,m,y){let v;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new F(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Cl(y,m);let S=[];for(let P of y)S.push(Sl(h,o,P));v={arrayValue:{values:S}}}else v=Sl(h,o,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Cl(y,m),v=dg(u,a,y,m==="in"||m==="not-in");return at.create(d,m,v)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}};var pa=class n extends ar{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new n(t,e)}_parse(t){let e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Dt.create(e,this._getOperator())}_apply(t){let e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s,u=o.getFlattenedFilters();for(let h of u)ed(a,h),a=Yi(a,h)}(t._query,e),new Me(t.firestore,t.converter,Yi(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var ga=class n extends vs{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new n(t,e)}_apply(t){let e=function(s,o,a){if(s.startAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new De(o,a)}(t._query,this._field,this._direction);return new Me(t.firestore,t.converter,function(s,o){let a=s.explicitOrderBy.concat([o]);return new pe(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}};function td(n,t="asc"){let e=t,r=Ua("orderBy",n);return ga._create(r,e)}function Sl(n,t,e){if(typeof(e=oe(e))=="string"){if(e==="")throw new F(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oh(t)&&e.indexOf("/")!==-1)throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);let r=t.path.child(nt.fromString(e));if(!q.isDocumentKey(r))throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ku(n,new q(r))}if(e instanceof _t)return Ku(n,e._key);throw new F(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ts(e)}.`)}function Cl(n,t){if(!Array.isArray(n)||n.length===0)throw new F(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function ed(n,t){let e=function(s,o){for(let a of s)for(let u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}var ya=class{convertValue(t,e="none"){switch(me(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw j(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){let r={};return Fe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;let o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[rn].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>et(a.doubleValue));return new de(o)}convertGeoPoint(t){return new he(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":let r=bs(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Yn(t));default:return null}}convertTimestamp(t){let e=Jt(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){let r=nt.fromString(t);Y(Sh(r),9688,{name:t});let s=new Jr(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||Qt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}};function yg(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}var Se=class{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}},Re=class n extends ws{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){let e=new Ze(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){let r=this._document.data.field(Ua("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let t=this._document,e={};return e.type=n._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}};Re._jsonSchemaVersion="firestore/documentSnapshot/1.0",Re._jsonSchema={type:ct("string",Re._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};var Ze=class extends Re{data(t={}){return super.data(t)}},tn=class n{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Se(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){let t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Ze(this._firestore,this._userDataWriter,r.key,r,new Se(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){let e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{let h=new Ze(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Se(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{let h=new Ze(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Se(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter),d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:_g(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let t={};t.type=n._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Qn.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}};function _g(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:ct("string",tn._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};var Es=class extends ya{constructor(t){super(),this.firestore=t}convertBytes(t){return new le(t)}convertReference(t){let e=this.convertDocumentKey(t,this.firestore._databaseId);return new _t(this.firestore,null,e)}};function nd(n,t){let e=zn(n.firestore,mn),r=cg(n),s=yg(n.converter,t);return wg(e,[hg(Wh(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ce.exists(!1))]).then(()=>r)}function rd(n,...t){var e,r,s;n=oe(n);let o={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||Al(t[a])||(o=t[a++]);let u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Al(t[a])){let y=t[a];t[a]=(e=y.next)===null||e===void 0?void 0:e.bind(y),t[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),t[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let h,d,m;if(n instanceof _t)d=zn(n.firestore,mn),m=Sa(n._key.path),h={next:y=>{t[a]&&t[a](vg(d,n,y))},error:t[a+1],complete:t[a+2]};else{let y=zn(n,Me);d=zn(y.firestore,mn),m=y._query;let v=new Es(d);h={next:I=>{t[a]&&t[a](new tn(d,v,y,I))},error:t[a+1],complete:t[a+2]},gg(n._query)}return function(v,I,S,P){let R=new aa(P),L=new ta(I,R,S);return v.asyncQueue.enqueueAndForget(async()=>jp(await vl(v),L)),()=>{R.Ou(),v.asyncQueue.enqueueAndForget(async()=>$p(await vl(v),L))}}(Kh(d),m,u,h)}function wg(n,t){return function(r,s){let o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>Xp(await og(r),s,o)),o.promise}(Kh(n),t)}function vg(n,t,e){let r=e.docs.get(t._key),s=new Es(n);return new Re(n,s,t._key,r,new Se(e.hasPendingWrites,e.fromCache),t.converter)}function sd(){return new da("serverTimestamp")}(function(t,e=!0){(function(s){pn=s})(Ru),Un(new zt("firestore",(r,{instanceIdentifier:s,options:o})=>{let a=r.getProvider("app").getImmediate(),u=new mn(new Vi(r.getProvider("auth-internal")),new Oi(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new F(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jr(d.options.projectId,m)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),ce(ku,Ou,t),ce(ku,Ou,"esm2017")})();var Eg={apiKey:"AIzaSyDRLWeYyRT4FLesoROh534jIMZizGpxKXs",authDomain:"wedding-60251.firebaseapp.com",projectId:"wedding-60251",storageBucket:"wedding-60251.firebasestorage.app",messagingSenderId:"513508231418",appId:"1:513508231418:web:3429524ac377389a6ea143",measurementId:"G-36N9QR2HK4"},Tg=wi(Eg),qa=Gh(Tg);function id(n){return n=n.trim().toLowerCase(),n.charAt(0).toUpperCase()+n.slice(1)}function od(){let n=document.getElementById("commentForm"),t=document.getElementById("commentList"),e=document.getElementById("template"),r=document.getElementById("name"),s=document.getElementById("message"),o=document.getElementById("presence"),a=document.getElementById("errorName"),u=document.getElementById("errorMessage"),h=document.getElementById("errorPresence"),d=document.getElementById("submitBtn"),m=d.querySelector("span"),y=document.getElementById("cancelReplyBtn"),v=null,I="";function S(){v=null,I="",s.placeholder="Tulis Ucapan dan Doa",y.classList.add("d-none"),o.classList.remove("d-none"),a.textContent="",u.textContent="",h.textContent=""}n.addEventListener("submit",async L=>{L.preventDefault(),console.log("Form submitted"),a.textContent="",u.textContent="",h.textContent="";let O=id(r.value),U=id(s.value),N=o.value.trim(),V=!0;if(O.length<2&&(a.innerHTML=`<p class="text-danger m-0">
                                    <i class="fa-solid fa-circle-info fa-sm"></i>
                                    <small>Nama minimal 2 karakter</small>
                                </p>`,V=!1),U.length<1&&(u.innerHTML=`<p class="text-danger m-0">
                                        <i class="fa-solid fa-circle-info fa-sm"></i>
                                        <small>Mohon beri ucapan</small>
                                    </p>`,V=!1),!v&&N!=="1"&&N!=="2"&&(h.innerHTML=`<p class="text-danger m-0">
                                        <i class="fa-solid fa-circle-info fa-sm"></i>
                                        <small>Mohon pilih kehadiran</small>
                                    </p>`,V=!1),!!V){d.disabled=!0,m.textContent="Mengirim...";try{await nd(Fa(qa,"comments"),{name:O,message:U,presence:N,parentId:v||null,createdAt:sd()}),n.reset(),S()}catch(x){console.error("Error:",x)}finally{d.disabled=!1,m.textContent="Kirim"}}}),y.addEventListener("click",S);function P(L){let U=Math.floor((new Date-L)/1e3),N=[{name:"tahun",seconds:31536e3},{name:"bulan",seconds:2592e3},{name:"minggu",seconds:604800},{name:"hari",seconds:86400},{name:"jam",seconds:3600},{name:"menit",seconds:60},{name:"detik",seconds:1}];for(let V of N){let x=Math.floor(U/V.seconds);if(x>=1)return`${x} ${V.name}${x>1,""} lalu`}return"Baru saja"}let R=Zh(Fa(qa,"comments"),td("createdAt","desc"));rd(R,L=>{t.innerHTML="";let O=0,U=0,N=L.docs.map(p=>({id:p.id,...p.data()})),V=N.filter(p=>!p.parentId),x=N.filter(p=>p.parentId),_=N.length;V.forEach(p=>{let g=p.createdAt?.toDate(),E=g?P(g):"";p.presence==="1"?O++:p.presence==="2"&&U++;let T=e.content.cloneNode(!0),b=T.querySelector(".comment-item");T.querySelector(".name").textContent=p.name,T.querySelector(".message").textContent=p.message,T.querySelector(".presence").innerHTML=p.presence==="1"?'<svg fill="#3D9A61" width="14px" height="14px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" stroke="#3D9A61"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path></g></svg>':'<svg fill="#D90B12" width="14px" height="14px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 23.6641 52.3985 C 26.6172 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6172 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6172 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6172 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 19.6328 38.5469 C 18.5547 38.5469 17.6407 37.6329 17.6407 36.5313 C 17.6407 36.0156 17.8750 35.5234 18.2266 35.1953 L 25.2110 28.1875 L 18.2266 21.2031 C 17.8750 20.875 17.6407 20.3829 17.6407 19.8438 C 17.6407 18.7656 18.5313 17.8985 19.6328 17.8985 C 20.1719 17.8985 20.6407 18.1094 20.9454 18.4609 L 27.9766 25.4453 L 35.0313 18.4375 C 35.4063 18.0156 35.8516 17.8516 36.3672 17.8516 C 37.4454 17.8516 38.3360 18.7422 38.3360 19.8203 C 38.3360 20.3594 38.1719 20.8047 37.7501 21.1797 L 30.7657 28.1875 L 37.7266 35.1485 C 38.1016 35.5234 38.3126 35.9922 38.3126 36.5313 C 38.3126 37.6329 37.4454 38.5469 36.3438 38.5469 C 35.7813 38.5469 35.2891 38.2891 34.9610 37.9609 L 27.9766 30.9531 L 20.9923 37.9609 C 20.6641 38.3125 20.1719 38.5469 19.6328 38.5469 Z"></path></g></svg>',T.querySelector(".date").textContent=E;let w=T.querySelector(".comment-item p.fw-semibold");w.style.cursor="pointer",w.addEventListener("click",()=>{v=p.id,I=p.name,s.placeholder=`Balas ke ${I}`,s.focus(),o.classList.add("d-none"),y.classList.remove("d-none"),n.scrollIntoView({behavior:"smooth"})}),x.filter(Ct=>Ct.parentId===p.id).forEach(Ct=>{let hr=Ct.createdAt?.toDate(),_e=hr?P(hr):"",Tt=document.createElement("div");Tt.style.marginLeft="1.5rem",Tt.style.borderLeft="1px solid #FFF",Tt.style.paddingLeft="1rem",Tt.style.paddingRight="1.5rem",Tt.style.marginTop="0.5rem",Tt.style.width="100%",Tt.innerHTML=`
            <div class="d-flex flex-wrap justify-content-between align-items-center w-100">
                <div class="d-flex flex-column justify-content-start align-items-start" style="width: 75%;">
                    <h3 class="font-nunito fw-semibold m-0" style="font-size: 1rem;">${Ct.name}</h3>
                    <p class="m-0 font-nunito mt-1" style="font-size: 0.9rem;">${Ct.message}</p>
                </div>
                <div class="d-flex justify-content-end align-items-start" style="width: 25%;">
                    <p class="m-0 text-end" style="font-size: 0.7rem;">${_e}</p>
                </div>
            </div>
            `,b.appendChild(Tt)}),t.appendChild(T)}),document.getElementById("hadirCount").textContent=`${O}`,document.getElementById("tidakHadirCount").textContent=`${U}`,document.getElementById("totalCount").textContent=`${_} Comments`})}document.addEventListener("DOMContentLoaded",()=>{od()});var Ig=()=>window.confetti.shapeFromPath({path:"M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",matrix:[.03333333333333333,0,0,.03333333333333333,-5.566666666666666,-5.533333333333333]});var ad=(n,t=50)=>{if(!window.confetti)return;let e=Date.now()+t,r=n.getBoundingClientRect(),s=Math.max(.3,Math.min(1,r.top/window.innerHeight+.2)),o=Ig(),a=["#FF69B4","#FF1493"],u=()=>{a.forEach(h=>{window.confetti({particleCount:2,angle:60,spread:55,shapes:[o],origin:{x:r.left/window.innerWidth,y:s},zIndex:1057,colors:[h]}),window.confetti({particleCount:2,angle:120,spread:55,shapes:[o],origin:{x:r.right/window.innerWidth,y:s},zIndex:1057,colors:[h]})}),Date.now()<e&&requestAnimationFrame(u)};requestAnimationFrame(u)};var cd=(()=>{console.log("guest.js jalan");let n=null,t=null,e=()=>{let V=new Date(document.body.getAttribute("data-time").replace(" ","T")).getTime(),x=b=>b<10?`0${b}`:`${b}`,_=document.getElementById("day"),p=document.getElementById("hour"),g=document.getElementById("minute"),E=document.getElementById("second"),T=()=>{let b=Math.abs(V-Date.now());_.textContent=x(Math.floor(b/(1e3*60*60*24))),p.textContent=x(Math.floor(b%(1e3*60*60*24)/(1e3*60*60))),g.textContent=x(Math.floor(b%(1e3*60*60)/(1e3*60))),E.textContent=x(Math.floor(b%(1e3*60)/1e3)),X.timeOut(T,1e3-Date.now()%1e3)};X.timeOut(T)},r=()=>{let V=window.location.search.split("to="),x=null;if(V.length>1&&V[1].length>=1&&(x=window.decodeURIComponent(V[1])),x){let p=document.getElementById("guest-name"),g=document.createElement("div");g.classList.add("m-2");let E=`<small class="mt-0 mb-1 mx-0 p-0 fw-semibold" style="color: #fff;">${X.escapeHtml(p?.getAttribute("data-message"))}</small><p class="m-0 p-0" style="font-size: 1.25rem">${X.escapeHtml(x)}</p>`;X.safeInnerHTML(g,E),p?.appendChild(g)}let _=document.getElementById("form-name");_&&(_.value=n.get("name")??x)},s=async()=>{let x=document.querySelectorAll(".slide-desktop");if(!x||x.length===0)return;let _=document.getElementById("root")?.querySelector(".d-sm-block");if(!_||(_.dispatchEvent(new Event("undangan.slide.stop")),window.getComputedStyle(_).display==="none"))return;if(x.length===1){await X.changeOpacity(x[0],!0);return}let p=0;for(let[b,w]of x.entries())if(b===p){w.classList.add("slide-desktop-active"),await X.changeOpacity(w,!0);break}let g=!0,E=async()=>(await X.changeOpacity(x[p],!1),x[p].classList.remove("slide-desktop-active"),p=(p+1)%x.length,g&&(x[p].classList.add("slide-desktop-active"),await X.changeOpacity(x[p],!0)),g);_.addEventListener("undangan.slide.stop",()=>{g=!1});let T=async()=>{await E()&&X.timeOut(T,6e3)};X.timeOut(T,6e3)},o=()=>{let V=document.querySelector(".")},a=V=>{V.disabled=!0,document.body.scrollIntoView({behavior:"instant"}),document.getElementById("root").classList.remove("opacity-0");let x=document.documentElement;s(),xr.spyTop(),x.requestFullscreen?x.requestFullscreen():x.msRequestFullscreen?x.msRequestFullscreen():x.webkitRequestFullscreen&&x.webkitRequestFullscreen(),document.dispatchEvent(new Event("undangan.open")),X.changeOpacity(document.getElementById("welcome"),!1).then(_=>_.remove())},u=V=>{document.getElementById("button-modal-click").setAttribute("href",V.src),document.getElementById("button-modal-download").setAttribute("data-src",V.src);let x=document.getElementById("show-modal-image");x.src=V.src,x.width=V.width,x.height=V.height,Qc.modal("modal-image").show()},h=()=>{document.getElementById("show-modal-image").addEventListener("click",V=>{let x=V.currentTarget.parentNode.querySelector(".position-absolute");x.classList.contains("d-none")?x.classList.replace("d-none","d-flex"):x.classList.replace("d-flex","d-none")})},d=V=>{navigator.vibrate&&navigator.vibrate(500),ad(V,100),X.changeOpacity(V,!1).then(x=>x.remove())},m=()=>n.set("info",!0),y=()=>{document.querySelectorAll(".font-arabic").forEach(V=>{V.innerHTML=String(V.innerHTML).normalize("NFC")})},v=()=>{document.querySelectorAll("svg").forEach(V=>{V.hasAttribute("data-class")&&X.timeOut(()=>V.classList.add(V.getAttribute("data-class")),parseInt(V.getAttribute("data-time")))})},I=()=>{let V=p=>new Date(p.replace(" ","T")+":00Z").toISOString().replace(/[-:]/g,"").split(".").shift(),x=new URL("https://calendar.google.com/calendar/render"),_=new URLSearchParams({action:"TEMPLATE",text:"The Wedding of Wahyu and Riski",dates:`${V("2023-03-15 10:00")}/${V("2023-03-15 11:00")}`,details:"Tanpa mengurangi rasa hormat, kami mengundang Anda untuk berkenan menghadiri acara pernikahan kami. Terima kasih atas perhatian dan doa restu Anda, yang menjadi kebahagiaan serta kehormatan besar bagi kami.",location:"RT 10 RW 02, Desa Pajerukan, Kec. Kalibagor, Kab. Banyumas, Jawa Tengah 53191.",ctz:t.get("tz")});x.search=_.toString(),document.querySelector("#home button")?.addEventListener("click",()=>window.open(x,"_blank"))},S=()=>(K.add(),{load:x=>{Jc(x).then(()=>K.complete("libs")).catch(()=>K.invalid("libs"))}}),P=async()=>{v(),e(),r(),h(),y(),I(),n.has("presence")&&(document.getElementById("form-presence").value=n.get("presence")?"1":"2"),n.get("info")&&document.getElementById("information")?.remove(),await X.changeOpacity(document.getElementById("welcome"),!0),document.querySelector("#welcome .fade-up").classList.add("show"),await X.changeOpacity(document.getElementById("loading"),!1).then(V=>V.remove())},R=window.location.search.split("to="),L=null;R.length>1&&R[1].length>=1&&(L=window.decodeURIComponent(R[1]));let O=()=>{let V=window.location.search.split("to="),x=null,_="";V.length>1&&V[1].length>=1&&(x=window.decodeURIComponent(V[1])),x?_=["Hai Kak,",`Saya ${X.escapeHtml(x)}`,"Boleh dibantu untuk informasi layanan undangan digitalsabiq ?"].join(`
`):_=["Hai Kak,","Saya (Nama)","Boleh dibantu untuk informasi layanan undangan digitalsabiq ?"].join(`
`);let g=`https://wa.me/6283103882464?text=${encodeURIComponent(_)}`;window.open(g,"_blank")},U=()=>{Xc.init(),Zc.init(),K.init(),t=bt("config"),n=bt("information");let V=Kc.init(),x=Hc.init(),_=Wc.init(),p=S(),g=document.body.getAttribute("data-key"),E=new URLSearchParams(window.location.search);if(window.addEventListener("resize",X.debounce(s)),document.addEventListener("undangan.progress.done",()=>P()),document.addEventListener("hide.bs.modal",()=>document.activeElement?.blur()),document.getElementById("button-modal-download").addEventListener("click",T=>{x.download(T.currentTarget.getAttribute("data-src"))}),(!g||g.length<=0)&&(document.getElementById("comment")?.remove(),document.querySelector('a.nav-link[href="#comment"]')?.closest("li.nav-item")?.remove(),V.load(),x.load(),_.load(),p.load({confetti:document.body.getAttribute("data-confetti")==="true"})),g&&g.length>0){K.add(),K.add(),x.hasDataSrc()||x.load();let T=()=>Pr.guest(E.get("k")??g).then(({data:b})=>{document.dispatchEvent(new Event("undangan.session")),K.complete("config"),x.hasDataSrc()&&x.load(),V.load(),_.load(),p.load({confetti:b.is_confetti_animation}),comment.show().then(()=>K.complete("comment")).catch(()=>K.invalid("comment"))}).catch(()=>K.invalid("config"));window.addEventListener("load",T)}};return{init:()=>(xr.init(),Pr.init(),Pr.isAdmin()&&(bt("user").clear(),bt("owns").clear(),bt("likes").clear(),bt("session").clear(),bt("comment").clear()),document.addEventListener("DOMContentLoaded",U),{util:X,theme:xr,guest:{open:a,modal:u,showStory:d,closeInformation:m,handleLinkWhatsapp:O}})}})();(n=>{n.undangan=cd.init()})(window);})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law | agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
