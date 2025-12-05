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

// BlogCard component
// Displays a summary of a blog post and links to the full post
export default function BlogCard({ title, description, date, slug }: BlogCardProps) {
    return (
        <Link href={`/blog/${slug}`} className="block">
            <div className="group flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-x-1 cursor-pointer">
                {/* Header: Date and Arrow Icon */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-white/40 font-mono">{date}</span>
                    <ArrowRight className="text-white/40 transition-transform duration-300 group-hover:translate-x-2 group-hover:text-white" size={20} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {title}
                </h3>

                {/* Description (truncated to 2 lines) */}
                <p className="text-white/60 line-clamp-2">
                    {description}
                </p>
            </div>
        </Link>
    );
}
