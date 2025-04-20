"use client";

import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeWork = () => {
  const container = useRef();

  const Data = [
    {
      title: "Discovery Phase",
      detail:
        "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
      color: "bg-purple-light",
    },
    {
      title: "Strategy Development",
      detail:
        "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively.",
      color: "bg-yellow-light",
    },
    {
      title: "Implementation and Execution",
      detail:
        "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency, whether it's optimizing your website for search engines, crafting engaging social media content, or designing captivating visuals.",
      color: "bg-blue-light",
    },
    {
      title: "Monitoring and Optimization",
      detail:
        "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment.",
      color: "bg-green-light",
    },
  ];

  useGSAP(
    () => {
      const Cards = gsap.utils.toArray(".Card");

      Cards.forEach((Card) => {
        const CardDetail = Card.querySelector(".CardDetail");
        const CardIndex = Card.querySelector(".CardIndex");

        if (CardDetail) {
          const tl = gsap.timeline();
          tl.fromTo(
            CardDetail,
            { y: "150%" },
            {
              y: 0,
              duration: 1,
              ease: "none",
            }
          );

          ScrollTrigger.create({
            trigger: Card,
            start: "top bottom",
            end: "top 40%",
            scrub: 3,
            animation: tl,
          });
        }
        if (CardIndex) {
          const tl2 = gsap.timeline();
          tl2.to(
            CardIndex,
            {
              color: "#ffff",
              opacity: 1,
              ease: "none",
            },
            "a"
          );

          ScrollTrigger.create({
            trigger: Card,
            start: "top 60%",
            end: "top 30%",
            scrub: 3,
            animation: tl2,
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative z-50 py-10 sm:py-20 px-con bg-dark text-light flex flex-col gap-12 sm:gap-20 items-center mb-12 overflow-hidden"
    >
      <div className="text-center hidden sm:flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            How We Work
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">Our 4 Stages Process</h1>
        </MountAnim>
      </div>
      <div className="w-full">
        <div className="mx-auto w-fit flex flex-col gap-5">
          {Data.map((item, index) => {
            return (
              <div key={index} className="Card flex gap-4 sm:gap-[8.75rem]">
                <div className="flex flex-col gap-3 items-center flex-grow-0">
                  <h2 className="CardIndex text-[#959595] text-[3.125rem] sm:text-[12.5rem] lg:text-[7.5rem] leading-none font-medium sm:my-6 w-[2ch] text-center opacity-50">
                    0{index + 1}
                  </h2>
                  <div
                    className={`${
                      index === Data.length - 1
                        ? "bg-transparent"
                        : "bg-[#959595]"
                    } mx-auto w-[3px] h-full flex-grow opacity-50`}
                  ></div>
                </div>
                <div
                  className={`CardDetail max-w-full sm:max-w-[70rem] lg:max-w-[60rem] flex flex-col gap-4 items-start p-5 sm:p-12 lg:p-10 rounded-2xl text-dark mb-8 sm:mb-[6rem] lg:mb-[12.3rem] ${item.color}`}
                >
                  <Badge nodot className={"bg-white"}>
                    Step 0{index + 1}
                  </Badge>
                  <h4 className="mt-1 font-medium text-[1.375rem] sm:text-[2.1rem] lg:text-4xl">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-[1.25rem] sm:text-[1.75rem] lg:text-2xl max-sm:leading-tight">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
