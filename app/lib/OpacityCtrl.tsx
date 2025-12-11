"use client";

import React, { useRef, useState, useEffect } from "react";

interface OpacityCtrlProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number; // Not used in current implementation, kept for API compatibility
}

/**
 * OpacityCtrl Component
 * 
 * Controls the opacity of its children based on their position relative to the viewport center.
 * 
 * Key features:
 * - Minimum opacity of 0.5 ensures content is ALWAYS readable
 * - Gentle linear fade (not aggressive quadratic)
 * - Large fade zone for smooth transitions
 * - Works well on both desktop and mobile (touch scrolling)
 * 
 * The effect creates visual focus on the center content without hiding off-screen elements.
 */
export default function OpacityCtrl({ children, className = "" }: OpacityCtrlProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (ref.current) {
                        const rect = ref.current.getBoundingClientRect();
                        const viewportHeight = window.innerHeight;
                        const viewportCenter = viewportHeight / 2;
                        const elementCenter = rect.top + rect.height / 2;

                        // Calculate distance from viewport center
                        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

                        // Extended fade zone - element starts fading when far from center
                        // Using 85% of viewport height as the max distance
                        const maxDistance = viewportHeight * 0.85;

                        // Normalize distance (0 = at center, 1 = at max distance)
                        const normalizedDist = Math.min(distanceFromCenter / maxDistance, 1);

                        // MINIMUM OPACITY: 0.45 ensures elements are ALWAYS visible
                        // Slightly more fade than before (was 0.5) for more pronounced effect
                        // Formula: 1.0 at center, gradually fades to 0.45 at edges
                        const minOpacity = 0.45;
                        const calculatedOpacity = 1 - (normalizedDist * (1 - minOpacity));

                        setOpacity(calculatedOpacity);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Listen to scroll and resize events
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        // Initial calculation on mount
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            // Smooth transition for opacity changes to prevent jarring updates
            style={{ opacity: opacity, transition: 'opacity 0.15s ease-out' }}
        >
            {children}
        </div>
    );
}

