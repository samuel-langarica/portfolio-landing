import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Langarica - Full-Stack Developer",
  description: "Full-Stack Developer focused on SaaS and Fintech. Specializing in Flutter, React, and modern web technologies.",
  keywords: ["Full-Stack Developer", "Flutter", "React", "SaaS", "Fintech", "Samuel Langarica"],
  authors: [{ name: "Samuel Langarica" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-[100] mt-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-200 text-yellow-900 font-semibold shadow border border-yellow-300 text-base">
            <span className="text-xl">🚧</span>
            Under Construction
          </span>
        </div>
        <div className="pt-16">{/* Push content down so label doesn't overlap */}
          {children}
        </div>
      </body>
    </html>
  );
}
