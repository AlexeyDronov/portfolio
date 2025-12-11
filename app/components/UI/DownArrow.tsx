"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * DownArrow Component
 * 
 * An animated scroll indicator for the Hero section featuring:
 * - Two stacked chevron arrows with staggered bounce animation
 * - Larger bounding box with stretched vertical proportions
 * - More obtuse (flatter) arrow angles for a modern look
 * - Animation starts from a lower point for centered visual effect
 * - Subtle emerald glow effect using the primary accent color
 * 
 * The animation is designed to draw attention and encourage scrolling
 * without being distracting or annoying.
 */

interface DownArrowProps {
    onClick?: () => void; // Callback when the arrow is clicked
    targetId?: string;    // Optional target section ID for smooth scroll
}

export default function DownArrow({ onClick, targetId = "projects" }: DownArrowProps) {

    /**
     * Handle click to scroll to target section or trigger callback
     */
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            // Default behavior: scroll to target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            } else {
                // Fallback: scroll down one viewport height
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
        }
    };

    return (
        <button
            onClick={handleClick}
            className="group relative flex flex-col items-center justify-end
                       px-8 py-6 pb-4 rounded-full cursor-pointer
                       transition-all duration-300 ease-out
                       hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            aria-label="Scroll to next section"
        >
            {/* Subtle glow backdrop - visible on hover */}
            <div
                className="absolute inset-0 rounded-full bg-emerald-500/0 
                           group-hover:bg-emerald-500/10 
                           transition-colors duration-500 blur-lg"
                aria-hidden="true"
            />

            {/* Container for the two chevrons - offset start point for centered bounce */}
            {/* Using pt-2 to start animation from a lower point */}
            <div className="relative flex flex-col items-center -space-y-4 pt-2">
                {/* First Chevron - Top arrow, leads the animation */}
                {/* strokeWidth 1.5 makes the arrow more obtuse/flat */}
                <ChevronDown
                    className="w-8 h-8 text-white/35 
                               group-hover:text-emerald-400
                               transition-all duration-300
                               animate-bounce"
                    strokeWidth={1.5}
                    style={{
                        animationDuration: '2s',
                        animationTimingFunction: 'ease-in-out'
                    }}
                    aria-hidden="true"
                />

                {/* Second Chevron - Bottom arrow, follows with delay */}
                <ChevronDown
                    className="w-8 h-8 text-white/55 
                               group-hover:text-emerald-300
                               transition-all duration-300
                               animate-bounce"
                    strokeWidth={1.5}
                    style={{
                        animationDuration: '2s',
                        animationDelay: '0.12s',
                        animationTimingFunction: 'ease-in-out'
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Ring border - subtle outline that glows on hover */}
            <div
                className="absolute inset-0 rounded-full 
                           ring-1 ring-white/10 
                           group-hover:ring-emerald-500/30
                           transition-all duration-300"
                aria-hidden="true"
            />
        </button>
    );
}

