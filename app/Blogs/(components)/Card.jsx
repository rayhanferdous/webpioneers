import Image from "next/image"
import CardText from "./CardText"

const Card = ({ colSpanTwo, tag, image = '/blogs/blog-1.png', title, desc, minsToRead, link = "/#" }) => {
    return (
        <div className={`font-urbanist relative border-2 border-[#686868] rounded-[16px] md:relative ${colSpanTwo ? "md:col-span-2" : ""} `}>
            <span className="absolute top-4 left-4 font-medium  bg-white text-black px-4 py-2.5 !leading-0 rounded-full text-sm md:text-xl xl:text-[15px] ">
                {tag}
            </span>
            <Image className={`${colSpanTwo ? "md:min-h-full" : ""} max-md:h-full max-md:max-h-[252px] min-w-full rounded-[14px]`} src={image} width={539} height={359} alt={title} />
            <CardText colSpanTwo={colSpanTwo} title={title} desc={desc} minsToRead={minsToRead} link={link} />
        </div>
    )
}

export default Card