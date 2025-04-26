export interface Page {
  id: string;
  slug: string;
  title: string;
  content: Record<string, any>;
  updated_at: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  published_at: string;
  created_at: string;
}

export interface Section {
  id: string;
  name: string;
  content: Record<string, any>;
  order: number;
  updated_at: string;
}