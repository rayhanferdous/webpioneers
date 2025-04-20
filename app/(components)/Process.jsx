"use client";
import React, { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Process1 from "./figures/process1";
import Process2 from "./figures/process2";
import Process3 from "./figures/process3";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import { useResponsiveStates } from "../(utils)/hooks";
import Icon from "./ui/Icon";
import { cn } from "../(utils)/utils";

const ProcessStep = React.memo(
  ({
    isInView,
    customVar,
    bgColor,
    hover,
    badgeVariant,
    iconSrc,
    title,
    description,
    ProcessComponent,
  }) => {
    const { isTab } = useResponsiveStates();

    const transition = {
      ease: "easeInOut",
      duration: 0.6,
    };

    return (
      <MountAnim customVar={customVar} className="flex-1 flex">
        <motion.div
          initial="initial"
          animate={isTab && isInView ? "show" : "initial"}
          whileHover={!isTab ? "show" : undefined}
          className={cn(
            "flex-1 overflow-hidden border-2 border-gray-600 rounded-2xl transition-colors duration-500",
            isTab && isInView ? bgColor : `${hover} bg-transparent`
          )}
        >
          <motion.div
            variants={{
              initial: { y: 20 },
              show: { y: 0 },
            }}
            transition={transition}
            className="flex flex-col gap-4 -mb-1"
          >
            <div className="px-10 flex flex-col gap-4 items-center text-center py-5">
              <Badge
                className={"text-[#545454]"}
                size="s"
                outline
                variant={badgeVariant}
              >
                {title}
              </Badge>
              <div className="size-[4.125rem] sm:size-[5.3125rem]">
                <Icon size="100%" src={iconSrc} />
              </div>
              <h2 className="text-4xl sm:text-[2.875rem] leading-none">
                {title}
              </h2>
              <p className="text-lg sm:text-2xl leading-snug text-[#7A7A7A]">
                {description}
              </p>
            </div>
            <ProcessComponent />
          </motion.div>
        </motion.div>
      </MountAnim>
    );
  }
);

const Process = () => {
  const { isTab } = useResponsiveStates();

  const leftVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "-50%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const rightVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "50%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const centerVar = useMemo(
    () => ({
      hidden: { y: "20%", x: "0%", opacity: 0 },
      visible: {
        y: "0%",
        x: "0%",
        opacity: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    }),
    []
  );

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.5, once: true });
  const isInView2 = useInView(ref2, { amount: 0.5, once: true });
  const isInView3 = useInView(ref3, { amount: 0.5, once: true });

  return (
    <section className="relative mt-12 p-con flex flex-col items-center text-center gap-3 overflow-hidden">
      <MountAnim>
        <Badge nodot variant="yellow">
          Our Process
        </Badge>
      </MountAnim>
      <MountAnim>
        <h1 className="heading2">
          Your Path to Success <br />
          Starts Here
        </h1>
      </MountAnim>
      <div className="flex w-full flex-col items-center">
        <MountAnim
          animation="opacity"
          delay={0.3}
          className="w-[3px] h-24 sm:h-[9rem] bg-gradient-to-t from-gray-600 to-transparent"
        />
        <div className="flex max-sm:flex-col w-full gap-8">
          <div ref={ref1} className="flex-1 flex">
            <ProcessStep
              isInView={isInView1}
              customVar={isTab ? centerVar : leftVar}
              bgColor="bg-yellow-light"
              hover="hover:bg-yellow-light"
              badgeVariant="yellow"
              iconSrc="https://cdn.lordicon.com/zywwafpn.json"
              title="Ideation"
              description="Turning ideas into structured wireframes to define the blueprint for your project's success."
              ProcessComponent={Process1}
            />
          </div>
          <div ref={ref2} className="flex-1 flex">
            <ProcessStep
              isInView={isInView2}
              customVar={centerVar}
              bgColor="bg-purple-light"
              hover="hover:bg-purple-light"
              badgeVariant="purple"
              iconSrc="https://cdn.lordicon.com/ovxlloho.json"
              title="Design"
              description="Custom designs that enhance experiences, aligning with your brand for seamless digital interactions"
              ProcessComponent={Process2}
            />
          </div>
          <div ref={ref3} className="flex-1 flex">
            <ProcessStep
              isInView={isInView3}
              customVar={isTab ? centerVar : rightVar}
              bgColor="bg-green-light"
              hover="hover:bg-green-light"
              badgeVariant="green"
              iconSrc="https://cdn.lordicon.com/wbthjkyu.json"
              title="Development"
              description="We develop scalable platforms that bring your vision to life, ensuring efficiency and growth"
              ProcessComponent={Process3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
