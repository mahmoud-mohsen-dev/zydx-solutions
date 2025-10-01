import { Button } from "@heroui/button";
import { Image } from "@heroui/image";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center">
      <Image
        alt="background hero section image"
        src="/sections/homepage/hero-background.png"
        // width={"100%"}
        // height={500}
        // className="absolute top-0 left-0 z-[10] h-full min-h-full w-full min-w-full object-cover"
      />

      <div className="font-poppins absolute top-[260px] z-[20]">
        <div className="container text-center">
          <h1 className="text-violet-darker dark:text-violet-light text-[clamp(1.5rem,1.3571rem+0.7143vw,2rem)] leading-normal font-semibold">
            We Build Digital Solutions That Power Every Industry
          </h1>
          <h4 className="text-grey-dark-hover mt-5 max-w-[800px] text-[clamp(1.125rem,1.0536rem+0.3571vw,1.375rem)] leading-normal dark:text-white">
            Turning your ideas into seamless digital experiences that help your
            business grow.
          </h4>

          <Button
            color="primary"
            className="mt-8 h-[45px] rounded-lg px-10 text-[clamp(0.75rem,0.6786rem+0.3571vw,1rem)] font-semibold"
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
