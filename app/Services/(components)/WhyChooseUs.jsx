import { Badge } from "@/app/(components)/ui/Badge";
import Button from "@/app/(components)/ui/Button";
import Icon from "@/app/(components)/ui/Icon";
import MountAnim from "@/app/(components)/ui/MountAnim";
import React from "react";

const WhyChooseUs = () => {
  const Data = [
    {
      color: "bg-yellow-light",
      title: "Proven Track Record",
      icon: "https://cdn.lordicon.com/belrmyeh.json",
      detail:
        "We have built a reputation as a trusted and reliable partner in achieving business success.",
    },
    {
      color: "bg-green-light",
      title: "Tailored Solutions",
      icon: "https://cdn.lordicon.com/yrirlumv.json",
      detail:
        "We offer personalized solutions tailored to your specific goals, audience, and industry.",
    },
    {
      color: "bg-brown-light",
      title: "Client-Centric Focus",
      icon: "https://cdn.lordicon.com/qtzcwebn.json",
      detail:
        "Your success is our priority. We prioritize understanding your business goals.",
    },
    {
      color: "bg-purple-light",
      title: "Transparent Communication",
      icon: "https://cdn.lordicon.com/jdgfsfzr.json",
      detail:
        "We believe in open and honest communication every step of the way.",
    },
    {
      color: "bg-red-light",
      title: "Dedicated Support",
      icon: "https://cdn.lordicon.com/gxqwstdq.json",
      detail:
        "Your success is our priority, and we're here to support you every step of the way.",
    },
    {
      color: "bg-blue-light",
      title: "Expertise Across Industries",
      icon: "https://cdn.lordicon.com/azasiwss.json",
      detail:
        "Our team has extensive experience working across various industries.",
    },
  ];
  return (
    <section className="p-con container-2560 flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Why Choose Us
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">
            Why we are <br />
            your best choice
          </h1>
        </MountAnim>
        <MountAnim>
          <p className="text-lg leading-tight sm:text-[1.75rem] lg:text-2xl text-gray-700 max-w-[34ch] sm:max-w-[37ch] lg:max-w-[44ch] mb-4">
            Every project we take on is crafted with care, a sharp eye for
            detail, and a passion for delivering excellence.
          </p>
        </MountAnim>
        <MountAnim>
          <Button btnType="light">Book Your Free Consultation</Button>
        </MountAnim>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {Data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="rounded-2xl aspect-[1.55] border-2 border-gray-600 mb-2 grid place-content-center relative group overflow-hidden">
                <div
                  className={`${item.color} group-hover:scale-110 group-hover:bg-white transition-all duration-300 ease-linear size-[6.375rem] sm:size-36 rounded-full grid place-content-center relative z-10`}
                >
                  <div className="size-[3.375rem] sm:size-[5.625rem] rounded-full">
                    <Icon size={"100%"} src={item.icon} />
                  </div>
                </div>
                <div
                  className={`${item.color} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pb-[0%] w-0 transition-all duration-300 ease-linear rounded-full group-hover:w-[150%] group-hover:pb-[100%] aspect-square`}
                ></div>
              </div>
              <h3 className="w-full font-medium text-[1.325rem] sm:text-[2rem] lg:text-[1.75rem]">
                {item.title}
              </h3>
              <p className="w-full font-medium text-lg sm:text-[1.6rem] lg:text-xl text-gray-700">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseUs;
