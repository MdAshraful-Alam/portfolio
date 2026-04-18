import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Md Ashraful Alam",
  headline:
    "Software QA Engineer | Graduate Teaching Assistant | Computer Science Researcher",
  location: "Fort Collins, Colorado",
  seo: {
    title: "Md Ashraful Alam | Portfolio",
    description:
      "Professional portfolio for Md Ashraful Alam, highlighting software quality assurance, graduate teaching, and applied computer science research.",
    socialImage: "og-image.svg",
  },
  navigation: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "patents", label: "Patents" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    eyebrow: "Portfolio",
    title: "Quality-focused engineering, thoughtful teaching, and applied research.",
    intro:
      "I build confidence in software systems through rigorous testing, clear technical communication, and research-driven problem solving. My work spans software QA engineering, graduate instruction, and machine learning applications in healthcare.",
    actions: [
      {
        label: "Resume",
        href: "resume-placeholder.html",
        placeholder: true,
        ariaLabel: "Open resume placeholder page",
      },
      {
        label: "Contact",
        href: "#contact",
        ariaLabel: "Jump to contact section",
      },
      {
        label: "Publications",
        href: "#publications",
        ariaLabel: "Jump to publications section",
      },
    ],
    highlights: [
      "Experienced in API, UI, database, accessibility, and end-to-end testing",
      "Graduate Teaching Assistant supporting core computer science instruction at Colorado State University",
      "Researching practical machine learning methods for healthcare-oriented prediction problems",
    ],
    panelTitle: "Professional Snapshot",
    panelItems: [
      { label: "Based in", value: "Fort Collins, Colorado" },
      { label: "Current focus", value: "QA roles, research, and technical teaching" },
      { label: "Academic path", value: "Ph.D. in Computer Science, expected 2028" },
      { label: "Availability", value: "Open to software QA, research, and teaching opportunities" },
    ],
  },
  about: {
    title: "Bridging software quality, graduate study, and academic support.",
    description:
      "I bring industry QA experience together with graduate-level computer science work and hands-on teaching support.",
    paragraphs: [
      "My background started in software quality assurance, where I worked across web, mobile, API, and database validation workflows. Over time I took on broader responsibilities in test strategy, team coordination, reporting, and quality planning for complex systems.",
      "Alongside that industry experience, I am pursuing advanced computer science studies at Colorado State University while supporting students as a Graduate Teaching Assistant. That combination has strengthened how I explain technical ideas, structure problem solving, and evaluate systems carefully.",
      "My research interests center on machine learning applications in healthcare, especially predictive modeling and reliable analytical workflows. I aim to contribute in roles where quality, rigor, and communication all matter.",
    ],
    focusAreas: [
      "Software quality assurance across manual, automation, API, and database testing",
      "Technical instruction, grading, and student support in core computer science courses",
      "Applied machine learning research with a healthcare orientation",
      "Structured collaboration, documentation, and stakeholder communication",
    ],
  },
  experience: [
    {
      title: "Graduate Teaching Assistant",
      organization: "Department of Computer Science, Colorado State University",
      location: "Fort Collins, CO",
      dates: "Jan 2024 - May 2026",
      highlights: [
        "Supported instruction, grading, and student learning across courses including CS 480A7, CS 312, and CS 201.",
        "Helped students strengthen understanding of core computer science concepts through direct academic support.",
        "Contributed to course delivery with a consistent focus on clarity, fairness, and technical accuracy.",
      ],
    },
    {
      title: "Team Lead, Software Quality Assurance Engineer",
      organization: "Suffix IT Ltd",
      location: "Dhaka, Bangladesh",
      dates: "Nov 2022 - Dec 2023",
      highlights: [
        "Led API, end-to-end, smoke, functional, integration, system, UAT, and accessibility testing activities.",
        "Supported AI-driven testing strategy and predictive analytics initiatives for software reliability planning.",
        "Coordinated quality efforts across teams while keeping test execution and reporting structured and traceable.",
      ],
    },
    {
      title: "Senior Software Quality Assurance Engineer",
      organization: "Suffix IT Ltd",
      location: "Dhaka, Bangladesh",
      dates: "Nov 2021 - Oct 2022",
      highlights: [
        "Validated backend data through SQL queries in Oracle and SQL Server for web and mobile systems.",
        "Produced reports, supported team coordination, and carried out performance and API testing.",
        "Worked across cross-functional delivery processes with a focus on dependable validation and issue tracking.",
      ],
    },
    {
      title: "Junior Software Quality Assurance Engineer",
      organization: "Suffix IT Ltd",
      location: "Dhaka, Bangladesh",
      dates: "Nov 2020 - Oct 2021",
      highlights: [
        "Performed API testing and QA support for web and mobile applications.",
        "Tracked reports, documented bugs clearly, and coordinated with clients during issue follow-up.",
        "Built a strong foundation in test execution, defect communication, and practical delivery support.",
      ],
    },
  ],
  projects: [
    {
      name: "TMA Application System",
      description:
        "Built and validated a structured automation-focused QA workflow for a business application, combining UI testing, API validation, and backend checks.",
      technologies: ["Java", "Selenium", "Cucumber", "TestNG", "Maven", "SQL", "Oracle"],
      highlights: [
        "Implemented an automation framework with Page Object Model practices.",
        "Validated APIs with Postman and performed backend verification with SQL queries.",
        "Balanced automation coverage with practical system-level quality checks.",
      ],
    },
    {
      name: "CEP Application System",
      description:
        "Supported regression and smoke testing efforts for a collaborative product environment with consistent tracking and cross-team communication.",
      technologies: ["Selenium WebDriver", "Java", "Cucumber", "TestNG", "JIRA", "Postman"],
      highlights: [
        "Contributed to automation for recurring regression and smoke testing workflows.",
        "Tracked defects through the JIRA lifecycle and collaborated across teams during delivery.",
        "Supported API testing and daily standup coordination for steady execution.",
      ],
    },
    {
      name: "EBA Application System",
      description:
        "Executed manual and database-focused quality assurance for a system requiring careful functional validation and reporting discipline.",
      technologies: ["Manual Testing", "Database Testing", "SQL"],
      highlights: [
        "Defined test strategy across smoke, functional, integration, and GUI testing.",
        "Performed backend SQL validation and documented verification outcomes clearly.",
        "Maintained a methodical quality process centered on dependable release readiness.",
      ],
    },
  ],
  publications: [
    {
      title:
        "Predictive Modeling of Cardiovascular Disease Using Machine Learning: A Comparative Analysis",
      venue: "ICARC",
      year: "2025",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
    {
      title:
        "A Comprehensive Ensemble-Based Approach for Heart Disease Prediction with Feature Selection and Model Analysis",
      venue: "ICARC",
      year: "2025",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
    {
      title:
        "A Healthcare-Oriented Machine Learning Framework for Early Detection of Type 2 Diabetes",
      venue: "ICMCSI",
      year: "2026",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
    {
      title:
        "AI-Assisted Prognostic Classification in Breast Cancer Using Deep Neural Networks",
      venue: "ICMCSI",
      year: "2026",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
    {
      title:
        "Optimized Transfer Learning Model for Accurate Early Breast Cancer Diagnosis",
      venue: "ICECTE",
      year: "2026",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
    {
      title:
        "AI-Optimized Ensemble Model with Hyperparameter Tuning for Brain Tumor Detection",
      venue: "ICECTE",
      year: "2026",
      link: "https://example.com/publication-link",
      placeholder: true,
    },
  ],
  patents: [
    {
      title: "AI-based autonomous design patent work for healthcare",
      registration: "UK Design Number 6474829",
      date: "Registered October 9, 2025",
      description:
        "Design registration connected to healthcare-oriented AI-based autonomous design work.",
    },
    {
      title:
        "The Dual-Edged Sword of Artificial Intelligence in Cybersecurity: Opportunities and Emerging Threat Vectors for Healthcare",
      registration: "UK Design Number 6497903",
      date: "Registered February 2, 2026",
      description:
        "Registered design work focused on AI, cybersecurity, and emerging healthcare threat considerations.",
    },
  ],
  skills: [
    {
      title: "Testing",
      items: [
        "API Testing",
        "Manual Testing",
        "Smoke Testing",
        "Functional Testing",
        "Integration Testing",
        "System Testing",
        "UAT",
        "Accessibility Testing",
        "End-to-End Testing",
      ],
    },
    {
      title: "Automation",
      items: [
        "Selenium",
        "Selenium WebDriver",
        "Cucumber",
        "TestNG",
        "Page Object Model",
        "Maven",
      ],
    },
    {
      title: "Programming",
      items: ["Java", "TypeScript", "SQL"],
    },
    {
      title: "Databases",
      items: ["Oracle", "SQL Server", "Backend Data Validation"],
    },
    {
      title: "Tools",
      items: ["Postman", "JIRA", "Git", "Report Tracking", "Bug Documentation"],
    },
    {
      title: "Research",
      items: [
        "Machine Learning",
        "Predictive Modeling",
        "Healthcare Analytics",
        "Comparative Analysis",
        "Technical Writing",
      ],
    },
  ],
  education: [
    {
      institution: "Colorado State University",
      degree: "Ph.D. in Computer Science",
      dates: "January 2024 - December 2028 (Expected)",
      location: "Fort Collins, CO",
      details: ["Ongoing doctoral study in computer science."],
    },
    {
      institution: "Colorado State University",
      degree: "M.S. in Computer Science",
      dates: "January 2024 - May 2026",
      location: "Fort Collins, USA",
      details: ["GPA: 3.90/4.0"],
    },
    {
      institution: "Southeast University",
      degree: "B.Sc. in Computer Science and Engineering",
      dates: "January 2016 - October 2020",
      location: "Dhaka, Bangladesh",
      details: ["GPA: 3.31/4.0"],
    },
  ],
  contact: {
    title: "Let's connect about QA, research, or teaching opportunities.",
    description:
      "I'm open to conversations around software testing, research collaboration, graduate-level academic work, and technical teaching support.",
    primaryAction: {
      label: "Email Me",
      href: "mailto:MdAshraful.Alam@Colostate.edu",
      ariaLabel: "Send an email to Md Ashraful Alam",
    },
    secondaryAction: {
      label: "Call",
      href: "tel:9706328249",
      ariaLabel: "Call Md Ashraful Alam",
    },
    items: [
      {
        label: "Email",
        value: "MdAshraful.Alam@Colostate.edu",
        href: "mailto:MdAshraful.Alam@Colostate.edu",
      },
      {
        label: "Phone",
        value: "970-632-8249",
        href: "tel:9706328249",
      },
      {
        label: "Location",
        value: "Fort Collins, Colorado",
        href: "https://maps.google.com/?q=Fort+Collins,+Colorado",
        external: true,
      },
      {
        label: "LinkedIn",
        value: "Add your public LinkedIn profile URL",
        href: "https://www.linkedin.com/in/your-linkedin-url",
        external: true,
        placeholder: true,
      },
    ],
  },
  footer: {
    note: "Built with React, TypeScript, Vite, and a GitHub Pages deployment workflow.",
  },
};
