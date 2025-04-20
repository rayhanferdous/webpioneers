import React from "react";
import { cn } from "@/app/(utils)/utils";
import Image from "next/image";
import { Badge } from "@/app/(components)/ui/Badge";

const Products = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {data.map((product, index) => {
        return (
          <div
            key={index}
            className={cn(
              "overflow-hidden rounded-2xl col-span-1 relative",
              product.class
            )}
          >
            {product.imageM ? (
              <>
                <Image
                  src={product.image}
                  width={1000}
                  height={1000}
                  alt="Portfolio Image"
                  className="w-full max-sm:hidden"
                />
                <Image
                  src={product.imageM}
                  width={1000}
                  height={1000}
                  alt="Portfolio Image"
                  className="w-full sm:hidden"
                />
              </>
            ) : (
              <Image
                src={product.image}
                width={1000}
                height={1000}
                alt="Portfolio Image"
                className="w-full"
              />
            )}

            <div className="p-5 sm:p-10 absolute top-0 left-0 flex gap-4">
              {product.badges?.map((badgeItem, idx) => (
                <Badge
                  key={idx}
                  nodot
                  className={"max-sm:h-[2rem] text-gray-600"}
                  outline
                >
                  {badgeItem}
                </Badge>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
