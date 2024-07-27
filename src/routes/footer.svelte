<script lang="ts">
    import * as config from '$lib/config'

</script>


<footer> 
    <p>{config.title}&copy{new Date().getFullYear()}</p>
    <p> v:{config.version} </p>
    <li> 
        <a href="https://github.com/AegisSSC" target="_blank"> Github </a>
    </li>
    <li> 
        <a href="https://www.linkedin.com/in/brandon-wingard-4886b7148/" target="_blank"> LinkedIn </a>
    </li>
    <li> 
        <a href="/about"> About </a>
    </li>
</footer>


<style> 
    footer{
        padding-block: var(--size-7);
        border-top: 1px solid var(--border);
    }

    p {
        color: var(--text-2);
    }
</style>