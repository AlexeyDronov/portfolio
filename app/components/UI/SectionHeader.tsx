import React from "react";
import ArrowLink from "./ArrowLink";

interface SectionHeaderProps {
    title: string;
    href?: string;
    linkText?: string;
}

/**
 * Reusable Section Header Component
 * 
 * Displays a section title and an optional "View All" link.
 * Uses FUNCTIONAL level text hierarchy:
 * - Large enough to establish section context
 * - Not as prominent as KEY information (hero name)
 * - Emerald accent on hover for consistency with design system
 */
export default function SectionHeader({ title, href, linkText }: SectionHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            {/* Section Title - FUNCTIONAL level hierarchy */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/95 
                           tracking-tight">
                {title}
            </h2>
            {/* Optional link - SUPPLEMENTARY level hierarchy */}
            {href && linkText && (
                <ArrowLink href={href}>
                    {linkText}
                </ArrowLink>
            )}
        </div>
    );
}

