export interface SkillCategory {
  title: string;
  skills: { name: string; highlight?: boolean; level?: number }[];
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution?: string;
  score: string;
  scoreLabel: string;
  year?: string;
  icon: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: string;
  description: string;
  keyContributions: string[];
  technologies: string[];
  certificateAvailable?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  category: 'Mathematics & Research' | 'Java & Software' | 'Web & IoT' | 'All';
  description: string;
  fullDescription?: string;
  keyFeatures?: string[];
  methodology?: string[];
  tags: string[];
  icon: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
