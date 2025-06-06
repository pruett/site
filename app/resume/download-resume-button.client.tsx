"use client";

import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";

export default function DownloadResumeButton() {
  return (
    <Button onClick={() => window.print()} variant="outline">
      <FileDownIcon />
      Download Resume
    </Button>
  );
}
