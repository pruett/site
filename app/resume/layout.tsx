import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional experience and projects by Kevin Pruett",
  alternates: {
    canonical: "/resume",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto md:border min-h-screen md:border-t-0 md:border-b-0 md:border-dotted p-[5%] flex flex-col gap-8 print:p-[1%]">
      {children}
    </div>
  );
}
