'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsModal } from '@/components/NewsModal';

interface News {
  id: number; // Change type from string to number
  titulo: string;
  descricao: string;
  conteudo: string;
  imagens: string[];
  data: string;
  categoria: string;
}

export default function NewsSection() {
  const [news, setNews] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/noticias');
        const data = await response.json();
        // Sort news by date in descending order (newest first)
        const sortedNews = data.noticias.sort((a: News, b: News) => 
          new Date(b.data).getTime() - new Date(a.data).getTime()
        );
        setNews(sortedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#9D9D9D]">
            Últimas Notícias
          </h2>
          <Link href="/noticias">
            <Button variant="outline" className="text-[#257367]">
              Ver Todas
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedNews(item)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedNews(item);
                }
              }}
            >
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <div className="aspect-video relative">
                  <Image
                    src={item.imagens[0]}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                  />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-2 bg-[#257367]">{item.categoria}</Badge>
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-[#257367] transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {item.descricao}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(item.data).toLocaleDateString('pt-BR')}
                    </span>
                    <span className="text-[#257367] text-sm font-medium">
                      Leia Mais
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <NewsModal
          isOpen={!!selectedNews}
          onClose={() => setSelectedNews(null)}
          // No change needed here now, as selectedNews.id is correctly typed as number
          news={selectedNews ? { 
            id: selectedNews.id, // This is now number | undefined
            title: selectedNews.titulo,
            content: selectedNews.conteudo,
            image: selectedNews.imagens[0],
            gallery: selectedNews.imagens,
            date: selectedNews.data,
            category: selectedNews.categoria
          } : null /* If selectedNews is null, pass null */} 
        />
      </div>
    </section>
  );
}