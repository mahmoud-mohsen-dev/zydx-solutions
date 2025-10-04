import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import NextImage from "next/image";

export default function NotFoundPage() {
  return (
    <div className="mt-[124px] flex min-h-[calc(100vh-124px)] flex-col items-center justify-center pb-5">
      <Image
        as={NextImage}
        src="/sections/404-error-with-a-cute-animal-bro.svg"
        alt="Error 404 - page not found photo with a cute cat"
        width={450}
        height={450}
      />
      <Button
        href="/"
        as={Link}
        color="primary"
        variant="solid"
        className="dark:bg-violet-hover rounded-lg text-white"
      >
        Go Back To The Homepage
      </Button>
    </div>
  );
}
