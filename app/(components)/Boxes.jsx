"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useResponsiveStates } from "../(utils)/hooks";
import Icon from "./ui/Icon";

const Data = [
  {
    icon: "https://cdn.lordicon.com/wntvuxlc.json",
    title: "Book a Demo",
    hoverColor: "#E8DEEE", // Light purple
    custom: "max-sm:border-b",
  },
  {
    icon: "https://cdn.lordicon.com/lsnqleyo.json",
    title: "Subscribe & Request",
    hoverColor: "#DBEDDB", // Light green
    custom: "max-sm:border-b border-l",
  },
  {
    icon: "https://cdn.lordicon.com/udyfjnud.json",
    title: "Get Your Designs",
    hoverColor: "#D3E5EF", // Light blue
    custom: "sm:border-l",
  },
  {
    icon: "https://cdn.lordicon.com/enwhaken.json",
    title: "Unlimited Revisions",
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
        className="max-sm:hidden absolute left-0 h-[50vw] sm:h-[25vw] w-[50%] sm:w-[25%] top-0"
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
            className={`max-sm:w-[50%] h-[50vw] sm:h-[25vw] sm:flex-1 flex relative z-10 border-dark ${item.custom}`}
          >
            <div className="flex-1 flex flex-col gap-3 sm:gap-8 justify-center items-center text-center">
              <small className="text-sm sm:text-xl absolute left-4 sm:left-5 top-2 sm:top-3">
                <b className="text-lg sm:text-2xl leading-0 align-baseline">
                  •
                </b>{" "}
                0{index + 1}
              </small>
              <div className="size-14 sm:size-[6.25rem]">
                <Icon size={"100%"} src={item.icon} />
              </div>

              <p className="text-lg sm:text-[1.625rem] max-w-[10ch] text-center leading-tight">
                {item.title}
              </p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default Boxes;
