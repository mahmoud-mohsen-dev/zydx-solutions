"use client";

import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          className={clsx(
            "font-poppins text-grey-active hover:text-violet-dark-hover dark:text-grey-light text-[clamp(0.875rem,0.8393rem+0.1786vw,1rem)] leading-[1.1875] font-medium dark:active:text-violet-300",
            // pathname === item.href && "text-violet-active dark:text-violet-400",
          )}
        >
          {item.label}
          <ChevronDown size={20} color="#A3A3A3" strokeWidth={1.5} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
      // aria-label="Action event example"
      // onAction={(key: any) => alert(key)}
      >
        {Array.isArray(item?.children) && item?.children.length > 0
          ? item?.children.map((child, i) => {
              return (
                <DropdownItem
                  as={Link}
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
