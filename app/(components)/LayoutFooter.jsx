"use client";

import React from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import { usePathname } from "next/navigation";

const LayoutFooter = () => {
  const pathname = usePathname(); // Get current route
  const hideOnRoutes = ["/Login", "/Signup"]; // Add any routes where you want to hide these components
  const shouldHide = hideOnRoutes.includes(pathname);

  return (
    <>
      {!shouldHide && <Banner />}
      {!shouldHide && <Footer />}
    </>
  );
};

export default LayoutFooter;
