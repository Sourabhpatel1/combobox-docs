<script>
    import { HighlightSvelte } from "svelte-highlight";
    import monokai from 'svelte-highlight/styles/monokai'
    
    const code =`<--- file: src/routes/your-route/+page.svelte --->
<script lang="ts">
    import ComboBox from "$lib/ComboBox.svelte";
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
    ];
    let selectedOtion:string;
    let selectedValue:{id:number, name:string, valye:any} | null;
<\/script>
<div class="container">
    <ComboBox 
        placeholder="Select an option" 
        options={options} 
        wrapperClass={"svelte-box"} 
        id={"combobox"} 
        defaultSelected={selectedValue}
        on:select={(e)=>{selectedOption=e.detail.name; selectedValue=e.detail}}
        on:clear={()=>{selectedOption="Nothong Yet !"; selectedValue=null}}
    />
    <div>You Selected : {selectedOption?selectedOption:'Nothong Yet !'}</div>
    <div>The value of selection is : {selectedValue?JSON.stringify(selectedValue):"null"}</div>
</div>
` 
</script>

<svelte:head>
    {@html monokai}
</svelte:head>

<div class="code">
    <HighlightSvelte code={code} />
</div>

<style>
    .code {
        width: 100%;
        max-height: 300px;
        overflow: auto;
    }
</style>