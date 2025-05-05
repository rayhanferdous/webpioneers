import { Badge } from "@/app/(components)/ui/Badge";
import Button from "@/app/(components)/ui/Button";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreMore = ({ data }) => {
  return (
    <section className="p-con container-2560 flex flex-col gap-8 sm:gap-16">
      <div className="flex gap-2 justify-between items-center">
        <div className="flex flex-col gap-2">
          <MountAnim>
            <Badge nodot variant="yellow">
              Portfolio
            </Badge>
          </MountAnim>
          <MountAnim>
            <h1 className="heading2">Explore More</h1>
          </MountAnim>
        </div>
        <MountAnim className={"max-sm:hidden"}>
          <Button btnType="light">All Portfolio</Button>
        </MountAnim>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.map((item, index) => {
          return (
            <Link
              href={`/Portfolio/${item.slug}`}
              key={index}
              className="sm:border-2 sm:border-gray-600 sm:rounded-[1.2rem] overflow-hidden col-span-1 flex flex-col"
            >
              <div className="rounded-2xl sm:rounded-b-2xl overflow-hidden w-full relative">
                {item.thumbnailM ? (
                  <>
                    <Image
                      src={item.thumbnail}
                      alt={`${item.title} thumbnail`}
                      width={1920}
                      height={1080}
                      className="max-sm:aspect-square w-full object-cover max-sm:hidden"
                    />
                    <Image
                      src={item.thumbnailM}
                      alt={`${item.title} thumbnail`}
                      width={1000}
                      height={1000}
                      className="max-sm:aspect-square w-full object-cover sm:hidden"
                    />
                  </>
                ) : (
                  <Image
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    width={1920}
                    height={1080}
                    className="max-sm:aspect-square w-full object-cover"
                  />
                )}
                <div className="absolute bottom-2.5 left-2.5 sm:hidden flex gap-2 flex-wrap w-full">
                  {item.badges?.map((badgeItem, idx) => (
                    <Badge
                      key={idx}
                      nodot
                      className="max-sm:h-[2rem] text-gray-600"
                      outline
                    >
                      {badgeItem}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="max-sm:py-5 p-0 sm:p-6 flex flex-col gap-2 sm:gap-4">
                <h4 className="font-medium text-2xl sm:text-3xl leading-none">
                  {item.title}
                </h4>
                <p className="font-medium text-gray-700 text-lg sm:text-xl leading-none">
                  {item.sub}
                </p>
                <div className="max-sm:hidden flex items-start justify-between gap-10">
                  <div className="mt-2 flex gap-4 flex-wrap">
                    {item.badges?.map((badgeItem, idx) => (
                      <Badge key={idx} nodot className="text-gray-600" outline>
                        {badgeItem}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="circle"
                    textClass="hidden"
                    btnType="dark"
                    iconClass="rotate-[-45deg]"
                  ></Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <MountAnim className={"w-full sm:hidden"}>
        <Button btnType="light" full>
          All Portfolio
        </Button>
      </MountAnim>
    </section>
  );
};

export default ExploreMore;
