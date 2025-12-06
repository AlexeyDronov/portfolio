import React, { Suspense } from "react";
import { getAllProjects } from "../lib/projectUtils";
import FilteredProjects from "../components/FilteredProjects";
import Pattern from "../components/UI/Background";
import Link from "next/link";

// This page displays all projects.
export default function ProjectsPage() {
    // Fetch all projects
    const projects = getAllProjects();

    return (
        <div className="relative flex min-h-screen w-full flex-col font-sans text-white items-center overflow-x-hidden">
            {/* Background pattern */}
            <Pattern />

            <main className="flex w-full max-w-4xl flex-col items-center z-10 px-6 md:px-12 py-12">
                {/* Back to Home link */}
                <div className="w-full mb-8">
                    <Link
                        href="/"
                        className="text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 flex items-center gap-2 w-fit"
                    >
                        &larr; Back to Home
                    </Link>
                </div>

                {/* Projects grid component showing all projects with filtering */}
                <Suspense fallback={<div className="text-white/40">Loading projects...</div>}>
                    <FilteredProjects projects={projects} />
                </Suspense>
            </main>
        </div>
    );
}
