import{s as Te,z as kt,A as Ct,B as Ot,C as Et,D as dt,E as yt,b as Tt,F as Ke,G as $t,H as We,e as ve,a as C,f as d,I as Qe,J as Xe,d as u,c as O,g as v,h as p,j as c,u as o,i as P,w as _t,l as D,m as V,r as de,K as Z,k as fe,v as ye,x as St,n as vt}from"../chunks/scheduler.81c9387c.js";import{S as $e,i as Se,a as T,t as S,b as se,d as ae,m as oe,e as ne,c as Fe,g as Ge}from"../chunks/index.4cfe47e1.js";import{C as wt}from"../chunks/ComboBox.221a0232.js";import{H as ft,L as It,g as Nt,a as Dt,b as Vt,m as Ze,c as Bt}from"../chunks/monokai.8d0dcd32.js";const Mt=a=>({highlighted:a&8}),mt=a=>({highlighted:a[3]});function xt(a){let e,s;const i=[a[4],{languageName:a[0].name},{langtag:a[2]},{highlighted:a[3]},{code:a[1]}];let l={};for(let t=0;t<i.length;t+=1)l=Ke(l,i[t]);return e=new It({props:l}),{c(){se(e.$$.fragment)},l(t){ae(e.$$.fragment,t)},m(t,n){oe(e,t,n),s=!0},p(t,n){const r=n&31?Nt(i,[n&16&&Dt(t[4]),n&1&&{languageName:t[0].name},n&4&&{langtag:t[2]},n&8&&{highlighted:t[3]},n&2&&{code:t[1]}]):{};e.$set(r)},i(t){s||(T(e.$$.fragment,t),s=!0)},o(t){S(e.$$.fragment,t),s=!1},d(t){ne(e,t)}}}function At(a){let e;const s=a[6].default,i=kt(s,a,a[5],mt),l=i||xt(a);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,n){l&&l.m(t,n),e=!0},p(t,[n]){i?i.p&&(!e||n&40)&&Ct(i,s,t,t[5],e?Et(s,t[5],n,Mt):Ot(t[5]),mt):l&&l.p&&(!e||n&31)&&l.p(t,e?n:-1)},i(t){e||(T(l,t),e=!0)},o(t){S(l,t),e=!1},d(t){l&&l.d(t)}}}function Ht(a,e,s){const i=["language","code","langtag"];let l=dt(e,i),{$$slots:t={},$$scope:n}=e,{language:r}=e,{code:f}=e,{langtag:g=!1}=e;const M=yt();let w="";return Tt(()=>{w&&M("highlight",{highlighted:w})}),a.$$set=m=>{e=Ke(Ke({},e),$t(m)),s(4,l=dt(e,i)),"language"in m&&s(0,r=m.language),"code"in m&&s(1,f=m.code),"langtag"in m&&s(2,g=m.langtag),"$$scope"in m&&s(5,n=m.$$scope)},a.$$.update=()=>{a.$$.dirty&3&&(ft.registerLanguage(r.name,r.register),s(3,w=ft.highlight(f,{language:r.name}).value))},[r,f,g,w,l,n,t]}class Lt extends $e{constructor(e){super(),Se(this,e,Ht,At,Te,{language:0,code:1,langtag:2})}}const bt=Lt;function Ut(a){let e,s,i,l,t,n;return t=new Vt({props:{code:a[0]}}),{c(){e=new We(!1),s=ve(),i=C(),l=d("div"),se(t.$$.fragment),this.h()},l(r){const f=Qe("svelte-g40mhf",document.head);e=Xe(f,!1),s=ve(),f.forEach(u),i=O(r),l=v(r,"DIV",{class:!0});var g=p(l);ae(t.$$.fragment,g),g.forEach(u),this.h()},h(){e.a=s,c(l,"class","code svelte-eo793n")},m(r,f){e.m(Ze,document.head),o(document.head,s),P(r,i,f),P(r,l,f),oe(t,l,null),n=!0},p:_t,i(r){n||(T(t.$$.fragment,r),n=!0)},o(r){S(t.$$.fragment,r),n=!1},d(r){r&&(e.d(),u(i),u(l)),u(s),ne(t)}}}function Rt(a){return[`<--- file: src/routes/your-route/+page.svelte --->
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
`]}class jt extends $e{constructor(e){super(),Se(this,e,Rt,Ut,Te,{})}}const Pt={name:"css",register:Bt},Yt=Pt;function Jt(a){let e,s,i,l,t,n;return t=new bt({props:{language:Yt,code:a[0]}}),{c(){e=new We(!1),s=ve(),i=C(),l=d("div"),se(t.$$.fragment),this.h()},l(r){const f=Qe("svelte-g40mhf",document.head);e=Xe(f,!1),s=ve(),f.forEach(u),i=O(r),l=v(r,"DIV",{class:!0});var g=p(l);ae(t.$$.fragment,g),g.forEach(u),this.h()},h(){e.a=s,c(l,"class","code svelte-eo793n")},m(r,f){e.m(Ze,document.head),o(document.head,s),P(r,i,f),P(r,l,f),oe(t,l,null),n=!0},p:_t,i(r){n||(T(t.$$.fragment,r),n=!0)},o(r){S(t.$$.fragment,r),n=!1},d(r){r&&(e.d(),u(i),u(l)),u(s),ne(t)}}}function qt(a){return[`.svelte-box {
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
`]}class zt extends $e{constructor(e){super(),Se(this,e,qt,Jt,Te,{})}}function Ft(a){const e={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},s={match:/[{}[\],:]/,className:"punctuation",relevance:0},i=["true","false","null"],l={scope:"literal",beginKeywords:i.join(" ")};return{name:"JSON",keywords:{literal:i},contains:[e,s,a.QUOTE_STRING_MODE,l,a.C_NUMBER_MODE,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}const Gt={name:"json",register:Ft},Kt=Gt;function ht(a){let e,s,i,l,t,n=(a[2]?a[2]:"Nothong Yet !")+"",r,f,g,M,w,m=(a[3]?JSON.stringify(a[3]):"null")+"",Y,B;return s=new wt({props:{placeholder:"Select an option",options:a[4],wrapperClass:"svelte-box",id:"combobox",defaultSelected:a[3]}}),s.$on("select",a[10]),s.$on("clear",a[11]),{c(){e=d("div"),se(s.$$.fragment),i=C(),l=d("div"),t=D("You Selected : "),r=D(n),f=C(),g=d("div"),M=D("The value of selection is : "),w=d("br"),Y=D(m),this.h()},l(h){e=v(h,"DIV",{class:!0});var b=p(e);ae(s.$$.fragment,b),i=O(b),l=v(b,"DIV",{class:!0});var H=p(l);t=V(H,"You Selected : "),r=V(H,n),H.forEach(u),f=O(b),g=v(b,"DIV",{class:!0});var J=p(g);M=V(J,"The value of selection is : "),w=v(J,"BR",{}),Y=V(J,m),J.forEach(u),b.forEach(u),this.h()},h(){c(l,"class","selected svelte-1fv235u"),c(g,"class","value svelte-1fv235u"),c(e,"class","combobox svelte-1fv235u")},m(h,b){P(h,e,b),oe(s,e,null),o(e,i),o(e,l),o(l,t),o(l,r),o(e,f),o(e,g),o(g,M),o(g,w),o(g,Y),B=!0},p(h,b){const H={};b&8&&(H.defaultSelected=h[3]),s.$set(H),(!B||b&4)&&n!==(n=(h[2]?h[2]:"Nothong Yet !")+"")&&vt(r,n),(!B||b&8)&&m!==(m=(h[3]?JSON.stringify(h[3]):"null")+"")&&vt(Y,m)},i(h){B||(T(s.$$.fragment,h),B=!0)},o(h){S(s.$$.fragment,h),B=!1},d(h){h&&u(e),ne(s)}}}function pt(a){let e,s,i;return s=new jt({}),{c(){e=d("div"),se(s.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0});var t=p(e);ae(s.$$.fragment,t),t.forEach(u),this.h()},h(){c(e,"class","markup svelte-1fv235u")},m(l,t){P(l,e,t),oe(s,e,null),i=!0},i(l){i||(T(s.$$.fragment,l),i=!0)},o(l){S(s.$$.fragment,l),i=!1},d(l){l&&u(e),ne(s)}}}function gt(a){let e,s,i;return s=new zt({}),{c(){e=d("div"),se(s.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0});var t=p(e);ae(s.$$.fragment,t),t.forEach(u),this.h()},h(){c(e,"class","css svelte-1fv235u")},m(l,t){P(l,e,t),oe(s,e,null),i=!0},i(l){i||(T(s.$$.fragment,l),i=!0)},o(l){S(s.$$.fragment,l),i=!1},d(l){l&&u(e),ne(s)}}}function Wt(a){let e,s,i,l,t,n,r,f,g="<",M,w,m,Y="/>",B,h,b,H="A simple combobox to be used in your Svelte / Svelte-kit projects.",J,q,we,ee,Ie,L,et='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="svelte-1fv235u"><rect width="256" height="256" fill="none"></rect><rect x="40" y="72" width="144" height="144" opacity="0.2"></rect><polyline points="216 184 216 40 72 40" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline><rect x="40" y="72" width="144" height="144" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></rect></svg>',me,Ne,te,tt='<h2 style="text-align: center;" class="svelte-1fv235u">ComboBox Features</h2> <hr style="width: 50%;"/> <ul class="svelte-1fv235u"><li class="svelte-1fv235u"><p class="svelte-1fv235u">Easy and Searchable dropdown user input.</p></li> <li class="svelte-1fv235u"><p class="svelte-1fv235u">Simple props based data interface for options.</p></li> <li class="svelte-1fv235u"><p class="svelte-1fv235u">Props based classes for styling via css variables.</p></li> <li class="svelte-1fv235u"><p class="svelte-1fv235u">Fully complaint with WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank" class="svelte-1fv235u">Accessibility Guidelines</a>.</p></li></ul>',De,N,z,lt="Try It Out !",Ve,he,Be,x,U,Me,pe,xe,R,Ae,ge,He,j,Le,_e,Ue,I,be,ke,Re,A,F,st="Troubleshooting Typescript !!!",je,Ce,Pe,G,K,at=`If you are getting the following error "Cannot find module 'svelte-combobox/ComboBox.svelte' or its corresponding type declarations" after importing the component then you need to modify you tsconfig.json as follows :`,Ye,le,W,Je,ot,k=a[1]==="component"&&ht(a),E=a[1]==="markup"&&pt(),y=a[1]==="css"&&gt();return le=new bt({props:{language:Kt,code:a[5]}}),{c(){e=d("meta"),s=new We(!1),i=ve(),l=C(),t=d("div"),n=d("div"),r=d("h1"),f=d("span"),M=D(g),w=D(" ComboBox "),m=d("span"),B=D(Y),h=C(),b=d("p"),b.textContent=H,J=C(),q=d("p"),we=D("Install by running: "),ee=d("code"),Ie=D(`npm i svelte-combobox 
                `),L=d("button"),L.innerHTML=et,Ne=C(),te=d("div"),te.innerHTML=tt,De=C(),N=d("div"),z=d("h2"),z.textContent=lt,Ve=C(),he=d("hr"),Be=C(),x=d("div"),U=d("button"),Me=D("Component"),xe=C(),R=d("button"),Ae=D("Markup"),He=C(),j=d("button"),Le=D("CSS"),Ue=C(),I=d("div"),k&&k.c(),be=C(),E&&E.c(),ke=C(),y&&y.c(),Re=C(),A=d("div"),F=d("h2"),F.textContent=st,je=C(),Ce=d("hr"),Pe=C(),G=d("div"),K=d("p"),K.textContent=at,Ye=C(),se(le.$$.fragment),this.h()},l(_){const $=Qe("svelte-pfz9nk",document.head);e=v($,"META",{name:!0,content:!0}),s=Xe($,!1),i=ve(),$.forEach(u),l=O(_),t=v(_,"DIV",{class:!0});var Q=p(t);n=v(Q,"DIV",{class:!0});var re=p(n);r=v(re,"H1",{class:!0});var Oe=p(r);f=v(Oe,"SPAN",{class:!0});var nt=p(f);M=V(nt,g),nt.forEach(u),w=V(Oe," ComboBox "),m=v(Oe,"SPAN",{class:!0});var rt=p(m);B=V(rt,Y),rt.forEach(u),Oe.forEach(u),h=O(re),b=v(re,"P",{class:!0,"data-svelte-h":!0}),de(b)!=="svelte-1q7kqo9"&&(b.textContent=H),J=O(re),q=v(re,"P",{class:!0});var qe=p(q);we=V(qe,"Install by running: "),ee=v(qe,"CODE",{class:!0});var ze=p(ee);Ie=V(ze,`npm i svelte-combobox 
                `),L=v(ze,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),de(L)!=="svelte-1pvikz7"&&(L.innerHTML=et),ze.forEach(u),qe.forEach(u),re.forEach(u),Ne=O(Q),te=v(Q,"DIV",{class:!0,"data-svelte-h":!0}),de(te)!=="svelte-fcxkd4"&&(te.innerHTML=tt),De=O(Q),N=v(Q,"DIV",{class:!0});var X=p(N);z=v(X,"H2",{style:!0,class:!0,"data-svelte-h":!0}),de(z)!=="svelte-a3j93a"&&(z.textContent=lt),Ve=O(X),he=v(X,"HR",{style:!0}),Be=O(X),x=v(X,"DIV",{class:!0});var ie=p(x);U=v(ie,"BUTTON",{class:!0,"aria-label":!0});var it=p(U);Me=V(it,"Component"),it.forEach(u),xe=O(ie),R=v(ie,"BUTTON",{class:!0,"aria-label":!0});var ct=p(R);Ae=V(ct,"Markup"),ct.forEach(u),He=O(ie),j=v(ie,"BUTTON",{class:!0,"aria-label":!0});var ut=p(j);Le=V(ut,"CSS"),ut.forEach(u),ie.forEach(u),Ue=O(X),I=v(X,"DIV",{class:!0});var ce=p(I);k&&k.l(ce),be=O(ce),E&&E.l(ce),ke=O(ce),y&&y.l(ce),ce.forEach(u),X.forEach(u),Re=O(Q),A=v(Q,"DIV",{class:!0});var ue=p(A);F=v(ue,"H2",{style:!0,class:!0,"data-svelte-h":!0}),de(F)!=="svelte-acw80j"&&(F.textContent=st),je=O(ue),Ce=v(ue,"HR",{style:!0}),Pe=O(ue),G=v(ue,"DIV",{class:!0});var Ee=p(G);K=v(Ee,"P",{style:!0,class:!0,"data-svelte-h":!0}),de(K)!=="svelte-4gyi6l"&&(K.textContent=at),Ye=O(Ee),ae(le.$$.fragment,Ee),Ee.forEach(u),ue.forEach(u),Q.forEach(u),this.h()},h(){document.title="ComboBox",c(e,"name","description"),c(e,"content","A simple combobox for svelte and sveltekit"),s.a=i,c(f,"class","svelte-1fv235u"),c(m,"class","svelte-1fv235u"),c(r,"class","svelte-1fv235u"),c(b,"class","svelte-1fv235u"),c(L,"class","copy svelte-1fv235u"),c(L,"aria-label","copy-install-command"),c(ee,"class","svelte-1fv235u"),c(q,"class",me=Z(a[0]?"copied":"")+" svelte-1fv235u"),c(n,"class","hero svelte-1fv235u"),c(te,"class","info svelte-1fv235u"),fe(z,"text-align","center"),c(z,"class","svelte-1fv235u"),fe(he,"width","50%"),c(U,"class",pe=Z(a[1]==="component"?"active":"")+" svelte-1fv235u"),c(U,"aria-label","select-component-tab"),c(R,"class",ge=Z(a[1]==="markup"?"active":"")+" svelte-1fv235u"),c(R,"aria-label","select-markup-tab"),c(j,"class",_e=Z(a[1]==="css"?"active":"")+" svelte-1fv235u"),c(j,"aria-label","select-css-tab"),c(x,"class","tabs svelte-1fv235u"),c(I,"class","tab-content svelte-1fv235u"),c(N,"class","example svelte-1fv235u"),fe(F,"text-align","center"),c(F,"class","svelte-1fv235u"),fe(Ce,"width","50%"),fe(K,"margin-bottom","3rem"),c(K,"class","svelte-1fv235u"),c(G,"class","guide svelte-1fv235u"),c(A,"class","troubleshoot svelte-1fv235u"),c(t,"class","main svelte-1fv235u")},m(_,$){o(document.head,e),s.m(Ze,document.head),o(document.head,i),P(_,l,$),P(_,t,$),o(t,n),o(n,r),o(r,f),o(f,M),o(r,w),o(r,m),o(m,B),o(n,h),o(n,b),o(n,J),o(n,q),o(q,we),o(q,ee),o(ee,Ie),o(ee,L),o(t,Ne),o(t,te),o(t,De),o(t,N),o(N,z),o(N,Ve),o(N,he),o(N,Be),o(N,x),o(x,U),o(U,Me),o(x,xe),o(x,R),o(R,Ae),o(x,He),o(x,j),o(j,Le),o(N,Ue),o(N,I),k&&k.m(I,null),o(I,be),E&&E.m(I,null),o(I,ke),y&&y.m(I,null),o(t,Re),o(t,A),o(A,F),o(A,je),o(A,Ce),o(A,Pe),o(A,G),o(G,K),o(G,Ye),oe(le,G,null),W=!0,Je||(ot=[ye(L,"click",a[6]),ye(U,"click",a[7]),ye(R,"click",a[8]),ye(j,"click",a[9])],Je=!0)},p(_,[$]){(!W||$&1&&me!==(me=Z(_[0]?"copied":"")+" svelte-1fv235u"))&&c(q,"class",me),(!W||$&2&&pe!==(pe=Z(_[1]==="component"?"active":"")+" svelte-1fv235u"))&&c(U,"class",pe),(!W||$&2&&ge!==(ge=Z(_[1]==="markup"?"active":"")+" svelte-1fv235u"))&&c(R,"class",ge),(!W||$&2&&_e!==(_e=Z(_[1]==="css"?"active":"")+" svelte-1fv235u"))&&c(j,"class",_e),_[1]==="component"?k?(k.p(_,$),$&2&&T(k,1)):(k=ht(_),k.c(),T(k,1),k.m(I,be)):k&&(Ge(),S(k,1,1,()=>{k=null}),Fe()),_[1]==="markup"?E?$&2&&T(E,1):(E=pt(),E.c(),T(E,1),E.m(I,ke)):E&&(Ge(),S(E,1,1,()=>{E=null}),Fe()),_[1]==="css"?y?$&2&&T(y,1):(y=gt(),y.c(),T(y,1),y.m(I,null)):y&&(Ge(),S(y,1,1,()=>{y=null}),Fe())},i(_){W||(T(k),T(E),T(y),T(le.$$.fragment,_),W=!0)},o(_){S(k),S(E),S(y),S(le.$$.fragment,_),W=!1},d(_){_&&(s.d(),u(l),u(t)),u(e),u(i),k&&k.d(),E&&E.d(),y&&y.d(),ne(le),Je=!1,St(ot)}}}function Qt(a,e,s){let i=!1,l=[{id:1,name:"Option 1",value:"1"},{id:2,name:"Option 2",value:"2"},{id:3,name:"Option 3",value:"3"},{id:4,name:"Option 4",value:"4"},{id:5,name:"Option 5",value:"5"},{id:6,name:"Option 6",value:"6"},{id:7,name:"Option 7",value:"7"},{id:8,name:"Option 8",value:"8"},{id:9,name:"Option 9",value:"9"},{id:10,name:"Option 10",value:"10"}],t="component",n,r;return[i,t,n,r,l,`{
    compilerOptions : {
        //other options
        "moduleResolution" : "Bundler"  
    } 
}`,()=>{navigator.clipboard.writeText("npm install svelte-box"),s(0,i=!0),setTimeout(()=>{s(0,i=!1)},2e3)},()=>s(1,t="component"),()=>{s(1,t="markup")},()=>{s(1,t="css")},h=>{s(2,n=h.detail.name),s(3,r=h.detail)},()=>{s(2,n="Nothong Yet !"),s(3,r=null)}]}class ll extends $e{constructor(e){super(),Se(this,e,Qt,Wt,Te,{})}}export{ll as component};