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
    title: "Our History",
    detail:
      "As freelancers, we faced the same challenges many others did—lack of flexibility, poor communication, and inefficient tools. That's when we decided to change the game. Justin Bundt, with his big ideas, and Zoheb Hassan, with his sharp design skills, came together to create a platform that redefines how projects are managed and executed. Our journey began with this shared goal, and we continue to grow by turning challenges into opportunities for our clients.",
  },
  {
    title: "Our Mission",
    detail:
      "Our mission is to deliver exceptional results by combining innovation, design, and strategy. We focus on creating solutions that not only solve problems but also elevate the overall experience. Through a commitment to transparency and collaboration, we ensure our clients achieve success in every project.",
  },
  {
    title: "Our Vision",
    detail:
      "Having experienced the challenges of freelancing firsthand, we saw the need for more flexibility and better communication in project management. Our vision is to offer a platform that addresses these pain points, enabling clients and businesses to manage projects seamlessly while fostering strong, transparent relationships.",
  },
];

const OurEdge = () => {
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
    <section className="pt-12 sm:pt-24 px-con flex max-sm:flex-col gap-5 sm:gap-14 sm:items-center">
      <div className="sm:w-1/2 flex flex-col gap-5">
        <MountAnim className="flex max-sm:flex-col items-start sm:items-center gap-5">
          <Badge nodot variant="yellow">
            Our Edge
          </Badge>
        </MountAnim>
        <div>
          <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 font-medium max-w-[36ch]">
            <span className="text-dark">Let's get acquainted!</span> We're not
            your typical design agency — we're a team of passionate individuals
            who live and breathe creativity, innovation, and everything digital.
            At <span className="text-dark">Web Pioneers</span>, our mission is
            to bring your online vision to life, one pixel at a time.
          </p>
          <p className="mt-8 text-[1.375rem] sm:text-[2rem] text-gray-700 font-medium max-w-[35ch]">
            We're a group of tech-savvy creators and design enthusiasts who
            believe building digital products should be fun, exciting, and
            nothing short of amazing!
          </p>
        </div>
      </div>
      <div className="sm:w-1/2 grid grid-cols-1 gap-6 sm:gap-8 h-fit">
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

export default OurEdge;
