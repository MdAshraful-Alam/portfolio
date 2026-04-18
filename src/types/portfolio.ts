export type SectionId =
  | "home"
  | "about"
  | "experience"
  | "projects"
  | "publications"
  | "patents"
  | "skills"
  | "education"
  | "contact";

export interface NavigationItem {
  id: SectionId;
  label: string;
}

export interface ActionLink {
  label: string;
  href: string;
  external?: boolean;
  placeholder?: boolean;
  ariaLabel?: string;
}

export interface HeroPanelItem {
  label: string;
  value: string;
}

export interface HeroData {
  eyebrow: string;
  title: string;
  intro: string;
  actions: ActionLink[];
  highlights: string[];
  panelTitle: string;
  panelItems: HeroPanelItem[];
}

export interface AboutData {
  title: string;
  description: string;
  paragraphs: string[];
  focusAreas: string[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  dates: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface PublicationItem {
  title: string;
  venue: string;
  year: string;
  link?: string;
  placeholder?: boolean;
}

export interface PatentItem {
  title: string;
  registration: string;
  date: string;
  description: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  details: string[];
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  placeholder?: boolean;
}

export interface ContactData {
  title: string;
  description: string;
  primaryAction: ActionLink;
  secondaryAction: ActionLink;
  items: ContactItem[];
}

export interface SeoData {
  title: string;
  description: string;
  socialImage: string;
}

export interface FooterData {
  note: string;
}

export interface PortfolioData {
  name: string;
  headline: string;
  location: string;
  seo: SeoData;
  navigation: NavigationItem[];
  hero: HeroData;
  about: AboutData;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  publications: PublicationItem[];
  patents: PatentItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  contact: ContactData;
  footer: FooterData;
}

