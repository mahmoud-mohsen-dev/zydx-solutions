"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { v4 } from "uuid";

export default function MyAccordion({
  title,
  list,
}: {
  title: string | null;
  list?: { content: React.ReactNode }[] | null;
}) {
  return Array.isArray(list) && list.length > 0 ? (
    <Accordion>
      {list.map((item) => {
        return (
          <AccordionItem
            key={v4()}
            aria-label={title ?? ""}
            title={title}
            // title={null}
            classNames={{
              base: "px-0",
            }}
          >
            {item.content}
          </AccordionItem>
        );
      })}
    </Accordion>
  ) : null;
}
