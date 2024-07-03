---
title: My Skunkworks
description: My Skunkworks project and why not everything is special
date: '2024-7-28'
categories:
    - sveltekit
    - svelte

published: true
---

## Table of Contents


### My Skunkworks
    Well, now comes the biggest and most important project that was handed down. Now normally, the CTO would bring projects to me but, on rare occasion, the president of the company would come directly to me to get a project started. This project was one of those said occasions.

    I haven't really explained much about my coworkers or anyone in particular in any of these stories, but it's time for a quick story time. The president of our company was the founder of The School of Computing, and The Advanced Materials Research Laboratory at my University. He served in academia for a large chunk of his professional career, retired the year I was born (you read that right) after 35 years as a professor and then started his first company. That company was sold six years later then founded the company I worked for later that same year. Needless to say, this guy does not have an off switch and continues his tradition of getting up at 4am every morning, walking 4 miles before work, and getting to the office at 7:30am every morning then working until 6pm on days he wasn't in charge of dinner. The same habit he's had since the 1970s when he started working. He is without a doubt, the most intelligent man I have ever met and I genuinely cherish the fact that he is still my mentor to this day. 

    Back to the original story. Skunkworks. So, one of the big pieces of software the company was famous for was a custom algorithm that determined what is the most optimal way to pack an order into a cardboard box to minimize wasted space in a container. This paired with a genetic algorithm to determine what is the most optimal subset of cardboard boxes to have on hand allows a warehouse employee to always pick the correct box for every order they handled. This system was great since it was two parts, the engine that ran the algorithm, and the hardware that directed the worker to the right box. 

    So what does this have to do with me? Well, we've had a lot of companies approach us about using the algorithm portion of the project, but  didn't want the hardware that came with the product. Solution? Build a Cloud-based Web Service with sub 50ms per order response time that was highly available and secure for customers to submit a request to the algorithm and be sent a response. This was meant to be a new product that was set to release Q3 of 2024 with a fixed date to be determined closer to it being ready. I was to check in directly with the president of the company once a month and otherwise I was left to my own direction on the project. This was meant to be a long term supported project and after preliminary market research was projected to near double recurring monthly revenue. 

    I chose to build this project using the Actix-web framework in Rust to handle inbound data, paired with a Microsoft SQL Server to host persistent data, and log all transactions for billing and reporting. I got to work scaffolding the project using OpenAPI and Terraform to begin the approval process for the general design which was approved in short order. The President made it clear that he wanted to get this ready for production. This is the single project that I undertook from September until April and was by far the largest single undertaking that I have ever been exclusively responsible for. 

    So lets go over how it was designed. The basis was a queue of orders that a series of workers would then take, parse the box table of teh given customer and then would feed it the order parameters to process. Once the algorithm ran, it would return back a list of one or more Box Ids that would be returned to be used by the customer's system. I had a handful of different setbacks that caused delays in the project that mostly boiled down to changing database types to get SQLX and Tokio to play nice in the sandbox without having to change our underlying cost basis. Not a problem, swap out the database and migrate the data from one to another. 

