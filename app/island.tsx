"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Link = {
  name: string;
  url: string;
  external: boolean;
};

export function Island() {
  const links: Link[] = [
    { name: "resume", url: "/resume", external: false },
    { name: "twitter", url: "https://x.com/pruett", external: true },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/pruett",
      external: true,
    },
    { name: "github", url: "https://github.com/pruett", external: true },
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
          damping: 8,
        },
      }}
    >
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => {
          const Comp = link.external ? "a" : Link;

          return (
            <Comp
              key={link.name}
              href={link.url}
              className={cn(
                "hover:text-[rgba(241,90,34)] transition-colors duration-200 text-xs font-light flex gap-1 items-center"
              )}
              {...(link.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {link.name}
              {link.external && <SquareArrowOutUpRight className="size-2" />}
            </Comp>
          );
        })}
      </div>
    </motion.footer>
  );
}
