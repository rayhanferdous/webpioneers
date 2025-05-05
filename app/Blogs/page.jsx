'use client';
import { useEffect, useRef } from "react";
import { Badge } from "../(components)/ui/Badge";
import MountAnim from "../(components)/ui/MountAnim";
import Tags from "../(components)/ui/Tags";
import { blogs } from "../(constants)/blogs";
import Card from "./(components)/Card";
import CardSpan from "./(components)/CardSpan";
import gsap from "gsap";

const Blogs = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      }
    });
  }, []);
  return (
    <>
      <section className="my-container relative max-sm:pt-12 sm:pt-20 flex flex-col">
        <div className="headerSpace"></div>
        <div className="flex flex-col sm:items-start sm:justify-start px-con">
          <div className="flex flex-col items-start sm:text-center sm:justify-start gap-4">
            <MountAnim>
              <Badge nodot variant="yellow">
                Blogs
              </Badge>
            </MountAnim>
            <MountAnim>
              <h1 className="text-4xl sm:text-[3.5rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
                Thoughts That Matter
              </h1>
            </MountAnim>
          </div>
          <div className="mt-14 flex items-center gap-4">
            <MountAnim>
              <Tags title="All" active={true} />
            </MountAnim>
          </div>
          <div className="mt-6 sm:mt-14 border-b border-gray w-full"></div>
        </div>
      </section>
      {/* card section */}
      <div className="my-container grid gap-y-7 pt-10 md:pt-[42px] lg:pt-14 md:gap-y-10 xl:gap-y-14 2xl:gap-y-20 gap-x-9 md:gap-x-9 xl:gap-x-8 2xl:gap-x-8 sm:grid-cols-2 md:grid-cols-3 px-con">
        {blogs?.map((blog, index) => (
          blog?.col_span_two ?
            <CardSpan
              key={index}
              ref={el => cardsRef.current[index] = el}
              tag={blog?.tag}
              image={blog?.thumbnail}
              title={blog?.title}
              desc={blog?.description}
              colSpanTwo={blog?.col_span_two}
              minsToRead={blog?.time_to_read}
              link={`/Blogs/${blog?.slug}`}
            /> : <Card
              key={index}
              ref={el => cardsRef.current[index] = el}
              tag={blog?.tag}
              image={blog?.thumbnail}
              title={blog?.title}
              desc={blog?.description}
              minsToRead={blog?.time_to_read}
              link={`/Blogs/${blog?.slug}`}
            />
        ))}
      </div>
    </>
  );
};

export default Blogs;
