"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  href: string;
  label: string;
};

export default function Header() {
  const pathname = usePathname();

  const links: NavLink[] = [
    {
      href: "/resume",
      label: "Resume",
    },
    {
      href: "/writings",
      label: "Writings",
    },
  ];
  return (
    <header className="py-4 px-4 border border-t-0 border-r-0 border-l-0 border-dotted print:hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-2">
        <div>
          <Link href="/" className="hover:text-foreground/40 transition-all">
            <h1 className="font-semibold">Kevin Pruett</h1>
          </Link>
        </div>

        <nav>
          <ul className="flex items-center gap-2">
            {links.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  {isActive ? (
                    <p className="font-medium">{label}</p>
                  ) : (
                    <Link
                      href={href}
                      className="text-blue-500 hover:text-blue-800 transition-all"
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* <div className="flex flex-wrap items-center gap-2">
          <DateTime />
          <div className="flex items-center gap-2">
            <p>&mdash;</p>
            <p className="text-xs text-foreground/60">Austin, TX USA</p>
          </div>
        </div> */}
      </div>
    </header>
  );
}
