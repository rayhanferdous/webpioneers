import ArrowBR from "@/app/(assets)/arrowBR";
import { cn } from "@/app/(utils)/utils";
import React from "react";

const Button = ({
  children,
  full = false,
  rounded = true,
  btnType = "dark",
  size = "m",
  arrow = true,
  className,
  textClass,
  iconClass,
  ...props
}) => {
  const Types = {
    main: "bg-prim text-white",
    dark: "bg-dark border border-dark text-white hover:bg-white hover:text-dark",
    light:
      "bg-white border border-dark text-dark hover:bg-dark hover:text-white",
    ghost: "bg-transparent text-dark",
    outline: "bg-white border border-dark text-dark",
  };

  const Sizes = {
    m: "gap-2 sm:gap-2.5 h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 text-base sm:text-[1.6rem] lg:text-[1.375rem] font-medium",
    circle:
      "gap-2 sm:gap-2.5 h-12 w-12 text-base sm:text-[1.6rem] lg:text-[1.375rem] font-medium",
  };

  const isFit = full ? "w-full" : "w-fit";

  return (
    <button
      {...props}
      className={cn(
        "transition-all duration-500 ease overflow-hidden flex items-center justify-center whitespace-nowrap relative group cursor-pointer",
        isFit,
        rounded ? "rounded-full" : "rounded-lg",
        Types[btnType],
        Sizes[size],
        className
      )}
    >
      <span className={cn("relative flex overflow-hidden", textClass)}>
        <span className="leading-[1.3]">{children}</span>
      </span>
      {arrow && (
        <span className={cn("relative flex overflow-hidden", iconClass)}>
          <span className="flex flex-1 p-[0.2em] h-full transition-transform duration-500 ease group-hover:translate-y-full group-hover:translate-x-full ">
            <ArrowBR className="w-[0.55em] h-auto" />
          </span>
          <span
            className={cn(
              "p-[0.2em] absolute top-0 left-0 -translate-x-full -translate-y-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500 ease"
            )}
          >
            <ArrowBR className="w-[0.55em] h-auto" />
          </span>
        </span>
      )}
    </button>
  );
};

export default Button;
