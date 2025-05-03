import Image from "next/image"
import CardText from "./CardText"

const CardSpan = ({ tag, colSpanTwo, image = '/blogs/blog-1.png', title, desc, minsToRead, link = "/#" }) => {
    return (
        <div className="font-urbanist relative border-2 border-[#686868] rounded-[18px] md:col-span-2 max-h-[756px]">
            <span className="absolute top-4 left-4 font-medium  bg-white text-black px-4 py-2.5 !leading-0 rounded-full text-sm md:text-xl xl:text-[15px] ">{tag}</span>

            <Image className="max-sm:h-[256px] object-cover h-full min-w-full rounded-[14px]" width="539" height="359" alt="The most useful speed optimisation tactics for webflow websites" src={image} />
            <CardText colSpanTwo={colSpanTwo} title={title} desc={desc} minsToRead={minsToRead} link={link} />
        </div>
    )
}

export default CardSpan