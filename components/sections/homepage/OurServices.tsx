import { siteConfig } from "@/config/site";
import ServiceCard from "../cards/ServiceCard";
import { WaveUnderline } from "@/components/icons";

function OurServices() {
  const ourServices = siteConfig.ourServices;

  return (
    <section className="font-poppins container">
      <div className="space-y-4 text-center">
        <div className="mx-auto w-fit">
          <h5 className="font-roboto text-[clamp(0.6875rem,0.6518rem+0.1786vw,0.8125rem)] font-medium">
            What We Do !
          </h5>
          <WaveUnderline />
        </div>
        <div className="space-y-3">
          <h2 className="text-foreground text-fluid-max24 font-semibold">
            Innovative Software Services
          </h2>
          <p className="text-fluid-sm text-secondary-foreground mx-auto w-fit max-w-[594px] font-normal">
            We turn your ideas into reality through a simple process from design
            and development to delivery and support.
          </p>
        </div>
      </div>
      <div className="mt-8 mb-[104px] grid grid-cols-1 gap-[64.25px] md:grid-cols-2 lg:grid-cols-5">
        {ourServices &&
          ourServices.length > 0 &&
          ourServices.map((service) => {
            return <ServiceCard key={service.title} {...service} />;
          })}
      </div>
    </section>
  );
}

export default OurServices;
