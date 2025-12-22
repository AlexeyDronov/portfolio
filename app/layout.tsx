import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// 1. Hardware/Browser specific config
export const viewport: Viewport = {
  themeColor: "#020618",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// 2. SEO and Social config
export const metadata: Metadata = {
  title: "Alexey Dronov Portfolio",
  description: "Cyberpunk Minimal Portfolio",
  appleWebApp: {
    title: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-slate-950">
      <body
        className={`${jetbrainsMono.variable} ${ibmPlexSans.variable} ${spaceGrotesk.variable} antialiased font-mono bg-slate-950 text-slate-200`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
