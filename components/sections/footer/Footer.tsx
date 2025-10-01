import { siteConfig } from "@/config/site";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import CategoryLinks from "./CategoryLinks";

function Footer() {
  const quickCategories = siteConfig.footerLinks;

  return (
    <footer className="bg-violet-dark-active dark:bg-violet-active text-primary-foreground py-[52px] dark:text-white">
      <div className="container grid w-full grid-cols-1 gap-10 py-3 md:grid-cols-2 lg:grid-cols-[500px_repeat(4,1fr)]">
        <div className="">
          <Image
            alt="ZYDX LOGO"
            height={95}
            src="/sections/logo-footer.png"
            width={85}
            // className="object-cover object-center"
          />
          <p className="mt-5">
            We are a tech academy dedicated to empowering students with
            practical skills in programming, web development, and freelancing.
            Our goal is to bridge the gap between education and industry,
            helping learners build successful careers in technology.
          </p>
        </div>

        {quickCategories &&
          quickCategories.length > 0 &&
          quickCategories.map((category) => (
            <CategoryLinks
              key={category.title}
              header={category.title}
              links={category.links}
            />
          ))}
        {/* <Link
        isExternal
        className="flex items-center gap-1 text-current"
        href="https://heroui.com?utm_source=next-app-template"
        // title="heroui.com homepage"
      >
        <span>Powered by</span>
        <p className="text-primary">HeroUI</p>
      </Link> */}
      </div>
    </footer>
  );
}

export default Footer;
