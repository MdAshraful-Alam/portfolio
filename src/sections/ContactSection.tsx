import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Section } from "../components/Section";
import { Tag } from "../components/Tag";
import type { ContactData } from "../types/portfolio";
import styles from "./ContactSection.module.css";

interface ContactSectionProps {
  contact: ContactData;
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <Section id="contact">
      <Container>
        <div className={styles.layout}>
          <div className={styles.content}>
            <Heading eyebrow="Contact" title={contact.title} description={contact.description} />
            <div className={styles.actions}>
              <Button href={contact.primaryAction.href} ariaLabel={contact.primaryAction.ariaLabel}>
                {contact.primaryAction.label}
              </Button>
              <Button
                href={contact.secondaryAction.href}
                variant="secondary"
                ariaLabel={contact.secondaryAction.ariaLabel}
              >
                {contact.secondaryAction.label}
              </Button>
            </div>
          </div>

          <Card className={styles.card}>
            <ul className={styles.list}>
              {contact.items.map((item) => (
                <li key={item.label} className={styles.item}>
                  <div>
                    <p className={styles.label}>{item.label}</p>
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      className={styles.value}
                    >
                      {item.value}
                    </a>
                  </div>
                  {item.placeholder ? <Tag subdued>Placeholder</Tag> : null}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </Section>
  );
}

