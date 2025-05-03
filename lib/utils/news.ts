import path from 'path';
import { promises as fs } from 'fs';

export async function getAllNews() {
  const filePath = path.join(process.cwd(), 'data', 'noticias.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  return data.noticias;
}

export async function getNewsBySlug(slug: string) {
  const news = await getAllNews();
  return news.find((n: any) => n.slug === slug);
}

export async function getFeaturedNews(limit = 3) {
  const news = await getAllNews();
  return news
    .filter((n: any) => n.featured)
    .sort((a: any, b: any) => new Date(b.data).getTime() - new Date(a.data).getTime())
    .slice(0, limit);
}