"use client";

import React, { useRef, useState } from "react";
import { cn } from "../(utils)/utils";
import { useResponsiveStates } from "../(utils)/hooks";
import { Badge } from "./ui/Badge";
import ArrowBR from "../(assets)/arrowBR";
import MountAnim from "./ui/MountAnim";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Icon from "./ui/Icon";
import FeedbackCarousel from "./ui/FeedbackCarousel";
gsap.registerPlugin(ScrollTrigger);

const Data = [
  {
    id: "01",
    name: "Ellie Nguyen",
    position: "Jellice",
    feedback:
      "They consistently set and achieve clear goals with a strong work ethic, creativity, and skillfulness, while meeting deadlines and effectively solving problems.",
    customClass: "bottom-0 left-[108rem] bg-blue-light border-blue-dark",
    customIndex: "bg-blue",
  },
  {
    id: "02",
    name: "Liam Walker",
    position: "Zenith",
    feedback:
      "Their dedication, creativity, and timely delivery of the website exceeded our expectations. We're thrilled with the end result, and it beautifully reflects the essence of Flora.",
    customClass: "top-0 left-[182rem] bg-green-light border-green-dark",
    customIndex: "bg-green",
  },
  {
    id: "03",
    name: "Ivan Petrov",
    position: "Daxo Event Management",
    feedback:
      "They didn't just deliver exceptional work; they genuinely took the time to listen and understand our goals. Their ideas went beyond our expectations.",
    customClass: "bottom-0 left-[254rem] bg-purple-light border-purple-dark",
    customIndex: "bg-purple",
  },
  {
    id: "04",
    name: "Nathan Pierce",
    position: "Fundex Marketing",
    feedback:
      "Nailed every single time. Creativity? Off the charts. They took our loose concepts and transformed them into a bold, modern brand identity that resonates with our audience. ",
    customClass: "top-0 left-[330rem] bg-yellow-light border-yellow-dark",
    customIndex: "bg-yellow",
  },
];

const HorizontalSec = () => {
  const containerRef = useRef(null);
  const { isTab, isMobile } = useResponsiveStates();

  useGSAP(
    () => {
      if (!isTab && !isMobile) {
        const items = gsap.utils.toArray(".HRItems");
        const tl = gsap.timeline();

        tl.fromTo(
          "#text",
          {
            x: "0",
            xPercent: -0,
          },
          {
            x: "100vw",
            xPercent: -100,
            ease: "none",
          }
        );

        items?.forEach((item, i) => {
          tl.fromTo(
            item,
            { x: "60vw" },
            { x: "-60vw", ease: "none" },
            "<" // Play simultaneously with the previous animation
          );
        });

        tl.to(
          "#text > *:not(#worktext)",
          { opacity: 0, ease: "none", duration: 0.05 },
          "worktext"
        ).to("#worktext", {
          scale: 1.5,
          ease: "none",
          duration: 0.1,
          onStart: () => {
            document.querySelector("#worktext").classList.add(
              "bg-clip-text", "text-transparent", "lin-gradient"
            );
          }
        }, "worktext");

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: true,
          animation: tl,
        });

        if (!isTab) {
          const tl2 = gsap.timeline();
          tl2.to("#sticky", { yPercent: 100, ease: "none" });

          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "bottom bottom",
            end: "bottom top",
            invalidateOnRefresh: true,
            scrub: true,
            animation: tl2,
          });
        }
      }
    },
    {
      scope: containerRef,
      dependencies: [isTab, isMobile],
    }
  );

  return (
    <section ref={containerRef} className="relative lg:h-[1000vh]">
      {!isMobile && !isTab && (
        <div
          id="sticky"
          className="hidden lg:flex sticky top-0 h-screen w-full overflow-hidden items-center pointer-events-none"
        >
          <div
            id="text"
            className={
              "px-con text-[18.6rem] leading-none whitespace-nowrap w-fit capitalize flex flex-nowrap items-center gap-[.5ch] font-normal relative h-full"
            }
          >
            {/* {Data.map((item, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "HRItems absolute my-[6vh] text-base p-8 flex flex-col gap-6 border-2 rounded-2xl w-full max-w-[89ch] translate-x-[60vw]",
                    item.customClass
                  )}
                >
                  <div className="flex gap-6">
                    <div
                      className={cn(
                        "text-[1.125rem] size-10 rounded-full grid place-content-center text-white",
                        item.customIndex
                      )}
                    >
                      0{index + 1}
                    </div>
                    <div className="text-2xl flex flex-col gap-3">
                      <p className="leading-none font-medium">{item.name}</p>
                      <p className="leading-none">{item.position}</p>
                    </div>
                  </div>
                  <p className="text-[1.5rem] max-w-full whitespace-normal text-wrap leading-snug text-[#535353]">
                    {item.feedback}
                  </p>
                </div>
              );
            })} */}
            <div className="relative">
              Why they
              <HorizonCapsule title={'Curiosity'} className={'bottom-[130%]'} />
              {/* <MountAnim className={"left-0 bottom-full absolute"}>
              </MountAnim> */}
            </div>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/oswimbuv.json"}
              />
            </div>
            <span className="relative">love us - take a
              <HorizonCapsule title={'Transparency'} className={'top-[130%] right-1/2 '} />
              <HorizonCapsule title={'Commitment'} className={'bottom-[130%] right-36'} />
            </span>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/snxksidl.json"}
              />
            </div>
            <span className="relative">look at our
              <HorizonCapsule title={'Innovation'} className={'top-[130%] right-1/2 '} />
              <HorizonCapsule title={'Originality'} className={'bottom-[130%] right-36'} />
            </span>
            <div className="size-[10rem] flex-shrink-0 mb-[10rem]">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/ewtvnblg.json"}
              />
            </div>
            <div className="bg-clip-text text-transparent leading-none overflow-visible lin-gradient top-5 relative">
              <div className="inline-block leading-none pb-7">amazing</div>
              <span id="worktext" className="inline-block">
                work
              </span>
              <svg className="absolute bottom-[110%]" width="335" height="84" viewBox="0 0 335 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5135 59.775C15.1468 59.775 12.9218 59.3083 10.8385 58.375C8.75514 57.425 6.92181 56.125 5.33848 54.475C3.77181 52.8083 2.53848 50.875 1.63848 48.675C0.755143 46.475 0.313477 44.125 0.313477 41.625C0.313477 39.125 0.755143 36.775 1.63848 34.575C2.53848 32.375 3.77181 30.45 5.33848 28.8C6.92181 27.1333 8.75514 25.8333 10.8385 24.9C12.9218 23.95 15.1468 23.475 17.5135 23.475C20.3468 23.475 22.9551 24.1333 25.3385 25.45C27.7218 26.7667 29.6968 28.5167 31.2635 30.7L28.1635 32.375C26.9301 30.725 25.3635 29.4167 23.4635 28.45C21.5801 27.4667 19.5968 26.975 17.5135 26.975C15.5968 26.975 13.8051 27.3667 12.1385 28.15C10.4885 28.9167 9.03848 29.975 7.78848 31.325C6.53848 32.675 5.56348 34.2333 4.86348 36C4.16348 37.7667 3.81348 39.6417 3.81348 41.625C3.81348 43.6417 4.16348 45.5333 4.86348 47.3C5.58014 49.0667 6.56348 50.625 7.81348 51.975C9.08014 53.325 10.5385 54.3833 12.1885 55.15C13.8551 55.9 15.6301 56.275 17.5135 56.275C19.6801 56.275 21.6885 55.7833 23.5385 54.8C25.4051 53.8 26.9468 52.5 28.1635 50.9L31.2635 52.575C29.6968 54.7583 27.7218 56.5083 25.3385 57.825C22.9551 59.125 20.3468 59.775 17.5135 59.775ZM58.2209 43.65V59.125H54.7209V44.35C54.7209 42.9833 54.3876 41.7417 53.7209 40.625C53.0542 39.5083 52.1626 38.6167 51.0459 37.95C49.9292 37.2833 48.6876 36.95 47.3209 36.95C45.9709 36.95 44.7292 37.2833 43.5959 37.95C42.4792 38.6167 41.5876 39.5083 40.9209 40.625C40.2542 41.7417 39.9209 42.9833 39.9209 44.35V59.125H36.4209V21.625H39.9209V37.575C40.8042 36.3083 41.9542 35.3 43.3709 34.55C44.7876 33.8 46.3292 33.425 47.9959 33.425C49.8792 33.425 51.5959 33.8833 53.1459 34.8C54.6959 35.7167 55.9292 36.95 56.8459 38.5C57.7626 40.05 58.2209 41.7667 58.2209 43.65ZM73.7393 59.775C71.4393 59.775 69.3393 59.1833 67.4393 58C65.5559 56.8167 64.0476 55.2333 62.9143 53.25C61.7976 51.25 61.2393 49.0417 61.2393 46.625C61.2393 44.7917 61.5643 43.0833 62.2143 41.5C62.8643 39.9 63.7559 38.5 64.8893 37.3C66.0393 36.0833 67.3726 35.1333 68.8893 34.45C70.4059 33.7667 72.0226 33.425 73.7393 33.425C75.5893 33.425 77.2893 33.7917 78.8393 34.525C80.4059 35.2583 81.7476 36.2833 82.8643 37.6C83.9976 38.9167 84.8476 40.4583 85.4143 42.225C85.9976 43.9917 86.2393 45.9 86.1393 47.95H64.9393C65.1393 49.5333 65.6393 50.95 66.4393 52.2C67.2559 53.45 68.2893 54.4417 69.5393 55.175C70.8059 55.8917 72.2059 56.2583 73.7393 56.275C75.4059 56.275 76.9059 55.8417 78.2393 54.975C79.5893 54.1083 80.6726 52.9167 81.4893 51.4L85.0393 52.225C84.0393 54.4417 82.5309 56.2583 80.5143 57.675C78.4976 59.075 76.2393 59.775 73.7393 59.775ZM64.8393 45.125H82.6143C82.4976 43.575 82.0226 42.1583 81.1893 40.875C80.3726 39.575 79.3143 38.5417 78.0143 37.775C76.7143 36.9917 75.2893 36.6 73.7393 36.6C72.1893 36.6 70.7726 36.9833 69.4893 37.75C68.2059 38.5 67.1559 39.525 66.3393 40.825C65.5226 42.1083 65.0226 43.5417 64.8393 45.125ZM108.031 52.85L111.156 54.55C110.022 56.1333 108.581 57.4 106.831 58.35C105.097 59.3 103.214 59.775 101.181 59.775C98.8807 59.775 96.7807 59.1833 94.8807 58C92.9973 56.8167 91.489 55.2333 90.3557 53.25C89.239 51.25 88.6807 49.0417 88.6807 46.625C88.6807 44.7917 89.0057 43.0833 89.6557 41.5C90.3057 39.9 91.1973 38.5 92.3307 37.3C93.4807 36.0833 94.814 35.1333 96.3307 34.45C97.8473 33.7667 99.464 33.425 101.181 33.425C103.214 33.425 105.097 33.9 106.831 34.85C108.581 35.8 110.022 37.075 111.156 38.675L108.031 40.35C107.164 39.25 106.122 38.4083 104.906 37.825C103.689 37.225 102.447 36.925 101.181 36.925C99.4973 36.925 97.9723 37.375 96.6057 38.275C95.239 39.1583 94.1557 40.3333 93.3557 41.8C92.5723 43.2667 92.1807 44.875 92.1807 46.625C92.1807 48.375 92.5807 49.9833 93.3807 51.45C94.1973 52.9167 95.289 54.0917 96.6557 54.975C98.0223 55.8417 99.5307 56.275 101.181 56.275C102.547 56.275 103.831 55.9583 105.031 55.325C106.231 54.6917 107.231 53.8667 108.031 52.85ZM134.852 59.125H130.827L123.827 47.05L118.827 53.025V59.125H115.327V21.625H118.827V47.575L130.102 34.125H134.677L126.202 44.2L134.852 59.125ZM168.149 59.775C165.783 59.775 163.558 59.3083 161.474 58.375C159.391 57.425 157.558 56.1167 155.974 54.45C154.391 52.7833 153.149 50.8583 152.249 48.675C151.349 46.475 150.899 44.125 150.899 41.625C150.899 39.125 151.349 36.7833 152.249 34.6C153.149 32.4 154.391 30.4667 155.974 28.8C157.558 27.1333 159.391 25.8333 161.474 24.9C163.558 23.95 165.783 23.475 168.149 23.475C170.533 23.475 172.766 23.95 174.849 24.9C176.933 25.8333 178.766 27.1333 180.349 28.8C181.933 30.4667 183.166 32.4 184.049 34.6C184.949 36.7833 185.399 39.125 185.399 41.625C185.399 44.125 184.949 46.475 184.049 48.675C183.166 50.8583 181.933 52.7833 180.349 54.45C178.766 56.1167 176.933 57.425 174.849 58.375C172.766 59.3083 170.533 59.775 168.149 59.775ZM168.149 56.275C170.066 56.275 171.849 55.8917 173.499 55.125C175.166 54.3417 176.624 53.275 177.874 51.925C179.141 50.575 180.124 49.0167 180.824 47.25C181.541 45.4833 181.899 43.6083 181.899 41.625C181.899 39.625 181.541 37.7417 180.824 35.975C180.108 34.1917 179.116 32.6333 177.849 31.3C176.599 29.95 175.141 28.8917 173.474 28.125C171.824 27.3583 170.049 26.975 168.149 26.975C166.233 26.975 164.441 27.3667 162.774 28.15C161.124 28.9167 159.666 29.975 158.399 31.325C157.149 32.675 156.166 34.2333 155.449 36C154.749 37.7667 154.399 39.6417 154.399 41.625C154.399 43.6417 154.758 45.5333 155.474 47.3C156.191 49.0667 157.174 50.625 158.424 51.975C159.691 53.325 161.149 54.3833 162.799 55.15C164.466 55.9 166.249 56.275 168.149 56.275ZM189.034 49.55V34.125H192.534V48.85C192.534 50.2167 192.868 51.4583 193.534 52.575C194.201 53.6917 195.093 54.5833 196.209 55.25C197.343 55.9167 198.584 56.25 199.934 56.25C201.301 56.25 202.534 55.9167 203.634 55.25C204.751 54.5833 205.643 53.6917 206.309 52.575C206.976 51.4583 207.309 50.2167 207.309 48.85V34.125H210.809L210.834 59.125H207.334L207.309 55.625C206.426 56.8917 205.276 57.9 203.859 58.65C202.459 59.4 200.926 59.775 199.259 59.775C197.376 59.775 195.659 59.3167 194.109 58.4C192.559 57.4833 191.326 56.25 190.409 54.7C189.493 53.15 189.034 51.4333 189.034 49.55ZM215.815 59.125V34.125H219.315V37.575C220.199 36.3083 221.349 35.3 222.765 34.55C224.182 33.8 225.724 33.425 227.39 33.425C228.357 33.425 229.29 33.55 230.19 33.8L228.765 37.275C228.065 37.0583 227.382 36.95 226.715 36.95C225.365 36.95 224.124 37.2833 222.99 37.95C221.874 38.6167 220.982 39.5083 220.315 40.625C219.649 41.7417 219.315 42.9833 219.315 44.35V59.125H215.815Z" fill="black" />
                <path d="M330.781 82.125H313.281C312.022 82.125 311 81.1027 311 79.8438C311 78.5848 312.022 77.5625 313.281 77.5625H325.274L297.838 50.126L297.53 52.0625C296.881 56.1432 295.703 60.0257 293.972 63.5039C289.377 72.7309 281.491 77.75 271.719 77.75C260.813 77.75 251.938 68.8746 251.938 57.9688C251.938 48.1369 257.771 39.5975 267.228 35.6807H267.229C270.505 34.3206 273.925 33.6611 277.297 33.6611C282.317 33.6611 287.226 35.1289 291.41 37.9287L293.308 39.1992L292.954 36.9434C291.857 29.9454 289.252 23.1311 285.213 17.7793C283.11 14.9939 279.925 11.8162 277.287 9.35059C275.962 8.11188 274.763 7.04216 273.891 6.27734C273.048 5.53846 272.476 5.05539 272.458 5.04004L272.45 5.0332L272.442 5.02734C271.477 4.22113 271.35 2.78277 272.159 1.81641H272.16C272.61 1.27874 273.254 1.00007 273.908 1C274.426 1 274.944 1.174 275.372 1.5332L275.374 1.53613L275.88 1.96484C277.849 3.64891 284.944 9.85303 288.854 15.0332C294.752 22.8481 297.937 33.3096 298.104 43.543L298.11 43.9482L298.396 44.2344L326.793 72.6299L328.5 74.3369V62.3438C328.5 61.0848 329.522 60.0625 330.781 60.0625C332.04 60.0625 333.062 61.0848 333.062 62.3438V79.8438C333.062 81.1027 332.04 82.125 330.781 82.125ZM271.719 73.1875C281.928 73.1875 287.26 66.7463 289.889 61.4707C292.13 56.9718 293.289 51.6838 293.499 46.2383L293.516 45.8018L293.207 45.4932L291.982 44.2676C284.722 37.0097 275.309 37.2721 268.972 39.8975C262.986 42.3761 256.5 48.4253 256.5 57.9688C256.5 66.361 263.326 73.1875 271.719 73.1875Z" fill="black" stroke="#F1F0EE" stroke-width="2" />
              </svg>

            </div>
            <div className="flex-shrink-0 w-[calc(50vw-2.35ch-7.4rem)]"></div>
          </div>
        </div>
      )}

      {!isMobile && isTab && (
        <div className="max-sm:hidden lg:hidden py-con flex flex-col gap-2">
          <MountAnim className="px-con text-[6.6rem] capitalize leading-snug flex flex-col gap-2">
            <Badge nodot size="l" variant="yellow" className="gap-3 mr-auto">
              Portfolio This Way{" "}
              <ArrowBR className="w-[0.5em] h-auto -rotate-45" />
            </Badge>
            <div className="flex gap-4">
              <span>Why they</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/oswimbuv.json"}
                />
              </div>

              <span>love us - take</span>
            </div>
            <div className="flex gap-4">
              <span>a</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/snxksidl.json"}
                />
              </div>

              <span>look at our</span>
              <div className="mt-4 size-[7.15rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/ewtvnblg.json"}
                />
              </div>
              <span>amazing</span>
            </div>
            <div className="flex gap-4">
              <span>work</span>
            </div>
          </MountAnim>

          <div className="flex flex-col gap-4 mt-8">
            {/* <FeedbackCarousel Data={Data} /> */}
          </div>
        </div>
      )}

      {isMobile && (
        <div className="sm:hidden py-con flex flex-col gap-2">
          <MountAnim className="px-con text-4xl capitalize leading-snug">
            <h2 className="flex gap-3 items-center">
              Why they
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/oswimbuv.json"}
                />
              </div>
            </h2>
            <h2>love us</h2>
          </MountAnim>

          {/* <div className="flex flex-col gap-4 mb-8">
            <FeedbackCarousel Data={Data} />
          </div> */}

          <MountAnim className="px-con text-4xl capitalize leading-snug">
            <Badge nodot variant="yellow">
              Our Portfolio
            </Badge>
            <h2 className="flex gap-3 items-center">
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/snxksidl.json"}
                />
              </div>
              take a look at
            </h2>
            <h2 className="flex gap-3 items-center">
              our
              <div className="size-[3.75rem] flex-shrink-0">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/ewtvnblg.json"}
                />
              </div>
              amazing
            </h2>
            <h2>work</h2>
          </MountAnim>
        </div>
      )}
    </section>
  );
};

export default HorizontalSec;

const HorizonCapsule = ({ title, className }) => {
  return (
    <span
      className={cn(
        "font-normal p-12 rounded-full bg-gray-new max-h-fit w-fit absolute text-5xl ",
        className
      )}
    >
      <span className="leading-none bg-clip-text text-transparent lin-gradient">{title}</span>
    </span>
  );
}
