import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import CategoryLinks from "./CategoryLinks";

function Footer() {
  const quickCategories = siteConfig.footerLinks;

  return (
    <footer className="bg-violet-dark-active dark:bg-violet-active text-grey-light py-[52px] dark:text-white">
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[500px_1fr]">
          <div>
            <Image
              alt="ZYDX LOGO"
              height={90}
              src="/sections/logo-footer.png"
              width={85}
            />
            <p className="font-poppins text-fluid-sm mt-7 font-normal">
              We are a tech academy dedicated to empowering students with
              practical skills in programming, web development, and freelancing.
              Our goal is to bridge the gap between education and industry,
              helping learners build successful careers in technology.
            </p>
          </div>

          <div className="grid grid-cols-2 justify-between gap-4 lg:grid-cols-[repeat(4,max-content)]">
            {quickCategories &&
              quickCategories.length > 0 &&
              quickCategories.map((category) => (
                <CategoryLinks
                  key={category.title}
                  header={category.title}
                  links={category.links}
                />
              ))}
          </div>
        </div>
        <hr className="border-grey-light-medium my-9" />
        <div>
          <h4 className="font-poppins text-center text-[clamp(0.8125rem,0.7768rem+0.1786vw,0.9375rem)] font-normal">
            © 2025, All Rights Reserved
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
