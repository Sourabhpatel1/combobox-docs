<script lang="ts">
    import { HighlightSvelte } from "svelte-highlight";
    import monokai from 'svelte-highlight/styles/monokai'

    let codeInstall = `npm i svelte-combobox`
let codeUsage = `<script>
    import ComboBox from 'svelte-combobox/Combobox.svelte';
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
</div>`
</script>

<svelte:head>
    {@html monokai}
</svelte:head>

<div class="main">
    <div class="section">
        <h3>Installation</h3>
        <div class="code">
            <HighlightSvelte code={codeInstall} />
        </div>
        <p>Run the command in your sveltekit app's home directory.</p>
    </div>
    <div class="section">
        <h3>Usage</h3>
        <div class="code">
            <HighlightSvelte code={codeUsage} />
        </div>
        <p>A working example of the code is provided in the homepage.</p>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .section {
        background: var(--content-background);
        border-radius: var(--br-small);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .section h3 {
        padding: .5rem 1rem;
        text-align: center;
    }
    .section p {
        padding: 1rem;
        font-size: 1rem;
    }
</style>