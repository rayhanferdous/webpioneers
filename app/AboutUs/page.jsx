import React from "react";
import Hero from "./(components)/Hero";
import Marquee from "../(components)/Marquee";
import OurEdge from "./(components)/OurEdge";
import Brands from "../Services/(components)/Brands";
import Founders from "./(components)/Founders";
import DragLabels from "./(components)/DragLabels";
import Boxes from "./(components)/Boxes";
import DiscoverMore from "./(components)/DiscoverMore";
import { Bento } from "./(components)/Bento";
import FAQ from "../(components)/FAQ";

const AboutUs = () => {
  const labels = [
    { title: "Customer Support" },
    { title: "Passion" },
    { title: "Collaboration" },
    { title: "Trustworthiness" },
    { title: "Reliability" },
    { title: "Customer Focus" },
    { title: "Long-Term Relationship" },
    { title: "Innovation" },
    { title: "Personalization" },
    { title: "Positive Experience" },
  ];

  return (
    <>
      <Hero />
      <Marquee direction={"right"} speed={0.4} />
      <OurEdge />
      <Brands />
      <Founders />
      <Boxes />
      <DragLabels labels={labels} />
      <br />
      <DiscoverMore />
      <Bento />
      <FAQ />
    </>
  );
};

export default AboutUs;
