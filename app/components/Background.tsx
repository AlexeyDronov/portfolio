"use client";

export function SimpleBackground() {
    return (
        <div
            className="pointer-events-none fixed inset-0 -z-10 min-h-screen w-full"
            style={{
                backgroundSize: "100% 100%",
                backgroundImage:
                    "linear-gradient(to bottom, #020617, #0f172a)",
            }}
        />
    );
}