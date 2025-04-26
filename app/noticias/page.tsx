"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const categories = ["Operações", "Sustentabilidade", "Novidades", "Tecnologia"];

const allNews = [
  {
    id: 1,
    title: "Nova frota de caminhões elétricos",
    summary: "Investimento em sustentabilidade com aquisição de veículos elétricos para entregas urbanas.",
    image: "/about.webp",
    date: "2024-02-15",
    category: "Sustentabilidade"
  },
  {
    id: 2,
    title: "Expansão das operações no Nordeste",
    summary: "Coopcam inaugura novo centro de distribuição em Recife para melhor atender a região.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    date: "2024-02-10",
    category: "Operações"
  },
  {
    id: 3,
    title: "Certificação ISO 9001 renovada",
    summary: "Mais um ano de reconhecimento pela excelência em nossos processos de qualidade.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    date: "2024-02-05",
    category: "Novidades"
  },
  {
    id: 4,
    title: "Implementação de novo sistema de rastreamento",
    summary: "Tecnologia de ponta para monitoramento em tempo real de toda a frota.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80",
    date: "2024-02-01",
    category: "Tecnologia"
  },
  {
    id: 5,
    title: "Programa de capacitação de motoristas",
    summary: "Investimento em treinamento e desenvolvimento profissional da equipe.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
    date: "2024-01-28",
    category: "Operações"
  },
  {
    id: 6,
    title: "Parceria com projeto de reflorestamento",
    summary: "Compromisso com a compensação de carbono através do plantio de árvores.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80",
    date: "2024-01-25",
    category: "Sustentabilidade"
  }
];

export default function NoticiasPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredNews = selectedCategory
    ? allNews.filter(news => news.category === selectedCategory)
    : allNews;

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-[#9D9D9D]">Notícias</h1>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-4">
              <h3 className="font-semibold mb-4">Categorias</h3>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${!selectedCategory ? 'bg-[#257367] text-white' : ''}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  Todas
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className={`w-full justify-start ${
                      selectedCategory === category ? 'bg-[#257367] text-white' : ''
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((news) => (
                <Link href={`/noticias/${news.id}`} key={news.id}>
                  <Card className="overflow-hidden bg-white h-full hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <Badge className="mb-2 bg-[#257367]">{news.category}</Badge>
                      <h3 className="font-bold text-lg mb-2 line-clamp-2 hover:text-[#257367] transition-colors">
                        {news.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {news.summary}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(news.date).toLocaleDateString('pt-BR')}
                        </span>
                        <span className="text-[#257367] text-sm font-medium">
                          Leia Mais
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}