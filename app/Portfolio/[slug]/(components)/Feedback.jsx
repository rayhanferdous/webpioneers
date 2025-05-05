import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Image from "next/image";
import React from "react";

const Feedback = ({ data }) => {
  return (
    <section className="container-2560 py-6 sm:py-10 px-con flex">
      <div className="rounded-2xl bg-light p-5 sm:p-14 flex flex-col gap-5 sm:gap-6 w-full relative">
        <MountAnim className="flex max-sm:flex-col items-start sm:items-center gap-5">
          <Badge nodot variant="yellow">
            What They Said
          </Badge>
          <h1 className="text-[1.375rem] sm:text-[2rem] font-medium">
            {data.title || "Truly stands out!"}
          </h1>
        </MountAnim>
        <svg
          className="absolute right-5 sm:right-14 top-5 sm:top-14 size-12 sm:size-36"
          width="150"
          height="150"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M73.2559 15.6973C41.4664 15.6973 15.6978 41.4659 15.6978 73.2554C15.6978 105.045 41.4664 130.814 73.2559 130.814H130.814V73.2554C130.814 41.4659 105.045 15.6973 73.2559 15.6973Z"
            stroke="#1D1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M43.6047 57.5568C43.6047 54.667 45.9475 52.3242 48.8373 52.3242H62.7908C65.6805 52.3242 68.0233 54.667 68.0233 57.5568V71.5103C68.0233 74.4 65.6805 76.7428 62.7908 76.7428H48.8373C45.9475 76.7428 43.6047 74.4 43.6047 71.5103V57.5568Z"
            stroke="#1D1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M68.0234 64.5335V75.1758C68.0234 87.5979 61.3672 98.4865 50.5815 104.65M80.2327 57.5568C80.2327 54.667 82.5755 52.3242 85.4653 52.3242H99.4188C102.309 52.3242 104.651 54.667 104.651 57.5568V71.5103C104.651 74.4 102.309 76.7428 99.4188 76.7428H85.4653C82.5755 76.7428 80.2327 74.4 80.2327 71.5103V57.5568Z"
            stroke="#1D1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M104.651 64.5352V75.1775C104.651 87.5996 97.9952 98.4882 87.2095 104.651"
            stroke="#1D1D1D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <p
          className="sm:mt-4 text-lg sm:text-[2rem] sm:leading-tight text-gray-700 font-medium sm:max-w-[min(58ch,80%)]"
          dangerouslySetInnerHTML={{ __html: data.text }}
        />
        <div className="sm:mt-1 flex gap-3 sm:gap-5 items-center">
          <div className="size-12 sm:size-16 rounded-full bg-[#DADADA] overflow-hidden">
            <Image
              width={150}
              height={150}
              src={data.image}
              alt="Portfolio Image"
              className="size-full"
            />
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 text-base sm:text-[1.375rem] leading-none">
            <h4 className="font-medium">{data.name}</h4>
            <p className="text-gray-700">{data.role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
