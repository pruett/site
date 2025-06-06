import "@/app/globals.css";

import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/header";

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
    <div className="min-h-screen">
      <Header
        links={[
          {
            href: "/work",
            label: "Work",
          },
          {
            href: "/writings",
            label: "Writings",
          },
        ]}
      />
      <main>
        <div className="container mx-auto md:border min-h-screen md:border-t-0 md:border-b-0 md:border-dotted p-[5%] flex flex-col gap-8">
          {children}
        </div>
      </main>
      <Analytics />
    </div>
  );
}
