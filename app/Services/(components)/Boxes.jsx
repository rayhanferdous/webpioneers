"use client";

import MatterBlocks from "@/app/(components)/ui/MatterBlocks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useResponsiveStates } from "@/app/(utils)/hooks";

const Box = ({ icon, title, custom }) => (
  <div
    className={`max-sm:w-[50%] max-sm:h-[50vw] sm:h-[21.06rem] sm:w-[25%] flex relative z-10 border-dark ${custom} hover:bg-[#FAF8F6] transition-colors duration-300`}
  >
    <div className="flex-1 flex flex-col gap-3 sm:gap-8 justify-center items-center text-center">
      <small className="text-sm sm:text-xl absolute left-4 sm:left-5 top-2 sm:top-3 flex items-center gap-2">
        <div className="size-2.5 rounded-full bg-dark"></div>
        {title}
      </small>
      <Image
        loading="eager"
        src={icon}
        width={110}
        height={110}
        alt={title}
        className="block size-[3.75rem] sm:size-[7rem] object-contain"
      />
    </div>
  </div>
);

const Boxes = ({ labels, boxes, labelName }) => {
  const { isTab } = useResponsiveStates();
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(isTab);
  }, [isTab]);

  return (
    <section className="container-2560 overflow-hidden flex flex-col h-fit">
      <div className="max-sm:flex-wrap flex border-y border-dark">
        {boxes.slice(0, 4).map((item, index) => (
          <Box key={index} {...item} />
        ))}
      </div>
      <div className="max-sm:flex-wrap flex border-b border-dark">
        {boxes.slice(4).map((item, index) => (
          <Box key={index + 4} {...item} />
        ))}
      </div>
      <div
        className={`[--bgSize:20vw_16.8vw] sm:[--bgSize:6.4rem_6.3rem] [--bgPos:0px_-2px] sm:[--bgPos:0rem_4.7rem] w-full flex-shrink-0 flex h-[18rem] sm:h-[34.5rem] pointer-events-auto border-b border-dark`}
      >
        <div
          style={{
            backgroundImage: `
            linear-gradient(to right, #DEDEDE 1px, transparent 1px),
            linear-gradient(to bottom, #DEDEDE 1px, transparent 1px)
          `,
            backgroundSize: `var(--bgSize)`,
            backgroundPosition: `var(--bgPos)`,
          }}
          className="max-sm:hidden flex-1 flex relative z-10 overflow-hidden pb-[3px] justify-center items-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-[48rem]">
            {labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${labelName} rounded-2xl sm:rounded-[2.5rem] h-[2.07rem] sm:h-[3.75rem] px-4 sm:px-6 flex items-center leading-none z-20  border border-dark bg-white text-lg sm:text-[2rem] whitespace-nowrap hover:bg-dark hover:text-white transition-colors duration-300 ease cursor-default`}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            backgroundImage: `
            linear-gradient(to right, #DEDEDE 1px, transparent 1px),
            linear-gradient(to bottom, #DEDEDE 1px, transparent 1px)
          `,
            backgroundSize: `var(--bgSize)`,
            backgroundPosition: `var(--bgPos)`,
          }}
          className="sm:hidden flex-1 relative z-10 overflow-hidden pb-[3px]"
        >
          <MatterBlocks labelName={labelName} key={active}>
            {labels.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${labelName} absolute left-[-100vw] top-[-100vh] rounded-2xl sm:rounded-[2.5rem] h-[2.07rem] sm:h-[3.75rem] px-4 sm:px-6 flex items-center leading-none cursor-grab z-20  border border-dark bg-white text-lg sm:text-[2rem] pointer-events-none whitespace-nowrap`}
                >
                  {item.title}
                </div>
              );
            })}
          </MatterBlocks>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
