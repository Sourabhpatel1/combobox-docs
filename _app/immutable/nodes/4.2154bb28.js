import{s as Q,M as W,e as R,a as C,f as n,N as X,O as Z,d as o,c as $,g as i,h as O,r as E,j as c,u as e,i as T,w as ee}from"../chunks/scheduler.60a61370.js";import{S as te,i as ae,b as Y,d as z,m as F,a as G,t as J,e as K}from"../chunks/index.145bfebc.js";import{b as L,m as se}from"../chunks/monokai.e541b38e.js";function le(y){let d,f,q,l,a,r,U="Installation",D,_,v,H,m,j="Run the command in your sveltekit app's home directory.",S,s,p,B="Usage",k,g,u,P,h,N="A working example of the code is provided in the homepage.",I;return v=new L({props:{code:y[0]}}),u=new L({props:{code:y[1]}}),{c(){d=new W(!1),f=R(),q=C(),l=n("div"),a=n("div"),r=n("h3"),r.textContent=U,D=C(),_=n("div"),Y(v.$$.fragment),H=C(),m=n("p"),m.textContent=j,S=C(),s=n("div"),p=n("h3"),p.textContent=B,k=C(),g=n("div"),Y(u.$$.fragment),P=C(),h=n("p"),h.textContent=N,this.h()},l(t){const b=X("svelte-g40mhf",document.head);d=Z(b,!1),f=R(),b.forEach(o),q=$(t),l=i(t,"DIV",{class:!0});var V=O(l);a=i(V,"DIV",{class:!0});var x=O(a);r=i(x,"H3",{class:!0,"data-svelte-h":!0}),E(r)!=="svelte-1ae8k70"&&(r.textContent=U),D=$(x),_=i(x,"DIV",{class:!0});var A=O(_);z(v.$$.fragment,A),A.forEach(o),H=$(x),m=i(x,"P",{class:!0,"data-svelte-h":!0}),E(m)!=="svelte-15ud0p7"&&(m.textContent=j),x.forEach(o),S=$(V),s=i(V,"DIV",{class:!0});var w=O(s);p=i(w,"H3",{class:!0,"data-svelte-h":!0}),E(p)!=="svelte-1wx6xff"&&(p.textContent=B),k=$(w),g=i(w,"DIV",{class:!0});var M=O(g);z(u.$$.fragment,M),M.forEach(o),P=$(w),h=i(w,"P",{class:!0,"data-svelte-h":!0}),E(h)!=="svelte-javt8w"&&(h.textContent=N),w.forEach(o),V.forEach(o),this.h()},h(){d.a=f,c(r,"class","svelte-1l6wwqv"),c(_,"class","code"),c(m,"class","svelte-1l6wwqv"),c(a,"class","section svelte-1l6wwqv"),c(p,"class","svelte-1l6wwqv"),c(g,"class","code"),c(h,"class","svelte-1l6wwqv"),c(s,"class","section svelte-1l6wwqv"),c(l,"class","main svelte-1l6wwqv")},m(t,b){d.m(se,document.head),e(document.head,f),T(t,q,b),T(t,l,b),e(l,a),e(a,r),e(a,D),e(a,_),F(v,_,null),e(a,H),e(a,m),e(l,S),e(l,s),e(s,p),e(s,k),e(s,g),F(u,g,null),e(s,P),e(s,h),I=!0},p:ee,i(t){I||(G(v.$$.fragment,t),G(u.$$.fragment,t),I=!0)},o(t){J(v.$$.fragment,t),J(u.$$.fragment,t),I=!1},d(t){t&&(d.d(),o(q),o(l)),o(f),K(v),K(u)}}}function ne(y){return["npm i svelte-combobox",`<script>
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
</div>`]}class de extends te{constructor(d){super(),ae(this,d,ne,le,Q,{})}}export{de as component};
