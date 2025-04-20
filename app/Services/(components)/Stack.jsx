"use client";

import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import React, { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/app/(components)/ui/Button";
import LinkEffect from "@/app/(components)/ui/LinkEffect";
import { useResponsiveStates } from "@/app/(utils)/hooks";
import dynamic from "next/dynamic";

// import Icon from "@/app/(components)/ui/Icon";
const Icon = dynamic(() => import("@/app/(components)/ui/Icon"), {
  ssr: false,
});
gsap.registerPlugin(ScrollTrigger);

const Stack = ({ badge, title, subtitle, labels, detail, data }) => {
  const section = useRef();
  const container = useRef();
  const stack = useRef();
  const { isTab, isMobile } = useResponsiveStates();

  useGSAP(
    () => {
      if (!isTab) {
        const cardStack = stack.current;
        const tl = gsap.timeline();

        for (let j = 0; j < cardStack.children.length; j++) {
          for (let i = 0; i < cardStack.children.length; i++) {
            const child = cardStack.children[i];

            if (i >= j) {
              tl.to(
                child,
                {
                  yPercent: -92 * (j + 1),
                  ease: "none",
                },
                j + "unique"
              );
            } else {
              tl.to(
                child,
                {
                  scale: 1 - 0.1 * (j - i),
                  // scale: Math.pow(0.9, j - i),
                  // y: 20 * (j - i),
                  ease: "none",
                },
                j + "unique"
              ).to(
                child.getElementsByClassName("overlay")[0],
                {
                  opacity: 1 - 0.1 * j,
                  ease: "none",
                },
                j + "unique"
              );
            }
          }
        }

        ScrollTrigger.create({
          trigger: section.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          animation: tl,
        });
      }
      if (isMobile) {
        const cardStack = stack.current;
        const tl = gsap.timeline();

        for (let j = 0; j < cardStack.children.length; j++) {
          for (let i = 0; i < cardStack.children.length; i++) {
            const child = cardStack.children[i];

            if (i >= j) {
              tl.to(
                child,
                {
                  yPercent: -92 * j,
                  ease: "none",
                },
                j + "unique"
              );
            } else {
              tl.to(
                child,
                {
                  scale: 1 - 0.1 * (j - i),
                  ease: "none",
                },
                j + "unique"
              ).to(
                child.getElementsByClassName("overlay")[0],
                {
                  opacity: 1 - 0.1 * j,
                  ease: "none",
                },
                j + "unique"
              );
            }
          }
        }

        ScrollTrigger.create({
          trigger: section.current,
          start: "300px top",
          end: "bottom bottom",
          scrub: true,
          animation: tl,
        });
      }
    },
    { dependencies: [isTab, isMobile] }
  );

  return (
    <section
      ref={section}
      className="w-full relative max-sm:h-[calc(300vh+100vw)] lg:h-[300vh] bg-dark text-light"
    >
      <div ref={container} className="sticky max-sm:top-[-100vw] lg:top-0 flex">
        <div className="flex px-con h-[calc(100vh+100vw)] sm:h-fit lg:h-screen gap-8 max-sm:py-8 max-lg:py-5 max-sm:flex-col relative">
          <div className="flex-1 flex-shrink-0 flex py-con items-center">
            <div className="flex flex-col gap-9">
              <MountAnim className="flex max-sm:flex-col items-start sm:items-center gap-5">
                <Badge nodot variant="yellow">
                  {badge}
                </Badge>
                <h1 className="heading2">{title}</h1>
              </MountAnim>
              <p className="text-lg sm:text-[2rem] lg:text-2xl leading-normal text-gray-700 font-medium pr-6">
                <span className="text-light">{subtitle}</span>
                <br />
                {detail}
              </p>
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 max-sm:gap-y-[1.5rem] gap-x-[2rem] lg:gap-x-[8.75rem] mb-4">
                {labels.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="border-b border-white  font-medium text-base sm:text-[2rem] lg:text-2xl text-gray-900"
                    >
                      <LinkEffect
                        noicon
                        textClass={"px-2 sm:px-5 py-4 sm:py-10 w-full"}
                        hoverColor={"text-white"}
                        text={item}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="max-sm:hidden lg:hidden w-full h-fit flex flex-wrap justify-center text-dark max-lg:gap-8 py-8">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[calc((100%/3)-2rem)] lg:w-[40rem] lg:aspect-[1.6] lg:pb-16 origin-center overflow-hidden rounded-xl"
                    >
                      <div
                        className={`${item.color} rounded-xl w-full h-full relative border border-dark flex gap-5 px-8 py-10`}
                      >
                        <div className="flex flex-col gap-5 font-medium">
                          <div className="flex flex-col gap-5 relative">
                            <h2 className="max-lg:pr-[9rem] text-[2rem] lg:text-2xl">
                              0{index + 1}
                            </h2>
                            <h3 className="max-lg:max-w-[10ch] leading-tight text-[2.1rem] lg:text-3xl">
                              {item.title}
                            </h3>
                            <div className="absolute right-0 top-0 lg:hidden size-[7.6rem] rounded-full bg-white flex-shrink-0 flex-grow-0 grid place-content-center">
                              <div className="size-[5rem] lg:size-[4.375rem]">
                                <Icon size={"100%"} src={item.icon} />
                              </div>
                            </div>
                          </div>
                          <p className="text-[1.75rem] lg:text-2xl text-gray-500 mt-3 max-lg:leading-snug">
                            {item.detail}
                          </p>
                        </div>
                        <div className="max-lg:hidden size-[7.6rem] lg:size-[6.25rem] rounded-full bg-white flex-shrink-0 flex-grow-0 grid place-content-center">
                          <div className="size-[5rem] lg:size-[4.375rem]">
                            <Icon size={"100%"} src={item.icon} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button
                btnType="light"
                className={"border-white max-lg:mx-auto max-sm:hidden"}
              >
                Book Your Free Consultation
              </Button>
            </div>
          </div>
          <div className="flex sm:hidden lg:flex sm:flex-1 flex-shrink-0 py-con">
            <div
              className="sm:mt-[50vh] w-full h-fit flex flex-nowrap items-end flex-col text-dark"
              ref={stack}
            >
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full sm:w-[40rem] sm:aspect-[1.6] pb-16 origin-center overflow-hidden rounded-xl"
                  >
                    <div
                      className={`${item.color} rounded-xl w-full max-sm:h-[18.125rem] sm:h-full relative border border-dark flex gap-5 px-5 sm:px-8 py-5 sm:py-10`}
                    >
                      <div className="flex flex-col gap-4 sm:gap-5 font-medium">
                        <div className="flex flex-col gap-3 sm:gap-5 font-medium relative">
                          <h2 className="text-[1.375rem] sm:text-2xl">
                            0{index + 1}
                          </h2>
                          <h3 className="text-2xl sm:text-3xl">{item.title}</h3>
                          <div className="absolute right-0 top-0 sm:hidden size-[5rem] rounded-full bg-white flex-shrink-0 flex-grow-0 grid place-content-center">
                            <div className="size-[3rem]">
                              <Icon size={"100%"} src={item.icon} />
                            </div>
                          </div>
                        </div>
                        <p className="text-xl sm:text-2xl text-gray-500 mt-3">
                          {item.detail}
                        </p>
                      </div>
                      <div className="max-sm:hidden size-[6.25rem] rounded-full bg-white flex-shrink-0 flex-grow-0 grid place-content-center">
                        <div className="size-[4.375rem]">
                          <Icon size={"100%"} src={item.icon} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
