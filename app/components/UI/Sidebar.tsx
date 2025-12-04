"use client";

import React from "react";
import { Home, Folder, BookOpen, Mail } from "lucide-react";

const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "contact", label: "Contact", icon: Mail },
];

interface SidebarProps {
    activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-8 transition-all duration-500 ${activeSection === "hero" ? "opacity-0 -translate-x-full pointer-events-none" : "opacity-100 translate-x-0"
            }`}>
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group flex items-center gap-4 transition-all duration-300 cursor-pointer ${isActive ? "scale-110" : "opacity-50 hover:opacity-100"
                            }`}
                        aria-label={item.label}
                    >
                        <div
                            className={`p-3 rounded-full transition-all duration-300 ${isActive
                                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                : "bg-white/10 text-white hover:bg-white/20"
                                }`}
                        >
                            <Icon size={24} />
                        </div>
                        <span
                            className={`absolute left-full ml-4 px-2 py-1 rounded bg-white/10 text-white text-sm whitespace-nowrap opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none`}
                        >
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
}
