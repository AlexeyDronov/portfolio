import React, { ReactNode } from "react";
import Link from "next/link";

interface ArrowLinkProps {
    href: string;
    children: ReactNode;
    className?: string;
}

// Reusable Arrow Link Component
// Standardizes the "View All" link style
export default function ArrowLink({ href, children, className = "" }: ArrowLinkProps) {
    return (
        <Link
            href={href}
            className={`text-white/60 hover:text-white border-b border-transparent hover:border-white transition-all pb-1 ${className}`}
        >
            {children} &rarr;
        </Link>
    );
}
