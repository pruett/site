"use client";

import { useState, useEffect } from "react";

export default function DateTime() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    // Update immediately
    setCurrentDate(new Date());
    
    // Set up interval to update every minute
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every 60 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="uppercase text-xs font-medium tracking-wide">
      {currentDate.toLocaleString("en-US", {
        timeZone: "America/Chicago",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  );
}