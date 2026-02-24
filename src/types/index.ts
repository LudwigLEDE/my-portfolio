export type Language = 'en' | 'de';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'systems';
  link?: string;
  image?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  tags: string[];
  description: string;
  type: 'work' | 'education';
  technologies?: string[];
  achievements?: string[];
}

export interface Skill {
  name: string;
  iconName: string; // We'll map string to icon component
  color: string;
}

export interface Content {
  nav: {
    about: string;
    cv: string;
    projects: string;
    contact: string;
  };
  hero: {
    status: string;
    title: string;
    subtitle: (highlight: string) => string; // Function to insert highlighted text
    highlight: string;
    ctaProject: string;
    ctaContact: string;
  };
  cv: {
    title: string;
    role: string;
    location: string;
    status: string;
    about: string;
    journeyTitle: string;
    techStackTitle: string;
    downloadResume: string;
    wantDetails: string;
  };
  projects: {
    title: string;
    filterAll: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    text: string;
    impressum: string;
    privacy: string;
  };
}
