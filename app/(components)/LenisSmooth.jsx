"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);
let globalLenis = null; // Global Lenis instance for external control

const LenisSmooth = () => {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
  }, [pathname, lenisRef]);

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;
    globalLenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  if (!mounted) {
    return null; // or a loading state
  }

  return true;
};

export const getGlobalLenis = () => globalLenis; // Export helper function to access Lenis globally

export default LenisSmooth;
