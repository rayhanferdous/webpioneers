"use client";

import React, { useState } from "react";

import gsap from "gsap";
import { motion } from "framer-motion";
import { useResponsiveStates } from "@/app/(utils)/hooks";
import { Badge } from "@/app/(components)/ui/Badge";
import StaggerMount from "@/app/(components)/ui/StaggerMount";
import MountAnim from "@/app/(components)/ui/MountAnim";

const benefits = [
  {
    title: "Improved User Experience",
    detail:
      "A professionally designed website ensures a smooth and enjoyable user experience, making it easy for visitors to find information and interact with your brand.",
  },
  {
    title: "Enhanced Brand Identity",
    detail:
      "Custom web design helps in creating a unique brand identity that stands out from competitors and resonates with your target audience.",
  },
  {
    title: "Increased Credibility",
    detail:
      "A well-designed website establishes credibility and trust with your audience, showcasing your professionalism and attention to detail.",
  },
  {
    title: "Mobile Responsiveness",
    detail:
      "Responsive web design ensures that your website looks and functions perfectly on all devices, providing a seamless experience for mobile users.",
  },
  {
    title: "Better SEO",
    detail:
      "SEO-friendly web development practices improve your website's visibility on search engines, driving more organic traffic to your site.",
  },
  {
    title: "Faster Load Times",
    detail:
      "Optimized web development techniques result in faster load times, reducing bounce rates and improving user satisfaction.",
  },
  {
    title: "Scalability",
    detail:
      "A well-developed website can easily scale with your business, accommodating future growth and new functionalities as needed.",
  },
  {
    title: "Competitive Edge",
    detail:
      "In today's digital landscape, having a modern, functional website gives you a competitive edge, helping you attract and retain customers.",
  },
];

const Benefits = () => {
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
    <section className="py-12 sm:py-24 px-con flex flex-col gap-5 sm:gap-14">
      <MountAnim className="flex max-sm:flex-col items-start sm:items-center gap-5">
        <Badge nodot variant="yellow">
          Benefits
        </Badge>
        <h1 className="heading2">Why you Need This Service</h1>
      </MountAnim>
      <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 font-medium">
        <span className="text-dark">Web Design & Development</span> is crucial
        in establishing a strong online presence and providing a seamless user
        experience.{" "}
        <span className="text-dark">
          A well-designed website not only attracts visitors but also converts
          them into loyal customers.
        </span>{" "}
        By leveraging modern design principles and development techniques,
        businesses can create a website that effectively communicates their
        brand message and meets their business objectives. Here are several
        reasons why someone might need web design and development for their
        business:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {benefits.map((item, index) => (
          <StaggerMount key={index}>
            <div
              onClick={() => toggleFAQ(index)}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              className={`group relative overflow-hidden focus:outline-none cursor-pointer h-fit transition-colors border rounded-xl sm:rounded-2xl border-gray-600`}
            >
              <div className="relative z-10 p-5 sm:p-6 sm:mr-[6.25rem]">
                <div className="flex items-center gap-6 text-[1.25rem] sm:text-[1.75rem]">
                  <h3 className=" text-gray-800 font-medium leading-snug ">
                    0{index + 1}.
                  </h3>
                  <h4 className=" text-dark sm:max-w-[73ch] font-medium leading-snug">
                    {item.title}
                  </h4>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: activeFAQ === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden flex gap-6"
                >
                  <h3 className="text-[1.2rem] sm:text-[1.5rem] text-gray-800 sm:max-w-[73ch] font-medium leading-snug opacity-0">
                    0{index + 1}.
                  </h3>
                  <p className="sm:max-w-[73ch] pt-3.5 sm:pt-5 text-lg sm:text-[1.325rem] text-gray-700 leading-snug font-medium">
                    {item.detail}
                  </p>
                </motion.div>
              </div>

              <div
                id="sticky"
                className={`absolute right-5 sm:left-[92%] top-5 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[1]`}
              >
                <div
                  className={`${
                    activeFAQ === index
                      ? " border-prim bg-prim text-white"
                      : " border-gray bg-white text-dark"
                  } transition-all duration-500 border size-[1.75rem] sm:size-[2.1rem] rounded-lg sm:rounded-xl sm:group-hover:scale-100 scale-100 origin-center`}
                >
                  <div className="w-[0.7rem] sm:w-[0.8rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
                  <div
                    className={`${
                      activeFAQ === index ? "rotate-0" : "rotate-90"
                    } transition-transform duration-500 w-[0.7rem] sm:w-[0.8rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
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
                <div className="bg-light w-full h-full rounded-2xl"></div>
              </motion.div>
            </div>
          </StaggerMount>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
