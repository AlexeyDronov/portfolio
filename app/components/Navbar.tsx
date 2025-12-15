"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoLinkedin, LogoGitHub, IconMail, IconHome, IconBlog, IconProjects } from "./Icons";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/", icon: IconHome },
        { name: "Projects", href: "/projects", icon: IconProjects },
        { name: "Blog", href: "/blog", icon: IconBlog },
    ];

    const socialIcons = [
        { icon: LogoGitHub, href: "https://github.com/alexeydronov" },
        { icon: LogoLinkedin, href: "https://linkedin.com/in/alexey-dronov" },
        { icon: IconMail, href: "mailto:alexey.dronov@outlook.com" },
    ];

    /* Helpers for Active State */
    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <nav className="fixed top-0 z-50 w-full h-16 md:h-20 bg-slate-950 border-b border-slate-700">
            <div className="max-w-[1200px] mx-auto h-full px-4 flex items-center justify-between">

                {/* Navigation Items */}
                <div className="flex items-center gap-4 md:gap-8">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`
                  relative flex items-center justify-center p-2 md:p-0 md:px-2 rounded-sm transition-colors duration-300 cursor-pointer
                  group
                  ${active ? "text-primary" : "text-text-secondary hover:text-text-primary"}
                  hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]
                `}
                                aria-current={active ? "page" : undefined}
                            >
                                {/* Desktop Indicator */}
                                <span
                                    className={`
                    hidden md:block absolute left-[-12px] top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-[1px]
                    transition-opacity duration-300 pointer-events-none
                    ${active ? "opacity-100" : "opacity-0"}
                  `}
                                />

                                {/* Desktop Text */}
                                <span className="hidden md:block font-mono text-sm tracking-wide pointer-events-none">
                                    {item.name}
                                </span>

                                {/* Mobile Icon */}
                                <span className="md:hidden block pointer-events-none">
                                    <Icon size={24} strokeWidth={2} />
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Contact Icons */}
                <div className="flex items-center gap-4">
                    {socialIcons.map((social, idx) => (
                        <a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-primary transition-colors hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] p-2 rounded-sm cursor-pointer"
                        >
                            <social.icon size={24} className="pointer-events-none" />
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
