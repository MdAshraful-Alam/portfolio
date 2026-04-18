import { Container } from "./Container";
import styles from "./Footer.module.css";

interface FooterProps {
  name: string;
  note: string;
}

export function Footer({ name, note }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.name}>{name}</p>
          <p className={styles.note}>{note}</p>
        </div>
      </Container>
    </footer>
  );
}

