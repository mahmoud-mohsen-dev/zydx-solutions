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
    <div className="font-poppins space-y-5">
      <h4 className="font-medium capitalize">{header}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href} as={MyNextLink}>
            <li className="font-normal text-white capitalize">{link.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default CategoryLinks;
