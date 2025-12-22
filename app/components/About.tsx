"use client";

import { IconExperience, IconEducation, IconRightUpArrow } from "./Icons";
import Link from "next/link";

interface ExperienceItem {
    id: number;
    title: string;
    company: string;
    date: string;
    description: string;
    icon?: string;
}

const EXPERIENCES: ExperienceItem[] = [
    {
        id: 1,
        title: "Business Analyst",
        company: "Blackmont Consulting",
        date: "2025 - Present",
        description: "Led a team of 3 consultants developing legal and operational business toolkits that enabled client expansion into North American and Indian markets (50% growth)",
        // icon: "/icons/tech-corp.png" 
        icon: '/blackmont.jpeg'
    },
];

const EDUCATION: ExperienceItem[] = [
    {
        id: 1,
        title: "MSc Data Science",
        company: "University of Edinburgh",
        date: "2024 - 2025",
        description: "Developed a multimodal financial prediction pipeline improving MAE by 16% from the baseline. Specialised in NLP, Data Engineering, and ML methods.",
        icon: '/UoE.png'
    },
    {
        id: 2,
        title: "BSc Mathematics",
        company: "University of Edinburgh",
        date: "2020 - 2024",
        description: "Focus on Statistics, Applied Mathematics and Computational Differential Equations.",
        icon: '/UoE.png'
    },
];

const SKILLS = [
    "Python", "Scala", "SQL",
    "PyTorch", "Sklearn", "TensorFlow",
    "Docker", "FastAPI"
];

const ABOUT = [
    `
    Hey world! I’m Alexey Dronov, I grew up in Russia, deciding to move to the UK in pursuit of better education, job opportunities, and personal freedoms, choosing Edinburgh as my destination.
    `,
    `
    During my undergraduate years I pursued Mathematics, but realised the realm of abstraction was too abstract for me and decided to pivot into programming. Data Science Master’s was but a natural transition.
    `,
    `
    Currently, I’m building cool projects and apps, writing blog posts (more coming soon!), and trying to figure out what’s the meaning of it all. Enjoy my little corner of the internet!
    `
]

export default function About() {

    // Icon fallback component
    const CompanyIcon = ({ company, icon }: { company: string, icon?: string }) => {
        if (icon) {
            // In a real app, use next/image. For now using standard img tag or specific logic.
            // Since user asked for "If icon exists: Show image", we assume standard img tag for simplicity or Next.js Image if imported.
            // I'll use a simple img tag with fallback onError handling if needed, but styling as requested.
            // However, since I don't have actual images, this might break if I don't verify paths.
            // I will implement the structure.
            return (
                <img src={icon} alt={company} className="w-12 h-12 rounded-(--border-radius-sm) object-cover" />
            );
        }

        // Fallback
        return (
            <div className="w-12 h-12 rounded-(--border-radius-sm) bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-400">{company.charAt(0).toUpperCase()}</span>
            </div>
        );
    };

    return (
        <section className="w-full max-w-[1200px] mx-auto min-h-screen py-24 px-4">
            <div className="flex flex-col lg:flex-row gap-16">

                {/* LEFT COLUMN: Experience & Education (Desktop Layout: Left (2/3)) */}
                <div className="flex flex-col gap-8 order-2 lg:order-1 lg:w-2/3">

                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold flex items-center text-primary gap-2 font-mono">
                            <IconExperience className="w-8 h-8" /> <span className="text-text-primary">Experience</span>
                        </h2>
                    </div>

                    {EXPERIENCES.map((exp) => (
                        <div
                            key={exp.id}
                            className="border border-slate-700 rounded-(--border-radius-sm) p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 bg-slate-900/40 backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Icon Section - Left */}
                                <div className="shrink-0">
                                    <CompanyIcon company={exp.company} icon={exp.icon} />
                                </div>

                                {/* Content Section - Right */}
                                <div className="flex flex-col w-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-mono">{exp.title}</h3>
                                            <h4 className="text-secondary font-mono text-sm">{exp.company}</h4>
                                        </div>
                                        <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-(--border-radius-sm) whitespace-nowrap">{exp.date}</span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mt-2 font-grotesk text-lg">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Separator */}
                    <div className="flex items-center justify-center w-full py-8 gap-4">
                        {/* Left Line */}
                        <div className="flex-1 h-px bg-slate-800"></div>
                        {/* Center Square */}
                        <div className="w-2 h-2 bg-primary rotate-45 shrink-0"></div>
                        {/* Right Line */}
                        <div className="flex-1 h-px bg-slate-800"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold text-secondary flex items-center gap-2 font-mono">
                            <IconEducation className="w-8 h-8" /> <span className="text-text-primary">Education</span>
                        </h2>
                    </div>

                    {EDUCATION.map((edu) => (
                        <div
                            key={edu.id}
                            className="border border-slate-700 rounded-(--border-radius-sm) p-6 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all duration-300 bg-slate-900/40 backdrop-blur-sm"
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Icon Section - Left */}
                                <div className="shrink-0">
                                    <CompanyIcon company={edu.company} icon={edu.icon} />
                                </div>

                                {/* Content Section - Right */}
                                <div className="flex flex-col w-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white font-mono">{edu.title}</h3>
                                            <h4 className="text-secondary font-mono text-sm">{edu.company}</h4>
                                        </div>
                                        <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-(--border-radius-sm) whitespace-nowrap">{edu.date}</span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mt-2 font-grotesk text-lg">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                {/* RIGHT COLUMN: About & Skills (Desktop Layout: Left (1/3)) */}
                <div className="flex flex-col gap-12 order-1 lg:order-2 lg:w-1/3">

                    {/* About Text */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-white mb-2 font-mono">About Me</h2>
                        {ABOUT.map((par, index) => (
                            <p key={index} className="text-text-secondary leading-relaxed text-lg font-grotesk">
                                {par.trim()}
                            </p>
                        ))}

                        <Link
                            href="/Alexey Dronov CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-primary hover:text-primary transition-colors flex items-center gap-2 border-main w-fit mt-2 font-mono"
                        >
                            View Resume <IconRightUpArrow size={18} />
                        </Link>
                    </div>

                    {/* Skills Carousel */}
                    <div className="flex flex-col gap-4">
                        {/* <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white font-mono">Skills</h3>
                        </div> */}

                        {/* Carousel Container */}
                        <div className="relative w-full overflow-hidden min-h-[40px] flex items-center mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
                            <div className="flex gap-3 w-max animate-scroll hover:pause-on-hover">
                                {/* Duplicate skills to ensure seamless looping */}
                                {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                                    <div
                                        key={`${skill}-${index}`}
                                        className="shrink-0 px-4 py-2 border border-secondary rounded-(--border-radius-sm) text-text-primary font-mono text-sm bg-primary/5 hover:bg-primary/10 transition-colors cursor-default min-w-[100px] text-center flex justify-center"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
