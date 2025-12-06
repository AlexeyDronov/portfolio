"use client";
import React, { useState, useEffect } from "react";
import { FolderGit2, Home, User, PenTool, Mail, Briefcase } from "lucide-react";

export default function TopNavBar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Visible only when scroll < window height (Hero Section)
            // Using a threshold of 80% viewport height to fade it out before leaving hero entirely
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
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
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
                    >
                        <item.icon size={16} />
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
