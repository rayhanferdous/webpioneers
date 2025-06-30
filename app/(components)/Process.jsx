"use client";
import React, { useRef, useMemo, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Process1 from "./figures/process1";
import Process2 from "./figures/process2";
import Process3 from "./figures/process3";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import { useResponsiveStates } from "../(utils)/hooks";
import Icon from "./ui/Icon";
import { cn } from "../(utils)/utils";
import Link from "next/link";
import { gsap } from 'gsap';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const ProcessStep = React.memo(
  ({
    isInView,
    customVar,
    bgColor,
    hover,
    badgeVariant,
    iconSrc,
    title,
    subTitle,
    description,
    ProcessComponent,
  }) => {
    const { isTab } = useResponsiveStates();

    const transition = {
      ease: "easeInOut",
      duration: 0.6,
    };

    return (
      <MountAnim customVar={customVar} className="flex-1 flex">
        <motion.div
          initial="initial"
          animate={isTab && isInView ? "show" : "initial"}
          whileHover={!isTab ? "show" : undefined}
          className={cn(
            "flex-1 overflow-hidden border-2 border-gray-600 rounded-2xl transition-colors duration-500",
            isTab && isInView ? bgColor : `${hover} bg-white`
          )}
        >
          <motion.div
            variants={{
              initial: { y: 20 },
              show: { y: 0 },
            }}
            transition={transition}
            className="flex flex-col gap-4 -mb-1"
          >
            <div className="px-10 flex flex-col gap-4 items-center text-center py-5">
              <div
                className={"text-lg font-medium !font-inter bg-clip-text text-transparent lin-gradient"}
              >
                {title}
              </div>
              <div className="size-[4.125rem] sm:size-[5.3125rem]">
                <Icon size="100%" src={iconSrc} />
              </div>
              <h2 className="text-4xl sm:text-[2.875rem] leading-none">
                {subTitle}
              </h2>
              <p className="text-lg sm:text-2xl leading-snug text-[#7A7A7A]">
                {description}
              </p>
              <Link href={"/#"} className="font-inter text-sm text-dark font-medium bg-white px-4 py-3 rounded-md border border-gray-900 hover:bg-gray-btn-hover hover:border-gray-btn-hover">
                Let’s Get Started</Link>
            </div>
            <ProcessComponent />
          </motion.div>
        </motion.div>
      </MountAnim>
    );
  }
);

const Process = () => {
  const { isTab } = useResponsiveStates();

  const leftVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "-50%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const rightVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "50%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const centerVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "0%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.5, once: true });
  const isInView2 = useInView(ref2, { amount: 0.5, once: true });
  const isInView3 = useInView(ref3, { amount: 0.5, once: true });

  const pathRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      pathRef.current,
      { drawSVG: "0%" },
      {
        drawSVG: "100%",
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
      }
    );
  }, []);


  return (
    <section className="container-2560 relative mt-12 p-con flex flex-col items-center text-center gap-3 overflow-hidden">
      <MountAnim>
        <h3 className="font-urbanist font-medium text-[120px]">Our <span className="bg-clip-text text-transparent lin-gradient">Services</span></h3>
      </MountAnim>
      <div className="flex w-full flex-col items-center">
        <MountAnim
          animation="opacity"
          delay={0.3}
        >
          <svg viewBox="0 0 840 172" width="840" height="172" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="gradientStroke"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgb(255,255,255)" />
                <stop offset="25%" stopColor="rgb(176,163,255)" />
                <stop offset="50%" stopColor="rgb(255,72,72)" />
                <stop offset="75%" stopColor="rgb(98,72,255)" />
                <stop offset="100%" stopColor="rgb(255,255,255)" />
              </linearGradient>
            </defs>

            <path
              id="staticPath"
              d="M420.5,0 C420.5,0 420.5,122 420.5,122 C420.5,122 15.5,122 15.5,122 C15.5,122 3,122 3,133.5 C3,145 3,172 3,172"
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            <path
              ref={pathRef}
              id="animatedPath"
              d="M420.5,0 
           C420.5,0 420.5,122 420.5,122 
           C420.5,122 15.5,122 15.5,122 
           C15.5,122 3,122 3,133.5 
           C3,145 3,172 3,172"
              fill="none"
              stroke="url(#gradientStroke)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MountAnim>
        <div className="flex max-sm:flex-col w-full gap-8">
          <div ref={ref1} className="flex-1 flex">
            <ProcessStep
              isInView={isInView1}
              customVar={isTab ? centerVar : leftVar}
              bgColor="bg-white"
              hover="hover:bg-white"
              badgeVariant="yellow"
              iconSrc="https://cdn.lordicon.com/zywwafpn.json"
              title="Explore Ideas"
              subTitle="Ideation"
              description="Turn big ideas into clean, focused wireframes that guide your entire project."
              ProcessComponent={Process1}
            />
          </div>
          <div ref={ref2} className="flex-1 flex">
            <ProcessStep
              isInView={isInView2}
              customVar={centerVar}
              bgColor="bg-white"
              hover="hover:bg-white"
              badgeVariant="purple"
              iconSrc="https://cdn.lordicon.com/ovxlloho.json"
              title="Enhance Your Brand"
              subTitle="Design"
              description="Custom visuals that match your brand and make every click feel just right."
              ProcessComponent={Process2}
            />
          </div>
          <div ref={ref3} className="flex-1 flex">
            <ProcessStep
              isInView={isInView3}
              customVar={isTab ? centerVar : rightVar}
              bgColor="bg-white"
              hover="hover:bg-white"
              badgeVariant="green"
              iconSrc="https://cdn.lordicon.com/wbthjkyu.json"
              title="Ready to Develop"
              subTitle="Development"
              description="We build fast, scalable sites that load quick and grow with your business."
              ProcessComponent={Process3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
