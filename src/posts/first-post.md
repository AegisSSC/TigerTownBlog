---
title: First Post
description: First Post, Blogs and Posts
date: '2024-6-29'
categories:
    - sveltekit
    - svelte

published: true
---

## Table of Contents



## Where it all started

Hey Friends! This is my first post in this blog series and I want to talk more about this blog project. 

I've always had a fascination in content creation and one of the first 'solo' projects that I was recommended was to build my own website. Originally, while I was in college, I wanted to make a resume/portfolio website but, every iteration came back to the same issue... I am not as familiar with Javascript/Typescript than I do with other languages. I thought about writing it in Python (or god forbid Rust or C++) but opted against it as an opportunity to learn this new framework that I heard of praise for, Svelte. Once I got an idea of where to start, I jumped on Youtube and began my journey. Version 1 of this project flopped. I learned a lot, but I don't think I really knew enough about how web frameworks worked and so I tossed it in the virtual trashcan. 

Shortly after this first iteration, I graduated and started work and got busy with work-related projects. These projects obviously took precedent and by the time that I finished with all of my work-work, I wasn't interested in working on any personal projects, though this concept never really went away. A few months later, I saved enough money to really start exploring my second hobby, photography, in which I purchased my Sony A7RIV second hand from a professional photographer who was upgrading to a new Sony Alpha Camera. At this point, I was over enthusiastically diving into "alternative" income streams and returned to the idea that I wanted to build a photography blog page. Since I didn't feel like I had improved enough since last time, I wanted to look into a self-hosted Content Management System (CRM) and came to a software tool called Ghost. While I liked the idea behind Ghost, I still placed this project on the back burner as I continued to tackle more projects that took precedent at work. 

In my free time, I would skim through forums and Youtube to find inspiration and wished for the time to continue building side projects that I had in mind, but this time, I was more focused on HOW I wanted to manage things. I wanted to use the blog itself as a continuous learning project, but I also wanted an easy to use syntax that I have familiarity with. At the time, I was test driving Obsidian, a note taking tool that is based on Markdown. The syntax is intuitive and using Obsidian gave me more familiarity with the syntax so I felt it was a natural option. 

A few more months pass and I finally come across a youtube video by JoyofCode where he walked through the basics of a blog that combined Svelte with a plugin that allowed a text-based blog with Markdown. Finally, a best of both worlds for a text/software based blog. Now I just needed the time to actually sit down and build it. Well, life happened, the small company I worked for was purchased by a larger company, and I was apart of a cost cutting lay off. So it's now summer time, and I have plenty of time (outside of applying for jobs) that I can use to develop and sharpen my skills. 


## Blog Information
So, lets finally get more into WHAT this blog actually is:

This blog is an active project first. This means that this blog is meant to evolve as I learn and grow as a software developer

I also want to use this as a platform where I showcase other projects that I am working on. Though, It won't be a huge flashy "SPEND YOUR MONEY NOW" page. This is Markdown after all and I want to focus on what I'm doing and less so and have zero expectations for any of this.  

This is also where I want to document what I am learning. I strongly agree with the philosophy that the best way that you can demonstrate learning is through teaching. What better way to document my learning process than through a blog that others can use as a reference. 


So now onto the structure and bones of this project:


## Tools and Services
This project is powered by Sveltekit and Markdown

### Svelte: 
    Powered by a combination of Svelte, CSS, and Typescript, this handles the bulk of the actual website. In addition, it uses Open-Props and Lucide to handle classes and icons. Currently, the project is pre-rendered to be as fast and responsive as possible, and of course, has dark mode enabled by default. 

### Markdown:
    Good old Markdown. Simple, efficient, and more than what I could ever use for a blog like this. This is powered by Mdsvex, with code formatting handled by Shiki, and a combination of Remark, and Rehype plugins to help streamline the delivery of the blog.

    Currently the Shiki theme is 'material-theme-darker' but in the future I want to set it up to match my IDE's theme which is Gruvbox-Material-Dark Theme. 


### RSS:
    Yep, there's an RSS feed built into the back of this project. I currently don't use RSS at the time, but I wanted to build this into the back for people who may want to use it. Don't worry, it delivers XML to your reader of choice and has been back tested by W3C's Feed Validation Standard






```ts 
function greet(name: string){
    console.log('Hey ${name}!')
}
```