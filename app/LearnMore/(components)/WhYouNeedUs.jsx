"use client";
import Image from "next/image";
import StaggerMount from "@/app/(components)/ui/StaggerMount";
import MountAnim from "@/app/(components)/ui/MountAnim";
import { Badge } from "@/app/(components)/ui/Badge";
import Icon from "@/app/(components)/ui/Icon";
import { cn } from "@/app/(utils)/utils";
import { useRef } from "react";

const DetailCard = ({ img, title, detail, pclass, scrollar = false }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-lg sm:text-[1.8rem] xl:text-2xl font-medium">
          {title}
        </h4>
        <p
          className={cn(
            "text-gray-700 text-base sm:text-[1.375rem] 2xl:text-xl leading-tight max-w-[27ch]",
            pclass
          )}
        >
          {detail}
        </p>
      </div>
      <div className="w-full relative">
        <div
          ref={scrollContainerRef}
          className={`${
            scrollar
              ? "max-sm:overscroll-y-hidden max-sm:overflow-x-auto max-sm:customScrollbarM max-sm:pb-6 max-sm:mb-2 max-sm:max-w-[calc(100vw-5rem-2px)]"
              : ""
          } w-full h-fit`}
        >
          <Image
            src={img}
            alt="Learn More Image"
            width={600}
            height={600}
            priority
            className={`${scrollar ? "min-w-[44rem]" : ""} w-full h-auto mt-7`}
          />
        </div>
        {scrollar && (
          <button
            onClick={scrollLeft}
            className="sm:hidden absolute -bottom-[calc(0.75rem-1px)] left-0 z-50"
          >
            <svg
              className="size-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9L22 15C22 20 20 22 15 22L9 22C4 22 2 20 2 15L2 9C2 4 4 2 9 2L15 2C20 2 22 4 22 9Z"
                stroke="#080808"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.4595 8.47021L9.93945 12.0002L13.4595 15.5302"
                stroke="#959595"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
        {scrollar && (
          <button
            onClick={scrollRight}
            className="sm:hidden absolute -bottom-[calc(0.75rem-1px)] right-0 z-50"
          >
            <svg
              className="size-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 9L2 15C2 20 4 22 9 22L15 22C20 22 22 20 22 15L22 9C22 4 20 2 15 2L9 2C4 2 2 4 2 9Z"
                stroke="#080808"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.5405 8.47021L14.0605 12.0002L10.5405 15.5302"
                stroke="#959595"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

const WhYouNeedUs = () => {
  return (
    <section className="pt-12 sm:pt-24 pb-6 sm:pb-12 px-con flex flex-col gap-10 sm:gap-20">
      <div className="flex flex-col gap-4 sm:gap-10">
        <div className="flex items-start sm:items-center gap-2 sm:gap-5 flex-wrap max-sm:flex-col">
          <MountAnim>
            <Badge nodot variant="yellow">
              Empower Your Growth
            </Badge>
          </MountAnim>
          <MountAnim>
            <h1 className="heading2">Why You Need Us</h1>
          </MountAnim>
        </div>
        <MountAnim>
          <p className="text-[1.4rem] sm:text-[2rem] font-medium text-gray-900 mb-4 !leading-tight">
            <span className="text-dark">As an agency founder,</span> managing
            multiple projects, client relationships, and payments can quickly
            become overwhelming. We built this CRM to solve these problems by
            streamlining the entire process in one simple, easy-to-use platform.
            <span className="text-dark"> Our vision</span> is to empower
            agencies like yours to focus on what truly matters—delivering
            exceptional services to clients and growing your business.
            <br />
            <br />
            <span className="text-dark">The subscription-based</span> model
            provides consistent, predictable revenue, allowing you to focus on
            long-term success rather than the daily hustle of chasing payments
            or handling revisions. By adopting our dashboard, you can eliminate
            the chaos of juggling multiple tools and manual processes. This CRM
            ensures that every project is tracked, payments are handled
            effortlessly, and communication is streamlined—helping you save
            time, reduce stress, and scale faster.
            <br />
            <br />
            It's time to take your agency to the next level and work smarter,
            not harder.
          </p>
        </MountAnim>
      </div>
      <div className="flex flex-col rounded-2xl border-2 sm:border lg:border-2 border-gray-600 overflow-hidden text-dark">
        {/* Section 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-[.8fr_1fr_1fr] xl:grid-cols-3">
          <StaggerMount className="p-5 sm:p-7 max-sm:border-b-2 sm:border-r lg:border-r-2 border-gray-600 flex flex-col gap-6">
            <div className="size-[5rem] sm:size-[7.25rem] xl:size-[6.25rem] rounded-full grid place-content-center bg-yellow-light">
              <div className="size-[3.125rem] sm:size-[4.5rem] xl:size-14">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/ontvaefu.json"}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-[2rem] font-medium">
              Project & Task <br className="xl:hidden" />
              Management
            </h3>
            <ul className="text-lg sm:text-[1.6rem] xl:text-2xl font-medium *:pb-5 xl:*:py-3 leading-snug text-gray-700 max-w-[28ch] sm:max-w-[22ch] xl:max-w-[28ch]">
              <li>📝 Easily create projects and add your team members.</li>
              <li>📆 Organize tasks with set deadlines and priorities.</li>
              <li>🔄 Share quick updates and receive instant feedback.</li>
              <li>✅ Track progress to keep projects moving forward.</li>
            </ul>
          </StaggerMount>
          <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2">
            <StaggerMount className="border-b-2 sm:border-b lg:border-b-2 sm:border-r lg:border-r-2 border-gray-600 flex flex-col justify-between gap-2">
              <div className="p-5 sm:p-7 flex flex-col gap-2">
                <h4 className="text-lg sm:text-[1.8rem] xl:text-2xl font-medium">
                  Effortless Project Creation
                </h4>
                <p className="text-gray-700 text-base sm:text-[1.375rem] 2xl:text-xl leading-tight max-w-[30ch]">
                  Easily create projects by adding a title and description, and
                  you're good to go.
                </p>
              </div>
              <Image
                src={"/LearnMore/section1a.svg"}
                alt="Effortless Project Creation"
                width={600}
                height={600}
                priority
                className="w-[82%] sm:w-[76%] h-auto ml-auto mt-auto"
              />
            </StaggerMount>
            <StaggerMount className="border-b-2 sm:border-b lg:border-b-2 border-gray-600 flex flex-col gap-2">
              <div className="p-5 sm:p-7 flex flex-col gap-2">
                <h4 className="text-lg sm:text-[1.8rem] xl:text-2xl font-medium">
                  Stay on Top of Tasks
                </h4>
                <p className="text-gray-700 text-base sm:text-[1.375rem] 2xl:text-xl leading-tight max-w-[27ch]">
                  Set task priorities, track progress, and add due dates to stay
                  on track.
                </p>
              </div>
              <Image
                src={"/LearnMore/section1b.svg"}
                alt="Learn More Image"
                width={600}
                height={600}
                priority
                className="w-full h-auto px-5 sm:px-7"
              />
            </StaggerMount>
            <StaggerMount className="sm:col-span-2 p-5 sm:p-7 flex flex-col gap-2">
              <DetailCard
                scrollar
                title={"Tasks, Simplified Together"}
                detail={
                  "Monitor task details, progress, and descriptions, keeping everything on track."
                }
                pclass={"max-w-[32ch]"}
                img={"/LearnMore/section1c.svg"}
              />
            </StaggerMount>
          </div>
        </div>
        {/* Section 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 sm:border-t lg:border-t-2 border-gray-600">
          <div className="sm:col-span-2 grid sm:border-r lg:border-r-2 border-gray-600">
            <StaggerMount className="p-5 sm:p-7 flex flex-col">
              <DetailCard
                scrollar
                title={"Collaborate Seamlessly"}
                detail={
                  "Invite guests or teams to collaborate on projects and streamline team efforts."
                }
                pclass={"max-w-[30ch]"}
                img={"/LearnMore/section2a.svg"}
              />
            </StaggerMount>
            <StaggerMount className="sm:hidden border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
              <DetailCard
                title={"Instant Messaging"}
                detail={
                  "Communicate directly with experts and receive daily updates on ongoing projects."
                }
                pclass={"max-w-[33ch]"}
                img={"/LearnMore/section2d.svg"}
              />
            </StaggerMount>
            <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
              <DetailCard
                scrollar
                title={"Easy File Access"}
                detail={
                  "Upload and store assets in one place for easy access by your team anytime."
                }
                pclass={"max-w-[30ch]"}
                img={"/LearnMore/section2b.svg"}
              />
            </StaggerMount>
            <StaggerMount className="sm:hidden border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
              <DetailCard
                title={"Media Sharing"}
                detail={
                  "Attach and share media or assets in chats, keeping the team focused and productive."
                }
                pclass={"max-w-[33ch]"}
                img={"/LearnMore/section2e.svg"}
              />
            </StaggerMount>
            <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 flex max-sm:flex-col justify-between gap-7 p-5 sm:p-7">
              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col gap-2">
                  <h4 className="text-lg sm:text-[1.8rem] xl:text-2xl font-medium">
                    Sync & Stay Updated
                  </h4>
                  <p className="text-gray-700 text-base sm:text-[1.375rem] 2xl:text-xl leading-tight max-w-[37ch]">
                    Link your Google Calendar to stay on top of project updates,
                    with more integrations to come.
                  </p>
                </div>
                <Image
                  src={"/LearnMore/calendar.png"}
                  alt="calender"
                  width={300}
                  height={200}
                  priority
                  className="h-14 sm:h-[5.5rem] w-auto mt-3"
                />
                <button className="h-[1.6rem] sm:h-10 px-3 bg-prim text-white rounded-md text-[0.65rem] sm:text-base font-medium">
                  Connect Calendar
                </button>
              </div>
              <Image
                src={"/LearnMore/section2c.svg"}
                alt="Learn More Image"
                width={441}
                height={400}
                priority
                className="w-[27.5rem] h-auto"
              />
            </StaggerMount>
          </div>
          <div className="max-sm:hidden grid">
            <StaggerMount className="p-5 sm:p-7">
              <DetailCard
                title={"Instant Messaging"}
                detail={
                  "Communicate directly with experts and receive daily updates on ongoing projects."
                }
                pclass={"max-w-[33ch]"}
                img={"/LearnMore/section2d.svg"}
              />
            </StaggerMount>
            <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
              <DetailCard
                title={"Media Sharing"}
                detail={
                  "Attach and share media or assets in chats, keeping the team focused and productive."
                }
                pclass={"max-w-[33ch]"}
                img={"/LearnMore/section2e.svg"}
              />
            </StaggerMount>
          </div>
        </div>
        {/* Section 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] border-t-2 sm:border-t lg:border-t-2 border-gray-600">
          <StaggerMount className="p-5 sm:p-7 max-sm:border-b-2 sm:border-r lg:border-r-2 border-gray-600 flex flex-col gap-6">
            <div className="size-[5rem] sm:size-[7.25rem] xl:size-[6.25rem] rounded-full grid place-content-center bg-yellow-light">
              <div className="size-[3.125rem] sm:size-[4.5rem] xl:size-14">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/cufxlbng.json"}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-[2rem] font-medium">
              Subscription <br className="xl:hidden" />
              Management
            </h3>
            <ul className="text-lg sm:text-[1.6rem] xl:text-2xl font-medium *:pb-5 xl:*:py-3 leading-snug text-gray-700 max-w-[28ch] sm:max-w-[22ch] xl:max-w-[28ch]">
              <li>🛠️ Select from design, development, or both services.</li>
              <li>💼 Manage all projects under a single subscription.</li>
              <li>💳 Securely handle payments within the dashboard.</li>
              <li>🚀 Keep your workflow simple and uninterrupted.</li>
            </ul>
          </StaggerMount>
          <StaggerMount className="p-5 sm:p-7">
            <DetailCard
              scrollar
              title={"Invoice & Payments"}
              detail={
                "Manage your subscriptions, view invoices, check payment milestones, and get alerts to stay on track."
              }
              pclass={"max-w-[39ch]"}
              img={"/LearnMore/section3b.svg"}
            />
          </StaggerMount>
        </div>
        {/* Section 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-[60%_40%] border-t-2 sm:border-t lg:border-t-2 border-gray-600">
          <StaggerMount className="p-5 sm:p-7 max-sm:border-b-2 sm:border-r lg:border-r-2 border-gray-600">
            <DetailCard
              scrollar
              title={"Project Invoices"}
              detail={
                "Access detailed PDF invoices anytime with project descriptions for easy reference."
              }
              pclass={"max-w-[33ch]"}
              img={"/LearnMore/section4a.svg"}
            />
          </StaggerMount>
          <div className="grid">
            <StaggerMount className="p-5 sm:p-7">
              <DetailCard
                title={"Payment Milestones"}
                detail={
                  "Define milestones and split payments for your custom projects at your convenience."
                }
                pclass={"max-w-[35ch]"}
                img={"/LearnMore/section4b.svg"}
              />
            </StaggerMount>
            <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
              <DetailCard
                title={"Manage Subscriptions"}
                detail={
                  "Pause or cancel your subscription anytime with no questions asked, giving you full control."
                }
                pclass={"max-w-[35ch]"}
                img={"/LearnMore/section4c.svg"}
              />
            </StaggerMount>
          </div>
        </div>
        {/* Section 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t-2 sm:border-t lg:border-t-2 border-gray-600">
          <StaggerMount className="p-5 sm:p-7 max-sm:border-b-2 sm:border-r lg:border-r-2 border-gray-600">
            <DetailCard
              title={"Choose and Subscribe"}
              detail={
                "Choose the services you're interested in, subscribe, and get started—it's that simple."
              }
              pclass={"max-w-[35ch]"}
              img={"/LearnMore/section5a.svg"}
            />
          </StaggerMount>
          <StaggerMount className="p-5 sm:p-7">
            <DetailCard
              title={"Manual Subscription"}
              detail={
                "Not sure about the services? Hop on a call, and we'll create and send your custom subscription request."
              }
              pclass={"max-w-[38ch]"}
              img={"/LearnMore/section5b.svg"}
            />{" "}
          </StaggerMount>
        </div>
        {/* Section 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-[35%_65%] xl:grid-cols-[40%_60%] border-t-2 sm:border-t lg:border-t-2 border-gray-600">
          <StaggerMount className="p-5 sm:p-7 flex flex-col gap-6 max-sm:border-b-2 sm:border-r lg:border-r-2 border-gray-600">
            <div className="size-[5rem] sm:size-[7.25rem] xl:size-[6.25rem] rounded-full grid place-content-center bg-yellow-light">
              <div className="size-[3.125rem] sm:size-[4.5rem] xl:size-14">
                <Icon
                  size={"100%"}
                  src={"https://cdn.lordicon.com/nwwurnnq.json"}
                />
              </div>
            </div>
            <h3 className="text-2xl sm:text-[2rem] font-medium">
              Transparent Time <br className="xl:hidden" />
              Tracking
            </h3>
            <ul className="text-lg sm:text-[1.6rem] xl:text-2xl font-medium *:pb-5 xl:*:py-3 leading-snug text-gray-700 max-w-[28ch] sm:max-w-[22ch] xl:max-w-[28ch]">
              <li>⏱️ Track team hours in real-time on every task.</li>
              <li>📊 Access weekly or monthly timesheet reports.</li>
              <li>👀 Gain visibility to build trust and reliability.</li>
              <li>📈 Stay on schedule with efficient time tracking.</li>
            </ul>
          </StaggerMount>
          <StaggerMount className="p-5 sm:p-7">
            <DetailCard
              scrollar
              title={"Track Task Progress"}
              detail={
                "Check task descriptions and track each employee's time to stay updated on the progress."
              }
              pclass={"max-w-[37ch]"}
              img={"/LearnMore/section6b.svg"}
            />{" "}
          </StaggerMount>
        </div>
        {/* Section 7 */}
        <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
          <DetailCard
            scrollar
            title={"Project Time Summary"}
            detail={
              "Check time summaries for each project and view weekly reports to stay updated."
            }
            pclass={"max-w-[33ch]"}
            img={"/LearnMore/section7.svg"}
          />{" "}
        </StaggerMount>
        {/* Section 8 */}
        <StaggerMount className="border-t-2 sm:border-t lg:border-t-2 border-gray-600 p-5 sm:p-7">
          <DetailCard
            scrollar
            title={"Monthly Time Reports"}
            detail={
              "Generate monthly time sheet reports for each project and team, and easily access the PDF."
            }
            pclass={"max-w-[37ch]"}
            img={"/LearnMore/section8.svg"}
          />{" "}
        </StaggerMount>
      </div>
    </section>
  );
};

export default WhYouNeedUs;
