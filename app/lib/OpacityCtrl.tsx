"use client";

import React, { useRef, useState, useEffect } from "react";

interface OpacityCtrlProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number; // Distance from center where fade begins (0-1)
}

// OpacityCtrl
// Controls the opacity of its children based on their position relative to the viewport center.
// The effect is non-linear to ensure smooth transitions.
export default function OpacityCtrl({ children, className = "", threshold = 0.3 }: OpacityCtrlProps) {
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

                        // Calculate distance from center
                        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

                        // Max distance where element is fully transparent (e.g., completely out of view or close to edge)
                        // We want it to be fully visible at center, and fade out towards edges.
                        // Let's define the fade zone.
                        // If distance is 0 -> opacity 1.
                        // If distance is > viewportHeight/2 -> opacity 0 (or close to).

                        const maxDistance = viewportHeight * 0.7; // Fade out point

                        // Normalize distance (0 to 1)
                        let normalizedDist = Math.min(distanceFromCenter / maxDistance, 1);

                        // Non-linear function (e.g., quadratic ease-in-out inverted)
                        // 1 - x^2 gives a nice curve.
                        // Or 1 - x^1.5
                        const calculatedOpacity = Math.max(0, 1 - Math.pow(normalizedDist, 2));

                        // Clamp opacity
                        setOpacity(calculatedOpacity);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        // Initial check
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
            style={{ opacity: opacity, transition: 'opacity 0.1s ease-out' }} // Smooth out jitter
        >
            {children}
        </div>
    );
}
