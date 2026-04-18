import type { PropsWithChildren } from "react";
import styles from "./Tag.module.css";

interface TagProps extends PropsWithChildren {
  subdued?: boolean;
}

export function Tag({ children, subdued = false }: TagProps) {
  return <span className={subdued ? `${styles.tag} ${styles.subdued}` : styles.tag}>{children}</span>;
}

