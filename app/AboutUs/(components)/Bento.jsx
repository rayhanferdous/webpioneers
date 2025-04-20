import ImageParallax from "@/app/(components)/ui/ImageParallex";
import React from "react";

export const Bento = () => {
  return (
    <section className="pt-12 sm:pt-24 px-con flex gap-5 sm:gap-14">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-[22.5rem_13.6rem_30.5rem] gap-8">
        <ImageParallax
          src="/Bento1.png"
          alt="Hero img"
          width={800}
          height={800}
          className="sm:col-start-1 sm:col-end-2 sm:row-start-1 sm:row-end-2"
        />
        <ImageParallax
          src="/Bento2.png"
          alt="Hero img"
          width={800}
          height={800}
          className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3"
        />
        <ImageParallax
          src="/Bento3.png"
          alt="Hero img"
          width={800}
          height={800}
          className="sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-4"
        />
        <ImageParallax
          src="/Bento4.png"
          alt="Hero img"
          width={800}
          height={800}
          className="sm:col-start-2 sm:col-end-3 sm:row-start-3 sm:row-end-4"
        />
        <ImageParallax
          src="/Bento5.png"
          alt="Hero img"
          width={800}
          height={800}
          className="sm:col-start-3 sm:col-end-4 sm:row-start-3 sm:row-end-4"
        />
      </div>
    </section>
  );
};
