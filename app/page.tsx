import HeroSection from "@/components/sections/homepage/HeroSection";
import OurServices from "@/components/sections/homepage/OurServices";
import ServiceDescription from "@/components/sections/homepage/ServiceDescription";
import WhatWeDo from "@/components/sections/homepage/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <OurServices />
      <ServiceDescription />
    </>
  );
}
