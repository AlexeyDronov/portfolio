import React from "react";
import Image from "next/image";
import { Project } from "../../lib/projectUtils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: Project; // The project data to display
    onClick?: () => void; // Click handler to open modal
}

/**
 * ProjectCard Component (Compact Design)
 * 
 * A refined card design featuring:
 * - Smaller, contained image with fixed aspect ratio
 * - Text content with clear visual hierarchy
 * - Skills displayed below with dark background for visibility
 * - Subtle hover effects without overwhelming scale
 * 
 * Optimized for narrower container widths (max-w-3xl)
 */
export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <article
            onClick={onClick}
            className="group relative flex flex-col rounded-xl overflow-hidden cursor-pointer
                       bg-white/5 border border-white/10
                       transition-all duration-300 ease-out
                       hover:bg-white/8 hover:border-emerald-500/20
                       focus-within:ring-2 focus-within:ring-emerald-500/50"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
            aria-label={`View details for ${project.title}`}
        >
            {/* Image Container - Compact aspect ratio */}
            <div className="relative w-full aspect-2/1 overflow-hidden bg-slate-900/50">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out
                                   group-hover:scale-105"
                    />
                ) : (
                    /* Fallback gradient when no image is available */
                    <div className="absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900" />
                )}

                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* Emerald Glow Effect on Hover */}
                <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 
                                transition-colors duration-300" />
            </div>

            {/* Content Area */}
            <div className="flex flex-col gap-3 p-4 md:p-5">
                {/* Title Row with Arrow Indicator */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base md:text-lg font-bold text-white
                                   transition-colors duration-300
                                   group-hover:text-emerald-400">
                        {project.title}
                    </h3>

                    {/* Arrow Icon - indicates clickable */}
                    <ArrowUpRight
                        className="w-4 h-4 text-white/30 shrink-0 mt-1
                                   transition-all duration-300
                                   group-hover:text-emerald-400
                                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                </div>

                {/* Description - truncated to 2 lines */}
                {/* <p className="text-sm text-white/45 line-clamp-2 leading-relaxed
                              transition-colors duration-300
                              group-hover:text-white/55">
                    {project.description}
                </p> */}

                {/* Skills Tags - Below content with dark background for visibility */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.skills.slice(0, 4).map((skill) => (
                        <span
                            key={skill}
                            className="px-2 py-0.5 text-xs font-medium
                                       bg-slate-800/80 text-white/60
                                       border border-white/5 rounded-md
                                       transition-all duration-300
                                       group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20
                                       group-hover:text-emerald-200"
                        >
                            {skill}
                        </span>
                    ))}
                    {/* Show +N if more skills exist */}
                    {project.skills.length > 4 && (
                        <span className="px-2 py-0.5 text-xs font-medium
                                        bg-slate-800/50 text-white/40 rounded-md">
                            +{project.skills.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}


