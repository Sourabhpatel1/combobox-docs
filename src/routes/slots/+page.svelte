<script lang="ts">
    import ComboBox from "../components/ComboBox.svelte";
    import { HighlightSvelte } from "svelte-highlight";
    import monokai from 'svelte-highlight/styles/monokai'
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

    let codeBefore = ` // Usgage of before slot.
<script>
    import ComboBox from 'svelte-combobox/ComboBox.svelte';
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
</ComboBox>`
let codeAfter = ` // Usgage of after slot.
<script>
    import ComboBox from 'svelte-combobox/ComboBox.svelte';
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
</ComboBox>`
</script>

<svelte:head>
    {@html monokai}
    <title>ComboBox</title>
    <meta name="description" content="A simple combobox for svelte and sveltekit">
</svelte:head>
<div class="main">
    <div class="hero">
        <h1>Slots</h1>
        <hr style="width: 50%; margin-inline:auto">
        <div class="event-info">
            <h2 style="text-align: center;">ComboBox provides two slots for adding addtional elements to perform various actions.</h2>
            <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;">
            <ol>
                <li>Slot "before" : can be used to add elements before the options in the listbox.</li>
                <li>Slot "after"  : can be used to add elements after the options in the listbox.</li>
            </ol>
        </div>
    </div>
    <div class="event">
        <h3>Slot before</h3>
        <div class="code">
            <ComboBox 
                placeholder="Select an option" 
                options={options} 
                wrapperClass={"svelte-box"} 
                id={"combobox"} 
            >
                <button 
                    style="width: 100%; margin-inline:auto; position:sticky; top:-.5rem" 
                    slot="before"
                    on:click={()=>{alert("You clicked \"Add New\" button at the before slot !!!")}}
                >
                    Add New
                </button>
            </ComboBox>
            <HighlightSvelte code={codeBefore} />
        </div>
    </div>
    <div class="event">
        <h3>on:clear Event</h3>
        <div class="code">
            <ComboBox 
                placeholder="Select an option" 
                options={options} 
                wrapperClass={"svelte-box"} 
                id={"combobox"} 
            >
                <button 
                    style="width: 100%; margin-inline:auto; position:sticky; bottom: -.5rem;" 
                    slot="after"
                    on:click={()=>{alert("You clicked \"Add\" New button at the after slot !!!")}}
                >
                    Add New
                </button>
            </ComboBox>
            <HighlightSvelte code={codeAfter} />
        </div>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .hero {
        padding: 1rem;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--content-background);
        border-radius: var(--br-small);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .hero .event-info {
        padding: 2rem;
        width: 100%;
        text-align: left;
    }
    .hero .event-info h2 {
        font-size: 1.5rem;
    }
    .hero .event-info ol {
        padding-left: 2rem;
    }
    .event {
        background: var(--content-background);
        border-radius: var(--br-small);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .event h3 {
        padding: .5rem 1rem;
        text-align: center;
    }
</style>