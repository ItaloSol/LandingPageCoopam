import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'noticias.json');

export async function getNoticias() {
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function addNoticia(data: any) {
  const jsonData = await getNoticias();
  const newId = jsonData.noticias.length > 0 
    ? Math.max(...jsonData.noticias.map((n: any) => n.id)) + 1 
    : 1;
    
  const slug = data.titulo
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
    
  const newNews = {
    id: newId,
    slug,
    ...data,
    featured: false,
    imagens: data.imagens || []
  };

  jsonData.noticias.unshift(newNews);
  await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));
  return newNews;
}