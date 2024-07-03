<script lang="ts">
	export let data
</script>

<h1> About </h1>

<!-- <p> Pee Pee Poo Poo </p> -->




<svelte:head>
	<title>GitHub API</title>
</svelte:head>

<h1>GitHub Contributions</h1>

<table>
	{#each data.contributions as row}
		<tr>
			{#each row as day}
				<td data-level={day?.level} />
			{/each}
		</tr>
	{/each}
</table>




<h2> Hi! </h2>
<p> 
    My Name is Brandon Wingard. 
    I am a Software Engineer currently based in Greenville, South Carolina. 
    I am a Class of 2022 Clemson University Alumnus where I majored in Computer Science and minored in Engineering Systems.  
    My background is primarily in C/C++, Python, and Rust (now including Svelte!) where I've worked on a combination of 
    robotics, data science, and Full-Stack Software Development. In addition, I also have interests in photography and motorsports, where I regularly attend local events. 
    
</p>


<style>
	:global(html, body) {
		height: 100%;
	}

	:global(body) {
		display: grid;
		place-content: center;
		font-family: sans-serif;
		color: hsl(220 10% 98%);
		background-color: hsl(220 10% 10%);
	}

	h1 {
		text-align: center;
	}

	td {
		padding: 0.4rem;
		border-radius: 2px;

		&[data-level='0'] {
			background-color: #2c333b;
		}

		&[data-level='1'] {
			background-color: #00442a;
		}

		&[data-level='2'] {
			background-color: #006d35;
		}

		&[data-level='3'] {
			background-color: #00a648;
		}

		&[data-level='4'] {
			background-color: #00d35c;
		}
	}
</style>
