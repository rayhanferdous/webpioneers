import { Badge } from "@/app/(components)/ui/Badge";
import MountAnim from "@/app/(components)/ui/MountAnim";
import Image from "next/image";
import React from "react";

const Data = [
  {
    src: "/justin.png",
    name: "Justin Bundt",
    detail: `Justin is the “what if we did this?” guy—the brain behind starting the agency. He's the one who keeps the team moving forward, blending creativity with a sharp business mind. Whether it/s tackling the next big idea or making sense of our caffeine-fueled brainstorming sessions, Justin knows how to turn chaos into a solid plan. He's the kind of leader who balances ambition with just the right amount of sarcasm to keep things interesting.`,
    keys: [
      "💡 Idea Guy",
      "📅 Master Planner",
      "🧠 Business Brain",
      "🔧 Problem Solver",
    ],
    find: "Find @Justin",
  },
  {
    src: "/zoheb.png",
    name: "Zoheb Hassan",
    detail: `Zoheb is the design nerd who lives for great user experiences. He's the guy who'll move a button three pixels to the left for perfection and somehow make it fun. Obsessed with clean, modern designs, he's all about making things not just look good but feel good too. Whether it's crafting a sleek interface or experimenting with bold ideas, Zoheb's mantra is simple: if it's not user-friendly, it's not done.`,
    keys: [
      "🎨 Pixel Obsessed",
      "🖌️ Design Freak",
      "👥 User Advocate",
      "🤓 Creative Geek",
    ],
    find: "Find @Zoheb",
  },
];
const Founders = () => {
  return (
    <section className="pb-12 container-2560 sm:pb-24 px-con flex flex-col gap-5 sm:gap-14">
      <div className="w-full flex flex-col gap-5">
        <MountAnim className="flex max-sm:flex-col items-start sm:items-center gap-5">
          <Badge nodot variant="yellow">
            Founders
          </Badge>
        </MountAnim>
        <p className="text-[1.375rem] sm:text-[2rem] text-gray-700 font-medium">
          <span className="text-dark">We're the founders</span> who thought,{" "}
          <span className="text-prim">“Hey, we can do this better!”</span> So,
          we did. Justin Bundt brings the big ideas and keeps us on track, while
          Zoheb Hassan adds the magic with pixel-perfect designs. Together, we
          created something that does't just get the job done—but makes it fun,
          modern, and user-friendly.
        </p>
      </div>
      <div className="relative flex flex-col gap-5 sm:gap-20 border-2 border-gray-600 rounded-2xl overflow-hidden p-5 sm:p-20">
        {Data.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index === 0 ? "" : "sm:flex-row-reverse"
                } flex max-sm:flex-col gap-5 sm:gap-20 w-full items-start`}
            >
              <Image
                src={item.src}
                alt="bg"
                width={500}
                height={500}
                className="w-[12.625rem] sm:w-[21.5rem] h-auto"
              />
              <div className="flex flex-col gap-4 sm:gap-6 items-start">
                <h2 className="text-dark text-2xl sm:text-5xl leading-none">
                  {item.name}
                </h2>
                <p className="font-medium text-gray-700 text-base sm:text-[1.6rem] 2xl:text-[1.375rem] leading-snug sm:leading-tight">
                  {item.detail}
                </p>
                <div className="flex flex-wrap justify-start gap-x-4 gap-y-2">
                  {item.keys?.map((li, idx) => {
                    return (
                      <>
                        <Badge key={idx} nodot outline>
                          {li}
                        </Badge>
                        {idx === 1 && <div className="w-full"></div>}
                      </>
                    );
                  })}
                </div>
                <div>
                  <p className="font-medium text-gray-700 text-[1.375rem] leading-tight">
                    {item.find}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <Image
                      src={"/icons/linkedinLogo.svg"}
                      alt="facebook"
                      width={35}
                      height={35}
                      className="size-[1.85rem] sm:size-[2.175rem] object-contain"
                    />
                    <Image
                      src={"/icons/instagramLogo.svg"}
                      alt="facebook"
                      width={35}
                      height={35}
                      className="size-[1.85rem] sm:size-[2.175rem] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Founders;
