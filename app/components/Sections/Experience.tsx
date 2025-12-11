import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ExperienceItem {
    id: string;
    position: string;
    company: string;
    comments: string;
    date: string;
    img: string;
}

const workExperience: ExperienceItem[] = [
    {
        id: "1",
        position: "Business Analyst",
        company: "Blackmont Consulting",
        comments: "Led the development of the main platform, improving performance by 40% and mentoring junior developers.",
        date: "Jan 2025 - Present",
        img: "/images/blackmont.png"
    },
    {
        id: "2",
        position: "Project Coordinator",
        company: "The University of Edinburgh",
        comments: "Developed full-stack features for client projects using React and Node.js. Implemented CI/CD pipelines.",
        date: "Jun 2022 - Aug 2022",
        img: "/images/uoe-crest.png"
    },
];

const educationData: ExperienceItem[] = [
    {
        id: "edu-1",
        position: "BSc Computer Science",
        company: "The University of Edinburgh",
        comments: "First Class Honours. Specialized in Artificial Intelligence and Software Engineering.",
        date: "Sep 2021 - Jun 2025",
        img: "/images/uoe-crest.png" // Assuming same logo for now
    },
];

/**
 * ExperienceCard Component
 * 
 * Displays a single experience/education entry with:
 * - Company logo
 * - Position title (FUNCTIONAL hierarchy)
 * - Company name (SUPPLEMENTARY hierarchy)
 * - Description (SUPPLEMENTARY hierarchy)
 * - Date badge (DIM hierarchy)
 * 
 * Uses emerald accent colors on hover for design consistency.
 */
const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <article
        className="group flex flex-col md:flex-row justify-between gap-5 p-5 md:p-6 
                   rounded-2xl bg-white/5 border border-white/10 
                   hover:border-emerald-500/20 hover:bg-white/10 
                   transition-all duration-300"
    >
        <div className="flex flex-row gap-4 md:gap-5 items-start md:max-w-2xl">
            {/* Company Logo */}
            <div className="relative shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full overflow-hidden 
                            border border-white/10 bg-white">
                <Image
                    src={item.img}
                    alt={`${item.company} logo`}
                    fill
                    className="object-contain p-0.5"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                    {/* Position - FUNCTIONAL hierarchy */}
                    <h3 className="text-lg md:text-xl font-bold text-white 
                                   group-hover:text-emerald-400 transition-colors duration-300">
                        {item.position}
                    </h3>
                    {/* Company - SUPPLEMENTARY hierarchy */}
                    <span className="text-sm md:text-base text-white/60 font-medium">
                        {item.company}
                    </span>
                </div>
                {/* Description - SUPPLEMENTARY hierarchy */}
                <p className="text-sm text-white/45 leading-relaxed">
                    {item.comments}
                </p>
            </div>
        </div>

        {/* Date Badge - DIM hierarchy */}
        <div className="flex justify-start md:justify-end shrink-0 md:pt-1">
            <span className="text-xs md:text-sm font-mono text-white/35 
                             group-hover:text-emerald-400/80 transition-colors duration-300 
                             bg-white/5 px-2.5 md:px-3 py-1 md:py-1.5 rounded-md h-fit whitespace-nowrap">
                {item.date}
            </span>
        </div>
    </article>
);

export default function Experience() {
    return (
        <div className="flex flex-col w-full gap-12">
            {/* Work Experience */}
            <div className="flex flex-col gap-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white/95 tracking-tight">
                    Experience
                </h2>
                <div className="flex flex-col gap-4">
                    {workExperience.map((item) => (
                        <ExperienceCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Visual Separator - Double line for distinction */}
            <div className="flex items-center gap-3" aria-hidden="true">
                <div className="flex-1 h-px bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                <div className="flex-1 h-px bg-white/10" />
            </div>

            {/* Education Section - No header, separator provides visual distinction */}
            <div className="flex flex-col gap-4">
                {educationData.map((item) => (
                    <ExperienceCard key={item.id} item={item} />
                ))}
            </div>

            {/* Resume Link */}
            <div>
                <Link
                    href="/Alexey Dronov CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white border-b border-white/20 hover:border-white transition-all pb-1 group"
                >
                    <span className="font-mono text-sm uppercase tracking-wider">View Full Resume</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
            </div>
        </div>
    );
}
