"use client";

import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Tags from "@/app/(components)/ui/Tags";
import { blogs } from "@/app/(constants)/blogs";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import Card from "../(components)/Card";
import Button from "@/app/(components)/ui/Button";
import SimilarPostCard from "./(components)/SimilarPostCard";

const BlogDetailsPage = ({ params }) => {
  const { slug } = React.use(params);


  const currentBlog = blogs.find((item) => item.slug === slug);

  if (!currentBlog) {
    notFound();
  }

  // Find the index of the current portfolio
  const currentIndex = blogs.findIndex((item) => item.slug === slug);

  const renderSectionContent = (section) => {
    const properties = Object.keys(section);

    return properties.map((prop, i) => {
      switch (prop) {
        case 'title':
          // Skip title since it's rendered separately
          return null;
        case 'description':
          return (
            <div key={`desc-${i}`} className="flex flex-col gap-8">
              {section.description.map((paragraph, j) => (
                <p
                  key={j}
                  className="text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-700"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>
          );
        case 'image':
          return (
            <Image
              key={`img-${i}`}
              className="mt-4 min-w-full h-auto"
              src={section.image}
              width={967}
              height={502}
              alt={section.title}
            />
          );
        case 'order_list':
          return (
            <ol key={`ol-${i}`} className="mt-8">
              {section.order_list.map((item, j) => (
                <li
                  key={j}
                  className="list-decimal !list-inside text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ol>
          );
        case 'unorder_list':
          return (
            <ul key={`ul-${i}`} className="mt-8">
              {section.unorder_list.map((item, j) => (
                <li
                  key={j}
                  className="list-disc !list-inside text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          );
        case 'footer_text':
          return (
            <p
              key={`footer-${i}`}
              className="text-lg md:text-xl lg:text-2xl 3xl:text-3xl text-gray-700 mt-8"
              dangerouslySetInnerHTML={{ __html: section.footer_text }}
            />
          );
        default:
          return null;
      }
    }).filter(Boolean); // Filter out null values (like title)
  };


  // Get the next 2 portfolios with wrap-around
  const nextBlog = [];
  for (let i = 1; i <= 2; i++) {
    const nextIndex = (currentIndex + i) % blogs.length;
    nextBlog.push(blogs[nextIndex]);
  }

  const getSimilarBlogs = () => {
    return blogs
      .filter(blog => blog.slug !== slug)
      .slice(0, 4);
  };


  const getExploreMoreBlogs = () => {
    return blogs
      .filter(blog => blog.slug !== slug)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
  };

  const similarBlogs = getSimilarBlogs();
  const exploreMoreBlogs = getExploreMoreBlogs();


  return (
    <>
      <section className="relative container-2560 max-sm:pt-12 sm:pt-20 flex flex-col px-con">
        <div className="headerSpace"></div>
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <MountAnim>
            <h1 className="text-4xl sm:text-[3.3rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
              {currentBlog?.title}
            </h1>
          </MountAnim>

          <MountAnim>
            <Tags title={currentBlog?.tag} active={true} />
          </MountAnim>

          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2.5 font-urbanist font-medium text-[22px] text-gray-700">
              <span>{currentBlog?.published_at}</span>
              <span className="min-h-1.5 min-w-1.5 max-h-1.5 max-w-1.5 rounded-full bg-black"></span>
              <span>{currentBlog?.time_to_read}</span>
            </div>
            <div className="flex items-center gap-2.5">
              {/* linkedin */}
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.625 26.9792C30.625 28.9931 28.9931 30.625 26.9792 30.625H8.02083C6.0076 30.625 4.375 28.9931 4.375 26.9792V8.02083C4.375 6.00688 6.0076 4.375 8.02083 4.375H26.9792C28.9931 4.375 30.625 6.00688 30.625 8.02083V26.9792Z" fill="#0078D4" />
                <path opacity="0.05" d="M21.8776 26.9798V19.616C21.8776 18.3844 21.2804 17.6487 20.2793 17.6487C19.685 17.6487 19.2482 17.9834 18.9821 18.6433C18.9697 18.6899 18.9522 18.8802 18.9595 19.4555L18.9609 26.9798H13.8568V13.1257H18.9609V13.8993C19.7061 13.3852 20.6198 13.1257 21.6866 13.1257C25.0021 13.1257 26.981 15.381 26.981 19.1588L26.9818 26.9798H21.8776ZM8.02344 26.9798V13.1257H10.5442C9.08365 13.1257 8.02344 12.0523 8.02344 10.5728C8.02344 9.09482 9.10115 8.02148 10.5857 8.02148C12.0528 8.02148 13.0977 9.06492 13.1276 10.5583C13.1276 12.0487 12.0492 13.1257 10.5646 13.1257H13.1276V26.9798H8.02344Z" fill="black" />
                <path opacity="0.07" d="M22.237 26.6139V19.6147C22.237 18.176 21.4852 17.2828 20.2741 17.2828C19.3298 17.2828 18.8631 17.9478 18.6385 18.5056C18.5788 18.6507 18.5868 19.2267 18.5897 19.4725L18.5911 26.6139H14.2161V13.4889H18.5911V14.6833C19.1708 14.0832 20.1042 13.4889 21.6814 13.4889C24.7679 13.4889 26.6113 15.6079 26.6113 19.1575L26.612 26.6139H22.237ZM8.38281 26.6139V13.4889H12.7578V26.6139H8.38281ZM10.539 12.7598C9.2899 12.7598 8.38281 11.8396 8.38281 10.5715C8.38281 9.30424 9.3074 8.38477 10.5805 8.38477C11.8376 8.38477 12.7323 9.28091 12.7578 10.5642C12.7578 11.8396 11.8332 12.7598 10.5594 12.7598H10.539Z" fill="black" />
                <path d="M8.75 13.8542H12.3958V26.25H8.75V13.8542ZM10.562 12.3958H10.5416C9.45365 12.3958 8.75 11.585 8.75 10.5722C8.75 9.5375 9.47552 8.75 10.5831 8.75C11.6922 8.75 12.3754 9.5375 12.3958 10.5722C12.3958 11.5843 11.6922 12.3958 10.562 12.3958ZM26.25 26.25H22.6042V19.6153C22.6042 18.0126 21.7109 16.9189 20.2767 16.9189C19.1822 16.9189 18.5901 17.6568 18.3028 18.3699C18.1978 18.6251 18.2292 19.3309 18.2292 19.6875V26.25H14.5833V13.8542H18.2292V15.7617C18.7549 14.9479 19.5781 13.8542 21.684 13.8542C24.2929 13.8542 26.2493 15.4948 26.2493 19.1581L26.25 26.25Z" fill="white" />
              </svg>
              {/* instagram */}
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.8035 30.6172L10.2202 30.631C7.01188 30.634 4.38469 28.0119 4.38104 24.8035L4.36719 10.2202C4.36427 7.01188 6.98636 4.38469 10.1947 4.38104L24.778 4.36719C27.9864 4.36427 30.6135 6.98636 30.6172 10.1947L30.631 24.778C30.6347 27.9871 28.0119 30.6143 24.8035 30.6172Z" fill="url(#paint0_radial_6954_29098)" />
                <path d="M24.8035 30.6172L10.2202 30.631C7.01188 30.634 4.38469 28.0119 4.38104 24.8035L4.36719 10.2202C4.36427 7.01188 6.98636 4.38469 10.1947 4.38104L24.778 4.36719C27.9864 4.36427 30.6135 6.98636 30.6172 10.1947L30.631 24.778C30.6347 27.9871 28.0119 30.6143 24.8035 30.6172Z" fill="url(#paint1_radial_6954_29098)" />
                <path d="M17.5026 22.6048C14.6888 22.6048 12.3984 20.3152 12.3984 17.5007C12.3984 14.6861 14.6888 12.3965 17.5026 12.3965C20.3165 12.3965 22.6068 14.6861 22.6068 17.5007C22.6068 20.3152 20.3165 22.6048 17.5026 22.6048ZM17.5026 13.8548C15.4923 13.8548 13.8568 15.4903 13.8568 17.5007C13.8568 19.511 15.4923 21.1465 17.5026 21.1465C19.5129 21.1465 21.1484 19.511 21.1484 17.5007C21.1484 15.4903 19.5129 13.8548 17.5026 13.8548Z" fill="white" />
                <path d="M22.9688 13.125C23.5728 13.125 24.0625 12.6353 24.0625 12.0312C24.0625 11.4272 23.5728 10.9375 22.9688 10.9375C22.3647 10.9375 21.875 11.4272 21.875 12.0312C21.875 12.6353 22.3647 13.125 22.9688 13.125Z" fill="white" />
                <path d="M21.8776 26.9798H13.1276C10.3137 26.9798 8.02344 24.6902 8.02344 21.8757V13.1257C8.02344 10.3111 10.3137 8.02148 13.1276 8.02148H21.8776C24.6915 8.02148 26.9818 10.3111 26.9818 13.1257V21.8757C26.9818 24.6902 24.6915 26.9798 21.8776 26.9798ZM13.1276 9.47982C11.1173 9.47982 9.48177 11.1153 9.48177 13.1257V21.8757C9.48177 23.886 11.1173 25.5215 13.1276 25.5215H21.8776C23.8879 25.5215 25.5234 23.886 25.5234 21.8757V13.1257C25.5234 11.1153 23.8879 9.47982 21.8776 9.47982H13.1276Z" fill="white" />
                <defs>
                  <radialGradient id="paint0_radial_6954_29098" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.1307 30.65) scale(32.7389 32.7389)">
                    <stop stopColor="#FFDD55" />
                    <stop offset="0.328" stopColor="#FF543F" />
                    <stop offset="0.348" stopColor="#FC5245" />
                    <stop offset="0.504" stopColor="#E64771" />
                    <stop offset="0.643" stopColor="#D53E91" />
                    <stop offset="0.761" stopColor="#CC39A4" />
                    <stop offset="0.841" stopColor="#C837AB" />
                  </radialGradient>
                  <radialGradient id="paint1_radial_6954_29098" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.59344 4.03929) scale(21.7386 14.4845)">
                    <stop stopColor="#4168C9" />
                    <stop offset="0.999" stopColor="#4168C9" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
              {/* fb */}
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5013 2.91602C9.44693 2.91602 2.91797 9.44497 2.91797 17.4993C2.91797 24.8114 8.29849 30.8657 15.3167 31.9201C16.0291 32.0273 16.759 29.8952 17.5013 29.8952C18.1714 29.8952 18.8313 32.0375 19.4781 31.95C26.5977 30.9853 32.0846 24.8836 32.0846 17.4993C32.0846 9.44497 25.5557 2.91602 17.5013 2.91602Z" fill="url(#paint0_linear_6954_29109)" />
                <path opacity="0.05" d="M20.2022 15.4361C20.2022 14.3978 20.4246 13.1604 21.4834 13.1604H24.6064L24.6057 9.06464L24.5692 8.44339L23.9523 8.36026C23.509 8.30047 22.5866 8.17578 20.8855 8.17578C16.8247 8.17578 14.5884 10.593 14.5884 14.9818V16.8033H10.9805V22.0956H14.5884V31.792C15.529 31.9823 16.5024 32.0837 17.4992 32.0837C18.4238 32.0837 19.3251 31.9882 20.2022 31.8234V22.0948H23.8721L24.6903 16.8026H20.2022V15.4361Z" fill="black" />
                <path opacity="0.05" d="M19.8403 15.4358C19.8403 14.4492 20.0539 12.7955 21.486 12.7955H24.2444V9.08546L24.2255 8.76462L23.9097 8.7216C23.4744 8.66254 22.5695 8.54004 20.8888 8.54004C17.0074 8.54004 14.9563 10.7676 14.9563 14.9815V17.1675H11.3477V21.7307H14.9556V31.8471C15.7839 31.993 16.6312 32.0834 17.5018 32.0834C18.2995 32.0834 19.0768 32.0017 19.8403 31.8785V21.7299H23.5619L24.267 17.1668H19.8395V15.4358H19.8403Z" fill="black" />
                <path d="M19.4744 21.365H23.2485L23.8414 17.5311H19.4744V15.4354C19.4744 13.8429 19.995 12.4305 21.4847 12.4305H23.8785V9.08513C23.4578 9.02826 22.5682 8.9043 20.8875 8.9043C17.3773 8.9043 15.3196 10.7578 15.3196 14.9812V17.5318H11.7109V21.3658H15.3189V31.9204C16.0334 32.0269 16.7575 32.083 17.5005 32.083C18.1721 32.083 18.8276 32.0378 19.4744 31.9503V21.365Z" fill="white" />
                <defs>
                  <linearGradient id="paint0_linear_6954_29109" x1="7.28786" y1="7.28591" x2="29.6164" y2="29.6145" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2AA4F4" />
                    <stop offset="1" stopColor="#007AD9" />
                  </linearGradient>
                </defs>
              </svg>
              {/* copy link */}
              <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.67289 29.3259C8.3781 32.0311 12.764 32.0311 15.4692 29.3259C16.7329 28.0623 19.3098 25.4854 20.5734 24.2217C23.2786 21.5165 23.2786 17.1306 20.5734 14.4254C17.8682 11.7202 13.4823 11.7202 10.7771 14.4254C9.51341 15.689 6.93654 18.2659 5.67289 19.5296C2.96841 22.234 2.96841 26.6207 5.67289 29.3259ZM8.25122 22.1072C8.99497 21.3634 12.799 17.5593 13.3554 17.003C14.6365 15.7218 16.7147 15.7218 17.9958 17.003C19.277 18.2841 19.277 20.3623 17.9958 21.6434C17.4395 22.1998 13.6354 26.0038 12.8916 26.7476C11.6105 28.0287 9.53237 28.0287 8.25122 26.7476C6.97008 25.4664 6.97008 23.3883 8.25122 22.1072Z" fill="#0078D4" />
                <path opacity="0.05" d="M17.2164 16.4132C17.2164 16.4132 16.7723 15.3129 17.7778 14.1302L18.7761 13.1312C16.4682 11.977 13.6558 12.1942 11.5383 13.7787C10.939 16.0421 11.8118 18.5497 11.8118 18.5497C12.5701 17.7913 13.1768 17.1847 13.3583 17.0031C14.4083 15.9538 15.9345 15.7599 17.2164 16.4132Z" fill="black" />
                <path opacity="0.07" d="M16.6428 16.1824C16.583 15.6983 16.513 14.7066 17.388 13.7434C17.439 13.6923 18.0588 13.058 18.2214 12.8954C16.2949 12.0867 14.0732 12.242 12.2481 13.311C11.629 15.1908 12.0169 17.3374 12.2481 18.1104C12.7898 17.5686 13.2135 17.1449 13.3557 17.0028C14.2518 16.1059 15.4958 15.8332 16.6428 16.1824Z" fill="black" />
                <path d="M29.324 5.67441C26.6187 2.96921 22.2328 2.96921 19.5276 5.67441C18.264 6.93806 15.6871 9.51493 14.4234 10.7786C11.7182 13.4838 11.7182 17.8697 14.4234 20.5749C17.1286 23.2801 21.5146 23.2801 24.2198 20.5749C25.4834 19.3113 28.0603 16.7344 29.324 15.4708C32.0284 12.7663 32.0284 8.37962 29.324 5.67441ZM26.7456 12.8932C26.0019 13.6369 22.1978 17.441 21.6415 17.9973C20.3603 19.2785 18.2822 19.2785 17.001 17.9973C15.7199 16.7162 15.7199 14.6381 17.001 13.3569C17.5574 12.8006 21.3615 8.9965 22.1052 8.25275C23.3864 6.9716 25.4645 6.9716 26.7456 8.25275C28.0268 9.53389 28.0268 11.612 26.7456 12.8932Z" fill="#1B9DE2" />
                <path opacity="0.05" d="M17.7826 18.5767C17.7826 18.5767 18.2303 19.6879 17.2248 20.8706L16.2266 21.8696C18.5344 23.0239 21.3468 22.8066 23.4643 21.2221C24.0636 18.9588 23.1908 16.4512 23.1908 16.4512C22.4325 17.2095 21.8258 17.8162 21.6443 17.9977C20.5943 19.047 19.0251 19.2468 17.7826 18.5767Z" fill="black" />
                <path opacity="0.07" d="M18.3669 18.8168C18.4267 19.301 18.4858 20.2934 17.6108 21.2566C17.5597 21.3077 16.9399 21.9275 16.7773 22.0901C18.7038 22.8987 20.9467 22.7441 22.7536 21.6321C23.3727 19.7524 22.9826 17.6618 22.7507 16.8896C22.2089 17.4314 21.7853 17.8551 21.6431 17.9973C20.7469 18.8941 19.4497 19.1559 18.3669 18.8168Z" fill="black" />
                <path d="M17.9987 17.0034C19.2798 18.2845 19.2798 20.3627 17.9987 21.6438C17.4423 22.2002 13.6383 26.0042 12.8945 26.748L15.4729 29.3263C16.7365 28.0627 19.3134 25.4858 20.577 24.2221C23.2822 21.5169 23.2822 17.131 20.577 14.4258L17.9987 17.0034Z" fill="#0078D4" />
              </svg>

            </div>
          </div>
        </div>
      </section>
      {/* content section */}
      <section className="px-con container-2560 mt-14">
        <Image src={currentBlog?.main_img} alt={currentBlog?.title} width={1680} height={818} className="w-full h-auto object-cover" />

        <div className="grid md:grid-cols-5 md:gap-8 3xl:gap-24 mt-14">
          {/* left */}
          <div className="col-span-3">
            {/* table of content */}
            <div className="bg-light p-10 rounded-2xl font-urbanist">
              <h3 className="font-medium text-[28px]">Table Of Contents</h3>
              <div className="mt-10 flex flex-col gap-5">
                {
                  currentBlog?.sections
                    ?.filter(section => section.title && /^\d+[-.]/.test(section.title.trim()))
                    .map((section, index) => {
                      const targetId = section.title.toLowerCase().replace(/ /g, '-');
                      const handleClick = (e) => {
                        e.preventDefault();
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                          });
                        }
                      };

                      return (
                        <Link
                          href={`#${targetId}`}
                          key={index}
                          onClick={handleClick}
                          className="text-lg md:text-base lg:text-lg 3xl:text-2xl font-bold text-gray-700"
                        >
                          {section.title.replace(/^\d+[-.]\s*/, '')}
                        </Link>
                      );
                    })
                }
              </div>
            </div>
            {/* content */}
            <div>
              {currentBlog?.sections?.map((section, index) => (
                <div key={index} className="mt-10 font-medium">
                  <div className="flex flex-col gap-4" id={section?.title?.toLowerCase().replaceAll(" ", "-")}>
                    <h4 className="text-2xl md:text-3xl 3xl:text-4xl">{section.title}</h4>
                    {renderSectionContent(section)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="max-md:hidden md:col-span-2 h-full">
            <div className="sticky top-4 flex flex-col gap-7">
              <h3 className="font-urbanist font-medium text-2xl pb-4 border-b border-gray-700" >Similar Posts</h3>
              {similarBlogs?.map((blog, index) => (
                <SimilarPostCard key={index}
                  // ref={el => cardsRef.current[index] = el}
                  image={blog?.thumbnail}
                  title={blog?.title}
                  date={blog?.published_at}
                  colSpanTwo={blog?.col_span_two}
                  minsToRead={blog?.time_to_read}
                  link={`/Blogs/${blog?.slug}`}
                />))}
            </div>
          </div>
        </div>
      </section>

      {/* explore more  */}
      <section className="container-2560 px-con relative max-sm:pt-12 sm:pt-20 flex flex-col">
        <div className="mt-6 sm:mt-14 border-b border-gray w-full"></div>

        <div className="headerSpace"></div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start sm:text-center sm:justify-start gap-4">
            <MountAnim>
              <Badge nodot variant="yellow">
                Other Blogs
              </Badge>
            </MountAnim>
            <MountAnim>
              <h1 className="text-4xl sm:text-[3.5rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
                Explore More
              </h1>
            </MountAnim>
          </div>

          <Link href={'/Blogs'}>
            <MountAnim>
              <Button btnType="light">See All Blogs</Button>
            </MountAnim>
          </Link>

        </div>
        {/* card */}
        <div className=" grid gap-y-7 pt-10 md:pt-[42px] lg:pt-14 md:gap-y-10 xl:gap-y-14 2xl:gap-y-20 gap-x-9 md:gap-x-9 xl:gap-x-8 2xl:gap-x-8 sm:grid-cols-2 md:grid-cols-3">
          {exploreMoreBlogs?.map((blog, index) => (
            <Card
              key={index}
              tag={blog?.tag}
              image={blog?.thumbnail}
              title={blog?.title}
              desc={blog?.description}
              minsToRead={blog?.time_to_read}
              link={`/Blogs/${blog?.slug}`}
            />))}
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
