'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { NewsModal } from '@/components/NewsModal';
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface News {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  imagens: string[];
  conteudo: string;
}

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <p className="text-center">Carregando notícias...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/">
            <Button variant="outline" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-[#257367]">Notícias</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
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
                    priority={false}
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
          news={selectedNews ? {
            id: parseInt(selectedNews.id, 10), // Convert string ID to number
            title: selectedNews.titulo,
            content: selectedNews.conteudo,
            image: selectedNews.imagens[0],
            gallery: selectedNews.imagens, // Pass the full array including the main image
            date: selectedNews.data,
            category: selectedNews.categoria
          } : null}
        />
      </div>
    </main>
  );
}