"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function InfiniteMarquee({
  children,
  direction = "left",
  speed = 0.2,
}) {
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
      className={`w-full flex justify-center items-center overflow-hidden whitespace-nowrap`}
    >
      <div ref={marquee} className="h-full relative">
        <div className="h-full flex w-fit flex-nowrap items-center" ref={first}>
          {children}
        </div>
        <div
          ref={second}
          className="h-full flex flex-nowrap items-center absolute left-full top-0 w-fit"
        >
          {children}
        </div>
      </div>
    </section>
  );
}
