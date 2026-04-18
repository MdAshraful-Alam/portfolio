import styles from "./Heading.module.css";

interface HeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function Heading({ eyebrow, title, description }: HeadingProps) {
  return (
    <header className={styles.heading}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}

