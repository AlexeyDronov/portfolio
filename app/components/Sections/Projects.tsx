"use client";
import { useState } from "react";
import ProjectModal from "../UI/ProjectModal";
import ProjectCard from "../UI/ProjectCard";
import { Project } from "../../lib/projectUtils";
import SectionHeader from "../UI/SectionHeader";

interface ProjectsProps {
    projects?: Project[]; // List of projects to display
    title?: string; // Section title
    showViewAll?: boolean; // Whether to show the "View All" link
}

// Projects section component
// Displays a grid of project cards
export default function Projects({ projects = [], title = "Projects", showViewAll = false }: ProjectsProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <div className="flex flex-col w-full gap-12 justify-center">
            {/* Header with Title and optional View All link */}
            <SectionHeader
                title={title}
                href={showViewAll ? "/projects" : undefined}
                linkText={showViewAll ? "View All Projects" : undefined}
            />

            {/* Grid of Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </div>
    );
}