import heroGrid from "../assets/hero-grid.svg";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Section } from "../components/Section";
import type { ContactData, HeroData } from "../types/portfolio";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  name: string;
  headline: string;
  hero: HeroData;
  contact: ContactData;
}

export function HeroSection({
  name,
  headline,
  hero,
  contact,
}: HeroSectionProps) {
  const hasPlaceholderLinks =
    hero.actions.some((action) => action.placeholder) ||
    contact.items.some((item) => item.placeholder);

  return (
    <Section id="home" borderTop={false} className={styles.heroSection}>
      <Container>
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{hero.eyebrow}</p>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.headline}>{headline}</p>
            <p className={styles.statement}>{hero.title}</p>
            <p className={styles.intro}>{hero.intro}</p>

            <div className={styles.actions}>
              {hero.actions.map((action, index) => (
                <Button
                  key={action.label}
                  href={action.href}
                  variant={index === 0 ? "primary" : "secondary"}
                  external={action.external}
                  placeholder={action.placeholder}
                  ariaLabel={action.ariaLabel}
                >
                  {action.label}
                </Button>
              ))}
            </div>

            {hasPlaceholderLinks ? (
              <p className={styles.placeholderNote}>
                Resume, LinkedIn, and publication links are set up as placeholders so you can replace them with your final public URLs before launch.
              </p>
            ) : null}

            <ul className={styles.highlights}>
              {hero.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>

          <aside className={styles.panel} aria-label="Professional snapshot">
            <img className={styles.panelGraphic} src={heroGrid} alt="" aria-hidden="true" />
            <div className={styles.panelCard}>
              <p className={styles.panelTitle}>{hero.panelTitle}</p>
              <dl className={styles.panelList}>
                {hero.panelItems.map((item) => (
                  <div key={item.label} className={styles.panelRow}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
