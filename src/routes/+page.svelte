<script lang="ts">
    import ComboBox from "./components/ComboBox.svelte";
    import MarkUp from "./components/MarkUp.svelte";
    import CSS from "./components/CSS.svelte";
	import { Highlight } from "svelte-highlight";
    import { json } from "svelte-highlight/languages";
	import { monokai } from "svelte-highlight/styles";

    let copied = false;
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
    let selectedTab = "component";
    let selectedOption: string;
    let selectedValue: {id:number, name:string, value:any} | null;

    let tsCode = `{
    compilerOptions : {
        //other options
        "moduleResolution" : "Bundler"  
    } 
}`

    const copyToClipboard = () => {
        navigator.clipboard.writeText('npm install svelte-combobox')
        copied = true;
        setTimeout(()=>{
            copied = false;
        }, 2000)
    } 

</script>

<svelte:head>
    <title>ComboBox</title>
    <meta name="description" content="A simple combobox for svelte and sveltekit">
    {@html monokai}
</svelte:head>

<div class="main">
    <div class="hero">
        <h1><span>{"<"}</span> ComboBox <span>{"/>"}</span></h1>
        <p>A simple combobox to be used in your Svelte / Svelte-kit projects.</p>
        <p class="{copied?'copied':''}">
            Install by running:&nbsp;<code>
                npm i svelte-combobox 
                <button class="copy" on:click={copyToClipboard} aria-label="copy-install-command">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="72" width="144" height="144" opacity="0.2"/><polyline points="216 184 216 40 72 40" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="40" y="72" width="144" height="144" fill="var(--fill-color)" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
                </button>
            </code>
        </p>
    </div>
    <div class="info">
        <h2 style="text-align: center;">ComboBox Features</h2>
        <hr style="width: 50%;">
        <ul>
            <li>
                <p>Easy and Searchable dropdown user input.</p>
            </li>
            <li>
                <p>Simple props based data interface for options.</p>
            </li>
            <li>
                <p>Props based classes for styling via css variables.</p>
            </li>
            <li>
                <p>Fully complaint with WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" target="_blank">Accessibility Guidelines</a>.</p>
            </li>
        </ul>
    </div>
    <div class="example">
        <h2 style="text-align: center;">Try It Out !</h2>
        <hr style="width: 50%;">
        <div class="tabs">
            <button class="{selectedTab === 'component' ? 'active' : ''}" on:click={() => selectedTab = "component"} aria-label="select-component-tab">Component</button>
            <button class="{selectedTab === 'markup' ? 'active' : ''}" on:click={() => {selectedTab = "markup"}} aria-label="select-markup-tab">Markup</button>
            <button class="{selectedTab === 'css' ? 'active' : ''}" on:click={() => {selectedTab = "css"}} aria-label="select-css-tab">CSS</button>
        </div>
        <div class="tab-content">
            {#if selectedTab === "component"}
            <div class="combobox">
                <ComboBox 
                    placeholder="Select an option" 
                    options={options} 
                    wrapperClass={"svelte-box"} 
                    id={"combobox"} 
                    defaultSelected={selectedValue}
                    on:select="{(e)=>{selectedOption=e.detail.name; selectedValue=e.detail;}}"
                    on:clear="{()=>{selectedOption="Nothong Yet !"; selectedValue=null}}"
                />
                <div class="selected">You Selected : {selectedOption?selectedOption:'Nothong Yet !'}</div>
                <div class="value">The value of selection is : <br>{selectedValue?JSON.stringify(selectedValue):"null"}</div>
            </div>
            {/if}
            {#if selectedTab === "markup"}
            <div class="markup">
                <MarkUp/>
            </div>
            {/if}
            {#if selectedTab === "css"}
                <div class="css">
                    <CSS/>
                </div>
            {/if}
        </div>
    </div>
    <div class="troubleshoot">
        <h2 style="text-align: center;">Troubleshooting Typescript !!!</h2>
        <hr style="width: 50%;">
        <div class="guide">
            <p style="margin-bottom: 3rem;">If you are getting the following error "Cannot find module 'svelte-combobox/ComboBox.svelte' or its corresponding type declarations" after importing the component then you need to modify you tsconfig.json as follows :</p>
            <Highlight language={json} code={tsCode}/>
        </div>
    </div>
</div>

<style>
    .main {
        width: 100%;
        height: 100%;
    }
    .hero {
        width: 100%;
        min-height: 200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--content-background);
        border-radius: var(--br-small);
    }
    .hero h1 span:first-child,
    .hero h1 span:last-child {
        color: var(--primary-color);
    }
    .hero p:last-child {
        position: relative;
        height: 40px;
        padding: 1rem .5rem;
        font-size: .8rem;
        display: flex;
        align-items: center;
        background: var(--content-background-alt);
        margin-top: 2rem;
        border-radius: var(--br-small);
    }
    .hero p code {
        position: relative;
        color: var(--primary-color);
    }
    .hero p code button {
        top: 50%;
        left: 110%;
        position: absolute;
        transform: translateY(-50%);
        background: none;
        width: 28px;
        height: 40px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: none;
        transition: all .5s ease;
    }
    .hero p:last-child.copied::after {
        position: absolute;
        content: '✔️ Command copied to clipboard.';
        width: 100%;
        top: 120%;
        left: 50%;
        transform: translateX(-50%);
    }
    .hero p code button:active {
        transform: scale(.2);
    }
    .hero p code svg {
        width: 28px;
        height: 28px;
    }
    .example {
        margin-top: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--content-background);
        border-radius: var(--br-small);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .example .tabs {
        width: 100%;
        margin: 1.5rem 0;
        display: flex;
        gap: 1rem;
    }
    .example .tabs button:active {
        transform: none;
    }
    .example .tab-content {
        width: 100%;
        height: 100%;
    }
    .example .tab-content .combobox {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .example .tab-content .combobox .selected,
    .example .tab-content .combobox .value {
        width: 100%;
        text-align: left;
    }
    
    .example .tab-content .markup,
    .example .tab-content .css {
        max-height: 350px;
        display: flex;
        justify-content: center;
        overflow-y: auto;
    }
    .example .tabs button {
        font-weight: 700;
        width: 100%;
        transition: .4s ease;
    }
    .example .tabs button.active {
        color: var(--h-color);
        background: var(--tertiary-color);
    }
    .info,
    .troubleshoot {
        width: 100%;
        height: 300px;
        margin-top: 2rem;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        background: var(--content-background);
        border-radius: var(--br-small);
    }
    .hero,
    .info,
    .troubleshoot {
        height: 450px;
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .example {
        height: 500px;
    }
    .example h2,
    .info h2,
    .troubleshoot h2 {
        width: 100%;
        padding-bottom: 1rem;
    }
    .info ul {
        height: 100%;
        margin-top: 1rem;
        display: flex;
        gap: 1rem;
        list-style: none;
    }
    .info ul li {
        width: 100%;
        padding: .2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-color);
        border-radius: var(--br-small);
    }
    .info p {
        width: 100%;
        padding: 0 1rem;
        text-align: center;
        font-size: 1rem;
    }
    .info ul li a {
        color: var(--p-color) !important;
    }
    .troubleshoot {
        margin-top: 2rem;
    }
    .troubleshoot .guide {
        width: 100%;
        height: 100%;
    }
    @media screen and (max-width: 950px) {
        .hero h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.5rem;
        }
        .example {
            min-height: 450px;
            max-height: 450px;
        }
        .example .tab-content {
            display: grid;
            min-height: 150px;
        }
        .example .tab-content .markup,
        .example .tab-content .css {
            max-height: 300px;
            font-size: .7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: auto;
        }
        .info {
            height: auto;
        }
        .info ul {
            flex-direction: column;
        }
        .info ul li,
        .info ul li p {
            height: 100%;
        }
        .guide p {
            margin-bottom: 1rem !important;
        }
    }
</style>