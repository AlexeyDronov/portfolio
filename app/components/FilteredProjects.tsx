"use client";
import React, { useState, useEffect } from "react";
import ProjectCard from "./UI/ProjectCard";
import FilterDashboard from "./UI/FilterDashboard";
import ProjectModal from "./UI/ProjectModal";
import { Project } from "../lib/projectUtils";
import { useSearchParams, useRouter } from "next/navigation";

interface FilteredProjectsProps {
    projects: Project[];
}

export default function FilteredProjects({ projects }: FilteredProjectsProps) {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // URL handling for modal
    const searchParams = useSearchParams();
    const router = useRouter();
    const projectSlug = searchParams.get("project");

    // Effect to open modal if URL param exists
    useEffect(() => {
        if (projectSlug) {
            const project = projects.find((p) => p.slug === projectSlug);
            if (project) {
                setSelectedProject(project);
            }
        } else {
            setSelectedProject(null);
        }
    }, [projectSlug, projects]);

    const handleProjectClick = (project: Project) => {
        router.push(`?project=${project.slug}`, { scroll: false });
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        router.push("/projects", { scroll: false });
    };

    // Extract unique topics from projects
    const allTopics = Array.from(new Set(projects.map((p) => p.topic).filter(Boolean)));

    // Filter projects
    const filteredProjects = selectedTopics.length === 0
        ? projects
        : projects.filter((project) => selectedTopics.includes(project.topic));

    return (
        <div className="flex flex-col w-full">
            <FilterDashboard
                title="Filter by Topic"
                options={allTopics}
                selected={selectedTopics}
                onChange={setSelectedTopics}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-white/40">
                    No projects found for the selected topics.
                </div>
            )}

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={handleCloseModal}
                />
            )}
        </div>
    );
}
