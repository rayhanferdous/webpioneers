import dynamic from "next/dynamic";

import Hero from "./(components)/Hero";
import Marquee from "./(components)/Marquee";
import Process from "./(components)/Process";
import Video from "./(components)/Video";
import HorizontalSec from "./(components)/HorizontalSec";

const Portfolio = dynamic(() => import("./(components)/Portfolio"));
const PricingBanner = dynamic(() => import("./(components)/PricingBanner"));
const WhatWeOffer = dynamic(() => import("./(components)/WhatWeOffer"));
const Boxes = dynamic(() => import("./(components)/Boxes"));
const Dragables = dynamic(() => import("./(components)/Dragables"));
const WhyChooseUs = dynamic(() => import("./(components)/WhyChooseUs"));
const Factor = dynamic(() => import("./(components)/Factor"));
const Pricing = dynamic(() => import("./(components)/Pricing"));
const FAQ = dynamic(() => import("./(components)/FAQ"));

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee direction={"left"} speed={0.4} />
      <Process />
      <Video />
      <HorizontalSec />
      <Portfolio />
      {/* 
      <PricingBanner />
      <WhatWeOffer />
      <Boxes />
      <Dragables />
      <Marquee direction={"right"} speed={0.4} />
      <WhyChooseUs />
      <Factor />
      <Pricing />
      <FAQ /> */}
    </>
  );
}
