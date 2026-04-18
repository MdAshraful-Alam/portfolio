import type { PropsWithChildren } from "react";
import styles from "./Section.module.css";

interface SectionProps extends PropsWithChildren {
  id: string;
  borderTop?: boolean;
  className?: string;
}

export function Section({
  id,
  children,
  borderTop = true,
  className,
}: SectionProps) {
  const classes = [
    styles.section,
    borderTop ? styles.borderTop : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      {children}
    </section>
  );
}

