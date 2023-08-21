import{s as W,M as X,e as R,f as n,a as $,N as Z,O as ee,g as l,d as i,c as O,h as q,r as k,j as a,u as e,i as Y,w as te}from"../chunks/scheduler.60a61370.js";import{S as ae,i as se,b as z,d as F,m as G,a as J,t as K,e as L}from"../chunks/index.145bfebc.js";import{b as Q,m as oe}from"../chunks/monokai.e541b38e.js";function ne(y){let d,f,_,I,c,s,r,P="Installation",D,g,m,H,v,U="Run the command in your sveltekit app's home directory.",S,o,p,j="Usage",A,x,u,B,h,M="A working example of the code is provided in the homepage.",V;return m=new Q({props:{code:y[0]}}),u=new Q({props:{code:y[1]}}),{c(){d=new X(!1),f=R(),_=n("meta"),I=$(),c=n("div"),s=n("div"),r=n("h3"),r.textContent=P,D=$(),g=n("div"),z(m.$$.fragment),H=$(),v=n("p"),v.textContent=U,S=$(),o=n("div"),p=n("h3"),p.textContent=j,A=$(),x=n("div"),z(u.$$.fragment),B=$(),h=n("p"),h.textContent=M,this.h()},l(t){const C=Z("svelte-1isofpq",document.head);d=ee(C,!1),f=R(),_=l(C,"META",{name:!0,content:!0}),C.forEach(i),I=O(t),c=l(t,"DIV",{class:!0});var E=q(c);s=l(E,"DIV",{class:!0});var w=q(s);r=l(w,"H3",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-1ae8k70"&&(r.textContent=P),D=O(w),g=l(w,"DIV",{class:!0});var N=q(g);F(m.$$.fragment,N),N.forEach(i),H=O(w),v=l(w,"P",{class:!0,"data-svelte-h":!0}),k(v)!=="svelte-15ud0p7"&&(v.textContent=U),w.forEach(i),S=O(E),o=l(E,"DIV",{class:!0});var b=q(o);p=l(b,"H3",{class:!0,"data-svelte-h":!0}),k(p)!=="svelte-1wx6xff"&&(p.textContent=j),A=O(b),x=l(b,"DIV",{class:!0});var T=q(x);F(u.$$.fragment,T),T.forEach(i),B=O(b),h=l(b,"P",{class:!0,"data-svelte-h":!0}),k(h)!=="svelte-javt8w"&&(h.textContent=M),b.forEach(i),E.forEach(i),this.h()},h(){d.a=f,document.title="ComboBox",a(_,"name","description"),a(_,"content","A simple combobox for svelte and sveltekit"),a(r,"class","svelte-1l6wwqv"),a(g,"class","code"),a(v,"class","svelte-1l6wwqv"),a(s,"class","section svelte-1l6wwqv"),a(p,"class","svelte-1l6wwqv"),a(x,"class","code"),a(h,"class","svelte-1l6wwqv"),a(o,"class","section svelte-1l6wwqv"),a(c,"class","main svelte-1l6wwqv")},m(t,C){d.m(oe,document.head),e(document.head,f),e(document.head,_),Y(t,I,C),Y(t,c,C),e(c,s),e(s,r),e(s,D),e(s,g),G(m,g,null),e(s,H),e(s,v),e(c,S),e(c,o),e(o,p),e(o,A),e(o,x),G(u,x,null),e(o,B),e(o,h),V=!0},p:te,i(t){V||(J(m.$$.fragment,t),J(u.$$.fragment,t),V=!0)},o(t){K(m.$$.fragment,t),K(u.$$.fragment,t),V=!1},d(t){t&&(d.d(),i(I),i(c)),i(f),i(_),L(m),L(u)}}}function le(y){return["npm i svelte-combobox",`<script>
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
    ]
<\/script>

<div class="customClass">
    <ComboBox 
        placeholder={"Select an option"}
        options={options} 
        id={"combobox"} 
        wrapperClass={"svelte-box"}
        inputClass={"svelte-box-input"}
        optionsContainerClass={"svelte-box-options-container"}
        optionsClass={"svelte-box-options"}
        defaultSelected={selectedValue}
        on:select="{(e)=>{selectedOption=e.detail.name; selectedValue=e.detail;}}"
        on:clear="{()=>{selectedOption="Nothong Yet !"; selectedValue=null}}"
    />
</div>`]}class re extends ae{constructor(d){super(),se(this,d,le,ne,W,{})}}export{re as component};
