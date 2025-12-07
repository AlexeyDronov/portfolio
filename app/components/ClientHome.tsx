"use client";

import React from "react";
import Pattern from "./UI/Background";
import SideBar from "./UI/SideBar";
import TopNavBar from "./UI/TopNavBar";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import Experience from "./Sections/Experience";
import Contact from "./Sections/Contact";
import { BlogPost } from "../lib/blogUtils";
import { Project } from "../lib/projectUtils";
import Section from "./UI/Section";

// Define the props that this component expects
interface ClientHomeProps {
    posts: BlogPost[]; // Array of blog posts to display
    projects: Project[]; // Array of projects to display
}

// This is the main client-side component for the home page.
// It handles the layout of sections.
export default function ClientHome({ posts, projects }: ClientHomeProps) {
    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            {/* Background pattern component */}
            <Pattern />

            {/* Sidebar Navigation */}
            {/* <SideBar /> */}

            {/* Top Navigation Bar - Visible only on Hero */}
            <TopNavBar />

            <main className="flex w-full flex-col items-center mx-auto px-4">
                {/* Hero Section containing Introduction and About */}
                <section
                    id="hero"
                    className="flex min-h-screen w-full flex-col justify-center py-20"
                >
                    <Hero />
                </section>

                {/* Main Content Sections with increased spacing for visual hierarchy */}
                <div className="flex flex-col gap-32 pb-32 max-w-4xl px-5 md:px-12">

                    <Section id="projects">
                        <Projects
                            projects={projects}
                            title="Featured Projects"
                            showViewAll={true}
                        />
                    </Section>

                    <Section id="blog">
                        <Blog posts={posts} />
                    </Section>

                    <Section id="experience">
                        <Experience />
                    </Section>

                    <Section id="contact">
                        <Contact />
                    </Section>

                </div>
            </main>
        </div>
    );
}
