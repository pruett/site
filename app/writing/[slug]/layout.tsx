import "@/app/globals.css";
import Image from "next/image";

import { getBlogPostMetadata } from "@/app/writing/_lib/getBlogPostData";
import type { Metadata } from "next";
import { Github, LinkedIn, XformerlyTwitter } from "@/app/socials";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://kevinpruett.com"),
  title: {
    default: "Kevin Pruett",
    template: "%s | Kevin Pruett",
  },
};

export default async function Layout({
  params,
  children,
}: Readonly<{
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}>) {
  const slug = (await params).slug;
  const { metadata } = await getBlogPostMetadata(slug);
  const title = `${metadata.title ?? ""}`;

  return (
    <div className="container mx-auto md:border min-h-screen md:border-t-0 md:border-b-0 md:border-dotted p-[5%] flex flex-col gap-8">
      <div className="max-w-[60ch] mx-auto w-full">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-sm text-foreground/50">
              {metadata.date.toDateString()}
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-4">{children}</div>
        <footer className="border-t border-dotted mt-4 pt-8">
          <div className="flex items-center">
            <div className="flex flex-col gap-2 w-[100px] items-center">
              <Image
                src="/pro.jpeg"
                alt="profile picture of kevin pruett"
                width={100}
                height={100}
                className="rounded-full"
              />
              <h3 className="text-foreground/50 text-">Kevin Pruett</h3>
              <ul className="flex gap-2">
                {[
                  {
                    href: "https://x.com/pruett",
                    icon: XformerlyTwitter,
                  },
                  {
                    href: "https://github.com/pruett",
                    icon: Github,
                  },
                  {
                    href: "https://linkedin.com/in/kevinpruett",
                    icon: LinkedIn,
                  },
                ].map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      className={cn(
                        "transition-all duration-200 flex gap-1 items-center group",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="fill-foreground [&>path]:fill-foreground group-hover:fill-gray-400 group-hover:[&>path]:fill-gray-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
