import { StarIcon, TickCircle, TickSquare } from "@/components/icons";

const LeftSection = () => {
  return (
    <div>
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          <StarIcon size={28} />
          <span className="text-foreground text-[clamp(0.6875rem,0.6518rem+0.1786vw,0.8125rem)] font-medium">
            Build Better
          </span>
        </div>
        <h2 className="text-fluid-max24 text-foreground font-semibold">
          The Way We Build
        </h2>
        <p className="text-fluid-sm text-secondary-foreground font-normal">
          We turn your ideas into reality through a simple process from design
          and development to delivery and support.
        </p>
      </div>
      <ul className="mt-4 flex flex-col gap-3">
        <li className="flex items-center gap-2">
          <TickCircle />
          <span className="text-secondary-foreground text-fluid-xs font-normal">
            24/7 Full Service Support
          </span>
        </li>
        <li className="flex items-center gap-2">
          <TickCircle />
          <span className="text-secondary-foreground text-fluid-xs font-normal">
            Immediate Response
          </span>
        </li>
        <li className="flex items-center gap-2">
          <TickCircle />
          <span className="text-secondary-foreground text-fluid-xs font-normal">
            Easy to Approach us
          </span>
        </li>
      </ul>
    </div>
  );
};

const StepCard = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={`font-poppins bg-grey-light-hover-2 dark:bg-violet-hover shadow-navbar space-y-2.5 rounded-lg px-3 py-6 ${className}`}
    >
      <h5 className="text-fluid-sm text-violet-dark-hover font-semibold dark:text-white">
        {title}
      </h5>
      <p className="text-grey-dark-hover font-fluid-xs dark:text-grey font-normal">
        {description}
      </p>
    </div>
  );
};

const Step = ({
  number,
  className,
}: {
  number: string;
  className?: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-roboto text-fluid-base text-violet-light bg-violet dark:bg-violet-light-hover dark:text-violet flex h-[45px] min-h-[45px] w-[45px] items-center justify-center rounded-full">
        {number}
      </div>
      <div className="border-grey h-full w-[0px] border-l border-dashed"></div>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="space-y-4 sm:space-y-0">
      <div className="grid grid-cols-[1fr_45px] gap-5.5 sm:grid-cols-[1fr_45px_1fr]">
        <StepCard
          title="Discovery and Analysis"
          description="Perform a analysis of the client's existing IT systems."
          className="block sm:hidden"
        />
        <div className="hidden sm:block"></div>
        <Step number="01" />
        <StepCard
          title="Discovery and Analysis"
          description="Perform a analysis of the client's existing IT systems."
          className="hidden sm:block"
        />
      </div>
      <div className="grid grid-cols-[1fr_45px] gap-5.5 sm:grid-cols-[1fr_45px_1fr]">
        <StepCard
          title="Tailored Solutions"
          description="Perform a analysis of the client's existing IT systems."
          //   className="block sm:hidden"
        />
        <Step number="02" />
        {/* <StepCard
          title="Tailored Solutions"
          description="Perform a analysis of the client's existing IT systems."
          className="hidden sm:block"
        /> */}
        <div className="hidden sm:block"></div>
      </div>
      <div className="grid grid-cols-[1fr_45px] gap-5.5 sm:grid-cols-[1fr_45px_1fr]">
        <StepCard
          title="Discovery and Analysis"
          description="Perform a analysis of the client's existing IT systems."
          className="block sm:hidden"
        />
        <div className="hidden sm:block"></div>
        <Step number="03" />
        <StepCard
          title="Discovery and Analysis"
          description="Perform a analysis of the client's existing IT systems."
          className="hidden sm:block"
        />
      </div>
    </div>
  );
};

function ServiceDescription() {
  return (
    <section className="font-poppins bg-grey-light-hover dark:bg-violet-dark-active py-[71px]">
      <div className="container grid grid-cols-1 items-center gap-x-[105px] gap-y-8 lg:grid-cols-[40%_50%]">
        <LeftSection />
        <RightSection />
      </div>
    </section>
  );
}

export default ServiceDescription;
