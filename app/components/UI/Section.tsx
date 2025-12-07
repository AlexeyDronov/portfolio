import React, { ReactNode } from "react";
import OpacityCtrl from "../../lib/OpacityCtrl";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string; // Allow custom classes if needed, though default covers most
}

// Reusable Section component
// Wraps content in a semantic <section> tag and OpacityCtrl for animation
export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <OpacityCtrl className="w-full">
            <section
                id={id}
                className={`flex w-full flex-col justify-center ${className}`}
            >
                {children}
            </section>
        </OpacityCtrl>
    );
}
