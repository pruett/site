import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { MapPinIcon } from "lucide-react";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinpruett.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Kevin Pruett",
    template: "%s | Kevin Pruett",
  },
  description: "description here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.variable} font-sans`}>
        <body className="antialiased tracking-tight">
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main>{children}</main>
            <Footer />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Footer() {
  const links = [
    { name: "@pruett", url: "https://x.com/pruett" },
    { name: "linkedin", url: "https://www.linkedin.com/in/pruett" },
    { name: "github", url: "https://github.com/pruett" },
  ];

  return (
    <footer className="fixed bottom-10 text-center bg-foreground/90 rounded-full left-1/2 -translate-x-1/2 px-3 py-1">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="py-4 border border-t-0 border-r-0 border-l-0 p-3 border-dashed">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
        <div>
          <h1 className="font-semibold">Kevin Pruett</h1>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="uppercase text-sm font-medium tracking-wide">
            {new Date(Date.now()).toLocaleString("en-US", {
              timeZone: "America/Chicago",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <p>&mdash;</p>
            <p className="text-xs text-foreground/60">Austin, TX USA</p>
          </div>
        </div>
      </div>
    </header>
  );
}
