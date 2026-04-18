import type { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends PropsWithChildren {
  href: string;
  variant?: ButtonVariant;
  external?: boolean;
  placeholder?: boolean;
  ariaLabel?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  placeholder = false,
  ariaLabel,
}: ButtonProps) {
  const classes = [styles.button, styles[variant]].join(" ");

  return (
    <a
      className={classes}
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span>
      {placeholder ? <span className={styles.badge}>Placeholder</span> : null}
    </a>
  );
}

