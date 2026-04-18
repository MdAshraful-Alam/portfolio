import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { TimelineItem } from "../components/TimelineItem";
import type { ExperienceItem } from "../types/portfolio";
import styles from "./ExperienceSection.module.css";

interface ExperienceSectionProps {
  items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <Container>
        <Heading
          eyebrow="Experience"
          title="Professional experience grounded in quality, communication, and technical discipline."
          description="A progression from hands-on QA execution to senior quality leadership, alongside graduate teaching work in computer science."
        />

        <div className={styles.timeline}>
          {items.map((item) => (
            <TimelineItem key={`${item.title}-${item.dates}`} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

