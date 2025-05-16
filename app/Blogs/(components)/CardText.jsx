import Link from 'next/link'

const CardText = ({ colSpanTwo, title, desc, minsToRead, link = "/#" }) => {
    return (
        <div className={`${colSpanTwo ? 'min-[1370px]:absolute md:bottom-9 md:left-9 min-[1370px]:bg-white min-[1370px]:max-w-[400px] 2xl:max-w-[549px] rounded-2xl' : ''} p-6 flex flex-col h-full justify-between gap-4`}>
            <div className="flex flex-col gap-4 md:gap-5">
                <h3 className={`text-[21px] md:text-[18px] lg:text-[21px] 2xl:text-[28px]"} font-medium text-dark`}>{title}</h3>
                <p className="font-medium text-[#7A7A7A] text-[18px] lg:text-[16px] xl:text-[15px] 2xl:text-[20px]">
                    {desc}
                </p>
            </div>
            <div className="flex h-fit items-center justify-between">
                <span className="font-medium text-[#7A7A7A] text-[20px] lg:text-[15px] 2xl:text-[20px]">{minsToRead}</span>
                <Link href={link}>
                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24.5" cy="24.5" r="24.5" fill="#1D1D1D" />
                        <path d="M17.4297 25H31.5718M31.5718 25L24.5008 17.9289M31.5718 25L24.5008 32.0711" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default CardText