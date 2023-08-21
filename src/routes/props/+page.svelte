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

<div class="main">
    <div class="hero">
        <h1>Props</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td data-cell="Prop">placeholder</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">Placeholder to be displayed in the search input.</td>
            </tr>
            <tr>
                <td data-cell="Prop">options</td>
                <td data-cell="Type">{'{id : number, "value" : any, name: string}[]'}</td>
                <td data-cell="Description">
                    An array of options to be displayed when listbox is open.
                    <ul>
                        <li>id is for keying the options in each loop. </li>
                        <li>value is the items value that you want the user to select and dispatch. </li>
                        <li>name is the name displayed in the listbox inside each options.</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td data-cell="Prop">defaultSelected</td>
                <td data-cell="Type">{'{id : number, "value" : any, name: string} | null'}</td>
                <td data-cell="Description">option that is selected by default. The option must be present in the options prop.</td>
            </tr>
            <tr>
                <td data-cell="Prop">id</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">An id that is to be assigned to the container containing the search input and the options listbox.</td>
            </tr>
            <tr>
                <td data-cell="Prop">wrapperClass</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">Class to be assigned to the container containing the search input and the options listbox.</td>
            </tr>
            <tr>
                <td data-cell="Prop">inputClass</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">Class to be assigned to the input element inside the container.</td>
            </tr>
            <tr>
                <td data-cell="Prop">optionsContainerClass</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">Class to be assigned to the div containing the options lits, i.e. the listbox container.</td>
            </tr>
            <tr>
                <td data-cell="Prop">optionsClass</td>
                <td data-cell="Type">string</td>
                <td data-cell="Description">Class to be assigned to the options inside the listbox, i.e. the individual buttons contining the option text.</td>
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
    td ul {
        margin-left: .8rem;
    }
    tr td:nth-child(1) {
        width: 5%;
    }
    tr td:nth-child(2) {
        width: 40%;
    }
    tr td:nth-child(3) {
        width: 55%;
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
            grid-template-columns: 16ch auto;
            border: none !important;
        }
        td ul {
            grid-column: 2/3;
        }
        td:first-child {
            padding-top: 1rem;
        }
        td:last-child {
            padding-bottom: 1rem;
        }
        td::before {
            content: attr(data-cell) " : ";
            margin-right: 1rem;
            padding: .3rem .3rem .3rem 0;
            font-weight: 700;
            text-transform: capitalize;
        }
    } 
</style>