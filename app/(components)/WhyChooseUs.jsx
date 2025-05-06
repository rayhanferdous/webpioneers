import React from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Image from "next/image";
import Icon from "./ui/Icon";
import StaggerMount from "./ui/StaggerMount";

const WhyChooseUs = () => {
  return (
    <section className="container-2560 pt-12 sm:pt-24 pb-6 sm:pb-12 px-con flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Why Choose Us
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">The Difference Is Clear</h1>
        </MountAnim>
        <MountAnim>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-[34ch] sm:max-w-[44ch] mb-4">
            We know the cost of compromise—our focus is delivering the quality
            and value you deserve.
          </p>
        </MountAnim>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-[40.54%_23.39%_32.26%] gap-8">
        {/* mobile */}
        <StaggerMount className="group rounded-2xl border-2 border-gray-600 col-span-1 row-span-2 flex flex-col gap-2 justify-between">
          <div className="p-6 sm:p-8 flex flex-col gap-2">
            <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 leading-[1.37]">
              <span className="text-dark">Project management</span> made simple
              —create tasks, set priorities, and share feedback effortlessly.
              Keep your team aligned, track progress in real-time, and ensure
              every project stays on schedule and delivers results.
            </p>
          </div>
          <Image
            src={"/mobile.svg"}
            alt="mobile"
            width={500}
            height={500}
            priority
            className="w-full h-auto px-11 sm:px-[8.5rem] mt-auto"
          />
        </StaggerMount>

        {/* mission */}
        <StaggerMount className="overflow-hidden group rounded-2xl border-2 border-gray-600 col-span-1 sm:col-span-2 row-span-1 p-6 sm:p-8 flex flex-col gap-2">
          <div className="size-[5rem] sm:size-[6.25rem] rounded-full grid place-content-center bg-yellow-light mb-2 sm:mb-8">
            <div className="size-[3.125rem] sm:size-14">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/weqkkuwt.json"}
              />
            </div>
          </div>
          <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 sm:leading-[1.37]">
            <span className="text-dark">Our mission</span> is to deliver
            unmatched value through transparent time tracking and flexible
            subscriptions. See real-time logged hours, access detailed reports,
            and manage payments effortlessly — all while ensuring trust,
            accountability, and results you deserve.
          </p>
        </StaggerMount>

        {/* tab */}
        <StaggerMount className="group rounded-2xl border-2 border-gray-600 col-span-1 sm:col-span-2 row-span-2 hidden sm:flex items-center justify-end">
          <img
            src={"./tablet.svg"}
            alt="tablet"
            width={1920}
            height={1080}
            className="w-full h-auto pl-16 my-[7.5rem]"
          />
        </StaggerMount>

        {/* growth */}
        <StaggerMount className="overflow-hidden group rounded-2xl border-2 border-gray-600 col-span-1 row-span-1 p-6 sm:p-8 flex flex-col gap-2">
          <div className="size-[5rem] sm:size-[6.25rem] rounded-full grid place-content-center bg-yellow-light mb-2 sm:mb-8">
            <div className="size-[3.125rem] sm:size-14">
              <Icon
                size={"100%"}
                src={"https://cdn.lordicon.com/pfefuxbw.json"}
              />
            </div>
          </div>
          <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 sm:leading-[1.37]">
            <span className="text-dark">We help</span> agencies and founders
            take control with a customizable white-label platform. Say goodbye
            to high fees and limited control — our solution lets you manage
            clients under your brand while keeping more profit. From setup to
            customization, we handle everything so you can focus on growing your
            business.
          </p>
        </StaggerMount>
      </div>
    </section>
  );
};

export default WhyChooseUs;
