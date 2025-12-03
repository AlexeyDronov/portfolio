"use client";

import React from "react";
import { ExternalLink, Github } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string; // URL to image or video thumbnail
    tags: string[];
    githubUrl?: string;
    demoUrl?: string;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group relative flex flex-col w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-1">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-black/50">
                {/* Placeholder for image - in a real app, use Next.js Image */}
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-4xl font-bold uppercase tracking-widest">
                    {project.title[0]}
                </div>
                {/* If image exists, uncomment below */}
                {/* <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /> */}
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                                aria-label="View Source"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 text-white/70 hover:bg-white/20 hover:text-white transition-all"
                                aria-label="View Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>

                <p className="text-white/60 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
