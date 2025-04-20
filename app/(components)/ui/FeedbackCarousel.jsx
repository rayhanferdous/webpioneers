"use client";

import {
  motion,
  useAnimation,
  useDragControls,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/app/(utils)/utils";
import { useResponsiveStates } from "@/app/(utils)/hooks";
const SWIPE_THRESHOLD = 50;

function CarouselNavigation({
  className,
  classNameButton,
  alwaysShow,
  index,
  setIndex,
}) {
  return (
    <div
      className={cn(
        "pointer-events-none flex items-center justify-end gap-3 px-2",
        className
      )}
    >
      <button
        type="button"
        aria-label="Previous slide"
        className={cn(
          "pointer-events-auto h-fit w-fit transition-opacity duration-300",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40",
          classNameButton
        )}
        onClick={() => {
          setIndex(index - 1);
        }}
      >
        <svg
          className="size-[1.875rem] sm:size-[4.4rem]"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
            stroke="#080808"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5758 19.4124L12.1758 14.9999L16.5758 10.5874"
            stroke="#080808"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        className={cn(
          "pointer-events-auto h-fit w-fit transition-opacity duration-300",
          alwaysShow
            ? "opacity-100"
            : "opacity-0 group-hover/hover:opacity-100",
          alwaysShow
            ? "disabled:opacity-40"
            : "disabled:group-hover/hover:opacity-40",
          classNameButton
        )}
        aria-label="Next slide"
        onClick={() => {
          setIndex(index + 1);
        }}
      >
        <svg
          className="size-[1.875rem] sm:size-[4.4rem]"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.75 27.5H11.25C5 27.5 2.5 25 2.5 18.75V11.25C2.5 5 5 2.5 11.25 2.5H18.75C25 2.5 27.5 5 27.5 11.25V18.75C27.5 25 25 27.5 18.75 27.5Z"
            stroke="#080808"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4242 19.4124L17.8242 14.9999L13.4242 10.5874"
            stroke="#080808"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

function CarouselIndicator({
  className,
  classNameButton,
  customBg = [],
  index,
  setIndex,
  itemsCount,
}) {
  return (
    <div className={cn("flex w-full items-center justify-center", className)}>
      <div className="flex space-x-1.5">
        {Array.from({ length: itemsCount }, (_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2 w-4 rounded-full transition-opacity duration-300 bg-dark",
              index % itemsCount === i ? "opacity-100" : "opacity-30",
              classNameButton,
              customBg[i]
            )}
          />
        ))}
      </div>
    </div>
  );
}

const CarouselItems = ({ Data }) => {
  return (
    <>
      {Data.map((item, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-[calc(100vw-0px)] sm:w-[60vw] relative flex max-sm:px-5 sm:pr-12"
        >
          <div
            className={cn(
              "flex-1 text-base p-4 sm:p-14 lg:p-8 flex flex-col gap-6 sm:gap-10 lg:gap-6 border-2 rounded-2xl sm:rounded-3xl lg:rounded-2xl w-full",
              item.customClass
            )}
          >
            <div className="flex gap-6">
              <div
                className={cn(
                  "text-base sm:text-[1.75rem] lg:text-[1.125rem] size-8 sm:size-16 lg:size-10 rounded-full grid place-content-center text-white",
                  item.customIndex
                )}
              >
                {item.id}
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[1.375rem] sm:text-[2rem] lg:text-2xl leading-none font-medium">
                  {item.name}
                </p>
                <p className="text-[1.375rem] sm:text-[1.75rem] lg:text-2xl  leading-none">
                  {item.position}
                </p>
              </div>
            </div>
            <p className="text-xl sm:text-[2rem] lg:text-[1.5rem] max-w-full whitespace-normal text-wrap leading-snug text-[#535353]">
              {item.feedback}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

const FeedbackCarousel = ({ Data }) => {
  const [currentSlide, setCurrentSlide] = useState(Data.length);
  const [clonedData, setClonedData] = useState([]);
  const controls = useAnimation();
  const touchControls = useDragControls();
  const listCon = useRef(null);
  const x = useMotionValue(0);
  const { isMobile } = useResponsiveStates();
  const cardWidth = !isMobile ? 60 : 100;

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (listCon.current) {
      const containerWidth = listCon.current.offsetWidth;
      const totalWidth = listCon.current.scrollWidth;
      const newRightConstraint = containerWidth - totalWidth;
      setConstraints({ left: newRightConstraint, right: 0 });
    }
  }, [Data]);

  useEffect(() => {
    setClonedData([...Data, ...Data, ...Data]);
  }, [Data]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) {
      setCurrentSlide((prev) => prev + 1);
    } else if (info.offset.x > SWIPE_THRESHOLD) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  useEffect(() => {
    controls.start({
      x: -currentSlide * cardWidth + "vw",
      transition: {
        ease: [0.33, 1, 0.68, 1],
        duration: 0.5,
      },
    });

    // Handle loop reset
    if (currentSlide === 0) {
      setTimeout(() => {
        controls.set({ x: -Data.length * cardWidth + "vw" }); // Reset to middle copy
        setCurrentSlide(Data.length);
      }, 500);
    } else if (currentSlide === clonedData.length - Data.length) {
      setTimeout(() => {
        controls.set({ x: -Data.length * cardWidth + "vw" }); // Reset to middle copy
        setCurrentSlide(Data.length);
      }, 500);
    }
  }, [currentSlide, controls, clonedData.length, Data.length]);

  function startDrag(event) {
    touchControls.start(event);
  }

  return (
    <section className="w-full relative pt-12 pb-4">
      <CarouselNavigation
        index={currentSlide}
        setIndex={setCurrentSlide}
        className={"sm:hidden px-con mb-6"}
        alwaysShow
      />
      <div className="relative overflow-hidden w-full">
        <motion.div
          drag={"x"}
          dragElastic={0.05}
          dragControls={touchControls}
          onDragEnd={handleDragEnd}
          dragConstraints={constraints}
          style={{ x }}
          className="sm:ml-[calc(20vw+1.5rem)] relative z-10 w-fit"
        >
          <motion.div animate={controls} className="flex flex-nowrap">
            <CarouselItems Data={clonedData} />
          </motion.div>
        </motion.div>
        <motion.div
          style={{ touchAction: "none" }}
          onPointerDown={startDrag}
          className="absolute z-20 w-full h-full inset-0"
        ></motion.div>
      </div>
      <CarouselIndicator
        index={currentSlide}
        setIndex={setCurrentSlide}
        itemsCount={Data.length}
        className={"sm:hidden px-con pt-4"}
        customBg={["bg-blue", "bg-green", "bg-purple", "bg-yellow"]}
      />
      <CarouselNavigation
        index={currentSlide}
        setIndex={setCurrentSlide}
        className={"max-sm:hidden px-con justify-center gap-6 pt-10"}
        alwaysShow
      />
    </section>
  );
};

export default FeedbackCarousel;
