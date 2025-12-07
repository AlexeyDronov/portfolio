import React from "react";
import ArrowLink from "./ArrowLink";

interface SectionHeaderProps {
    title: string;
    href?: string;
    linkText?: string;
}

// Reusable Section Header Component
// Displays a title and an optional "View All" link
export default function SectionHeader({ title, href, linkText }: SectionHeaderProps) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <h2 className="text-4xl md:text-5xl font-mono text-white">{title}</h2>
            {href && linkText && (
                <ArrowLink href={href}>
                    {linkText}
                </ArrowLink>
            )}
        </div>
    );
}
