"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, GraduationCap } from "lucide-react";

const EXPERIENCES = [
    {
        id: 1,
        title: "Senior Frontend Engineer",
        company: "Tech Corp",
        date: "2023 - Present",
        description: "Leading the frontend team in building scalable web applications using Next.js and TypeScript. Improved performance by 40%.",
        // icon: "/icons/tech-corp.png" // Removed to prevent 404 until file exists
    },
    {
        id: 2,
        title: "Software Developer",
        company: "StartUp Inc",
        date: "2021 - 2023",
        description: "Developed and maintained full-stack features using React and Node.js. Collaborated with design team to implement pixel-perfect UIs.",
        // No icon - will use fallback
    },
    {
        id: 3,
        title: "Junior Developer",
        company: "Web Agency",
        date: "2019 - 2021",
        description: "Built responsive websites for various clients. Gained expertise in modern CSS and JavaScript frameworks.",
        // No icon
    }
];

const EDUCATION = [
    {
        id: 1,
        title: "BS Computer Science",
        company: "University of Tech",
        date: "2015 - 2019",
        description: "Focus on Software Engineering and Human-Computer Interaction.",
        // No icon
    },
    {
        id: 2,
        title: "Full Stack Bootcamp",
        company: "Coding Academy",
        date: "2019",
        description: "Intensive 12-week program covering MERN stack and modern web development practices.",
    }
];

const SKILLS = [
    "Python", "PyTorch", "Scikit-learn", "TensorFlow",
    "SQL", "PostgreSQL", "Docker", "FastAPI",
    "React", "Next.js", "TypeScript", "Tailwind"
];

export default function About() {
    // Skills Carousel State
    const [skillIndex, setSkillIndex] = useState(0);
    const visibleSkillsCount = 3; // Show 3-4 skills as requested

    useEffect(() => {
        const timer = setInterval(() => {
            nextSkill();
        }, 3000);
        return () => clearInterval(timer);
    }, [skillIndex]);

    const nextSkill = () => {
        setSkillIndex((prev) => (prev + 1) % SKILLS.length);
    };

    const prevSkill = () => {
        setSkillIndex((prev) => (prev - 1 + SKILLS.length) % SKILLS.length);
    };

    // Helper to get visible skills for sliding window
    // We render a few more to ensure smooth exit/enter if needed, 
    // but standard mapping of visible count is usually enough for basic slide.
    // To make it seamless, `AnimatePresence` needs distinct keys.
    const getVisibleSkills = () => {
        const skills = [];
        for (let i = 0; i < visibleSkillsCount; i++) {
            const index = (skillIndex + i) % SKILLS.length;
            skills.push({ name: SKILLS[index], key: `skill-${index}` }); // Stable key based on original index
        }
        return skills;
    };

    // Icon fallback component
    const CompanyIcon = ({ company, icon }: { company: string, icon?: string }) => {
        if (icon) {
            // In a real app, use next/image. For now using standard img tag or specific logic.
            // Since user asked for "If icon exists: Show image", we assume standard img tag for simplicity or Next.js Image if imported.
            // I'll use a simple img tag with fallback onError handling if needed, but styling as requested.
            // However, since I don't have actual images, this might break if I don't verify paths.
            // I will implement the structure.
            return (
                <img src={icon} alt={company} className="w-[50px] h-[50px] rounded-(--border-radius-sm) object-cover" />
            );
        }

        // Fallback
        return (
            <div className="w-[50px] h-[50px] rounded-(--border-radius-sm) bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-400">{company.charAt(0).toUpperCase()}</span>
            </div>
        );
    };

    return (
        <section className="w-full max-w-[1200px] mx-auto min-h-screen py-24 px-4">
            <div className="flex flex-col lg:flex-row gap-12">

                {/* LEFT COLUMN: Experience & Education (Desktop Layout: Left (2/3)) */}
                <div className="flex flex-col gap-8 order-2 lg:order-1 lg:w-2/3">

                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold text-primary flex items-center gap-2">
                            <Briefcase className="w-8 h-8" /> Experience
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
                                    <CompanyIcon company={exp.company} />
                                </div>

                                {/* Content Section - Right */}
                                <div className="flex flex-col w-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                            <h4 className="text-secondary font-mono text-sm">{exp.company}</h4>
                                        </div>
                                        <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-(--border-radius-sm) whitespace-nowrap">{exp.date}</span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mt-2">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Separator */}
                    <div className="relative py-8 flex items-center justify-center">
                        <div className="absolute w-full h-px bg-slate-800"></div>
                        <div className="relative w-2 h-2 bg-primary rotate-45"></div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <h2 className="text-3xl font-bold text-secondary flex items-center gap-2">
                            <GraduationCap className="w-8 h-8" /> Education
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
                                    <CompanyIcon company={edu.company} />
                                </div>

                                {/* Content Section - Right */}
                                <div className="flex flex-col w-full">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                                            <h4 className="text-secondary font-mono text-sm">{edu.company}</h4>
                                        </div>
                                        <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-(--border-radius-sm) whitespace-nowrap">{edu.date}</span>
                                    </div>
                                    <p className="text-text-secondary leading-relaxed mt-2">
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
                        <h2 className="text-3xl font-bold text-white mb-2 underline decoration-primary underline-offset-8">About Me</h2>
                        <p className="text-text-secondary leading-relaxed text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-text-secondary leading-relaxed text-lg">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    {/* Skills Carousel */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-white">Skills</h3>
                        </div>

                        {/* Carousel Container */}
                        <div className="relative w-full overflow-hidden min-h-[60px] flex items-center">
                            <motion.div
                                className="flex gap-3"
                            // We are not animating the container X, but the items layout. 
                            // Actually, for a "slide" effect, typically you animate the container or use layout animations.
                            // simpler: Layout animation with AnimatePresence on items.
                            >
                                <AnimatePresence mode="popLayout" initial={false}>
                                    {getVisibleSkills().map((skill) => (
                                        <motion.div
                                            key={skill.key}
                                            layout
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -50, opacity: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="shrink-0 px-4 py-2 border border-purple-500 rounded-[4px] text-text-secondary font-mono text-sm bg-primary/5 hover:bg-primary/10 transition-colors cursor-default min-w-[100px] text-center flex justify-center"
                                        >
                                            {skill.name}
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                        {/* Manual Controls */}
                        <div className="flex gap-4 mt-2">
                            <button
                                onClick={prevSkill}
                                className="p-2 border border-slate-700 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all group"
                                aria-label="Previous skill"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextSkill}
                                className="p-2 border border-slate-700 rounded-full hover:bg-primary hover:border-primary hover:text-white transition-all group"
                                aria-label="Next skill"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
