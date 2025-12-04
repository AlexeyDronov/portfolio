"use client";

import React from "react";
import { navItems } from "../../lib/navConfig";

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

    // Visible when NOT in hero section
    const isVisible = activeSection !== "hero";

    return (
        <aside
            className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20 pointer-events-none"
                }`}
        >
            <div className="flex flex-col items-start gap-2 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300 w-full ${isActive
                                    ? "bg-white text-black"
                                    : "text-white/70 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            <Icon size={20} />
                            <span className="text-sm font-medium hidden xl:block">
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
