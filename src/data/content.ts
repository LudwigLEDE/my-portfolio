import type { Content, Project, WorkExperience } from "../types";

export const content: Record<"en" | "de", Content> = {
  en: {
    nav: {
      about: "About",
      cv: "CV",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      status: "FREELANCE READY",
      title: "LEDE",
      subtitle: (highlight) =>
        `Berlin-based ${highlight} who gets a bit too excited about things loading fast and buttons feeling just right. I build the whole thing — front to back. This site alone has had six redesigns and I'm still not sure it's ready.`,
      highlight: "Full Stack Developer",
      ctaProject: "PROJECTS",
      ctaContact: "CONTACT",
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "FULL STACK DEVELOPER",
      location: "Berlin, Germany",
      status: "Open for Opportunities",
      about:
        "I've been coding since school and somewhere along the way I got genuinely hooked. I like building the whole thing — what you see and what's running behind it. Caring about both turns out to be pretty rare, and pretty useful.",
      journeyTitle: "The Journey",
      techStackTitle: "Tech Stack",
      technologiesTitle: "Technologies",
      achievementsTitle: "Key Achievements",
      hoverDetails: "Hover for details",
      skillDurations: {
        TypeScript: "3+ Years",
        "React.js": "3+ Years",
        "Node.js": "2+ Years",
        JavaScript: "4+ Years",
        Python: "2+ Years",
        Java: "3+ Years",
        Linux: "2+ Years",
        Tailwind: "2+ Years",
        "C++": "1+ Year",
        SQL: "2+ Years",
        "React Native": "1+ Year",
        PHP: "2+ Years",
        Figma: "2+ Years",
        Photoshop: "5+ Years",
        Illustrator: "4+ Years",
        "Premiere Pro": "3+ Years",
        "After Effects": "2+ Years",
      },
      downloadResume: "Download Resume",
      wantDetails: "Want the full details?",
    },
    projects: {
      title: "Projects",
      filterAll: "All",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Got something you're building? Big project, quick question, or just want to say hi — drop me a message, I actually reply.",
      cta: "Send Message",
    },
    footer: {
      text: "DESIGNED BY LUDWIG ENGELHARDT",
      impressum: "Imprint",
      privacy: "Privacy Policy",
    },
  },
  de: {
    nav: {
      about: "Über Mich",
      cv: "Lebenslauf",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      status: "FREELANCE BEREIT",
      title: "LEDE",
      subtitle: (highlight) =>
        `Berliner ${highlight} der etwas zu aufgeregt wird, wenn Sachen schnell laden und Buttons sich richtig anfühlen. Ich baue alles — von vorne bis hinten. Diese Seite hat übrigens schon sechs Redesigns hinter sich und ich bin immer noch nicht sicher, ob sie fertig ist.`,
      highlight: "Full Stack Entwickler",
      ctaProject: "PROJEKTE",
      ctaContact: "KONTAKT",
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "FULL STACK ENTWICKLER",
      location: "Berlin, Deutschland",
      status: "Offen für Angebote",
      about:
        "Ich programmiere seit der Schule und irgendwann hat es mich wirklich gepackt. Ich baue gerne das Ganze — was man sieht und was dahintersteckt. Beides gleichzeitig gut hinzukriegen ist selten, und ziemlich praktisch.",
      journeyTitle: "Der Werdegang",
      techStackTitle: "Tech Stack",
      technologiesTitle: "Technologien",
      achievementsTitle: "Herausragende Erfolge",
      hoverDetails: "Hover für Details",
      skillDurations: {
        TypeScript: "3+ Jahre",
        "React.js": "3+ Jahre",
        "Node.js": "2+ Jahre",
        JavaScript: "4+ Jahre",
        Python: "2+ Jahre",
        Java: "3+ Jahre",
        Linux: "2+ Jahre",
        Tailwind: "2+ Jahre",
        "C++": "1+ Jahr",
        SQL: "2+ Jahre",
        "React Native": "1+ Jahr",
        PHP: "2+ Jahre",
        Figma: "2+ Jahre",
        Photoshop: "5+ Jahre",
        Illustrator: "4+ Jahre",
        "Premiere Pro": "3+ Jahre",
        "After Effects": "2+ Jahre",
      },
      downloadResume: "Lebenslauf laden",
      wantDetails: "Alle Details benötigt?",
    },
    projects: {
      title: "Projekte",
      filterAll: "Alle",
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle:
        "Du baust gerade was? Großes Projekt, schnelle Frage oder einfach Hallo — schreib mir, ich antworte wirklich.",
      cta: "Nachricht Senden",
    },
    footer: {
      text: "DESIGNED BY LUDWIG ENGELHARDT",
      impressum: "Impressum",
      privacy: "Datenschutz",
    },
  },
};

export const projects: Project[] = [
  {
    id: "assist-me",
    title: "Assist Me Devtool",
    description: {
      en: "Internal dashboard for managing IoT-enabled care facilities. I developed features for real-time monitoring of patient equipment and battery status, integrating with a custom REST API to streamline facility maintenance.",
      de: "Internes Dashboard zur Verwaltung von IoT-gestützten Pflegeeinrichtungen. Ich habe Funktionen zur Echtzeit-Überwachung von Patientengeräten und Batterieständen entwickelt und eine REST-API integriert, um die Wartung der Einrichtungen zu optimieren.",
    },
    tags: ["React", "TypeScript", "Tailwind", "REST API"],
    categories: ["frontend", "mobile"],
    githubUrl: "",
    liveUrl: "https://www.assistme.io/en/assistme-en/",
  },
  {
    id: "nebula-dash",
    title: "Nebula Dash",
    description: {
      en: "Real-time telemetry for orbital stations. Processes 10k+ data points utilizing WebWorkers and localized state management.",
      de: "Echtzeit-Telemetrie für Orbitalstationen. Verarbeitet über 10.000 Datenpunkte mithilfe von WebWorkern und lokalisiertem Zustandsmanagement.",
    },
    tags: ["React 19", "WebGL", "Tailwind"],
    categories: ["frontend"],
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    description: {
      en: "A headless design system for deep space comms. Fully accessible and optimized for high-latency inter-planetary connections.",
      de: "Ein Headless-Design-System für die Tiefraumkommunikation. Vollständig barrierefrei und optimiert für interplanetare Verbindungen mit hoher Latenz.",
    },
    tags: ["Java", "Spring Boot"],
    categories: ["backend"],
  },
  {
    id: "exo-market",
    title: "Exo-Market",
    description: {
      en: "Scalable marketplace infrastructure. Features secure transactions and automated inventory management.",
      de: "Skalierbare Marktplatz-Infrastruktur. Bietet sichere Transaktionen und automatisierte Bestandsverwaltung.",
    },
    tags: ["Python", "React Native"],
    categories: ["fullstack"],
  },
];

export const historyEn: WorkExperience[] = [
  {
    type: "work",
    role: "IT Specialist",
    company: "Bundeswehr (IT Battalion)",
    period: "Nov 2025 – Present",
    tags: ["Full-time", "System Support"],
    description:
      "Supporting daily IT operations and maintaining hardware connectivity for the unit.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Networking",
      "Hardware Troubleshooting",
    ],
    achievements: [
      "Ensuring high availability of critical communication systems",
      "Rapid response to hardware failures",
    ],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Part-time"],
    description:
      "Contributed to software development, gaining hands-on experience in a professional environment.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Collaborated on key features for the care documentation platform",
      "Improved frontend component performance",
    ],
  },
  {
    type: "internship",
    role: "Software Developer",
    company: "AssistMe",
    period: "July 2024 – Sep 2024",
    tags: ["Internship"],
    description:
      "Internship in line with my education, contributing to software development and gaining practical experience in a professional setting.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Jira",
      "Office 365",
    ],
    achievements: [
      "Learning how to contribute to a production codebase and collaborate in an agile team",
      "Assisting the company in different areas, like hardware support and testing and creating documentation for company processes",
    ],
  },
  {
    type: "education",
    role: "Media Informatics",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – July 2025",
    tags: ["Vocational Training", "State Certified"],
    description:
      "State-certified program in Media Informatics and Interactive Animation. Specialized in bridging technical software engineering with creative design, covering application development, UI/UX design, and interactive media production.",
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "PHP",
      "C#",
      "HTML/CSS",
      "Adobe Creative Suite",
    ],
    achievements: [
      "Advanced training in Object-Oriented Programming and Software Design",
      "Full Stack Web Development focusing on dynamic systems and databases",
      "Implementation of interactive animations and game mechanics",
    ],
  },
  {
    type: "education",
    role: "Student",
    company: "OSZ Informations- und Medizintechnik",
    period: "June 2020 – Jan 2022",
    tags: ["High School"],
    description:
      "Berufliches Gymnasium specializing in Information Technology. Core studies included Software Engineering (Java/OOP), Database Systems (SQL), and Network Technology (Cisco Academy). Focused on integrating IT with medical data processing.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "Python",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Deep focus on Medical Informatics and Healthcare AI",
      "Extensive training in object-oriented software design",
      "Hands-on network infrastructure simulation and configuration",
    ],
  },
];

export const historyDe: WorkExperience[] = [
  {
    type: "work",
    role: "IT Spezialist",
    company: "Bundeswehr (IT Bataillon)",
    period: "Nov 2025 – Aktuell",
    tags: ["Vollzeit", "System Support"],
    description:
      "Unterstützung des täglichen IT-Betriebs und Sicherstellung der Hardware-Konnektivität der Einheit.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Netzwerk",
      "Hardware Support",
    ],
    achievements: [
      "Sicherstellung der Hochverfügbarkeit kritischer Kommunikationssysteme",
      "Schnelle Reaktion auf Hardwareausfälle",
    ],
  },
  {
    type: "work",
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Teilzeit"],
    description:
      "Mitwirkung an der Softwareentwicklung, praktische Erfahrung in einem professionellen Umfeld.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Mitarbeit an Schlüsselfunktionen der Pflegedokumentationsplattform",
      "Verbesserung der Frontend-Performance",
    ],
  },
  {
    type: "internship",
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Juli 2024 – Sep 2024",
    tags: ["Praktikum"],
    description:
      "Praktikum im Rahmen meiner Ausbildung, Mitwirkung an der Softwareentwicklung und praktische Erfahrung in einem professionellen Umfeld.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Jira",
      "Office 365",
    ],
    achievements: [
      "Erlernen der Mitarbeit an einer Produktions-Codebase und Zusammenarbeit in einem agilen Team",
      "Unterstützung des Unternehmens in verschiedenen Bereichen wie Hardware-Support, Testing und Erstellung von Prozessdokumentationen",
    ],
  },
  {
    type: "education",
    role: "Medieninformatik",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – Juli 2025",
    tags: ["Ausbildung", "Staatl. Gepr."],
    description:
      "Staatlich geprüfte Ausbildung zum informationstechnischen Assistenten für Medieninformatik & Interaktive Animation. Fokus auf der Verzahnung von Software Engineering mit kreativem Design, Anwendungsentwicklung und UI/UX.",
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "PHP",
      "C#",
      "HTML/CSS",
      "Adobe Creative Suite",
    ],
    achievements: [
      "Vertiefte Ausbildung in objektorientierter Programmierung und Softwaredesign",
      "Full-Stack-Webentwicklung mit Fokus auf dynamische Systeme und Datenbanken",
      "Umsetzung interaktiver Animationen und Game-Mechaniken",
    ],
  },
  {
    type: "education",
    role: "Schüler",
    company: "OSZ Informations- und Medizintechnik",
    period: "Juni 2020 – Jan 2022",
    tags: ["Abitur"],
    description:
      "Berufliches Gymnasium mit Schwerpunkt Informationstechnik. Kernfächer umfassten Software Engineering (Java/OOP), Datenbanksysteme (SQL) und Netzwerktechnik (Cisco Academy). Fokus auf die Verzahnung von IT mit medizinischer Datenverarbeitung.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "Python",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Vertiefter Fokus auf Medizininformatik und KI im Gesundheitswesen",
      "Fundierte Ausbildung in objektorientiertem Softwaredesign",
      "Praxisnahe Netzwerkinfrastruktur-Simulation und Konfiguration",
    ],
  },
];
