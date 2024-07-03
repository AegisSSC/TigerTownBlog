---
title: Expanding the Website
description: Blogs, About, and More
date: '2024-7-03'
categories:
    - sveltekit
    - Svelte
    - Threlte
    - Typescript

published: true
---

## Table of Contents

## Already?
Yep. I've just started this and I'm already making changes to the project. Originally, I wanted this to be a standalone blog and then later down the line merge this into an (eventually finished) portfolio page.

Well. I started looking at the portfolio project that I started earlier and it is inoperable and I'm uncertain on how to fix it at this moment. Rather than waste more time on trying to rebuild that project. I plan on migrating everything into one large project and figure out what I can and can't keep. 

Ultimately, this is all still a work in progress and I would rather have one single project than attempting to maintain multiple smaller projects that don't get the attention they need to stay up to date. 


## What does this mean?

Well. Nothing is really going to change. I just add a few more buttons to the nav bar, and the Blog posts just move to their own tab. 


## Threlte and Skylines

So onto the biggest module that I have been working on this week. Threlte and the Github Skyline on the About page.  This page was inspired by the project that was by **Joy of Code** who built a 3d rendering of a Github Contribution map using Threlte. 

The project starts by investigating the Github Contributions widget to see what all is possible and locate the endpoint that Github uses to coalesce the data for it's own page. From there, its a matter of building a parser to read through the HTML and pull out the relevent data. After we collect it, we then cache it to limit endpoint overloading and build a 2d render of the array to verify that we collected the right data. 

The first major obstacle that I needed to overcome was the change that was made to the Github endpoint. The original method for getting the data has been patched. GitHub's contribution graph changed so that it no longer populates the content with a parse-able string but rather, stores the string inside the tool-tip then maps it to the corresponding component with "Contribution--Day-Component-X-Y"  (where X-Y is the array row column coordinates).

The tooltip however, does not contain any level information. I ended up modifying the original code to reflect a GetAttribute on 'day' where I query for the data-date and data-level. It creates the same Map but does not contain any information about the actual number of contributions. So while I can't get as much detail at this current time as was planned in the original project, I am getting the majority of it. 

