import type { SectionTitleProps } from "@/types/ui";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "section-title--center" : "";

  return (
    <div className={["section-title", alignClass].filter(Boolean).join(" ")}>
      {eyebrow ? <p className="section-title__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
