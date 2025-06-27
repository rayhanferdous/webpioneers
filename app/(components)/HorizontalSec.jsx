"use client";

import React, { useRef, useState } from "react";
import { cn } from "../(utils)/utils";
import { useResponsiveStates } from "../(utils)/hooks";
import { Badge } from "./ui/Badge";
import ArrowBR from "../(assets)/arrowBR";
import MountAnim from "./ui/MountAnim";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./ui/Icon";
import FeedbackCarousel from "./ui/FeedbackCarousel";
gsap.registerPlugin(ScrollTrigger);

const Data = [
  {
    id: "01",
    name: "Ellie Nguyen",
    position: "Jellice",
    feedback:
      "They consistently set and achieve clear goals with a strong work ethic, creativity, and skillfulness, while meeting deadlines and effectively solving problems.",
    customClass: "bottom-0 left-[108rem] bg-blue-light border-blue-dark",
    customIndex: "bg-blue",
  },
  {
    id: "02",
    name: "Liam Walker",
    position: "Zenith",
    feedback:
      "Their dedication, creativity, and timely delivery of the website exceeded our expectations. We're thrilled with the end result, and it beautifully reflects the essence of Flora.",
    customClass: "top-0 left-[182rem] bg-green-light border-green-dark",
    customIndex: "bg-green",
  },
  {
    id: "03",
    name: "Ivan Petrov",
    position: "Daxo Event Management",
    feedback:
      "They didn't just deliver exceptional work; they genuinely took the time to listen and understand our goals. Their ideas went beyond our expectations.",
    customClass: "bottom-0 left-[254rem] bg-purple-light border-purple-dark",
    customIndex: "bg-purple",
  },
  {
    id: "04",
    name: "Nathan Pierce",
    position: "Fundex Marketing",
    feedback:
      "Nailed every single time. Creativity? Off the charts. They took our loose concepts and transformed them into a bold, modern brand identity that resonates with our audience. ",
    customClass: "top-0 left-[330rem] bg-yellow-light border-yellow-dark",
    customIndex: "bg-yellow",
  },
];

const HorizontalSec = () => {
  const containerRef = useRef(null);
  const { isTab, isMobile } = useResponsiveStates();

  useGSAP(
    () => {
      if (!isTab && !isMobile) {
        const items = gsap.utils.toArray(".HRItems");
        const tl = gsap.timeline();

        tl.fromTo(
          "#text",
          {
            x: "0",
            xPercent: -0,
          },
          {
            x: "100vw",
            xPercent: -100,
            ease: "none",
          }
        );

        items?.forEach((item, i) => {
          tl.fromTo(
            item,
            { x: "60vw" },
            { x: "-60vw", ease: "none" },
            "<" // Play simultaneously with the previous animation
          );
        });

        tl.to(
          "#text > *:not(#worktext)",
          { opacity: 0, ease: "none", duration: 0.05 },
          "worktext"
        ).to(
          "#worktext",
          { scale: 1.5, ease: "none", duration: 0.1 },
          "worktext"
        );

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: true,
          animation: tl,
        });

        if (!isTab) {
          const tl2 = gsap.timeline();
          tl2.to("#sticky", { yPercent: 100, ease: "none" });

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom top",
            invalidateOnRefresh: true,
            scrub: true,
            animation: tl2,
          });
        }
      }
    },
    {
      scope: containerRef,
      dependencies: [isTab, isMobile],
    }
  );

  return (
    <section ref={containerRef} className="relative lg:h-[1000vh]">
      {!isMobile && !isTab && (
        <div
          id="sticky"
          className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center pointer-events-none"
        >
          <div
            id="text"
            className={
              "px-con text-[18.6rem] leading-none whitespace-nowrap w-fit capitalize flex flex-nowrap items-center gap-[.5ch] font-normal relative h-full"
            }
          >
            {/* {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "HRItems absolute my-[6vh] text-base p-8 flex flex-col gap-6 border-2 rounded-2xl w-full max-w-[89ch] translate-x-[60vw]",
                    item.customClass
                  )}
                >
                  <div className="flex gap-6">
                    <div
                      className={cn(
                        "text-[1.125rem] size-10 rounded-full grid place-content-center text-white",
                        item.customIndex
                      )}
                    >
                      0{index + 1}
                    </div>
                    <div className="text-2xl flex flex-col gap-3">
                      <p className="leading-none font-medium">{item.name}</p>
                      <p className="leading-none">{item.position}</p>
                    </div>
                  </div>
                  <p className="text-[1.5rem] max-w-full whitespace-normal text-wrap leading-snug text-[#535353]">
                    {item.feedback}
                  </p>
                </div>
              );
            })} */}
            <span className="relative">
              Why they
              <MountAnim className={"left-0 bottom-full absolute"}>
                <Badge nodot size="l" variant="yellow" className="gap-3">
                  Portfolio This Way{" "}
                  <ArrowBR className="w-[0.5em] h-auto -rotate-45" />
                </Badge>
              </MountAnim>
            </span>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/oswimbuv.json"}
              />
            </div>
            <span>love us - take a</span>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/snxksidl.json"}
              />
            </div>
            <span>look at our</span>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/ewtvnblg.json"}
              />
            </div>
            <span>amazing</span>
            <span id="worktext" className="inline-block">
              work
            </span>
            <div className="flex-shrink-0 w-[calc(50vw-2.35ch-7.4rem)]"></div>
          </div>
        </div>
      )}

      {!isMobile && isTab && (
        <div className="max-sm:hidden lg:hidden py-con flex flex-col gap-2">
          <MountAnim className="px-con text-[6.6rem] capitalize leading-snug flex flex-col gap-2">
            <Badge nodot size="l" variant="yellow" className="gap-3 mr-auto">
              Portfolio This Way{" "}
              <ArrowBR className="w-[0.5em] h-auto -rotate-45" />
            </Badge>
            <div className="flex gap-4">
              <span>Why they</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/oswimbuv.json"}
                />
              </div>

              <span>love us - take</span>
            </div>
            <div className="flex gap-4">
              <span>a</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/snxksidl.json"}
                />
              </div>

              <span>look at our</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/ewtvnblg.json"}
                />
              </div>
              <span>amazing</span>
            </div>
            <div className="flex gap-4">
              <span>work</span>
            </div>
          </MountAnim>

          <div className="flex flex-col gap-4 mt-8">
            {/* <FeedbackCarousel Data={Data} /> */}
          </div>
        </div>
      )}

      {isMobile && (
        <div className="sm:hidden py-con flex flex-col gap-2">
          <MountAnim className="px-con text-4xl capitalize leading-snug">
            <h2 className="flex gap-3 items-center">
              Why they
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/oswimbuv.json"}
                />
              </div>
            </h2>
            <h2>love us</h2>
          </MountAnim>

          {/* <div className="flex flex-col gap-4 mb-8">
            <FeedbackCarousel Data={Data} />
          </div> */}

          <MountAnim className="px-con text-4xl capitalize leading-snug">
            <Badge nodot variant="yellow">
              Our Portfolio
            </Badge>
            <h2 className="flex gap-3 items-center">
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/snxksidl.json"}
                />
              </div>
              take a look at
            </h2>
            <h2 className="flex gap-3 items-center">
              our
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/ewtvnblg.json"}
                />
              </div>
              amazing
            </h2>
            <h2>work</h2>
          </MountAnim>
        </div>
      )}
    </section>
  );
};

export default HorizontalSec;
