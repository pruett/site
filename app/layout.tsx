import "@/app/globals.css";

import Header from "@/app/header";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinpruett.com"),
  title: {
    default: "Kevin Pruett",
    template: "%s | Kevin Pruett",
  },
  description: "Software engineer and technical leader",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="antialiased tracking-tight mb-24">
        <div className="min-h-screen">
          <Header />
          <main>{children}</main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
