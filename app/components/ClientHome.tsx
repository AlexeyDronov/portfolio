"use client";

import React from "react";
import Pattern from "./UI/Background";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import { BlogPost } from "../lib/blogUtils";
import { Project } from "../lib/projectUtils";

// Define the props that this component expects
interface ClientHomeProps {
    posts: BlogPost[]; // Array of blog posts to display
    projects: Project[]; // Array of projects to display
}

// This is the main client-side component for the home page.
// It handles the layout of sections.
export default function ClientHome({ posts, projects }: ClientHomeProps) {
    // Common CSS classes for all sections to ensure consistent spacing and sizing
    const baseSectionClasses = "flex min-h-[80vh] w-full flex-col justify-center px-6 md:px-12 py-12";

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            {/* Background pattern component */}
            <Pattern />

            <main className="flex w-full max-w-3xl flex-col items-center">
                {/* Hero Section containing Introduction and About */}
                <section
                    id="hero"
                    className={baseSectionClasses}
                >
                    <Hero />
                    <About />
                </section>

                {/* Projects Section */}
                <section
                    id="projects"
                    className={baseSectionClasses}
                >
                    <Projects projects={projects} title="Featured Projects" showViewAll={true} />
                </section>

                {/* Blog Section */}
                <section
                    id="blog"
                    className={baseSectionClasses}
                >
                    <Blog posts={posts} />
                </section>
            </main>
        </div>
    );
}
