<script lang="ts">
    import './styles/app.css'
    import SideBar from './components/SideBar.svelte';
</script>

<div class="container">
    <div class="navigation">
        <SideBar/>
    </div>
    <div class="page">
        <slot></slot>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: min(100%, 1400px);
        max-height: 100%;
        padding: 1rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
    }
    .navigation {
        position: sticky;
        top: 0rem;
        max-width: 250px;
        min-height: 100%;
        border-radius: var(--br-large);
        z-index: 9999;
    }
    .page {
        width: 100%;
        min-height: 96vh;
        max-height: 96vh;
        padding: 0rem 1rem 1rem 1rem;
        border-radius: var(--br-large);
        overflow-y: scroll;
    }
    @media screen and (max-width : 950px) {
        .page {
            padding: 2rem .5rem 1rem .5rem;
        }
        .container {
            padding: .5rem;
            gap: 0;
            justify-content: center;
        }
    }
</style>