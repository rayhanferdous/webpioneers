"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const data1 = [
  "/webdesigns/img1.png",
  "/webdesigns/img2.png",
  "/webdesigns/img3.png",
  "/webdesigns/img4.png",
  "/webdesigns/img5.png",
  "/webdesigns/img6.png",
  "/webdesigns/img7.png",
  "/webdesigns/img8.png",
  "/webdesigns/img9.png",
];
const data2 = [
  "/webdesigns/img10.png",
  "/webdesigns/img11.png",
  "/webdesigns/img12.png",
  "/webdesigns/img13.png",
  "/webdesigns/img14.png",
  "/webdesigns/img15.png",
  "/webdesigns/img16.png",
  "/webdesigns/img17.png",
  "/webdesigns/img18.png",
];
const data3 = [
  "/webdesigns/img19.png",
  "/webdesigns/img20.png",
  "/webdesigns/img21.png",
  "/webdesigns/img22.png",
  "/webdesigns/img23.png",
  "/webdesigns/img24.png",
  "/webdesigns/img25.png",
  "/webdesigns/img26.png",
  "/webdesigns/img27.png",
];

export default function HeroMarquee({ direction }) {
  const ArrayData1 = data1;
  const ArrayData2 = data2;
  const ArrayData3 = data3;

  const firsta = useRef();
  const firstb = useRef();
  const seconda = useRef();
  const secondb = useRef();
  const thirda = useRef();
  const thirdb = useRef();

  const rightAnimation = () => {
    gsap.to([firsta.current, firstb.current, thirda.current, thirdb.current], {
      x: "25%",
      ease: "none",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    gsap.to([seconda.current, secondb.current], {
      x: "-25%",
      ease: "none",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
  };

  const leftAnimation = () => {
    gsap.to([firsta.current, firstb.current, thirda.current, thirdb.current], {
      x: "-25%",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
    gsap.to([seconda.current, secondb.current], {
      x: "25%",
      scrollTrigger: {
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });
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
      <div className="h-fit relative flex overflow-hidden justify-center">
        <div
          className="h-full flex w-fit flex-nowrap items-center py-3"
          ref={firsta}
        >
          {ArrayData1.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          ref={firstb}
          className="h-full flex flex-nowrap items-center absolute left-full top-0 w-fit py-3"
        >
          {ArrayData1.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit relative flex overflow-hidden justify-center">
        <div
          className="h-full flex w-fit flex-nowrap items-center py-3"
          ref={seconda}
        >
          {ArrayData2.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          ref={secondb}
          className="h-full flex flex-nowrap items-center absolute left-full top-0 w-fit py-3"
        >
          {ArrayData2.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit relative flex overflow-hidden justify-center">
        <div
          className="h-full flex w-fit flex-nowrap items-center py-3"
          ref={thirda}
        >
          {ArrayData3.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div
          ref={thirdb}
          className="h-full flex flex-nowrap items-center absolute left-full top-0 w-fit py-3"
        >
          {ArrayData3.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-black/10 bg-black/10 overflow-hidden mx-1.5 sm:mx-3 w-[12.3rem] h-[6.91rem] sm:w-[28.125rem] sm:h-[15.8rem]
"
            >
              <img
                src={item}
                width={450}
                height={253}
                alt="image"
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
