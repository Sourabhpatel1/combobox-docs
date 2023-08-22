
<script lang="ts">
    import { onMount } from "svelte";

    onMount(()=>{
        // Courtesy Adrian Roselli (https://adrianroselli.com/)
        function AddTableARIA() {
            try {
                var allTables = document.querySelectorAll('table');
                for (var i = 0; i < allTables.length; i++) {
                allTables[i].setAttribute('role','table');
                }
                var allCaptions = document.querySelectorAll('caption');
                for (var i = 0; i < allCaptions.length; i++) {
                allCaptions[i].setAttribute('role','caption');
                }
                var allRowGroups = document.querySelectorAll('thead, tbody, tfoot');
                for (var i = 0; i < allRowGroups.length; i++) {
                allRowGroups[i].setAttribute('role','rowgroup');
                }
                var allRows = document.querySelectorAll('tr');
                for (var i = 0; i < allRows.length; i++) {
                allRows[i].setAttribute('role','row');
                }
                var allCells = document.querySelectorAll('td');
                for (var i = 0; i < allCells.length; i++) {
                allCells[i].setAttribute('role','cell');
                }
                var allHeaders = document.querySelectorAll('th');
                for (var i = 0; i < allHeaders.length; i++) {
                allHeaders[i].setAttribute('role','columnheader');
                }
                // this accounts for scoped row headers
                var allRowHeaders = document.querySelectorAll('th[scope=row]');
                for (var i = 0; i < allRowHeaders.length; i++) {
                allRowHeaders[i].setAttribute('role','rowheader');
                }
            } catch (e) {
                console.log("AddTableARIA(): " + e);
            }
        }

            AddTableARIA();
    })
</script>
<svelte:head>
    <title>ComboBox</title>
    <meta name="description" content="A simple combobox for svelte and sveltekit">
</svelte:head>
<div class="main">
    <div class="hero">
        <h1>CSS Variables</h1>
        <hr style="width: 50%; margin-inline:auto">
        <div class="info">
            <h2 style="text-align: center;">Custom variables to style elements inside the component.</h2>
            <hr style="width: 100%; margin-inline:auto; margin-block: 1rem;">
            <p>These variables can be declared in the stylesheet and imported in page, an example is shown in the homepage.</p>
        </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Variable Name</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-cell="Variable Name">--search-hover-outline-color</td>
                <td data-cell="Description">Color of search input outline when hovered over</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--search-active-outline-color</td>
                <td data-cell="Description">Color of search input outline when it has focus</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--search-border-color</td>
                <td data-cell="Description">Color of search input outline</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--search-text-color</td>
                <td data-cell="Description">Color of search input text and placeholder</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--search-bg-color</td>
                <td data-cell="Description">Color of search input background</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--search-border-radius</td>
                <td data-cell="Description">Border radius of search input</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-container-background-color</td>
                <td data-cell="Description">Background color of listbox</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-background-color</td>
                <td data-cell="Description">Background color of each individual option</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-bx-shadow-color</td>
                <td data-cell="Description">Box shadow color of each individual option</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-text-color</td>
                <td data-cell="Description">Text color od each individual option</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-highlight-color</td>
                <td data-cell="Description">Color of background when an option is hovered over</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-active-color</td>
                <td data-cell="Description">Color of background when an option is selected</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--chevron-color</td>
                <td data-cell="Description">Color of chevron (up/down arrow)</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--clear-icon-color</td>
                <td data-cell="Description">Color of the clear icon</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--animation-duration</td>
                <td data-cell="Description">animation duration for listbox opening and closing</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--options-max-height</td>
                <td data-cell="Description">Max height of the listbox</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--font-weight</td>
                <td data-cell="Description">Font weight of text inside the combobox</td>
            </tr>
            <tr>
                <td data-cell="Variable Name">--font-size</td>
                <td data-cell="Description">Font size of text inside the combobox</td>
            </tr>
        </tbody>
    </table>
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
    .hero .info {
        padding: 2rem;
        width: 100%;
        text-align: left;
    }
    .hero .info h2 {
        font-size: 1.5rem;
    }
    .hero .info p {
        text-align: center;
    }
    table {
        width: 100%;
        padding: 1rem;
        border-collapse: collapse;
        background: var(--content-background);
        border-radius: var(--br-small);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    th {
        text-align: left;
        font-size: 1.2rem;
        font-weight: 700;
        background: var(--content-background-alt);
        border-right: 2px solid gray;
    }
    th,
    td {
        padding: .5rem 1rem;
    }
    tr:nth-of-type(2n) {
        background: var(--row-background-alt);
    }
    td {
        font-size: 1rem;
    }
    tr td:nth-child(1) {
        width: 30%;
    }
    tr td:nth-child(2) {
        width: 60%;
    }
    tr {
        border: 2px solid gray;
    }
    td:not(:last-child) {
        border-right: 2px solid gray;
    }
    @media screen and (max-width: 950px) {
        th {
            display: none;
        }
        td {
            min-width: 100%;
            display: grid;
            grid-template-columns: 18ch auto;
            border: none !important;
        }
        td:first-child {
            padding-top: 1rem;
        }
        td:last-child {
            padding-bottom: 1rem;
        }
        td::before {
            content: attr(data-cell) " : ";
            font-weight: 700;
            text-transform: capitalize;
        }
    } 
</style>