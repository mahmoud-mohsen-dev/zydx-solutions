"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { v4 } from "uuid";
import MyNavLink from "./MyNavLink";

function CustomAccordion({
  title,
  list,
  onClick,
}: {
  title: string | null;
  list?: { label: string; href: string }[] | null;
  onClick: () => void;
}) {
  return Array.isArray(list) && list.length > 0 ? (
    <Accordion>
      <AccordionItem
        key={v4()}
        aria-label={title ?? ""}
        title={title}
        // title={null}
        classNames={{
          //   base: "px-0",
          title: "text-grey-active dark:text-grey-light",
        }}
      >
        <div className="flex w-full flex-col gap-5 px-2">
          {list.map((item, i, arr) => {
            return (
              <div key={v4()}>
                <MyNavLink item={item} onClick={onClick} />
                {arr.length !== i + 1 && (
                  <hr className="text-grey-active dark:text-grey-light mt-5" />
                )}
              </div>
            );
          })}
        </div>
      </AccordionItem>
    </Accordion>
  ) : null;
}

export default CustomAccordion;
