import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function FooterContent({ setOpenModal }) {
  const footerLinks = [
    {
      title: "Quick",
      links: [
        {
          label: "Home",
          src: "/",
          color: "yellow",
        },
        {
          label: "Portfolio",
          src: "/Portfolio",
          color: "green",
        },
        {
          label: "About Us",
          src: "/AboutUs",
          color: "blue",
        },
        {
          label: "Services",
          src: "/Services",
          color: "purple",
        },
      ],
    },
    {
      title: "Explore",
      links: [
        {
          label: "Login",
          src: "/Login",
          color: "yellow",
        },
        {
          label: "Blogs",
          src: "/Blogs",
          color: "green",
        },
        {
          label: "FAQ's",
          src: "/FAQ",
          color: "purple",
        },
        {
          label: "Pricing",
          src: "/Pricing",
          color: "blue",
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          label: "LinkedIn",
          src: "/",
          color: "blue",
        },
        {
          label: "Instagram",
          src: "/Instagram",
          color: "red",
        },
        {
          label: "Dribble",
          src: "/Dribble",
          color: "purple",
        },
        {
          label: "Behance",
          src: "/Behance",
          color: "blue",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        {
          label: "Privacy",
          src: "/Privacy",
          color: "green",
        },
        {
          label: "Terms",
          src: "/Terms",
          color: "blue",
        },
      ],
    },
  ];

  return (
    <div className="py-12 px-con">
      <div className="relative flex border-2 border-gray-600 rounded-2xl overflow-hidden">
        <div className="w-full p-6 sm:p-16 max-sm:gap-y-6 max-sm:gap-x-4 sm:gap-8 grid grid-cols-[1fr_1fr] sm:grid-cols-[40%_1fr_1fr_1fr_1fr]">
          {/* Reach Us Section */}
          <div className="col-span-2 sm:col-span-1 space-y-3.5 sm:space-y-9">
            <h3 className="text-dark text-2xl sm:text-4xl leading-tight mb-3">
              Reach Us
            </h3>
            <Link
              href={"mailto:business@webpioneers.com"}
              className="flex items-center gap-2 text-xl sm:text-[1.625rem]"
            >
              <Image
                src={"/icons/mail.svg"}
                alt={"mail"}
                width={30}
                height={30}
                className="text-xs size-6 sm:size-8"
              />
              <span>business@webpioneers.com</span>
            </Link>
            <Link
              href={"tel:+1 (631) 530-2666"}
              className="flex items-center gap-2 text-xl sm:text-[1.625rem]"
            >
              <Image
                src={"/icons/phone.svg"}
                alt={"phone"}
                width={30}
                height={30}
                className="text-xs size-6 sm:size-8"
              />
              <span>+1 (631) 530-2666</span>
            </Link>
            <Button onClick={() => setOpenModal((prev) => !prev)} className={"px-8 sm:px-12"}>
              Book Your Free Consultation{" "}
            </Button>
          </div>

          {/* Dynamic Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="col-span-1 space-y-3 sm:space-y-7">
              <h3 className="px-1.5 sm:px-3 text-dark text-2xl sm:text-4xl leading-tight">
                {section.title}
              </h3>
              <ul className="sm:space-y-4">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.src}
                      // style={{
                      //   "--bg": Colors[link.color].light,
                      // }}
                      className="w-fit block rounded-full"
                    >
                      <Button
                        className={`hover:text-dark px-2 sm:px-4 h-[2.5rem] sm:h-[3.125rem] text-xl sm:text-[1.625rem] whitespace-nowrap bg-transparent text-gray-700 border-none ${false ? "sm:hover:bg-yellow-light" : ""
                          }`}
                        iconClass={"opacity-0 transition-opacity duration-200"}
                      >
                        {link.label}
                      </Button>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
