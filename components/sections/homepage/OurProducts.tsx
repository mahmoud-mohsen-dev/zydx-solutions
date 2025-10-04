"use client";
import { ArrowTopRight, EducareEkt } from "@/components/icons";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tabs, Tab } from "@heroui/tabs";
import NextLink from "next/link";

const TabContent = ({
  leftCard,
  rightCard,
  detailsCard,
}: {
  leftCard: { title: string; image: { src: string; alt: string } };
  rightCard: { title: string; image: { src: string; alt: string } };
  detailsCard: { title: string; description: string; url: string };
}) => {
  return (
    <div className="grid gap-[17px] md:grid-cols-[1.5fr_1fr]">
      <div className="dark:bg-violet-active flex flex-col gap-4.5 rounded-[7.5px] bg-white px-[34px] py-[18px] sm:flex-row">
        {/* Left Card */}
        <div className="shadow-product_card grow space-y-5 rounded-[7.5px] bg-white">
          <div className="bg-violet-light dark:bg-violet-dark mt-[18px] ml-[18px] w-fit rounded-[7.5px] px-3 py-1.5">
            <p className="text-primary text-[clamp(0.53125rem,0.4955rem+0.1786vw,0.65625rem)] font-medium">
              {leftCard.title}
            </p>
          </div>
          <Image
            src={leftCard.image.src}
            alt={leftCard.image.alt}
            width={274}
            height={255}
            className=""
            classNames={{ wrapper: "justify-self-end" }}
          />
        </div>

        {/* Right Card */}
        <div className="shadow-product_card grow space-y-5 rounded-[7.5px] bg-white">
          <div className="bg-violet-light dark:bg-violet-dark mt-[18px] ml-[18px] w-fit rounded-[7.5px] px-3 py-1.5">
            <p className="text-primary text-[clamp(0.53125rem,0.4955rem+0.1786vw,0.65625rem)] font-medium">
              {leftCard.title}
            </p>
          </div>
          <Image
            src={rightCard.image.src}
            alt={rightCard.image.alt}
            width={233}
            height={255}
            className=""
            classNames={{ wrapper: "justify-self-end" }}
          />
        </div>
      </div>
      <div className="dark:bg-violet-active flex flex-col gap-[14px] rounded-[7.5px] bg-white px-[37px] py-[44px]">
        <EducareEkt size={36} />
        <h4 className="text-black-dark dark:text-grey-light text-fluid-base font-medium">
          {detailsCard.title}
        </h4>
        <p className="text-fluid-max12 dark:text-grey-light-medium leading-[1.67] text-[rgba(28,28,28,70)]">
          {detailsCard.description}
        </p>
        <Link
          as={NextLink}
          href={detailsCard.url}
          className="bg-primary text-primary-foreground mr-0 ml-auto flex h-[40px] w-[40px] items-center justify-center rounded-full"
        >
          <ArrowTopRight size={20} />
        </Link>
      </div>
    </div>
  );
};

function OurProducts() {
  return (
    <section className="font-poppins bg-grey-light-hover dark:bg-violet-dark-active py-12.5">
      <div className="container">
        <div className="mx-auto w-full max-w-[1006px]">
          <h2 className="text-foreground text-fluid-max24 mt-7.5 text-center font-semibold">
            Detailing of our products
          </h2>

          <div className="mt-[45px]">
            <Tabs
              key={"primary"}
              aria-label="Tabs Our Products"
              color={"primary"}
              size="lg"
              fullWidth={true}
              //   isVertical={true}
              classNames={{
                tabList:
                  "gap-[60px] h-[55px] px-[9px] bg-white dark:bg-violet-active  rounded-[7.5px]",
                tab: "h-[37.5px] text-fluid-xs rounded-[7.5px]",
                cursor: "rounded-[7.5px]",
                tabContent:
                  "font-normal text-grey-dark dark:text-violet-light dark:group-data-[selected=true]:text-violet-darker",
              }}
            >
              <Tab key="development" title="Development" />
              <Tab key="woo-commerce" title="Woo Commerce" />
              <Tab key="crm-solutions" title="CRM Solutions" />
              <Tab key="web-designing" title="Web Designing" />
              <Tab key="it-support" title="IT Support" />
            </Tabs>
          </div>

          <div className="mt-7.5">
            <TabContent
              leftCard={{
                title: "Web Development",
                image: {
                  src: "/sections/homepage/case-studio.png",
                  alt: "Web development",
                },
              }}
              rightCard={{
                title: "Mobile Development",
                image: {
                  src: "/sections/homepage/case-studio-2.png",
                  alt: "Mobile development",
                },
              }}
              detailsCard={{
                title: "Development",
                description:
                  "Software development is a dynamic and rapidly evolving field that plays a pivotal role in shaping the digital landscape we live in today. It encompasses the processes, methodologies, and practices used to design, create, deploy, and maintain software applications and systems.",
                url: "#",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
