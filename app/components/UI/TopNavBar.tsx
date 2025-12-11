"use client";
import React, { useState, useEffect, useRef } from "react";
import { FolderGit2, Home, PenTool, Mail, Briefcase } from "lucide-react";

/**
 * TopNavBar Component
 * 
 * A persistent navigation bar that:
 * - Is visible across the entire page (not just hero)
 * - Hides when user scrolls down
 * - Reappears when user scrolls up OR hovers at the top of the screen
 * - Larger styling on desktop devices
 * - Icons-only on very small mobile screens
 */
export default function TopNavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovering, setIsHovering] = useState(false);
    const lastScrollY = useRef(0);
    const hoverZoneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    // Show navbar if:
                    // 1. Scrolling UP (current < last)
                    // 2. At the very top of the page
                    // 3. Hovering in the top zone
                    if (currentScrollY < lastScrollY.current || currentScrollY < 50 || isHovering) {
                        setIsVisible(true);
                    } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                        // Hide only when scrolling down AND past the initial 100px
                        setIsVisible(false);
                    }

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHovering]);

    // Handle mouse entering the top zone to show navbar
    const handleMouseEnter = () => {
        setIsHovering(true);
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Updated nav items order to match new section layout
    const navItems = [
        { id: "hero", label: "Home", icon: Home },
        { id: "projects", label: "Projects", icon: FolderGit2 },
        { id: "experience", label: "Experience", icon: Briefcase },
        { id: "blog", label: "Blog", icon: PenTool },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    return (
        <>
            {/* Invisible hover zone at the very top of the screen */}
            {/* This allows the navbar to reappear when user hovers at top */}
            <div
                ref={hoverZoneRef}
                className="fixed top-0 left-0 right-0 h-16 z-40"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                aria-hidden="true"
            />

            <nav
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center 
                           p-4 md:p-6 transition-all duration-300 transform 
                           ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
            >
                {/* Nav pill container - larger on desktop */}
                <div className="flex items-center gap-1 md:gap-2 p-2 md:p-3 rounded-full 
                               bg-slate-900/80 border border-white/10 backdrop-blur-lg shadow-xl">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2 md:py-2.5 
                                       text-sm md:text-base font-medium text-white/70 
                                       hover:text-emerald-400 hover:bg-white/10 
                                       rounded-full transition-all duration-300 cursor-pointer"
                        >
                            {/* Icon - larger on desktop */}
                            <item.icon size={16} className="md:w-5 md:h-5" />
                            {/* Hide text on very small screens, show on sm+ */}
                            <span className="hidden sm:inline">{item.label}</span>
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
}

