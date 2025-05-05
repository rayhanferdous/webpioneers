"use client";

import React, { useState } from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import { useResponsiveStates } from "../(utils)/hooks";
import { motion } from "framer-motion";
import Icon from "./ui/Icon";

const plans = [
  {
    slotsAvailable: 2,
    title: "Design",
    price: 2490,
    icon: "https://cdn.lordicon.com/ovxlloho.json",
    description:
      "Enhance your brand with custom designs that reflect your unique vision.",
    features: [
      "40 hours of design monthly",
      "Team feedback access",
      "2 projects at once",
      "Unlimited revisions",
      "Unlimited design requests",
      "CRO-optimized designs",
      "Fast 48-hour delivery",
      "Purpose-driven UX",
    ],
  },
  {
    slotsAvailable: 2,
    title: "Development",
    price: 3490,
    icon: "https://cdn.lordicon.com/wbthjkyu.json",
    description:
      "Build a user-friendly website tailored to your needs for better online engagement.",
    features: [
      "40 hours development monthly",
      "1-week deployment",
      "2 projects at once",
      "CRO A/B testing",
      "Expert support anytime",
      "Custom plugins available",
      "Easy WordPress setup",
      "QA-tested quality",
    ],
  },
  {
    slotsAvailable: 2,
    title: "Design & Development",
    price: 5500,
    description:
      "Combine stunning design with powerful development to create your online presence.",
    features: [
      "80 hours monthly",
      "Ongoing monitoring",
      "2 projects at once",
      "Built-in QA checks",
      "Weekly progress reports",
      "WordPress or Shopify",
      "CRO-focused approach",
      "Detailed analytics",
    ],
  },
];

const PlanCard = ({
  slotsAvailable,
  title,
  price,
  icon,
  features,
  description,
}) => {
  return (
    <div className="p-6 sm:p-8 flex flex-col gap-4 sm:gap-7 w-full">
      <MountAnim className="flex gap-4 justify-between">
        <div className="flex flex-col gap-3">
          <small className="flex items-center gap-2 text-sm sm:text-lg text-dark leading-none">
            <span className="size-[0.5em] sm:size-[0.4em] rounded-full bg-green" />
            {slotsAvailable} Slots Available
          </small>
          <h2 className="text-[1.75rem] sm:text-[2rem] leading-[1.1]">
            {title}
          </h2>
          <div className="flex items-end gap-2">
            <h3 className="font-medium text-[2.25rem] sm:text-[2.625rem] leading-[1.1]">
              ${price}
            </h3>
            <small className="text-lg text-gray-700">/month</small>
          </div>
        </div>
        {icon && (
          <div className="size-[3.125rem] sm:size-[5.25rem]">
            <Icon size={"100%"} src={icon} />
          </div>
        )}
      </MountAnim>
      <MountAnim className="text-lg sm:text-2xl text-gray-700 max-w-[37ch]">
        {description}
      </MountAnim>
      <MountAnim className={"w-full"}>
        <Button className="max-sm:w-full my-2 justify-center max-w-none sm:min-w-[23.125rem] mr-auto">
          let's get started
        </Button>
      </MountAnim>
      <MountAnim className={"w-full"}>
        <ul className="grid sm:grid-cols-2 gap-x-12 sm:gap-x-16 gap-y-2 sm:gap-y-4 w-fit max-w-full sm:px-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-lg sm:text-[1.35rem] 2xl:text-[1.25rem] text-gray-700 group cursor-default"
            >
              <svg
                className="size-[.925em] px-px transition-all"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.2976 2.63248L11.6176 5.27248C11.7976 5.63998 12.2776 5.99248 12.6826 6.05998L15.0751 6.45748C16.6051 6.71248 16.9651 7.82248 15.8626 8.91748L14.0026 10.7775C13.6876 11.0925 13.5151 11.7 13.6126 12.135L14.1451 14.4375C14.5651 16.26 13.5976 16.965 11.9851 16.0125L9.74255 14.685C9.33755 14.445 8.67005 14.445 8.25755 14.685L6.01505 16.0125C4.41005 16.965 3.43505 16.2525 3.85505 14.4375L4.38755 12.135C4.48505 11.7 4.31255 11.0925 3.99755 10.7775L2.13755 8.91748C1.04255 7.82248 1.39505 6.71248 2.92505 6.45748L5.31755 6.05998C5.71505 5.99248 6.19505 5.63998 6.37505 5.27248L7.69505 2.63248C8.41505 1.19998 9.58505 1.19998 10.2976 2.63248Z"
                  stroke="#1D1D1D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {feature}
            </li>
          ))}
        </ul>
      </MountAnim>
    </div>
  );
};

const Note = () => {
  return (
    <div className="p-con flex flex-col gap-2 justify-center items-center text-center rounded-xl sm:rounded-2xl border-2 border-gray-600 bg-light">
      <MountAnim>
        <Badge nodot variant="yellow">
          Pricing
        </Badge>
      </MountAnim>
      <MountAnim>
        <h1 className="heading2 max-w-[20ch] capitalize">Not sure yet?</h1>
      </MountAnim>
      <MountAnim>
        <p className="text-lg sm:text-[1.375rem] text-gray-700 max-w-[27ch]">
          Let's discuss your goals and find the right plan together.
        </p>
      </MountAnim>
      <MountAnim className={"max-sm:w-full mt-4"}>
        <Button btnType="light" className={"max-sm:w-full"}>
          Book Your Free Consultation
        </Button>
      </MountAnim>
    </div>
  );
};

const Pricing = () => {
  const [active, setActive] = useState(0);
  const { isMobile } = useResponsiveStates();

  return (
    <section className="pt-12 my-container sm:pt-24 pb-6 sm:pb-12 px-con flex flex-col gap-8 sm:gap-16">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Pricing
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">
            Discover Our Pricing <br className="max-sm:hidden" />
            and Get Started Today
          </h1>
        </MountAnim>
      </div>
      <div className="overflow-hidden flex flex-col gap-5">
        <div className="flex-1 flex sm:hidden gap-2.5 text-center">
          {plans.map((plan, index) => (
            <button
              key={index}
              onClick={() => {
                setActive(index);
              }}
              className={`flex-1 px-2.5 py-4 rounded-lg text-sm leading-tight border border-dark transition-colors duration-300 ${active === index
                  ? "bg-dark text-light"
                  : "hover:bg-dark hover:text-light"
                }`}
            >
              {plan.title}
            </button>
          ))}
        </div>
        <div className="flex max-sm:flex-nowrap max-sm:w-fit sm:grid sm:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              animate={{
                x: `calc(-${isMobile ? active * 100 : 0}% - ${isMobile ? active * 2 : 0
                  }rem)`,
                opacity: active === index ? 1 : 0,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                opacity: {
                  duration: 0.45,
                },
              }}
              className={`${index === 2 ? "col-span-1 sm:col-span-2" : "col-span-1"
                } sm:!opacity-100 flex sm:!translate-x-0`}
            >
              <div className="max-sm:min-w-[calc(100vw-2.5rem)] flex-1 rounded-xl sm:rounded-2xl border-2 border-gray-600 flex gap-8">
                <PlanCard {...plan} />
                {index === 2 && (
                  <div className="max-sm:hidden p-[3.75rem] flex justify-end">
                    <Note />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="sm:hidden">
        <Note />
      </div>
    </section>
  );
};

export default Pricing;
