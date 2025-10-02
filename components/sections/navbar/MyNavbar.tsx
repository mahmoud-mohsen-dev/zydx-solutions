import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { v4 } from "uuid";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/sections/navbar/theme-switch";
import Image from "next/image";
import MyNavLink from "./MyNavLink";
import MyNavDropdown from "./MyNavDropdown";

export const MyNavbar = () => {
  return (
    <HeroUINavbar
      maxWidth="full"
      // position="sticky"
      className="shadow-navbar fixed top-10 left-1/2 z-[200] container h-[64px] w-full -translate-x-1/2 rounded-2xl lg:h-[84px]"
      // style={{ backgroundColor: "background" }}
    >
      <NavbarContent className="flex w-full items-center justify-between">
        <NavbarBrand as="li" className="max-w-fit gap-3">
          <NextLink
            className="height-[52px] flex w-[49px] items-center justify-start gap-1"
            href="/"
          >
            <Image
              src="/logo-dark.png"
              alt="Logo"
              width={49}
              height={52}
              quality={100}
              className="h-[40px] w-[auto] object-cover object-center lg:h-[52px] lg:w-[49px]"
            />
          </NextLink>
        </NavbarBrand>

        <ul className="mx-2 hidden basis-full items-center justify-center gap-10.5 lg:flex">
          {siteConfig.navItems.map((item) =>
            Array.isArray(item?.children) && item?.children?.length > 0 ? (
              <NavbarItem key={item.href}>
                <MyNavDropdown item={item} />
              </NavbarItem>
            ) : (
              <NavbarItem key={item.href}>
                <MyNavLink item={item} key={v4()} />
              </NavbarItem>
            ),
          )}
        </ul>

        <NavbarItem className="hidden items-center gap-5 lg:flex">
          <ThemeSwitch
            classNames={{
              wrapper:
                "w-[48px] h-[30px] [&>svg]:!text-violet dark:[&>svg]:!text-grey-light dark:[&>svg]:!drop-shadow-dark-mode-icon",
              // thumbIcon:
              //   "text-violet dark:text-yellow-400 [&>svg]:!text-inherit [&>svg]:!text-violet dark:[&>svg]:!text-yellow-400",
            }}
            // className="border-grey-active flex items-center justify-center rounded-full border-1"
            className="border-violet dark:bg-violet dark:border-violet flex items-center justify-center rounded-full border-1 bg-transparent"
          />
          <Button
            as={Link}
            aria-label="contact-us"
            color="primary"
            href="/contact-us"
            variant="solid"
            className="dark:text-violet-darker text-grey-light rounded-lg px-6"
          >
            Contact Us
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="flesx-basis-full flex flex-row items-center gap-5 lg:hidden"
        justify="end"
      >
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="absolute top-0 pt-[160px]">
        <div className="container flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 2 ? "primary" : "foreground"}
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem key={`contact-us`}>
            <Link color={"foreground"} href="#" size="lg">
              Contact Us
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
