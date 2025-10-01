export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ZYDX Solutions",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Company",
      href: "/company",
      children: [
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "About",
          href: "/about",
        },
      ],
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "About",
          href: "/about",
        },
      ],
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],
  navMenuItems: [
    {
      label: "Company",
      href: "/company",
      children: [
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "About",
          href: "/about",
        },
      ],
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Services",
      href: "/services",
      children: [
        {
          label: "FAQ",
          href: "/faq",
        },
        {
          label: "About",
          href: "/about",
        },
      ],
    },
    {
      label: "FAQ",
      href: "/faq",
    },
  ],
};
