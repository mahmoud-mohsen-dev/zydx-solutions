import ContactUsForm from "@/components/forms/ContactUsForm";
import {
  Clock,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  Location,
  Phone,
  SMS,
} from "@/components/icons";
import { Button } from "@heroui/button";
import { Mail } from "lucide-react";

function Card({
  title,
  description,
  icon,
  iconWrapperClassName = "",
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconWrapperClassName?: string;
}) {
  return (
    <div className="shadow-what_we_do dark:bg-violet-light-active flex items-center gap-[13px] rounded-xl bg-white px-6 py-3">
      <div
        className={`flex h-[32px] w-[32px] items-center justify-center rounded-full ${iconWrapperClassName}`}
      >
        {icon}
      </div>
      <div className="font-poppins space-y-[2px]">
        <h2 className="text-black-darker dark:text-violet-hover text-fluid-xs font-medium">
          {title}
        </h2>
        <p className="text-fluid-max10 text-grey-dark-medium dark:text-grey-darker font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}

function ContactUsSection({ isInAPage = false }: { isInAPage?: boolean }) {
  return (
    <section
      className={`${isInAPage ? "mx-auto max-w-[664px]" : "container mb-[58px]"}`}
    >
      <div
        className={isInAPage ? "" : "flex min-w-full flex-row-reverse gap-10.5"}
      >
        <div className="grow">
          <div className={`space-y-2 ${isInAPage ? "text-center" : ""}`}>
            <h2 className="text-foreground text-fluid-max24 font-semibold">
              We would like to hear from you
            </h2>
            <p className="text-fluid-xs text-secondary font-normal">
              There were comments on weight changes due to comfort and ease in
              life.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <Card
              key={"Location details"}
              title="Location details"
              description="Cairo, Egypt"
              icon={<Location className="text-blue" size={19} />}
              iconWrapperClassName="bg-blue-medium/24"
            />
            <Card
              title="Email"
              key={"Email"}
              description="info@email.com"
              icon={<Phone className="text-orange" size={19} />}
              iconWrapperClassName="bg-orange-medium/24"
            />
            <Card
              title="Phone number"
              key={"Phone number"}
              description="20 1234 23213"
              icon={<SMS className="text-red" size={19} />}
              iconWrapperClassName="bg-red-vibrant/24"
            />
            <Card
              title="Working hours"
              key={"Working hours"}
              description="Every day from 9 AM to 9 PM"
              icon={<Clock className="text-green" size={19} />}
              iconWrapperClassName="bg-green-medium/24"
            />
          </div>
          <div className="mt-8 flex items-center justify-between">
            <p className="font-poppins text-fluid-xs text-grey-darker-hover font-medium dark:text-white">
              Social media:
            </p>
            <ul className="flex items-center gap-4">
              <li>
                <Button
                  color="primary"
                  className="h-[32px] w-[32px] min-w-[32px] rounded-[4.8px] px-0"
                >
                  <Mail size={20} />
                </Button>
              </li>
              <li>
                <Button
                  color="primary"
                  className="h-[32px] w-[32px] min-w-[32px] rounded-[4.8px] px-0"
                >
                  <InstagramIcon size={20} />
                </Button>
              </li>
              <li>
                <Button
                  color="primary"
                  className="h-[32px] w-[32px] min-w-[32px] rounded-[4.8px] px-0"
                >
                  <LinkedinIcon size={20} />
                </Button>
              </li>
              <li>
                <Button
                  color="primary"
                  className="h-[32px] w-[32px] min-w-[32px] rounded-[4.8px] px-0"
                >
                  <FacebookIcon size={20} />
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className={isInAPage ? "mt-8" : "max-w-[664px] grow-8"}>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
