"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useResponsiveStates } from "@/app/(utils)/hooks";

const Data = [
  {
    title: "15+",
    sub: "Expert Members",
    hoverColor: "#E8DEEE", // Light purple
    custom: "max-sm:border-b",
  },
  {
    title: "45+",
    sub: "Successful Projects",
    hoverColor: "#DBEDDB", // Light green
    custom: "max-sm:border-b border-l",
  },
  {
    title: "5+",
    sub: "Years Combined",
    hoverColor: "#D3E5EF", // Light blue
    custom: "sm:border-l",
  },
  {
    title: "100%",
    sub: "Positive Feedback",
    hoverColor: "#FDECC8", // Light yelloe
    custom: "border-l",
  },
];

const Boxes = () => {
  let [hoverTab, setHoverTab] = useState(null);
  const { isMobile } = useResponsiveStates();
  const xPos = isMobile ? hoverTab % 2 : hoverTab;

  return (
    <section
      onMouseLeave={() => {
        setTimeout(() => {
          setHoverTab(null);
        }, 300);
      }}
      className="max-sm:flex-wrap overflow-hidden flex border-y border-dark relative"
    >
      <motion.span
        className="max-sm:hidden absolute left-0 aspect-square w-[50%] sm:w-[25%] top-0"
        transition={{
          ease: [0.4, 0, 0.2, 1],
          duration: 0.7,
        }}
        animate={{
          backgroundColor:
            (hoverTab !== null && Data[hoverTab]?.hoverColor) || "#fff",
          x: hoverTab !== null ? `${xPos * 100}%` : "-100%",
          y: isMobile && hoverTab > 1 ? "100%" : "0%",
        }}
      />
      {Data.map((item, index) => {
        return (
          <motion.div
            onMouseEnter={() => {
              setHoverTab(index);
            }}
            key={index}
            className={`max-sm:w-[50%] max-sm:aspect-square sm:h-[21.06rem] sm:flex-1 flex relative z-10 border-dark ${item.custom}`}
          >
            <div className="flex-1 flex flex-col gap-3 sm:gap-5 justify-center items-center text-center">
              <h4 className="font-medium text-[1.8rem] sm:text-[3.5rem] text-center leading-tight">
                {item.title}
              </h4>
              <p className="text-lg sm:text-3xl text-center leading-tight">
                {item.sub}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Boxes;
