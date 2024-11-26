import{h as k,u as _,r as x,X as O,k as L,Y,Z as N,$ as P}from"./DzXDHcK5.js";function $(e){return Y()?(N(e),!0):!1}function S(e){return typeof e=="function"?e():_(e)}const E=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const H=Object.prototype.toString,R=e=>H.call(e)==="[object Object]",M=()=>{},C=j();function j(){var e,t;return E&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}const q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,W=/[YMDHhms]o|\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function G(e,t,n,r){let a=e<12?"AM":"PM";return r&&(a=a.split("").reduce((i,l)=>i+=`${l}.`,"")),n?a.toLowerCase():a}function h(e){const t=["th","st","nd","rd"],n=e%100;return e+(t[(n-20)%10]||t[n]||t[0])}function U(e,t,n={}){var r;const a=e.getFullYear(),i=e.getMonth(),l=e.getDate(),s=e.getHours(),c=e.getMinutes(),m=e.getSeconds(),f=e.getMilliseconds(),d=e.getDay(),o=(r=n.customMeridiem)!=null?r:G,u={Yo:()=>h(a),YY:()=>String(a).slice(-2),YYYY:()=>a,M:()=>i+1,Mo:()=>h(i+1),MM:()=>`${i+1}`.padStart(2,"0"),MMM:()=>e.toLocaleDateString(n.locales,{month:"short"}),MMMM:()=>e.toLocaleDateString(n.locales,{month:"long"}),D:()=>String(l),Do:()=>h(l),DD:()=>`${l}`.padStart(2,"0"),H:()=>String(s),Ho:()=>h(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),ho:()=>h(s%12||12),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(c),mo:()=>h(c),mm:()=>`${c}`.padStart(2,"0"),s:()=>String(m),so:()=>h(m),ss:()=>`${m}`.padStart(2,"0"),SSS:()=>`${f}`.padStart(3,"0"),d:()=>d,dd:()=>e.toLocaleDateString(n.locales,{weekday:"narrow"}),ddd:()=>e.toLocaleDateString(n.locales,{weekday:"short"}),dddd:()=>e.toLocaleDateString(n.locales,{weekday:"long"}),A:()=>o(s,c),AA:()=>o(s,c,!1,!0),a:()=>o(s,c,!0),aa:()=>o(s,c,!0,!0)};return t.replace(W,(p,y)=>{var w,v;return(v=y??((w=u[p])==null?void 0:w.call(u)))!=null?v:p})}function V(e){if(e===null)return new Date(Number.NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(q);if(t){const n=t[2]-1||0,r=(t[7]||"0").substring(0,3);return new Date(t[1],n,t[3]||1,t[4]||0,t[5]||0,t[6]||0,r)}}return new Date(e)}function te(e,t="HH:mm:ss",n={}){return k(()=>U(V(S(e)),S(t),n))}function X(e,t=1e3,n={}){const{immediate:r=!0,immediateCallback:a=!1}=n;let i=null;const l=x(!1);function s(){i&&(clearInterval(i),i=null)}function c(){l.value=!1,s()}function m(){const f=S(t);f<=0||(l.value=!0,a&&e(),s(),i=setInterval(e,f))}if(r&&E&&m(),O(t)||typeof t=="function"){const f=L(t,()=>{l.value&&E&&m()});$(f)}return $(c),{isActive:l,pause:c,resume:m}}function A(e){var t;const n=S(e);return(t=n==null?void 0:n.$el)!=null?t:n}const b=E?window:void 0;function F(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=b):[t,n,r,a]=e,!t)return M;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],l=()=>{i.forEach(f=>f()),i.length=0},s=(f,d,o,u)=>(f.addEventListener(d,o,u),()=>f.removeEventListener(d,o,u)),c=L(()=>[A(t),S(a)],([f,d])=>{if(l(),!f)return;const o=R(d)?{...d}:d;i.push(...n.flatMap(u=>r.map(p=>s(f,u,p,o))))},{immediate:!0,flush:"post"}),m=()=>{c(),l()};return $(m),m}let I=!1;function ne(e,t,n={}){const{window:r=b,ignore:a=[],capture:i=!0,detectIframe:l=!1}=n;if(!r)return M;C&&!I&&(I=!0,Array.from(r.document.body.children).forEach(o=>o.addEventListener("click",M)),r.document.documentElement.addEventListener("click",M));let s=!0;const c=o=>a.some(u=>{if(typeof u=="string")return Array.from(r.document.querySelectorAll(u)).some(p=>p===o.target||o.composedPath().includes(p));{const p=A(u);return p&&(o.target===p||o.composedPath().includes(p))}}),f=[F(r,"click",o=>{const u=A(e);if(!(!u||u===o.target||o.composedPath().includes(u))){if(o.detail===0&&(s=!c(o)),!s){s=!0;return}t(o)}},{passive:!0,capture:i}),F(r,"pointerdown",o=>{const u=A(e);s=!c(o)&&!!(u&&!o.composedPath().includes(u))},{passive:!0}),l&&F(r,"blur",o=>{setTimeout(()=>{var u;const p=A(e);((u=r.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(p!=null&&p.contains(r.document.activeElement))&&t(o)},0)})].filter(Boolean);return()=>f.forEach(o=>o())}function Z(e,t={}){const{immediate:n=!0,fpsLimit:r=void 0,window:a=b}=t,i=x(!1),l=r?1e3/r:null;let s=0,c=null;function m(o){if(!i.value||!a)return;s||(s=o);const u=o-s;if(l&&u<l){c=a.requestAnimationFrame(m);return}s=o,e({delta:u,timestamp:o}),c=a.requestAnimationFrame(m)}function f(){!i.value&&a&&(i.value=!0,s=0,c=a.requestAnimationFrame(m))}function d(){i.value=!1,c!=null&&a&&(a.cancelAnimationFrame(c),c=null)}return n&&f(),$(d),{isActive:P(i),pause:d,resume:f}}function z(e={}){const{controls:t=!1,interval:n="requestAnimationFrame"}=e,r=x(new Date),a=()=>r.value=new Date,i=n==="requestAnimationFrame"?Z(a,{immediate:!0}):X(a,n,{immediate:!0});return t?{now:r,...i}:r}const B=[{max:6e4,value:1e3,name:"second"},{max:276e4,value:6e4,name:"minute"},{max:72e6,value:36e5,name:"hour"},{max:5184e5,value:864e5,name:"day"},{max:24192e5,value:6048e5,name:"week"},{max:28512e6,value:2592e6,name:"month"},{max:Number.POSITIVE_INFINITY,value:31536e6,name:"year"}],J={justNow:"just now",past:e=>e.match(/\d/)?`${e} ago`:e,future:e=>e.match(/\d/)?`in ${e}`:e,month:(e,t)=>e===1?t?"last month":"next month":`${e} month${e>1?"s":""}`,year:(e,t)=>e===1?t?"last year":"next year":`${e} year${e>1?"s":""}`,day:(e,t)=>e===1?t?"yesterday":"tomorrow":`${e} day${e>1?"s":""}`,week:(e,t)=>e===1?t?"last week":"next week":`${e} week${e>1?"s":""}`,hour:e=>`${e} hour${e>1?"s":""}`,minute:e=>`${e} minute${e>1?"s":""}`,second:e=>`${e} second${e>1?"s":""}`,invalid:""};function K(e){return e.toISOString().slice(0,10)}function oe(e,t={}){const{controls:n=!1,updateInterval:r=3e4}=t,{now:a,...i}=z({interval:r,controls:!0}),l=k(()=>Q(new Date(S(e)),t,S(a)));return n?{timeAgo:l,...i}:l}function Q(e,t={},n=Date.now()){var r;const{max:a,messages:i=J,fullDateFormatter:l=K,units:s=B,showSecond:c=!1,rounding:m="round"}=t,f=typeof m=="number"?w=>+w.toFixed(m):Math[m],d=+n-+e,o=Math.abs(d);function u(w,v){return f(Math.abs(w)/v.value)}function p(w,v){const D=u(w,v),g=w>0,T=y(v.name,D,g);return y(g?"past":"future",T,g)}function y(w,v,D){const g=i[w];return typeof g=="function"?g(v,D):g.replace("{0}",v.toString())}if(o<6e4&&!c)return i.justNow;if(typeof a=="number"&&o>a)return l(new Date(e));if(typeof a=="string"){const w=(r=s.find(v=>v.name===a))==null?void 0:r.max;if(w&&o>w)return l(new Date(e))}for(const[w,v]of s.entries()){if(u(d,v)<=0&&s[w-1])return p(d,s[w-1]);if(o<v.max)return p(d,v)}return i.invalid}export{z as a,te as b,ne as o,oe as u};