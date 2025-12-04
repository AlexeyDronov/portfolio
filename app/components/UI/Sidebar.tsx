"use client";

import React from "react";
import { navItems } from "../../lib/navConfig";

interface SidebarProps {
    activeSection: string;
    mode?: "full" | "icon";
    visible?: boolean;
}

export default function Sidebar({ activeSection, mode = "full", visible = true }: SidebarProps) {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <aside
            className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 transition-all duration-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20 pointer-events-none"
                }`}
        >
            <div className={`flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 ${mode === "icon" ? "w-fit" : "w-48 items-start"
                }`}>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`group flex items-center px-3 py-2 rounded-xl transition-all duration-300 w-full ${isActive
                                ? "bg-white text-black"
                                : "text-white/70 hover:text-white hover:bg-white/10"
                                } ${mode === "full" ? "gap-3" : "justify-center"}`}
                            title={mode === "icon" ? item.label : undefined}
                        >
                            <Icon size={20} className="shrink-0" />
                            <span className={`text-sm font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${mode === "icon" ? "w-0 opacity-0" : "w-auto opacity-100"
                                }`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </aside>
    );
}
