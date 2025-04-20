"use client";

import React, { useRef, useEffect, useState } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useResponsiveStates } from "../(utils)/hooks";
import MatterBlocks from "./ui/MatterBlocks";
gsap.registerPlugin(ScrollTrigger);

const labels = [
  { title: "Curiosity" },
  { title: "Kindness" },
  { title: "Culture" },
  { title: "Transparency" },
  { title: "Originality" },
  { title: "Code" },
  { title: "Commitment" },
  { title: "Quality" },
  { title: "People" },
  { title: "CRO" },
  { title: "Design" },
  { title: "Transformation" },
];

const Dragables = () => {
  const stericRef = useRef(null);
  const containerRef = useRef(null);
  const { isTab } = useResponsiveStates();
  const [active, setActive] = useState(null);

  useGSAP(() => {
    gsap.to(stericRef.current, {
      rotate: 180,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        invalidateOnRefresh: true,
        scrub: 1,
      },
    });
  }, [isTab]);

  useEffect(() => {
    setActive(isTab);
  }, [isTab]);

  return (
    <section className="flex max-sm:flex-col max-sm:divide-y sm:divide-x divide-dark overflow-hidden">
      <div
        className={`[--bgSize:20vw_16.8vw] sm:[--bgSize:6.4rem_6.3rem] [--bgPos:0px_-2px] sm:[--bgPos:0rem_4.7rem] w-full sm:w-[43.12%] flex-shrink-0 flex h-[18rem] sm:h-[34.5rem] pointer-events-auto`}
      >
        <div
          style={{
            backgroundImage: `
            linear-gradient(to right, #DEDEDE 1px, transparent 1px),
            linear-gradient(to bottom, #DEDEDE 1px, transparent 1px)
          `,
            backgroundSize: `var(--bgSize)`,
            backgroundPosition: `var(--bgPos)`,
          }}
          className="flex-1 relative z-10 overflow-hidden pb-[3px]"
        >
          <MatterBlocks key={active}>
            {labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`dragableLabels absolute left-[-100vw] top-[-100vh] rounded-2xl sm:rounded-[2.5rem] h-[2.07rem] sm:h-[3.75rem] px-4 sm:px-6 flex items-center leading-none cursor-grab z-20  border border-dark bg-white text-lg sm:text-[2rem] whitespace-nowrap pointer-events-none`}
                >
                  {item.title}
                </div>
              );
            })}
          </MatterBlocks>
        </div>
      </div>
      <div ref={containerRef} className="flex-shrink flex-grow relative">
        <div className="relative z-10 px-11 py-9 sm:px-14 sm:py-14 flex flex-col gap-2">
          <MountAnim>
            <Badge nodot variant="yellow">
              Onward together
            </Badge>
          </MountAnim>
          <MountAnim>
            <h1 className="heading2">Let's Get Started</h1>
          </MountAnim>
          <MountAnim>
            <p className="text-lg sm:text-2xl text-gray-700 max-w-[38ch] mb-4">
              Yes, we build user-friendly web solutions that actually
              work—making your brand stand out and, oh yeah, succeed.
            </p>
          </MountAnim>
          <MountAnim>
            <Button btnType="light" className={"px-10 sm:px-16"}>
              Make It Happen
            </Button>
          </MountAnim>
        </div>
        <Image
          ref={stericRef}
          src="/sterik.svg"
          width={300}
          height={300}
          alt="sterik"
          priority
          className="absolute w-[35%] sm:w-[36rem] bottom-[-10%] sm:bottom-[-20%] right-[-5%] sm:right-[-15%]"
        />
      </div>
    </section>
  );
};

export default Dragables;
