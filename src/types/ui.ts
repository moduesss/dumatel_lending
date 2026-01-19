import type { HTMLAttributes } from "react";

export type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export type AccordionItem = {
  title: string;
  content: string;
};

export type CardProps = HTMLAttributes<HTMLDivElement>;
