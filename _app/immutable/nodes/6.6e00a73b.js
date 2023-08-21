import{s as u,f as v,g as p,r as b,j as m,i as f,w as s,d as g,o as x}from"../chunks/scheduler.60a61370.js";import{S as V,i as A}from"../chunks/index.145bfebc.js";function D(n){let t,a='<div class="hero svelte-1a0uhnn"><h1>CSS Variables</h1> <hr style="width: 50%; margin-inline:auto"/> <div class="info svelte-1a0uhnn"><h2 style="text-align: center;" class="svelte-1a0uhnn">Custom variables to style elements inside the component.</h2> <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;"/> <p class="svelte-1a0uhnn">These variables can be declared in the stylesheet and imported in page, an example is shown in the homepage.</p></div></div> <table class="svelte-1a0uhnn"><thead><tr class="svelte-1a0uhnn"><th class="svelte-1a0uhnn">Variable Name</th> <th class="svelte-1a0uhnn">Description</th></tr></thead> <tbody><tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-hover-outline-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline when hovered over</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-active-outline-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline when it has focus</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-border-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input outline</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-text-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input text and placeholder</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-bg-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of search input background</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--search-border-radius</td> <td data-cell="Description" class="svelte-1a0uhnn">Border radius of search input</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-container-background-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Background color of listbox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-background-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Background color of each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-bx-shadow-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Box shadow color of each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-text-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Text color od each individual option</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-highlight-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of background when an option is hovered over</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-active-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of background when an option is selected</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--chevron-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of chevron (up/down arrow)</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--clear-icon-color</td> <td data-cell="Description" class="svelte-1a0uhnn">Color of the clear icon</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--animation-duration</td> <td data-cell="Description" class="svelte-1a0uhnn">animation duration for listbox opening and closing</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--options-max-height</td> <td data-cell="Description" class="svelte-1a0uhnn">Max height of the listbox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--font-weight</td> <td data-cell="Description" class="svelte-1a0uhnn">Font weight of text inside the combobox</td></tr> <tr class="svelte-1a0uhnn"><td data-cell="Variable Name" class="svelte-1a0uhnn">--font-size</td> <td data-cell="Description" class="svelte-1a0uhnn">Font size of text inside the combobox</td></tr></tbody></table>';return{c(){t=v("div"),t.innerHTML=a,this.h()},l(e){t=p(e,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-dxfqf4"&&(t.innerHTML=a),this.h()},h(){m(t,"class","main svelte-1a0uhnn")},m(e,l){f(e,t,l)},p:s,i:s,o:s,d(e){e&&g(t)}}}function y(n){return x(()=>{function t(){try{for(var a=document.querySelectorAll("table"),e=0;e<a.length;e++)a[e].setAttribute("role","table");for(var l=document.querySelectorAll("caption"),e=0;e<l.length;e++)l[e].setAttribute("role","caption");for(var o=document.querySelectorAll("thead, tbody, tfoot"),e=0;e<o.length;e++)o[e].setAttribute("role","rowgroup");for(var r=document.querySelectorAll("tr"),e=0;e<r.length;e++)r[e].setAttribute("role","row");for(var c=document.querySelectorAll("td"),e=0;e<c.length;e++)c[e].setAttribute("role","cell");for(var i=document.querySelectorAll("th"),e=0;e<i.length;e++)i[e].setAttribute("role","columnheader");for(var d=document.querySelectorAll("th[scope=row]"),e=0;e<d.length;e++)d[e].setAttribute("role","rowheader")}catch(h){console.log("AddTableARIA(): "+h)}}t()}),[]}class _ extends V{constructor(t){super(),A(this,t,y,D,u,{})}}export{_ as component};
