import { StarIcon } from "@/components/icons";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

function WhatWeDo() {
  return (
    <section className="font-poppins shadow-what_we_do container mt-3 mb-25 min-h-[447px] rounded-3xl px-8 pt-10 pb-[51px] lg:grid lg:grid-cols-[507px_1fr] lg:gap-[55px]">
      <div className="relative">
        <Image
          alt="What We Do Image"
          // height={200}
          src="/sections/homepage/what-we-do-1.png"
          // width={300}
          // className="object-cover"
          // classNames={{
          //   wrapper: "w-full",
          //   img: "w-full object-cover",
          // }}

          className="max-h-[288px] w-[507px] object-cover object-center"
        />
        <div className="absolute right-0 bottom-0 z-[10] hidden translate-x-[30px] lg:block">
          <Image
            alt="What We Do Image"
            height={200}
            src="/sections/homepage/what-we-do-2.png"
            width={350}
            className="object-cover object-center"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="flex items-center gap-1">
          <StarIcon size={28} />
          <span className="text-violet-darker dark:text-violet-light text-sm font-medium">
            What We Do !
          </span>
        </div>
        <div className="space-y-4">
          <h2 className="text-fluid-max24 max-w-[570px] font-semibold">
            Empowering the Future of Technology Together
          </h2>
          <p className="text-fluid-sm text-grey-active dark:text-white">
            Our long-term vision is to become the leading tech academy in the
            region. We aim to empower individuals and organizations with
            future-ready skills, ensuring that innovation, creativity, and
            accessibility are at the heart of every solution we deliver.
          </p>
        </div>
        <Button
          color="primary"
          className="text-fluid-sm text-primary-foreground h-[35px] w-[135px] rounded-md px-10 font-semibold"
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}

export default WhatWeDo;
