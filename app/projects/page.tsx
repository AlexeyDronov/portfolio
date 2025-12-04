import React from "react";
import { getAllProjects } from "../lib/projectUtils";
import Projects from "../components/Sections/Projects";
import Pattern from "../components/UI/Background";
import Link from "next/link";

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            <Pattern />

            <main className="flex w-full max-w-4xl flex-col items-center z-10 px-6 md:px-12 py-12">
                <div className="w-full mb-8">
                    <Link
                        href="/"
                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                    >
                        &larr; Back to Home
                    </Link>
                </div>

                <Projects projects={projects} title="All Projects" showViewAll={false} />
            </main>
        </div>
    );
}
