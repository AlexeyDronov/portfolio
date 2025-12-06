"use client";
import React, { useEffect, useState } from "react";
import { Home, Briefcase, PenTool, Calendar, Mail, User } from "lucide-react";

interface NavItem {
    id: string;
    label: string;
    icon: React.ElementType;
}

const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: Home },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "blog", label: "Blog", icon: PenTool },
    { id: "experience", label: "Experience", icon: Calendar },
    { id: "contact", label: "Contact", icon: Mail },
];

export default function SideBar() {
    const [activeSection, setActiveSection] = useState<string>("hero");
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldRender, setShouldRender] = useState(true);

    // Scroll to section handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            // Offset for scroll to ensure title isn't hidden
            const offset = 0; // Adjust if you have a fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const threshold = window.innerHeight - 100; // Matches TopNavBar

                    // 1. Visibility Logic
                    // Show sidebar only after leaving Hero
                    if (scrollY > threshold) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }

                    // 2. Active Section Logic
                    let currentSection = "";
                    let maxVisibility = 0;

                    navItems.forEach(({ id }) => {
                        const element = document.getElementById(id);
                        if (element) {
                            const rect = element.getBoundingClientRect();
                            const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

                            const intersectionTop = Math.max(0, rect.top);
                            const intersectionBottom = Math.min(viewHeight, rect.bottom);
                            const intersectionHeight = Math.max(0, intersectionBottom - intersectionTop);

                            if (intersectionHeight > maxVisibility) {
                                maxVisibility = intersectionHeight;
                                currentSection = id;
                            }
                        }
                    });

                    if (currentSection) {
                        setActiveSection(currentSection);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 1024) {
                setShouldRender(false);
            } else if (width < 1440) {
                setShouldRender(true);
                setIsExpanded(false);
            } else {
                setShouldRender(true);
                setIsExpanded(true);
            }
        };

        // Initial checks
        handleScroll();
        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // If screen is too small, don't render anything
    if (!shouldRender) return null;

    return (
        <nav
            className={`fixed left-8 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8 pointer-events-none"
                }`}
        >
            <div
                className={`flex flex-col gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 ${isExpanded ? "w-48" : "w-14 items-center"
                    }`}
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`flex items-center gap-3 p-2 rounded-xl transition-all duration-300 group ${isActive
                                ? "bg-white/10 text-white shadow-lg"
                                : "text-white/40 hover:text-white hover:bg-white/5"
                                } ${isExpanded ? "justify-start px-3" : "justify-center"} cursor-pointer`}
                            title={isExpanded ? "" : item.label}
                        >
                            <div className={`relative flex items-center justify-center transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-110"}`}>
                                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                            </div>

                            {/* Text label - hidden when collapsed, animated when expanded */}
                            <div
                                className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${isExpanded ? "w-auto opacity-100" : "w-0 opacity-0"
                                    }`}
                            >
                                <span className={`text-sm font-medium ${isActive ? "text-white" : ""}`}>
                                    {item.label}
                                </span>
                            </div>

                            {/* Active Indicator Dot (Collapsed Mode) */}
                            {!isExpanded && isActive && (
                                <div className="absolute right-1 w-1 h-1 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}
