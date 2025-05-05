"use client";

import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import { Portfolios } from "@/app/(constants)/portfolios";
import Image from "next/image";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();

  useGSAP(
    () => {
      const Cards = gsap.utils.toArray(".PortfolioItemW");

      Cards.forEach((Card) => {
        const CardDetail = Card.querySelector(".PortfolioItem");

        if (CardDetail) {
          const tl = gsap.timeline();
          tl.fromTo(
            CardDetail,
            { y: "150%" },
            {
              y: 0,
              duration: 1,
              ease: "none",
            }
          );

          ScrollTrigger.create({
            trigger: Card,
            start: "top bottom",
            end: "100px bottom",
            scrub: 3,
            animation: tl,
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <section className="container-2560 py-12 sm:py-20 px-con flex flex-col gap-3 sm:gap-5 overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Our Portfolio
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">Proudly Delivered</h1>
        </MountAnim>
      </div>
      <div
        ref={container}
        className="flex flex-col gap-10 sm:gap-24 mt-8 sm:mt-14"
      >
        {Portfolios.map((portfolioItem, index) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                duration: 1,
                delay: 1,
              }}
              key={index}
              className="PortfolioItemW flex w-full"
            >
              <Link
                href={`/Portfolio/${portfolioItem.slug}`}
                className="PortfolioItem flex flex-col gap-5 sm:gap-10 w-full"
              >
                <div
                  className="relative w-full pt-[100%] sm:pt-[var(--paddingT)] "
                  style={{
                    "--paddingT": `${(1 / 2.1) * 100}%`,
                  }}
                >
                  {portfolioItem.thumbnailM ? (
                    <>
                      <Image
                        src={portfolioItem.thumbnail}
                        alt={`${portfolioItem.title} thumbnail`}
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover rounded-2xl absolute inset-0 max-sm:hidden"
                      />
                      <Image
                        src={portfolioItem.thumbnailM}
                        alt={`${portfolioItem.title} thumbnail`}
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-2xl absolute inset-0 sm:hidden"
                      />
                    </>
                  ) : (
                    <Image
                      src={portfolioItem.thumbnail}
                      alt={`${portfolioItem.title} thumbnail`}
                      width={1920}
                      height={1080}
                      className="w-full h-full object-cover rounded-2xl absolute inset-0"
                    />
                  )}
                  <div className="p-2.5 sm:p-6 absolute z-10 bottom-0 left-0 flex gap-2 sm:gap-4">
                    {portfolioItem?.badges?.map((badgeItem, idx) => (
                      <Badge
                        key={idx}
                        nodot
                        outline
                        className={"max-sm:h-[2rem] text-gray-600"}
                      >
                        {badgeItem}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-4 sm:justify-between sm:items-center max-sm:flex-col">
                  <h2 className="text-2xl sm:text-4xl font-medium text-dark">
                    <MountAnim>{portfolioItem.title}</MountAnim>
                  </h2>
                  <h5 className="text-gray-700 text-lg sm:text-[2rem] leading-snug">
                    <MountAnim>{portfolioItem.sub}</MountAnim>
                  </h5>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
