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
        description: "Leading the frontend team in building scalable web applications using Next.js and TypeScript. Improved performance by 40%."
    },
    {
        id: 2,
        title: "Software Developer",
        company: "StartUp Inc",
        date: "2021 - 2023",
        description: "Developed and maintained full-stack features using React and Node.js. Collaborated with design team to implement pixel-perfect UIs."
    },
    {
        id: 3,
        title: "Junior Developer",
        company: "Web Agency",
        date: "2019 - 2021",
        description: "Built responsive websites for various clients. Gained expertise in modern CSS and JavaScript frameworks."
    }
];

const EDUCATION = [
    {
        id: 1,
        title: "BS Computer Science",
        company: "University of Tech",
        date: "2015 - 2019",
        description: "Focus on Software Engineering and Human-Computer Interaction."
    }
];

const SKILLS = [
    "TypeScript", "React", "Next.js", "TailwindCSS", "Node.js", "GraphQL", "Framer Motion", "PostgreSQL", "Docker", "AWS"
];

export default function About() {
    const [skillIndex, setSkillIndex] = useState(0);
    const visibleSkillsCount = 4;

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

    // Helper to get visible skills with wrapping
    const getVisibleSkills = () => {
        const skills = [];
        for (let i = 0; i < visibleSkillsCount; i++) {
            skills.push(SKILLS[(skillIndex + i) % SKILLS.length]);
        }
        return skills;
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
                            className="border border-slate-700 rounded-[4px] p-6 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 bg-slate-900/40 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-4">
                                    {/* Placeholder Logo */}
                                    <div className="w-[50px] h-[50px] rounded-[4px] bg-slate-800 flex items-center justify-center text-xl font-bold text-text-secondary">
                                        {exp.company[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <h4 className="text-secondary font-mono text-sm">{exp.company}</h4>
                                    </div>
                                </div>
                                <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-sm">{exp.date}</span>
                            </div>
                            <p className="text-text-secondary leading-relaxed mt-4">
                                {exp.description}
                            </p>
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
                            className="border border-slate-700 rounded-[4px] p-6 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.1)] transition-all duration-300 bg-slate-900/40 backdrop-blur-sm"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center gap-4">
                                    <div className="w-[50px] h-[50px] rounded-[4px] bg-slate-800 flex items-center justify-center text-xl font-bold text-text-secondary">
                                        {edu.company[0]}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{edu.title}</h3>
                                        <h4 className="text-secondary font-mono text-sm">{edu.company}</h4>
                                    </div>
                                </div>
                                <span className="text-text-dim font-mono text-sm border border-slate-800 px-2 py-1 rounded-sm">{edu.date}</span>
                            </div>
                            <p className="text-text-secondary leading-relaxed mt-4">
                                {edu.description}
                            </p>
                        </div>
                    ))}

                </div>

                {/* RIGHT COLUMN: About & Skills (Desktop Layout: Right (1/3)) */}
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
                            <div className="flex gap-2">
                                <button onClick={prevSkill} className="p-1 hover:text-primary transition-colors"><ChevronLeft /></button>
                                <button onClick={nextSkill} className="p-1 hover:text-primary transition-colors"><ChevronRight /></button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 min-h-[100px] items-start content-start">
                            <AnimatePresence mode="popLayout">
                                {getVisibleSkills().map((skill, i) => (
                                    <motion.span
                                        key={`${skill}-${i}`}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="px-4 py-2 border border-primary/30 rounded-[4px] text-text-secondary font-mono text-sm bg-primary/5 hover:bg-primary/10 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
