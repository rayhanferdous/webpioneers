"use client";

import React from "react";
import { notFound } from "next/navigation";
import { Portfolios } from "@/app/(constants)/portfolios";
import Hero from "./(components)/Hero";
import Feedback from "./(components)/Feedback";
import ExploreMore from "./(components)/ExploreMore";
import Detail from "./(components)/Detail";
import Products from "./(components)/Products";

const PortfolioItemPage = ({ params }) => {
  const { slug } = React.use(params);

  const CurrentPortfolio = Portfolios.find((item) => item.slug === slug);

  if (!CurrentPortfolio) {
    notFound();
  }

  // Find the index of the current portfolio
  const currentIndex = Portfolios.findIndex((item) => item.slug === slug);

  // Get the next 2 portfolios with wrap-around
  const nextPortfolios = [];
  for (let i = 1; i <= 2; i++) {
    const nextIndex = (currentIndex + i) % Portfolios.length;
    nextPortfolios.push(Portfolios[nextIndex]);
  }

  return (
    <>
      <Hero data={CurrentPortfolio} />
      <div className="pb-6 sm:pb-10 px-con flex flex-col gap-10 sm:gap-20">
        {CurrentPortfolio.detail && <Detail data={CurrentPortfolio.detail} />}
        {CurrentPortfolio.products && (
          <Products data={CurrentPortfolio.products} />
        )}
      </div>
      {CurrentPortfolio.feedback && (
        <Feedback data={CurrentPortfolio.feedback} />
      )}
      <ExploreMore data={nextPortfolios} />
    </>
  );
};

export default PortfolioItemPage;
