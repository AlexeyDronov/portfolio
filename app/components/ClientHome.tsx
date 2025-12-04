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
    const [sidebarState, setSidebarState] = useState({ mode: "full" as "full" | "icon", visible: true });
    const [showTopNav, setShowTopNav] = useState(true);
    const [sectionStyles, setSectionStyles] = useState<Record<string, { opacity: number; scale: number }>>({});

    const baseSectionClasses = "flex min-h-[80vh] w-full flex-col justify-center px-6 md:px-12 py-12 transition-all duration-100 ease-out";

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const contentWidth = Math.min(width, 896); // max-w-4xl = 56rem = 896px
            const spaceLeft = (width - contentWidth) / 2;

            // Sidebar widths (approximate)
            const fullSidebarWidth = 220; // w-48 + padding/gap
            const iconSidebarWidth = 80;  // w-fit (icon) + padding

            if (spaceLeft < iconSidebarWidth) {
                setSidebarState({ mode: "icon", visible: false });
            } else if (spaceLeft < fullSidebarWidth) {
                setSidebarState({ mode: "icon", visible: true });
            } else {
                setSidebarState({ mode: "full", visible: true });
            }
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const viewportCenter = scrollY + viewportHeight / 2;

            // TopNav visibility logic
            // Hide TopNav later, but ensure it's gone before projects
            setShowTopNav(scrollY < viewportHeight * 0.3);

            // Sidebar visibility logic
            // Show sidebar later, ensuring we are well into the transition
            const showSidebar = scrollY > viewportHeight * 0.55;
            setSidebarState(prev => ({ ...prev, visible: showSidebar }));

            // Active section logic
            const sections = navItems.map(item => item.id);
            let currentSection = "hero";
            const newSectionStyles: Record<string, { opacity: number; scale: number }> = {};

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementCenter = rect.top + window.scrollY + rect.height / 2;
                    const distance = Math.abs(viewportCenter - elementCenter);

                    // Calculate opacity and scale based on distance
                    // Relaxed transition: wider range of full opacity
                    const normalizedDistance = Math.min(distance / viewportHeight, 1);

                    // Opacity: 1 at center, stays 1 for a bit, then fades to 0.4
                    // Using a power curve to keep it visible longer
                    const opacity = Math.max(1 - Math.pow(normalizedDistance, 2) * 0.8, 0.4);

                    // Scale: 1 at center, 0.95 at edges (subtle)
                    const scale = Math.max(1 - normalizedDistance * 0.05, 0.95);

                    newSectionStyles[sectionId] = { opacity, scale };

                    if (element.offsetTop <= scrollY + viewportHeight / 3) {
                        currentSection = sectionId;
                    }
                }
            }

            setActiveSection(currentSection);
            setSectionStyles(newSectionStyles);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            <Pattern />
            <TopNav activeSection={activeSection} visible={showTopNav} />
            <Sidebar activeSection={activeSection} mode={sidebarState.mode} visible={sidebarState.visible} />

            <main className="flex w-full max-w-4xl flex-col items-center z-10">
                <section
                    id="hero"
                    className={baseSectionClasses}
                    style={{
                        opacity: sectionStyles["hero"]?.opacity ?? 1,
                        transform: `scale(${sectionStyles["hero"]?.scale ?? 1})`
                    }}
                >
                    <Hero />
                    <About />
                </section>

                <section
                    id="projects"
                    className={baseSectionClasses}
                    style={{
                        opacity: sectionStyles["projects"]?.opacity ?? 0.2,
                        transform: `scale(${sectionStyles["projects"]?.scale ?? 0.9})`
                    }}
                >
                    <Projects />
                </section>

                <section
                    id="blog"
                    className={baseSectionClasses}
                    style={{
                        opacity: sectionStyles["blog"]?.opacity ?? 0.2,
                        transform: `scale(${sectionStyles["blog"]?.scale ?? 0.9})`
                    }}
                >
                    <Blog posts={posts} />
                </section>

                <section
                    id="contact"
                    className={baseSectionClasses}
                    style={{
                        opacity: sectionStyles["contact"]?.opacity ?? 0.2,
                        transform: `scale(${sectionStyles["contact"]?.scale ?? 0.9})`
                    }}
                >
                    <Contact />
                </section>
            </main>
        </div>
    );
}
