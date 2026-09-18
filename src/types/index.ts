export interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  image: string;
  content: string[];
}

export interface Partner {
  name: string;
  role: string;
  image: string;
}

export interface Stat {
  label: string;
  value: string;
  change?: string;
}

export interface BootcampModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}
