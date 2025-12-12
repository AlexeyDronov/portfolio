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
            {title && <h3 className="text-sm font-bold text-fg-secondary uppercase tracking-wider">{title}</h3>}
            <div className="flex flex-wrap gap-3">
                {options.map((option) => {
                    const isActive = selected.includes(option);
                    return (
                        <button
                            key={option}
                            onClick={() => handleToggle(option)}
                            className={`px-4 py-2 rounded-[4px] text-sm font-medium border transition-all duration-300 cursor-pointer ${isActive
                                ? "bg-primary/20 text-primary-light border-primary/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                                : "bg-transparent text-fg-secondary border-surface-light/10 hover:border-primary/30 hover:text-primary-light hover:bg-primary/5"
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
