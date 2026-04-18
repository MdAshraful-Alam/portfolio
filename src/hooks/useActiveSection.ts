import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");
  const idsKey = ids.join("|");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-28% 0px -56% 0px",
        threshold: [0.15, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [idsKey]);

  return activeSection;
}
