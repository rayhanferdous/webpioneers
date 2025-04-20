import { Badge } from "@/app/(components)/ui/Badge";
import Button from "@/app/(components)/ui/Button";
import Icon from "@/app/(components)/ui/Icon";
import MountAnim from "@/app/(components)/ui/MountAnim";
import React from "react";

const DiscoverMore = () => {
  const Data = [
    {
      color: "bg-yellow-light",
      title: "Discovery",
      icon: "https://cdn.lordicon.com/xzndjsfc.json",
      detail:
        "We start by diving deep into your brand to uncover what makes it unique. Through research and analysis, we find the insights that set your brand apart.",
    },
    {
      color: "bg-green-light",
      title: "Meet",
      icon: "https://cdn.lordicon.com/rcuovkuy.json",
      detail:
        "This is where we connect, build trust, and foster open communication. Together, we set the stage to bring your brand's personality to life.",
    },
    {
      color: "bg-brown-light",
      title: "Collaboration",
      icon: "https://cdn.lordicon.com/zjdxuyoy.json",
      detail:
        "Your voice matters every step of the way. We blend your ideas with our expertise to create designs that truly represent your vision.",
    },
    {
      color: "bg-purple-light",
      title: "Design",
      icon: "https://cdn.lordicon.com/ovxlloho.json",
      detail:
        "Our creative process comes to life here. Using your brand's story and our insights, we craft designs that are both stunning and purposeful.",
    },
    {
      color: "bg-red-light",
      title: "Development",
      icon: "https://cdn.lordicon.com/wbthjkyu.json",
      detail:
        "After finalizing the designs, we bring them to life. Our team ensures every detail is functional, interactive, and true to your brand.",
    },
    {
      color: "bg-blue-light",
      title: "Implement",
      icon: "https://cdn.lordicon.com/euflfcqp.json",
      detail:
        "From launching your website to refining your brand, we ensure a smooth, impactful process that leaves a lasting impression.",
    },
  ];
  return (
    <section className="p-con flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-2">
        <MountAnim>
          <Badge nodot variant="yellow">
            Discover More
          </Badge>
        </MountAnim>
        <MountAnim>
          <h1 className="heading2">
            Setting the Bar, <br />
            Then Raising It
          </h1>
        </MountAnim>
        <MountAnim>
          <p className="text-lg leading-tight sm:text-[1.75rem] lg:text-2xl text-gray-700 max-w-[33ch] sm:max-w-[36ch] lg:max-w-[42ch] mb-4">
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
                  className={`${item.color} group-hover:scale-110 group-hover:bg-white transition-all duration-300 ease-linear aspect-square w-[6.375rem] sm:w-36 rounded-full grid place-content-center relative z-10`}
                >
                  <div className="size-[3.375rem] sm:size-[5.625rem] rounded-full">
                    <Icon size={"100%"} src={item.icon} />
                  </div>
                </div>
                <div
                  className={`${item.color} absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-0 transition-all duration-300 ease-linear rounded-full group-hover:w-[150%]`}
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

export default DiscoverMore;
