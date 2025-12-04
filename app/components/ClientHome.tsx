"use client";

import React, { useEffect, useState } from "react";
import Pattern from "./UI/Background";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Contact from "./Sections/Contact";

import Sidebar from "./UI/Sidebar";
import TopNav from "./UI/TopNav";
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import { BlogPost } from "../lib/blogUtils";
import { navItems } from "../lib/navConfig";

interface ClientHomeProps {
    posts: BlogPost[];
}

export default function ClientHome({ posts }: ClientHomeProps) {
    const [activeSection, setActiveSection] = useState("hero");
    const baseSectionClasses = "flex min-h-[80vh] w-full flex-col justify-center px-6 md:px-12 py-12 transition-all duration-700";

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.id);
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
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center">
            <Pattern />
            <TopNav activeSection={activeSection} />
            <Sidebar activeSection={activeSection} />

            <main className="flex w-6xl max-w-4xl flex-col items-center">
                <section id="hero" className={`${baseSectionClasses} ${getSectionStyle("hero")}`}>
                    <Hero />
                    <About />
                </section>

                <section id="projects" className={`${baseSectionClasses} ${getSectionStyle("projects")}`}>
                    <Projects />
                </section>

                <section id="blog" className={`${baseSectionClasses} ${getSectionStyle("blog")}`}>
                    <Blog posts={posts} />
                </section>

                <section id="contact" className={`${baseSectionClasses} ${getSectionStyle("contact")}`}>
                    <Contact />
                </section>
            </main>
        </div>
    );
}
