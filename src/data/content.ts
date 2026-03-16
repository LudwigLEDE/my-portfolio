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
      highlight: "AI-Replaceable Developer",
      ctaProject: "PROJECTS",
      ctaContact: "CONTACT",
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "DEVELOPER",
      location: "Berlin, Germany",
      status: "Open for Opportunities",
      about:
        "I've been coding since school and somewhere along the way I got genuinely hooked. I like building the whole thing - what you see and what's running behind it. Using this to build things that i can use in my life has been a great feeling.",
      journeyTitle: "The Journey",
      techStackTitle: "Tech Stack / Things I have worked with",
      technologiesTitle: "Technologies",
      achievementsTitle: "Key Achievements",
      hoverDetails: "Hover for details",
      skillDurations: {
        TypeScript: "3+ Years",
        "React.js": "3+ Years",
        "Node.js": "3+ Years",
        JavaScript: "3+ Years",
        Python: "3+ Years",
        Java: "3+ Years",
        Linux: "2+ Years",
        Tailwind: "3+ Years",
        "C++": "1+ Year",
        SQL: "1+ Years",
        "React Native": "1+ Year",
        PHP: "1+ Years",
        Figma: "2+ Years",
        Photoshop: "4+ Years",
        Illustrator: "4+ Years",
        "Premiere Pro": "3+ Years",
        "After Effects": "2+ Years",
        "Cinema4D": "3+ Years",
        Microcontrollers: "2+ Years",
      },
      downloadResume: "Email me for CV",
      wantDetails: "Want the full details?",
    },
    projects: {
      title: "Projects",
      filterAll: "All",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
"",
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
        `Berliner ${highlight} der etwas zu aufgeregt wird, wenn Sachen schnell laden und Buttons sich richtig anfühlen. Ich baue alles — von vorne bis hinten. Diese Seite hat übrigens schon sechs Redesigns hinter sich und ich bin immer noch nicht sicher, ob sie fertig ist.`,
      highlight: "KI-ersetzbarer Entwickler",
      ctaProject: "PROJEKTE",
      ctaContact: "KONTAKT",
    },
    cv: {
      title: "Ludwig Engelhardt",
      role: "ENTWICKLER",
      location: "Berlin, Deutschland",
      status: "Offen für Angebote",
      about:
        "Ich programmiere seit der Schule und irgendwann hat es mich wirklich gepackt. Ich baue gerne das Ganze — was man sieht und was dahintersteckt. Das dazu zu nutzen, Dinge zu bauen, die ich in meinem eigenen Leben einsetzen kann, ist ein tolles Gefühl.",
      journeyTitle: "Der Werdegang",
      techStackTitle: "Tech Stack / Dinge, mit denen ich gearbeitet habe",
      technologiesTitle: "Technologien",
      achievementsTitle: "Wichtigste Erfolge",
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
        "Cinema4D": "3+ Jahre",
        Microcontrollers: "2+ Jahre",
      },
      downloadResume: "CV per E-Mail anfragen",
      wantDetails: "Alle Details gewünscht?",
    },
    projects: {
      title: "Projekte",
      filterAll: "Alle",
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle:
        "",
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
    role: "IT Soldier",
    company: "Bundeswehr (IT Battalion)",
    period: "Nov 2025 – Present",
    tags: ["Full-time", "System Support"],
    description:
      "While learning the ways of the army. Getting the education in military IT. Working in a Service Delivery Point, our mission was to provide communication for other troops.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Networking",
      "Hardware Troubleshooting",
    ],
    achievements: [
      "Working on systems that get used battalion-wide.",
      "Knowing how to operate different types of equipment of the army.",
      "Being a part of a group and working under high pressure.",
    ],
  },
  {
    type: "work",
    role: "Software Developer",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Part-time"],
    description:
      "After getting my foot in the door with the internship, I continued working part-time at AssistMe while finishing my vocational training. I contributed to feature development and bug fixes.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Working on analysing big datasets and building features on top of that",
      "Creating policies to optimize workflows in the company",
      "Optimized frontend components, cutting render times noticeably",
      "Refining physical products to make them shippable to customers",
      "Delivering and installing the product in care facilities",
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
      "Getting the opportunity to work on different projects across the company and learning about what it takes to ship a product in the healthcare industry",
    ],
  },
  {
    type: "education",
    role: "Media Informatics",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – July 2025",
    tags: ["Vocational Training", "State Certified"],
    description:
      "A 3-year vocational training program covering both software development, creative design and building hardware components. Built applications from the ground up while also developing a strong eye for UI/UX and interactive media.",
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "PHP",
      "C#",
      "HTML/CSS",
      "Microcontrollers",
      "Cinema4D",
      "Adobe Creative Suite",
    ],
    achievements: [
      "Finishing my school and getting my Fachabitur",
      "Deep-dive into OOP, software architecture, and design patterns",
      "Full stack web development — dynamic backends, databases, and polished frontends",
      "Built interactive animations and game mechanics from scratch",
      "Building applications with a team of classmates and learning how to work together in a team",
    ],
  },
  {
    type: "education",
    role: "Student",
    company: "OSZ Informations- und Medizintechnik",
    period: "June 2020 – Jan 2022",
    tags: ["High School"],
    description:
      "High school with a focus on IT, covering software engineering, databases, and networking. Got my first real exposure to programming through Java and SQL.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Learning the basics of programming and computer science",
      "Strong foundation in object-oriented software design",
      "Built and configured simulated network infrastructures",
    ],
  },
];

export const historyDe: WorkExperience[] = [
  {
    type: "work",
    role: "IT-Soldat",
    company: "Bundeswehr (IT Bataillon)",
    period: "Nov 2025 – Aktuell",
    tags: ["Vollzeit", "System Support"],
    description:
      "Während ich die Abläufe der Bundeswehr kennenlernte, erhielt ich eine Ausbildung in militärischer IT. Im Service Delivery Point war es unsere Aufgabe, andere Truppen mit Kommunikation zu versorgen.",
    technologies: [
      "Windows Server",
      "Linux",
      "Cisco Netzwerk",
      "Hardware Support",
    ],
    achievements: [
      "An Systemen gearbeitet, die bataillonsweit eingesetzt werden.",
      "Verschiedene Ausrüstungstypen der Bundeswehr bedienen können.",
      "Teil einer Gruppe sein und unter hohem Druck arbeiten.",
    ],
  },
  {
    type: "work",
    role: "Software Entwickler",
    company: "AssistMe",
    period: "Sep 2024 – Feb 2025",
    tags: ["Teilzeit"],
    description:
      "Nachdem ich durch das Praktikum Fuß gefasst hatte, arbeitete ich weiterhin in Teilzeit bei AssistMe, während ich meine Ausbildung abschloss. Ich trug zur Feature-Entwicklung und Fehlerbehebung bei.",
    technologies: ["React", "TypeScript", "Node.js", "Git", "Jira", "Rest API"],
    achievements: [
      "Große Datensätze analysiert und darauf aufbauende Features entwickelt",
      "Richtlinien erstellt, um Arbeitsabläufe im Unternehmen zu optimieren",
      "Frontend-Komponenten optimiert, Ladezeiten spürbar reduziert",
      "Physische Produkte verfeinert und versandfertig für Kunden gemacht",
      "Produkt in Pflegeeinrichtungen geliefert und vor Ort installiert",
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
      "Die Möglichkeit genutzt, an verschiedenen Projekten im Unternehmen zu arbeiten und zu lernen, was es braucht, ein Produkt in der Gesundheitsbranche auf den Markt zu bringen",
    ],
  },
  {
    type: "education",
    role: "Medieninformatik",
    company: "Lette Verein Berlin",
    period: "Aug 2022 – Juli 2025",
    tags: ["Ausbildung", "Staatl. Gepr."],
    description:
      "Ein dreijähriges Ausbildungsprogramm, das Softwareentwicklung, kreatives Design und den Aufbau von Hardware-Komponenten abdeckt. Anwendungen von Grund auf entwickelt und dabei ein starkes Gespür für UI/UX und interaktive Medien aufgebaut.",
    technologies: [
      "Java",
      "JavaScript",
      "SQL",
      "PHP",
      "C#",
      "HTML/CSS",
      "Microcontrollers",
      "Cinema4D",
      "Adobe Creative Suite",
    ],
    achievements: [
      "Schule erfolgreich abgeschlossen und Fachabitur erhalten",
      "Vertiefung in OOP, Softwarearchitektur und Designpatterns",
      "Full-Stack-Webentwicklung — dynamische Backends, Datenbanken und saubere Frontends",
      "Interaktive Animationen und Spielmechaniken von Grund auf entwickelt",
      "Anwendungen gemeinsam mit Klassenkameraden entwickelt und gelernt, wie man effektiv im Team arbeitet",
    ],
  },
  {
    type: "education",
    role: "Schüler",
    company: "OSZ Informations- und Medizintechnik",
    period: "Juni 2020 – Jan 2022",
    tags: ["Abitur"],
    description:
      "Gymnasium mit IT-Schwerpunkt, das Softwareentwicklung, Datenbanken und Netzwerktechnik abdeckt. Erste echte Programmiererfahrungen mit Java und SQL.",
    technologies: [
      "Java",
      "SQL",
      "Cisco Networking",
      "HTML/CSS",
      "Linux",
    ],
    achievements: [
      "Grundlagen der Programmierung und Informatik erlernt",
      "Solides Fundament in objektorientiertem Softwaredesign",
      "Netzwerkinfrastrukturen simuliert und konfiguriert",
    ],
  },
];
