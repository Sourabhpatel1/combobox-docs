import{s as bt,f as a,a as o,l as mt,N as _t,g as s,d as h,c as i,h as q,r as d,m as Tt,j as l,u as e,i as ft,w as tt,o as gt}from"../chunks/scheduler.60a61370.js";import{g as Ct}from"../chunks/globals.7f7f1b26.js";import{S as At,i as Mt}from"../chunks/index.145bfebc.js";const{document:et}=Ct;function Dt(lt){let v,_,t,u,k="<h1>Props</h1>",S,c,x,I='<tr class="svelte-15x5hay"><th class="svelte-15x5hay">Prop</th> <th class="svelte-15x5hay">Type</th> <th class="svelte-15x5hay">Description</th></tr>',j,n,g,at='<td data-cell="Prop" class="svelte-15x5hay">placeholder</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">Placeholder to be displayed in the search input.</td>',N,p,m,st="options",O,C,nt='{id : number, "value" : any, name: string}[]',Y,z,T,rt=`An array of options to be displayed when listbox is open.
                    <ul class="svelte-15x5hay"><li>id is for keying the options in each loop.</li> <li>value is the items value that you want the user to select and dispatch.</li> <li>name is the name displayed in the listbox inside each options.</li></ul>`,F,y,f,ot="defaultSelected",J,A,it='{id : number, "value" : any, name: string} | null',K,Q,b,dt="option that is selected by default. The option must be present in the options prop.",U,M,ct='<td data-cell="Prop" class="svelte-15x5hay">id</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">An id that is to be assigned to the container containing the search input and the options listbox.</td>',W,D,ht='<td data-cell="Prop" class="svelte-15x5hay">wrapperClass</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">Class to be assigned to the container containing the search input and the options listbox.</td>',X,L,vt='<td data-cell="Prop" class="svelte-15x5hay">inputClass</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">Class to be assigned to the input element inside the container.</td>',Z,H,ut='<td data-cell="Prop" class="svelte-15x5hay">optionsContainerClass</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">Class to be assigned to the div containing the options lits, i.e. the listbox container.</td>',G,P,pt='<td data-cell="Prop" class="svelte-15x5hay">optionsClass</td> <td data-cell="Type" class="svelte-15x5hay">string</td> <td data-cell="Description" class="svelte-15x5hay">Class to be assigned to the options inside the listbox, i.e. the individual buttons contining the option text.</td>';return{c(){v=a("meta"),_=o(),t=a("div"),u=a("div"),u.innerHTML=k,S=o(),c=a("table"),x=a("thead"),x.innerHTML=I,j=o(),n=a("tbody"),g=a("tr"),g.innerHTML=at,N=o(),p=a("tr"),m=a("td"),m.textContent=st,O=o(),C=a("td"),Y=mt(nt),z=o(),T=a("td"),T.innerHTML=rt,F=o(),y=a("tr"),f=a("td"),f.textContent=ot,J=o(),A=a("td"),K=mt(it),Q=o(),b=a("td"),b.textContent=dt,U=o(),M=a("tr"),M.innerHTML=ct,W=o(),D=a("tr"),D.innerHTML=ht,X=o(),L=a("tr"),L.innerHTML=vt,Z=o(),H=a("tr"),H.innerHTML=ut,G=o(),P=a("tr"),P.innerHTML=pt,this.h()},l(E){const B=_t("svelte-bmsiel",et.head);v=s(B,"META",{name:!0,content:!0}),B.forEach(h),_=i(E),t=s(E,"DIV",{class:!0});var V=q(t);u=s(V,"DIV",{class:!0,"data-svelte-h":!0}),d(u)!=="svelte-wy3nw0"&&(u.innerHTML=k),S=i(V),c=s(V,"TABLE",{class:!0});var $=q(c);x=s($,"THEAD",{"data-svelte-h":!0}),d(x)!=="svelte-km1n39"&&(x.innerHTML=I),j=i($),n=s($,"TBODY",{});var r=q(n);g=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(g)!=="svelte-3vw61o"&&(g.innerHTML=at),N=i(r),p=s(r,"TR",{class:!0});var w=q(p);m=s(w,"TD",{"data-cell":!0,class:!0,"data-svelte-h":!0}),d(m)!=="svelte-12o4ghd"&&(m.textContent=st),O=i(w),C=s(w,"TD",{"data-cell":!0,class:!0});var yt=q(C);Y=Tt(yt,nt),yt.forEach(h),z=i(w),T=s(w,"TD",{"data-cell":!0,class:!0,"data-svelte-h":!0}),d(T)!=="svelte-1xvfhu2"&&(T.innerHTML=rt),w.forEach(h),F=i(r),y=s(r,"TR",{class:!0});var R=q(y);f=s(R,"TD",{"data-cell":!0,class:!0,"data-svelte-h":!0}),d(f)!=="svelte-1q1w3mr"&&(f.textContent=ot),J=i(R),A=s(R,"TD",{"data-cell":!0,class:!0});var xt=q(A);K=Tt(xt,it),xt.forEach(h),Q=i(R),b=s(R,"TD",{"data-cell":!0,class:!0,"data-svelte-h":!0}),d(b)!=="svelte-qk1nix"&&(b.textContent=dt),R.forEach(h),U=i(r),M=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(M)!=="svelte-17yr65i"&&(M.innerHTML=ct),W=i(r),D=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(D)!=="svelte-1bipjmt"&&(D.innerHTML=ht),X=i(r),L=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(L)!=="svelte-xngghd"&&(L.innerHTML=vt),Z=i(r),H=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(H)!=="svelte-ly8a27"&&(H.innerHTML=ut),G=i(r),P=s(r,"TR",{class:!0,"data-svelte-h":!0}),d(P)!=="svelte-nhoej0"&&(P.innerHTML=pt),r.forEach(h),$.forEach(h),V.forEach(h),this.h()},h(){et.title="ComboBox",l(v,"name","description"),l(v,"content","A simple combobox for svelte and sveltekit"),l(u,"class","hero svelte-15x5hay"),l(g,"class","svelte-15x5hay"),l(m,"data-cell","Prop"),l(m,"class","svelte-15x5hay"),l(C,"data-cell","Type"),l(C,"class","svelte-15x5hay"),l(T,"data-cell","Description"),l(T,"class","svelte-15x5hay"),l(p,"class","svelte-15x5hay"),l(f,"data-cell","Prop"),l(f,"class","svelte-15x5hay"),l(A,"data-cell","Type"),l(A,"class","svelte-15x5hay"),l(b,"data-cell","Description"),l(b,"class","svelte-15x5hay"),l(y,"class","svelte-15x5hay"),l(M,"class","svelte-15x5hay"),l(D,"class","svelte-15x5hay"),l(L,"class","svelte-15x5hay"),l(H,"class","svelte-15x5hay"),l(P,"class","svelte-15x5hay"),l(c,"class","svelte-15x5hay"),l(t,"class","main svelte-15x5hay")},m(E,B){e(et.head,v),ft(E,_,B),ft(E,t,B),e(t,u),e(t,S),e(t,c),e(c,x),e(c,j),e(c,n),e(n,g),e(n,N),e(n,p),e(p,m),e(p,O),e(p,C),e(C,Y),e(p,z),e(p,T),e(n,F),e(n,y),e(y,f),e(y,J),e(y,A),e(A,K),e(y,Q),e(y,b),e(n,U),e(n,M),e(n,W),e(n,D),e(n,X),e(n,L),e(n,Z),e(n,H),e(n,G),e(n,P)},p:tt,i:tt,o:tt,d(E){E&&(h(_),h(t)),h(v)}}}function Lt(lt){return gt(()=>{function v(){try{for(var _=document.querySelectorAll("table"),t=0;t<_.length;t++)_[t].setAttribute("role","table");for(var u=document.querySelectorAll("caption"),t=0;t<u.length;t++)u[t].setAttribute("role","caption");for(var k=document.querySelectorAll("thead, tbody, tfoot"),t=0;t<k.length;t++)k[t].setAttribute("role","rowgroup");for(var S=document.querySelectorAll("tr"),t=0;t<S.length;t++)S[t].setAttribute("role","row");for(var c=document.querySelectorAll("td"),t=0;t<c.length;t++)c[t].setAttribute("role","cell");for(var x=document.querySelectorAll("th"),t=0;t<x.length;t++)x[t].setAttribute("role","columnheader");for(var I=document.querySelectorAll("th[scope=row]"),t=0;t<I.length;t++)I[t].setAttribute("role","rowheader")}catch(j){console.log("AddTableARIA(): "+j)}}v()}),[]}class qt extends At{constructor(v){super(),Mt(this,v,Lt,Dt,bt,{})}}export{qt as component};
