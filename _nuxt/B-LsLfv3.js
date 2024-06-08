import{u as W,o as n,c as l,a as e,f as x,g as A,h,b as i,i as s,t as u,d as g,r as $,j as B,k as M,l as G,m as J,n as k,q as K,F as Q,s as Y}from"./ZCoWQMY8.js";import{u as z,a as Z,b as S}from"./BQne2GLu.js";import{u as L}from"./DN2n7AwI.js";function ee(a,t){const{title:o,titleTemplate:c,...r}=a;return L({title:o,titleTemplate:c,_flatMeta:r},{...t,transform(m){const d=W({...m._flatMeta});return delete m._flatMeta,{...m,meta:d}}})}const te={viewBox:"0 0 20 20",width:"1.2em",height:"1.2em"},se=e("path",{fill:"currentColor",d:"M5.453 4.167a.726.726 0 0 0-1.027-.01A8.23 8.23 0 0 0 2 10a8.23 8.23 0 0 0 2.604 6.015a.725.725 0 0 0 1.01-.025c.316-.316.277-.819-.027-1.11A6.73 6.73 0 0 1 3.5 10c0-1.846.741-3.52 1.943-4.738c.29-.295.32-.785.01-1.095M7.214 5.93a.714.714 0 0 0-1.008-.016A5.73 5.73 0 0 0 4.5 10c0 1.692.73 3.213 1.893 4.265a.713.713 0 0 0 .983-.038c.328-.328.267-.844-.041-1.134A4.24 4.24 0 0 1 6 10c0-1.15.457-2.194 1.2-2.96c.286-.294.333-.793.014-1.111m5.572 0a.714.714 0 0 1 1.008-.016A5.73 5.73 0 0 1 15.5 10c0 1.692-.73 3.213-1.893 4.265a.713.713 0 0 1-.983-.038c-.328-.328-.267-.844.041-1.134A4.24 4.24 0 0 0 14 10c0-1.15-.457-2.194-1.2-2.96c-.286-.294-.333-.793-.014-1.111m1.761-1.762a.726.726 0 0 1 1.027-.01A8.23 8.23 0 0 1 18 10a8.23 8.23 0 0 1-2.604 6.015a.725.725 0 0 1-1.01-.025c-.316-.316-.277-.819.028-1.11A6.73 6.73 0 0 0 16.5 10c0-1.846-.741-3.52-1.943-4.738c-.29-.295-.32-.785-.01-1.095M10 8.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"},null,-1),oe=[se];function ae(a,t){return n(),l("svg",te,[...oe])}const T={name:"fluent-live-20-filled",render:ae},ne={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},re=e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 12l-6-6m6 6l-6 6m6-6H5"},null,-1),le=[re];function ce(a,t){return n(),l("svg",ne,[...le])}const F={name:"majesticons-arrow-right",render:ce},ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},de=e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"},[e("circle",{cx:"12",cy:"8",r:"5"}),e("path",{d:"M20 21a8 8 0 1 0-16 0m16 0a8 8 0 1 0-16 0"})],-1),_e=[de];function ue(a,t){return n(),l("svg",ie,[..._e])}const me={name:"majesticons-user-line",render:ue},he={class:"flex gap-2 bg-[#f2e1e6] w-fit rounded-lg flex-col p-4 max-w-sm"},pe={class:"flex items-center gap-2"},fe=e("h1",{class:"text-xl font-semibold"},"Agora",-1),xe=e("div",{class:"m-2 w-fit uppercase absolute text-white bg-[#e91916] text-sm px-2 rounded font-medium"}," ao vivo ",-1),ge=["src"],ve={class:"relative p-2"},$e={class:"flex flex-col gap-2 h-full justify-between"},we={class:"flex flex-col gap-2"},be={class:"flex flex-col gap-2"},ye={class:"text-xs font-medium"},Ce={class:"text-sm font-semibold"},Me={class:"flex gap-2 font-semibold text-[#971311] text-sm"},ke={href:"https://twitch.tv/xarola_",target:"_blank",class:"flex items-center justify-between cursor-pointer gap-1 bg-ivy text-white p-1 px-2 rounded-lg font-medium"},Ae=x({__name:"NowCard",props:{stream:{}},setup(a){const t=a,{stream:o}=A(t),c=h(()=>o.value.thumbnail_url.replace("{width}",1920).replace("{height}",1080));return(r,m)=>(n(),l("div",he,[e("div",pe,[i(s(T),{class:"text-xl"}),fe]),e("div",null,[xe,e("img",{class:"h-52 rounded-lg",src:s(c)},null,8,ge)]),e("div",ve,[e("div",$e,[e("div",we,[e("div",be,[e("p",ye,u(s(o).user_name)+" está streamando "+u(s(o).game_name),1),e("p",Ce,u(s(o).title),1)]),e("span",Me,[i(s(me)),g(" "+u(s(o).viewer_count),1)])]),e("a",ke,[g(" Assistir à stream "),i(s(F))])])])]))}}),He={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},je=e("path",{fill:"currentColor",d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"},null,-1),De=[je];function Se(a,t){return n(),l("svg",He,[...De])}const Be={name:"mdi-instagram",render:Se},ze={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Le=e("path",{fill:"currentColor",d:"M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"},null,-1),Te=[Le];function Fe(a,t){return n(),l("svg",ze,[...Te])}const Ie={name:"ri-twitter-x-fill",render:Fe},Ne={class:"flex gap-2 bg-heaven w-fit rounded-lg max-w-sm flex-col p-4"},Ve={class:"flex items-center gap-2"},Pe=e("h1",{class:"text-xl font-semibold"},"Agora",-1),Ue=["src"],Ee={class:"relative p-2"},Xe={class:"flex flex-col gap-2 h-full w-full justify-between"},qe={class:"flex flex-col gap-2 h-full w-full"},Re={class:"flex flex-col gap-2 items-center justify-center h-full"},Oe={class:"font-medium"},We=e("img",{class:"h-20 w-20 mx-auto my-auto",src:"https://cdn.betterttv.net/emote/5e93f023ce7cbf62fe149ebe/3x.webp",alt:""},null,-1),Ge={class:"flex items-center flex-col"},Je=e("p",{class:"text-xs"}," Siga o bruxo nas mídias sociais: ",-1),Ke={class:"flex gap-2"},Qe={href:"https://instagram.com/xarolao",target:"_blank"},Ye={href:"https://x.com/xarolao",target:"_blank"},Ze=x({__name:"OffCard",props:{user:{}},setup(a){const t=a,{user:o}=A(t);return(c,r)=>(n(),l("div",Ne,[e("div",Ve,[i(s(T),{class:"text-xl"}),Pe]),e("img",{class:"h-52 rounded-lg",src:s(o).offline_image_url},null,8,Ue),e("div",Ee,[e("div",Xe,[e("div",qe,[e("div",Re,[e("p",Oe,u(s(o).display_name)+" está comendo mole ",1),We]),e("span",Ge,[Je,e("div",Ke,[e("a",Qe,[i(s(Be))]),e("a",Ye,[i(s(Ie))])])])])])])]))}}),et={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},tt=e("path",{fill:"currentColor",d:"m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"},null,-1),st=[tt];function ot(a,t){return n(),l("svg",et,[...st])}const at={name:"lets-icons-back",render:ot},nt={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},rt=e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M4.19 7.262C5.94 5.577 8.517 4 12 4c3.483 0 6.06 1.577 7.81 3.262a15.086 15.086 0 0 1 3.001 4.11c.193.399.193.857 0 1.255a15.086 15.086 0 0 1-3 4.111C18.06 18.423 15.483 20 12 20c-3.483 0-6.06-1.577-7.81-3.262a15.088 15.088 0 0 1-3.001-4.11a1.435 1.435 0 0 1 0-1.255a15.088 15.088 0 0 1 3-4.111zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6","clip-rule":"evenodd"},null,-1),lt=[rt];function ct(a,t){return n(),l("svg",nt,[...lt])}const it={name:"majesticons-eye",render:ct},dt={class:"flex gap-2 bg-heaven w-fit rounded-lg flex-col max-w-sm p-4"},_t={class:"flex items-center gap-2"},ut=e("h1",{class:"text-xl font-semibold"},"Última stream",-1),mt=["src"],ht={class:"relative p-2"},pt={class:"flex flex-col gap-2 h-full justify-between"},ft={class:"flex flex-col gap-2"},xt={class:"flex flex-col gap-2"},gt={class:"text-xs font-medium"},vt={class:"text-sm font-semibold"},$t={class:"flex gap-2 font-semibold text-sm"},wt=["href"],bt=x({__name:"PreviousStreamCard",props:{video:{}},setup(a){const t=a,{video:o}=A(t),c=h(()=>o.value.thumbnail_url.replace("%{width}",1920).replace("%{height}",1080)),r=h(()=>z(new Date(o.value.created_at)).value.replace("yesterday","ontem").replace("second","segundos").replace("minute","minutos").replace("hour","hora").replace("day","dia").replace("week","semana").replace("month","mês").replace("year","ano").replace("ago","atrás"));return(m,d)=>(n(),l("div",dt,[e("div",_t,[i(s(at),{class:"text-xl"}),ut]),e("img",{class:"h-52 rounded-lg",src:s(c)},null,8,mt),e("div",ht,[e("div",pt,[e("div",ft,[e("div",xt,[e("p",gt,u(s(o).user_name)+" esteve online "+u(s(r)),1),e("p",vt,u(s(o).title),1)]),e("span",$t,[i(s(it)),g(" "+u(s(o).view_count),1)])]),e("a",{href:s(o).url,target:"_blank",class:"flex items-center justify-between cursor-pointer gap-1 bg-ivy text-white p-1 px-2 rounded-lg font-medium"},[g(" Assistir à VOD "),i(s(F))],8,wt)])])]))}}),yt={class:"min-w-sm bg-heaven h-fit py-4 px-6 rounded-lg flex flex-col gap-1"},Ct={class:"font-bold text-2xl"},Mt=e("p",{class:"text-xs"},"Streamadas nas últimas 7 streams",-1),kt=x({__name:"Stat",props:{value:{}},setup(a){return(t,o)=>(n(),l("div",yt,[e("span",Ct,u(t.value),1),Mt]))}}),At={class:"bg-heaven p-4 rounded-md items-center flex flex-col w-full"},Ht={class:"font-bold text-2xl"},jt=e("span",{class:"text-sm font-medium"},"Horas",-1),Dt=x({__name:"Cronometro",props:{streamStart:{}},setup(a){const t=a,o=h(()=>{const d=new Date;return d.getHours()>12?new Date(new Date().setDate(d.getDate()+1)).setHours(12,0,0,0):d.setHours(12,0,0,0)}),c=h(()=>S().value.getTime()-new Date(t.streamStart).getTime()),r=h(()=>new Date(o.value).getTime()-S().value.getTime()),m=h(()=>t.streamStart?"Ao vivo há":"Próxima stream em");return(d,p)=>(n(),l("div",At,[e("p",null,u(s(m)),1),e("span",Ht,u(("useDateFormat"in d?d.useDateFormat:s(Z))(new Date((s(c)||s(r))+36e5*3),"HH:mm:ss").value),1),jt]))}}),St={viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Bt=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),zt=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01z"},null,-1),Lt=[Bt,zt];function Tt(a,t){return n(),l("svg",St,[...Lt])}const Ft={name:"carbon-time",render:Tt},It={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Nt=e("path",{fill:"currentColor",d:"M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26a1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59a2.23 2.23 0 0 1-.91.2"},null,-1),Vt=[Nt];function Pt(a,t){return n(),l("svg",It,[...Vt])}const Ut={name:"eva-arrow-left-fill",render:Pt},Et={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},Xt=e("path",{fill:"currentColor",d:"M10.46 18a2.23 2.23 0 0 1-.91-.2a1.76 1.76 0 0 1-1.05-1.59V7.79A1.76 1.76 0 0 1 9.55 6.2a2.1 2.1 0 0 1 2.21.26l5.1 4.21a1.7 1.7 0 0 1 0 2.66l-5.1 4.21a2.06 2.06 0 0 1-1.3.46"},null,-1),qt=[Xt];function Rt(a,t){return n(),l("svg",Et,[...qt])}const Ot={name:"eva-arrow-right-fill",render:Rt},Wt={class:"flex items-center bg-heaven justify-between p-4 rounded-md"},Gt={class:"px-4 flex flex-col gap-5 w-full"},Jt=e("h1",{class:"text-xl font-semibold"},"Pontualidade",-1),Kt={class:"text-sm"},Qt={class:"flex items-center justify-center gap-3 p-2"},Yt={class:"text-bold text-xl"},Zt=e("p",{class:"text-bold text-xl"},"12:00",-1),es={class:"text-bold text-xl"},ts={key:0,class:"font-semibold text-xs text-center"},ss={key:1,class:"font-semibold text-xs text-center"},os=x({__name:"Pontualidade",props:{video:{}},setup(a){const t=a,o=h(()=>`${new Date(t.video.created_at).getHours()}:${new Date(t.video.created_at).getMinutes().toString().padStart(2,"0")}`),c=h(()=>(new Date(t.video.created_at).getTime()-new Date(t.video.created_at).setHours(12,0))/6e4),r=h(()=>{const d=Math.floor(c.value/60),p=c.value%60;return`${Math.abs(d)}h${Math.abs(p.toString().padStart(2,"0"))}m`}),m=h(()=>z(new Date(t.video.created_at)).value.replace("yesterday","ontem").replace("second","segundos").replace("minute","minutos").replace("hour","hora").replace("day","dia").replace("week","semana").replace("month","mês").replace("year","ano").replace("ago","atrás").replace("last","última"));return(d,p)=>(n(),l("div",Wt,[i(s(Ut),{onClick:p[0]||(p[0]=w=>d.$emit("prev"))}),e("div",Gt,[i(s(Ft),{class:"text-2xl"}),e("div",null,[Jt,e("p",Kt,u(s(m)),1)]),e("div",Qt,[e("p",Yt,u(s(o)),1),g(" - "),Zt,g(" = "),e("p",es,u(s(r)),1)]),s(c)>0?(n(),l("span",ts,"atrasadinha, guys ✌️😁✌️")):(n(),l("span",ss,"adiantado 👏"))]),i(s(Ot),{onClick:p[1]||(p[1]=w=>d.$emit("next"))})]))}}),as={id:"container",class:"fixed pointer-events-none top-0 bottom-0 left-0 right-0"},ns=x({__name:"CopyPasta",props:{text:{default:"🤣👉12:00⌚"},animationLength:{default:10}},setup(a){$();const t=a;function o(){const c=document.querySelector("#container");var r=document.createElement("span");r.className=`el absolute animate-[pop_${t.animationLength}s_linear_forwards] px-2 py-1 rounded-full bg-cloudy min-w-max border border-ivy`,r.innerHTML=t.text,r.style.left=Math.random()*(window.innerWidth-35)+"px",r.style.top=Math.random()*(window.innerHeight*.5)+"px",c.appendChild(r),setTimeout(function(){var m=document.querySelector(".el");m.remove()},1e3*t.animationLength),setTimeout(o,5e3)}return B(()=>{o()}),(c,r)=>(n(),l("div",as))}}),rs=window.setInterval,ls={class:"flex flex-col mb-8 lg:h-[80vh] items-center justify-center"},cs=e("p",{class:"text-start w-full text-3xl text-bold py-6"},"Início",-1),is={class:"lg:flex lg:flex-row items-center lg:items-start justify-center lg:gap-4"},ds={class:"relative flex gap-4 flex-col lg:flex-row items-center lg:items-start"},_s={class:"flex flex-col gap-4"},us={class:"flex flex-col gap-4 w-96 lg:w-auto"},xs={__name:"Home",async setup(a){let t,o;ee({title:"Xarolas HUB",ogTitle:"Xarolas HUB",description:"Fique por dentro da Xarolas Live. Agenda, sagas, terrorzão.",ogDescription:"Fique por dentro da Xarolas Live. Agenda, sagas, terrorzão.",ogImage:"https://static-cdn.jtvnw.net/jtv_user_pictures/9f78656d-7853-40bf-bd96-90090252a858-profile_image-300x300.png",twitterCard:"summary"}),L({title:"Xarolas HUB | Início",link:[{rel:"icon",type:"image/png",href:"https://static-cdn.jtvnw.net/jtv_user_pictures/9f78656d-7853-40bf-bd96-90090252a858-profile_image-300x300.png"}]});const{$twitch:c}=Y(),{data:r,status:m,error:d}=([t,o]=M(()=>c.streams.getStreamInfo()),t=await t,o(),t),{data:p,status:w,error:ms}=([t,o]=M(()=>c.users.getUserInfo()),t=await t,o(),t),{data:v,status:I}=([t,o]=M(()=>c.videos.getVideosList()),t=await t,o(),t),b=$(!1),H=$(),y=$(0),N=h(()=>v.value.data.slice(0,7).map(_=>_.duration).map(_=>_.split(/[a-z]+/).map(Number)).map(([_,f,C])=>_+f/60+C/3600).reduce((_,f)=>_+f,0));function V(){const _=new Date;_.getHours()===12&&_.getMinutes()<30?b.value=!0:b.value=!1}return h(()=>{const _=new Date().setHours(0,0,0,0);return new Date(v.value.data[0].created_at).setHours(0,0,0,0)===_}),B(()=>{H.value=rs(V,1e3)}),G(()=>{clearInterval(H)}),J([m,I,w],_=>{console.log(_)}),(_,f)=>{var j,D;const C=Ae,P=Ze,U=bt,E=kt,X=Dt,q=os,R=ns;return n(),l(Q,null,[e("div",ls,[cs,e("div",is,[e("div",ds,[e("div",null,[s(r).data.length?(n(),k(C,{key:0,stream:s(r).data[0]},null,8,["stream"])):(n(),k(P,{key:1,user:s(p).data[0]},null,8,["user"]))]),e("div",null,[i(U,{video:s(v).data[0]},null,8,["video"])]),e("div",_s,[e("div",us,[i(E,{value:`${Math.floor(s(N))}+ Horas`},null,8,["value"]),i(X,{"stream-start":(D=(j=s(r))==null?void 0:j.data[0])==null?void 0:D.started_at},null,8,["stream-start"])]),i(q,{video:s(v).data[s(y)],onPrev:f[0]||(f[0]=O=>y.value--),onNext:f[1]||(f[1]=O=>y.value++)},null,8,["video"])])])])]),s(b)&&!s(r).data.length?(n(),k(R,{key:0})):K("",!0)],64)}}};export{xs as default};
