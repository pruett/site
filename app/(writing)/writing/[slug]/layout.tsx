import "@/app/globals.css";
import Image from "next/image";

import { getBlogPostMetadata } from "@/app/(writing)/writing/_lib/getBlogPostData";
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
    <>
      <div className="flex flex-col gap-8">
        {/* <div className="flex flex-col gap-2 justify-center items-center w-[100px]">
          <Image
            src="/pro.jpeg"
            alt="profile picture of kevin pruett"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div> */}

        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-foreground/50">
            {metadata.date.toDateString()}
          </p>
        </div>
      </div>

      <main className="max-w-[60ch] space-y-6 mx-auto w-full mt-4">
        {children}
      </main>
      <footer className="border-t border-dotted pt-8">
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
                      "transition-all duration-200 flex gap-1 items-center group"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="fill-foreground [&>path]:fill-foreground group-hover:fill-gray-400 [&>path]:group-hover:fill-gray-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
