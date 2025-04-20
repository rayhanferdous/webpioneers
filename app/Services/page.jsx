import dynamic from "next/dynamic";

import React from "react";
import Hero from "./(components)/Hero";
import Benefits from "./(components)/Benefits";
import Stack from "./(components)/Stack";
import Boxes from "./(components)/Boxes";
import Pricing from "../(components)/Pricing";
import FAQ from "../(components)/FAQ";
import WhyChooseUs from "./(components)/WhyChooseUs";
import Brands from "./(components)/Brands";
import Testimonials from "./(components)/Testimonials";
import Portfolio from "./(components)/Portfolio";
import HowWeWork from "./(components)/HowWeWork";

// const Pricing = dynamic(() => import("../(components)/Pricing"));
// const FAQ = dynamic(() => import("../(components)/FAQ"));
// const WhyChooseUs = dynamic(() => import("./(components)/WhyChooseUs"));
// const Brands = dynamic(() => import("./(components)/Brands"));
// const Testimonials = dynamic(() => import("./(components)/Testimonials"));
// const Portfolio = dynamic(() => import("./(components)/Portfolio"));
// const HowWeWork = dynamic(() => import("./(components)/HowWeWork"));

const Services = () => {
  const designStack = [
    {
      color: "bg-purple-light",
      icon: "https://cdn.lordicon.com/yqbaahfi.json",
      title: "Strategize & Plan",
      detail:
        "We kick things off with a deep dive into your business goals and audience. By blending competitor insights and market research, we craft a roadmap for success.",
    },
    {
      color: "bg-yellow-light",
      icon: "https://cdn.lordicon.com/ewtvnblg.json",
      title: "Seamless UI/UX",
      detail:
        "Design isn't just about looks; it's about how it feels. From wireframes to prototypes, we design interfaces that are intuitive, stunning, and user-focused.",
    },
    {
      color: "bg-blue-light",
      icon: "https://cdn.lordicon.com/bzxxzycl.json",
      title: "Built for All Screens",
      detail:
        "From desktops to smartphones, we ensure your website looks flawless everywhere. With mobile-first principles, we prioritize users on the go.",
    },
    {
      color: "bg-red-light",
      icon: "https://cdn.lordicon.com/zywwafpn.json",
      title: "CRO-Driven Designs",
      detail:
        "Every design decision revolves around conversions. Whether it's revamping your brand or tweaking your store, we design with results in mind.",
    },
    {
      color: "bg-green-light",
      icon: "https://cdn.lordicon.com/enwhaken.json",
      title: "Audit & Improve",
      detail:
        "Got a website that's underperforming? We'll give it a makeover, improving designs to better resonate with your audience and boost outcomes.",
    },
  ];

  const designLabels = [
    { title: "CRO Mastery" },
    { title: "UI UX" },
    { title: "Pixel Perfect" },
    { title: "Bold Brands" },
    { title: "Fresh Looks" },
    { title: "Design Audits" },
    { title: "Purposeful Creations" },
    { title: "Visual Flow" },
    { title: "UX Research" },
    { title: "Intuitive Layouts" },
  ];

  const designBoxes = [
    { icon: "/icons/ps.svg", title: "Photoshop", custom: "max-sm:border-b" },
    {
      icon: "/icons/figma.svg",
      title: "Figma",
      custom: "max-sm:border-b border-l",
    },
    { icon: "/icons/sketch.svg", title: "Sketch", custom: "sm:border-l" },
    { icon: "/icons/ai.svg", title: "Illustrator", custom: "border-l" },
    {
      icon: "/icons/invision.svg",
      title: "InVision",
      custom: "max-sm:border-b",
    },
    {
      icon: "/icons/miro.svg",
      title: "Miro",
      custom: "max-sm:border-b border-l",
    },
    { icon: "/icons/xd.svg", title: "XD", custom: "sm:border-l" },
    { icon: "/icons/framer.svg", title: "Framer", custom: "border-l" },
  ];

  const developmentStack = [
    {
      color: "bg-purple-light",
      icon: "https://cdn.lordicon.com/wbthjkyu.json",
      title: "Tailored Development",
      detail:
        "Your website, your way. We code custom solutions that meet your needs today while preparing for tomorrow's possibilities.",
    },
    {
      color: "bg-yellow-light",
      icon: "https://cdn.lordicon.com/yvjimpju.json",
      title: "Smart CMS Setup",
      detail:
        "Say goodbye to complicated edits! We integrate user-friendly CMS platforms and train your team to take the reins effortlessly.",
    },
    {
      color: "bg-blue-light",
      icon: "https://cdn.lordicon.com/vmxwytdz.json",
      title: "E-commerce Excellence",
      detail:
        "Selling made simple. From product catalogs to secure payments, we create online stores that delight customers and drive sales.",
    },
    {
      color: "bg-red-light",
      icon: "https://cdn.lordicon.com/orbjywpi.json",
      title: "Optimized for SEO",
      detail:
        "We bake SEO into every line of code, ensuring your website gets noticed. Think faster load times and higher search rankings.",
    },
    {
      color: "bg-green-light",
      icon: "https://cdn.lordicon.com/eckghiga.json",
      title: "Always Here for You",
      detail:
        "Our work doesn't end at launch. With regular updates, bug fixes, and top-notch security, we keep your website running like a dream.",
    },
  ];

  const developmentLabels = [
    { title: "SEO Ready" },
    { title: "Fast & Secure" },
    { title: "Code Wizardry" },
    { title: "Modular Builds" },
    { title: "CMS Experts" },
    { title: "Mobile First" },
    { title: "Shopify & Webflow" },
    { title: "Scalable Sites" },
    { title: "E-commerce Pro" },
    { title: "Custom Solutions" },
  ];

  const developmentBoxes = [
    {
      icon: "/icons/wordpress.svg",
      title: "WordPress",
      custom: "max-sm:border-b",
    },
    {
      icon: "/icons/shopify.svg",
      title: "Shopify",
      custom: "max-sm:border-b border-l",
    },
    { icon: "/icons/react.svg", title: "React", custom: "sm:border-l" },
    { icon: "/icons/webflow.svg", title: "Webflow", custom: "border-l" },
    {
      icon: "/icons/node.svg",
      title: "Node",
      custom: "max-sm:border-b",
    },
    {
      icon: "/icons/next.svg",
      title: "Next",
      custom: "max-sm:border-b border-l",
    },
    { icon: "/icons/firebase.svg", title: "Firebase", custom: "sm:border-l" },
    { icon: "/icons/mongodb.svg", title: "MongoDB", custom: "border-l" },
  ];

  return (
    <>
      <Hero />
      <Benefits />
      <Stack
        key={"Web Design"}
        badge="Making It Pretty"
        title="Web Design"
        subtitle="Looks That Speak"
        detail="We create designs that do more than turn heads—they drive results. From web app dashboards to Shopify store redesigns and mobile apps, we craft experiences that boost sales and conversions."
        labels={[
          "UI Design",
          "User Research",
          "UX Consultancy",
          "Design Audit",
          "Brand Storybook",
          "MVP Design",
        ]}
        data={designStack}
      />
      <Boxes
        labelName="designLabels"
        labels={designLabels}
        boxes={designBoxes}
      />

      <Stack
        key={"Web Development"}
        badge="Making It Work"
        title="Web Development"
        subtitle="Brains Behind the Beauty"
        detail="Your website deserves more than a pretty face. We build secure, fast, and scalable websites using the latest technologies. Designed for performance and longevity, our development keeps pace with your goals."
        labels={[
          "Frontend Development",
          "CRM Integration",
          "Backend Development",
          "E-Commerce Solutions",
          "Webflow Development",
          "WordPress Development",
        ]}
        data={developmentStack}
      />
      <Boxes
        labelName="developmentLabels"
        labels={developmentLabels}
        boxes={developmentBoxes}
      />
      <WhyChooseUs />
      <Brands />
      <Testimonials />
      <Portfolio />
      <HowWeWork />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Services;
