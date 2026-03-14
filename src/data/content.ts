simport type { Content, Project, WorkExperience } from "../types";

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
        `I'm a 22-year-old ${highlight} based in Berlin. I build fast, interactive things for the web and love turning complex problems into simple code.`,
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
        "Developer based in Berlin who likes the full picture — from API design to the last UI detail. I care about writing clean, maintainable code and building things that actually work well. Always working on something new.",
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
        "Got a project in mind, an idea you want to explore, or just want to say hi? I'm always up for a good conversation.",
      cta: "Send Message",
      email: "ludwig.engelhardt@protonmail.com",
      statusLabel: "Status: Open to work",
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
        `Ich bin ein 22-jähriger ${highlight} aus Berlin. Ich baue schnelle, interaktive Webseiten und liebe es, komplexe Probleme in einfachen Code zu verwandeln.`,
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
        "Entwickler aus Berlin, der gerne das große Ganze im Blick hat — von der API-Architektur bis zum letzten UI-Detail. Mir liegt sauberer, wartbarer Code am Herzen, und ich baue Dinge, die wirklich funktionieren. Immer am nächsten Projekt.",
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
        "Hast du ein Projekt im Kopf, eine Idee, die du umsetzen möchtest, oder willst einfach Hallo sagen? Ich bin immer für ein gutes Gespräch zu haben.",
      cta: "Nachricht Senden",
      email: "ludwig.engelhardt@protonmail.com",
      statusLabel: "Status: Offen für Arbeit",
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
      en: "An internal dashboard I built during my time at AssistMe — monitors IoT devices across care facilities in real time, tracking equipment status and battery levels via a custom REST API.",
      de: "Ein internes Dashboard, das ich bei AssistMe entwickelt habe — überwacht IoT-Geräte in Pflegeeinrichtungen in Echtzeit und verfolgt Gerätestatus sowie Akkustände über eine eigene REST-API.",
    },
    tags: ["React", "TypeScript", "Tailwind", "REST API"],
    categories: ["frontend", "mobile"],
    liveUrl: "https://www.assistme.io/en/assistme-en/",
  },
  {
    id: "nebula-dash",
    title: "Nebula Dash",
    description: {
      en: "Real-time telemetry dashboard for orbital stations. Handles 10k+ live data points using WebWorkers and local state for smooth, lag-free rendering.",
      de: "Echtzeit-Telemetrie-Dashboard für Orbitalstationen. Verarbeitet 10.000+ Live-Datenpunkte mit WebWorkern und lokalem State für flüssiges, ruckelfreies Rendering.",
    },
    tags: ["React 19", "WebGL", "Tailwind"],
    categories: ["frontend"],
  },
  {
    id: "dark-matter",
    title: "Dark Matter",
    description: {
      en: "A headless component library built for deep space communications — fully accessible, with performance tuned for high-latency environments.",
      de: "Eine Headless-Komponentenbibliothek für Tiefraumkommunikation — vollständig barrierefrei, mit auf Hochlatenz-Umgebungen ausgelegter Performance.",
    },
    tags: ["Java", "Spring Boot"],
    categories: ["backend"],
  },
  {
    id: "exo-market",
    title: "Exo-Market",
    description: {
      en: "A full-stack marketplace platform with secure payment flows and automated inventory management built in.",
      de: "Eine Full-Stack-Marktplatzplattform mit sicheren Zahlungsabläufen und eingebautem automatisiertem Inventurmanagement.",
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
      "Keeping IT systems running for a military unit — network infrastructure, hardware troubleshooting, and making sure critical communication systems stay online.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Networking",
      "Hardware Troubleshooting",
    ],
    achievements: [
      "Maintaining uptime for critical communication infrastructure",
      "On-call for hardware failures and network issues",
    ],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Part-time"],
    description:
      "Continued working with the AssistMe team part-time while finishing my training, shipping features and fixing bugs on the care documentation platform.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Built and shipped features for the care documentation platform",
      "Optimized frontend components, cutting render times noticeably",
    ],
  },
  {
    type: "internship",
    role: "Software Developer",
    company: "AssistMe",
    period: "July 2024 – Sep 2024",
    tags: ["Internship"],
    description:
      "My first real taste of working in a product team — joined AssistMe as an intern and worked on their care platform alongside experienced developers.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Jira",
      "Office 365",
    ],
    achievements: [
      "Got up to speed on contributing to a real production codebase in an agile team",
      "Helped across the board — feature work, hardware support, testing, and writing process documentation",
    ],
  },
  {
    type: "education",
    role: "Media Informatics",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – July 2025",
    tags: ["Vocational Training", "State Certified"],
    description:
      "A 3-year vocational training program covering both software development and creative design. Built applications from the ground up while also developing a strong eye for UI/UX and interactive media.",
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
      "Deep-dive into OOP, software architecture, and design patterns",
      "Full stack web development — dynamic backends, databases, and polished frontends",
      "Built interactive animations and game mechanics from scratch",
    ],
  },
  {
    type: "education",
    role: "Student",
    company: "OSZ Informations- und Medizintechnik",
    period: "June 2020 – Jan 2022",
    tags: ["High School"],
    description:
      "High school with a focus on IT, covering software engineering, databases, and networking. Got my first real exposure to programming through Java and SQL, with a specialization track in medical informatics.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "Python",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Specialization in medical informatics and healthcare data systems",
      "Strong foundation in object-oriented software design",
      "Built and configured simulated network infrastructures using Cisco tools",
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
      "IT-Systeme für eine Bundeswehr-Einheit am Laufen halten — Netzwerkinfrastruktur, Hardware-Support und die Sicherstellung kritischer Kommunikationssysteme.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Netzwerk",
      "Hardware Support",
    ],
    achievements: [
      "Verfügbarkeit kritischer Kommunikationssysteme aufrechterhalten",
      "Schnelle Reaktion bei Hardware-Ausfällen und Netzwerkproblemen",
    ],
  },
  {
    type: "work",
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Teilzeit"],
    description:
      "Parallel zur Ausbildung weiter bei AssistMe aktiv — Features entwickelt und Bugs gefixt auf der Pflegedokumentationsplattform.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Features für die Pflegedokumentationsplattform entwickelt und deployed",
      "Frontend-Komponenten optimiert, Ladezeiten spürbar reduziert",
    ],
  },
  {
    type: "internship",
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Juli 2024 – Sep 2024",
    tags: ["Praktikum"],
    description:
      "Mein erster echter Einblick in die Arbeit in einem Produktteam — als Praktikant bei AssistMe an der Pflegeplattform mitgearbeitet, zusammen mit erfahrenen Entwicklern.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Git",
      "Jira",
      "Office 365",
    ],
    achievements: [
      "Erste Erfahrungen mit echter Produktions-Codebase und agiler Zusammenarbeit gesammelt",
      "Quer durch alle Bereiche geholfen — Feature-Arbeit, Hardware-Support, Testing und Prozessdoku",
    ],
  },
  {
    type: "education",
    role: "Medieninformatik",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – Juli 2025",
    tags: ["Ausbildung", "Staatl. Gepr."],
    description:
      "Dreijährige Ausbildung an der Schnittstelle von Softwareentwicklung und kreativem Design. Anwendungen von Grund auf entwickelt und dabei ein starkes Gespür für UI/UX und interaktive Medien aufgebaut.",
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
      "Vertiefung in OOP, Softwarearchitektur und Designpatterns",
      "Full-Stack-Webentwicklung — dynamische Backends, Datenbanken und saubere Frontends",
      "Interaktive Animationen und Spielmechaniken von Grund auf entwickelt",
    ],
  },
  {
    type: "education",
    role: "Schüler",
    company: "OSZ Informations- und Medizintechnik",
    period: "Juni 2020 – Jan 2022",
    tags: ["Abitur"],
    description:
      "Berufliches Gymnasium mit IT-Schwerpunkt — Programmierung, Datenbanken und Netzwerktechnik. Erste echte Berührungspunkte mit Java und SQL, plus eine Spezialisierung in medizinischer Informatik.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "Python",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Spezialisierung in Medizininformatik und medizinischen Datensystemen",
      "Solides Fundament in objektorientiertem Softwaredesign",
      "Netzwerkinfrastrukturen mit Cisco-Tools simuliert und konfiguriert",
    ],
  },
];
