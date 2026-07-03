export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage?: string | null;
  description?: string | null;
  language?: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
  fork: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  cta: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  type: string;
  details: string[];
}
