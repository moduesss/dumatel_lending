import type { AccordionItem } from "@/types/ui";

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details key={item.title} className="accordion__item">
          <summary>{item.title}</summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  );
}
