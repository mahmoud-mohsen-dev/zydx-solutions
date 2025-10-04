"use client";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

function MyNavLink({
  item,
  className,
  onClick,
}: {
  item: { href: string; label: string };
  className?: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();

  return (
    <Link
      key={item.href}
      href={item.href}
      as={NextLink}
      onClick={() => {
        // scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // trigger close menu if passed
        // ✅ Safe optional call
        onClick?.();
      }}
      className={clsx(
        "text-grey-active hover:text-violet-dark-hover font-poppins dark:text-grey-light text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] leading-[1.1875] font-medium transition dark:active:text-violet-300",
        pathname === item.href && "text-violet-active dark:text-violet-400",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}

export default MyNavLink;
