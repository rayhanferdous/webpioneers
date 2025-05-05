"use client";

import React, { useEffect, useRef, useState } from "react";
import { Badge } from "@/app/(components)/ui/Badge";
import { useResponsiveStates } from "@/app/(utils)/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StaggerMount from "@/app/(components)/ui/StaggerMount";
import { motion } from "framer-motion";
import { getGlobalLenis } from "@/app/(components)/LenisSmooth";
gsap.registerPlugin(ScrollTrigger);

const FAQList = [
  {
    title: "General",
    list: [
      {
        title: "What does your agency specialize in?",
        detail:
          "We specialize in web development, modern applications, and UI/UX design, offering tailored solutions to meet business needs.",
      },
      {
        title: "Who can benefit from your services?",
        detail:
          "We work with SaaS businesses, Shopify brands, and eCommerce stores, focusing on CRO strategies to boost online sales.",
      },
      {
        title: "How does your project process work",
        detail:
          "We follow a structured approach, including consultation, planning, design, development, and final delivery to ensure quality.",
      },
      {
        title: "Do you offer custom development?",
        detail:
          "Yes, we provide custom solutions tailored to your specific business requirements, ensuring optimal performance and scalability.",
      },
      {
        title: "How many times can I ask for revisions?",
        detail:
          "If you;re on a subscription plan, you can request unlimited revisions, but only one at a time to maintain workflow efficiency.",
      },
      {
        title: "How long does a project usually take?",
        detail:
          "Project timelines vary depending on complexity, but we provide clear estimates during the initial consultation phase.",
      },
    ],
  },
  {
    title: "Service related",
    list: [
      {
        title: "Can I combine multiple services?",
        detail:
          "Absolutely! You can combine design, development, and optimization services to create a complete, seamless digital solution.",
      },
      {
        title: "Do you offer ongoing maintenance?",
        detail:
          "Yes, we provide ongoing support to ensure your website or app remains updated, secure, and optimized for performance.",
      },
      {
        title: "What platforms do you work with?",
        detail:
          "We work with Shopify, WordPress, Webflow, and custom-coded solutions to deliver flexible and scalable digital products.",
      },
      {
        title: "Can you help improve an existing product?",
        detail:
          "Yes, we specialize in improving UI/UX, optimizing conversions, and adding new features to enhance overall performance.",
      },
      {
        title: "How do you ensure project quality?",
        detail:
          "We follow a structured process with research, strategy, design, development, and testing to deliver high-quality results.",
      },
      {
        title: "How do I know which service I need?",
        detail:
          "We assess your business goals and recommend the best solutions, whether it’s design, development, or conversion optimization.",
      },
    ],
  },
  {
    title: "Payment",
    list: [
      {
        title: "Do you offer payment plans or subscriptions?",
        detail:
          "Yes, we offer subscription-based services and flexible payment plans to accommodate different project needs and budgets.",
      },
      {
        title: "Is there a refund policy if I'm not satisfied?",
        detail:
          "We focus on quality, transparency, and keeping you updated throughout the process. We also offer unlimited revisions to ensure your satisfaction.",
      },
      {
        title: "Do I need to pay upfront for services?",
        detail:
          "Some services require an upfront deposit, while others follow milestone-based or subscription payments for convenience.",
      },
      {
        title: "Are there any hidden fees in your pricing?",
        detail:
          "No, our pricing is fully transparent, and all costs, terms, and conditions are clearly communicated before starting the project.",
      },
      {
        title: "Can I change my subscription?",
        detail:
          "Yes, you can upgrade, downgrade, or switch plans anytime, and the changes will reflect in your next billing cycle without any hassle.",
      },
      {
        title: "How long does a project usually take?",
        detail:
          "Project timelines vary depending on complexity, but we provide clear estimates during the initial consultation phase.",
      },
    ],
  },
  {
    title: "Support",
    list: [
      {
        title: "What if I need to consult before I proceed?",
        detail:
          "We offer a free booking call where we discuss everything in detail and suggest the best solution based on your needs.",
      },
      {
        title: "What if I face issues after delivery?",
        detail:
          "We ensure quality, maintain transparency, and offer ongoing support to quickly resolve any concerns or problems.",
      },
      {
        title: "What if I need updates on my project?",
        detail:
          "We keep you informed with regular updates, ensuring transparency and allowing you to track progress easily at every stage.",
      },
      {
        title: "What if I need urgent support?",
        detail:
          "We provide priority support to handle urgent issues, ensuring a fast and efficient resolution process without unnecessary delays or complications.",
      },
      {
        title: "What if I need long-term support?",
        detail:
          "We provide ongoing assistance, updates, and guidance to ensure everything runs smoothly over time, helping you adapt to any future needs or improvements.",
      },
      {
        title: "What if I have another question?",
        detail:
          "You can always reach out to us anytime, and we will gladly assist you with any inquiries or concerns you may have.",
      },
    ],
  },
];

const Hero = () => {
  const [activeFAQ, setActiveFAQ] = useState({});
  const { isTab, isMobile } = useResponsiveStates();
  const [active, setActive] = useState("General");
  const sectionRefs = useRef([]);
  const isScrolling = useRef(false);
  const menuClickTimeout = useRef(null);
  const lastScrollY = useRef(0); // Track last scroll position

  const toggleFAQ = (category, index) => {
    setActiveFAQ((prev) => ({
      ...prev,
      [category]: prev[category] === index ? null : index, // Toggle only within the active category
    }));
  };

  const handleMouseMove = (e) => {
    if (isTab || isMobile) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector(".sticky-btn");
    if (!moveBtn) return;

    const boxRect = card.getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;
    const moveX = (x / boxRect.width - 0.5) * 20;
    const moveY = (y / boxRect.height - 0.5) * 20;
    gsap.to(moveBtn, {
      x: `${-(moveX * 6)}%`,
      y: `${-(moveY * 2)}%`,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e) => {
    if (isTab || isMobile) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector(".sticky-btn");
    if (!moveBtn) return;

    gsap.to(moveBtn, {
      x: "0%",
      y: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter = (e) => {
    if (isTab || isMobile) return;
    const card = e.currentTarget;
    const moveBtn = card.querySelector(".sticky-btn");
    if (!moveBtn) return;

    gsap.to(moveBtn, {
      x: "0%",
      y: "0%",
      duration: 0.3,
    });
  };

  const transition = { type: "spring", stiffness: 300, damping: 30 };

  // Scroll to section function - extracts the logic to make it reusable

  const scrollToSection = (sectionTitle) => {
    // Find the index of the section to scroll to
    const index = FAQList.findIndex((item) => item.title === sectionTitle);
    if (index === -1 || !sectionRefs.current[index]) return;

    // Prevent scroll detection from changing active item during programmatic scroll
    isScrolling.current = true;

    // Use a more direct and reliable scrolling method
    const yOffset = -80;
    const element = sectionRefs.current[index];
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    // Get the global Lenis instance
    const lenis = getGlobalLenis();
    if (!lenis) return;

    // // Use Lenis to scroll instantly
    lenis.scrollTo(y, {
      immediate: true, // No smooth scrolling interference
    });
  };

  // Handle menu item click
  const handleMenuClick = (sectionTitle) => {
    if (menuClickTimeout.current) {
      clearTimeout(menuClickTimeout.current); // Clear previous timeouts
    }

    setActive(sectionTitle); // Set active immediately
    isScrolling.current = true; // Prevent multiple rapid clicks

    scrollToSection(sectionTitle);

    // Reset isScrolling.current after scroll finishes
    menuClickTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 100); // Adjust timing as needed
  };

  // Scroll detection logic
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      // Skip if programmatic scrolling is in progress
      if (isScrolling.current) return;

      const sections = sectionRefs.current;
      if (!sections.length) return;

      const scrollY = window.scrollY; // Get current scroll position
      if (Math.abs(scrollY - lastScrollY.current) < 50) return; // Update only after 50px scroll
      lastScrollY.current = scrollY; // Update last scroll position

      console.log("object");
      // Find which section is most visible in the viewport
      let mostVisibleSection = null;
      let maxVisibility = 0;

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const offset = 150; // Offset from top of viewport

        // If the section is in view (with offset)
        if (rect.top < offset && rect.bottom > 0) {
          // Calculate how much of the section is visible
          const visibleHeight =
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);

          // Prioritize sections near the top of the viewport
          const topProximityFactor =
            1 - Math.max(0, Math.min(1, rect.top / viewportHeight));
          const adjustedVisibility = visibleHeight * topProximityFactor;

          if (adjustedVisibility > maxVisibility) {
            maxVisibility = adjustedVisibility;
            mostVisibleSection = index;
          }
        }
      });

      // Update active state if a section is visible
      if (mostVisibleSection !== null && FAQList[mostVisibleSection]) {
        const newActive = FAQList[mostVisibleSection].title;
        if (newActive !== active) {
          setActive(newActive);
        }
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Initial detection on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, active]);

  return (
    <section className="relative container-2560 max-sm:pt-12 sm:pt-20 flex flex-col">
      <div className="headerSpace"></div>
      <div className="flex flex-col sm:items-start sm:justify-start px-con">
        <div className="flex flex-col items-start sm:text-center sm:justify-start gap-4">
          <Badge nodot variant="yellow">
            FAQ's
          </Badge>
          <h1 className="text-4xl sm:text-[3.5rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
            Frequently Asked Questions
          </h1>
        </div>
        <div className="mt-6 sm:mt-14 border-b border-gray w-full"></div>
        <div className="pb-7 sm:pb-14 relative w-full flex items-start gap-8">
          <div className="sticky top-14 mt-4 sm:mt-14 hidden sm:flex gap-3 flex-col flex-shrink-0 items-start bg-light px-5 py-6 rounded-xl">
            {FAQList.map((FAQItem) => {
              const titleActive = active === FAQItem.title;
              return (
                <motion.button
                  key={FAQItem.title}
                  onClick={() => handleMenuClick(FAQItem.title)}
                  className={`${titleActive ? "text-light" : "text-dark"
                    } text-[1.375rem] relative flex items-center justify-center px-3 py-2 leading-none font-medium rounded-full cursor-pointer !outline-none`}
                  transition={transition}
                >
                  {titleActive && (
                    <motion.span
                      className={`bg-dark absolute inset-0 rounded-full z-20`}
                      transition={transition}
                    >
                      <div></div>
                    </motion.span>
                  )}
                  <span className="relative z-20">{FAQItem.title}</span>
                </motion.button>
              );
            })}
          </div>
          <div className="flex-grow flex flex-col">
            {FAQList.map((FAQItem, index) => {
              return (
                <div
                  key={FAQItem.title}
                  ref={(el) => (sectionRefs.current[index] = el)}
                  className={`flex flex-col items-start gap-6 sm:gap-8 pt-6 sm:pt-14 sm:pb-6`}
                >
                  <h4
                    onClick={() => {
                      if (isMobile) {
                        if (active === FAQItem.title) {
                          setActive("");
                        } else {
                          setActive(FAQItem.title);
                        }
                      }
                    }}
                    className="text-2xl sm:text-[2rem] text-gray-700 font-medium max-sm:w-full flex items-center max-sm:justify-between sm:justify-start sm:pt-4"
                  >
                    <span>{FAQItem.title}</span>
                    <span className="sm:hidden">
                      <svg
                        className={`${active === FAQItem.title ? "rotate-0" : "rotate-180"
                          } w-4 h-auto transition-transform duration-300`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.06912 0C8.33434 2.98024e-07 8.58869 0.105358 8.77623 0.292895L15.8473 7.36397C16.2378 7.75449 16.2378 8.38766 15.8473 8.77818C15.4567 9.1687 14.8236 9.1687 14.433 8.77818L8.06912 2.41422L1.70515 8.77818C1.31463 9.1687 0.681464 9.1687 0.29094 8.77818C-0.0995842 8.38765 -0.0995842 7.75449 0.29094 7.36396L7.36201 0.292893C7.54955 0.105357 7.8039 -2.38418e-07 8.06912 0Z"
                          fill="#1D1D1D"
                        />
                      </svg>
                    </span>
                  </h4>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isMobile && active != FAQItem.title ? 0 : "auto",
                    }}
                    transition={{ duration: 0.6 }}
                    className={`${active != FAQItem.title
                        ? "border-gray"
                        : "border-transparent"
                      } max-sm:border-b overflow-hidden grid grid-cols-1 sm:grid-cols-2 sm:gap-8`}
                  >
                    {FAQItem.list.map((item, index) => {
                      const groupActive = activeFAQ[FAQItem.title] === index;

                      return (
                        <StaggerMount key={index}>
                          <div
                            onClick={() => toggleFAQ(FAQItem.title, index)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            onMouseEnter={handleMouseEnter}
                            className={`group relative overflow-hidden focus:outline-none cursor-pointer h-fit transition-colors border-b ${groupActive ? "border-transparent" : "border-gray"
                              } ${activeFAQ[FAQItem.title] === index + 1
                                ? "max-sm:border-transparent"
                                : "border-gray"
                              }`}
                          >
                            <div className="relative z-10 p-5 sm:p-6 sm:mr-[3rem]">
                              <div className="flex items-center gap-6 max-sm:mr-[4rem]  text-[1.25rem] sm:text-[1.75rem]">
                                {/* <h3 className=" text-gray-800 font-medium leading-snug ">
                                  0{index + 1}.
                                </h3> */}
                                <h4 className=" text-dark sm:max-w-[73ch] font-medium leading-snug">
                                  {item.title}
                                </h4>
                              </div>
                              <motion.div
                                initial={false}
                                animate={{
                                  height: groupActive ? "auto" : 0,
                                }}
                                transition={{ duration: 0.6 }}
                                className="overflow-hidden flex gap-6 max-sm:mr-[1rem]"
                              >
                                {/* <h3 className="text-[1.2rem] sm:text-[1.5rem] text-gray-800 sm:max-w-[73ch] font-medium leading-snug opacity-0">
                                  0{index + 1}.
                                </h3> */}
                                <p className="sm:max-w-[73ch] pt-3.5 sm:pt-5 text-lg sm:text-[1.5rem] lg:text-[1.375rem] text-gray-700 leading-snug font-medium">
                                  {item.detail}
                                </p>
                              </motion.div>
                            </div>

                            <div
                              className={`sticky-btn absolute right-2 sm:left-[94%] top-5 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-20`}
                            >
                              <div
                                className={`${groupActive
                                    ? " border-prim bg-prim text-white"
                                    : " border-gray bg-white text-dark"
                                  } transition-all duration-500 border size-[1.75rem] sm:size-[2.1rem] rounded-lg sm:rounded-xl sm:group-hover:scale-100 scale-100 origin-center`}
                              >
                                <div className="w-[0.7rem] sm:w-[0.8rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-0"></div>
                                <div
                                  className={`${groupActive ? "rotate-0" : "rotate-90"
                                    } transition-transform duration-500 w-[0.7rem] sm:w-[0.8rem] h-px bg-current absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
                                ></div>
                              </div>
                            </div>

                            <motion.div
                              initial={false}
                              animate={{
                                height: groupActive ? "100%" : 0,
                              }}
                              transition={{ duration: 0.6 }}
                              className="absolute left-0 right-0 bottom-0 origin-top pointer-events-none overflow-hidden"
                            >
                              <div className="bg-light w-full h-full rounded-2xl border-gray-600 border-2"></div>
                            </motion.div>
                          </div>
                        </StaggerMount>
                      );
                    })}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
