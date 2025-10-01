import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      {/* <Image
        src={notFoundImg}
        alt="Error 404 - page not found photo with a cute cat"
        width={500}
        height={500}
      /> */}
      {/* <Link href="/" className="mx-auto w-[80%] max-w-[325px] md:w-fit"> */}
      <Button
        href="/"
        as={Link}
        color="primary"
        variant="solid"
        // className="cursor-pointer"
        // style={{ cursor: "pointer" }}
        // className="flex w-full items-center justify-center gap-2"
        className="dark:bg-violet-hover text-white"
        //   style={{
        //     paddingBlock: "24px",
        //     paddingInline: "48px",
        //     fontWeight: 500,
        //   }}
      >
        Go Back To The Homepage
        {/* <AiFillHome className="h-5 min-h-5 w-5 min-w-5" />
        <span>Go Back To The Homepage</span> */}
      </Button>
      {/* </Link> */}
    </div>
  );
}
