<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
    import { page } from "$app/stores";
    import { base } from "$app/paths";

    let navExpanded = false;
    let darkMode = false;

    onMount(() => {
        if (browser) {
            darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        document.querySelectorAll('a').forEach(element => {
            element.addEventListener('click', ()=>{
                navExpanded = false;
            })
        });
    });

    const changeTheme = () => {
        darkMode?document.querySelector(':root')?.setAttribute('data-theme', 'dark'):document.querySelector(':root')?.setAttribute('data-theme', 'light');
    }
</script>

<div class="navigation {navExpanded?'expanded':''}">
    <button class="toggle {navExpanded?'on':''}" aria-label="toggle-navigation" on:click={()=>{navExpanded = !navExpanded}}>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
    </button>
    <nav class="sidebar">
        <div class="logo">
            <h4><span>{"<"} </span>SvelteBox <span>{"/>"}</span></h4>
        </div>
        <div class="links">
            <ol class="outer-list">
                <li class="outer-list-item">
                    <a href="{base}/" class="top-link {$page.route.id === "/"?'active':''}">Home</a>
                </li>
                <li class="outer-list-item">
                    <a href="{base}/installation" class="top-link {$page.route.id === "/installation"?'active':''}">Installation & Usage</a>
                </li>
                <li class="outer-list-item">
                    <a href="{base}/props" class="top-link {$page.route.id === "/props"?'active':''}">Props</a>
                </li>
                <li class="outer-list-item">
                    <a href="{base}/events" class="top-link {$page.route.id === "/events"?'active':''}">Events</a>
                </li>
                <li class="outer-list-item">
                    <a href="{base}/style" class="top-link {$page.route.id === "/style"?'active':''}">Styling</a>
                </li>
            </ol>
        </div>
        <div class="theme">
            <label for="theme-toggle">Dark Mode</label>
            <input 
                type="checkbox" 
                id="theme-toggle" 
                bind:checked={darkMode}
                on:change={changeTheme}
            >
        </div>
    </nav>
</div>

<style>
    .navigation {
        position: relative;
        width: 250px;
        height: 100%;
        padding: 1rem .5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--bg-color);
        border-radius: var(--br-large);
        box-shadow: var(--bxs) var(--bxs-color);
    }
    .toggle {
        position: absolute;
        top: .5rem;
        background: var(--bg-color) !important;
        border-radius: var(--br-large);
        display: none;
    }
    .sidebar {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: var(--bg-color);
    }
    .sidebar .logo {
        width: 100%;
        padding: .5rem;
        text-align: center;
        background: var(--bg-color);
        border-radius: var(--br-large);
        border: 3px solid;
    }
    .sidebar .logo h4 span:first-child,
    .sidebar .logo h4 span:last-child {
        color: var(--primary-color) !important;
    }
    .sidebar .links {
        width: 100%;
        height: 100%;
        margin-top: 2rem;
        padding-left: 2rem;
        overflow-y: auto;
    }
    .sidebar .links .outer-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .sidebar .links .outer-list .outer-list-item a {
        font-size: 1rem;
    }
    .sidebar .links a {
        color: var(--p-color);
        text-decoration: none;
        transition: .4s ease;
    }
    .sidebar .links a.active {
        color: var(--tertiary-color);
    }
    .sidebar .links a:active,
    .sidebar .links a:hover {
        color: var(--tertiary-color) !important;
    }
    @media screen and (max-width : 950px) {
        .toggle {
            position: absolute;
            top: 0rem;
            right: -4rem;
            width: 2rem;
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            gap: 3px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background: transparent;
            box-shadow: none;
        }
        .navigation {
            position: absolute;
            transform: translateX(-112%);
            transition: all .4s ease-out;
            z-index: 9999;
        }
        .navigation.expanded {
            transform: translateX(0);
        }
        .navigation.expanded .toggle {
            right: -3rem;
        }
        .toggle.on {
            right: -2.5rem !important;
            gap: 2px;
            box-shadow: var(--bxs) var(--bxs-color);
        }
        .toggle .line {
            width: 1.2rem;
            height: 2px;
            background: var(--primary-color) !important;
            transition: all .4s ease;
        }
        .toggle.on .line {
            height: 3px;
            background: crimson !important;
        }
        .toggle.on .line-1 {
            transform: translate(20%, 30%);
            rotate: 45deg;
        }
        .toggle.on .line-3 {
            transform: translate(30%, -110%);
            rotate: -45deg;
        }
        .toggle.on .line-2 {
            transform: translateX(-100%);
            opacity: 0;
        }
    } 

</style>

