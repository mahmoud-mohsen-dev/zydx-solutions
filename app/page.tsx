import ClientReviewsSection from "@/components/sections/homepage/ClientReviewsSection";
import HeroSection from "@/components/sections/homepage/HeroSection";
import OurProducts from "@/components/sections/homepage/OurProducts";
import OurServices from "@/components/sections/homepage/OurServices";
import ServiceDescription from "@/components/sections/homepage/ServiceDescription";
import ShowCaseOfOurWork from "@/components/sections/homepage/ShowCaseOfOurWork";
import WhatWeDo from "@/components/sections/homepage/WhatWeDo";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <OurServices />
      <ServiceDescription />
      <ShowCaseOfOurWork />
      <OurProducts />
      <ClientReviewsSection />
    </>
  );
}
