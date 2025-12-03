"use client";

import React, { useEffect, useState } from "react";
import Pattern from "./UI/Background";
import Hero from "./Sections/Hero";
import Contact from "./Sections/Contact";
import Sidebar from "./UI/Sidebar";
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import { BlogPost } from "../lib/blogUtils";

interface ClientHomeProps {
    posts: BlogPost[];
}

export default function ClientHome({ posts }: ClientHomeProps) {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["hero", "projects", "blog", "contact"];
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            let currentSection = "hero";
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element && element.offsetTop <= scrollPosition) {
                    currentSection = sectionId;
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getSectionStyle = (id: string) => {
        return activeSection === id ? "opacity-100 blur-none scale-100" : "opacity-20 blur-sm scale-95";
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white">
            <Pattern />
            <Sidebar activeSection={activeSection} />

            <main className="flex w-full flex-col items-center">
                <section id="hero" className={`flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 md:px-12 py-24 transition-all duration-700 ${getSectionStyle("hero")}`}>
                    <Hero />
                </section>

                <section id="projects" className={`flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 md:px-12 py-24 transition-all duration-700 ${getSectionStyle("projects")}`}>
                    <Projects />
                </section>

                <section id="blog" className={`flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 md:px-12 py-24 transition-all duration-700 ${getSectionStyle("blog")}`}>
                    <Blog posts={posts} />
                </section>

                <section id="contact" className={`flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 md:px-12 py-24 transition-all duration-700 ${getSectionStyle("contact")}`}>
                    <Contact />
                </section>
            </main>
        </div>
    );
}
