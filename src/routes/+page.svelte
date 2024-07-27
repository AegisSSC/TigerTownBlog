
<script lang="ts">
    import {formatDate } from '$lib/utils'
    import * as config from '$lib/config'
	import { onMount } from 'svelte'
    export let data


</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>
<div class="row">
    <div class = "columns">
        <div class = "column">
            <h2> Icon Goes here </h2> 
            This is where my Profile photo will go. I want this to be padded to separate this from the bio 
        </div>
        <div class = "column">
            <section> 
                <h2> About the project </h2>
                <p> 
                    Welcome to my Software Development Blog powered by caffeine. I plan on releasing weekly or bi-weekly updates on projects that I am currently working on.  
                    I am currently working on expanding out this project with new ideas as I experiment.
                </p>
            
            </section>
        </div>
    </div>
</div>

<div class="row">
    <div class = "columns">
        <div class = "column">
            <h2> At a Glance </h2>
            <section> 
                Current Job
            </section>
            <section> 
                Education
            </section><section> 
                Interests
            </section>
        </div>
        <div class = "column">
            <section> 
                <h2> Most Recent Blog Posts </h2>
                <p> 
                    BUILD A CAROSEL OF THE MOST RECENT 5 BLOG POSTS
                </p>
            
            </section>
        </div>
    </div>
</div>



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


    .columns {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
    }

    .column {
        flex: 50%;
    }
</style>