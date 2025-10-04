import { DoubleQuote } from "@/components/icons";
import Image from "next/image";

function ClientReviewCard({
  review,
}: {
  review: {
    id: number;
    user: {
      profileImg: {
        src: string;
        alt: string;
      };
      name: string;
      role: string;
    };
    comment: string;
  };
}) {
  return (
    <div className="shadow-navbar relative flex flex-col gap-6 rounded-4xl px-[31px] py-[52px]">
      <div className="absolute -top-[23px] left-[30px]">
        <DoubleQuote size={60} />
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={review.user.profileImg.src}
          alt={review.user.profileImg.alt}
          width={58}
          height={58}
          className="overflow-hidden rounded-full object-cover object-center"
        />
        <div className="font-roboto flex flex-col gap-[1px]">
          <h5 className="text-foreground text-fluid-sm font-medium">
            {review.user.name}
          </h5>
          <p className="text-secondary-foreground text-fluid-max12 font-normal">
            {review.user.role}
          </p>
        </div>
      </div>
      <p className="text-fluid-sm font-poppins text-secondary-foreground font-normal">
        {review.comment}
      </p>
    </div>
  );
}

export default ClientReviewCard;
