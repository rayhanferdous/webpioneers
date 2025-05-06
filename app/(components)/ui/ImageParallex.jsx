"use client";

import { cn } from "@/app/(utils)/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageParallax = ({
  src,
  alt = "image",
  width = 500,
  height = 500,
  className,
  imgClass,
}) => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const container = containerRef.current;

    if (image && container) {
      gsap.fromTo(
        image,
        {
          yPercent: 0,
        },
        {
          yPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("overflow-hidden rounded-2xl", className)}
    >
      <Image
        ref={imageRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={cn("max-xs:object-center w-full md:h-[110%] max-md:object-fill md:object-fit", imgClass)}
      />
    </div>
  );
};

export default ImageParallax;
