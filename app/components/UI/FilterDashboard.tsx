"use client";
import React from "react";

interface FilterDashboardProps {
    options: string[];
    selected: string[];
    onChange: (selected: string[]) => void;
    title?: string;
}

export default function FilterDashboard({ options, selected, onChange, title }: FilterDashboardProps) {
    const handleToggle = (option: string) => {
        if (selected.includes(option)) {
            onChange(selected.filter((item) => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full mb-8">
            {title && <h3 className="text-sm font-bold text-white/60 uppercase tracking-wider">{title}</h3>}
            <div className="flex flex-wrap gap-3">
                {options.map((option) => {
                    const isActive = selected.includes(option);
                    return (
                        <button
                            key={option}
                            onClick={() => handleToggle(option)}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer ${isActive
                                ? "bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                                : "bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white"
                                }`}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
