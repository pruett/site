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
    { name: "@leerob", url: "https://x.com/leeerob" },
    { name: "youtube", url: "https://www.youtube.com/@leerob" },
    { name: "linkedin", url: "https://www.linkedin.com/in/leeerob" },
    { name: "github", url: "https://github.com/leerob" },
  ];

  return (
    <footer className="mt-12 text-center">
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
    <header className="py-4 border border-bottom p-3 border-dashed">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="font-semibold">Kevin Pruett</h1>
          {/* <h2 className="font-light text-foreground/50">Developer</h2> */}
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="font-mono uppercase text-sm font-medium tracking-wide">
            {new Date(Date.now()).toLocaleString("en-US", {
              timeZone: "America/Chicago",
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div className="flex gap-1 items-center text-foreground/50">
            <MapPinIcon className="size-2.5" />
            <span className="font-mono text-xs ">Austin, TX, USA</span>
          </div>
        </div>
        <p>contact?</p>
      </div>
    </header>
  );
}
