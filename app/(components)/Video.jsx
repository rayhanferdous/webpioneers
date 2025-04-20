"use client";
import React, { useRef } from "react";
import PlayBtn from "../(assets)/PlayBtn";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".videoFrame",
        {
          scale: 0.8,
        },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "20% bottom",
            end: "60% bottom",
            invalidateOnRefresh: true,
            scrub: 1,
          },
        }
      );
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section className="relative p-con flex flex-col sm:items-center sm:text-center gap-3 overflow-hidden">
      <div ref={containerRef} className="w-full">
        <div className="videoFrame w-full overflow-hidden border-2 border-gray-600 bg-[#F7F7F7] rounded-2xl aspect-[1.29] sm:aspect-[1.868] relative">
          {/* <video src="" className="w-full h-full object-cover" /> */}
          <PlayBtn
            className={
              "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Video;
