import React, { ReactNode } from "react";

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string; // Allow custom classes if needed, though default covers most
}

// Reusable Section component
// Wraps content in a semantic <section> tag
export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section
            id={id}
            className={`flex w-full flex-col justify-center ${className}`}
        >
            {children}
        </section>
    );
}
