import React from "react";
import MountAnim from "./ui/MountAnim";
import { Badge } from "./ui/Badge";
import Button from "./ui/Button";
import Image from "next/image";

const PricingBanner = () => {
  return (
    <section className=" pt-12 sm:pt-24 pb-6 sm:pb-12 px-con">
      <div className="relative flex justify-center border-2 border-gray-600 rounded-2xl overflow-hidden">
        <div className="my-container relative z-10 sm:text-center py-10 sm:py-16 px-7 sm:px-12 flex flex-col items-start sm:items-center gap-6 sm:gap-8 w-fit">
          <div className="flex flex-col gap-2">
            <MountAnim>
              <Badge nodot variant="yellow">
                Transparent Pricing
              </Badge>
            </MountAnim>
            <MountAnim>
              <h1 className="heading2">Starting at $2,500/mo</h1>
            </MountAnim>
          </div>
          <MountAnim>
            <ul className="flex max-sm:flex-col sm:items-center gap-3 sm:gap-7 text-lg sm:text-2xl text-gray-700">
              <li>💲 Ask about our packages</li>
              <li>⚡ Fast Delivery</li>
              <li>🌟 Top-tier team</li>
              <li>⏸️ Cancel anytime</li>
            </ul>
          </MountAnim>
          <MountAnim className={"w-full"}>
            <Button
              className={"justify-center max-w-none w-full sm:w-[90%] mx-auto"}
            >
              Let's Get Started
            </Button>
          </MountAnim>
          <MountAnim>
            <p className="text-lg sm:text-xl text-gray-700 sm:max-w-[79ch]">
              When subscribed to web pioneers you are agreeing to our{" "}
              <span className="text-red">Terms of Service</span>. You'll receive
              an invite to your dedicated Dashboard within 24 hours to manage
              your project requests.
            </p>
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
    </section>
  );
};

export default PricingBanner;
