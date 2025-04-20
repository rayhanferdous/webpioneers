import Button from "@/app/(components)/ui/Button";
import React from "react";
import HeroMarquee from "./HeroMarquee";

const Hero = () => {
  return (
    <section className="relative max-sm:pt-12 sm:pt-20 flex flex-col overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col sm:items-center gap-10 sm:gap-20 sm:justify-center">
        <div className="flex flex-col sm:items-center sm:text-center sm:justify-center px-con">
          <h1 className="leading-tight text-4xl sm:text-[3.5rem] mb-4">
            Web Design & Development
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-[58ch] mb-8">
            We create custom websites that blend aesthetics with functionality
            for an exceptional user experience. Our designs enhance your online
            presence, boost engagement, and drive business growth.
          </p>
          <Button btnType="light">Book Your Free Consultation</Button>
        </div>
        <div>
          <HeroMarquee direction={"right"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
