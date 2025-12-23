import React from "react";

interface SectionHeadingProps {
    /** The main title text */
    title: string;
    /** Optional icon element to display before the geometric prefix */
    icon?: React.ReactNode;
    /** Optional subtitle text displayed below the title */
    subtitle?: string;
}

/**
 * A reusable section heading component with a geometric accent prefix.
 * Provides consistent styling across all major sections of the site.
 */
export default function SectionHeading({ title, icon, subtitle }: SectionHeadingProps) {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold text-white font-mono flex items-center gap-3">
                {icon ? (
                    <span className="text-primary">{icon}</span>
                ) : (
                    <span className="text-primary font-mono">//</span>
                )}
                <span>{title}</span>
            </h2>
            {subtitle && (
                <p className="text-text-secondary text-sm font-sans ml-10">{subtitle}</p>
            )}
        </div>
    );
}
