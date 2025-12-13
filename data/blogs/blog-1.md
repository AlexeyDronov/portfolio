---
title: "Understanding React Server Components"
date: "2024-12-10"
topic: "Web Development"
summary: "A comprehensive guide to how RSCs change the data fetching paradigm."
tags: ["react", "nextjs", "tutorial"]
---

# Introduction

React Server Components (RSC) represent a major shift in how we build React applications. Instead of sending all JavaScript to the client, we can now render components exclusively on the server.

## Why it matters

1. **Zero Bundle Size**: Server components' code isn't sent to the client.
2. **Direct Database Access**: You can query your DB directly inside your component.

## Improved Performance

By moving heavy dependencies to the server, we reduce the amount of code the browser needs to download and execute.
