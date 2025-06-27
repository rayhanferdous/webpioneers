"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import MountAnim from "./ui/MountAnim";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Axibo from "./svg/Axibo";
import Sync from "./svg/Sync";
import Vividora from "./svg/Vividora";
import Justthrive from "./svg/Justthrive";
import Headshots from "./svg/Headshots";
import Rewind from "./svg/Rewind";
import Mherst from "./svg/Mherst";
import Dyutih from "./svg/Dyutih";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".ipad", {
  //       scale: 0.8,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "20% top",
  //         end: "80% top",
  //         invalidateOnRefresh: true,
  //         scrub: 1,
  //       },
  //     });
  //   },
  //   {
  //     scope: containerRef,
  //   }
  // );

  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const scheduleBtnRef = useRef(null);

  useEffect(() => {
    gsap.set(leftRef.current, { x: -60, opacity: 0.7 });
    gsap.set(rightRef.current, { x: 60, opacity: 0.7 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(leftRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(rightRef.current, {
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.to(scheduleBtnRef.current, {
      y: 10, // smaller movement for more subtlety
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(leftRef.current, {
      x: -60,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(rightRef.current, {
      x: 60,
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(scheduleBtnRef.current, {
      y: 0,
      duration: 0.6,
      ease: "power3.inOut",
    });
  };

  useEffect(() => {
    const btn = scheduleBtnRef.current;

    const onEnter = () => {
      gsap.to(btn, {
        scale: 1.07,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const onLeave = () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.5,
        ease: "power3.inOut",
      });
    };

    btn.addEventListener("mouseenter", onEnter);
    btn.addEventListener("mouseleave", onLeave);

    return () => {
      btn.removeEventListener("mouseenter", onEnter);
      btn.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <>
      <section className="container-2560 relative py-12 sm:py-20 px-con flex flex-col sm:items-center gap-3 sm:gap-16 sm:pb-32 sm:text-center overflow-hidden">
        <div className="headerSpace"></div>
        <div onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} ref={containerRef} className="grid grid-cols-[288px_1fr_288px] gap-16">
          <div ref={leftRef} className="grid grid-rows-3 gap-14">
            <Image
              src={"/hero/left-1.jpg"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto"
            />
            <Image
              src={"/hero/left-2.jpg"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto -ml-10"
            />
            <Image
              src={"/hero/left-3.png"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto"
            />
          </div>
          <div className="self-center mt-10">
            <div className="flex flex-col gap-4 items-center">
              <span className="font-medium w-fit text-lg font-inter p-2.5 rounded-lg border border-[#DEDEDE] bg-white"><span className="lin-gradient bg-clip-text text-transparent ">200+</span> companies have scaled faster with our design solutions</span>
              <h3 className="font-urbanist font-medium text-[49px] 2xl:text-[90px] leading-tight text-dark">We’re a design & <br />
                development agency that <span className="lin-gradient bg-clip-text text-transparent">delivers results</span></h3>
              <p className="text-paragraph mt-1 font-urbanist text-base lg:text-lg xl:text-xl 2xl:text-2xl">At Web Pioneers, we mix smart design with clean <br />code to help your brand stand out—and sell more.</p>
            </div>
            <div ref={scheduleBtnRef} className="transition-transform duration-300 transform cursor-pointer hover:scale-x-125 lin-gradient px-[3px] pt-[3px] pb-2 rounded-2xl mt-16 max-w-[800px] mx-auto">
              <div className="bg-white rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 pr-3 py-3 pl-5">
                <span className="font-urbanist font-medium text-paragraph text-[22px]">Want expert eyes on your site?</span>
                <button className="bg-purple-custom font-semibold text-[22px] text-white px-7 py-6 rounded-xl">Schedule a free strategy call</button>
              </div>
            </div>
          </div>
          <div ref={rightRef} className="grid grid-rows-3 gap-14">
            <Image
              src={"/hero/right-1.jpg"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto"
            />
            <Image
              src={"/hero/right-2.jpg"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto ml-10"
            />
            <Image
              src={"/hero/right-3.jpg"}
              alt="logo"
              width={288}
              height={180}
              className="w-full h-auto"
            />
          </div>
        </div>
        {/* <MountAnim>
        <Badge nodot size="xl" variant="yellow">
          An agency that delivers Perfection{" "}
        </Badge>
      </MountAnim>
      <MountAnim>
        <h1 className="text-[3.125rem] sm:text-[6.6rem] lg:text-[5.6rem] leading-tight max-sm:pr-3">
          Simplifying Client{" "}
          <span className="relative">
            Relations,
            <span className="absolute block inset-0 bg-gradient-to-t from-blue/30 to-transparent pointer-events-none border-b-4 border-blue translate-y-1"></span>
          </span>
          <br />
          <span className="relative">
            Projects,
            <span className="absolute block inset-0 bg-gradient-to-t from-purple/30 to-transparent pointer-events-none border-b-4 border-purple translate-y-1"></span>
          </span>{" "}
          and{" "}
          <span className="relative">
            Payments
            <span className="absolute block inset-0 bg-gradient-to-t from-green/30 to-transparent pointer-events-none border-b-4 border-green translate-y-1"></span>
          </span>{" "}
          in One Platform
        </h1>
      </MountAnim>
      <MountAnim
        delay={0.1}
        className="flex flex-wrap w-full max-w-[90rem] sm:justify-center gap-3 sm:gap-7 py-5 sm:py-14 *:rounded-full *:gap-3 *:text-base *:sm:text-[1.75rem] *:flex *:items-center *:transition-all *:duration-500 *:!leading-[1.1]  *:border *:text-dark"
      >
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:-rotate-1 sm:hover:rotate-0"
          }
        >
          🎨 Full design & development in one place
        </div>
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:-rotate-1 sm:hover:rotate-0"
          }
        >
          ✅ Manage projects & payments with our CRM
        </div>
        <div
          className={
            "h-[2.8125rem] sm:h-[3.875rem] px-4 sm:px-7 border-gray-dark max-w-full max-sm:w-full sm:rotate-1 sm:hover:rotate-0"
          }
        >
          📅 Fixed timeline, daily collaboration
        </div>

        <Link
          href={"/LearnMore"}
          className={
            "max-sm:mt-2 max-w-full max-sm:w-full sm:rotate-1 sm:hover:rotate-0 justify-center"
          }
        >
          <Button
            btnType="light"
            className="text-base sm:text-[1.75rem] max-sm:w-full justify-center max-w-none"
          >
            Learn More About Our Dashbaord
          </Button>
        </Link>
      </MountAnim> */}
        {/* <div ref={containerRef} className="w-[180vw] sm:w-full max-w-[104rem]">
          <MountAnim delay={0.2}>
            <Image
              src={"./Ipad.svg"}
              alt="logo"
              width={500}
              height={500}
              priority
              className="w-full h-auto ipad"
            />
          </MountAnim>
        </div> */}

        <Image
          src={"./HeroBgD.svg"}
          alt="bg"
          width={400}
          height={400}
          className="max-sm:hidden object-cover absolute left-0 top-0 w-full h-auto z-[-1] max-h-full"
        />
        <Image
          src={"./HeroBgM.svg"}
          alt="bg"
          width={400}
          height={400}
          className="sm:hidden object-cover absolute left-0 top-0 w-full h-auto z-[-1] max-h-full"
        />
        <div className="container-2560 flex flex-col items-center gap-10 px-con">
          <h4 className="font-inter font-semibold text-lg text-dark">Our Partners in Growth</h4>
          <div className="flex items-center gap-7 flex-wrap justify-center">
            <Axibo />
            <Sync />
            <Vividora />
            <Justthrive />
            <Headshots />
            <Rewind />
            <Mherst />
            <Dyutih />
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;
