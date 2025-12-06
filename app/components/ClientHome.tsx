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
import OpacityCtrl from "../lib/OpacityCtrl";
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
    const baseSectionClasses = "flex w-full flex-col justify-center px-6 md:px-12 py-20";

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            {/* Background pattern component */}
            <Pattern />

            {/* Sidebar Navigation */}
            <SideBar />

            {/* Top Navigation Bar - Visible only on Hero */}
            <TopNavBar />

            <main className="flex w-full max-w-5xl flex-col items-center">
                {/* Hero Section containing Introduction and About */}
                <section
                    id="hero"
                    className="flex min-h-screen w-full flex-col justify-center px-6 md:px-12 py-20"
                >
                    <Hero />
                </section>

                {/* Main Content Sections with increased spacing for visual hierarchy */}
                <div className="flex flex-col w-full gap-32 pb-32">

                    <OpacityCtrl className="w-full">
                        <section id="projects" className="flex w-full flex-col justify-center px-6 md:px-12">
                            <Projects
                                projects={projects}
                                title="Featured Projects"
                                showViewAll={true}
                            />
                        </section>
                    </OpacityCtrl>

                    <OpacityCtrl className="w-full">
                        <section id="blog" className="flex w-full flex-col justify-center px-6 md:px-12">
                            <Blog posts={posts} />
                        </section>
                    </OpacityCtrl>

                    <OpacityCtrl className="w-full">
                        <section id="experience" className="flex w-full flex-col justify-center px-6 md:px-12">
                            <Experience />
                        </section>
                    </OpacityCtrl>

                    <OpacityCtrl className="w-full">
                        <section id="contact" className="flex w-full flex-col justify-center px-6 md:px-12">
                            <Contact />
                        </section>
                    </OpacityCtrl>

                </div>
            </main>
        </div >
    );
}
