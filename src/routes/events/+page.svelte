<script lang="ts">
    import { HighlightSvelte } from "svelte-highlight";
    import monokai from 'svelte-highlight/styles/monokai'

    let codeOnSelect = ` // Usgage of on:select event.
<script>
    import Combobox from 'svelte-combobox/ComboBox.svelte';
    const doSomething = (e) => {
        // your custom code here;
        // the value selected can be accessed via e.detail property;
    } 
<\/script>
<ComboBox 
    //props here
    on:select = \"{(e)=>{doSomething(e)}}\"
/>`
let codeOnClear = ` // Usgage of on:clear event.
<script>
    import Combobox from 'svelte-combobox/ComboBox.svelte';
    const doSomething = (e) => {
        // your custom code here;
        // the value of cleared item can be accessed via e.detail property;
    } 
<\/script>
<ComboBox 
    // props here
    on:clear=\"{(e)=>{doSomething(e)}}\"
/>`
</script>

<svelte:head>
    {@html monokai}
    <title>ComboBox</title>
    <meta name="description" content="A simple combobox for svelte and sveltekit">
</svelte:head>
<div class="main">
    <div class="hero">
        <h1>Events</h1>
        <hr style="width: 50%; margin-inline:auto">
        <div class="event-info">
            <h2 style="text-align: center;">ComboBox dispatches two events on user interaction.</h2>
            <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;">
            <ol>
                <li>on:select Event -> Dispatched when user selects an option.</li>
                <li>on:clear Event -> Dispatched when user clicks on the clear icon when an option is selected.</li>
            </ol>
        </div>
    </div>
    <div class="event">
        <h3>on:select Event</h3>
        <div class="code">
            <HighlightSvelte code={codeOnSelect} />
            <p>
                * the quotes around the function assignment (on:select="") are optional and used here for syntax highlighter.
            </p>
        </div>
    </div>
    <div class="event">
        <h3>on:clear Event</h3>
        <div class="code">
            <HighlightSvelte code={codeOnClear} />
            <p>
                * the quotes around the function assignment (on:clear="") are optional and used here for syntax highlighter.
            </p>
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
    .event .code p {
        padding: 0.2rem 1rem;
        font-size: .75rem;
    }
</style>