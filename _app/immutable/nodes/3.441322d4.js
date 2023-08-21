import{s as Z,M as ee,e as F,a as x,f as a,N as te,O as se,d as l,c as C,g as n,h as z,r as E,j as o,u as e,i as G,w as ae}from"../chunks/scheduler.60a61370.js";import{S as ne,i as oe,b as J,d as K,m as Q,a as R,t as W,e as X}from"../chunks/index.145bfebc.js";import{b as Y,m as le}from"../chunks/monokai.e541b38e.js";function re(w){let r,$,S,s,v,j='<h1>Events</h1> <hr style="width: 50%; margin-inline:auto"/> <div class="event-info svelte-1phzhat"><h2 style="text-align: center;" class="svelte-1phzhat">SvelteBox dispatches two events on user interaction.</h2> <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;"/> <ol class="svelte-1phzhat"><li>on:select Event -&gt; Dispatched when user selects an option.</li> <li>on:clear Event -&gt; Dispatched when user clicks on the clear icon when an option is selected.</li></ol></div>',B,i,m,L="on:select Event",O,c,p,q,u,U='* the quotes around the function assignment (on:select="") are optional and used here for syntax highlighter.',M,h,g,N="on:clear Event",P,d,f,T,_,A='* the quotes around the function assignment (on:clear="") are optional and used here for syntax highlighter.',D;return p=new Y({props:{code:w[0]}}),f=new Y({props:{code:w[1]}}),{c(){r=new ee(!1),$=F(),S=x(),s=a("div"),v=a("div"),v.innerHTML=j,B=x(),i=a("div"),m=a("h3"),m.textContent=L,O=x(),c=a("div"),J(p.$$.fragment),q=x(),u=a("p"),u.textContent=U,M=x(),h=a("div"),g=a("h3"),g.textContent=N,P=x(),d=a("div"),J(f.$$.fragment),T=x(),_=a("p"),_.textContent=A,this.h()},l(t){const b=te("svelte-g40mhf",document.head);r=se(b,!1),$=F(),b.forEach(l),S=C(t),s=n(t,"DIV",{class:!0});var y=z(s);v=n(y,"DIV",{class:!0,"data-svelte-h":!0}),E(v)!=="svelte-b3rgk5"&&(v.innerHTML=j),B=C(y),i=n(y,"DIV",{class:!0});var H=z(i);m=n(H,"H3",{class:!0,"data-svelte-h":!0}),E(m)!=="svelte-1eobk19"&&(m.textContent=L),O=C(H),c=n(H,"DIV",{class:!0});var I=z(c);K(p.$$.fragment,I),q=C(I),u=n(I,"P",{class:!0,"data-svelte-h":!0}),E(u)!=="svelte-1j75z7x"&&(u.textContent=U),I.forEach(l),H.forEach(l),M=C(y),h=n(y,"DIV",{class:!0});var V=z(h);g=n(V,"H3",{class:!0,"data-svelte-h":!0}),E(g)!=="svelte-1pvuu6"&&(g.textContent=N),P=C(V),d=n(V,"DIV",{class:!0});var k=z(d);K(f.$$.fragment,k),T=C(k),_=n(k,"P",{class:!0,"data-svelte-h":!0}),E(_)!=="svelte-1bt2bug"&&(_.textContent=A),k.forEach(l),V.forEach(l),y.forEach(l),this.h()},h(){r.a=$,o(v,"class","hero svelte-1phzhat"),o(m,"class","svelte-1phzhat"),o(u,"class","svelte-1phzhat"),o(c,"class","code"),o(i,"class","event svelte-1phzhat"),o(g,"class","svelte-1phzhat"),o(_,"class","svelte-1phzhat"),o(d,"class","code"),o(h,"class","event svelte-1phzhat"),o(s,"class","main svelte-1phzhat")},m(t,b){r.m(le,document.head),e(document.head,$),G(t,S,b),G(t,s,b),e(s,v),e(s,B),e(s,i),e(i,m),e(i,O),e(i,c),Q(p,c,null),e(c,q),e(c,u),e(s,M),e(s,h),e(h,g),e(h,P),e(h,d),Q(f,d,null),e(d,T),e(d,_),D=!0},p:ae,i(t){D||(R(p.$$.fragment,t),R(f.$$.fragment,t),D=!0)},o(t){W(p.$$.fragment,t),W(f.$$.fragment,t),D=!1},d(t){t&&(r.d(),l(S),l(s)),l($),X(p),X(f)}}}function ie(w){return[` // Usgage of on:select event.
<script>
    import ComboBox from 'sveltebox'
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
    import ComboBox from 'sveltebox'
    const doSomething = (e) => {
        // your custom code here;
        // the value of cleared item can be accessed via e.detail property;
    } 
<\/script>
<ComboBox 
    // props here
    on:clear="{(e)=>{doSomething(e)}}"
/>`]}class ve extends ne{constructor(r){super(),oe(this,r,ie,re,Z,{})}}export{ve as component};
