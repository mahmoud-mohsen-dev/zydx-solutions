import { ArrowTopRight, WaveUnderline } from "@/components/icons";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import { Link } from "@heroui/link";

const FullWidthCard = ({
  title,
  description,
  link,
  image,
  className,
  imageClassName,
}: {
  title: string;
  description: string;
  link: { href: string; text: string };
  image: { src: string; alt: string };
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={`shadow-what_we_do w-full overflow-hidden rounded-4xl ${className}`}
    >
      <div className="grid grid-cols-1 items-center gap-x-[51px] gap-y-[24px] sm:grid-cols-2">
        <div className="mt-8 mr-6 ml-[35px] md:mr-0 md:ml-[35px]">
          <h3 className="text-foreground text-fluid-base font-semibold">
            {title}
          </h3>
          <p className="text-fluid-xs text-secondary-foreground mt-4 font-normal">
            {description}
          </p>
          <Link
            href="#"
            className="text-primary mt-[14px] flex min-h-6 items-center gap-[9px] font-normal underline"
          >
            <span className="text-fluid-max12 capitalize">{link.text}</span>
            <ArrowTopRight />
          </Link>
        </div>
        <div className="flex justify-end">
          <Image
            src={image.src}
            alt={image.alt}
            width={390}
            height={313}
            className={`${imageClassName}`}
            // quality={100}
          />
        </div>
      </div>
    </div>
  );
};
const HalfWidthCard = ({
  title,
  description,
  link,
  image,
  className,
  imageClassName,
}: {
  title: string;
  description: string;
  link: { href: string; text: string };
  image: { src: string; alt: string };
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={`shadow-what_we_do w-full overflow-hidden rounded-4xl ${className}`}
    >
      <div className="flex h-full flex-col gap-y-[14px] pt-10.5">
        <div className="mx-8">
          <h3 className="text-foreground text-fluid-base font-semibold">
            {title}
          </h3>
          <p className="text-fluid-xs text-secondary-foreground mt-4 font-normal">
            {description}
          </p>
        </div>
        <div className="grid h-full grid-cols-[max-content_1fr]">
          <Link
            href="#"
            className="text-primary ml-8 flex w-fit items-center gap-[9px] place-self-start font-normal underline"
          >
            <span className="text-fluid-max12 capitalize">{link.text}</span>
            <ArrowTopRight />
          </Link>
          <Image
            src={image.src}
            alt={image.alt}
            width={258}
            height={220}
            className={`${imageClassName} object-cover object-bottom`}
            classNames={{ wrapper: "place-self-end" }}
            // quality={100}
          />
        </div>
      </div>
    </div>
  );
};

function ShowCaseOfOurWork() {
  return (
    <section className="font-poppins container space-y-8 pt-25 pb-12.5">
      <div className="space-y-4">
        <div className="mx-auto w-fit">
          <h5 className="font-roboto text-center text-[clamp(0.6875rem,0.6518rem+0.1786vw,0.8125rem)] font-medium">
            What We Do !
          </h5>
          <WaveUnderline />
        </div>
        <div className="mx-auto max-w-[594px] space-y-4 text-center">
          <h2 className="text-foreground text-fluid-max24 font-semibold">
            Showcase of our recognized work
          </h2>
          <p className="text-fluid-sm text-secondary-foreground font-normal">
            We turn your ideas into reality through a simple process from design
            and development to delivery and support.
          </p>
        </div>
      </div>
      <div className="grid min-w-full grid-cols-1 gap-y-10.5 md:mx-auto md:max-w-[calc(71%+1.5rem)] md:min-w-0 md:grid-cols-2 md:gap-x-8">
        <FullWidthCard
          title="E-commerce platform development"
          description="Creating online shopping systems with secure payments, product
            management, and smooth user experiences."
          link={{ href: "#", text: "Woo Commerce" }}
          image={{
            src: "/sections/homepage/showcase-background-1.png",
            alt: "boxes image",
          }}
          className="col-span-2 col-start-1"
          imageClassName="h-auto max-h-[119px] min-w-full object-cover object-bottom [@media(min-width:350px)]:max-h-[200px] [@media(min-width:480px)]:max-h-[313px]"
        />
        <HalfWidthCard
          title="Get into a virtual reality world"
          description="Step beyond the screen and experience a new dimension where imagination meets reality."
          link={{ href: "#", text: "VR Development" }}
          image={{
            src: "/sections/homepage/pro-vr-headset-surrounded-by-luminous-spheres.png",
            alt: "pro vr headset surrounded by luminous spheres image",
          }}
          className="row-start-2 md:col-start-1 md:col-end-2"
          //   imageClassName="h-[119px] w-full object-cover object-bottom [@media(min-width:350px)]:h-[200px] [@media(min-width:480px)]:h-[313px]"
          imageClassName="max-h-[220px] max-w-[258px]"
        />
        <HalfWidthCard
          title="Mobile app development in ios"
          description="Building apps for iPhone and iPad using Swift, with a focus on clean design, performance, and App Store standards."
          link={{ href: "#", text: "Swift App Development" }}
          image={{
            src: "/sections/homepage/iphone-back-side.png",
            alt: "iphone back side image",
          }}
          className="row-start-3 md:col-start-2 md:col-end-3 md:row-start-2"
          //   imageClassName="h-[119px] w-full object-cover object-bottom [@media(min-width:350px)]:h-[200px] [@media(min-width:480px)]:h-[313px]"
          imageClassName="max-h-[220px] max-w-[218px]"
        />
        <FullWidthCard
          title="Software as a Service integration"
          description="Helping electronic businesses grow, reach more people, and stand out in the digital market."
          link={{ href: "#", text: "Branding for Studio" }}
          image={{
            src: "/sections/homepage/girl-smiling.png",
            alt: "girl smiling image",
          }}
          className="col-span-2 col-start-1"
          //   imageClassName="h-[119px] w-auto object-cover object-bottom [@media(min-width:350px)]:h-[200px] [@media(min-width:480px)]:h-[313px]"
          imageClassName="h-auto min-w-full max-w-[220px] sm:max-w-[298px] object-cover object-center"
        />
      </div>

      <Link
        href="#"
        className="text-fluid-max18 text-primary mx-auto block w-fit text-center font-medium underline"
      >
        Show More
      </Link>
    </section>
  );
}

export default ShowCaseOfOurWork;
