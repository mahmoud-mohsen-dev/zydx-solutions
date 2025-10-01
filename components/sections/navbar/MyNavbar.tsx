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
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { v4 } from "uuid";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/sections/navbar/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import Image from "next/image";
import MyNavLink from "./MyNavLink";
import MyNavDropdown from "./MyNavDropdown";

export const MyNavbar = () => {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-default-400 pointer-events-none flex-shrink-0 text-base" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <HeroUINavbar
      maxWidth="full"
      // position="sticky"
      className="shadow-navbar absolute top-10 left-1/2 z-999 container min-h-[84px] max-w-[1220px] -translate-x-1/2 rounded-2xl"
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
                {/* <NextLink
                // className={clsx(
                //   linkStyles({ color: "foreground" }),
                //   "data-[active=true]:text-violet-light-active data-[active=true]:font-medium",
                // )}
                className="data-[active=true]:text-violet-light-active"
                // className={
                //   "text-foreground-light dark:text-foreground-dark data-[active=true]:text-violet-light-active data-[active=true]:font-medium"
                // }
                // color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink> */}
                {/* </NavbarItem> */}
                {/* <Link
                href={item.href}
                className="data-[active=true]:text-violet-light-active data-[active=true]:font-medium"
                color="foreground"
              >
                {item.label}
              </Link> */}
                <MyNavLink item={item} key={v4()} />
              </NavbarItem>
            ),
          )}
        </ul>
        {/* </NavbarContent> */}
        {/* 
      <NavbarContent
        className="hidden basis-1/5 sm:flex sm:basis-full"
        justify="end"
      > */}
        {/* <NavbarItem className="hidden gap-2 sm:flex">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
        </NavbarItem> */}
        <NavbarItem className="hidden items-center gap-5 sm:flex">
          {/* <div className="border-foreground flex h-[30px] w-[48px] items-center justify-center rounded-full border-1"> */}
          <ThemeSwitch
            classNames={{
              wrapper: "w-[48px] h-[30px]",
            }}
            className="border-grey-active flex items-center justify-center rounded-full border-1"
          />
          {/* </div> */}
          {/* <Link aria-label="contact-us" href={"/contact-us"} color="primary">
            Contact Us
          </Link> */}
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
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-default-600 bg-default-100 text-sm font-normal"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarContent
        className="flesx-basis-full flex flex-row items-center gap-5 sm:hidden"
        justify="end"
      >
        {/* <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link> */}
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
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
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
