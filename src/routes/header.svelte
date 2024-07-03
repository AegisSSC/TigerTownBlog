<script lang="ts">
    import * as config from '$lib/config'
    import Toggle from './toggle.svelte'
</script>

<nav>
    <a href="/" class="title">
    <b>{config.title}</b>
    </a>

    <ul class="links">
        <li> 
            <a href="/blog"> Blog </a>
        </li>
        <li> 
            <a href="/about"> About </a>
        </li>
        <li> 
            <a href="/contact"> Contact </a>
        </li>
        <li> 
            <a href="https://github.com/AegisSSC" target="_blank"> Github </a>
        </li>
        <li> 
            <a href="https://www.linkedin.com/in/brandon-wingard-4886b7148/" target="_blank"> LinkedIn </a>
        </li>
        <li> 
            <a href="/rss.xml" target="_blank"> RSS </a>
        </li>
        
    </ul>


    <Toggle/>
</nav>



<style>
    nav {
        padding-block: var(--size-7);
       
    }

    .links {
        margin-block: var(--size-7);
    
    }

    a {
       color: inherit;  
       text-decoration: none;
       padding-inline: var(--size-7);
    }

    @media (min-width: 786px) {
        nav {
            display: flex;
            justify-content: space-between;
        }

        .links {
            display: flex;
            gap: var(size--7);
            margin-block: 0;

        }
    }
</style>