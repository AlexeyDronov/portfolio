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

export function AmbientBackground() {
    // Simple grid
    return (
        <div
            className="pointer-events-none fixed inset-0 -z-10 min-h-screen w-full"
            style={{
                // Base background gradient matching your global variables
                backgroundColor: "var(--color-bg, #020617)",
                backgroundImage: `
                    linear-gradient(rgba(168, 85, 247, 0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(168, 85, 247, 0.04) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(2, 6, 23, 0.3), rgba(15, 23, 42, 0.85))
                `,
                backgroundSize: "40px 40px, 40px 40px, 100% 100%",
                // Optional: radial mask so the grid is sharper on the edges and soft in the middle
                maskImage: "radial-gradient(circle at 50% 50%, white 20%, rgba(255, 255, 255, 0.4) 100%)",
                WebkitMaskImage: "radial-gradient(circle at 50% 50%, white 20%, rgba(255, 255, 255, 0.4) 100%)",
            }}
        />
    );
}

export function HorizonGridBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10 min-h-screen w-full overflow-hidden bg-[#020617]">
            {/* 1. Base Dark Cyberpunk Gradient */}
            <div 
                className="absolute inset-0"
                style={{
                    backgroundImage: "linear-gradient(to bottom, #020617, #0f172a)"
                }}
            />

            {/* 2. Perspective Net Grid Container */}
            <div 
                className="absolute inset-x-0 bottom-0 h-[60vh] w-full origin-bottom"
                style={{
                    perspective: "500px",
                    transform: "rotateX(70deg)",
                    // Fades out the top edge towards the center horizon
                    maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
                    WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)",
                }}
            >
                {/* 3. The Grid Matrix Lines */}
                <div 
                    className="absolute inset-0 h-[200%] w-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(168, 85, 247, 0.08) 2px, transparent 2px),
                            linear-gradient(90deg, rgba(168, 85, 247, 0.08) 2px, transparent 2px)
                        `,
                        backgroundSize: "60px 60px"
                    }}
                />
            </div>
            
            {/* 4. Subtle Ambient Horizon Glow Separator */}
            <div 
                className="absolute bottom-0 left-0 right-0 h-[150px] opacity-20 blur-[50px]"
                style={{
                    background: "radial-gradient(ellipse at 50% 100%, var(--color-tertiary, #06b6d4) 0%, transparent 70%)"
                }}
            />
        </div>
    );
}