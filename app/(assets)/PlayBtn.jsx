import { cn } from "@/app/(utils)/utils";
import React from "react";

const PlayBtn = ({ className, ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        "grid place-content-center size-11 sm:size-20 border-2 border-dark rounded-full transition-all hover:scale-105 hover:bg-black/20 duration-500 pl-1",
        className
      )}
    >
      <svg
        className="h-4 sm:h-7 w-auto"
        viewBox="0 0 30 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.914062 15.0893V8.92096C0.914062 0.96043 6.53906 -2.24879 13.4141 1.71063L18.7474 4.79482L24.0807 7.879C30.9557 11.8384 30.9557 18.3402 24.0807 22.2996L18.7474 25.3838L13.4141 28.468C6.53906 32.4274 0.914062 29.1765 0.914062 21.2577V15.0893Z"
          fill="#1D1D1D"
        />
      </svg>
    </button>
  );
};

export default PlayBtn;
