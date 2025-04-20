"use client";

import React, { useRef } from "react";
import MountAnim from "@/app/(components)/ui/MountAnim";
import { Badge } from "@/app/(components)/ui/Badge";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const TestimonialItem = ({ item }) => {
  return (
    <div className="border-2 border-gray-600 rounded-2xl p-3 sm:p-[1.875rem] bg-white flex flex-col gap-7">
      <p className="text-base sm:text-[1.65rem] lg:text-[1.375rem] font-medium text-gray-700 leading-normal">
        {item.detail}
      </p>
      <div className="flex max-sm:flex-col-reverse items-start gap-4 sm:gap-7 justify-between">
        <div className="">
          <h4 className="text-base sm:text-[1.65rem] lg:text-[1.375rem] font-medium">
            {item.name}
          </h4>
          <p className="text-base sm:text-[1.55rem] lg:text-[1.375rem] text-gray-700 font-medium">
            {item.post}
          </p>
        </div>
        <Image
          src={item.image}
          width={70}
          height={70}
          className="size-[3.25rem] sm:size-[4.75rem] lg:size-[4.375rem] rounded-full bg-[#D9D9D9]"
        />
      </div>
    </div>
  );
};

const Data = [
  {
    detail:
      "Deadlines? Always met. Creativity? Delivered in spades. This team turned our scattered ideas into a cohesive and stunning website that perfectly captures our vision. Their attention to detail and commitment to excellence are unmatched.",
    name: "Sarah Mitchell",
    post: "Mitchell Interiors",
    image: "/feedback/img1.png",
  },
  {
    detail:
      "Working with them was like watching a master artist at work. They made sure every pixel had a purpose, and the result is a website that not only looks stunning but also converts like crazy. Their CRO expertise is next level!",
    name: "Sophia Torres",
    post: "Urban Threads",
    image: "/feedback/img3.png",
  },
  {
    detail:
      "Our website went from outdated to outstanding in record time. Their approach to combining aesthetics with functionality is exactly what every finance firm needs. We've received countless compliments from clients about how easy it is to navigate.",
    name: "Daniel Carter",
    post: "Carter Advisors",
    image: "/feedback/img2.png",
  },
  {
    detail:
      "We needed a site that reflected our brand's evolution, and they delivered far beyond expectations. It's rare to find a team that balances creativity with data-driven decisions so well. They've set the bar impossibly high!",
    name: "Lauren Smith",
    post: "Bloom Design Studio",
    image: "/feedback/img4.png",
  },
  {
    detail:
      "From the first call, I could tell they were different. They don't just design websites—they create experiences. Our new platform is sleek, intuitive, and a massive hit with our customers. We're seeing more traffic and better engagement than ever before.",
    name: "James Oliver",
    post: "CFO,Pinnacle",
    image: "/feedback/img3.png",
  },
  {
    detail:
      "This team doesn't just tick boxes—they redefine them. The care and creativity they put into designing our platform are unparalleled. It's no wonder our clients rave about the improved experience!",
    name: "Rachel Bennett",
    post: "Bennett Consulting",
    image: "/feedback/img1.png",
  },
  {
    detail:
      "As someone particular about design, I was blown away by their creativity and execution. They understood our audience better than we did, delivering a site that's as functional as it is beautiful. The results speak for themselves—higher engagement, better conversions, and a brand presence we're proud of.",
    name: "Emily Harper",
    post: "Harper & Co.",
    image: "/feedback/img4.png",
  },
  {
    detail:
      "Their attention to user experience and clean code is what sets them apart. Our new website is a reflection of their ability to combine technical expertise with creative brilliance. It's fast, secure, and drives results.",
    name: "Jason Miller",
    post: "Miller Logistics",
    image: "/feedback/img2.png",
  },
];

const Testimonials = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { y: "0%" },
      {
        y: "-8%",
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      }
    );
  });

  return (
    <section className="relative z-50 py-10 sm:py-20 px-con bg-[#FAF8F6] text-dark flex flex-col gap-12 sm:gap-20  items-center overflow-hidden">
      <div className="text-center flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Testimonials
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">Why They Love Us</h1>
        </MountAnim>
      </div>
      <div
        ref={container}
        className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8  overflow-hidden items-start mb-[-26.2rem] lg:mb-[-22.2rem]"
      >
        <div className="sm:hidden flex flex-col gap-4 sm:gap-8">
          <TestimonialItem item={Data[0]} />
          <TestimonialItem item={Data[4]} />
        </div>
        <div className="sm:hidden flex flex-col gap-4 sm:gap-8">
          <TestimonialItem item={Data[2]} />
          <TestimonialItem item={Data[6]} />
        </div>
        <div className="hidden sm:flex flex-col gap-4 sm:gap-8">
          <TestimonialItem item={Data[0]} />
          <TestimonialItem item={Data[1]} />
        </div>
        <div className="hidden sm:flex flex-col gap-4 sm:gap-8 pt-20">
          <TestimonialItem item={Data[2]} />
          <TestimonialItem item={Data[3]} />
        </div>
        <div className="hidden sm:flex flex-col gap-4 sm:gap-8 pt-14">
          <TestimonialItem item={Data[4]} />
          <TestimonialItem item={Data[5]} />
        </div>
        <div className="hidden sm:flex flex-col gap-4 sm:gap-8 pt-5">
          <TestimonialItem item={Data[6]} />
          <TestimonialItem item={Data[7]} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
