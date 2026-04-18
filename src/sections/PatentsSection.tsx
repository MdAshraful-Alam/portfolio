import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import type { PatentItem } from "../types/portfolio";
import styles from "./PatentsSection.module.css";

interface PatentsSectionProps {
  items: PatentItem[];
}

export function PatentsSection({ items }: PatentsSectionProps) {
  return (
    <Section id="patents">
      <Container>
        <Heading
          eyebrow="Patents"
          title="Formal patent and design registration work."
          description="A concise record of registered intellectual property connected to healthcare and AI-related work."
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.registration} className={styles.card}>
              <p className={styles.registration}>{item.registration}</p>
              <h3>{item.title}</h3>
              <p className={styles.date}>{item.date}</p>
              <p className={styles.description}>{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

