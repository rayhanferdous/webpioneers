"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data1 = [
  "/brands/logo1.svg",
  "/brands/logo2.svg",
  "/brands/logo3.svg",
  "/brands/logo4.svg",
  "/brands/logo5.svg",
  "/brands/logo6.svg",
  "/brands/logo7.svg",
  "/brands/logo8.svg",
  "/brands/logo9.svg",
];
const data2 = [
  "/brands/logo10.svg",
  "/brands/logo11.svg",
  "/brands/logo12.svg",
  "/brands/logo13.svg",
  "/brands/logo14.svg",
  "/brands/logo15.svg",
  "/brands/logo16.svg",
  "/brands/logo17.svg",
  "/brands/logo18.svg",
  "/brands/logo19.svg",
];

export default function BrandsMarquee({ direction }) {
  const ArrayData1 = [...data1, ...data1, ...data1];
  const ArrayData2 = [...data2, ...data2, ...data2];

  const firsta = useRef();
  const seconda = useRef();

  const rightAnimation = () => {
    gsap.fromTo(
      [firsta.current],
      { x: "-50%" },
      {
        x: "0%",
        ease: "none",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      [seconda.current],
      { x: "0%" },
      {
        x: "-50%",
        ease: "none",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  };

  const leftAnimation = () => {
    gsap.fromTo(
      [firsta.current],
      { x: "25%" },
      {
        x: "-25%",
        ease: "none",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      [seconda.current],
      { x: "-25%" },
      {
        x: "25%",
        ease: "none",
        scrollTrigger: {
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  };

  useEffect(() => {
    if (direction === "left") {
      requestAnimationFrame(leftAnimation);
    } else {
      requestAnimationFrame(rightAnimation);
    }
  }, [direction]);

  return (
    <section className={`w-full flex flex-col overflow-hidden`}>
      <div className="h-full flex w-fit flex-nowrap py-4" ref={firsta}>
        {ArrayData1.map((item, index) => (
          <Image
            src={item || "/placeholder.svg"}
            width={150}
            height={72}
            priority
            loading="eager"
            key={index}
            alt={`Brand logo ${index + 1}`}
            className="flex-shrink-0 w-auto h-[3rem] sm:h-[4.5rem] mx-4 sm:mx-8 opacity-40 transition-colors duration-300 hover:opacity-100"
          />
        ))}
      </div>
      <div className="h-full flex w-fit flex-nowrap py-4" ref={seconda}>
        {ArrayData2.map((item, index) => (
          <Image
            src={item || "/placeholder.svg"}
            width={150}
            height={72}
            priority
            loading="eager"
            key={index}
            alt={`Brand logo ${index + 1}`}
            className="flex-shrink-0 w-auto h-[3rem] sm:h-[4.5rem] mx-4 sm:mx-8 opacity-40 transition-colors duration-300 hover:opacity-100"
          />
        ))}
      </div>
    </section>
  );
}
