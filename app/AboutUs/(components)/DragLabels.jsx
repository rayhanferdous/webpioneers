"use client";

import MatterBlocks from "@/app/(components)/ui/MatterBlocks";
import React, { useEffect, useState } from "react";
import { useResponsiveStates } from "@/app/(utils)/hooks";

const DragLabels = ({ labels, labelName = "AboutLabels" }) => {
  const { isTab } = useResponsiveStates();
  const [active, setActive] = useState(null);

  useEffect(() => {
    setActive(isTab);
  }, [isTab]);

  return (
    <section className="overflow-hidden flex flex-col h-fit">
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

export default DragLabels;
