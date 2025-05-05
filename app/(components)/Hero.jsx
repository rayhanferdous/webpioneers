"use client";

import React, { useRef } from "react";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import MountAnim from "./ui/MountAnim";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Button from "./ui/Button";
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
    <section className="my-container relative py-12 sm:py-20 px-con flex flex-col sm:items-center gap-3 sm:gap-5 sm:text-center overflow-hidden">
      <div className="headerSpace"></div>
      <MountAnim>
        <Badge nodot size="xl" variant="yellow">
          An agency that delivers Perfection{" "}
        </Badge>
      </MountAnim>
      <MountAnim>
        <h1 className="text-[3.125rem] sm:text-[6.6rem] lg:text-[5.6rem] leading-tight max-sm:pr-3">
          Simplifying Client{" "}
          <span className="relative">
            Relations,
            <span className="absolute block inset-0 bg-gradient-to-t from-blue/30 to-transparent pointer-events-none border-b-4 border-blue translate-y-1"></span>
          </span>
          <br />
          <span className="relative">
            Projects,
            <span className="absolute block inset-0 bg-gradient-to-t from-purple/30 to-transparent pointer-events-none border-b-4 border-purple translate-y-1"></span>
          </span>{" "}
          and{" "}
          <span className="relative">
            Payments
            <span className="absolute block inset-0 bg-gradient-to-t from-green/30 to-transparent pointer-events-none border-b-4 border-green translate-y-1"></span>
          </span>{" "}
          in One Platform
        </h1>
      </MountAnim>
      <MountAnim
        delay={0.1}
        className="flex flex-wrap w-full max-w-[90rem] sm:justify-center gap-3 sm:gap-7 py-5 sm:py-14 *:rounded-full *:gap-3 *:text-base *:sm:text-[1.75rem] *:flex *:items-center *:transition-all *:duration-500 *:!leading-[1.1] *:bg-white *:border *:text-dark"
      >
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:-rotate-1 sm:hover:rotate-0"
          }
        >
          🎨 Full design & development in one place
        </div>
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:-rotate-1 sm:hover:rotate-0"
          }
        >
          ✅ Manage projects & payments with our CRM
        </div>
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:rotate-1 sm:hover:rotate-0"
          }
        >
          📅 Fixed timeline, daily collaboration
        </div>

        <Link
          href={"/LearnMore"}
          className={
            "max-sm:mt-2 max-w-full max-sm:w-full sm:rotate-1 sm:hover:rotate-0 justify-center"
          }
        >
          <Button
            btnType="light"
            className="text-base sm:text-[1.75rem] max-sm:w-full justify-center max-w-none"
          >
            Learn More About Our Dashbaord
          </Button>
        </Link>
      </MountAnim>
      <div ref={containerRef} className="w-[180vw] sm:w-full max-w-[104rem]">
        <MountAnim delay={0.2}>
          <Image
            src={"./Ipad.svg"}
            alt="logo"
            width={500}
            height={500}
            priority
            className="w-full h-auto ipad"
          />
        </MountAnim>
      </div>

      <Image
        src={"./HeroBgD.svg"}
        alt="bg"
        width={400}
        height={400}
        className="max-sm:hidden object-cover absolute left-0 top-0 w-full h-auto z-[-1] max-h-full"
      />
      <Image
        src={"./HeroBgM.svg"}
        alt="bg"
        width={400}
        height={400}
        className="sm:hidden object-cover absolute left-0 top-0 w-full h-auto z-[-1] max-h-full"
      />
    </section>
  );
};

export default Hero;
