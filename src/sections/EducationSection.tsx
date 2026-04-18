import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import type { EducationItem } from "../types/portfolio";
import styles from "./EducationSection.module.css";

interface EducationSectionProps {
  items: EducationItem[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <Section id="education">
      <Container>
        <Heading
          eyebrow="Education"
          title="Academic foundation across graduate and undergraduate study."
          description="Presented in a simple format so degree, institution, timing, and key details are easy to review."
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={`${item.institution}-${item.degree}`} className={styles.card}>
              <p className={styles.institution}>{item.institution}</p>
              <h3>{item.degree}</h3>
              <p className={styles.meta}>{item.dates}</p>
              <p className={styles.meta}>{item.location}</p>
              <ul className={styles.list}>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

