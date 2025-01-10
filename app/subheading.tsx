import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export default function Subheading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "border-foreground/40 border px-3 py-1 rounded-full inline-block font-mono uppercase text-xs tracking-wider font-extralight text-foreground/80",
        className
      )}
    >
      {children}
    </h2>
  );
}
