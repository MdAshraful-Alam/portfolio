import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import type { AboutData } from "../types/portfolio";
import styles from "./AboutSection.module.css";

interface AboutSectionProps {
  about: AboutData;
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about">
      <Container>
        <Heading eyebrow="About" title={about.title} description={about.description} />

        <div className={styles.layout}>
          <div className={styles.content}>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className={styles.focus}>
            <h3>What I bring</h3>
            <ul>
              {about.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </Section>
  );
}

