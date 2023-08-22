import{s as g,f as m,a as x,I as A,g as p,d as o,c as V,r as y,j as r,u as D,i as b,w as c,o as N}from"../chunks/scheduler.81c9387c.js";import{g as _}from"../chunks/globals.7f7f1b26.js";import{S as w,i as C}from"../chunks/index.4cfe47e1.js";const{document:i}=_;function S(d){let t,s,e,n='<div class="hero svelte-1a0uhnn"><h1>CSS Variables</h1> <hr style="width: 50%; margin-inline:auto"/> <div class="info svelte-1a0uhnn"><h2 style="text-align: center;" class="svelte-1a0uhnn">Custom variables to style elements inside the component.</h2> <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;"/> <p class="svelte-1a0uhnn">These variables can be declared in the stylesheet and imported in page, an example is shown in the homepage.</p></div></div> <table class="svelte-1a0uhnn"><thead><tr class="svelte-1a0uhnn"><th class="svelte-1a0uhnn">Variable Name</th> <th class="svelte-1a0uhnn">Description</th></tr></thead> <tbody><tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-hover-outline-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline when hovered over</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-active-outline-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline when it has focus</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-border-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-text-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input text and placeholder</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-bg-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input background</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-border-radius</td> <td data-cell="Description" class="svelte-1a0uhnn">Border radius of search input</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-container-background-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Background color of listbox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-background-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Background color of each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-bx-shadow-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Box shadow color of each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-text-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Text color od each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-highlight-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of background when an option is hovered over</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-active-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of background when an option is selected</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--chevron-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of chevron (up/down arrow)</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--clear-icon-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of the clear icon</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--animation-duration</td> <td data-cell="Description" class="svelte-1a0uhnn">animation duration for listbox opening and closing</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-max-height</td> <td data-cell="Description" class="svelte-1a0uhnn">Max height of the listbox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--font-weight</td> <td data-cell="Description" class="svelte-1a0uhnn">Font weight of text inside the combobox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--font-size</td> <td data-cell="Description" class="svelte-1a0uhnn">Font size of text inside the combobox</td></tr></tbody></table>';return{c(){t=m("meta"),s=x(),e=m("div"),e.innerHTML=n,this.h()},l(a){const l=A("svelte-bmsiel",i.head);t=p(l,"META",{name:!0,content:!0}),l.forEach(o),s=V(a),e=p(a,"DIV",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-dxfqf4"&&(e.innerHTML=n),this.h()},h(){i.title="ComboBox",r(t,"name","description"),r(t,"content","A simple combobox for svelte and sveltekit"),r(e,"class","main svelte-1a0uhnn")},m(a,l){D(i.head,t),b(a,s,l),b(a,e,l)},p:c,i:c,o:c,d(a){a&&(o(s),o(e)),o(t)}}}function k(d){return N(()=>{function t(){try{for(var s=document.querySelectorAll("table"),e=0;e<s.length;e++)s[e].setAttribute("role","table");for(var n=document.querySelectorAll("caption"),e=0;e<n.length;e++)n[e].setAttribute("role","caption");for(var a=document.querySelectorAll("thead, tbody, tfoot"),e=0;e<a.length;e++)a[e].setAttribute("role","rowgroup");for(var l=document.querySelectorAll("tr"),e=0;e<l.length;e++)l[e].setAttribute("role","row");for(var h=document.querySelectorAll("td"),e=0;e<h.length;e++)h[e].setAttribute("role","cell");for(var u=document.querySelectorAll("th"),e=0;e<u.length;e++)u[e].setAttribute("role","columnheader");for(var v=document.querySelectorAll("th[scope=row]"),e=0;e<v.length;e++)v[e].setAttribute("role","rowheader")}catch(f){console.log("AddTableARIA(): "+f)}}t()}),[]}class M extends w{constructor(t){super(),C(this,t,k,S,g,{})}}export{M as component};