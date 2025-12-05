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

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
    <div className="group flex flex-col md:flex-row justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
        <div className="flex flex-row gap-5 items-start md:max-w-2xl">
            {/* Logo */}
            <div className="relative shrink-0 w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white">
                <Image
                    src={item.img}
                    alt={`${item.company} logo`}
                    fill
                    className="object-contain p-0.5"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.position}
                    </h3>
                    <span className="text-base text-white/70 font-medium">
                        {item.company}
                    </span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed font-light">
                    {item.comments}
                </p>
            </div>
        </div>

        {/* Date */}
        <div className="flex justify-start md:justify-end shrink-0 md:pt-1">
            <span className="text-sm font-mono text-white/40 group-hover:text-blue-300/90 transition-colors bg-white/5 px-3 py-1.5 rounded-md h-fit whitespace-nowrap">
                {item.date}
            </span>
        </div>
    </div>
);

export default function Experience() {
    return (
        <div className="flex flex-col w-full gap-16">
            {/* Work Experience */}
            <div className="flex flex-col gap-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
                <div className="flex flex-col gap-4">
                    {workExperience.map((item) => (
                        <ExperienceCard key={item.id} item={item} />
                    ))}
                </div>
            </div>

            {/* Education Subsection */}
            <div className="flex flex-col gap-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white/90 border-b border-white/10 pb-2 inline-block w-fit">
                    Education
                </h3>
                <div className="flex flex-col gap-4">
                    {educationData.map((item) => (
                        <ExperienceCard key={item.id} item={item} />
                    ))}
                </div>
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
