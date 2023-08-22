import{s as oe,H as se,e as W,f,a as B,I as ne,J as ae,g as u,d as i,c as A,h as O,r as N,j as r,u as n,i as L,k as x,v as ee,w as te}from"../chunks/scheduler.81c9387c.js";import{S as le,i as ie,b as I,d as D,m as V,a as U,t as Y,e as M}from"../chunks/index.4cfe47e1.js";import{C as X}from"../chunks/ComboBox.221a0232.js";import{b as Z,m as re}from"../chunks/monokai.8d0dcd32.js";function de(a){let e,l="Add New",s,d;return{c(){e=f("button"),e.textContent=l,this.h()},l(t){e=u(t,"BUTTON",{style:!0,slot:!0,"data-svelte-h":!0}),N(e)!=="svelte-1l34826"&&(e.textContent=l),this.h()},h(){x(e,"width","100%"),x(e,"margin-inline","auto"),x(e,"position","sticky"),x(e,"top","-.5rem"),r(e,"slot","before")},m(t,c){L(t,e,c),s||(d=ee(e,"click",a[3]),s=!0)},p:te,d(t){t&&i(e),s=!1,d()}}}function ce(a){let e,l="Add New",s,d;return{c(){e=f("button"),e.textContent=l,this.h()},l(t){e=u(t,"BUTTON",{style:!0,slot:!0,"data-svelte-h":!0}),N(e)!=="svelte-tzyyhv"&&(e.textContent=l),this.h()},h(){x(e,"width","100%"),x(e,"margin-inline","auto"),x(e,"position","sticky"),x(e,"bottom","-.5rem"),r(e,"slot","after")},m(t,c){L(t,e,c),s||(d=ee(e,"click",a[4]),s=!0)},p:te,d(t){t&&i(e),s=!1,d()}}}function me(a){let e,l,s,d,t,c,K='<h1>Slots</h1> <hr style="width: 50%; margin-inline:auto"/> <div class="event-info svelte-11kaq2f"><h2 style="text-align: center;" class="svelte-11kaq2f">ComboBox provides two slots for adding addtional elements to perform various actions.</h2> <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;"/> <ol class="svelte-11kaq2f"><li>Slot &quot;before&quot; : can be used to add elements before the options in the listbox.</li> <li>Slot &quot;after&quot;  : can be used to add elements after the options in the listbox.</li></ol></div>',j,p,C,Q="Slot before",z,v,b,J,k,P,$,w,R="on:clear Event",F,_,g,G,y,S;return b=new X({props:{placeholder:"Select an option",options:a[0],wrapperClass:"svelte-box",id:"combobox",$$slots:{before:[de]},$$scope:{ctx:a}}}),k=new Z({props:{code:a[1]}}),g=new X({props:{placeholder:"Select an option",options:a[0],wrapperClass:"svelte-box",id:"combobox",$$slots:{after:[ce]},$$scope:{ctx:a}}}),y=new Z({props:{code:a[2]}}),{c(){e=new se(!1),l=W(),s=f("meta"),d=B(),t=f("div"),c=f("div"),c.innerHTML=K,j=B(),p=f("div"),C=f("h3"),C.textContent=Q,z=B(),v=f("div"),I(b.$$.fragment),J=B(),I(k.$$.fragment),P=B(),$=f("div"),w=f("h3"),w.textContent=R,F=B(),_=f("div"),I(g.$$.fragment),G=B(),I(y.$$.fragment),this.h()},l(o){const m=ne("svelte-1isofpq",document.head);e=ae(m,!1),l=W(),s=u(m,"META",{name:!0,content:!0}),m.forEach(i),d=A(o),t=u(o,"DIV",{class:!0});var h=O(t);c=u(h,"DIV",{class:!0,"data-svelte-h":!0}),N(c)!=="svelte-1nub8ah"&&(c.innerHTML=K),j=A(h),p=u(h,"DIV",{class:!0});var q=O(p);C=u(q,"H3",{class:!0,"data-svelte-h":!0}),N(C)!=="svelte-16uqpd7"&&(C.textContent=Q),z=A(q),v=u(q,"DIV",{class:!0});var E=O(v);D(b.$$.fragment,E),J=A(E),D(k.$$.fragment,E),E.forEach(i),q.forEach(i),P=A(h),$=u(h,"DIV",{class:!0});var H=O($);w=u(H,"H3",{class:!0,"data-svelte-h":!0}),N(w)!=="svelte-1pvuu6"&&(w.textContent=R),F=A(H),_=u(H,"DIV",{class:!0});var T=O(_);D(g.$$.fragment,T),G=A(T),D(y.$$.fragment,T),T.forEach(i),H.forEach(i),h.forEach(i),this.h()},h(){e.a=l,document.title="ComboBox",r(s,"name","description"),r(s,"content","A simple combobox for svelte and sveltekit"),r(c,"class","hero svelte-11kaq2f"),r(C,"class","svelte-11kaq2f"),r(v,"class","code"),r(p,"class","event svelte-11kaq2f"),r(w,"class","svelte-11kaq2f"),r(_,"class","code"),r($,"class","event svelte-11kaq2f"),r(t,"class","main svelte-11kaq2f")},m(o,m){e.m(re,document.head),n(document.head,l),n(document.head,s),L(o,d,m),L(o,t,m),n(t,c),n(t,j),n(t,p),n(p,C),n(p,z),n(p,v),V(b,v,null),n(v,J),V(k,v,null),n(t,P),n(t,$),n($,w),n($,F),n($,_),V(g,_,null),n(_,G),V(y,_,null),S=!0},p(o,[m]){const h={};m&32&&(h.$$scope={dirty:m,ctx:o}),b.$set(h);const q={};m&32&&(q.$$scope={dirty:m,ctx:o}),g.$set(q)},i(o){S||(U(b.$$.fragment,o),U(k.$$.fragment,o),U(g.$$.fragment,o),U(y.$$.fragment,o),S=!0)},o(o){Y(b.$$.fragment,o),Y(k.$$.fragment,o),Y(g.$$.fragment,o),Y(y.$$.fragment,o),S=!1},d(o){o&&(e.d(),i(d),i(t)),i(l),i(s),M(b),M(k),M(g),M(y)}}}function fe(a){return[[{id:1,name:"Option 1",value:"1"},{id:2,name:"Option 2",value:"2"},{id:3,name:"Option 3",value:"3"},{id:4,name:"Option 4",value:"4"},{id:5,name:"Option 5",value:"5"},{id:6,name:"Option 6",value:"6"},{id:7,name:"Option 7",value:"7"},{id:8,name:"Option 8",value:"8"},{id:9,name:"Option 9",value:"9"},{id:10,name:"Option 10",value:"10"}],` // Usgage of before slot.
<script>
    import Combobox from 'svelte-combobox/ComboBox.svelte';
<\/script>
<ComboBox 
   //props here 
>
    <button 
        style="width: 100%; margin-inline:auto; position:sticky; top:-.5rem" 
        slot="before"
        on:click={()=>{alert("You Clicked Add New !!!")}}
    >
        Add New
    </button>
</ComboBox>`,` // Usgage of after slot.
<script>
    import Combobox from 'svelte-combobox/ComboBox.svelte';
<\/script>
<ComboBox 
   //props here 
>
    <button 
        style="width: 100%; margin-inline:auto; position:sticky; bottom:-.5rem" 
        slot="after"
        on:click={()=>{alert("You Clicked Add New !!!")}}
    >
        Add New
    </button>
</ComboBox>`,()=>{alert('You clicked "Add New" button at the before slot !!!')},()=>{alert('You clicked "Add" New button at the after slot !!!')}]}class be extends le{constructor(e){super(),ie(this,e,fe,me,oe,{})}}export{be as component};
