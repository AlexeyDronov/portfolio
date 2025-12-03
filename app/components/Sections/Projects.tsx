import React from "react";
import ProjectCard, { Project } from "../UI/ProjectCard";

const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion. Features a responsive design, scroll spy navigation, and a creative background.",
        image: "/placeholder.png",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
        githubUrl: "https://github.com/alexeydronov/portfolio",
        demoUrl: "https://alexeydronov.com",
    },
    {
        title: "Data Analysis Tool",
        description: "A Python-based tool for analyzing large datasets. Includes data visualization, statistical analysis, and automated reporting features.",
        image: "/placeholder.png",
        tags: ["Python", "Pandas", "Matplotlib", "Data Science"],
        githubUrl: "https://github.com",
    },
    {
        title: "Machine Learning Model",
        description: "A predictive model for housing prices using XGBoost. Achieved 95% accuracy on the test dataset.",
        image: "/placeholder.png",
        tags: ["Machine Learning", "XGBoost", "Scikit-learn"],
        githubUrl: "https://github.com",
    },
];

export default function Projects() {
    return (
        <div className="flex flex-col w-full gap-12">
            <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
                <p className="text-white/60 max-w-2xl">
                    Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    );
}