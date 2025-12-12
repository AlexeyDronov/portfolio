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
            className="group relative bg-surface/30 border border-surface-light/20 
                 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
                 transition-all duration-300 cursor-pointer overflow-hidden rounded-[4px]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
            aria-label={`View details for ${project.title}`}
        >
            {/* Image Section - Fixed aspect ratio */}
            <div className="relative h-48 bg-surface overflow-hidden">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-surface to-background" />
                )}

                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-background-dark/50 to-transparent" />

                {/* Hover indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-primary-light" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
                {/* Title - Primary hierarchy */}
                <h3 className="text-lg font-bold text-fg-primary tracking-tight 
                       group-hover:text-primary-light transition-colors duration-300">
                    {project.title}
                </h3>

                {/* Description - Secondary hierarchy */}
                {/* Ensure description exists before trying to render/clamp it. 
                    If it wasn't shown before, we can now show it as per requested design. */}
                <p className="text-sm text-fg-secondary leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                {/* Skills - Tertiary hierarchy */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-surface-light/20">
                    {project.skills.slice(0, 4).map((skill) => (
                        <span
                            key={skill}
                            className="px-2 py-1 bg-surface border border-surface-light/20 
                         text-fg-secondary text-xs tracking-wide rounded-[4px]
                         group-hover:border-primary/30 group-hover:text-primary-light
                         transition-colors duration-300"
                        >
                            {skill}
                        </span>
                    ))}
                    {project.skills.length > 4 && (
                        <span className="px-2 py-1 bg-surface/50 border border-transparent 
                                         text-fg-dim text-xs tracking-wide rounded-[4px]">
                            +{project.skills.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </article>
    );
}


