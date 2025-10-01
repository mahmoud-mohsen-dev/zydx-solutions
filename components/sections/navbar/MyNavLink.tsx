"use client";
import { Link } from "@heroui/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

function MyNavLink({ item }: { item: { href: string; label: string } }) {
  const pathname = usePathname();

  return (
    <Link
      key={item.href}
      href={item.href}
      className={clsx(
        "text-grey-active hover:text-violet-dark-hover font-poppins dark:text-grey-light text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] leading-[1.1875] font-medium transition dark:active:text-violet-300",
        pathname === item.href && "text-violet-active dark:text-violet-400",
      )}
    >
      {item.label}
    </Link>
  );
}

export default MyNavLink;
