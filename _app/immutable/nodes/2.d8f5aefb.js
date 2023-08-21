import{x as Le,s as De,z as ct,f as w,a as F,g as y,h as D,c as Y,d as p,j as r,D as se,i as $,u as d,E as Qe,F as Me,v as Z,A as ut,B as dt,C as ft,G as mt,o as ht,l as Q,m as X,n as Ye,p as Ue,H as Xe,I as Ze,k as je,r as Te,w as Je,J as xe,b as pt,K as qe,L as gt,M as _t,e as $e,N as vt,O as bt}from"../chunks/scheduler.60a61370.js";import{a as j,S as He,i as Ie,t as G,b as pe,d as ge,m as _e,e as be,c as Pe,g as Fe}from"../chunks/index.145bfebc.js";import{H as et,L as kt,g as wt,a as yt,b as Ct,m as Et,c as St}from"../chunks/monokai.e541b38e.js";function tt(l){return(l==null?void 0:l.length)!==void 0?l:Array.from(l)}function Ot(l,e){l.d(1),e.delete(l.key)}function Tt(l,e,t,s,a,n,u,i,m,_,T,H){let g=l.length,h=n.length,f=g;const S={};for(;f--;)S[l[f].key]=f;const E=[],O=new Map,b=new Map,N=[];for(f=h;f--;){const c=H(a,n,f),v=t(c);let C=u.get(v);C?s&&N.push(()=>C.p(c,e)):(C=_(v,c),C.c()),O.set(v,E[f]=C),v in S&&b.set(v,Math.abs(f-S[v]))}const K=new Set,A=new Set;function V(c){j(c,1),c.m(i,T),u.set(c.key,c),T=c.first,h--}for(;g&&h;){const c=E[h-1],v=l[g-1],C=c.key,z=v.key;c===v?(T=c.first,g--,h--):O.has(z)?!u.has(C)||K.has(C)?V(c):A.has(z)?g--:b.get(C)>b.get(z)?(A.add(C),V(c)):(K.add(z),g--):(m(v,u),g--)}for(;g--;){const c=l[g];O.has(c.key)||m(c,u)}for(;h;)V(E[h-1]);return Le(N),E}const Dt=l=>({}),lt=l=>({});function st(l,e,t){const s=l.slice();return s[45]=e[t],s}function Ht(l){let e,t,s,a,n,u;return{c(){e=w("button"),t=Xe("svg"),s=Xe("path"),this.h()},l(i){e=y(i,"BUTTON",{class:!0,tabindex:!0,name:!0,"aria-label":!0});var m=D(e);t=Ze(m,"svg",{tabindex:!0,xmlns:!0,width:!0,height:!0,viewBox:!0,style:!0,class:!0});var _=D(t);s=Ze(_,"path",{d:!0,class:!0}),D(s).forEach(p),_.forEach(p),m.forEach(p),this.h()},h(){r(s,"d","M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"),r(s,"class","svelte-1380f86"),r(t,"tabindex","-1"),r(t,"xmlns","http://www.w3.org/2000/svg"),r(t,"width","24"),r(t,"height","24"),r(t,"viewBox","0 0 24 24"),je(t,"fill","rgba(0, 0, 0, 1)"),r(t,"class","svelte-1380f86"),r(e,"class",a="chevron "+(l[6]?"up":"")+" svelte-1380f86"),r(e,"tabindex","-1"),r(e,"name","chevron"),r(e,"aria-label","Chevron")},m(i,m){$(i,e,m),d(e,t),d(t,s),l[37](e),n||(u=Z(e,"click",l[38]),n=!0)},p(i,m){m[0]&64&&a!==(a="chevron "+(i[6]?"up":"")+" svelte-1380f86")&&r(e,"class",a)},d(i){i&&p(e),l[37](null),n=!1,u()}}}function It(l){let e,t='<svg tabindex="-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);" class="svelte-1380f86"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" class="svelte-1380f86"></path></svg>',s,a;return{c(){e=w("button"),e.innerHTML=t,this.h()},l(n){e=y(n,"BUTTON",{class:!0,tabindex:!0,name:!0,"aria-label":!0,"data-svelte-h":!0}),Te(e)!=="svelte-1r3v4x1"&&(e.innerHTML=t),this.h()},h(){r(e,"class","close svelte-1380f86"),r(e,"tabindex","-1"),r(e,"name","close"),r(e,"aria-label","Close")},m(n,u){$(n,e,u),s||(a=Z(e,"click",l[36]),s=!0)},p:Je,d(n){n&&p(e),s=!1,a()}}}function nt(l,e){let t,s=e[45].name+"",a,n,u,i,m,_,T,H;function g(){return e[39](e[45])}return{key:l,first:null,c(){t=w("button"),a=Q(s),this.h()},l(h){t=y(h,"BUTTON",{id:!0,tabindex:!0,class:!0,role:!0,"aria-label":!0,"aria-selected":!0});var f=D(t);a=X(f,s),f.forEach(p),this.h()},h(){r(t,"id",n=e[1]+"-option-"+e[45].id),r(t,"tabindex",u=e[6]?0:-1),r(t,"class",i=(e[12]===e[45].id?"active":"")+" "+e[5]+" svelte-1380f86"),r(t,"role","option"),r(t,"aria-label",m=e[45].name),r(t,"aria-selected",_=e[12]===e[45].id),this.first=t},m(h,f){$(h,t,f),d(t,a),T||(H=[Z(t,"click",g),Z(t,"keydown",e[40])],T=!0)},p(h,f){e=h,f[0]&512&&s!==(s=e[45].name+"")&&Ye(a,s),f[0]&514&&n!==(n=e[1]+"-option-"+e[45].id)&&r(t,"id",n),f[0]&64&&u!==(u=e[6]?0:-1)&&r(t,"tabindex",u),f[0]&4640&&i!==(i=(e[12]===e[45].id?"active":"")+" "+e[5]+" svelte-1380f86")&&r(t,"class",i),f[0]&512&&m!==(m=e[45].name)&&r(t,"aria-label",m),f[0]&4608&&_!==(_=e[12]===e[45].id)&&r(t,"aria-selected",_)},d(h){h&&p(t),T=!1,Le(H)}}}function At(l){let e,t,s,a,n,u,i,m=[],_=new Map,T,H,g,h,f,S;function E(c,v){return c[12]?It:Ht}let O=E(l),b=O(l),N=tt(l[9]);const K=c=>c[45].id;for(let c=0;c<N.length;c+=1){let v=st(l,N,c),C=K(v);_.set(C,m[c]=nt(C,v))}const A=l[30].actions,V=ct(A,l,l[29],lt);return{c(){e=w("div"),t=w("div"),s=w("input"),n=F(),b.c(),u=F(),i=w("div");for(let c=0;c<m.length;c+=1)m[c].c();T=F(),V&&V.c(),this.h()},l(c){e=y(c,"DIV",{class:!0,id:!0});var v=D(e);t=y(v,"DIV",{class:!0});var C=D(t);s=y(C,"INPUT",{type:!0,placeholder:!0,class:!0,role:!0,name:!0,"aria-controls":!0,"aria-expanded":!0,"aria-activedescendant":!0,"aria-label":!0,"aria-autocomplete":!0}),n=Y(C),b.l(C),C.forEach(p),u=Y(v),i=y(v,"DIV",{class:!0,tabindex:!0,"aria-label":!0,role:!0});var z=D(i);for(let ne=0;ne<m.length;ne+=1)m[ne].l(z);T=Y(z),V&&V.l(z),z.forEach(p),v.forEach(p),this.h()},h(){r(s,"type","text"),r(s,"placeholder",l[0]),r(s,"class",a=se(l[3])+" svelte-1380f86"),r(s,"role","combobox"),r(s,"name","combobox-input"),r(s,"aria-controls",".options"),r(s,"aria-expanded",l[6]),r(s,"aria-activedescendant",l[14]),r(s,"aria-label",l[0]),r(s,"aria-autocomplete","list"),r(t,"class","search-box svelte-1380f86"),r(i,"class",H="options "+(l[6]?"open":"closed")+" "+l[4]+" svelte-1380f86"),r(i,"tabindex","-1"),r(i,"aria-label","options-container"),r(i,"role","listbox"),r(e,"class",g="select-wrapper "+l[2]+" svelte-1380f86"),r(e,"id",l[1])},m(c,v){$(c,e,v),d(e,t),d(t,s),Qe(s,l[10]),l[35](s),d(t,n),b.m(t,null),d(e,u),d(e,i);for(let C=0;C<m.length;C+=1)m[C]&&m[C].m(i,null);d(i,T),V&&V.m(i,null),l[41](i),h=!0,f||(S=[Me(l[15].call(null,s,{mouseHandler:l[18],keyHandler:l[19]})),Z(s,"focus",l[31]),Z(s,"keyup",l[32]),Z(s,"keydown",l[33]),Z(s,"input",l[34]),Me(l[17].call(null,i,l[22])),Z(i,"focusin",l[42]),Me(l[16].call(null,e,l[20]))],f=!0)},p(c,v){(!h||v[0]&1)&&r(s,"placeholder",c[0]),(!h||v[0]&8&&a!==(a=se(c[3])+" svelte-1380f86"))&&r(s,"class",a),(!h||v[0]&64)&&r(s,"aria-expanded",c[6]),(!h||v[0]&16384)&&r(s,"aria-activedescendant",c[14]),(!h||v[0]&1)&&r(s,"aria-label",c[0]),v[0]&1024&&s.value!==c[10]&&Qe(s,c[10]),O===(O=E(c))&&b?b.p(c,v):(b.d(1),b=O(c),b&&(b.c(),b.m(t,null))),v[0]&50336354&&(N=tt(c[9]),m=Tt(m,v,K,1,c,N,_,i,Ot,nt,T,st)),V&&V.p&&(!h||v[0]&536870912)&&ut(V,A,c,c[29],h?ft(A,c[29],v,Dt):dt(c[29]),lt),(!h||v[0]&80&&H!==(H="options "+(c[6]?"open":"closed")+" "+c[4]+" svelte-1380f86"))&&r(i,"class",H),(!h||v[0]&4&&g!==(g="select-wrapper "+c[2]+" svelte-1380f86"))&&r(e,"class",g),(!h||v[0]&2)&&r(e,"id",c[1])},i(c){h||(j(V,c),h=!0)},o(c){G(V,c),h=!1},d(c){c&&p(e),l[35](null),b.d();for(let v=0;v<m.length;v+=1)m[v].d();V&&V.d(c),l[41](null),f=!1,Le(S)}}}function Vt(l,e,t){let{$$slots:s={},$$scope:a}=e,{placeholder:n="Select an option"}=e,{options:u}=e,{defaultSelected:i=null}=e,{id:m}=e,{wrapperClass:_=""}=e,{inputClass:T=""}=e,{optionsContainerClass:H=""}=e,{optionsClass:g=""}=e;const h=mt();let f=!1,S,E,O=u,b=i?i.name:"",N,K,A,V;ht(()=>{if(i)if(u.includes(i))t(12,K=i.id),t(13,A=i);else throw new Error("defaultSelected must be present in the options.")});const c=(o,I)=>{const k=ae=>o&&o.contains(ae.target)&&ae.target!==S&&!ae.defaultPrevented&&I.mouseHandler(),L=ae=>o&&ae.key==="Escape"&&!ae.defaultPrevented&&I.keyHandler();return document.addEventListener("click",k,!0),document.addEventListener("keydown",L,!0),{destroy(){document.removeEventListener("click",k,!0),document.removeEventListener("keydown",L,!0)}}},v=(o,I)=>{const k=L=>o&&!o.contains(L.target)&&!L.defaultPrevented&&I();return document.addEventListener("click",k,!0),{destroy(){document.removeEventListener("click",k,!0)}}},C=(o,I)=>{const k=L=>o&&I(L);return document.addEventListener("keydown",k,!0),{destroy(){document.removeEventListener("keydown",k,!0)}}},z=()=>{t(6,f=!0),t(10,b=""),t(9,O=u)},ne=()=>{t(6,f=!1)},q=()=>{t(6,f=!1),A?t(10,b=A.name):t(10,b="")},ee=o=>{if(!(o.key=="Tab"||o.key==="ArrowDown")){if(o.key==="Escape"){t(6,f=!1);return}t(6,f=!f),f?N.focus():N.blur()}},Ae=o=>{const I=E.querySelectorAll("button");let k=I[0],L=I[I.length-1];if(f)if(o.key==="Tab")o.shiftKey?document.activeElement===k&&(L.focus(),o.preventDefault()):document.activeElement===L&&(k.focus(),o.preventDefault());else return},ke=(o,I)=>{o.key==="Escape"||o.key==="Tab"||o.key==="ArrowDown"||o.key==="ArrowUp"||(t(9,O=u),t(9,O=O.filter(k=>k.name.toLowerCase().includes(I.toLowerCase()))))},re=o=>{const I=E.querySelectorAll("button");let k=I[0],L=I[I.length-1];if(ke(o,b),o.key==="ArrowDown"){k==null||k.focus(),o.preventDefault();return}if(o.key==="Home"){k==null||k.focus(),o.preventDefault();return}if(o.key==="End"){L==null||L.focus(),o.preventDefault();return}},ie=o=>{const I=E.querySelectorAll("button"),k=I[0],L=I[I.length-1];if(o.key==="ArrowDown"&&(o.target.nextElementSibling?(o.target.nextElementSibling.focus(),o.preventDefault()):(k.focus(),o.preventDefault())),o.key==="ArrowUp"&&(o.target.previousElementSibling?(o.target.previousElementSibling.focus(),o.preventDefault()):(L.focus(),o.preventDefault())),o.key==="Home"){k==null||k.focus(),o.preventDefault();return}if(o.key==="End"){L==null||L.focus(),o.preventDefault();return}},W=o=>{t(12,K=o.id),t(13,A=o),t(10,b=o.name),t(6,f=!1),h("select",o)},x=o=>{t(12,K=null),t(13,A=null),t(10,b=""),h("clear",o)},we=()=>{t(6,f=!0),t(10,b="")},ce=o=>{re(o)},ye=o=>{o.key==="Tab"&&q()};function te(){b=this.value,t(10,b)}function Ce(o){Ue[o?"unshift":"push"](()=>{N=o,t(11,N)})}const ue=()=>{x(A)};function Ee(o){Ue[o?"unshift":"push"](()=>{S=o,t(7,S)})}const le=o=>{ee(o)},Se=o=>{W(o)},de=o=>{ie(o)};function Oe(o){Ue[o?"unshift":"push"](()=>{E=o,t(8,E)})}const J=()=>{var o;t(14,V=(o=document.activeElement)==null?void 0:o.id)};return l.$$set=o=>{"placeholder"in o&&t(0,n=o.placeholder),"options"in o&&t(27,u=o.options),"defaultSelected"in o&&t(28,i=o.defaultSelected),"id"in o&&t(1,m=o.id),"wrapperClass"in o&&t(2,_=o.wrapperClass),"inputClass"in o&&t(3,T=o.inputClass),"optionsContainerClass"in o&&t(4,H=o.optionsContainerClass),"optionsClass"in o&&t(5,g=o.optionsClass),"$$scope"in o&&t(29,a=o.$$scope)},[n,m,_,T,H,g,f,S,E,O,b,N,K,A,V,c,v,C,z,ne,q,ee,Ae,re,ie,W,x,u,i,a,s,we,ce,ye,te,Ce,ue,Ee,le,Se,de,Oe,J]}class Lt extends He{constructor(e){super(),Ie(this,e,Vt,At,De,{placeholder:0,options:27,defaultSelected:28,id:1,wrapperClass:2,inputClass:3,optionsContainerClass:4,optionsClass:5},null,[-1,-1])}}const Nt=l=>({highlighted:l&8}),at=l=>({highlighted:l[3]});function Bt(l){let e,t;const s=[l[4],{languageName:l[0].name},{langtag:l[2]},{highlighted:l[3]},{code:l[1]}];let a={};for(let n=0;n<s.length;n+=1)a=qe(a,s[n]);return e=new kt({props:a}),{c(){pe(e.$$.fragment)},l(n){ge(e.$$.fragment,n)},m(n,u){_e(e,n,u),t=!0},p(n,u){const i=u&31?wt(s,[u&16&&yt(n[4]),u&1&&{languageName:n[0].name},u&4&&{langtag:n[2]},u&8&&{highlighted:n[3]},u&2&&{code:n[1]}]):{};e.$set(i)},i(n){t||(j(e.$$.fragment,n),t=!0)},o(n){G(e.$$.fragment,n),t=!1},d(n){be(e,n)}}}function Mt(l){let e;const t=l[6].default,s=ct(t,l,l[5],at),a=s||Bt(l);return{c(){a&&a.c()},l(n){a&&a.l(n)},m(n,u){a&&a.m(n,u),e=!0},p(n,[u]){s?s.p&&(!e||u&40)&&ut(s,t,n,n[5],e?ft(t,n[5],u,Nt):dt(n[5]),at):a&&a.p&&(!e||u&31)&&a.p(n,e?u:-1)},i(n){e||(j(a,n),e=!0)},o(n){G(a,n),e=!1},d(n){a&&a.d(n)}}}function Ut(l,e,t){const s=["language","code","langtag"];let a=xe(e,s),{$$slots:n={},$$scope:u}=e,{language:i}=e,{code:m}=e,{langtag:_=!1}=e;const T=mt();let H="";return pt(()=>{H&&T("highlight",{highlighted:H})}),l.$$set=g=>{e=qe(qe({},e),gt(g)),t(4,a=xe(e,s)),"language"in g&&t(0,i=g.language),"code"in g&&t(1,m=g.code),"langtag"in g&&t(2,_=g.langtag),"$$scope"in g&&t(5,u=g.$$scope)},l.$$.update=()=>{l.$$.dirty&3&&(et.registerLanguage(i.name,i.register),t(3,H=et.highlight(m,{language:i.name}).value))},[i,m,_,H,a,u,n]}class Pt extends He{constructor(e){super(),Ie(this,e,Ut,Mt,De,{language:0,code:1,langtag:2})}}const Ft=Pt;function Yt(l){let e,t,s,a,n,u;return n=new Ct({props:{code:l[0]}}),{c(){e=new _t(!1),t=$e(),s=F(),a=w("div"),pe(n.$$.fragment),this.h()},l(i){const m=vt("svelte-g40mhf",document.head);e=bt(m,!1),t=$e(),m.forEach(p),s=Y(i),a=y(i,"DIV",{class:!0});var _=D(a);ge(n.$$.fragment,_),_.forEach(p),this.h()},h(){e.a=t,r(a,"class","code svelte-eo793n")},m(i,m){e.m(Et,document.head),d(document.head,t),$(i,s,m),$(i,a,m),_e(n,a,null),u=!0},p:Je,i(i){u||(j(n.$$.fragment,i),u=!0)},o(i){G(n.$$.fragment,i),u=!1},d(i){i&&(e.d(),p(s),p(a)),p(t),be(n)}}}function jt(l){return[`<--- file: src/routes/your-route/+page.svelte --->
<script lang="ts">
    import Combobox from 'svelte-combobox/ComboBox.svelte';
    let options = [
        { id: 1, name: "Option 1", value: "1" },
        { id: 2, name: "Option 2", value: "2" },
        { id: 3, name: "Option 3", value: "3" },
        { id: 4, name: "Option 4", value: "4" },
        { id: 5, name: "Option 5", value: "5" },
        { id: 6, name: "Option 6", value: "6" },
        { id: 7, name: "Option 7", value: "7" },
        { id: 8, name: "Option 8", value: "8" },
        { id: 9, name: "Option 9", value: "9" },
        { id: 10, name: "Option 10", value: "10" }
    ];
    let selectedOtion:string;
    let selectedValue:{id:number, name:string, valye:any} | null;
<\/script>
<div class="container">
    <ComboBox 
        placeholder="Select an option" 
        options={options} 
        wrapperClass={"svelte-box"} 
        id={"combobox"} 
        defaultSelected={selectedValue}
        on:select={(e)=>{selectedOption=e.detail.name; selectedValue=e.detail}}
        on:clear={()=>{selectedOption="Nothong Yet !"; selectedValue=null}}
    />
    <div>You Selected : {selectedOption?selectedOption:'Nothong Yet !'}</div>
    <div>The value of selection is : {selectedValue?JSON.stringify(selectedValue):"null"}</div>
</div>
`]}class qt extends He{constructor(e){super(),Ie(this,e,jt,Yt,De,{})}}const Jt={name:"css",register:St},Kt=Jt;function zt(l){let e,t,s;return t=new Ft({props:{language:Kt,code:l[0]}}),{c(){e=w("div"),pe(t.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var n=D(e);ge(t.$$.fragment,n),n.forEach(p),this.h()},h(){r(e,"class","code svelte-eo793n")},m(a,n){$(a,e,n),_e(t,e,null),s=!0},p:Je,i(a){s||(j(t.$$.fragment,a),s=!0)},o(a){G(t.$$.fragment,a),s=!1},d(a){a&&p(e),be(t)}}}function Rt(l){return[`.svelte-box {
    --search-bg-color : var(--bg-color) !important;
    --search-text-color: var(--h-color) !important;
    --search-border-color: var(--p-color) !important;
    --search-hover-outline-color : var(--primary-color) !important;
    --search-active-outline-color : var(--primary-color) !important;
    --options-container-background-color: var(--bg-color) !important;
    --options-background-color: var(--bg-color) !important;
    --options-bx-shadow-color: rgba(0, 0, 0, 0.3) !important;
    --options-text-color: var(--p-color) !important;
    --options-highlight-color: var(--primary-color) !important;
    --options-active-color: green !important;
    --chevron-color: var(--p-color) !important;
}
`]}class Gt extends He{constructor(e){super(),Ie(this,e,Rt,zt,De,{})}}function ot(l){let e,t,s,a,n,u=(l[2]?l[2]:"Nothong Yet !")+"",i,m,_,T,H,g=(l[3]?JSON.stringify(l[3]):"null")+"",h,f;return t=new Lt({props:{placeholder:"Select an option",options:l[4],wrapperClass:"svelte-box",id:"combobox",defaultSelected:l[3]}}),t.$on("select",l[9]),t.$on("clear",l[10]),{c(){e=w("div"),pe(t.$$.fragment),s=F(),a=w("div"),n=Q("You Selected : "),i=Q(u),m=F(),_=w("div"),T=Q("The value of selection is : "),H=w("br"),h=Q(g),this.h()},l(S){e=y(S,"DIV",{class:!0});var E=D(e);ge(t.$$.fragment,E),s=Y(E),a=y(E,"DIV",{class:!0});var O=D(a);n=X(O,"You Selected : "),i=X(O,u),O.forEach(p),m=Y(E),_=y(E,"DIV",{class:!0});var b=D(_);T=X(b,"The value of selection is : "),H=y(b,"BR",{}),h=X(b,g),b.forEach(p),E.forEach(p),this.h()},h(){r(a,"class","selected svelte-m7dvgk"),r(_,"class","value svelte-m7dvgk"),r(e,"class","combobox svelte-m7dvgk")},m(S,E){$(S,e,E),_e(t,e,null),d(e,s),d(e,a),d(a,n),d(a,i),d(e,m),d(e,_),d(_,T),d(_,H),d(_,h),f=!0},p(S,E){const O={};E&8&&(O.defaultSelected=S[3]),t.$set(O),(!f||E&4)&&u!==(u=(S[2]?S[2]:"Nothong Yet !")+"")&&Ye(i,u),(!f||E&8)&&g!==(g=(S[3]?JSON.stringify(S[3]):"null")+"")&&Ye(h,g)},i(S){f||(j(t.$$.fragment,S),f=!0)},o(S){G(t.$$.fragment,S),f=!1},d(S){S&&p(e),be(t)}}}function rt(l){let e,t,s;return t=new qt({}),{c(){e=w("div"),pe(t.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var n=D(e);ge(t.$$.fragment,n),n.forEach(p),this.h()},h(){r(e,"class","markup svelte-m7dvgk")},m(a,n){$(a,e,n),_e(t,e,null),s=!0},i(a){s||(j(t.$$.fragment,a),s=!0)},o(a){G(t.$$.fragment,a),s=!1},d(a){a&&p(e),be(t)}}}function it(l){let e,t,s;return t=new Gt({}),{c(){e=w("div"),pe(t.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var n=D(e);ge(t.$$.fragment,n),n.forEach(p),this.h()},h(){r(e,"class","css svelte-m7dvgk")},m(a,n){$(a,e,n),_e(t,e,null),s=!0},i(a){s||(j(t.$$.fragment,a),s=!0)},o(a){G(t.$$.fragment,a),s=!1},d(a){a&&p(e),be(t)}}}function Wt(l){let e,t,s,a,n,u,i="<",m,_,T,H="/>",g,h,f,S="A simple combobox to be used in your Svelte / Svelte-kit projects.",E,O,b,N,K,A,V='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="svelte-m7dvgk"><rect width="256" height="256" fill="none"></rect><rect x="40" y="72" width="144" height="144" opacity="0.2"></rect><polyline points="216 184 216 40 72 40" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="40" y="72" width="144" height="144" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>',c,v,C,z='<h2 style="text-align: center;" class="svelte-m7dvgk">ComboBox Features</h2> <hr style="width: 50%;"/> <ul class="svelte-m7dvgk"><li class="svelte-m7dvgk"><p class="svelte-m7dvgk">Easy and Searchable dropdown user input.</p></li> <li class="svelte-m7dvgk"><p class="svelte-m7dvgk">Simple props based data interface for options.</p></li> <li class="svelte-m7dvgk"><p class="svelte-m7dvgk">Props based classes for styling via css variables.</p></li> <li class="svelte-m7dvgk"><p class="svelte-m7dvgk">Fully complaint with WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank" class="svelte-m7dvgk">Accessibility Guidelines</a>.</p></li></ul>',ne,q,ee,Ae="Try It Out !",ke,re,ie,W,x,we,ce,ye,te,Ce,ue,Ee,le,Se,de,Oe,J,o,I,k,L,ae,B=l[1]==="component"&&ot(l),M=l[1]==="markup"&&rt(),U=l[1]==="css"&&it();return{c(){e=w("meta"),t=F(),s=w("div"),a=w("div"),n=w("h1"),u=w("span"),m=Q(i),_=Q(" ComboBox "),T=w("span"),g=Q(H),h=F(),f=w("p"),f.textContent=S,E=F(),O=w("p"),b=Q("Install by running: "),N=w("code"),K=Q(`npm i svelte-combobox 
                `),A=w("button"),A.innerHTML=V,v=F(),C=w("div"),C.innerHTML=z,ne=F(),q=w("div"),ee=w("h2"),ee.textContent=Ae,ke=F(),re=w("hr"),ie=F(),W=w("div"),x=w("button"),we=Q("Component"),ye=F(),te=w("button"),Ce=Q("Markup"),Ee=F(),le=w("button"),Se=Q("CSS"),Oe=F(),J=w("div"),B&&B.c(),o=F(),M&&M.c(),I=F(),U&&U.c(),this.h()},l(P){const R=vt("svelte-bmsiel",document.head);e=y(R,"META",{name:!0,content:!0}),R.forEach(p),t=Y(P),s=y(P,"DIV",{class:!0});var fe=D(s);a=y(fe,"DIV",{class:!0});var me=D(a);n=y(me,"H1",{class:!0});var Ve=D(n);u=y(Ve,"SPAN",{class:!0});var Ke=D(u);m=X(Ke,i),Ke.forEach(p),_=X(Ve," ComboBox "),T=y(Ve,"SPAN",{class:!0});var ze=D(T);g=X(ze,H),ze.forEach(p),Ve.forEach(p),h=Y(me),f=y(me,"P",{class:!0,"data-svelte-h":!0}),Te(f)!=="svelte-1q7kqo9"&&(f.textContent=S),E=Y(me),O=y(me,"P",{class:!0});var Ne=D(O);b=X(Ne,"Install by running: "),N=y(Ne,"CODE",{class:!0});var Be=D(N);K=X(Be,`npm i svelte-combobox 
                `),A=y(Be,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),Te(A)!=="svelte-1pvikz7"&&(A.innerHTML=V),Be.forEach(p),Ne.forEach(p),me.forEach(p),v=Y(fe),C=y(fe,"DIV",{class:!0,"data-svelte-h":!0}),Te(C)!=="svelte-fcxkd4"&&(C.innerHTML=z),ne=Y(fe),q=y(fe,"DIV",{class:!0});var oe=D(q);ee=y(oe,"H2",{style:!0,class:!0,"data-svelte-h":!0}),Te(ee)!=="svelte-a3j93a"&&(ee.textContent=Ae),ke=Y(oe),re=y(oe,"HR",{style:!0}),ie=Y(oe),W=y(oe,"DIV",{class:!0});var ve=D(W);x=y(ve,"BUTTON",{class:!0,"aria-label":!0});var Re=D(x);we=X(Re,"Component"),Re.forEach(p),ye=Y(ve),te=y(ve,"BUTTON",{class:!0,"aria-label":!0});var Ge=D(te);Ce=X(Ge,"Markup"),Ge.forEach(p),Ee=Y(ve),le=y(ve,"BUTTON",{class:!0,"aria-label":!0});var We=D(le);Se=X(We,"CSS"),We.forEach(p),ve.forEach(p),Oe=Y(oe),J=y(oe,"DIV",{class:!0});var he=D(J);B&&B.l(he),o=Y(he),M&&M.l(he),I=Y(he),U&&U.l(he),he.forEach(p),oe.forEach(p),fe.forEach(p),this.h()},h(){document.title="ComboBox",r(e,"name","description"),r(e,"content","A simple combobox for svelte and sveltekit"),r(u,"class","svelte-m7dvgk"),r(T,"class","svelte-m7dvgk"),r(n,"class","svelte-m7dvgk"),r(f,"class","svelte-m7dvgk"),r(A,"class","copy svelte-m7dvgk"),r(A,"aria-label","copy-install-command"),r(N,"class","svelte-m7dvgk"),r(O,"class",c=se(l[0]?"copied":"")+" svelte-m7dvgk"),r(a,"class","hero svelte-m7dvgk"),r(C,"class","info svelte-m7dvgk"),je(ee,"text-align","center"),r(ee,"class","svelte-m7dvgk"),je(re,"width","50%"),r(x,"class",ce=se(l[1]==="component"?"active":"")+" svelte-m7dvgk"),r(x,"aria-label","select-component-tab"),r(te,"class",ue=se(l[1]==="markup"?"active":"")+" svelte-m7dvgk"),r(te,"aria-label","select-markup-tab"),r(le,"class",de=se(l[1]==="css"?"active":"")+" svelte-m7dvgk"),r(le,"aria-label","select-css-tab"),r(W,"class","tabs svelte-m7dvgk"),r(J,"class","tab-content svelte-m7dvgk"),r(q,"class","example svelte-m7dvgk"),r(s,"class","main svelte-m7dvgk")},m(P,R){d(document.head,e),$(P,t,R),$(P,s,R),d(s,a),d(a,n),d(n,u),d(u,m),d(n,_),d(n,T),d(T,g),d(a,h),d(a,f),d(a,E),d(a,O),d(O,b),d(O,N),d(N,K),d(N,A),d(s,v),d(s,C),d(s,ne),d(s,q),d(q,ee),d(q,ke),d(q,re),d(q,ie),d(q,W),d(W,x),d(x,we),d(W,ye),d(W,te),d(te,Ce),d(W,Ee),d(W,le),d(le,Se),d(q,Oe),d(q,J),B&&B.m(J,null),d(J,o),M&&M.m(J,null),d(J,I),U&&U.m(J,null),k=!0,L||(ae=[Z(A,"click",l[5]),Z(x,"click",l[6]),Z(te,"click",l[7]),Z(le,"click",l[8])],L=!0)},p(P,[R]){(!k||R&1&&c!==(c=se(P[0]?"copied":"")+" svelte-m7dvgk"))&&r(O,"class",c),(!k||R&2&&ce!==(ce=se(P[1]==="component"?"active":"")+" svelte-m7dvgk"))&&r(x,"class",ce),(!k||R&2&&ue!==(ue=se(P[1]==="markup"?"active":"")+" svelte-m7dvgk"))&&r(te,"class",ue),(!k||R&2&&de!==(de=se(P[1]==="css"?"active":"")+" svelte-m7dvgk"))&&r(le,"class",de),P[1]==="component"?B?(B.p(P,R),R&2&&j(B,1)):(B=ot(P),B.c(),j(B,1),B.m(J,o)):B&&(Fe(),G(B,1,1,()=>{B=null}),Pe()),P[1]==="markup"?M?R&2&&j(M,1):(M=rt(),M.c(),j(M,1),M.m(J,I)):M&&(Fe(),G(M,1,1,()=>{M=null}),Pe()),P[1]==="css"?U?R&2&&j(U,1):(U=it(),U.c(),j(U,1),U.m(J,null)):U&&(Fe(),G(U,1,1,()=>{U=null}),Pe())},i(P){k||(j(B),j(M),j(U),k=!0)},o(P){G(B),G(M),G(U),k=!1},d(P){P&&(p(t),p(s)),p(e),B&&B.d(),M&&M.d(),U&&U.d(),L=!1,Le(ae)}}}function Qt(l,e,t){let s=!1,a=[{id:1,name:"Option 1",value:"1"},{id:2,name:"Option 2",value:"2"},{id:3,name:"Option 3",value:"3"},{id:4,name:"Option 4",value:"4"},{id:5,name:"Option 5",value:"5"},{id:6,name:"Option 6",value:"6"},{id:7,name:"Option 7",value:"7"},{id:8,name:"Option 8",value:"8"},{id:9,name:"Option 9",value:"9"},{id:10,name:"Option 10",value:"10"}],n="component",u,i;return[s,n,u,i,a,()=>{navigator.clipboard.writeText("npm install svelte-box"),t(0,s=!0),setTimeout(()=>{t(0,s=!1)},2e3)},()=>t(1,n="component"),()=>{t(1,n="markup")},()=>{t(1,n="css")},f=>{t(2,u=f.detail.name),t(3,i=f.detail)},()=>{t(2,u="Nothong Yet !"),t(3,i=null)}]}class $t extends He{constructor(e){super(),Ie(this,e,Qt,Wt,De,{})}}export{$t as component};
