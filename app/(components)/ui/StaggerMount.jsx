"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const StaggerMount = ({
  children,
  className = "",
  delay = 0.1,
  duration = 0.6,
  staggerChildren = 0.15,
  margin = "-100px",
  once = true,
  ...props
}) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: once, margin: margin });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: duration,
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: duration,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default StaggerMount;
