import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Meta } from "./components/Meta";
import { portfolioData } from "./data/portfolio";
import { useActiveSection } from "./hooks/useActiveSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { EducationSection } from "./sections/EducationSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { HeroSection } from "./sections/HeroSection";
import { PatentsSection } from "./sections/PatentsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { SkillsSection } from "./sections/SkillsSection";
import styles from "./App.module.css";

function App() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    "projects",
    "publications",
    "patents",
    "skills",
    "education",
    "contact",
  ]);

  return (
    <>
      <Meta data={portfolioData} />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <Header
        name={portfolioData.name}
        items={portfolioData.navigation}
        activeSection={activeSection}
      />
      <main id="main-content" className={styles.main}>
        <HeroSection
          name={portfolioData.name}
          headline={portfolioData.headline}
          hero={portfolioData.hero}
          contact={portfolioData.contact}
        />
        <AboutSection about={portfolioData.about} />
        <ExperienceSection items={portfolioData.experience} />
        <ProjectsSection items={portfolioData.projects} />
        <PublicationsSection items={portfolioData.publications} />
        <PatentsSection items={portfolioData.patents} />
        <SkillsSection items={portfolioData.skills} />
        <EducationSection items={portfolioData.education} />
        <ContactSection contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.name} note={portfolioData.footer.note} />
    </>
  );
}

export default App;

