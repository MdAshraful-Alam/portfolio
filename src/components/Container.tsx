import type { PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends PropsWithChildren {
  narrow?: boolean;
}

export function Container({ children, narrow = false }: ContainerProps) {
  return (
    <div className={narrow ? `${styles.container} ${styles.narrow}` : styles.container}>
      {children}
    </div>
  );
}

