import Link from "next/link";
import { forwardRef } from "react";

const SimilarPostCard = forwardRef(({ image = '/blogs/blog-default-thumb.png', title, date, minsToRead, link }, ref) => {
    return (
        <Link href={link}
            ref={ref}
            className="font-urbanist flex items-center gap-6"
        >

            <img
                className="w-[40%] h-auto rounded-[14px]"
                src={image}
                width={354}
                height='auto'
                alt={title}
            />

            <div className={`w-[56%] flex flex-col gap-[18px] justify-center  md:gap-6 lg:gap-4 2xl:gap-9`}>
                <div className="flex flex-col gap-4 md:gap-5">
                    <h3 className={`md:text-lg lg:text-xl 2xl:text-[21px] font-medium text-dark`}>{title}</h3>
                </div>
                <div className="flex items-center gap-2.5 font-urbanist font-medium text-lg md:text-xl lg:2xl text-gray-700">
                    <span>{date}</span>
                    <span className="min-h-1.5 min-w-1.5 max-h-1.5 max-w-1.5 rounded-full bg-black"></span>
                    <span>{minsToRead}</span>
                </div>
            </div>
        </Link>
    );
});

SimilarPostCard.displayName = "SimilarPostCard";

export default SimilarPostCard;
