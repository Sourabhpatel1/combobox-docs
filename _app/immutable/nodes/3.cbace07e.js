import{s as ee,H as te,e as G,f as o,a as x,I as se,J as ae,g as n,d as l,c as C,h as E,r as w,j as s,u as e,i as K,w as oe}from"../chunks/scheduler.81c9387c.js";import{S as ne,i as le,b as N,d as Q,m as R,a as W,t as X,e as Y}from"../chunks/index.4cfe47e1.js";import{b as Z,m as re}from"../chunks/monokai.8d0dcd32.js";function ie(S){let r,b,$,B,a,m,A='<h1>Events</h1> <hr style="width: 50%; margin-inline:auto"/> <div class="event-info svelte-1phzhat"><h2 style="text-align: center;" class="svelte-1phzhat">ComboBox dispatches two events on user interaction.</h2> <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;"/> <ol class="svelte-1phzhat"><li>on:select Event -&gt; Dispatched when user selects an option.</li> <li>on:clear Event -&gt; Dispatched when user clicks on the clear icon when an option is selected.</li></ol></div>',q,i,v,L="on:select Event",O,c,p,T,u,U='* the quotes around the function assignment (on:select="") are optional and used here for syntax highlighter.',j,h,f,J="on:clear Event",M,d,g,P,_,F='* the quotes around the function assignment (on:clear="") are optional and used here for syntax highlighter.',D;return p=new Z({props:{code:S[0]}}),g=new Z({props:{code:S[1]}}),{c(){r=new te(!1),b=G(),$=o("meta"),B=x(),a=o("div"),m=o("div"),m.innerHTML=A,q=x(),i=o("div"),v=o("h3"),v.textContent=L,O=x(),c=o("div"),N(p.$$.fragment),T=x(),u=o("p"),u.textContent=U,j=x(),h=o("div"),f=o("h3"),f.textContent=J,M=x(),d=o("div"),N(g.$$.fragment),P=x(),_=o("p"),_.textContent=F,this.h()},l(t){const y=se("svelte-1isofpq",document.head);r=ae(y,!1),b=G(),$=n(y,"META",{name:!0,content:!0}),y.forEach(l),B=C(t),a=n(t,"DIV",{class:!0});var z=E(a);m=n(z,"DIV",{class:!0,"data-svelte-h":!0}),w(m)!=="svelte-1qfaj68"&&(m.innerHTML=A),q=C(z),i=n(z,"DIV",{class:!0});var H=E(i);v=n(H,"H3",{class:!0,"data-svelte-h":!0}),w(v)!=="svelte-1eobk19"&&(v.textContent=L),O=C(H),c=n(H,"DIV",{class:!0});var I=E(c);Q(p.$$.fragment,I),T=C(I),u=n(I,"P",{class:!0,"data-svelte-h":!0}),w(u)!=="svelte-1j75z7x"&&(u.textContent=U),I.forEach(l),H.forEach(l),j=C(z),h=n(z,"DIV",{class:!0});var V=E(h);f=n(V,"H3",{class:!0,"data-svelte-h":!0}),w(f)!=="svelte-1pvuu6"&&(f.textContent=J),M=C(V),d=n(V,"DIV",{class:!0});var k=E(d);Q(g.$$.fragment,k),P=C(k),_=n(k,"P",{class:!0,"data-svelte-h":!0}),w(_)!=="svelte-1bt2bug"&&(_.textContent=F),k.forEach(l),V.forEach(l),z.forEach(l),this.h()},h(){r.a=b,document.title="ComboBox",s($,"name","description"),s($,"content","A simple combobox for svelte and sveltekit"),s(m,"class","hero svelte-1phzhat"),s(v,"class","svelte-1phzhat"),s(u,"class","svelte-1phzhat"),s(c,"class","code"),s(i,"class","event svelte-1phzhat"),s(f,"class","svelte-1phzhat"),s(_,"class","svelte-1phzhat"),s(d,"class","code"),s(h,"class","event svelte-1phzhat"),s(a,"class","main svelte-1phzhat")},m(t,y){r.m(re,document.head),e(document.head,b),e(document.head,$),K(t,B,y),K(t,a,y),e(a,m),e(a,q),e(a,i),e(i,v),e(i,O),e(i,c),R(p,c,null),e(c,T),e(c,u),e(a,j),e(a,h),e(h,f),e(h,M),e(h,d),R(g,d,null),e(d,P),e(d,_),D=!0},p:oe,i(t){D||(W(p.$$.fragment,t),W(g.$$.fragment,t),D=!0)},o(t){X(p.$$.fragment,t),X(g.$$.fragment,t),D=!1},d(t){t&&(r.d(),l(B),l(a)),l(b),l($),Y(p),Y(g)}}}function ce(S){return[` // Usgage of on:select event.
<script>
    import ComboBox from 'svelte-combobox/ComboBox.svelte';
    
    const doSomething = (e) => {
        // your custom code here;
        // the value selected can be accessed via e.detail property;
    } 
<\/script>
<ComboBox 
    //props here
    on:select = "{(e)=>{doSomething(e)}}"
/>`,` // Usgage of on:clear event.
<script>
    import ComboBox from 'svelte-combobox/ComboBox.svelte';

    const doSomething = (e) => {
        // your custom code here;
        // the value of cleared item can be accessed via e.detail property;
    } 
<\/script>
<ComboBox 
    // props here
    on:clear="{(e)=>{doSomething(e)}}"
/>`]}class ve extends ne{constructor(r){super(),le(this,r,ce,ie,ee,{})}}export{ve as component};
