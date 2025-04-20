"use client";

import { useState } from "react";
import Link from "next/link";
import { useResponsiveStates } from "@/app/(utils)/hooks";
import Button from "@/app/(components)/ui/Button";
import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import PortfolioItem from "./PortfolioItem";

const Data = [
  {
    title: "Fundex",
    detail: "Simplifying Finance for Everyone",
    image: "/projectThumb1.png",
  },
  {
    title: "Jellice",
    detail: "Products that go beyond skincare",
    image: "/projectThumb2.png",
  },
  {
    title: "Radex",
    detail: "Power of innovation",
    image: "/projectThumb3.png",
  },
  {
    title: "Nolux",
    detail: "Future of Business",
    image: "/projectThumb4.png",
  },
  {
    title: "Stockly AI",
    detail: "Smart Shopping, Effortless Living",
    image: "/projectThumb5.png",
  },
  {
    title: "Onyx",
    detail: "Manage your finances",
    image: "/projectThumb6.png",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { isMobile } = useResponsiveStates();
  const displayedData = Data.slice(0, 3);

  const handleClick = (index) => {
    if (isMobile) {
      hoveredIndex === index ? setHoveredIndex(null) : setHoveredIndex(index);
    }
  };

  const handleMouseEnter = (index) => {
    !isMobile && setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    !isMobile && setHoveredIndex(null);
  };

  return (
    <section className="relative z-50 py-10 sm:py-20 px-con text-dark flex flex-col gap-12 sm:gap-20 rounded-[1.5rem] sm:rounded-[2.5rem] items-center">
      <div className="text-center hidden sm:flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Our Portfolio
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">We Don't Do Basic</h1>
        </MountAnim>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-12 lg:gap-x-8 gap-y-12 sm:gap-y-24 overflow-hidden">
        {displayedData.map((item, index) => {
          return (
            <Link key={index} href={"/"} className="block col-span-1">
              <PortfolioItem
                handleMouseEnter={handleMouseEnter}
                index={index}
                item={item}
                handleMouseLeave={handleMouseLeave}
                hoveredIndex={hoveredIndex}
                handleClick={handleClick}
              />
            </Link>
          );
        })}
      </div>
      <div className="w-full">
        <Button
          btnType="light"
          className={"w-full sm:w-[calc(33.33%-2rem)] mx-auto"}
        >
          Explore All Projects
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
