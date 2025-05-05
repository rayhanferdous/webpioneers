"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Data = [
  "Focused on Success",
  "Skills That Deliver",
  "Results That Last",
  "Achieve More, Together",
];

const ArrayData = [...Data, ...Data];

export default function Marquee({ direction, speed, dark }) {
  //return null when onload
  if (typeof window === "undefined") {
    return null;
  }
  const marquee = useRef();
  const first = useRef();
  const second = useRef();
  let xPercent = 0;

  const rightAnimation = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(rightAnimation);
    xPercent += speed / 10;
  };

  const leftAnimation = () => {
    if (xPercent < -100) {
      xPercent = 0;
    }
    gsap.to([first.current, second.current], {
      xPercent: xPercent,
      duration: 0,
    });
    requestAnimationFrame(leftAnimation);
    xPercent -= speed / 10;
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  return (
    <section
      className={`w-full py-3 sm:py-5 flex justify-center items-center overflow-hidden border-y text-2xl sm:text-[2.5rem] whitespace-nowrap ${dark ? "border-transparent bg-dark" : "border-dark bg-white"
        }`}
    >
      <div ref={marquee} className="h-full relative">
        <div className="h-full flex w-fit flex-nowrap items-center" ref={first}>
          {ArrayData.map((item, index) => (
            <div
              key={index}
              className="mx-2 sm:mx-6 flex flex-shrink-0 gap-4 sm:gap-12 flex-nowrap w-fit items-center"
            >
              <p
                className={`flex-shrink-0 transition-colors duration-200 ${dark
                  ? "text-white sm:text-[#A0A0A0] hover:text-white"
                  : "text-dark sm:text-[#A0A0A0] hover:text-dark"
                  }`}
              >
                {item}
              </p>
              <p className="flex-shrink-0 text-prim text-[2em] leading-none pb-[0.1em]">
                -
              </p>
            </div>
          ))}
        </div>
        <div
          ref={second}
          className="h-full flex flex-nowrap items-center absolute left-full top-0 w-fit"
        >
          {ArrayData.map((item, index) => (
            <div
              key={index}
              className="mx-2 sm:mx-6 flex flex-shrink-0 gap-4 sm:gap-12 flex-nowrap w-fit items-center"
            >
              <p
                className={`flex-shrink-0 transition-colors duration-200 ${dark
                  ? "text-white sm:text-[#A0A0A0] hover:text-white"
                  : "text-dark sm:text-[#A0A0A0] hover:text-dark"
                  }`}
              >
                {item}
              </p>
              <p className="flex-shrink-0 text-prim text-[2em] leading-none pb-[0.1em]">
                -
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
