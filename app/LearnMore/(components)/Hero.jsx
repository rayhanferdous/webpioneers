"use client";

import MessageIcon from "@/app/(assets)/MessageIcon";
import SendIcon from "@/app/(assets)/SendIcon";
import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Image from "next/image";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".ipad", {
        scale: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "20% top",
          end: "80% top",
          invalidateOnRefresh: true,
          scrub: 1,
        },
      });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <section className="relative max-sm:pt-12 sm:py-20 flex flex-col overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col sm:items-center gap-7 sm:gap-14 sm:justify-center">
        <div className="flex flex-col items-start sm:items-center sm:text-center sm:justify-center gap-4 px-con">
          <Badge nodot variant="yellow">
            Simplify Your Workflow
          </Badge>
          <h1 className="text-4xl sm:text-[3.5rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
            Manage Projects, Track Progress, and Handle Payments—all in One
            Platform
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-[62ch] 2xl:max-w-[74ch]">
            Focus on growing your brand and business while we handle the
            details—quality services, easy payments, and seamless revisions, all
            in one place. Sign up for our email list to be notified when the
            dashboard is ready. Meanwhile, we can still start your project today
            and let you see the difference!
          </p>
          <div className="flex gap-2 sm:gap-5 h-[2.9rem] sm:h-[3.75rem] my-3 w-full max-w-[49rem]">
            <div className="flex-grow rounded-full border-2 sm:border lg:border-2 border-gray-600 px-4 sm:px-7 flex items-center overflow-hidden">
              <MessageIcon />
              <input
                type="text"
                placeholder="Your Email Address"
                className="text-base sm:text-xl placeholder:text-gray-600 text-dark leading-0 align-middle min-w-0 h-full w-full outline-none border-none pl-4"
              />
            </div>
            <button className="flex-shrink-0  border-2 sm:border lg:border-2 border-gray-600 w-[2.9rem] sm:w-[3.75rem] rounded-full grid place-content-center">
              <SendIcon />
            </button>
          </div>
        </div>
        <div ref={containerRef} className="px-5 w-full max-w-[104rem]">
          <MountAnim delay={0.2}>
            <Image
              src={"./LearnMoreHero.svg"}
              alt="logo"
              width={800}
              height={800}
              priority
              className="w-full h-auto ipad max-sm:hidden"
            />
            <Image
              src={"./LearnMoreHeroM.svg"}
              alt="logo"
              width={400}
              height={400}
              priority
              className="w-full h-auto sm:hidden"
            />
          </MountAnim>
        </div>
      </div>
    </section>
  );
};

export default Hero;
