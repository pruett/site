"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [glitchText, setGlitchText] = useState("404");

  useEffect(() => {
    setMounted(true);

    // Easter egg: Console message
    console.log(
      "%c404: RESOURCE_NOT_FOUND",
      "font-family: monospace; font-size: 12px; color: #ff0000;",
    );
    console.log(
      "%cSystem Status: OPERATIONAL",
      "font-family: monospace; font-size: 12px;",
    );
    console.log(
      "%c> Looking for something? Try the home directory.",
      "font-family: monospace; font-size: 12px; color: #666;",
    );

    // Glitch effect for the 404 text
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?0123456789";
    const originalText = "404";

    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.3) {
        // Only glitch 30% of the time
        const glitched = originalText
          .split("")
          .map((char, index) => {
            if (Math.random() < 0.4) {
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            }
            return char;
          })
          .join("");

        setGlitchText(glitched);

        setTimeout(() => setGlitchText(originalText), 150);
      }
    }, 800);

    return () => clearInterval(glitchInterval);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center font-mono">
          <div className="text-9xl font-bold mb-8">404</div>
          <div className="text-xl mb-8">PAGE NOT FOUND</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="text-center font-mono max-w-4xl">
        {/* Large glitching 404 */}
        <div className="mb-12">
          <div
            className="text-[12rem] md:text-[16rem] font-bold leading-none tracking-tighter select-none"
            style={{ fontVariantNumeric: "tabular-nums" }}
          >
            {glitchText}
          </div>
        </div>

        {/* Error message */}
        <div className="mb-12 space-y-4">
          <div className="text-2xl md:text-3xl font-bold">PAGE NOT FOUND</div>
          <div className="text-lg text-foreground/70">
            RESOURCE DOES NOT EXIST AT THIS LOCATION
          </div>
        </div>

        {/* Simple home button */}
        <div>
          <Link
            href="/"
            className="inline-block px-8 py-4 border-2 border-foreground text-foreground font-bold text-xl hover:bg-foreground hover:text-background transition-colors duration-200"
          >
            [RETURN_HOME]
          </Link>
        </div>

        {/* Subtle system info */}
        <div className="mt-16 text-sm text-foreground/40 space-y-1">
          <div>ERROR_CODE: HTTP_404</div>
          <div>TIMESTAMP: {new Date().toISOString()}</div>
          <div className="text-xs">// Check console for system status</div>
        </div>
      </div>
    </div>
  );
}
