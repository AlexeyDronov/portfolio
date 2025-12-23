---
title: "How to build a website without any experience"
date: "2025-12-10"
topic: "Web Development"
summary: "Hello world and using an agentic IDE for web development."
tags: ["react", "nextjs", "AI"]
---


Things that I want to achieve and say with this blog post:

1. I want to introduce myself (is it even necessary given I already have an about me section?)
2. I want to give my thoughts on the AI usage in the professional space
	* Specifically, I think AI is making us *think less* when writing and debugging code, which means it's sort of making us dumber and more irresponsible programmers
	* On the other hand, it can allow us to focus our attention on the bigger picture, the logic behind a large and complex structure and design choices we make
3. I want to walk through the process of getting into vibe coding and creating a website with it
	- Initially, I was trying to write the website all by myself and using online next.js tutorials
	- Then, I moved on to using agents to write the website for me with general prompting and a combination of manual tweaking and agent debugging
	- Finally, I made a fresh start and focused completely on the design aspect of the website, delegating integration and coding to the agent
4. I want to discuss the simpler is better strategy and how I followed it to create the website
5. I want to discuss how the initial tutorials and debugging sessions helped me understand the framework better, which, in turn, allowed me to better understand how to prompt the agent and get what I wanted from it

---

# Hello World

Hey, everyone! I want to dedicate the very first blog post to introducing myself and 

  
## AI tools – degrading or uplifting?


# The Website

## Motivation

In the tech world, portfolio websites are a great ways to communicate a multitude of messages to both technical and non-technical audiences. Some great portfolios are a standalone product and act as a way to present the skills in software engineering or web development, others are simply an extension to an existing resume, and still others serve as means of self-expression and creativity.

In my case, I wanted my portfolio to act as all three at once, with the emphasis on the very last point. I wanted the website to be more than just a means to present my work. I wanted it to show my thoughts, show my creativity and design skills. I envisioned it as a "cool" experience for anyone deciding to wander in.


I have never as much as touched the web frameworks, let alone create a fully functional and deployed website, so, the task that I set up for myself was challenging, to say the least.


## No-AI approach (stage 1 – denial)

As I discussed before, I was always skeptical of the AI usage in technical domain. It seemed like any time I would use ChatGPT, my brain would simply shut down, and the wonderful process we call "thinking" would be replaced by ...


I began realising my ideas by trying to learn the appropriate frameworks for the task. I chose *Next.js* for its clever routing features, abundant online support, and pleasing aesthetics that came straight out of the box.

Having zero previous experience in web development, I started by watching online tutorials on Next.js, trying to switch my inner mode of thinking from (Python, ML engineering based) to a web-development one, which meant understanding routing, server vs. client-side rendering, difference between static and dynamic, and a great deal of other new concepts that were totally alien to me.

Having spent hours upon hours of simply covering the basics, I convinced myself I was well-equipped with all the necessary tools to start creating. I imported a bunch of components from open-source UI libraries, fiddled with different pretty-looking fonts and backgrounds, and ..., quickly getting lost and frustrated with the sheer amount of added complexity.

It didn't take long for the burnout to set in, and for my motivation to completely fade, resulting in me abandoning the project for a few months. A realisation set in that web development is actually difficult… *Who would've thought, right?*

I thought the idea was completely lost, and I would sadly never return to it.

## AI to the rescue (stage 2 – bargaining)

The winds changed when Google dropped a new Gemini 3 Pro model, which I was especially looking forward to, given all the built-up hype surrounding it. With it, they released Antigravity – an agent-first IDE controlled by the very same model.

Even though I was familiar with agents and their use cases before, I never really dove deep into them beyond occasional bug fixes or codebase refactoring. 

So, I decided to give it a shot thinking that delegating web development to an AI was acceptable within my framework of thinking, given it wasn't my career path (hence the bargaining).

The first iteration was a disaster, to say the least. The functionality was non-existent, the spacing did not make any sense, there was no structure or logic. But I had something tangible to work with, and that gave me just enough of a dopamine boost to continue.

I was learning and doing this quickly. This applied to both understanding the main "gist" of Next.js and to using agents in the workflow. My prompts got more meaningful and direct, which resulted in the agent creating better and better components.

![[Screenshot 2025-12-19 at 02.13.39.png|Portfolio V1]]

Instead of prompting "*create a main section on the main page of the website*", I would feed the agent with more direct and purposeful commands, like:

> Create a Hero component on the main page. It should be full height (min-h-screen or h-screen). Use a background with a linear gradient moving from deep purple to neon blue. Center my name (H1) and title (H2) with white text.

This was still not enough, however, and I realised I had to do more to achieve my vision.


## Human-Machine Symbiosis (Stage 3 – Acceptance)

### First real version

Having realised that the dream of creating a fully functional and aesthetically pleasing website was not only possible, but possible in a foreseeable future, I started vibe coding with the newly found vibes.

I began **modularising** and **subtasking** my prompts, making each one focus on a single specific aspect to keep agent's focus unobstructed. I also started including **technical requirements** instead of vague "make it better"-type prompts. This translated my vision into valuable technical jargon, making it easier for the agent to understand me and create more accurate components.

As a result, I managed to produce a website that was looking so much better than the V1 from only a few days prior. It already had some character, was fully functional, and even looked semi-decent.

I was still not satisfied though. It did not have that punch that I was hoping it would, and it did not look "cool". Yes, it was better than a simple HTML of ugly content, but I finally saw the potential.

### Restarting Again

After some unfruitful attempts at fixing the website, I realised some things that made me start from scratch:

1. Having been given a lot of ambiguous instructions, the agent **over-engineered** the website.
2. Even though I spent days on the website by that moment, I still did not have any **sensible direction**. I was mostly poking in the dark hoping something good would come out of it.
3. I over-complicated the idea. I **wanted too much** from a very simple portfolio website. I had three types of dynamic navigation, unnecessary routes all over the place, and other cool looking on their own, but completely useless in conjunction features.


With those realisations, it was finally clear what I had to do. I finally understood the purpose of agents. Agents are supposed to be used as 

> [!A short aside]
> I followed the design principle that "less is more". See, I have always believed that any great work, be it an art piece, some software, or any other product, needs to be as simple as possible while maintaining its full functionality. 


---

### The Home Run

I sat down with a piece of paper and a pen, and started thinking about the bigger picture. I sketched out the layout of the pages and the content, noted down the aesthetic that I wanted to go for (I settled for a geometric, Cyberpunk-influenced theme), and the feeling and impression I wanted my portfolio to give off.

I thought of every button and every component, building a mental model that worked together as a whole. Then, I stripped it of any unnecessary junk to make it as simple as possible. This process was repeated several times until I had a clear idea of what I wanted.

With that, the rest was as simple as it can get. I created an `instruct.md` file where I put all the visual and structural requirements, separated the tasks into manageable bite-sized actions for the agent, and sent the resulting prompts to the agent, pointing it to the global file for context.

The results were astonishing. Within an hour, the agent created the whole portfolio you are looking at right now, and it did it better than in days of our mutual effort. 

All that was left to do was debugging, polishing, and focusing on the actual content of the website. By that point, I could already navigate well through the code and understand how the things were set up. I spent a couple of days tweaking things, and, finally, deployed the website using Vercel.

# Takeaways and Moving Forward

The whole experience was absolutely incredible and eye-opening. I've learnt more than I expected to learn, including web development, use of agents, and, most importantly, **how to be an architect and a designer**. I will summarise my thoughts on agents below:

1. Agents work with the existing codebase. **If the codebase is shit, the agent's work will be similar**. The same principle as "garbage in, garbage out" applies.
2. Agents are simply not good with aesthetics and design (in its creative sense). They will make something look shiny but it just will not cut it for a valuable product.
3. Agents do not think big, **thinking big is human's responsibility**. They create what they are told to create, and, without a proper vision, they cannot create value.


I hope you enjoyed reading about my experience of AI-assisted web development! If you have any comments or would like to discuss the topic further, please feel free to reach out to me! 
