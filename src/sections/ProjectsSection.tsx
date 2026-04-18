import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import type { ProjectItem } from "../types/portfolio";
import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
  items: ProjectItem[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
  return (
    <Section id="projects">
      <Container>
        <Heading
          eyebrow="Projects"
          title="Selected systems that reflect practical QA ownership."
          description="These projects show a mix of automation, database validation, API work, and disciplined collaboration."
        />

        <div className={styles.grid}>
          {items.map((item) => (
            <Card key={item.name} className={styles.card}>
              <div className={styles.header}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className={styles.tags} aria-label={`${item.name} technologies`}>
                {item.technologies.map((technology) => (
                  <Tag key={technology}>{technology}</Tag>
                ))}
              </div>

              <ul className={styles.list}>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

