import type { CardProps } from "@/types/ui";

export default function Card({ className, ...rest }: CardProps) {
  const classes = ["card", className].filter(Boolean).join(" ");
  return <div className={classes} {...rest} />;
}
