import React from "react";
import { getAllProjects } from "@/app/lib/dataUtils";
import ProjectCard from "@/app/components/ProjectCard";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <main className="min-h-screen w-full max-w-[1200px] mx-auto pt-32 pb-24 px-4">
            <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
                <p className="text-xl text-text-secondary max-w-2xl">
                    A collection of digital experiments, full-stack applications, and open source contributions.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                ))}
            </div>
        </main>
    );
}
