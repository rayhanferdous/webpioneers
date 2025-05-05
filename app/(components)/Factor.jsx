"use client";

import React, { useState } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import { motion } from "framer-motion";
import { useResponsiveStates } from "../(utils)/hooks";
import Logo from "../(assets)/Logo";

const Data = [
  {
    title: "Service Cost",
    thisPlatform: "$$",
    fiverr: "$",
    freelancers: "$$$",
    agencies: "$$$$$",
  },
  {
    title: "Turnaround Updates",
    thisPlatform: "48 hrs",
    fiverr: "Days",
    freelancers: "Weeks",
    agencies: "Weeks+",
  },
  {
    title: "Flexible Terms",
    thisPlatform: true,
    fiverr: true,
    freelancers: false,
    agencies: false,
  },
  {
    title: "Tasks + Revision",
    thisPlatform: "Unlimited",
    fiverr: "Limited",
    freelancers: "Limited",
    agencies: "Limited",
  },
  {
    title: "Top Notch Team",
    thisPlatform: true,
    fiverr: false,
    freelancers: true,
    agencies: true,
  },
  {
    title: "Time to Start",
    thisPlatform: "Tomorrow",
    fiverr: "Days",
    freelancers: "Weeks",
    agencies: "Weeks-Months",
  },
  {
    title: "Pricing Structure",
    thisPlatform: "Fixed Monthly",
    fiverr: "Get what you pay",
    freelancers: "Flexible",
    agencies: "High with surprises",
  },
  {
    title: "Meetings",
    thisPlatform: "Minimal",
    fiverr: false,
    freelancers: true,
    agencies: true,
  },
];

const Factor = () => {
  const [active, setActive] = useState(0);
  const { isMobile } = useResponsiveStates();

  const renderIcon = (value) => {
    if (typeof value === "boolean") {
      return value ? (
        <svg
          className="size-6 sm:size-9"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 0.75C9.16875 0.75 0.75 9.16875 0.75 19.5C0.75 29.8313 9.16875 38.25 19.5 38.25C29.8313 38.25 38.25 29.8313 38.25 19.5C38.25 9.16875 29.8313 0.75 19.5 0.75ZM28.4625 15.1875L17.8312 25.8188C17.5687 26.0812 17.2125 26.2313 16.8375 26.2313C16.4625 26.2313 16.1063 26.0812 15.8438 25.8188L10.5375 20.5125C9.99375 19.9688 9.99375 19.0687 10.5375 18.525C11.0812 17.9812 11.9812 17.9812 12.525 18.525L16.8375 22.8375L26.475 13.2C27.0188 12.6563 27.9188 12.6563 28.4625 13.2C29.0063 13.7438 29.0063 14.625 28.4625 15.1875Z"
            fill="#6C9B7D"
          />
        </svg>
      ) : (
        <svg
          className="size-6 sm:size-9"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 0.75C9.16875 0.75 0.75 9.16875 0.75 19.5C0.75 29.8313 9.16875 38.25 19.5 38.25C29.8313 38.25 38.25 29.8313 38.25 19.5C38.25 9.16875 29.8313 0.75 19.5 0.75ZM25.8 23.8125C26.3438 24.3563 26.3438 25.2562 25.8 25.8C25.5187 26.0812 25.1625 26.2125 24.8062 26.2125C24.45 26.2125 24.0938 26.0812 23.8125 25.8L19.5 21.4875L15.1875 25.8C14.9062 26.0812 14.55 26.2125 14.1938 26.2125C13.8375 26.2125 13.4813 26.0812 13.2 25.8C12.6563 25.2562 12.6563 24.3563 13.2 23.8125L17.5125 19.5L13.2 15.1875C12.6563 14.6437 12.6563 13.7438 13.2 13.2C13.7438 12.6563 14.6437 12.6563 15.1875 13.2L19.5 17.5125L23.8125 13.2C24.3563 12.6563 25.2562 12.6563 25.8 13.2C26.3438 13.7438 26.3438 14.6437 25.8 15.1875L21.4875 19.5L25.8 23.8125Z"
            fill="#E16F64"
          />
        </svg>
      );
    }
    return value;
  };

  return (
    <section className="p-con flex container-2560">
      <div className="rounded-2xl border-2 border-gray-600 flex-1 flex flex-col sm:gap-20 px-5 py-10 sm:px-[3.75rem] sm:py-[3.75rem]">
        <div className="flex flex-col items-center gap-2 text-center">
          <MountAnim>
            <Badge nodot variant="yellow">
              Cool Factor
            </Badge>
          </MountAnim>
          <MountAnim>
            <h1 className="heading2">
              Pioneers vs <br className="sm:hidden" />
              Old School
            </h1>
          </MountAnim>
          <MountAnim>
            <p className="text-lg sm:text-2xl text-gray-700 max-w-[30ch] mb-4">
              Compare Web Pioneers with legacy ways of working.
            </p>
          </MountAnim>
        </div>
        <div className="w-full relative h-fit">
          <div className="flex sm:hidden gap-2.5 text-center py-4">
            <button
              onClick={() => {
                setActive(0);
              }}
              className={`flex-1 p-4 rounded-lg text-sm leading-tight border border-dark transition-colors duration-300 ${active === 0
                ? "bg-dark text-light"
                : "hover:bg-dark hover:text-light"
                }`}
            >
              Fiverr like <br />
              Platforms
            </button>
            <button
              onClick={() => {
                setActive(1);
              }}
              className={`flex-1 p-4 rounded-lg text-sm leading-tight border border-dark transition-colors duration-300 ${active === 1
                ? "bg-dark text-light"
                : "hover:bg-dark hover:text-light"
                }`}
            >
              Freelancers <br />
              Employees
            </button>
            <button
              onClick={() => {
                setActive(2);
              }}
              className={`flex-1 p-4 rounded-lg text-sm leading-tight border border-dark transition-colors duration-300 ${active === 2
                ? "bg-dark text-light"
                : "hover:bg-dark hover:text-light"
                }`}
            >
              Traditional <br />
              Agencies
            </button>
          </div>
          <div className="relative">
            <div className="max-sm:hidden absolute left-[calc(17.73%+1.75rem)] top-[-3px] w-[calc(29.31%-3.5rem)] h-[calc(100%+6px)] border-2 border-gray-600 rounded-2xl bg-light"></div>

            <div className="relative z-10 text-center grid grid-cols-3 sm:grid-cols-[17.73%_29.31%_1fr] text-base sm:text-[1.75rem] leading-tight">
              {/* Headers */}
              <div className="z-10 top-0 bg-white"></div>
              <div className="z-10 top-0 sm:px-14 font-medium whitespace-normal flex items-center justify-center max-sm:border-b max-sm:border-gray">
                <div className="bg-white sm:bg-light w-full py-6 sm:py-10 h-full">
                  <Logo className="h-12 sm:h-[5.625rem] w-auto mx-auto" />
                </div>
              </div>
              <div className="z-10 bg-white top-0 overflow-hidden flex border-b border-gray">
                <motion.div
                  className="sm:!translate-x-0 flex-1 sm:grid sm:grid-cols-3 relative"
                  animate={{
                    x: `-${isMobile ? active * 100 : 0}%`,
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                >
                  <motion.div
                    animate={{
                      opacity: active === 0 ? 1 : 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      opacity: {
                        duration: 0.45,
                      },
                    }}
                    className="sm:!opacity-100 flex-1 h-full py-6 sm:py-10 sm:px-7 font-medium whitespace-normal flex items-center justify-center"
                  >
                    Fiverr like Platforms
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: active === 1 ? 1 : 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      opacity: {
                        duration: 0.45,
                      },
                    }}
                    className="sm:!opacity-100 max-sm:absolute w-full h-full left-full top-0 py-6 sm:py-10 sm:px-7 font-medium whitespace-normal flex items-center justify-center"
                  >
                    Freelancers Employees
                  </motion.div>
                  <motion.div
                    animate={{
                      opacity: active === 2 ? 1 : 0,
                    }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      opacity: {
                        duration: 0.45,
                      },
                    }}
                    className="sm:!opacity-100 max-sm:absolute w-full h-full left-[200%] top-0 py-6 sm:py-10 sm:px-7 font-medium whitespace-normal flex items-center justify-center"
                  >
                    Traditional Agencies
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              {Data.map((row, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`h-[4.375rem] sm:h-[5rem] flex items-center text-left pr-4 text-gray-800`}
                  >
                    {row.title}
                  </div>
                  <div
                    className={`h-[4.375rem] sm:h-[5rem] flex justify-center items-center px-4 border-gray ${index < Data.length - 1 ? "max-sm:border-b" : ""
                      }`}
                  >
                    {renderIcon(row.thisPlatform)}
                  </div>
                  <div className="overflow-hidden sm:grid sm:grid-cols-3 relative">
                    <motion.div
                      animate={{
                        x: `-${isMobile ? active * 100 : 0}%`,
                        opacity: active === 0 ? 1 : 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        opacity: {
                          duration: 0.45,
                        },
                      }}
                      className={`sm:!translate-x-0 sm:!opacity-100 flex-1 flex-shrink-0 h-[4.375rem] sm:h-[5rem] flex justify-center items-center px-4 border-gray ${index < Data.length - 1 ? "border-b" : ""
                        }`}
                    >
                      {renderIcon(row.fiverr)}
                    </motion.div>
                    <motion.div
                      animate={{
                        x: `-${isMobile ? active * 100 : 0}%`,
                        opacity: active === 1 ? 1 : 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        opacity: {
                          duration: 0.45,
                        },
                      }}
                      className={`sm:!translate-x-0 sm:!opacity-100 max-sm:absolute w-full left-full top-0 flex-shrink-0 h-[4.375rem] sm:h-[5rem] flex justify-center items-center px-4 border-gray ${index < Data.length - 1 ? "border-b" : ""
                        }`}
                    >
                      {renderIcon(row.freelancers)}
                    </motion.div>
                    <motion.div
                      animate={{
                        x: `-${isMobile ? active * 100 : 0}%`,
                        opacity: active === 2 ? 1 : 0,
                      }}
                      transition={{
                        ease: "easeInOut",
                        duration: 0.5,
                        opacity: {
                          duration: 0.45,
                        },
                      }}
                      className={`sm:!translate-x-0 sm:!opacity-100 max-sm:absolute w-full left-[200%] top-0 flex-shrink-0 h-[4.375rem] sm:h-[5rem] flex justify-center items-center px-4 border-gray ${index < Data.length - 1 ? "border-b" : ""
                        }`}
                    >
                      {renderIcon(row.agencies)}
                    </motion.div>
                  </div>
                </React.Fragment>
              ))}

              {/* Footer */}
              <div></div>
              <div className="py-4 sm:py-10 px-4 sm:px-14 font-medium whitespace-normal relative max-sm:h-14">
                <Button
                  full
                  btnType="light"
                  className={
                    "max-sm:absolute whitespace-nowrap max-sm:w-[calc(200%-1rem)]"
                  }
                >
                  Make It Happen
                </Button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factor;
