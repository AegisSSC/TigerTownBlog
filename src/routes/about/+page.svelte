<script lang="ts">
    export let data    
</script>

<h1> About </h1>



<svelte:head>
	<title>GitHub API</title>
</svelte:head>



<div>
	<h2> 
		"Any sufficiently advanced technology is indistinguishable from magic." 
	</h2>
	<h5>
		- Arthur C. Clarke
	</h5>
</div>

<p> 
    My Name is Brandon Wingard, a techno wizard with the prime directive to help the world achieve harmonious balance with technology. 
	
	With a Maker's heart, and an obsession with the technical world, 

	it is my purpose to advocate for a sustainable future based on the principles of self-suffiency, sustainability, and environmental conservation. 
</p>



	







	<!-- currently based in Greenville, South Carolina.  -->


    <!-- I am a Class of 2022 Clemson University Alumnus where I majored in Computer Science and minored in Engineering Systems.   -->
    

	<div>


	<!-- This is probably going into a "How did I get here? Blog Post. " -->
	<p>

		From the humblest of backgrounds, middle school robotics is where I ended up finding my passion for software development. . 
		While originally, I wanted to pursue more of a hands-on engineering approach to problem solving. I quickly found that, software development melded naturally with my general problem solving process. 
		At the age of 14, I had my first attempt at teaching myself C. Why? Because there was an Aurdino project that I was working on to build a homemade Remote Controlled Racecar aptly named: The Daytona Prototype
		Months later, I was the lead software developer for my High School Robotics team, and by the end of the school year, I had not only won a regional title, but also a handful of accolades for the software development. 
		Between my Junior and Senior year of highschool, my Robotics Coach, encouraged me to pursue Computer Science full time. Up to this point, it was a means to an end, and not something that I had considered as an avenue. 
		After quite some convincing, my robotics coach (who was also the AP Computer Science instructor) worked with the school to waive all of the prerequesites for the senior level course and I took my first official Computer Science course after 2 years of self taught C. 
		
		
		Even up to this point, I was still uncertain of if I wanted to be in Computer Science or if I wanted to be in Electrical Engineering. During my college search, I talked to as many professors in both departments as I could going so far as to sign up for multiple tours. 
		
		It was time to make a decision, and I chose the University that I was already enrolled in Dual Credit Courses with and decided on an Electrical Engineering Tract, with a minor in Computer Science. 
		
		
		<!--  I want to break this into possibly 3 different blog posts -->
		<!-- 1. "Why is it ok to mess up at 18" -->
		So how did I end up here? Well simply, after my first two semesters in Electrical Engineering, I found out that I enjoyed Computer Science more. I made the phone call, and swapped my Major and minor. 
		At the age of 18, I was wrong. What I wanted to do with my life was completely different, and I sit here now at 25 reflecting on how little I really knew and knowing it's ok to redo something. 
		I had to rewire how my brain processed failure. I had to learn how to learn again and bounce back. 
		
		<!-- College and it's Struggles -->
		The biggest thing that I struggled with in my time at college was learning in a traditional setting. I was never big on huge lecture halls and the freshman year courses are entirely 200+ seat courses taught in a cold, sometimes dimly lit, lecture hall. 
		
		I knew this wasn't how I was going to learn most efficently. While I knew that I could coast through my coursework since it was all programming in C/C++, something that at this point, I had nearly 4 full years of practice with, 
		
		I had to find a way into a lab or group project where I can learn on my own and ask questions in a smaller group setting. 
		
		It was really at this time, that as a C purist, I recongnized that I was lacking a lot of exposure to the more popular languages.  
		
		<!-- Trial by Fire pt 1 -->
		I chose to get more exposure to Python. I chose python since it was relatively easy way to rapidly prototype a solution. 
		I spoke with my advisor who told me that the only course that taught Python was in the School of Business, in which for some odd reason, was locked behind multiple Finance Courses. 
		
		Instead, I took advantage of my school's Undergraduate Research Opportunities (URO) where I was fast tracked right into Python where I worked on a team that was development autonomus drone technology. 
		Yeah. Did I go way too deep way too soon? Probably, but the team I was working with was all happy to bring me on board and get me pointed in the right direction to begin contributing as soon as possible. 
		Skipping ahead to senior year, I ended up working part time in the IT office as a Student Software Lead. While also getting to take on a full slate of project courses ranging from GPU programming, Machine Learning, Data Science, Computer Vision.
		
		<!-- Trial by Fire pt 2 -->
		While also being selected to work on an interdesciplinary team with the Electrical Engineering Department working on a project in partnership with Los Alamos National Laboratory.  
		
		
		
		<!-- I am now incredibly more fulfilled by the work that I do more than I ever thought I could be with Software Development.  -->
		
		Since graduating, I have only seemed to increase my interests in learning. For the longest time I wasn't the type of person who liked to read. 
		
	</p>
		
</div>
		
	

	My background is primarily in C/C++, Python, and Rust (now including Svelte!) where I've worked on a combination of 
	robotics, data science, and Full-Stack Software Development. 
	
	
	
	In addition, I also have interests in photography and motorsports, where I regularly attend local events. 



<h2> My Experience: </h2>
<li>
	- 4 years of Autonomous Robotics experience including FIRST and Autonomus Drone Research. 	
</li>
<li>
	- 3 Years as a Full-Time Software Developer. 
</li>
<li>
	- 1 Year active independent Software Developer
</li>




<h2>GitHub Contributions</h2>
<table>
	{#each data.contributions as row}
		<tr>
			{#each row as day}
				<td data-level={day?.level} />
			{/each}
		</tr>
	{/each}
</table>



<style>

	:global(html, body) {
		height: 100%;
	}

	/* :global(body) {
		display: grid;
		font-family: sans-serif;
		color: hsl(220 10% 98%);
		background-color: hsl(220 10% 10%);
	} */

	h1 {
		text-align: center;
	}
	h2 {
		text-align: center;
	}


	table{
		place-content: center
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
