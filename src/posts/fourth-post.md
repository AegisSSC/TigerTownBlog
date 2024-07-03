---
title: Sprinting through Retrospectives
description: Project Rapid Fire
date: '2024-7-21'
categories:
    - C#
    - Github
    - Infrastructure
    - DevOps

published: true
---

## Table of Contents


### After the First Project

    I faced little resistance to my suggestions and was even told that previous engineers have brought up the same issues. I decided I wasn't going to wait around to do these out of the goodness of their heart, and chose to undertake these tools myself. First things first. We have legacy C# code that predates my kindergarten year, being managed by Tortoise + Mecurial. While this worked for the CTO as he held the primary copy of everything on his personal laptop. I don't think I have to explain why having a single point of failure and having no protections to fabled "Bus Issue", a situation where if a single person was hit by a bus you would have no way to recover mission critical information, is a bad idea. 

    I brought the idea of migration to the CTO and he approved it once he discovered a tool to translate .hg files into .git history. I then worked with the rest of the software engineers to migrate our entire codebase to Github under a single organization so that we can access the most recent copy of any of our own tools and have the ability to fix any bugs we found out in the field when we see them rather than marking it and hoping it was remembered during a retrospective. 

    The next thing to do was to get an organized internal communication system. I dabbled in possibly selfhosting an IRC chat off of a company server, but this was quickly squashed when I heard that one of the other engineers was investigating Slack and Microsoft Teams. He handed his findings to me when he took a new position with another software company. I went back and forth with management until we decided on Microsoft Teams since we could roll it together with our current Office Subscription for free. I onboarded everyone and adoption was critical to the company functioning well while we had up to 63% of our company and all of our software engineers dispersed all over North America during the year. 

    Two of the four projects taken care of, now time to tackle the project board and ticketing system. I hashed out the details of what was needed from the CTO and we agreed that a simple Kanban Board would be sufficient for keeping track of the basic status of a project while also having a way to link relevant material to the project card. I decided on a Trello Board, not because it was the "best" for our use case, but it was the one I was most familiar with since it's what we used in the Software Management course I took in college. It also came with a direct plugin for Microsoft Teams which was a boon since it minimized the number of required tools to remember to pull up when you wanted to check something. 

    I managed to get adoption of the three previous projects in under a month of introduction. Then again, in a company of eight, I guess is not as hard as it sounds. Now onto the most contentious project of the bunch, a ticketing system. One thing you have to understand about the owners of this company was their predisposition to save money at every turn even if it was at the detriment of the company. This isn't always a bad thing, but I was told by upper management to "Build our ticketing system from scratch" and that it wouldn't be too hard. After weeks of back and forth deliberation, I finally convinced mangement to use an off the shelf solution that I and the Support Person had vetted for our use case citing that it would have taken much more than it would cost for us to build the system in house (let alone keep the project up to date which we already struggled with in our custom tools.) With the rubber stamp of approval, I turned on the Atlassian Jira Service Management system that I had been toying with and got documentation and our knowledge base (including the entire manual for all of our in-house hardware and tools) in place. 

    While working on these infrastructure pieces, I was also tasked with housing and managing our newest hardware addition, a 2nd hand Dell PowerEdge 720 with the goal of turning it into a network attached server for the software development team to use as a sandbox environment. This mini-project turned into it's own rabbit hole of a project that ended up with me mapping the entire network of our building and providing hard wire connectivity to every room but the conference room and setting up a VPN Service to allow for remote connectivity using Wireguard.  

    To top it all off, I managed to get all of this done between March and June of 2023. Why March? Well, I was focused on providing software support for my first project from way back when since they were having hiccups from installing a new WMS at the same time as implementing our system so not everything was fully tested. While I was waiting to hear back from changes, I also was tasked with revamping our reporting software since my client deemed that it was insufficient for their business needs. Not a problem, my background is in general field of Data Science, you have a defined metric of success? I will build the data pipeline and the visualization needed to show you how it is working. This started as a pet project but ultimately became apart of a larger reporting software renovation that I worked on later. 
    
    But that's a story for another time, lets get back to this current iteration. After working with the Warehouse manager to help get a better understanding of how he wanted to measure the system's success, I built a quick scheduler task Rust to process a SQL Query via ODBC to Microsoft SQL Server, parse the data into a .csv file, and then email that csv file to me and let Microsoft PowerBI take the file and build an automated report. This ran monthly and the end customer was overjoyed that I was able to deliver an easily readable and portable visualization.  

    At the time, I didn't catch too much flack for not writing the project in C#, but this is foreshadowing for something later to come. I wanted to get the desired visuals back to the customer as soon as possible and I knew that this was only going to be a temporary solution while we worked on getting the reporting software up to date. Most importantly, this was all a billable project since it was classified as custom work so management was overjoyed that we got an additional project out of it. 
