import type { ExperienceItem } from "../types/portfolio";
import { Card } from "./Card";
import styles from "./TimelineItem.module.css";

interface TimelineItemProps {
  item: ExperienceItem;
}

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.rail} aria-hidden="true">
        <span className={styles.dot} />
      </div>
      <Card className={styles.card}>
        <div className={styles.meta}>
          <p className={styles.dates}>{item.dates}</p>
          <p className={styles.location}>{item.location}</p>
        </div>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.organization}>{item.organization}</p>
        <ul className={styles.list}>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

