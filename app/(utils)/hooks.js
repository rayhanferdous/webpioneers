"use client";

import { useEffect, useState } from "react";

// Custom hook for responsive states
export function useResponsiveStates() {
  const [isMobile, setIsMobile] = useState(null);
  const [isTab, setIsTab] = useState(null);

  useEffect(() => {
    const updateResponsiveStates = () => {
      const width = window.innerWidth;

      setIsMobile(width < 640);
      setIsTab(width < 1370);
    };

    updateResponsiveStates();

    window.addEventListener("resize", updateResponsiveStates);
    return () => window.removeEventListener("resize", updateResponsiveStates); // Cleanup
  }, []);

  return { isMobile, isTab };
}
