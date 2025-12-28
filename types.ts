
export enum Language {
  AR = 'ar',
  FR = 'fr',
  EN = 'en',
  ES = 'es'
}

export interface SectionProps {
  lang: Language;
}

export interface Project {
  id: number;
  title: Record<Language, string>;
  category: string;
  img: string;
  client: Record<Language, string>;
  scope: Record<Language, string>;
  year: string;
  location: Record<Language, string>;
  projectType: Record<Language, string>;
}

export interface NavItem {
  label: Record<Language, string>;
  href: string;
}

export type PublicSubPage = 'home' | 'about' | 'services' | 'projects' | 'careers' | 'contact' | 'privacy' | 'cookies' | 'safety';

/**
 * Defines the main view contexts of the application.
 */
export type ViewType = 'public' | 'admin';
