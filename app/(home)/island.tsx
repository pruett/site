"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import type { JSX, SVGProps } from "react";
import { XformerlyTwitter, Github, LinkedIn } from "@/app/socials";

type Link = {
  name: string;
  url: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export function Island() {
  const links: Link[] = [
    { name: "x", url: "https://x.com/pruett", icon: XformerlyTwitter },
    { name: "github", url: "https://github.com/pruett", icon: Github },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/pruett",
      icon: LinkedIn,
    },
  ];

  return (
    <motion.footer
      className="fixed bottom-5 left-1/2 w-fit text-center text-background bg-foreground/95 shadow-xl border rounded-full px-5 py-3"
      initial={{ opacity: 0, scale: 0, x: "-50%" }}
      animate={{
        opacity: 1,
        scale: 1,
        x: "-50%",
      }}
      transition={{
        type: "spring",
        bounce: 0.45,
      }}
      whileHover={{
        scale: 1.2,
        transition: {
          type: "spring",
          stiffness: 140,
          damping: 15,
        },
      }}
    >
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => {
          return (
            <a
              key={link.name}
              href={link.url}
              className={cn(
                "transition-all duration-200 flex gap-1 items-center group"
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="fill-background [&>path]:fill-background group-hover:fill-gray-400 [&>path]:group-hover:fill-gray-400" />
            </a>
          );
        })}
      </div>
    </motion.footer>
  );
}
