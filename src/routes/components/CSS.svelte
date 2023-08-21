<script lang="ts">
    import Highlight from "svelte-highlight";
    import css from "svelte-highlight/languages/css";

    const code = `.svelte-box {
    --search-bg-color : var(--bg-color) !important;
    --search-text-color: var(--h-color) !important;
    --search-border-color: var(--p-color) !important;
    --search-hover-outline-color : var(--primary-color) !important;
    --search-active-outline-color : var(--primary-color) !important;
    --options-container-background-color: var(--bg-color) !important;
    --options-background-color: var(--bg-color) !important;
    --options-bx-shadow-color: rgba(0, 0, 0, 0.3) !important;
    --options-text-color: var(--p-color) !important;
    --options-highlight-color: var(--primary-color) !important;
    --options-active-color: green !important;
    --chevron-color: var(--p-color) !important;
}
`
</script>

<div class="code">
    <Highlight language={css} code={code} />
</div>

<style>
    .code {
        width: 100%;
        max-height: 300px;
        overflow: auto;
    }
</style>