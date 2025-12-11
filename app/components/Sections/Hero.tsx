import React from "react";
import DownArrow from "../UI/DownArrow";

/**
 * Hero Section Component
 * 
 * The main landing/introduction section of the portfolio featuring:
 * - Large heading with the user's name (Key information)
 * - Tagline/description (Supplementary information - slightly dimmer)
 * - Animated scroll indicator using the DownArrow component
 * 
 * Uses the three-level text hierarchy:
 * - Key: Name (bright white, large, bold)
 * - Functional: Not used here (nav handles this)
 * - Supplementary: Tagline (muted, smaller weight)
 */
export default function Hero() {
    return (
        <section
            className="flex w-full flex-col items-center justify-center gap-8 
                       animate-in fade-in slide-in-from-bottom-8 duration-1000 
                       text-center py-8"
        >
            {/* Main Heading - KEY INFORMATION */}
            {/* Large, bold, high contrast - draws immediate attention */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
                           font-bold font-mono text-white tracking-tight">
                Hi, I&apos;m Alexey.
            </h1>

            {/* Tagline - SUPPLEMENTARY INFORMATION */}
            {/* Smaller, muted color - provides context without competing with name */}
            <p className="text-lg sm:text-xl md:text-2xl 
                          font-light text-white/50 tracking-wide 
                          max-w-2xl leading-relaxed">
                Full-stack developer passionate about building elegant solutions
                and crafting exceptional user experiences.
            </p>

            {/* Scroll Indicator - Action promoting element */}
            {/* Uses the new DownArrow component with animated double chevrons */}
            <div className="mt-8">
                <DownArrow targetId="projects" />
            </div>
        </section>
    );
}