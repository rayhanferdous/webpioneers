"use client";

import { useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MountAnim from "./MountAnim";
import { Cursor } from "./Cursor";
import InfiniteMarquee from "./InfiniteMarquee";
import { useResponsiveStates } from "@/app/(utils)/hooks";

const PortfolioItem = ({
  handleClick,
  handleMouseLeave,
  handleMouseEnter,
  index,
  item,
  hoveredIndex,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef();
  const { isTab } = useResponsiveStates();

  const handlePositionChange = useCallback((x, y) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const isInside =
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setIsHovering(isInside);
    }
  }, []);

  const isHovered = hoveredIndex === index;
  const isNotHoveredButOtherIs =
    hoveredIndex !== index && hoveredIndex !== null;

  const handleMouseEnterWrapper = useCallback(() => {
    handleMouseEnter(index);
  }, [handleMouseEnter, index]);

  const handleMouseLeaveWrapper = useCallback(() => {
    handleMouseLeave();
  }, [handleMouseLeave]);

  const handleClickWrapper = useCallback(() => {
    handleClick(index);
  }, [handleClick, index]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={handleMouseEnterWrapper}
      onMouseLeave={handleMouseLeaveWrapper}
      onClick={handleClickWrapper}
      className="group flex-1 flex"
    >
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: isNotHoveredButOtherIs ? 0.4 : 1,
          scale: isNotHoveredButOtherIs ? 0.9 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex-1 flex flex-col gap-2 relative"
      >
        <motion.div
          className="aspect-square w-full overflow-hidden bg-white/10"
          initial={{ borderRadius: "1.125rem" }}
          animate={{
            borderRadius: isHovered ? "50%" : "1.125rem",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={item.image || ""}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
        <MountAnim className="flex flex-col gap-2">
          <h2 className="mt-4 text-[1.75rem] sm:text-4xl leading-none">
            {item.title}
          </h2>
          <p className="text-lg sm:text-[1.65rem] lg:text-[1.375rem] leading-snug text-gray-bb">
            {item.detail}
          </p>
        </MountAnim>
      </motion.div>
      {!isTab && (
        <Cursor
          key={index}
          attachToParent
          springConfig={{ bounce: 0.001 }}
          transition={{ ease: "easeInOut", duration: 0.15 }}
          onPositionChange={handlePositionChange}
        >
          <motion.div
            variants={{
              initial: { scale: 0 },
              animate: { scale: isHovering ? 1 : 0 },
              exit: { scale: 0 },
            }}
            transition={{ ease: "easeInOut", duration: 0.25 }}
            className="flex items-center justify-center rounded-full bg-dark w-40 h-12"
          >
            <AnimatePresence>
              {isHovering && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  className="inline-flex w-full h-full items-center justify-center overflow-hidden"
                >
                  <InfiniteMarquee speed={2}>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index} className="mx-2 text-2xl text-white">
                        View Case Study
                      </span>
                    ))}
                  </InfiniteMarquee>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </Cursor>
      )}
    </motion.div>
  );
};

export default PortfolioItem;
