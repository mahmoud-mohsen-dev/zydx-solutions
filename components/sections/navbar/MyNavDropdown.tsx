"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MyNavDropdown = ({
  item,
}: {
  item:
    | {
        label: string;
        href: string;
        children?: undefined;
      }
    | {
        label: string;
        href: string;
        children: {
          label: string;
          href: string;
        }[];
      };
}) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Dropdown onOpenChange={(isOpen) => setOpen(isOpen)} offset={20}>
      <DropdownTrigger>
        <button
          className={
            "font-poppins text-grey-active hover:text-violet-dark-hover dark:text-grey-light flex cursor-pointer items-center gap-1 p-0 text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] leading-[1.1875] font-medium dark:active:text-violet-300"
          }
        >
          {item.label}
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className={clsx(
              "transition-transform duration-300 ease-in-out",
              open && "-rotate-90", // counter-clockwise 45°
            )}
          />
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        {Array.isArray(item?.children) && item?.children.length > 0
          ? item?.children.map((child, i) => {
              return (
                <DropdownItem
                  as={NextLink}
                  href={child.href}
                  key={child.label + i}
                  className={clsx(
                    "font-poppins text-grey-active hover:text-violet-dark-hover dark:text-grey-light text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] leading-[1.1875] font-medium dark:active:text-violet-300",
                    pathname === child.href &&
                      "text-violet-active dark:text-violet-400",
                  )}
                >
                  {child.label}
                </DropdownItem>
              );
            })
          : null}
      </DropdownMenu>
    </Dropdown>
  );
};

export default MyNavDropdown;
