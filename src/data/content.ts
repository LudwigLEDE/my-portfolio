import type { Content, Project, WorkExperience } from '../types';

export const content: Record<'en' | 'de', Content> = {
  en: {
    nav: {
      about: "About",
      cv: "CV",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      status: "FREELANCE READY",
      title: "LEDE",
      subtitle: (highlight) => `I'm a 22-year-old ${highlight} based in Berlin. I build fast, interactive things for the web and love turning complex problems into simple code.`,
      highlight: "Full Stack Developer",
      ctaProject: "PROJECTS",
      ctaContact: "CONTACT"
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "FULL STACK DEVELOPER",
      location: "Berlin, Germany",
      status: "Open for Opportunities",
      about: "As an emerging Full Stack Developer, I am deeply engaged in honing my skills in Python, Java, and web technologies. My goal is to blend front and back-end development expertise to innovate in the tech industry.",
      journeyTitle: "The Journey",
      techStackTitle: "Tech Stack",
      downloadResume: "Download Resume",
      wantDetails: "Want the full details?"
    },
    projects: {
      title: "Projects",
      filterAll: "All"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      cta: "Send Message"
    },
    footer: {
      text: "DESIGNED BY LUDWIG ENGELHARDT",
      impressum: "Imprint",
      privacy: "Privacy Policy"
    }
  },
  de: {
    nav: {
      about: "Über Mich",
      cv: "Lebenslauf",
      projects: "Projekte",
      contact: "Kontakt"
    },
    hero: {
      status: "FREELANCE BEREIT",
      title: "LEDE",
      subtitle: (highlight) => `Ich bin ein 22-jähriger ${highlight} aus Berlin. Ich baue schnelle, interaktive Webseiten und liebe es, komplexe Probleme in einfachen Code zu verwandeln.`,
      highlight: "Full Stack Entwickler",
      ctaProject: "PROJEKTE",
      ctaContact: "KONTAKT"
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "FULL STACK ENTWICKLER",
      location: "Berlin, Deutschland",
      status: "Offen für Angebote",
      about: "Als aufstrebender Full Stack Entwickler vertiefe ich meine Fähigkeiten in Python, Java und Webtechnologien. Mein Ziel ist es, Front- und Back-End-Expertise zu verbinden, um Innovationen in der Tech-Industrie voranzutreiben.",
      journeyTitle: "Der Werdegang",
      techStackTitle: "Tech Stack",
      downloadResume: "Lebenslauf laden",
      wantDetails: "Alle Details benötigt?"
    },
    projects: {
      title: "Projekte",
      filterAll: "Alle"
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Ich bin immer offen für Gespräche über neue Projekte, kreative Ideen oder Möglichkeiten, Teil Ihrer Visionen zu werden.",
      cta: "Nachricht Senden"
    },
    footer: {
      text: "DESIGNED BY LUDWIG ENGELHARDT",
      impressum: "Impressum",
      privacy: "Datenschutz"
    }
  }
};

export const projects: Project[] = [
  {
    id: 'nebula-dash',
    title: 'Nebula Dash',
    description: 'Real-time telemetry for orbital stations. Processes 10k+ data points utilizing WebWorkers and localized state management.',
    tags: ['React 19', 'WebGL', 'Tailwind'],
    category: 'frontend'
  },
  {
    id: 'dark-matter',
    title: 'Dark Matter',
    description: 'A headless design system for deep space comms. Fully accessible and optimized for high-latency inter-planetary connections.',
    tags: ['Java', 'Spring Boot'],
    category: 'backend'
  },
  {
    id: 'exo-market',
    title: 'Exo-Market',
    description: 'Scalable marketplace infrastructure. Features secure transactions and automated inventory management.',
    tags: ['Python', 'React Native'],
    category: 'fullstack'
  }
];

export const historyEn: WorkExperience[] = [
  {
    type: 'work',
    role: "IT Specialist",
    company: "Bundeswehr (IT Battalion)",
    period: "Nov 2025 – Present",
    tags: ["Full-time", "System Support"],
    description: "Supporting daily IT operations and maintaining hardware connectivity for the unit.",
    technologies: ["Windows Server", "Linux", "Cisco Networking", "Hardware Troubleshooting"],
    achievements: ["Ensuring high availability of critical communication systems", "Rapid response to hardware failures"]
  },
  {
    type: 'work',
    role: "Software Developer",
    company: "AssistMe",
    period: "July 2024 – Feb 2025",
    tags: ["Part-time", "Internship"],
    description: "Contributed to software development, gaining hands-on experience in a professional environment.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira"],
    achievements: ["Collaborated on key features for the care documentation platform", "Improved frontend component performance"]
  },
  {
    type: 'education',
    role: "Media Informatics",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – July 2025",
    tags: ["Vocational Training", "State Certified"],
    description: "Intensive training in media informatics, covering Java, Adobe Creative Suite, and web technologies.",
    technologies: ["Java", "C#", "SQL", "PHP", "Adobe CC", "HTML/CSS"],
    achievements: ["Completed rigorous 3-year state certification", "Specialized in Full Stack Web Development"]
  },
  {
    type: 'education',
    role: "Student",
    company: "OSZ Informations- und Medizintechnik",
    period: "June 2020 – Jan 2022",
    tags: ["High School"],
    description: "Secondary education with a focus on information and medical technology.",
    technologies: ["C++", "Python", "Electronics", "Network Basics"],
    achievements: ["Focus on medical information systems"]
  }
];

export const historyDe: WorkExperience[] = [
  {
    type: 'work',
    role: "IT Spezialist",
    company: "Bundeswehr (IT Bataillon)",
    period: "Nov 2025 – Aktuell",
    tags: ["Vollzeit", "System Support"],
    description: "Unterstützung des täglichen IT-Betriebs und Sicherstellung der Hardware-Konnektivität der Einheit.",
    technologies: ["Windows Server", "Linux", "Cisco Netzwerk", "Hardware Support"],
    achievements: ["Sicherstellung der Hochverfügbarkeit kritischer Kommunikationssysteme", "Schnelle Reaktion auf Hardwareausfälle"]
  },
  {
    type: 'work',
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Juli 2024 – Feb 2025",
    tags: ["Teilzeit", "Praktikum"],
    description: "Mitwirkung an der Softwareentwicklung, praktische Erfahrung in einem professionellen Umfeld.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira"],
    achievements: ["Mitarbeit an Schlüsselfunktionen der Pflegedokumentationsplattform", "Verbesserung der Frontend-Performance"]
  },
  {
    type: 'education',
    role: "Medieninformatik",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – Juli 2025",
    tags: ["Ausbildung", "Staatl. Gepr."],
    description: "Intensive Ausbildung in Medieninformatik, inklusive Java, Adobe Creative Suite und Webtechnologien.",
    technologies: ["Java", "C#", "SQL", "PHP", "Adobe CC", "HTML/CSS"],
    achievements: ["Abschluss der 3-jährigen staatlichen Zertifizierung", "Spezialisierung auf Full Stack Webentwicklung"]
  },
  {
    type: 'education',
    role: "Schüler",
    company: "OSZ Informations- und Medizintechnik",
    period: "Juni 2020 – Jan 2022",
    tags: ["Abitur"],
    description: "Sekundarschulbildung mit Schwerpunkt auf Informations- und Medizintechnik.",
    technologies: ["C++", "Python", "Elektronik", "Netzwerkgrundlagen"],
    achievements: ["Schwerpunkt auf medizinischen Informationssystemen"]
  }
];
