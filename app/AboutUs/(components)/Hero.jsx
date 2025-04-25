'use client';

import { Badge } from "@/app/(components)/ui/Badge";
import ImageParallex from "@/app/(components)/ui/ImageParallex";
import MountAnim from "@/app/(components)/ui/MountAnim";
import { useResponsiveStates } from "@/app/(utils)/hooks";
import React from "react";

const Hero = () => {
  const { isMobile } = useResponsiveStates();
  return (
    <section className="py-12 sm:py-20 px-con flex flex-col gap-3 sm:gap-5 overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            About Us
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">Get To Know Us</h1>
        </MountAnim>
      </div>
      <div className="flex max-sm:flex-col gap-8 justify-between mt-8 sm:mt-14">
        <ImageParallex
          src={isMobile?"/aboutUsHero1M.png": "/aboutUsHero1.png"}
          alt="Hero img"
          width={1200}
          height={1200}
          className="flex-grow h-[19.68rem] sm:h-[36rem] sm:w-[66%]"
        />
        <ImageParallex
          src="/aboutUsHero2.png"
          alt="Hero img"
          width={800}
          height={800}
          className="flex-grow h-[19.68rem] sm:h-[36rem] sm:w-[33%]"
        />
      </div>
    </section>
  );
};

export default Hero;
