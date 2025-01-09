import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Link, ViewTransitions } from "next-view-transitions";
import { Inter } from "next/font/google";
import { Island } from "./island";

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
          <div className="min-h-screen">
            <Header />
            <main>{children}</main>
            <Island />
            <Analytics />
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}

function Header() {
  return (
    <header className="py-4 px-4 border border-t-0 border-r-0 border-l-0 border-dashed">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
        <div>
          <Link href="/">
            <h1 className="font-semibold">Kevin Pruett</h1>
          </Link>
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
