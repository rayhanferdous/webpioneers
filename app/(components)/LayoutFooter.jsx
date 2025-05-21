"use client";

import React, { useState } from "react";
import Footer from "./Footer";
import Banner from "./Banner";
import { usePathname } from "next/navigation";
import Modal from "./ui/Modal";

const LayoutFooter = () => {
  const [openModal, setOpenModal] = useState(false);

  const pathname = usePathname(); // Get current route
  const hideOnRoutes = ["/Login", "/Signup"]; // Add any routes where you want to hide these components
  const shouldHide = hideOnRoutes.includes(pathname);

  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={() =>
          setOpenModal((prev) => !prev)
        }
      />
      {!shouldHide && <Banner />}
      {!shouldHide && <Footer openModal={openModal}
        setOpenModal={setOpenModal} />}
    </>
  );
};

export default LayoutFooter;
