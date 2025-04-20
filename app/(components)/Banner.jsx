"use client";

import React, { useEffect, useRef, useState } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import Image from "next/image";

const Banner = () => {
  const [height, setHeight] = useState(0);
  const container = useRef();

  useEffect(() => {
    const updateHeight = () => {
      if (!container.current) return;
      const newHeight = container.current.clientHeight || 0;
      setHeight(newHeight);
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      style={{ "--height": `calc(${height}px + 100vh)` }}
      className="max-sm:[var(--height)] lg:[var(--height)] max-sm:mb-[-100vh] lg:mb-[-100vh] relative"
    >
      <div
        ref={container}
        // style={{ top: `calc(${height}px - 100vh)` }}
        className={`max-sm:sticky lg:sticky top-0 w-full flex flex-col gap-1`}
      >
        <div className="py-12 sm:py-24 px-con">
          <div className="relative flex justify-center border-2 border-gray-600 rounded-2xl overflow-hidden">
            <div className="relative z-10 sm:text-center py-10 sm:py-16 px-7 sm:px-12 flex flex-col items-start sm:items-center gap-6 sm:gap-8 w-fit">
              <div className="flex flex-col gap-2">
                <MountAnim>
                  <Badge nodot variant="yellow">
                    Get In Touch
                  </Badge>
                </MountAnim>
                <MountAnim>
                  <h1 className="heading2">Let's Work Together</h1>
                </MountAnim>
              </div>
              <MountAnim>
                <ul className="flex max-sm:flex-col sm:items-center gap-3 sm:gap-7 text-lg sm:text-2xl text-gray-700">
                  <li>💲 Ask about our packages</li>
                  <li>⚡ Fast Delivery</li>
                  <li>🌟 Top-tier team</li>
                  <li>⏸️ Cancel anytime</li>
                </ul>
              </MountAnim>
              <MountAnim className={"w-full"}>
                <Button className={"w-full sm:w-[90%] mx-auto"}>
                  Let's Get Started
                </Button>
              </MountAnim>
              <MountAnim>
                <p className="text-lg sm:text-xl text-gray-700 sm:max-w-[50ch]">
                  We would love to hear from you! Our dedicated team is here to
                  help you transform your ideas into reality.
                </p>
              </MountAnim>
            </div>
            <Image
              src={"/heroBg.svg"}
              alt="bg"
              width={200}
              height={200}
              className="object-cover absolute left-0 top-1/2 w-auto h-full sm:w-full sm:h-auto -translate-y-1/2 z-[-1]"
            />
          </div>
        </div>
      </div>
      <div className="hidden max-sm:block lg:block min-h-screen h-screen"></div>{" "}
    </section>
  );
};

export default Banner;
