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
                   rounded-[4px] bg-surface/30 border border-surface-light/20 
                   hover:border-primary/20 hover:bg-surface/50 
                   transition-all duration-300"
    >
        <div className="flex flex-row gap-4 md:gap-5 items-start md:max-w-2xl">
            {/* Logo container - Clean, minimal, consistent size */}
            <div className="relative shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-[4px] overflow-hidden 
                            border border-surface-light/20 bg-white">
                <Image
                    src={item.img}
                    alt={`${item.company} logo`}
                    fill
                    className="object-contain p-1.5"
                />
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-0.5">
                    {/* Position - FUNCTIONAL hierarchy */}
                    <h3 className="text-lg md:text-xl font-bold text-fg-primary 
                                   group-hover:text-primary-light transition-colors duration-300">
                        {item.position}
                    </h3>
                    {/* Company - SUPPLEMENTARY hierarchy */}
                    <span className="text-sm md:text-base text-fg-secondary font-medium">
                        {item.company}
                    </span>
                </div>
                {/* Comments/Description - DIM hierarchy */}
                <p className="text-sm text-fg-dim leading-relaxed">
                    {item.comments}
                </p>
            </div>
        </div>

        {/* Date Badge - DIM hierarchy */}
        <div className="flex justify-start md:justify-end shrink-0 md:pt-1">
            <span className="text-xs md:text-sm font-mono text-fg-dim 
                             group-hover:text-primary-light/80 transition-colors duration-300 
                             bg-surface/30 px-2.5 md:px-3 py-1 md:py-1.5 rounded-[4px] h-fit whitespace-nowrap">
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
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fg-primary tracking-tight">
                    Experience
                </h2>
                <div className="flex flex-col gap-4">
                    {workExperience.map((item, index) => (
                        <ExperienceCard key={index} item={item} />
                    ))}
                </div>
            </div>

            {/* Visual Separator - Double line for distinction */}
            <div className="flex items-center gap-3" aria-hidden="true">
                <div className="flex-1 h-px bg-surface-light/20" />
                <div className="w-2 h-2 rounded-full bg-primary/30" />
                <div className="flex-1 h-px bg-surface-light/20" />
            </div>

            {/* Education Section - No header, separator provides visual distinction */}
            <div className="flex flex-col gap-4">
                {educationData.map((item, index) => (
                    <ExperienceCard key={index} item={item} />
                ))}
            </div>

            {/* Resume Download Link */}
            <div className="flex justify-start">
                <Link
                    href="/Alexey Dronov CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-fg-secondary hover:text-fg-primary border-b border-surface-light/20 hover:border-primary transition-all pb-1 group"
                >
                    <span className="font-mono text-sm uppercase tracking-wider">View Full Resume</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
            </div>
        </div>
    );
}
