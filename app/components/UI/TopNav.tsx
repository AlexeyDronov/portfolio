"use client";

import React from "react";
import { navItems } from "../../lib/navConfig";

interface TopNavProps {
    activeSection: string;
    visible?: boolean;
}

export default function TopNav({ activeSection, visible = true }: TopNavProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 flex justify-center py-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                }`}
        >
            <div className="flex items-center gap-2 md:gap-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${isActive
                                ? "bg-white text-black"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <Icon size={18} />
                            <span className="text-sm font-medium hidden md:block">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
