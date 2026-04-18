import { useState } from "react";
import type { NavigationItem } from "../types/portfolio";
import { Container } from "./Container";
import styles from "./Header.module.css";

interface HeaderProps {
  name: string;
  items: NavigationItem[];
  activeSection: string;
}

export function Header({ name, items, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.bar}>
          <a className={styles.brand} href="#home" onClick={closeMenu}>
            <span className={styles.monogram}>MAA</span>
            <span className={styles.name}>{name}</span>
          </a>

          <nav className={styles.desktopNav} aria-label="Primary">
            {items.map((item) => (
              <a
                key={item.id}
                className={
                  activeSection === item.id
                    ? `${styles.navLink} ${styles.navLinkActive}`
                    : styles.navLink
                }
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "true" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <a className={styles.contactLink} href="#contact">
              Contact
            </a>
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={isOpen ? `${styles.mobileMenu} ${styles.mobileMenuOpen}` : styles.mobileMenu}
        >
          <nav className={styles.mobileNav} aria-label="Mobile">
            {items.map((item) => (
              <a
                key={item.id}
                className={
                  activeSection === item.id
                    ? `${styles.mobileLink} ${styles.mobileLinkActive}`
                    : styles.mobileLink
                }
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

