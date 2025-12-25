"use client";
import { useEffect, useRef } from "react";
import Snowfall from 'react-snowfall';

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

// Option 2 – Simple but with good colour coordination
const bgBaseClasses = "fixed inset-0 w-full h-full -z-50 pointer-events-none overflow-hidden bg-[--color-bg]";
export const RadialTopBackground = () => {
    return (
        <div className={bgBaseClasses} aria-hidden="true">
            {/* Radial Gradient to fade the grid edges */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 0%, transparent 20%, var(--color-bg) 90%)`
                }}
            />

            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary opacity-10 blur-[120px] rounded-full mix-blend-screen" />
        </div>
    );
};

export function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Particle[] = [];
        const particleCount = 80;

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = (Math.random() - 0.5) * 0.3;
                this.size = Math.random() * 2 + 1;
                this.color = Math.random() > 0.5 ? "168, 85, 247" : "236, 72, 153";
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.color}, 0.5)`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            // Draw connections
            particles.forEach((p1, i) => {
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - distance / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />
            <canvas ref={canvasRef} className="absolute inset-0 opacity-60" />
        </div>
    );
};

export function MatrixRainBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        function draw() {
            if (!ctx || !canvas) return;

            ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Color gradient based on position
                const gradient = ctx.createLinearGradient(x, y - fontSize * 20, x, y);
                gradient.addColorStop(0, "rgba(168, 85, 247, 0)");
                gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.5)");
                gradient.addColorStop(1, "rgba(168, 85, 247, 1)");

                ctx.fillStyle = gradient;
                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        return () => {
            clearInterval(interval);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
};

export function CyberpunkRainBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;

        const DPR = window.devicePixelRatio || 1;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * DPR;
            canvas.height = height * DPR;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        };

        resize();

        const COLORS = [
            "rgba(203, 213, 225, 0.25)", // neutral rain
            "rgba(168, 85, 247, 0.18)",  // subtle purple accent
            "rgba(236, 72, 153, 0.12)",  // faint pink
        ];

        // Wind direction (controls angle)
        const WIND_X = -0.6; // negative = rain slants left
        const WIND_Y = 1.8;

        type Drop = {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            width: number;
            color: string;
        };

        const DROP_COUNT = Math.floor((width * height) / 14000);

        const drops: Drop[] = Array.from({ length: DROP_COUNT }).map(() => {
            const depth = Math.random(); // fake z-depth

            return {
                x: Math.random() * width,
                y: Math.random() * height,
                length: 18 + depth * 35,
                speed: 1 + depth * 6,
                opacity: 0.15 + depth * 0.25,
                width: 3 + depth * 0.6,
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            };
        });

        const draw = () => {
            // Motion blur trail
            ctx.fillStyle = "rgba(2, 6, 23, 0.35)";
            ctx.fillRect(0, 0, width, height);

            for (const d of drops) {
                const dx = WIND_X * d.speed;
                const dy = WIND_Y * d.speed;

                d.x += dx;
                d.y += dy;

                if (d.y > height + d.length || d.x < -50 || d.x > width + 50) {
                    d.y = -d.length;
                    d.x = Math.random() * width;
                }

                ctx.strokeStyle = d.color;
                ctx.globalAlpha = d.opacity;
                ctx.lineWidth = d.width;
                ctx.lineCap = "round";

                ctx.beginPath();
                ctx.moveTo(d.x, d.y);
                ctx.lineTo(
                    d.x - dx * 2,
                    d.y - dy * 2
                );
                ctx.stroke();
            }

            ctx.globalAlpha = 1;
            animationRef.current = requestAnimationFrame(draw);
        };

        draw();

        window.addEventListener("resize", resize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
        />
    );
}

export function SnowyBackground() {
    return (
        <Snowfall
            color="#475569"
            snowflakeCount={80}
            radius={[1.0, 3.5]}
            style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                pointerEvents: 'none', // so clicks pass through
                zIndex: 1,
            }}
        />
    )
};

export function CombinedBackground({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}