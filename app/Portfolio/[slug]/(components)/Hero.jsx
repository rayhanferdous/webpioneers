import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Image from "next/image";
import React from "react";

const Hero = ({ data }) => {
  return (
    <section className="py-10 sm:py-20 px-con flex flex-col gap-3 sm:gap-5 overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col gap-4 sm:gap-10">
        <div className="flex max-sm:flex-col gap-2 sm:gap-4 sm:justify-between sm:items-center">
          <h2 className="text-2xl sm:text-4xl font-medium text-dark">
            <MountAnim>{data.title}</MountAnim>
          </h2>
          <h5 className="text-gray-700 text-lg sm:text-[2rem] leading-snug">
            <MountAnim>{data.sub}</MountAnim>
          </h5>
        </div>
        <div
          className="relative w-full pt-[100%] sm:pt-[var(--paddingT)]"
          style={{
            "--paddingT": `${(1 / 2.1) * 100}%`,
          }}
        >
          <MountAnim
            delay={0.2}
            className={
              "w-full h-full absolute inset-0 rounded-2xl bg-black/10 overflow-hidden "
            }
          >
            {data.thumbnailM ? (
              <>
                <Image
                  src={data.thumbnail}
                  alt={`${data.title} thumbnail`}
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover max-sm:hidden"
                />
                <Image
                  src={data.thumbnailM}
                  alt={`${data.title} thumbnail`}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover sm:hidden"
                />
              </>
            ) : (
              <Image
                src={data.thumbnail}
                alt={`${data.title} thumbnail`}
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
            )}
          </MountAnim>

          <div className="p-2.5 sm:p-6 z-10 absolute bottom-0 left-0 flex gap-2 sm:gap-4">
            {data?.badges.map((badgeItem, idx) => {
              return (
                <Badge
                  key={idx}
                  nodot
                  className={"max-sm:h-[2rem] text-gray-600"}
                  outline
                >
                  {badgeItem}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
