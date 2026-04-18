import type { PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps extends PropsWithChildren {
  className?: string;
}

export function Card({ children, className }: CardProps) {
  const classes = [styles.card, className ?? ""].filter(Boolean).join(" ");

  return <article className={classes}>{children}</article>;
}

