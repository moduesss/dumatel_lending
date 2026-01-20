import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "ghost" | "primary";
type ButtonSize = "md" | "lg" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  className,
  type = "button",
  variant = "ghost",
  size = "md", 
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <button type={type} className={classes} {...props} />;
}
