"use client";

import React, { useEffect, useRef } from "react";
import Content from "./Content";
import Inner from "./Inner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer({ openModal, setOpenModal }) {
  const preFooter = useRef();
  const timeline = gsap.timeline();

  useEffect(() => {
    gsap.set(preFooter.current, {
      transformOrigin: "top",
    });

    timeline.fromTo(
      preFooter.current,
      {
        transform: "scale3d(1,1,1)",
      },
      {
        yPercent: 2,
        transform: "scale3d(0.95,0.95,1)",
      }
    );

    ScrollTrigger.create({
      trigger: preFooter.current,
      start: "top top",
      end: "+=400",
      scrub: 1,
      animation: timeline,
    });
  }, []);

  return (
    <section className="w-full h-fit">
      <div
        ref={preFooter}
        style={{
          boxShadow:
            "5vw -1px 0px 1px var(--dark), -5vw -1px 0px 1px var(--dark)",
        }}
        className="w-full h-fit relative z-20 overflow-hidden flex bg-dark text-light rounded-[1.25rem] sm:rounded-[2.5rem] origin-bottom"
      >
        <Inner />
      </div>

      <div className="max-sm:-mt-[100vh] lg:-mt-[100vh]">
        <div className="hidden max-sm:block lg:block min-h-screen h-screen"></div>
      </div>
      <div className="sticky bottom-0 w-full">
        <Content
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </section>
  );
}
