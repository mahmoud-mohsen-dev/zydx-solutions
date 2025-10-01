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
  footerLinks: [
    {
      title: "Services",
      links: [
        {
          label: "It Support",
          href: "/it-support",
        },
        {
          label: "Web Design",
          href: "/Develpoment",
        },
        {
          label: "E-commerece",
          href: "/e-commerece",
        },
        {
          label: "CRM Solutions",
          href: "/crm-solutions",
        },
      ],
    },
    {
      title: "Our Field",
      links: [
        {
          label: "Healthcare",
          href: "/healthcare",
        },
        {
          label: "Logistics",
          href: "/logistics",
        },
        {
          label: "Hotels",
          href: "/hotels",
        },
        {
          label: "Banks",
          href: "/banks",
        },
        {
          label: "Supermarkets",
          href: "/supermarkets",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          label: "Partners",
          href: "/partners",
        },
        {
          label: "Careers",
          href: "/careers",
        },
        {
          label: "Team",
          href: "/team",
        },
        {
          label: "Blogs",
          href: "/blogs",
        },
      ],
    },
    {
      title: "Product",
      links: [
        {
          label: "Overview",
          href: "/overview",
        },
        {
          label: "Our Price",
          href: "/our-price",
        },
        {
          label: "Case Studies",
          href: "/case-studies",
        },
      ],
    },
  ],
};
