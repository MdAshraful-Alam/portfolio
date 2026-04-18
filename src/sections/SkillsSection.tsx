import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import type { SkillGroup } from "../types/portfolio";
import styles from "./SkillsSection.module.css";

interface SkillsSectionProps {
  items: SkillGroup[];
}

export function SkillsSection({ items }: SkillsSectionProps) {
  return (
    <Section id="skills">
      <Container>
        <Heading
          eyebrow="Skills"
          title="Skills grounded in real project and teaching experience."
          description="The skills here stay intentionally realistic and aligned with the roles and systems represented above."
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.title} className={styles.card}>
              <h3>{item.title}</h3>
              <div className={styles.tags}>
                {item.items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

