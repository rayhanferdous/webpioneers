import Image from "next/image";
import React from "react";
import { cn } from "@/app/(utils)/utils";
import { useRef } from "react";

const DetailCard = ({ img, pclass, scroller = false, width, height }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className={cn(
            `${
              scroller
                ? "max-sm:overscroll-y-hidden max-sm:overflow-x-auto max-sm:customScrollbarM max-sm:pb-6 max-sm:mb-2 max-sm:max-w-[calc(100vw-2.5rem-2px)]"
                : ""
            } w-full h-fit`
          )}
        >
          <Image
            src={img}
            alt="Learn More Image"
            width={width}
            height={height}
            priority
            className={cn(
              `${scroller ? "min-w-[44rem]" : ""} w-full h-auto mt-7`,
              pclass
            )}
          />
        </div>
        {scroller && (
          <button
            onClick={scrollLeft}
            className="sm:hidden absolute -bottom-[calc(0.75rem-1px)] left-0 z-50"
          >
            <svg
              className="size-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9L22 15C22 20 20 22 15 22L9 22C4 22 2 20 2 15L2 9C2 4 4 2 9 2L15 2C20 2 22 4 22 9Z"
                stroke="#080808"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.4595 8.47021L9.93945 12.0002L13.4595 15.5302"
                stroke="#959595"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {scroller && (
          <button
            onClick={scrollRight}
            className="sm:hidden absolute -bottom-[calc(0.75rem-1px)] right-0 z-50"
          >
            <svg
              className="size-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9L2 15C2 20 4 22 9 22L15 22C20 22 22 20 22 15L22 9C22 4 20 2 15 2L9 2C4 2 2 4 2 9Z"
                stroke="#080808"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5405 8.47021L14.0605 12.0002L10.5405 15.5302"
                stroke="#959595"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

const Detail = ({ data }) => {
  return (
    <>
      {data.map((detail, index) => {
        if (detail.type === "text") {
          return (
            <div key={index} className="flex flex-col gap-5 sm:gap-10">
              {detail.text.map((paragraph, pIndex) => (
                <p
                  className="text-gray-900 font-medium text-[1.375rem] sm:text-[2rem] leading-snug sm:leading-tight"
                  key={pIndex}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          );
        } else if (detail.type === "image") {
          return (
            <div
              key={index}
              className={`${
                !detail.scroller ? "overflow-hidden rounded-2xl" : ""
              }`}
            >
              {detail.imageM ? (
                <>
                  <Image
                    src={detail.image}
                    width={1920}
                    height={1080}
                    alt="Portfolio Image"
                    className="w-full max-sm:hidden"
                  />
                  <Image
                    src={detail.imageM}
                    width={1000}
                    height={1000}
                    alt="Portfolio Image"
                    className="w-full sm:hidden"
                  />
                </>
              ) : (
                <>
                  <Image
                    src={detail.image}
                    width={1920}
                    height={1080}
                    alt="Portfolio Image"
                    className="w-full max-sm:hidden"
                  />
                  <DetailCard
                    img={
                      detail.scrollerImage
                        ? detail.scrollerImage
                        : detail.imageM
                        ? detail.imageM
                        : detail.image
                    }
                    scroller={detail.scroller}
                    width={detail.width || 1920}
                    height={detail.height || 1080}
                    alt="Portfolio Image"
                    pclass={`sm:hidden ${detail.scrollerClass}`}
                  />
                </>
              )}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Detail;
