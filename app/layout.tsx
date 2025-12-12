import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Load JetBrains Mono font from Google Fonts
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

// Define metadata for the application (title, description, etc.)
export const metadata: Metadata = {
  title: "Alexey Dronov",
  description: "Full Stack Developer Portfolio",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// RootLayout is the main wrapper for the entire application.
// It includes the <html> and <body> tags and applies global fonts.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // Apply font variables and antialiasing for smoother text
        className={`${jetbrainsMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
