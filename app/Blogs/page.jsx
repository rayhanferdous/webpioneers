import { Badge } from "../(components)/ui/Badge";
import Tags from "../(components)/ui/Tags";

const Blogs = () => {
  return (
    <>
      <section className="relative max-sm:pt-12 sm:pt-20 flex flex-col">
        <div className="headerSpace"></div>
        <div className="flex flex-col sm:items-start sm:justify-start px-con">
          <div className="flex flex-col items-start sm:text-center sm:justify-start gap-4">
            <Badge nodot variant="yellow">
              Blogs
            </Badge>
            <h1 className="text-4xl sm:text-[3.5rem] leading-tight mx-auto max-w-[36ch] 2xl:max-w-[32ch]">
              Thoughts That Matter
            </h1>
          </div>
          <div className="mt-14 flex items-center gap-4">
            <Tags title="All" active={true} />
            <Tags title="Web Development" />
          </div>
          <div className="mt-6 sm:mt-14 border-b border-gray w-full"></div>
        </div>
      </section>
      {/* card section */}
      <div className="grid md:grid-cols-3">

      </div>
    </>
  );
};

export default Blogs;
