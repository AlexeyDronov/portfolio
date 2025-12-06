"use client";
import React, { useState, useEffect } from "react";
import { FolderGit2, Home, User, PenTool, Mail, Briefcase } from "lucide-react";

export default function TopNavBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Visible only when scroll < Hero Section Height (minus small buffer)
                    // The transition happens exactly when leaving the hero.
                    // Assuming Hero is 100dvh.
                    const threshold = window.innerHeight - 100;

                    if (window.scrollY > threshold) {
                        setIsVisible(false);
                    } else {
                        setIsVisible(true);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "hero", label: "Home", icon: Home },
        { id: "projects", label: "Projects", icon: FolderGit2 },
        { id: "blog", label: "Blog", icon: PenTool },
        { id: "experience", label: "Experience", icon: Briefcase },
        { id: "contact", label: "Contact", icon: Mail },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center p-6 transition-all duration-500 transform ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex items-center gap-1 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all cursor-pointer"
                    >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
