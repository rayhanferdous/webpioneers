import React from "react";
import { cn } from "../(utils)/utils";

const ArrowBR = ({ className }) => {
  return (
    <svg
      className={cn("", className)}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8717_17073)">
        <path
          d="M1 1L11 11M11 11V1M11 11H1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_8717_17073">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowBR;
