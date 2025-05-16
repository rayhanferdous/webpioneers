import { forwardRef } from "react";
import CardText from "./CardText";
import Image from "next/image"; // Uncomment this if using Next.js Image

const Card = forwardRef(
    (
        {
            tag,
            image = "/blogs/blog-default-thumb.png",
            imageMobile,
            title,
            desc,
            minsToRead,
            link,
            colSpanTwo = false,
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={`BlogItem font-urbanist relative border-2 border-[#686868] rounded-[18px] 
                    ${colSpanTwo ? "min-[1370px]:col-span-2 max-h-[756px]" : ""
                    }`}
            >

                <span className="absolute top-4 left-4 font-medium bg-white text-black px-4 py-2.5 !leading-0 rounded-full text-sm md:text-xl xl:text-[15px]">
                    {tag}
                </span>

                {imageMobile && <img
                    className={`"max-sm:h-[256px] object-cover min-[1370px]:h-full min-w-full rounded-[14px] min-[1370px]:hidden`}
                    src={imageMobile}
                    width={539}
                    height={359}
                    alt={title}
                />}
                <img
                    className={`${colSpanTwo
                        ? "object-cover min-[1072px]:h-full min-w-full rounded-[14px] hidden min-[1370px]:block"
                        : "h-auto min-w-full rounded-[16.5px]"
                        }`}
                    src={image}
                    // width={539}
                    // height={359}
                    alt={title}
                />

                <CardText
                    title={title}
                    desc={desc}
                    minsToRead={minsToRead}
                    link={link}
                    colSpanTwo={colSpanTwo}
                />
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
