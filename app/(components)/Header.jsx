"use client";

import Button from "./ui/Button";
import Link from "next/link";
import Logo from "../(assets)/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavItems } from "../(constants)/navItems";
import { Colors } from "../(constants)/colors";
import { useEffect, useState } from "react";
import Hamburger from "./ui/Hamburger";
import Sidebar from "./ui/Sidebar";
import { getGlobalLenis } from "./LenisSmooth";

const Header = () => {
  let [activeTab, setActiveTab] = useState("/");
  let [hoverTab, setHoverTab] = useState();
  const pathname = usePathname();
  const transition = { type: "spring", stiffness: 300, damping: 30 };

  const [isOpen, setIsOpen] = useState(false);

  const handleNavToggle = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const handleNavClose = () => {
    setIsOpen(false);
  };

  const isLinkActive = (src) => {
    if (src === "/") {
      return pathname === src;
    } else {
      return pathname.includes(src);
    }
  };

  useEffect(() => {
    const lenis = getGlobalLenis();

    if (isOpen) {
      document.body.classList.add("body-no-scroll");
      lenis?.stop();
    } else {
      document.body.classList.remove("body-no-scroll");
      lenis?.start();
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
      lenis?.start();
    };
  }, [isOpen]);

  return (
    <header className="pointer-events-none absolute top-0 z-[999] left-0 right-0 py-6 px-con flex justify-between items-center whitespace-nowrap">
      {/* Left */}
      <Link href={"/"} className="pointer-events-auto cursor-pointer">
        <Logo className="h-[3.75rem] sm:h-[5.27rem] lg:h-[5.625rem] w-auto" />
      </Link>

      {/* Center */}
      <nav
        onMouseLeave={() => {
          setTimeout(() => {
            setHoverTab(activeTab);
          }, 300);
        }}
        className="max-sm:hidden pointer-events-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-4 bg-white border border-[#DFDFDF] rounded-full p-3.5 z-50"
      >
        {NavItems.map((item) => {
          const linkActive = activeTab === item.id || isLinkActive(item.src);
          return (
            <Link
              href={item.src}
              key={item.id}
              name={item.label}
              style={{
                color: linkActive
                  ? Colors[item.color].dark
                  : hoverTab === item.id
                    ? "var(--dark)"
                    : "#888581",
              }}
              onMouseEnter={() => {
                setHoverTab(item.id);
              }}
              onClick={() => {
                if (activeTab != item.id) {
                  setActiveTab(item.id);
                }
              }}
              className={`text-[1.375rem] relative flex items-center justify-center px-3 py-2 leading-none font-medium rounded-full transition-colors duration-300 ease-in-out cursor-pointer`}
            >
              <motion.div
                className="relative z-30 overflow-hidden origin-left w-0"
                animate={{
                  scale: linkActive ? 1 : 0,
                  width: linkActive ? "auto" : "0",
                }}
                transition={transition}
              >
                <motion.div
                  style={{
                    backgroundColor: Colors[item.color].DEFAULT,
                  }}
                  transition={transition}
                  className="size-2.5 rounded-full mr-2"
                ></motion.div>
              </motion.div>

              {linkActive && (
                <motion.span
                  layoutId="bubble"
                  className={`absolute inset-0 rounded-full z-20`}
                  style={{
                    backgroundColor: Colors[item.color].light,
                  }}
                  transition={transition}
                >
                  <div></div>
                </motion.span>
              )}
              <span className="relative z-20">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Right */}
      <div className="cursor-pointer pointer-events-auto max-sm:hidden flex items-center gap-5">
        <Link
          href="/Login"
          className="text-[1.35rem] font-medium hover:underline"
        >
          Login
        </Link>
        <Button>Let's Get Started</Button>
      </div>
      <button
        className={`cursor-pointer pointer-events-auto sm:hidden relative`}
        onClick={handleNavToggle}
      >
        <Hamburger active={isOpen} />
      </button>
      <AnimatePresence>
        {isOpen && <Sidebar handleClose={handleNavClose} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;
