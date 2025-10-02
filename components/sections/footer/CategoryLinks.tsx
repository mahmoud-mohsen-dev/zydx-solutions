import { Link } from "@heroui/link";
// import NextLink from "Next/Link";

import MyNextLink from "next/link";

function CategoryLinks({
  header,
  links,
}: {
  header: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="space-y-6">
      <h4 className="font-roboto text-fluid-sm font-semibold capitalize">
        {header}
      </h4>
      <ul className="flex flex-col gap-2 md:gap-4">
        {links.map((link) => (
          <Link key={link.href} href={link.href} as={MyNextLink}>
            <li className="font-poppins text-fluid-max12 text-grey-light font-normal capitalize dark:text-white">
              {link.label}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryLinks;
