"use client";

import React, { useState } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import { easeInOut, motion } from "framer-motion";

import gsap from "gsap";
import { useResponsiveStates } from "../(utils)/hooks";
import StaggerMount from "./ui/StaggerMount";

const faqs = [
  {
    title:
      "How do I get started with your services, and what's the first step?",
    detail:
      "Getting started is simple! You can book a free consultation call where we'll discuss your goals, project requirements, and recommend the best solution tailored to your needs.",
  },
  {
    title:
      "Do you work with businesses of all sizes, or do you focus on specific industries?",
    detail:
      "Yes, we work with most industries! Whether it's your Shopify store to boost sales, a WordPress or Webflow website, or a React-powered web app for your SaaS product, we do it all. Our expertise covers everything from eCommerce to custom web solutions, ensuring top-tier results.",
  },
  {
    title:
      "How long does it usually take to complete a project from start to finish?",
    detail:
      "The timeline depends on the project's complexity and scope. We focus on efficiency, keeping you updated at every stage while ensuring high-quality results within a reasonable timeframe.",
  },
  {
    title: "Can I see examples of your past work before making a decision?",
    detail: (
      <>
        Absolutely! We have a detailed portfolio showcasing our past projects,
        highlighting our expertise in UI/UX, development, and conversion
        optimization for various industries. Check our{" "}
        <a href="/Portfolio" className="text-prim underline">
          awesome work
        </a>
      </>
    ),
  },
  {
    title: "What makes your agency stand out from others in the industry?",
    detail:
      "We prioritize quality, transparency, and measurable results. Our team provides tailored solutions, ongoing support, and a strategic approach to help businesses grow and succeed.",
  },
];

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const { isTab } = useResponsiveStates();

  const toggleFAQ = (index) => {
    setActiveFAQ((prev) => {
      if (prev === index) return null;
      return index;
    });
  };

  const handleMouseMove = (e) => {
    if (isTab) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector("#sticky");
    const boxRect = card.getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;
    const moveX = (x / boxRect.width - 0.5) * 20;
    const moveY = (y / boxRect.height - 0.5) * 20;
    gsap.to(moveBtn, {
      x: `${-(moveX * 6)}%`,
      y: `${-(moveY * 2)}%`,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    if (isTab) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector("#sticky");
    gsap.to(moveBtn, {
      x: "0%",
      y: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter = (e) => {
    if (isTab) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector("#sticky");
    gsap.to(moveBtn, {
      x: "0%",
      y: "0%",
      duration: 0.3,
    });
  };

  return (
    <section className="pt-12 container-2560 sm:pt-24 pb-6 sm:pb-12 px-con flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            FAQ's
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">
            Frequently <br />
            asked questions
          </h1>
        </MountAnim>
      </div>
      <div className="flex flex-col">
        {faqs.map((item, index) => (
          <StaggerMount
            key={index}
            onClick={() => toggleFAQ(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className={`group relative overflow-hidden focus:outline-none cursor-pointer h-fit transition-colors border-b ${index === activeFAQ || index === activeFAQ - 1
              ? "border-transparent"
              : "border-gray"
              }`}
          >
            <div className="relative z-10 px-[1.25rem] sm:px-[1.875rem] py-7 sm:py-10 sm:mr-[6.25rem]">
              <h4 className="text-[1.2rem] sm:text-[1.5rem] text-dark sm:max-w-[73ch] font-medium leading-snug max-sm:pr-[3rem]">
                {item.title}
              </h4>
              <motion.div
                initial={false}
                animate={{
                  height: activeFAQ === index ? "auto" : 0,
                }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <p className="sm:max-w-[95ch] pt-3.5 sm:pt-5 text-lg sm:text-[1.375rem] text-gray-700 max-sm:leading-snug">
                  {item.detail}
                </p>
              </motion.div>
            </div>

            <div
              id="sticky"
              className={`absolute right-5 max-sm:right-5 max-lg:right-10 lg:left-[90%] top-7 sm:top-[calc(50%-1.5rem)] lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 z-[1]`}
            >
              <div
                className={`${activeFAQ === index
                  ? " border-prim bg-prim text-white"
                  : " border-gray-600 bg-white text-dark"
                  } transition-all duration-500 border size-[1.875rem] sm:size-[3.125rem] rounded-lg sm:rounded-2xl lg:group-hover:scale-100 scale-100 lg:scale-0 origin-center`}
              >
                <div className="w-2.5 sm:w-[1.25rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
                <div
                  className={`${activeFAQ === index ? "rotate-0" : "rotate-90"
                    } transition-transform duration-500 w-2.5 sm:w-[1.25rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                ></div>
              </div>
            </div>

            <motion.div
              initial={false}
              animate={{
                height: activeFAQ === index ? "100%" : 0,
              }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 right-0 bottom-0 origin-top pointer-events-none overflow-hidden"
            >
              <div className="bg-light border-gray-600 border w-full h-full rounded-2xl"></div>
            </motion.div>
          </StaggerMount>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
