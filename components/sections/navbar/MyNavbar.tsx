"use client";
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
import MyAccordion from "../../UI/MyAccordion";
import CustomAccordion from "./CustomAccordion";
import { useState } from "react";

export const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-10 left-1/2 z-[999] container -translate-x-1/2">
      <HeroUINavbar
        maxWidth="full"
        className="shadow-navbar h-[64px] rounded-2xl lg:h-[84px]"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
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
                <NavbarItem key={v4()}>
                  <MyNavDropdown item={item} />
                </NavbarItem>
              ) : (
                <NavbarItem key={v4()}>
                  <MyNavLink item={item} />
                </NavbarItem>
              ),
            )}
          </ul>

          <NavbarItem className="hidden items-center gap-5 lg:flex">
            <ThemeSwitch
              classNames={{
                wrapper:
                  "w-[48px] h-[30px] [&>svg]:!text-violet dark:[&>svg]:!text-grey-light dark:[&>svg]:!drop-shadow-dark-mode-icon",
              }}
              className="border-violet dark:bg-violet dark:border-violet flex items-center justify-center rounded-full border-1 bg-transparent"
            />
            <Button
              as={NextLink}
              aria-label="contact-us"
              color="primary"
              href="/contact-us"
              variant="solid"
              onClick={() => {
                // scroll to top
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
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

        <NavbarMenu className="top-0 !h-svh pt-[160px] pb-10">
          <div className="container flex flex-col gap-3">
            {siteConfig.navMenuItems.map((item, index) => {
              return Array.isArray(item?.children) &&
                item?.children?.length > 0 ? (
                <NavbarMenuItem key={v4()} className="accordion-menu-item">
                  <CustomAccordion
                    title={item.label}
                    list={item.children}
                    onClick={() => setIsMenuOpen(false)}
                  />
                </NavbarMenuItem>
              ) : (
                <NavbarMenuItem key={v4()}>
                  <MyNavLink item={item} onClick={() => setIsMenuOpen(false)} />
                </NavbarMenuItem>
              );
            })}
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </div>
  );
};
