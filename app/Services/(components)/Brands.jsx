"use client";

import Image from "next/image";
import Button from "@/app/(components)/ui/Button";
import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import BrandsMarquee from "./BrandsMarquee";

const Brands = () => {
  return (
    <section className={`w-full flex flex-col gap-1`}>
      <div className="py-12 sm:py-24 px-con">
        <div className="relative flex justify-center border-2 border-gray-600 rounded-2xl overflow-hidden ">
          <div className="relative z-10 text-center py-10 sm:py-16 flex flex-col items-start sm:items-center gap-10 sm:gap-16 w-full">
            <div className="flex flex-col gap-2 px-7 sm:px-12">
              <MountAnim>
                <Badge nodot variant="yellow">
                  Brands
                </Badge>
              </MountAnim>
              <MountAnim>
                <h1 className="heading2">Brands We Have Worked With</h1>
              </MountAnim>
            </div>
            <MountAnim className={"w-full"}>
              <BrandsMarquee direction={"right"} />
            </MountAnim>
          </div>
          <Image
            src={"./heroBg.svg"}
            alt="bg"
            width={200}
            height={200}
            className="object-cover absolute left-0 top-1/2 w-auto h-full sm:w-full sm:h-auto -translate-y-1/2 z-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default Brands;
