
<script lang="ts">
    import {formatDate } from '$lib/utils'
    import * as config from '$lib/config'
	import { onMount } from 'svelte'
    export let data


</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<section> 
    <p> Welcome to my Sveltekit Blog for Caffeine, and Software Development. Attached is my blog as well as a little big about me. 
        I am currently working on expanding out this project with new ideas as I experiment.
    </p>

</section>




<style>
    .posts {
        display: grid;
        gap: 2rem;
    }

    .post {
        max-inline-size: var(--size-content-3);
    }


    .post:not(:last-child){
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-3);
        text-transform: captialize;

    }

    .date {
        color: var(--text-2)
    }

    .description {
        margin-top: var(--size-3);

    }
</style>