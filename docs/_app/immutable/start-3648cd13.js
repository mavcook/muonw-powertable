import{S as We,i as Ye,s as Xe,a as Ze,e as V,c as Qe,b as J,g as Q,t as B,d as ee,f as q,h as F,j as et,o as Re,k as tt,l as nt,m as rt,n as ke,p as M,q as at,r as ot,u as st,v as x,w as G,x as ie,y as K,z,A as Ce}from"./chunks/index-0ff0810f.js";import{g as Fe,f as Je,s as Z,a as Oe,b as it,i as lt}from"./chunks/singletons-25793585.js";function ct(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ft(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ut=["href","pathname","search","searchParams","toString","toJSON"];function pt(r,e){const n=new URL(r);for(const a of ut){let s=n[a];Object.defineProperty(n,a,{get(){return e(),s},enumerable:!0,configurable:!0})}return dt(n),n}function dt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ht="/__data.json";function mt(r){return r.replace(/\/$/,"")+ht}function _t(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let a=n.length;for(;a;)e=e*33^n[--a]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const _e=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const a=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;me.delete(a)}return _e(r,e)};const me=new Map;function gt(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${_t(n.body)}"]`);const i=document.querySelector(s);if(i!=null&&i.textContent){const{body:t,...c}=JSON.parse(i.textContent),f=i.getAttribute("data-ttl");return f&&me.set(e,{body:t,init:c,ttl:1e3*Number(f)}),Promise.resolve(new Response(t,c))}return _e(r,n)}function wt(r,e){const n=me.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);me.delete(r)}return _e(r,e)}const yt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function bt(r){const e=[],n=[],a=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Et(r).map((t,c,f)=>{const u=decodeURIComponent(t),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(m)return e.push(m[1]),n.push(m[2]),a.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(u);if(w)return e.push(w[1]),n.push(w[2]),a.push(!0),"(?:/([^/]+))?";const j=c===f.length-1;if(!u)return;const Y=u.split(/\[(.+?)\](?!\])/).map((U,C)=>{if(C%2){const H=yt.exec(U);if(!H)throw new Error(`Invalid param: ${U}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,X,le,ne,ce]=H;return e.push(ne),n.push(ce),a.push(!!X),le?"(.*?)":X?"([^/]*)?":"([^/]+?)"}return j&&U.includes(".")&&(s=!1),U.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("");return"/"+Y}).join("")}${s?"/?":""}$`),names:e,types:n,optional:a}}function vt(r){return!/^\([^)]+\)$/.test(r)}function Et(r){return r.slice(1).split("/").filter(vt)}function kt(r,{names:e,types:n,optional:a},s){const i={};for(let t=0;t<e.length;t+=1){const c=e[t],f=n[t];let u=r[t+1];if(u||!a[t]){if(f){const m=s[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(u))return}i[c]=u!=null?u:""}}return i}function $t(r,e,n,a){const s=new Set(e);return Object.entries(n).map(([c,[f,u,m]])=>{const{pattern:w,names:j,types:E,optional:Y}=bt(c),U={id:c,exec:C=>{const H=w.exec(C);if(H)return kt(H,{names:j,types:E,optional:Y},a)},errors:[1,...m||[]].map(C=>r[C]),layouts:[0,...u||[]].map(t),leaf:i(f)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function i(c){const f=c<0;return f&&(c=~c),[f,r[c]]}function t(c){return c===void 0?c:[s.has(c),r[c]]}}function Rt(r){let e,n,a;var s=r[0][0];function i(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=x(s,i(r))),{c(){e&&G(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,c){e&&K(e,t,c),J(t,n,c),a=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&2&&(f.form=t[1]),s!==(s=t[0][0])){if(e){Q();const u=e;B(u.$$.fragment,1,0,()=>{z(u,1)}),ee()}s?(e=x(s,i(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){a||(e&&q(e.$$.fragment,t),a=!0)},o(t){e&&B(e.$$.fragment,t),a=!1},d(t){t&&F(n),e&&z(e,t)}}}function Ot(r){let e,n,a;var s=r[0][0];function i(t){return{props:{data:t[2],$$slots:{default:[At]},$$scope:{ctx:t}}}}return s&&(e=x(s,i(r))),{c(){e&&G(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,c){e&&K(e,t,c),J(t,n,c),a=!0},p(t,c){const f={};if(c&4&&(f.data=t[2]),c&1051&&(f.$$scope={dirty:c,ctx:t}),s!==(s=t[0][0])){if(e){Q();const u=e;B(u.$$.fragment,1,0,()=>{z(u,1)}),ee()}s?(e=x(s,i(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){a||(e&&q(e.$$.fragment,t),a=!0)},o(t){e&&B(e.$$.fragment,t),a=!1},d(t){t&&F(n),e&&z(e,t)}}}function Lt(r){let e,n,a;var s=r[0][1];function i(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=x(s,i(r))),{c(){e&&G(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,c){e&&K(e,t,c),J(t,n,c),a=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&2&&(f.form=t[1]),s!==(s=t[0][1])){if(e){Q();const u=e;B(u.$$.fragment,1,0,()=>{z(u,1)}),ee()}s?(e=x(s,i(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){a||(e&&q(e.$$.fragment,t),a=!0)},o(t){e&&B(e.$$.fragment,t),a=!1},d(t){t&&F(n),e&&z(e,t)}}}function It(r){let e,n,a;var s=r[0][1];function i(t){return{props:{data:t[3],$$slots:{default:[St]},$$scope:{ctx:t}}}}return s&&(e=x(s,i(r))),{c(){e&&G(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,c){e&&K(e,t,c),J(t,n,c),a=!0},p(t,c){const f={};if(c&8&&(f.data=t[3]),c&1043&&(f.$$scope={dirty:c,ctx:t}),s!==(s=t[0][1])){if(e){Q();const u=e;B(u.$$.fragment,1,0,()=>{z(u,1)}),ee()}s?(e=x(s,i(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){a||(e&&q(e.$$.fragment,t),a=!0)},o(t){e&&B(e.$$.fragment,t),a=!1},d(t){t&&F(n),e&&z(e,t)}}}function St(r){let e,n,a;var s=r[0][2];function i(t){return{props:{data:t[4],form:t[1]}}}return s&&(e=x(s,i(r))),{c(){e&&G(e.$$.fragment),n=V()},l(t){e&&ie(e.$$.fragment,t),n=V()},m(t,c){e&&K(e,t,c),J(t,n,c),a=!0},p(t,c){const f={};if(c&16&&(f.data=t[4]),c&2&&(f.form=t[1]),s!==(s=t[0][2])){if(e){Q();const u=e;B(u.$$.fragment,1,0,()=>{z(u,1)}),ee()}s?(e=x(s,i(t)),G(e.$$.fragment),q(e.$$.fragment,1),K(e,n.parentNode,n)):e=null}else s&&e.$set(f)},i(t){a||(e&&q(e.$$.fragment,t),a=!0)},o(t){e&&B(e.$$.fragment,t),a=!1},d(t){t&&F(n),e&&z(e,t)}}}function At(r){let e,n,a,s;const i=[It,Lt],t=[];function c(f,u){return f[0][2]?0:1}return e=c(r),n=t[e]=i[e](r),{c(){n.c(),a=V()},l(f){n.l(f),a=V()},m(f,u){t[e].m(f,u),J(f,a,u),s=!0},p(f,u){let m=e;e=c(f),e===m?t[e].p(f,u):(Q(),B(t[m],1,1,()=>{t[m]=null}),ee(),n=t[e],n?n.p(f,u):(n=t[e]=i[e](f),n.c()),q(n,1),n.m(a.parentNode,a))},i(f){s||(q(n),s=!0)},o(f){B(n),s=!1},d(f){t[e].d(f),f&&F(a)}}}function xe(r){let e,n=r[6]&&Ge(r);return{c(){e=tt("div"),n&&n.c(),this.h()},l(a){e=nt(a,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=rt(e);n&&n.l(s),s.forEach(F),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),M(e,"position","absolute"),M(e,"left","0"),M(e,"top","0"),M(e,"clip","rect(0 0 0 0)"),M(e,"clip-path","inset(50%)"),M(e,"overflow","hidden"),M(e,"white-space","nowrap"),M(e,"width","1px"),M(e,"height","1px")},m(a,s){J(a,e,s),n&&n.m(e,null)},p(a,s){a[6]?n?n.p(a,s):(n=Ge(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(a){a&&F(e),n&&n.d()}}}function Ge(r){let e;return{c(){e=at(r[7])},l(n){e=ot(n,r[7])},m(n,a){J(n,e,a)},p(n,a){a&128&&st(e,n[7])},d(n){n&&F(e)}}}function Pt(r){let e,n,a,s,i;const t=[Ot,Rt],c=[];function f(m,w){return m[0][1]?0:1}e=f(r),n=c[e]=t[e](r);let u=r[5]&&xe(r);return{c(){n.c(),a=Ze(),u&&u.c(),s=V()},l(m){n.l(m),a=Qe(m),u&&u.l(m),s=V()},m(m,w){c[e].m(m,w),J(m,a,w),u&&u.m(m,w),J(m,s,w),i=!0},p(m,[w]){let j=e;e=f(m),e===j?c[e].p(m,w):(Q(),B(c[j],1,1,()=>{c[j]=null}),ee(),n=c[e],n?n.p(m,w):(n=c[e]=t[e](m),n.c()),q(n,1),n.m(a.parentNode,a)),m[5]?u?u.p(m,w):(u=xe(m),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i(m){i||(q(n),i=!0)},o(m){B(n),i=!1},d(m){c[e].d(m),m&&F(a),u&&u.d(m),m&&F(s)}}}function Nt(r,e,n){let{stores:a}=e,{page:s}=e,{components:i}=e,{form:t}=e,{data_0:c=null}=e,{data_1:f=null}=e,{data_2:u=null}=e;et(a.page.notify);let m=!1,w=!1,j=null;return Re(()=>{const E=a.page.subscribe(()=>{m&&(n(6,w=!0),n(7,j=document.title||"untitled page"))});return n(5,m=!0),E}),r.$$set=E=>{"stores"in E&&n(8,a=E.stores),"page"in E&&n(9,s=E.page),"components"in E&&n(0,i=E.components),"form"in E&&n(1,t=E.form),"data_0"in E&&n(2,c=E.data_0),"data_1"in E&&n(3,f=E.data_1),"data_2"in E&&n(4,u=E.data_2)},r.$$.update=()=>{r.$$.dirty&768&&a.page.set(s)},[i,t,c,f,u,m,w,j,a,s]}class Tt extends We{constructor(e){super(),Ye(this,e,Nt,Pt,Xe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const jt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Dt=function(r,e){return new URL(r,e).href},Ke={},D=function(e,n,a){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Dt(i,a),i in Ke)return;Ke[i]=!0;const t=i.endsWith(".css"),c=t?'[rel="stylesheet"]':"";if(!!a)for(let m=s.length-1;m>=0;m--){const w=s[m];if(w.href===i&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=t?"stylesheet":jt,t||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),t)return new Promise((m,w)=>{u.addEventListener("load",m),u.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},Ut={},ge=[()=>D(()=>import("./chunks/0-4ab80b96.js"),["./chunks/0-4ab80b96.js","./chunks/_layout-244212a4.js","./components/pages/_layout.svelte-bef1ee86.js","./chunks/index-0ff0810f.js","./assets/_layout-4f661433.css"],import.meta.url),()=>D(()=>import("./chunks/1-dd71132e.js"),["./chunks/1-dd71132e.js","./components/error.svelte-c45c2497.js","./chunks/index-0ff0810f.js","./chunks/stores-415ebb0a.js","./chunks/singletons-25793585.js"],import.meta.url),()=>D(()=>import("./chunks/2-d6e0b40d.js"),["./chunks/2-d6e0b40d.js","./components/pages/examples/_layout.svelte-1cf28289.js","./chunks/index-0ff0810f.js","./chunks/stores-415ebb0a.js","./chunks/singletons-25793585.js","./assets/_layout-5c9c2797.css"],import.meta.url),()=>D(()=>import("./chunks/3-4b012472.js"),["./chunks/3-4b012472.js","./components/pages/_page.svelte-72377dae.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/4-dcf1aa53.js"),["./chunks/4-dcf1aa53.js","./components/pages/examples/_page.svelte-d53ca97d.js","./chunks/index-0ff0810f.js"],import.meta.url),()=>D(()=>import("./chunks/5-48c32e27.js"),["./chunks/5-48c32e27.js","./components/pages/examples/example1/_page.svelte-f8b41e4e.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/6-0d875334.js"),["./chunks/6-0d875334.js","./components/pages/examples/example10/_page.svelte-08efa1e5.js","./chunks/index-0ff0810f.js","./chunks/scores-42853dba.js","./chunks/PowerTable-43b77907.js","./assets/_page-ffb3cd8c.css"],import.meta.url),()=>D(()=>import("./chunks/7-043215b6.js"),["./chunks/7-043215b6.js","./components/pages/examples/example2/_page.svelte-280f196f.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/8-2de2f828.js"),["./chunks/8-2de2f828.js","./components/pages/examples/example3/_page.svelte-74998402.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js","./assets/_page-e322aab6.css"],import.meta.url),()=>D(()=>import("./chunks/9-8498d116.js"),["./chunks/9-8498d116.js","./components/pages/examples/example4/_page.svelte-dc8c5835.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/10-9c2c2276.js"),["./chunks/10-9c2c2276.js","./components/pages/examples/example5/_page.svelte-05af1381.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js","./assets/_page-c2da0502.css"],import.meta.url),()=>D(()=>import("./chunks/11-ab2d423a.js"),["./chunks/11-ab2d423a.js","./components/pages/examples/example6/_page.svelte-9329e9fd.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/12-50f2fef5.js"),["./chunks/12-50f2fef5.js","./components/pages/examples/example7/_page.svelte-00dde0cd.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js"],import.meta.url),()=>D(()=>import("./chunks/13-cc6525f6.js"),["./chunks/13-cc6525f6.js","./components/pages/examples/example8/_page.svelte-d26d8ffd.js","./chunks/index-0ff0810f.js","./chunks/jobs-f0c41956.js","./chunks/PowerTable-43b77907.js","./assets/_page-65ee655d.css"],import.meta.url),()=>D(()=>import("./chunks/14-5237b357.js"),["./chunks/14-5237b357.js","./components/pages/examples/example9/_page.svelte-8c2696d9.js","./chunks/index-0ff0810f.js","./chunks/scores-42853dba.js","./chunks/PowerTable-43b77907.js","./assets/_page-ffb3cd8c.css"],import.meta.url)],Vt=[],Bt={"/":[3],"/examples":[4,[2]],"/examples/example10":[6,[2]],"/examples/example1":[5,[2]],"/examples/example2":[7,[2]],"/examples/example3":[8,[2]],"/examples/example4":[9,[2]],"/examples/example5":[10,[2]],"/examples/example6":[11,[2]],"/examples/example7":[12,[2]],"/examples/example8":[13,[2]],"/examples/example9":[14,[2]]},qt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,n){this.status=e,this.location=n}}async function Ct(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([a,s])=>[a,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ft=-1,Jt=-2,xt=-3,Gt=-4,Kt=-5,zt=-6;function Mt(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const n=e,a=Array(n.length);function s(i){if(i===Ft)return;if(i===xt)return NaN;if(i===Gt)return 1/0;if(i===Kt)return-1/0;if(i===zt)return-0;if(i in a)return a[i];const t=n[i];if(!t||typeof t!="object")a[i]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":a[i]=new Date(t[1]);break;case"Set":const f=new Set;a[i]=f;for(let w=1;w<t.length;w+=1)f.add(s(t[w]));break;case"Map":const u=new Map;a[i]=u;for(let w=1;w<t.length;w+=2)u.set(s(t[w]),s(t[w+1]));break;case"RegExp":a[i]=new RegExp(t[1],t[2]);break;case"Object":a[i]=Object(t[1]);break;case"BigInt":a[i]=BigInt(t[1]);break;case"null":const m=Object.create(null);a[i]=m;for(let w=1;w<t.length;w+=2)m[t[w]]=s(t[w+1]);break}else{const c=new Array(t.length);a[i]=c;for(let f=0;f<t.length;f+=1){const u=t[f];u!==Jt&&(c[f]=s(u))}}else{const c={};a[i]=c;for(const f in t){const u=t[f];c[f]=s(u)}}return a[i]}return s(0)}const He="sveltekit:scroll",W="sveltekit:index",pe=$t(ge,Vt,Bt,Ut),Ie=ge[0],Se=ge[1];Ie();Se();let se={};try{se=JSON.parse(sessionStorage[He])}catch{}function $e(r){se[r]=Oe()}function Ht({target:r,base:e,trailing_slash:n}){var Ve;const a=[];let s=null;const i={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},c=!1,f=!1,u=!0,m=!1,w=!1,j,E=(Ve=history.state)==null?void 0:Ve[W];E||(E=Date.now(),history.replaceState({...history.state,[W]:E},"",location.href));const Y=se[E];Y&&(history.scrollRestoration="manual",scrollTo(Y.x,Y.y));let U=!1,C,H,X;async function le(){X=X||Promise.resolve(),await X,X=null;const o=new URL(location.href),d=be(o,!0);s=null,await Ae(d,o,[])}async function ne(o,{noscroll:d=!1,replaceState:h=!1,keepfocus:l=!1,state:p={},invalidateAll:_=!1},g,k){return typeof o=="string"&&(o=new URL(o,Fe(document))),ve({url:o,scroll:d?Oe():null,keepfocus:l,redirect_chain:g,details:{state:p,replaceState:h},nav_token:k,accepted:()=>{_&&(w=!0)},blocked:()=>{},type:"goto"})}async function ce(o){const d=be(o,!1);if(!d)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${o}`);return s={id:d.id,promise:Te(d)},s.promise}async function Ae(o,d,h,l,p={},_){var k,$;H=p;let g=o&&await Te(o);if(g||(g=await Ue(d,null,oe(new Error(`Not found: ${d.pathname}`),{url:d,params:{},routeId:null}),404)),d=(o==null?void 0:o.url)||d,H!==p)return!1;if(g.type==="redirect")if(h.length>10||h.includes(d.pathname))g=await fe({status:500,error:oe(new Error("Redirect loop"),{url:d,params:{},routeId:null}),url:d,routeId:null});else return ne(new URL(g.location,d).href,{},[...h,d.pathname],p),!1;else(($=(k=g.props)==null?void 0:k.page)==null?void 0:$.status)>=400&&await Z.updated.check()&&await ue(d);if(a.length=0,w=!1,m=!0,l&&l.details){const{details:b}=l,v=b.replaceState?0:1;b.state[W]=E+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",d)}if(s=null,f){t=g.state,g.props.page&&(g.props.page.url=d);const b=he();j.$set(g.props),b()}else Pe(g);if(l){const{scroll:b,keepfocus:v}=l;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var S;(S=getSelection())==null||S.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ce(),u){const O=d.hash&&document.getElementById(d.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();u=!0,g.props.page&&(C=g.props.page),_&&_(),m=!1}function Pe(o){var p,_;t=o.state;const d=document.querySelector("style[data-sveltekit]");d&&d.remove(),C=o.props.page;const h=he();j=new Tt({target:r,props:{...o.props,stores:Z},hydrate:!0}),h();const l={from:null,to:de("to",{params:t.params,routeId:(_=(p=t.route)==null?void 0:p.id)!=null?_:null,url:new URL(location.href)}),type:"load"};i.after_navigate.forEach(g=>g(l)),f=!0}async function re({url:o,params:d,branch:h,status:l,error:p,route:_,form:g}){var I;const k=h.filter(Boolean),$={type:"loaded",state:{url:o,params:d,branch:h,error:p,route:_},props:{components:k.map(S=>S.node.component)}};g!==void 0&&($.props.form=g);let b={},v=!C;for(let S=0;S<k.length;S+=1){const N=k[S];b={...b,...N.data},(v||!t.branch.some(T=>T===N))&&($.props[`data_${S}`]=b,v=v||Object.keys((I=N.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(C.data).length!==Object.keys(b).length),!t.url||o.href!==t.url.href||t.error!==p||g!==void 0||v){$.props.page={error:p,params:d,routeId:_&&_.id,status:l,url:o,form:g,data:v?b:C.data};const S=(N,T)=>{Object.defineProperty($.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${T}`)}})};S("origin","origin"),S("path","pathname"),S("query","searchParams")}return $}async function we({loader:o,parent:d,url:h,params:l,routeId:p,server_data_node:_}){var b,v,O,I,S;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},$=await o();if((b=$.shared)!=null&&b.load){let N=function(...L){for(const y of L){const{href:R}=new URL(y,h);k.dependencies.add(R)}};const T={routeId:p,params:new Proxy(l,{get:(L,y)=>(k.params.add(y),L[y])}),data:(v=_==null?void 0:_.data)!=null?v:null,url:pt(h,()=>{k.url=!0}),async fetch(L,y){let R;L instanceof Request?(R=L.url,y={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...y}):R=L;const P=new URL(R,h).href;return N(P),f?wt(P,y):gt(R,P,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,d()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await $.shared.load.call(null,T))!=null?O:null,g=g?await Ct(g):null}return{node:$,loader:o,server:_,shared:(I=$.shared)!=null&&I.load?{type:"data",data:g,uses:k}:null,data:(S=g!=null?g:_==null?void 0:_.data)!=null?S:null}}function Ne(o,d,h,l){if(w)return!0;if(!h)return!1;if(h.parent&&d||h.url&&o)return!0;for(const p of h.params)if(l[p]!==t.params[p])return!0;for(const p of h.dependencies)if(a.some(_=>_(new URL(p))))return!0;return!1}function ye(o,d){var h,l;return(o==null?void 0:o.type)==="data"?{type:"data",data:o.data,uses:{dependencies:new Set((h=o.uses.dependencies)!=null?h:[]),params:new Set((l=o.uses.params)!=null?l:[]),parent:!!o.uses.parent,url:!!o.uses.url}}:(o==null?void 0:o.type)==="skip"&&d!=null?d:null}async function Te({id:o,invalidating:d,url:h,params:l,route:p}){var L;if((s==null?void 0:s.id)===o)return s.promise;const{errors:_,layouts:g,leaf:k}=p,$=[...g,k];_.forEach(y=>y==null?void 0:y().catch(()=>{})),$.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=t.url?o!==t.url.pathname+t.url.search:!1,O=$.reduce((y,R,P)=>{var ae;const A=t.branch[P],te=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||Ne(v,y.some(Boolean),(ae=A.server)==null?void 0:ae.uses,l));return y.push(te),y},[]);if(O.some(Boolean)){try{b=await Me(h,O)}catch(y){return fe({status:500,error:oe(y,{url:h,params:l,routeId:p.id}),url:h,routeId:p.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let S=!1;const N=$.map(async(y,R)=>{var ae;if(!y)return;const P=t.branch[R],A=I==null?void 0:I[R];if((!A||A.type==="skip")&&y[1]===(P==null?void 0:P.loader)&&!Ne(v,S,(ae=P.shared)==null?void 0:ae.uses,l))return P;if(S=!0,(A==null?void 0:A.type)==="error")throw A;return we({loader:y[1],url:h,params:l,routeId:p.id,parent:async()=>{var qe;const Be={};for(let Ee=0;Ee<R;Ee+=1)Object.assign(Be,(qe=await N[Ee])==null?void 0:qe.data);return Be},server_data_node:ye(A===void 0&&y[0]?{type:"skip"}:A!=null?A:null,P==null?void 0:P.server)})});for(const y of N)y.catch(()=>{});const T=[];for(let y=0;y<$.length;y+=1)if($[y])try{T.push(await N[y])}catch(R){if(R instanceof ze)return{type:"redirect",location:R.location};let P=500,A;I!=null&&I.includes(R)?(P=(L=R.status)!=null?L:P,A=R.error):R instanceof Le?(P=R.status,A=R.body):A=oe(R,{params:l,url:h,routeId:p.id});const te=await je(y,T,_);return te?await re({url:h,params:l,branch:T.slice(0,te.idx).concat(te.node),status:P,error:A,route:p}):await Ue(h,p.id,A,P)}else T.push(void 0);return await re({url:h,params:l,branch:T,status:200,error:null,route:p,form:d?void 0:null})}async function je(o,d,h){for(;o--;)if(h[o]){let l=o;for(;!d[l];)l-=1;try{return{idx:l+1,node:{node:await h[o](),loader:h[o],data:{},server:null,shared:null}}}catch{continue}}}async function fe({status:o,error:d,url:h,routeId:l}){var b;const p={},_=await Ie();let g=null;if(_.server)try{const v=await Me(h,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(h.origin!==location.origin||h.pathname!==location.pathname||c)&&await ue(h)}const k=await we({loader:Ie,url:h,params:p,routeId:l,parent:()=>Promise.resolve({}),server_data_node:ye(g)}),$={node:await Se(),loader:Se,shared:null,server:null,data:null};return await re({url:h,params:p,branch:[k,$],status:o,error:d,route:null})}function be(o,d){if(De(o))return;const h=decodeURI(o.pathname.slice(e.length)||"/");for(const l of pe){const p=l.exec(h);if(p){const _=new URL(o.origin+ct(o.pathname,n)+o.search+o.hash);return{id:_.pathname+_.search,invalidating:d,route:l,params:ft(p),url:_}}}}function De(o){return o.origin!==location.origin||!o.pathname.startsWith(e)}async function ve({url:o,scroll:d,keepfocus:h,redirect_chain:l,details:p,type:_,delta:g,nav_token:k,accepted:$,blocked:b}){var N,T,L,y;let v=!1;const O=be(o,!1),I={from:de("from",{params:t.params,routeId:(T=(N=t.route)==null?void 0:N.id)!=null?T:null,url:t.url}),to:de("to",{params:(L=O==null?void 0:O.params)!=null?L:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:o}),type:_};g!==void 0&&(I.delta=g);const S={...I,cancel:()=>{v=!0}};if(i.before_navigate.forEach(R=>R(S)),v){b();return}$e(E),$(),f&&Z.navigating.set(I),await Ae(O,o,l,{scroll:d,keepfocus:h,details:p},k,()=>{i.after_navigate.forEach(R=>R(I)),Z.navigating.set(null)})}async function Ue(o,d,h,l){return o.origin===location.origin&&o.pathname===location.pathname&&!c?await fe({status:l,error:h,url:o,routeId:d}):await ue(o)}function ue(o){return location.href=o.href,new Promise(()=>{})}return{after_navigate:o=>{Re(()=>(i.after_navigate.push(o),()=>{const d=i.after_navigate.indexOf(o);i.after_navigate.splice(d,1)}))},before_navigate:o=>{Re(()=>(i.before_navigate.push(o),()=>{const d=i.before_navigate.indexOf(o);i.before_navigate.splice(d,1)}))},disable_scroll_handling:()=>{(m||!f)&&(u=!1)},goto:(o,d={})=>ne(o,d,[]),invalidate:o=>{if(o===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof o=="function")a.push(o);else{const{href:d}=new URL(o,location.href);a.push(h=>h.href===d)}return le()},invalidateAll:()=>(w=!0,le()),prefetch:async o=>{const d=new URL(o,Fe(document));await ce(d)},prefetch_routes:async o=>{const h=(o?pe.filter(l=>o.some(p=>l.exec(p))):pe).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(h)},apply_action:async o=>{if(o.type==="error"){const d=new URL(location.href),{branch:h,route:l}=t;if(!l)return;const p=await je(t.branch.length,h,l.errors);if(p){const _=await re({url:d,params:t.params,branch:h.slice(0,p.idx).concat(p.node),status:500,error:o.error,route:l});t=_.state;const g=he();j.$set(_.props),g()}}else if(o.type==="redirect")ne(o.location,{invalidateAll:!0},[]);else{const d={form:o.data,page:{...C,form:o.data,status:o.status}},h=he();j.$set(d),h()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",l=>{var g,k;let p=!1;const _={from:de("from",{params:t.params,routeId:(k=(g=t.route)==null?void 0:g.id)!=null?k:null,url:t.url}),to:null,type:"unload",cancel:()=>p=!0};i.before_navigate.forEach($=>$(_)),p?(l.preventDefault(),l.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){$e(E);try{sessionStorage[He]=JSON.stringify(se)}catch{}}});const o=l=>{const{url:p,options:_}=Je(l);if(p&&_.prefetch){if(De(p))return;ce(p)}};let d;const h=l=>{clearTimeout(d),d=setTimeout(()=>{var p;(p=l.target)==null||p.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",o),addEventListener("mousemove",h),addEventListener("sveltekit:trigger_prefetch",o),addEventListener("click",l=>{if(l.button||l.which!==1||l.metaKey||l.ctrlKey||l.shiftKey||l.altKey||l.defaultPrevented)return;const{a:p,url:_,options:g}=Je(l);if(!p||!_)return;const k=p instanceof SVGAElement;if(!k&&_.protocol!==location.protocol&&!(_.protocol==="https:"||_.protocol==="http:"))return;const $=(p.getAttribute("rel")||"").split(/\s+/);if(p.hasAttribute("download")||$.includes("external")||g.reload||(k?p.target.baseVal:p.target))return;const[b,v]=_.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){U=!0,$e(E),t.url=_,Z.page.set({...C,url:_}),Z.page.notify();return}ve({url:_,scroll:g.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:_.href===location.href},accepted:()=>l.preventDefault(),blocked:()=>l.preventDefault(),type:"link"})}),addEventListener("popstate",l=>{if(l.state){if(l.state[W]===E)return;const p=l.state[W]-E;ve({url:new URL(location.href),scroll:se[l.state[W]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{E=l.state[W]},blocked:()=>{history.go(-p)},type:"popstate",delta:p})}}),addEventListener("hashchange",()=>{U&&(U=!1,history.replaceState({...history.state,[W]:++E},"",location.href))});for(const l of document.querySelectorAll("link"))l.rel==="icon"&&(l.href=l.href);addEventListener("pageshow",l=>{l.persisted&&Z.navigating.set(null)})},_hydrate:async({status:o,error:d,node_ids:h,params:l,routeId:p,data:_,form:g})=>{var b;c=!0;const k=new URL(location.href);let $;try{const v=h.map(async(O,I)=>{const S=_[I];return we({loader:ge[O],url:k,params:l,routeId:p,parent:async()=>{const N={};for(let T=0;T<I;T+=1)Object.assign(N,(await v[T]).data);return N},server_data_node:ye(S)})});$=await re({url:k,params:l,branch:await Promise.all(v),status:o,error:d,form:g,route:(b=pe.find(O=>O.id===p))!=null?b:null})}catch(v){if(v instanceof ze){await ue(new URL(v.location,location.href));return}$=await fe({status:v instanceof Le?v.status:500,error:oe(v,{url:k,params:l,routeId:p}),url:k,routeId:p})}Pe($)}}}async function Me(r,e){const n=new URL(r);n.pathname=mt(r.pathname);const a=await _e(n.href,{headers:{"x-sveltekit-invalidated":e.map(i=>i?"1":"").join(",")}}),s=await a.text();if(!a.ok)throw new Error(JSON.parse(s));return Mt(s)}function oe(r,e){var n;return r instanceof Le?r.body:(n=qt.handleError({error:r,event:e}))!=null?n:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Wt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function de(r,e){for(const n of Wt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return e}function he(){return()=>{}}async function Zt({env:r,hydrate:e,paths:n,target:a,trailing_slash:s}){it(n);const i=Ht({target:a,base:n.base,trailing_slash:s});lt({client:i}),e?await i._hydrate(e):i.goto(location.href,{replaceState:!0}),i._start_router()}export{Zt as start};
