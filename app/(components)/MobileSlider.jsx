"use client";
import { useState } from "react";

export const MobileSlider = ({ sliderImages = [], sliderBg }) => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // Touch gesture state
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Slide navigation
  const prevSlider = () =>
    setCurrentSlider((current) =>
      current === 0 ? sliderImages.length - 1 : current - 1
    );

  const nextSlider = () =>
    setCurrentSlider((current) =>
      current === sliderImages.length - 1 ? 0 : current + 1
    );

  // Touch event handlers
  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX - touchEndX;
    if (swipeDistance > 50) {
      nextSlider(); // Swipe left
    } else if (swipeDistance < -50) {
      prevSlider(); // Swipe right
    }
  };

  return (
    <div className="">
      {/* Slider Container */}
      <div
        className={`max-w-6xl mx-auto h-[689px] my-auto flex flex-col xl:flex-row justify-center items-center overflow-hidden relative rounded-2xl ${sliderBg ? "bg-no-repeat bg-center bg-cover" : "bg-black"
          }`}
        style={sliderBg ? { backgroundImage: `url(${sliderBg})` } : {}}
      >
        <div
          className="h-[569px] w-11/12 relative ease-linear duration-300 flex gap-x-2 items-center"
          style={{ transform: `translateX(-${currentSlider * 80}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {sliderImages.map((slide, inx) => (
            <div
              key={inx}
              className={`h-full min-w-[80%] relative duration-200`}
            >
              <img
                src={slide.img}
                className="w-auto h-full rounded-lg duration-300"
                alt={slide.tags}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls and Indicator */}
      <div className="max-w-6xl mx-auto w-full h-full flex items-center justify-between mt-4 gap-x-4 z-50 px-5">
        {/* Left Arrow */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
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
              d="M13.4604 8.47021L9.94043 12.0002L13.4604 15.5302"
              stroke="#959595"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="w-full h-0.5 flex bg-[#DADADA] rounded-[10px]">
          {sliderImages.map((_, inx) => (
            <div
              key={inx}
              className={`h-0.5 rounded-[10px] ${currentSlider === inx ? "bg-[#FF2626]" : "bg-[#DADADA]"
                }`}
              style={{
                width: `${100 / sliderImages.length}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            className="rotate-180"
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
              d="M13.4604 8.47021L9.94043 12.0002L13.4604 15.5302"
              stroke="#959595"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
