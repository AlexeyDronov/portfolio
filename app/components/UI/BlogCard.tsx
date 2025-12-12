"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    description: string;
    date: string;
    slug: string;
}

/**
 * BlogCard Component
 * 
 * Displays a summary of a blog post and links to the full post.
 * 
 * Uses the three-level text hierarchy:
 * - FUNCTIONAL: Title (white, bold, prominent)
 * - SUPPLEMENTARY: Description (muted, readable)
 * - DIM: Date (very subtle, doesn't distract)
 * 
 * Emerald accent colors on hover for design consistency.
 */
export default function BlogCard({ title, description, date, slug, source }: BlogCardProps & { source?: string }) {
    const href = source ? `/blog/${slug}?from=${source}` : `/blog/${slug}`;

    return (
        <Link href={href} className="block">
            <article
                className="group flex flex-col gap-3 p-5 md:p-6 rounded-[4px] 
                           bg-surface/30 border border-surface-light/20 
                           transition-all duration-300 
                           hover:bg-surface/50 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                           hover:-translate-x-1 cursor-pointer"
            >
                {/* Header: Date (DIM) and Arrow Icon */}
                <div className="flex items-center justify-between">
                    {/* Date - DIM level hierarchy (very subtle) */}
                    <span className="text-xs sm:text-sm text-fg-dim font-mono tracking-wide">
                        {date}
                    </span>
                    {/* Arrow indicator for clickable element */}
                    <ArrowRight
                        className="text-fg-dim transition-all duration-300 
                                   group-hover:translate-x-2 group-hover:text-primary-light"
                        size={18}
                    />
                </div>

                {/* Title - FUNCTIONAL level hierarchy */}
                <h3 className="text-lg md:text-xl font-bold text-fg-primary 
                               group-hover:text-primary-light transition-colors duration-300">
                    {title}
                </h3>

                {/* Description - SUPPLEMENTARY level hierarchy */}
                <p className="text-sm md:text-base text-fg-secondary line-clamp-2 leading-relaxed">
                    {description}
                </p>
            </article>
        </Link>
    );
}

