"use client";

import React, { useRef } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import Pause from "./figures/Pause";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Invoice from "./figures/Invoice";
import Design from "./figures/Design";
import { useResponsiveStates } from "../(utils)/hooks";
import { cn } from "../(utils)/utils";

const Comp1 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  const texts = [
    "Let's circle back on that estimate and see if it aligns with our timeline.",
    "The project's looking solid so far—just a few tweaks and we're good.",
    "Just checking in on the latest draft—let me know if it's ready for review.",
    "Let's coordinate the next steps to make sure we're on track.",
    "Can you loop in the design team for feedback on these updates?",
    "Do we have time for a quick sync on the project timelines this week?",
  ];

  return (
    <div
      className={cn(
        "flex-1 group rounded-2xl overflow-hidden border-2 border-gray-600 transition-colors duration-[600ms] flex flex-col",
        isTab && !isInView
          ? "bg-transparent"
          : "max-lg:bg-purple-light hover:bg-purple-light"
      )}
    >
      <div className="h-[12rem] sm:flex-grow w-full relative overflow-hidden *:transition-all *:duration-[600ms] *:ease-in-out flex items-center">
        <div
          className={cn(
            "absolute z-[2] inset-0 grid place-content-center text-[11.5rem] sm:text-[20rem] ",
            isTab && !isInView
              ? "text-[#E6E6E6]"
              : "text-purple lg:text-[#E6E6E6] lg:group-hover:text-purple"
          )}
        >
          48h
        </div>
        <div
          className={cn(
            "w-fit max-h-[25rem] h-full flex flex-col justify-between text-xl sm:text-[1.94rem] whitespace-nowrap",
            isTab && !isInView
              ? "opacity-0"
              : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          )}
        >
          {texts.map((text, index) => (
            <p
              key={index}
              className={cn(
                "transition-all duration-[600ms] ease-in-out",
                isTab && !isInView
                  ? index % 2 === 0
                    ? "translate-x-0"
                    : "-translate-x-20"
                  : index % 2 === 0
                    ? "-translate-x-20 lg:group-hover:translate-x-0"
                    : "translate-x-0 lg:group-hover:-translate-x-20"
              )}
            >
              {text}
            </p>
          ))}
          <div
            className={cn(
              "bg-[radial-gradient(var(--tw-gradient-stops))] from-transparent to-purple-light max-lg:to-90% absolute inset-0"
            )}
          ></div>
        </div>
      </div>
      <div className="mt-auto p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight">
          Lightning speed delivery
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[32ch]">
          Make your request, and you'll have it done in around two working days.
        </p>
      </div>
    </div>
  );
});

const Comp2 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();
  return (
    <motion.div
      initial={"initial"}
      animate={isTab && isInView ? "show" : "initial"}
      whileHover={!isTab ? "show" : undefined}
      className={cn(
        "overflow-hidden group rounded-2xl border-2 border-gray-600 flex-1 transition-colors duration-[600ms]",
        isTab && isInView
          ? "max-lg:bg-brown-light"
          : "hover:bg-brown-light bg-transparent"
      )}
    >
      <Design />
      <div className="p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight">
          Unlimited designs and revisions
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[41ch]">
          Request unlimited designs and we will work on them one at a time until
          you are 100% satisfied.
        </p>
      </div>
    </motion.div>
  );
});

const Comp3 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();
  return (
    <motion.div
      animate={isTab && isInView ? "show" : "initial"}
      whileHover={!isTab ? "show" : undefined}
      className={cn(
        "flex-1 overflow-hidden group relative rounded-2xl border-2 border-gray-600 transition-colors duration-[600ms] ",
        isTab && !isInView
          ? "bg-transparent"
          : "max-lg:bg-blue-light hover:bg-blue-light"
      )}
    >
      <Invoice />
      <div className="p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight max-w-[20ch]">
          Top-notch work at a fraction of the cost
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[37ch]">
          Say goodbye to costly traditional agencies. Get all your design needs
          covered for just $2,490/month.
        </p>
      </div>
    </motion.div>
  );
});

const Comp4 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();
  return (
    <div
      className={cn(
        "flex-1 group rounded-2xl border-2 border-gray-600 col-span-1 transition-colors duration-[600ms] relative",
        isTab && !isInView
          ? "bg-transparent"
          : "max-lg:bg-green-light hover:bg-green-light"
      )}
    >
      <div className="h-[15rem] sm:h-[17rem] p-4 sm:p-8 flex flex-col gap-4">
        <p
          className={cn(
            "ml-auto rounded-lg px-4 sm:px-5 py-2.5 sm:py-3.5 sm:text-[1.185rem] transition-all duration-[600ms] ease-in-out",
            isTab && !isInView
              ? "bg-light"
              : "bg-white lg:bg-light lg:group-hover:bg-white"
          )}
        >
          Can you design us a new website?
        </p>
        <div className="ml-auto flex items-center gap-2">
          <div
            className={cn(
              "transition-all ease-in-out duration-[600ms] text-gray-800 text-base",
              isTab && !isInView
                ? "opacity-0 translate-x-4"
                : "translate-x-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-4 lg:group-hover:translate-x-0"
            )}
          >
            5m ago
          </div>
          <Image
            src={"/avatar.svg"}
            alt="like"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </div>
        <p
          className={cn(
            "mr-auto rounded-lg px-4 sm:px-5 py-2.5 sm:py-3.5 sm:text-[1.185rem] transition-all ease-in-out duration-[600ms]",
            isTab && !isInView
              ? "bg-light opacity-0"
              : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100 bg-white lg:bg-light lg:group-hover:bg-white"
          )}
        >
          Sure thing! Will be ready in 2 days 😊
        </p>
        <div
          className={cn(
            "mr-auto transition-all ease-in-out duration-[600ms] flex items-center gap-2",
            isTab && !isInView
              ? "opacity-0"
              : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100 "
          )}
        >
          <Image
            src={"/avatar.svg"}
            alt="like"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <div
            className={cn(
              "transition-all ease-in-out duration-[600ms] text-gray-800 text-base",
              isTab && !isInView
                ? "-translate-x-4"
                : "translate-x-0 lg:-translate-x-4 lg:group-hover:translate-x-0"
            )}
          >
            now
          </div>
        </div>
      </div>
      <div className="relative z-10 p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight max-w-[20ch]">
          Connect directly with your dedicated team
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[32ch]">
          Skip the intermediaries—your team connects directly with our dedicated
          team from within the dashboard.
        </p>
      </div>
    </div>
  );
});

const Comp5 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <motion.div
      initial
      animate={isTab && isInView ? "show" : "initial"}
      whileHover={!isTab ? "show" : undefined}
      className={cn(
        "flex-1 group rounded-2xl border-2 border-gray-600 transition-colors easeInOut duration-[600ms] overflow-hidden",
        isTab && !isInView
          ? "bg-transparent"
          : "hover:bg-red-light max-lg:bg-red-light"
      )}
    >
      <Pause active={isTab && !isInView} />
      <div className="p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight max-w-[20ch]">
          Work on your terms. Pause at any time
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[35ch]">
          No more requests for the time being? Just hit pause and resume your
          subscription at a future date.
        </p>
      </div>
    </motion.div>
  );
});

const Comp6 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();
  return (
    <div
      className={cn(
        "flex-1 overflow-hidden group rounded-2xl border-2 border-gray-600 col-span-1 sm:col-span-2 transition-colors duration-[600ms] relative flex flex-col",
        isTab && !isInView
          ? "bg-transparent"
          : "hover:bg-yellow-light max-lg:bg-yellow-light"
      )}
    >
      <div className="max-sm:hidden w-full h-full absolute">
        <Image
          src={"/workFig.svg"}
          alt="workFig"
          width={500}
          height={500}
          className="w-full h-auto max-h-full absolute "
        />
        <Image
          src={"/workFigActive.svg"}
          alt="workFigActive"
          width={500}
          height={500}
          className={cn(
            "w-full h-auto max-h-full absolute z-[1] transition-opacity duration-[600ms] ",
            isTab && !isInView
              ? "opacity-0"
              : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          )}
        />
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            "w-[3.375rem] absolute top-[28%] transition-all ease-in-out duration-[600ms] z-[3]",
            isTab && !isInView
              ? "left-0"
              : "left-full lg:left-0 translate-x-[-120%] lg:group-hover:left-full"
          )}
        >
          <circle cx="26.5664" cy="27.335" r="26.5" fill="#CB9433" />
          <path
            d="M41.4194 33.2498C41.228 33.8427 40.7058 34.266 40.0911 34.3366L29.0958 35.7557L20.7017 42.3232C20.4037 42.5484 20.0356 42.6696 19.6712 42.6596C19.438 42.6532 19.2059 42.603 18.9905 42.4804C18.4437 42.2027 18.0949 41.6242 18.1117 41.0119L18.8427 14.4365C18.8599 13.8097 19.255 13.237 19.8303 13.0048C20.4061 12.7581 21.0884 12.879 21.5433 13.3145L40.9986 31.5751C41.4389 32.0103 41.6107 32.6569 41.4194 33.2498Z"
            fill="#555555"
          />
          <path
            d="M35.8434 31.3504C35.7227 31.7277 35.3936 31.9972 35.0064 32.0423L28.0796 32.9472L22.7905 37.128C22.6027 37.2714 22.3709 37.3485 22.1413 37.3422C21.9943 37.3382 21.8482 37.3063 21.7125 37.2283C21.3681 37.0517 21.1485 36.6836 21.1592 36.294L21.6243 19.3825C21.6353 18.9836 21.8843 18.6191 22.2467 18.4712C22.6095 18.3141 23.0393 18.3909 23.3258 18.668L35.5786 30.2848C35.8559 30.5616 35.964 30.9731 35.8434 31.3504Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="max-sm:hidden h-[17rem] mb-auto"></div>
      <div className="w-full p-4 sm:hidden relative">
        <Image
          src={"/workMobile.svg"}
          alt="workMobile.svg"
          width={500}
          height={500}
          priority
          className="w-full h-auto"
        />
        <svg
          className={cn(
            "w-[2.5rem] absolute top-[28%] transition-all ease-in-out duration-[600ms] z-[3]",
            isTab && !isInView
              ? "left-0"
              : "left-full lg:left-0 translate-x-[-120%] lg:group-hover:left-full"
          )}
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="26.5664" cy="27.335" r="26.5" fill="#CB9433" />
          <path
            d="M41.4194 33.2498C41.228 33.8427 40.7058 34.266 40.0911 34.3366L29.0958 35.7557L20.7017 42.3232C20.4037 42.5484 20.0356 42.6696 19.6712 42.6596C19.438 42.6532 19.2059 42.603 18.9905 42.4804C18.4437 42.2027 18.0949 41.6242 18.1117 41.0119L18.8427 14.4365C18.8599 13.8097 19.255 13.237 19.8303 13.0048C20.4061 12.7581 21.0884 12.879 21.5433 13.3145L40.9986 31.5751C41.4389 32.0103 41.6107 32.6569 41.4194 33.2498Z"
            fill="#555555"
          />
          <path
            d="M35.8434 31.3504C35.7227 31.7277 35.3936 31.9972 35.0064 32.0423L28.0796 32.9472L22.7905 37.128C22.6027 37.2714 22.3709 37.3485 22.1413 37.3422C21.9943 37.3382 21.8482 37.3063 21.7125 37.2283C21.3681 37.0517 21.1485 36.6836 21.1592 36.294L21.6243 19.3825C21.6353 18.9836 21.8843 18.6191 22.2467 18.4712C22.6095 18.3141 23.0393 18.3909 23.3258 18.668L35.5786 30.2848C35.8559 30.5616 35.964 30.9731 35.8434 31.3504Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="relative z-10 p-4 sm:p-8 flex flex-col gap-2">
        <h3 className="text-2xl sm:text-[2rem] leading-tight max-w-[20ch]">
          High quality work made entirely from scratch
        </h3>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-[33ch]">
          We never use templates. Our team tailors each design and development
          element to your brand's unique identity.
        </p>
      </div>
    </div>
  );
});

const WhatWeOffer = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.3, once: true });
  const isInView2 = useInView(ref2, { amount: 0.3, once: true });
  const isInView3 = useInView(ref3, { amount: 0.3, once: true });
  const isInView4 = useInView(ref4, { amount: 0.3, once: true });
  const isInView5 = useInView(ref5, { amount: 0.3, once: true });
  const isInView6 = useInView(ref6, { amount: 0.3, once: true });

  return (
    <section className="container-2560 p-con flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            What We Offer
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2 max-sm:max-w-[15ch]">
            Perks You'll Love, and More
          </h1>
        </MountAnim>
        <MountAnim>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-[44ch] mb-4">
            Limitless projects, premium quality, and unmatched flexibility. Yes,
            it's really as good as it sounds.
          </p>
        </MountAnim>
        <MountAnim>
          <Button btnType="light">Explore Our Work</Button>
        </MountAnim>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[40.54%_23.39%_32.26%] gap-8">
        {/* first row */}
        <div ref={ref1} className="col-span-1 flex">
          <Comp1 isInView={isInView1} />
        </div>
        <div ref={ref2} className="col-span-1 sm:col-span-2 flex">
          <Comp2 isInView={isInView2} />
        </div>

        <div ref={ref3} className="col-span-1 sm:col-span-2 flex">
          <Comp3 isInView={isInView3} />
        </div>
        <div ref={ref4} className="col-span-1 flex">
          <Comp4 isInView={isInView4} />
        </div>

        <div ref={ref5} className="col-span-1 flex">
          <Comp5 isInView={isInView5} />
        </div>
        <div ref={ref6} className="col-span-1 sm:col-span-2 flex">
          <Comp6 isInView={isInView6} />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
