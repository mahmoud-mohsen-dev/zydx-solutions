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
          label: "Contact Us",
          href: "/contact-us",
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
      label: "Home",
      href: "/",
    },
    {
      label: "Company",
      href: "/company",
      children: [
        {
          label: "Contact Us",
          href: "/contact-us",
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
    { label: "Contact Us", href: "/contact-us" },
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
  ourServices: [
    {
      id: 1,
      title: "Development",
      description: "Our development is pixel perfect in all ways.",
      icon: { src: "/icons/code.svg", alt: "Development" },
    },
    {
      id: 2,
      title: "E-commerce",
      description: "We have a best team for your shopping websites.",
      icon: { src: "/icons/bag.svg", alt: "Development" },
    },
    {
      id: 3,
      title: "CRM Solutions",
      description: "We enhance customer experiences for success.",
      icon: { src: "/icons/medal.svg", alt: "Development" },
    },
    {
      id: 4,
      title: "Web Design",
      description: "We create vibrant, intuitive and minimalist web",
      icon: { src: "/icons/pen-tree.svg", alt: "Web Design" },
    },
    {
      id: 5,
      title: "IT Support",
      description: "We offers expert assistance for your IT issues.",
      icon: { src: "/icons/people.svg", alt: "IT Support" },
    },
  ],
};
