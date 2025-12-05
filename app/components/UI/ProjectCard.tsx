import React from "react";
import Image from "next/image";
import { Project } from "../../lib/projectUtils";

interface ProjectCardProps {
    project: Project; // The project data to display
}

// ProjectCard component
// Displays a preview of a project including image, title, description, and skills
export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div
            className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all overflow-hidden"
        >
            {/* Project Image */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black/20">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full text-white/20">
                        No Image
                    </div>
                )}
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-sm text-white/60 line-clamp-2">
                    {project.description}
                </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-2 py-1 text-xs font-medium text-white/60 bg-white/5 rounded-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
