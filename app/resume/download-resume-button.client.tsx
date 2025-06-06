"use client";

export default function DownloadResumeButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 border border-muted-foreground/20 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted-foreground/50"
    >
      <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download Resume
    </button>
  );
}