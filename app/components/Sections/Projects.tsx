"use client"
import React, { useState } from "react";
import ProjectCard from "../UI/ProjectCard";
import ProjectModal from "../UI/ProjectModal";
import { Project } from "../../lib/projectUtils";
import Link from "next/link";

interface ProjectsProps {
    projects?: Project[];
    title?: string;
    showViewAll?: boolean;
}

export default function Projects({ projects = [], title = "Projects", showViewAll = false }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="flex flex-col w-full gap-12 justify-center">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
                </div>
                {showViewAll && (
                    <Link
                        href="/projects"
                        className="text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1"
                    >
                        View All Projects &rarr;
                    </Link>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
}