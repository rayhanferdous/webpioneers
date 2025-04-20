"use client";

import { useResponsiveStates } from "@/app/(utils)/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/app/(utils)/utils";
import MessageIcon from "@/app/(assets)/MessageIcon";
import SendIcon from "@/app/(assets)/SendIcon";
gsap.registerPlugin(ScrollTrigger);

const Comp1 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  const texts = [
    "Let's circle back on that estimate and see if it aligns with our timeline.",
    "The project's looking solid so far—just a few tweaks and we're good.",
    "Just checking in on the latest draft—let me know if it's ready for review.",
    "Let's coordinate the next steps to make sure we're on track.",
    "Can you loop in the design team for feedback on these updates?",
    "Do we have time for a quick sync on the project timelines this week?",
  ];

  return (
    <div
      className={cn(
        "h-full flex-1 group rounded-2xl relative overflow-hidden border-2 border-gray-600 transition-colors duration-[600ms] flex flex-col",
        isTab && !isInView
          ? "bg-transparent"
          : "max-lg:bg-purple-light hover:bg-purple-light"
      )}
    >
      <div className="relative lg:absolute h-full w-full">
        <div
          className={cn(
            "lg:absolute h-full w-full sm:flex-grow overflow-hidden transition-all duration-[600ms] ease-in-out flex items-center",
            isTab && !isInView
              ? "opacity-0"
              : "opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          )}
        >
          <div
            className={cn(
              "transition-all duration-[600ms] ease-in-out absolute z-[2] inset-0 grid place-content-center text-[11.5rem] sm:text-[18rem] lg:text-[12rem]",
              isTab && !isInView
                ? "text-[#E6E6E6]"
                : "text-purple lg:text-[#E6E6E6] lg:group-hover:text-purple"
            )}
          >
            48h
          </div>
          <div
            className={cn(
              "transition-all duration-[600ms] ease-in-out bg-purple-light mx-auto text-center w-fit min-w-full max-h-[25rem] h-full flex flex-col justify-around text-xl sm:text-[2.2rem] lg:text-[1.5rem] whitespace-nowrap leading-relaxed sm:leading-snug"
            )}
          >
            {texts.map((text, index) => (
              <p
                key={index}
                className={cn(
                  "transition-all duration-[600ms] ease-in-out",
                  isTab && !isInView
                    ? index % 2 === 0
                      ? "translate-x-0"
                      : "-translate-x-16"
                    : index % 2 === 0
                    ? "-translate-x-16 lg:group-hover:translate-x-0"
                    : "translate-x-0 lg:group-hover:-translate-x-16"
                )}
              >
                {text}
                {text}
              </p>
            ))}
            <div
              className={cn(
                "bg-[radial-gradient(var(--tw-gradient-stops))] from-transparent to-purple-light max-lg:to-90% absolute inset-0"
              )}
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-auto px-4 sm:px-8 py-8 lg:py-14 flex flex-col gap-2">
        <h3 className="text-xl sm:text-[1.5rem] lg:text-[1.85rem] leading-snug text-gray-500 lg:text-gray-900 font-medium">
          Even during maintenance,{" "}
          <span className="lg:text-dark">we're ready</span> to start your
          project. Let's get rolling and show you how we can help kickstart your
          business!
        </h3>
      </div>
    </div>
  );
});

const Comp2 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <div
      className={cn(
        "flex-1 group rounded-2xl overflow-hidden border-2 border-gray-600 transition-colors duration-[600ms] flex flex-col p-4 sm:p-8 gap-4 justify-between",
        isTab && !isInView
          ? "bg-transparent"
          : "max-lg:bg-red-light hover:bg-red-light"
      )}
    >
      <h3 className="max-lg:hidden text-2xl sm:text-[1.8rem] leading-tight">
        Get The Best Support{" "}
      </h3>
      <div className="">
        <svg
          className="w-[58%] lg:w-full h-auto"
          width="336"
          height="202"
          viewBox="0 0 336 202"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43 116C31.6308 116.113 20.7591 120.68 12.7195 128.719C4.6798 136.759 0.113135 147.631 0 159L0 202H43C54.3692 201.887 65.2409 197.32 73.2805 189.281C81.3202 181.241 85.8869 170.369 86 159C85.8869 147.631 81.3202 136.759 73.2805 128.719C65.2409 120.68 54.3692 116.113 43 116Z"
            className={`${
              isTab && !isInView
                ? "fill-[#E6E6E6]"
                : "fill-[#E6E6E6] max-lg:fill-red group-hover:fill-red"
            } transition-all duration-[600ms]`}
          />
          <path
            d="M293.138 116H152.862C141.529 116.113 130.693 120.68 122.679 128.719C114.665 136.759 110.113 147.631 110 159C110.113 170.369 114.665 181.241 122.679 189.281C130.693 197.32 141.529 201.887 152.862 202H336V159C335.887 147.631 331.335 136.759 323.321 128.719C315.307 120.68 304.471 116.113 293.138 116Z"
            className={`${
              isTab && !isInView
                ? "fill-[#E6E6E6]"
                : "fill-[#E6E6E6] max-lg:fill-red group-hover:fill-red"
            } transition-all duration-[600ms]`}
          />
          <mask
            id="mask0_9122_7869"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="110"
            y="116"
            width="226"
            height="86"
          >
            <path
              d="M293.138 116H152.862C141.529 116.113 130.693 120.68 122.679 128.719C114.665 136.759 110.113 147.631 110 159C110.113 170.369 114.665 181.241 122.679 189.281C130.693 197.32 141.529 201.887 152.862 202H336V159C335.887 147.631 331.335 136.759 323.321 128.719C315.307 120.68 304.471 116.113 293.138 116Z"
              fill="#E16F64"
              className={`${
                isTab && !isInView
                  ? "translate-x-[-50%]"
                  : "translate-x-[-50%] max-lg:translate-x-[0%] group-hover:translate-x-[0%]"
              } transition-all duration-[600ms]`}
            />
          </mask>
          <g mask="url(#mask0_9122_7869)">
            <g
              className={`${
                isTab && !isInView
                  ? "translate-x-[60%]"
                  : "translate-x-[60%] max-lg:translate-x-[0%] group-hover:translate-x-[0%]"
              } transition-all duration-[600ms] overflow-hidden`}
              clipPath="url(#clip0_9122_7868)"
            >
              <path
                d="M144 178V136H158.76C161 136 163.02 136.55 164.82 137.65C166.64 138.75 168.08 140.24 169.14 142.12C170.22 143.98 170.76 146.06 170.76 148.36C170.76 150.38 170.36 152.22 169.56 153.88C168.76 155.54 167.66 156.93 166.26 158.05C164.88 159.15 163.31 159.91 161.55 160.33L171.75 178H165.93L155.91 160.75H149.04V178H144ZM149.04 155.71H158.25C159.61 155.71 160.86 155.38 162 154.72C163.14 154.04 164.04 153.13 164.7 151.99C165.38 150.83 165.72 149.53 165.72 148.09C165.72 146.63 165.38 145.33 164.7 144.19C164.04 143.03 163.14 142.12 162 141.46C160.86 140.78 159.61 140.44 158.25 140.44H149.04V155.71Z"
                fill="white"
              />
              <path
                d="M189.895 178.78C187.135 178.78 184.615 178.07 182.335 176.65C180.075 175.23 178.265 173.33 176.905 170.95C175.565 168.55 174.895 165.9 174.895 163C174.895 160.8 175.285 158.75 176.065 156.85C176.845 154.93 177.915 153.25 179.275 151.81C180.655 150.35 182.255 149.21 184.075 148.39C185.895 147.57 187.835 147.16 189.895 147.16C192.155 147.16 194.225 147.62 196.105 148.54C198.005 149.44 199.625 150.7 200.965 152.32C202.325 153.94 203.335 155.82 203.995 157.96C204.675 160.1 204.925 162.39 204.745 164.83H180.265C180.505 166.53 181.065 168.05 181.945 169.39C182.825 170.71 183.945 171.76 185.305 172.54C186.685 173.32 188.215 173.72 189.895 173.74C191.695 173.74 193.325 173.28 194.785 172.36C196.245 171.42 197.425 170.14 198.325 168.52L203.455 169.72C202.255 172.38 200.445 174.56 198.025 176.26C195.605 177.94 192.895 178.78 189.895 178.78ZM180.115 160.87H199.675C199.515 159.19 198.975 157.66 198.055 156.28C197.135 154.88 195.965 153.76 194.545 152.92C193.125 152.08 191.575 151.66 189.895 151.66C188.215 151.66 186.675 152.07 185.275 152.89C183.875 153.71 182.715 154.82 181.795 156.22C180.895 157.6 180.335 159.15 180.115 160.87Z"
                fill="white"
              />
              <path
                d="M233.745 148H238.785V178H233.745L233.535 172.93C232.595 174.67 231.295 176.08 229.635 177.16C227.995 178.24 226.035 178.78 223.755 178.78C221.555 178.78 219.495 178.37 217.575 177.55C215.655 176.71 213.955 175.56 212.475 174.1C211.015 172.62 209.875 170.92 209.055 169C208.235 167.08 207.825 165.01 207.825 162.79C207.825 160.65 208.225 158.63 209.025 156.73C209.825 154.83 210.935 153.17 212.355 151.75C213.795 150.31 215.455 149.19 217.335 148.39C219.215 147.57 221.235 147.16 223.395 147.16C225.755 147.16 227.825 147.72 229.605 148.84C231.385 149.94 232.825 151.37 233.925 153.13L233.745 148ZM223.665 173.89C225.645 173.89 227.355 173.41 228.795 172.45C230.255 171.47 231.375 170.15 232.155 168.49C232.955 166.83 233.355 165 233.355 163C233.355 160.96 232.955 159.12 232.155 157.48C231.355 155.82 230.225 154.51 228.765 153.55C227.325 152.57 225.625 152.08 223.665 152.08C221.685 152.08 219.885 152.57 218.265 153.55C216.645 154.53 215.355 155.85 214.395 157.51C213.455 159.15 212.985 160.98 212.985 163C212.985 165.02 213.475 166.86 214.455 168.52C215.435 170.16 216.735 171.47 218.355 172.45C219.975 173.41 221.745 173.89 223.665 173.89Z"
                fill="white"
              />
              <path
                d="M268.345 133H273.385V178H268.345V172.9C267.325 174.66 265.955 176.08 264.235 177.16C262.515 178.24 260.495 178.78 258.175 178.78C255.995 178.78 253.955 178.37 252.055 177.55C250.155 176.73 248.475 175.6 247.015 174.16C245.575 172.7 244.445 171.02 243.625 169.12C242.805 167.22 242.395 165.18 242.395 163C242.395 160.82 242.805 158.78 243.625 156.88C244.445 154.96 245.575 153.28 247.015 151.84C248.475 150.38 250.155 149.24 252.055 148.42C253.955 147.6 255.995 147.19 258.175 147.19C260.495 147.19 262.515 147.73 264.235 148.81C265.955 149.89 267.325 151.31 268.345 153.07V133ZM258.235 173.89C260.215 173.89 261.925 173.41 263.365 172.45C264.825 171.47 265.945 170.15 266.725 168.49C267.525 166.83 267.925 165 267.925 163C267.925 160.96 267.525 159.12 266.725 157.48C265.925 155.82 264.795 154.51 263.335 153.55C261.895 152.57 260.195 152.08 258.235 152.08C256.255 152.08 254.455 152.57 252.835 153.55C251.235 154.53 249.955 155.85 248.995 157.51C248.035 159.15 247.555 160.98 247.555 163C247.555 165.02 248.045 166.86 249.025 168.52C250.005 170.16 251.305 171.47 252.925 172.45C254.545 173.41 256.315 173.89 258.235 173.89Z"
                fill="white"
              />
              <path
                d="M299.96 148H305.3L288.89 193H283.55L288.98 178L278.21 148H283.73L291.5 171.07L299.96 148Z"
                fill="white"
              />
            </g>
          </g>

          <path
            d="M184.113 0H42.8874C31.5479 0.113135 20.7048 4.6798 12.6862 12.7195C4.66755 20.7591 0.112839 31.6308 0 43L0 86H184.113C195.452 85.8869 206.295 81.3202 214.314 73.2805C222.332 65.2409 226.887 54.3692 227 43C226.887 31.6308 222.332 20.7591 214.314 12.7195C206.295 4.6798 195.452 0.113135 184.113 0Z"
            className={`${
              isTab && !isInView
                ? "fill-[#E6E6E6]"
                : "fill-[#E6E6E6] max-lg:fill-red group-hover:fill-red"
            } transition-all duration-[600ms]`}
          />
          <path
            d="M70.83 21H75.87V63H70.83V43.02H50.04V63H45V21H50.04V37.98H70.83V21Z"
            fill="white"
          />
          <path
            d="M95.993 63.78C93.233 63.78 90.713 63.07 88.433 61.65C86.173 60.23 84.363 58.33 83.003 55.95C81.663 53.55 80.993 50.9 80.993 48C80.993 45.8 81.383 43.75 82.163 41.85C82.943 39.93 84.013 38.25 85.373 36.81C86.753 35.35 88.353 34.21 90.173 33.39C91.993 32.57 93.933 32.16 95.993 32.16C98.253 32.16 100.323 32.62 102.203 33.54C104.103 34.44 105.723 35.7 107.063 37.32C108.423 38.94 109.433 40.82 110.093 42.96C110.773 45.1 111.023 47.39 110.843 49.83H86.363C86.603 51.53 87.163 53.05 88.043 54.39C88.923 55.71 90.043 56.76 91.403 57.54C92.783 58.32 94.313 58.72 95.993 58.74C97.793 58.74 99.423 58.28 100.883 57.36C102.343 56.42 103.523 55.14 104.423 53.52L109.553 54.72C108.353 57.38 106.543 59.56 104.123 61.26C101.703 62.94 98.993 63.78 95.993 63.78ZM86.213 45.87H105.773C105.613 44.19 105.073 42.66 104.153 41.28C103.233 39.88 102.063 38.76 100.643 37.92C99.223 37.08 97.673 36.66 95.993 36.66C94.313 36.66 92.773 37.07 91.373 37.89C89.973 38.71 88.813 39.82 87.893 41.22C86.993 42.6 86.433 44.15 86.213 45.87Z"
            fill="white"
          />
          <path d="M115.605 63V18H120.645V63H115.605Z" fill="white" />
          <path d="M127.852 63V18H132.892V63H127.852Z" fill="white" />
          <path
            d="M153.005 63.78C150.245 63.78 147.725 63.07 145.445 61.65C143.185 60.23 141.375 58.33 140.015 55.95C138.675 53.55 138.005 50.9 138.005 48C138.005 45.8 138.395 43.75 139.175 41.85C139.955 39.93 141.025 38.25 142.385 36.81C143.765 35.35 145.365 34.21 147.185 33.39C149.005 32.57 150.945 32.16 153.005 32.16C155.765 32.16 158.275 32.87 160.535 34.29C162.815 35.71 164.625 37.62 165.965 40.02C167.325 42.42 168.005 45.08 168.005 48C168.005 50.18 167.615 52.22 166.835 54.12C166.055 56.02 164.975 57.7 163.595 59.16C162.235 60.6 160.645 61.73 158.825 62.55C157.025 63.37 155.085 63.78 153.005 63.78ZM153.005 58.74C154.885 58.74 156.575 58.25 158.075 57.27C159.595 56.27 160.785 54.96 161.645 53.34C162.525 51.7 162.965 49.92 162.965 48C162.965 46.04 162.515 44.24 161.615 42.6C160.735 40.96 159.545 39.65 158.045 38.67C156.545 37.69 154.865 37.2 153.005 37.2C151.125 37.2 149.435 37.7 147.935 38.7C146.435 39.68 145.245 40.99 144.365 42.63C143.485 44.27 143.045 46.06 143.045 48C143.045 50 143.495 51.82 144.395 53.46C145.295 55.08 146.505 56.37 148.025 57.33C149.545 58.27 151.205 58.74 153.005 58.74Z"
            fill="white"
          />
          <path
            d="M172.779 50.4V21H177.129V50.4H172.779ZM174.969 63.78C174.189 63.78 173.529 63.51 172.989 62.97C172.449 62.43 172.179 61.77 172.179 60.99C172.179 60.23 172.449 59.59 172.989 59.07C173.529 58.53 174.189 58.26 174.969 58.26C175.709 58.26 176.339 58.53 176.859 59.07C177.399 59.59 177.669 60.23 177.669 60.99C177.669 61.77 177.399 62.43 176.859 62.97C176.339 63.51 175.709 63.78 174.969 63.78Z"
            fill="white"
          />

          <mask
            id="mask0_9122_7868"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="116"
            width="86"
            height="86"
          >
            <path
              d="M43 116C31.6308 116.113 20.7591 120.68 12.7195 128.719C4.6798 136.759 0.113135 147.631 0 159L0 202H43C54.3692 201.887 65.2409 197.32 73.2805 189.281C81.3202 181.241 85.8869 170.369 86 159C85.8869 147.631 81.3202 136.759 73.2805 128.719C65.2409 120.68 54.3692 116.113 43 116Z"
              fill="#E16F64"
            />
          </mask>

          <g mask="url(#mask0_9122_7868)">
            <path
              d="M38.0354 167.46C38.0354 165.639 38.5299 163.968 39.5189 162.447C40.5273 160.927 41.9138 159.725 43.6785 158.841C44.8032 158.31 45.6856 157.523 46.3255 156.48C46.9655 155.419 47.2854 154.261 47.2854 153.006C47.2854 151.786 46.9558 150.681 46.2964 149.691C45.6565 148.701 44.7838 147.914 43.6785 147.331C42.5925 146.747 41.3902 146.455 40.0716 146.455C38.7529 146.455 37.5409 146.747 36.4356 147.331C35.3496 147.914 34.4867 148.701 33.8467 149.691C33.2068 150.681 32.8868 151.786 32.8868 153.006H28C28 150.973 28.543 149.125 29.6289 147.463C30.7149 145.801 32.1693 144.475 33.9922 143.485C35.8344 142.495 37.8609 142 40.0716 142C42.3017 142 44.3281 142.495 46.151 143.485C47.9932 144.475 49.4573 145.801 50.5433 147.463C51.6293 149.125 52.1722 150.973 52.1722 153.006C52.1722 155.075 51.6196 156.984 50.5142 158.735C49.4089 160.485 47.8963 161.837 45.9765 162.792C45.0263 163.252 44.2797 163.897 43.7367 164.728C43.1937 165.542 42.9222 166.452 42.9222 167.46H38.0354ZM40.4788 180.535C39.7225 180.535 39.0826 180.296 38.559 179.818C38.0354 179.323 37.7736 178.74 37.7736 178.068C37.7736 177.396 38.0354 176.83 38.559 176.371C39.0826 175.893 39.7225 175.655 40.4788 175.655C41.2157 175.655 41.8459 175.893 42.3695 176.371C42.8931 176.83 43.1549 177.396 43.1549 178.068C43.1549 178.74 42.8931 179.323 42.3695 179.818C41.8459 180.296 41.2157 180.535 40.4788 180.535Z"
              fill="white"
              className={`${
                isTab && !isInView
                  ? "translate-y-[80%]"
                  : "translate-y-[80%] max-lg:translate-y-[0%] group-hover:translate-y-[0%]"
              } transition-all duration-[600ms] overflow-hidden`}
            />
          </g>
          <defs>
            <clipPath id="clip0_9122_7868">
              <rect
                width="161.3"
                height="60"
                fill="white"
                transform="translate(144 133)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <h3 className="mt-6 sm:mt-12 lg:hidden text-2xl sm:text-[2rem] lg:text-[1.8rem] leading-tight">
        Get The Best Support{" "}
      </h3>
      <p className="text-xl sm:text-[1.5rem] leading-snug lg:text-xl text-gray-500 lg:text-gray-700 lg:max-w-[32ch]">
        A little maintenance goes a long way— thanks for letting us keep things
        cool for you! Meanwhile, feel free to reach out directly—we can still
        kickstart your project.{" "}
      </p>
    </div>
  );
});

const Comp3 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <div
      className={cn(
        "flex-1 relative group rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col lg:justify-center lg:items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-8 lg:py-16",
        isTab && !isInView ? "bg-transparent" : "max-lg:bg-blue-light"
      )}
    >
      <p className="lg:hidden text-2xl sm:text-[2rem] font-medium lg:text-center">
        Let's talk — without
        <br />
        the hold music!
      </p>
      <svg
        className="w-[2.2rem] sm:w-[2.55rem] h-auto"
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.1937 32.3687C39.1937 33.0437 39.0437 33.7375 38.725 34.4125C38.4062 35.0875 37.9938 35.725 37.45 36.325C36.5313 37.3375 35.5187 38.0688 34.375 38.5375C33.25 39.0063 32.0313 39.25 30.7188 39.25C28.8063 39.25 26.7625 38.8 24.6062 37.8813C22.45 36.9625 20.2937 35.725 18.1562 34.1688C16 32.5938 13.9562 30.85 12.0062 28.9187C10.075 26.9687 8.33125 24.925 6.775 22.7875C5.2375 20.65 4 18.5125 3.1 16.3938C2.2 14.2563 1.75 12.2125 1.75 10.2625C1.75 8.9875 1.975 7.76875 2.425 6.64375C2.875 5.5 3.5875 4.45 4.58125 3.5125C5.78125 2.33125 7.09375 1.75 8.48125 1.75C9.00625 1.75 9.53125 1.8625 10 2.0875C10.4875 2.3125 10.9188 2.65 11.2563 3.1375L15.6063 9.26875C15.9438 9.7375 16.1875 10.1688 16.3562 10.5813C16.525 10.975 16.6188 11.3688 16.6188 11.725C16.6188 12.175 16.4875 12.625 16.225 13.0562C15.9813 13.4875 15.625 13.9375 15.175 14.3875L13.75 15.8687C13.5437 16.075 13.45 16.3188 13.45 16.6188C13.45 16.7688 13.4688 16.9 13.5063 17.05C13.5625 17.2 13.6188 17.3125 13.6563 17.425C13.9938 18.0437 14.575 18.85 15.4 19.825C16.2437 20.8 17.1437 21.7938 18.1187 22.7875C19.1312 23.7813 20.1062 24.7 21.1 25.5437C22.075 26.3687 22.8812 26.9312 23.5187 27.2687C23.6125 27.3062 23.725 27.3625 23.8562 27.4187C24.0062 27.475 24.1562 27.4937 24.325 27.4937C24.6437 27.4937 24.8875 27.3813 25.0937 27.175L26.5188 25.7688C26.9875 25.3 27.4375 24.9437 27.8688 24.7188C28.3 24.4562 28.7312 24.325 29.2 24.325C29.5562 24.325 29.9313 24.4 30.3438 24.5688C30.7562 24.7375 31.1875 24.9813 31.6563 25.3L37.8625 29.7062C38.35 30.0437 38.6875 30.4375 38.8937 30.9062C39.0812 31.375 39.1937 31.8437 39.1937 32.3687Z"
          stroke="#545454"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </svg>
      <span className="max-lg:text-gray-500 text-xl sm:text-[2rem] lg:text-2xl font-normal lg:text-center">
        +1 (631) 530-2666
      </span>
      <div
        className={cn(
          "max-lg:hidden absolute inset-0 w-full h-full z-10 transition-opacity duration-[600ms] bg-blue-light grid place-content-center",
          isTab && !isInView
            ? "opacity-0"
            : "opacity-0 max-lg:opacity-100 group-hover:opacity-100"
        )}
      >
        <Image
          src={"./gridLogin.svg"}
          alt="gridLogin"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        className={cn(
          "max-lg:hidden absolute inset-0 w-full h-full z-10 transition-opacity duration-[600ms] bg-blue-light grid place-content-center",
          isTab && !isInView
            ? "opacity-0"
            : "opacity-0 max-lg:opacity-100 group-hover:opacity-100"
        )}
      >
        <Image
          src={"./gridLogin.svg"}
          alt="gridLogin"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        className={cn(
          "max-lg:hidden absolute inset-0 w-full h-full z-20 transition-transform duration-[600ms] grid place-content-center text-2xl font-normal text-center",
          isTab && !isInView
            ? "-translate-x-full"
            : "-translate-x-full max-lg:translate-x-0 group-hover:translate-x-0"
        )}
      >
        Let's talk — <br />
        without the hold
        <br />
        music!
      </div>
    </div>
  );
});

const Comp4 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <div
      className={cn(
        "flex-1 relative group rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col lg:justify-center lg:items-center gap-4 sm:gap-6 px-4 sm:px-8 py-4 sm:py-8 lg:py-16",
        isTab && !isInView ? "bg-transparent" : "max-lg:bg-yellow-light"
      )}
    >
      <p className="lg:hidden text-2xl sm:text-[2rem] font-medium lg:text-center">
        Drop us a line — spam- <br />
        free, promise!
      </p>

      <svg
        className="w-[2.2rem] sm:w-[2.55rem] h-auto"
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M31.875 38.4375H13.125C7.5 38.4375 3.75 35.625 3.75 29.0625V15.9375C3.75 9.375 7.5 6.5625 13.125 6.5625H31.875C37.5 6.5625 41.25 9.375 41.25 15.9375V29.0625C41.25 35.625 37.5 38.4375 31.875 38.4375Z"
          stroke="#545454"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.875 16.875L26.0062 21.5625C24.075 23.1 20.9062 23.1 18.975 21.5625L13.125 16.875"
          stroke="#545454"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="max-lg:text-gray-500 text-xl sm:text-[2rem] lg:text-2xl font-normal lg:text-center">
        business@ <br className="max-lg:hidden" />
        webpioneers.com
      </span>

      <div
        className={cn(
          "max-lg:hidden absolute inset-0 w-full h-full z-10 transition-opacity duration-[600ms] bg-yellow-light grid place-content-center",
          isTab && !isInView
            ? "opacity-0"
            : "opacity-0 max-lg:opacity-100 group-hover:opacity-100"
        )}
      >
        <Image
          src={"./gridLogin.svg"}
          alt="gridLogin"
          width={400}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      <div
        className={cn(
          "max-lg:hidden absolute inset-0 w-full h-full z-20 transition-transform duration-[600ms] grid place-content-center text-2xl font-normal text-center",
          isTab && !isInView
            ? "translate-x-full"
            : "translate-x-full max-lg:translate-x-0 group-hover:translate-x-0"
        )}
      >
        Drop us a line — <br />
        spam-free,
        <br />
        promise!
      </div>
    </div>
  );
});

const Comp5 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <div
      className={
        "max-lg:bg-brown-light flex-1 relative group rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col-reverse lg:flex-col lg:justify-center lg:items-center gap-4 sm:gap-8 py-4 sm:py-9"
      }
    >
      <h3 className="max-sm:px-4 max-lg:px-8 text-2xl sm:text-[2rem] lg:text-2xl leading-tight text-dark lg:text-gray-900 font-medium">
        <span className="text-dark">Stay in the loop,</span>
        <br />
        Minus the spam
      </h3>

      <div
        className={cn(
          "lg:absolute lg:inset-0 w-full h-full z-10 transition-opacity duration-[600ms] bg-brown-light grid place-content-center",
          isTab && !isInView
            ? "opacity-0"
            : "opacity-0 max-lg:opacity-100 group-hover:opacity-100"
        )}
      >
        <svg
          className="w-[23rem] sm:w-[31rem] h-auto lg:h-full lg:w-full lg:mx-auto"
          width="278"
          height="131"
          viewBox="0 0 234 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9125_8268)">
            <g clipPath="url(#clip1_9125_8268)">
              <rect
                x="41.715"
                y="28.9435"
                width="152.887"
                height="74.2751"
                rx="12.4695"
                stroke="#5D4015"
              />
              <rect
                x="36.2931"
                y="23.5216"
                width="163.731"
                height="85.1182"
                rx="14.6382"
                stroke="#5D4015"
              />
              <rect
                x="30.8713"
                y="18.1007"
                width="174.574"
                height="95.9613"
                rx="16.8068"
                stroke="#5D4015"
              />
              <rect
                x="25.4513"
                y="12.6789"
                width="185.417"
                height="106.804"
                rx="18.9754"
                stroke="#5D4015"
              />
              <rect
                x="20.0285"
                y="7.25797"
                width="196.26"
                height="117.647"
                rx="22.2283"
                stroke="#5D4015"
              />
              <rect
                x="47.1359"
                y="34.3644"
                width="142.044"
                height="63.432"
                rx="10.3009"
                stroke="#5D4015"
              />
              <rect
                x="52.5588"
                y="39.7863"
                width="131.201"
                height="52.589"
                rx="8.13231"
                stroke="#5D4015"
              />
              <g filter="url(#filter0_f_9125_8268)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M271.047 -32.3203H-32.0176V149.301H271.047V-32.3203ZM204.362 9.42578H34.668V108.098H204.362V9.42578Z"
                  fill="#FDE7D2"
                />
              </g>
            </g>
            <rect
              x="52.0156"
              y="39.2441"
              width="132.286"
              height="53.6733"
              rx="8.67447"
              fill="#D48245"
            />
            <g clipPath="url(#clip2_9125_8268)">
              <path
                d="M70.4594 75.6825C68.8614 75.6825 67.4822 75.2925 66.3218 74.5125C65.1614 73.7326 64.2673 72.6863 63.6395 71.3737C63.0212 70.0516 62.7121 68.5868 62.7121 66.9793V55.337H64.7096V66.9793C64.7096 68.1968 64.9331 69.3144 65.3801 70.3322C65.8272 71.3499 66.4787 72.1632 67.3348 72.7719C68.1908 73.3807 69.2324 73.685 70.4594 73.685C71.7149 73.685 72.7659 73.3807 73.6125 72.7719C74.4685 72.1536 75.1153 71.3356 75.5529 70.3179C75.9904 69.3001 76.2092 68.1873 76.2092 66.9793V55.337H78.2066V66.9793C78.2066 68.1873 78.0259 69.3192 77.6645 70.375C77.3125 71.4212 76.7989 72.3439 76.1236 73.1429C75.4578 73.9418 74.6445 74.5649 73.6838 75.0119C72.7327 75.459 71.6578 75.6825 70.4594 75.6825ZM83.6307 82.4453H81.6333V61.044H83.6307V63.712C84.1253 62.8084 84.8007 62.076 85.6567 61.5148C86.5128 60.9536 87.5305 60.6731 88.71 60.6731C89.7467 60.6731 90.7169 60.868 91.6205 61.258C92.5337 61.648 93.3326 62.1902 94.0175 62.8845C94.7023 63.5694 95.2397 64.3636 95.6297 65.2672C96.0197 66.1708 96.2147 67.141 96.2147 68.1778C96.2147 69.2145 96.0197 70.1895 95.6297 71.1026C95.2397 72.0157 94.7023 72.8195 94.0175 73.5138C93.3326 74.1987 92.5337 74.7361 91.6205 75.126C90.7169 75.516 89.7467 75.711 88.71 75.711C87.5305 75.711 86.5128 75.4304 85.6567 74.8692C84.8007 74.308 84.1253 73.5756 83.6307 72.672V82.4453ZM88.6957 62.6134C87.697 62.6134 86.8267 62.8655 86.0847 63.3696C85.3523 63.8642 84.7864 64.53 84.3869 65.3671C83.9874 66.2041 83.7877 67.141 83.7877 68.1778C83.7877 69.1955 83.9827 70.1277 84.3726 70.9742C84.7721 71.8207 85.3381 72.4961 86.0705 73.0002C86.8124 73.5043 87.6875 73.7564 88.6957 73.7564C89.6849 73.7564 90.5933 73.5091 91.4208 73.0145C92.2578 72.5198 92.9284 71.854 93.4325 71.017C93.9366 70.1705 94.1887 69.224 94.1887 68.1778C94.1887 67.16 93.9414 66.2326 93.4468 65.3956C92.9522 64.5491 92.2911 63.8737 91.4636 63.3696C90.6361 62.8655 89.7135 62.6134 88.6957 62.6134ZM110.235 53.9102H112.232V75.3115H110.235V72.6435C109.74 73.5566 109.06 74.2938 108.194 74.855C107.338 75.4066 106.32 75.6825 105.141 75.6825C104.104 75.6825 103.134 75.4875 102.23 75.0975C101.327 74.7075 100.528 74.1701 99.8335 73.4853C99.1487 72.7909 98.6113 71.9919 98.2213 71.0883C97.8313 70.1847 97.6363 69.2145 97.6363 68.1778C97.6363 67.141 97.8313 66.1708 98.2213 65.2672C98.6113 64.3541 99.1487 63.5551 99.8335 62.8702C100.528 62.1759 101.327 61.6337 102.23 61.2438C103.134 60.8538 104.104 60.6588 105.141 60.6588C106.32 60.6588 107.338 60.9394 108.194 61.5006C109.06 62.0522 109.74 62.7799 110.235 63.6835V53.9102ZM105.155 73.7421C106.173 73.7421 107.048 73.4948 107.781 73.0002C108.513 72.4961 109.074 71.8207 109.464 70.9742C109.864 70.1277 110.063 69.1955 110.063 68.1778C110.063 67.1315 109.864 66.1898 109.464 65.3528C109.065 64.5063 108.499 63.8357 107.766 63.3411C107.034 62.8465 106.164 62.5992 105.155 62.5992C104.147 62.5992 103.229 62.8512 102.402 63.3553C101.574 63.85 100.913 64.5205 100.418 65.3671C99.9239 66.2136 99.6766 67.1505 99.6766 68.1778C99.6766 69.2145 99.9286 70.1562 100.433 71.0027C100.937 71.8398 101.603 72.5056 102.43 73.0002C103.267 73.4948 104.176 73.7421 105.155 73.7421ZM127.274 61.044H129.272V75.3115H127.274L127.203 72.6578C126.737 73.5614 126.085 74.2938 125.248 74.855C124.411 75.4066 123.413 75.6825 122.252 75.6825C121.206 75.6825 120.226 75.4875 119.313 75.0975C118.4 74.698 117.596 74.1511 116.902 73.4567C116.208 72.7624 115.665 71.9587 115.275 71.0455C114.885 70.1324 114.69 69.1527 114.69 68.1064C114.69 67.0792 114.881 66.1137 115.261 65.2101C115.651 64.3065 116.184 63.5123 116.859 62.8274C117.544 62.1426 118.333 61.61 119.228 61.2295C120.131 60.8395 121.097 60.6445 122.124 60.6445C123.313 60.6445 124.35 60.9299 125.234 61.5006C126.119 62.0618 126.823 62.7989 127.346 63.712L127.274 61.044ZM122.209 73.7421C123.227 73.7421 124.102 73.4948 124.835 73.0002C125.567 72.4961 126.128 71.8207 126.518 70.9742C126.918 70.1277 127.117 69.1955 127.117 68.1778C127.117 67.1315 126.918 66.1898 126.518 65.3528C126.119 64.5063 125.553 63.8357 124.82 63.3411C124.088 62.8465 123.218 62.5992 122.209 62.5992C121.201 62.5992 120.279 62.8512 119.442 63.3553C118.614 63.85 117.953 64.5205 117.458 65.3671C116.973 66.2136 116.731 67.1505 116.731 68.1778C116.731 69.2145 116.983 70.1562 117.487 71.0027C117.991 71.8398 118.657 72.5056 119.484 73.0002C120.321 73.4948 121.23 73.7421 122.209 73.7421ZM139.418 63.0415H136.008L135.993 75.3115H133.996L134.01 63.0415H131.428V61.044H134.01L133.996 56.564H135.993L136.008 61.044H139.418V63.0415ZM147.851 75.6825C146.539 75.6825 145.34 75.3448 144.256 74.6695C143.181 73.9942 142.32 73.0905 141.673 71.9587C141.036 70.8173 140.718 69.557 140.718 68.1778C140.718 67.1315 140.903 66.1565 141.274 65.2529C141.645 64.3398 142.154 63.5408 142.801 62.856C143.457 62.1616 144.218 61.6195 145.083 61.2295C145.949 60.8395 146.872 60.6445 147.851 60.6445C148.907 60.6445 149.877 60.8538 150.762 61.2723C151.656 61.6908 152.422 62.2758 153.059 63.0272C153.706 63.7786 154.191 64.6584 154.514 65.6667C154.847 66.6749 154.985 67.764 154.928 68.9339H142.829C142.943 69.8376 143.229 70.646 143.685 71.3594C144.151 72.0728 144.741 72.6387 145.454 73.0573C146.177 73.4663 146.976 73.6755 147.851 73.685C148.802 73.685 149.658 73.4377 150.419 72.9431C151.19 72.4485 151.808 71.7684 152.274 70.9029L154.3 71.3737C153.729 72.6387 152.869 73.6755 151.718 74.484C150.567 75.283 149.278 75.6825 147.851 75.6825ZM142.772 67.3217H152.916C152.85 66.4371 152.579 65.6286 152.103 64.8962C151.637 64.1543 151.033 63.5646 150.291 63.1271C149.549 62.68 148.736 62.4565 147.851 62.4565C146.967 62.4565 146.158 62.6753 145.426 63.1128C144.693 63.5408 144.094 64.1258 143.628 64.8677C143.162 65.6001 142.877 66.4181 142.772 67.3217ZM168.977 53.9102H170.974V75.3115H168.977V72.6435C168.482 73.5566 167.802 74.2938 166.936 74.855C166.08 75.4066 165.063 75.6825 163.883 75.6825C162.846 75.6825 161.876 75.4875 160.972 75.0975C160.069 74.7075 159.27 74.1701 158.576 73.4853C157.891 72.7909 157.353 71.9919 156.963 71.0883C156.573 70.1847 156.378 69.2145 156.378 68.1778C156.378 67.141 156.573 66.1708 156.963 65.2672C157.353 64.3541 157.891 63.5551 158.576 62.8702C159.27 62.1759 160.069 61.6337 160.972 61.2438C161.876 60.8538 162.846 60.6588 163.883 60.6588C165.063 60.6588 166.08 60.9394 166.936 61.5006C167.802 62.0522 168.482 62.7799 168.977 63.6835V53.9102ZM163.897 73.7421C164.915 73.7421 165.79 73.4948 166.523 73.0002C167.255 72.4961 167.816 71.8207 168.206 70.9742C168.606 70.1277 168.805 69.1955 168.805 68.1778C168.805 67.1315 168.606 66.1898 168.206 65.3528C167.807 64.5063 167.241 63.8357 166.508 63.3411C165.776 62.8465 164.906 62.5992 163.897 62.5992C162.889 62.5992 161.971 62.8512 161.144 63.3553C160.316 63.85 159.655 64.5205 159.161 65.3671C158.666 66.2136 158.419 67.1505 158.419 68.1778C158.419 69.2145 158.671 70.1562 159.175 71.0027C159.679 71.8398 160.345 72.5056 161.172 73.0002C162.009 73.4948 162.918 73.7421 163.897 73.7421Z"
                fill="#FDE7D2"
                className={`${
                  isTab && !isInView
                    ? "translate-y-[-80%]"
                    : "translate-y-[-80%] max-lg:translate-y-[0%] group-hover:translate-y-[0%]"
                } transition-all duration-[600ms]`}
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_9125_8268"
              x="-61.2939"
              y="-61.5966"
              width="361.617"
              height="240.175"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="14.6382"
                result="effect1_foregroundBlur_9125_8268"
              />
            </filter>
            <clipPath id="clip0_9125_8268">
              <rect width="234" height="131" fill="white" />
            </clipPath>
            <clipPath id="clip1_9125_8268">
              <rect
                width="322.04"
                height="153.43"
                fill="white"
                transform="translate(-42.8613 -10.6338)"
              />
            </clipPath>
            <clipPath id="clip2_9125_8268">
              <rect
                width="112"
                height="50"
                fill="white"
                transform="translate(61 40)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
});

const Comp6 = React.memo(({ isInView }) => {
  const { isTab } = useResponsiveStates();

  return (
    <div
      className={
        "flex-1 relative group rounded-2xl overflow-hidden border-2 border-gray-600 min-h-full px-4 sm:px-7 py-7 sm:py-4 flex items-center"
      }
    >
      <div className="flex justify-center items-center gap-4 relative flex-shrink-0 w-full z-10 h-[2.9rem] sm:h-[5rem] lg:h-[3.75rem]">
        <div className="flex-grow rounded-full border-2 sm:border lg:border-2 border-gray-600 px-4 sm:px-7 flex items-center overflow-hidden h-full bg-white">
          <MessageIcon className={"sm:size-[2.5rem]"} />
          <input
            type="text"
            placeholder="Your Email Address"
            className="text-base sm:text-[2rem] lg:text-xl placeholder:text-gray-600 text-dark leading-0 align-middle min-w-0 h-full w-full outline-none border-none pl-4"
          />
          <button className="lg:hidden">
            <SendIcon className={"sm:size-[2.5rem]"} />
          </button>
        </div>
        <button className="max-lg:hidden flex-shrink-0  border-2 sm:border lg:border-2 border-gray-600 h-full w-[2.9rem] sm:w-[3.75rem] rounded-full grid place-content-center bg-white group-hover:translate-x-[0%] translate-x-[170%] transition-all duration-[600ms]">
          <SendIcon />
        </button>
      </div>

      <div
        className={cn(
          "absolute inset-0 w-full h-full transition-opacity duration-[600ms] bg-green-light grid place-content-center",
          isTab && !isInView
            ? "opacity-0"
            : "opacity-0 max-lg:opacity-100 group-hover:opacity-100"
        )}
      >
        <div
          style={{
            backgroundSize: "2.7rem 1.9rem",
            backgroundPosition: "0.1rem .4rem",
            backgroundImage:
              "radial-gradient(circle, #B4B4B4 2px, transparent 2px)",
          }}
          className="w-full h-full absolute"
        ></div>
      </div>
    </div>
  );
});

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView1 = useInView(ref1, { amount: 0.3, once: true });
  const isInView2 = useInView(ref2, { amount: 0.3, once: true });
  const isInView3 = useInView(ref3, { amount: 0.3, once: true });
  const isInView4 = useInView(ref4, { amount: 0.3, once: true });
  const isInView5 = useInView(ref5, { amount: 0.3, once: true });
  const isInView6 = useInView(ref6, { amount: 0.3, once: true });

  return (
    <section className="min-h-screen relative max-sm:pb-12 max-sm:pt-12 sm:pt-20 flex flex-col overflow-hidden">
      <div className="headerSpace"></div>
      <div className="flex flex-col gap-5 sm:gap-10 flex-grow">
        <div className="flex flex-col items-start gap-4 px-con">
          <h1 className="text-4xl sm:text-[3.5rem] leading-tight max-w-[15ch] sm:max-w-[20ch]">
            We're Killing Bugs, Adding Features, Making Magic
          </h1>
        </div>
        <div className="w-full flex max-lg:flex-col flex-grow">
          <div className="px-con max-sm:pb-12 sm:pb-20 flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[28.2%,28.2%,43.6%] gap-8">
              <div ref={ref1} className="lg:col-span-2 row-span-1">
                <Comp1 isInView={isInView1} />
              </div>
              <div
                ref={ref2}
                className="lg:col-start-3 col-span-1 lg:row-span-2 flex"
              >
                <Comp2 isInView={isInView2} />
              </div>
              <div
                ref={ref3}
                className="col-span-1 lg:row-start-2 row-span-1 flex"
              >
                <Comp3 isInView={isInView3} />
              </div>
              <div
                ref={ref4}
                className="col-span-1 lg:row-start-2 row-span-1 flex"
              >
                <Comp4 isInView={isInView4} />
              </div>
              <div ref={ref5} className="col-span-1 lg:row-start-3 row-span-1">
                <Comp5 isInView={isInView5} />
              </div>
              <div
                ref={ref6}
                className="lg:col-span-2 lg:row-start-3 row-span-1"
              >
                <Comp6 isInView={isInView6} />
              </div>
            </div>
          </div>

          <Image
            src={"/LoginHero.svg"}
            alt="logo"
            width={700}
            height={700}
            priority
            className="scale-[108%] lg:scale-[120%] origin-top-left max-sm:hidden mb-auto max-sm:pl-5 max-lg:pl-[7.5rem] w-full h-auto lg:max-w-[46.18rem]"
          />

          <Image
            src={"/LoginHeroM.svg"}
            alt="logo"
            width={700}
            height={700}
            priority
            className="sm:hidden mt-auto max-sm:pl-5 max-lg:pl-[7.5rem] w-full h-auto lg:max-w-[46.18rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
