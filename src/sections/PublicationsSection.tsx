import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import type { PublicationItem } from "../types/portfolio";
import styles from "./PublicationsSection.module.css";

interface PublicationsSectionProps {
  items: PublicationItem[];
}

export function PublicationsSection({ items }: PublicationsSectionProps) {
  return (
    <Section id="publications">
      <Container>
        <Heading
          eyebrow="Publications"
          title="Selected research publications with room to grow."
          description="The publication list is data-driven so you can keep adding future papers without restructuring the site."
        />

        <div className={styles.list}>
          {items.map((item) => (
            <Card key={`${item.title}-${item.year}`} className={styles.card}>
              <div className={styles.meta}>
                <Tag>{item.venue}</Tag>
                <Tag subdued>{item.year}</Tag>
              </div>
              <h3>{item.title}</h3>
              {item.link ? (
                <div>
                  <Button
                    href={item.link}
                    variant="ghost"
                    external
                    placeholder={item.placeholder}
                    ariaLabel={`Open publication link for ${item.title}`}
                  >
                    View paper
                  </Button>
                </div>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

