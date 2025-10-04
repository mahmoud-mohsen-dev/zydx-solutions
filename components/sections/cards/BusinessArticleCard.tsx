import Image from "next/image";
import Link from "next/link";

function BusinessArticleCard({
  image,
  title,
  description,
  link,
}: {
  image: { src: string; alt: string };
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="shadow-what_we_do grid grid-cols-1 grid-rows-[1fr_23px_1fr] overflow-hidden rounded-[15px] min-[520px]:grid-cols-[1fr_23px_1fr] min-[520px]:grid-rows-1">
        <div className="relative col-[1_/_2] row-[1_/_3] min-[520px]:col-[1_/_3] min-[520px]:row-[1_/_2]">
          <Image
            src={image.src}
            alt={image.alt}
            width={264}
            height={197}
            className="z-10 h-full max-h-[250px] w-full object-cover object-center"
          />
          <div className="absolute inset-0 z-20 h-full w-full bg-black/40 dark:bg-black/30"></div>
        </div>
        <div className="font-poppins dark:bg-violet-hover shadow-article_business_card relative z-30 col-[1_/_2] row-[2_/_4] flex max-h-[250px] flex-col justify-center gap-1.25 rounded-[15px] bg-white px-[23px] py-5 min-[520px]:col-[2_/_4] min-[520px]:row-[1_/_2]">
          <h4 className="text-fluid-base font-semibold text-black dark:text-white">
            {title}
          </h4>
          <p className="text-fluid-xs text-grey-normal dark:text-grey-light-hover-2 font-normal">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default BusinessArticleCard;
