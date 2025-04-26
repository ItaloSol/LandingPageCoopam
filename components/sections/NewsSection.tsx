"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const categories = ["Operações", "Sustentabilidade", "Novidades", "Tecnologia"];

const recentNews = [
  {
    id: 1,
    title: "Dia C 2024: evento realizado em São Gabriel da Palha reforça poder do cooperativismo",
    summary: "Com a proposta de estreitar ainda mais os laços com a comunidade, as cooperativas Cooabriel, Coopcam,  Coopesg e Sicoob realizaram em São Gabriel da Palha, um grande evento em comemoração ao Dia de Cooperar 2024.",
    image: "/1.webp",
    date: "2024-02-15",
    category: "Sustentabilidade"
  },
  {
    id: 2,
    title: "Coopcam realiza a AGO 2024 com muito sucesso",
    summary: "A Coopcam realizou no dia 23 de março de 2024 a sua Assembleia Geral Ordinária presencial.",
    image: "/diac.webp",
    date: "2024-02-10",
    category: "Operações"
  },
  {
    id: 3,
    title: "DIA C 2023: Cooperativas de São Gabriel da Palha se unem para celebrar o Dia do Cooperativismo",
    summary: "Intercooperação e muita alegria foram presenças marcantes na celebração do Dia C 2023, em São Gabriel da Palha. O dia festivo aconteceu no último dia 2 e foi realizado pelas cooperativas Cooabriel, Coopcam, Coopesg e Sicoob Conexão, com o apoio da cooperativa mirim Coop-União.  As ações foram patrocinadas pelo Sistema OCB-ES/ SESCOOP/ES.",
    image: "/diac2.webp",
    date: "2024-07-15",
    category: "Novidades"
  }
];

export default function NewsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredNews = selectedCategory
    ? recentNews.filter(news => news.category === selectedCategory)
    : recentNews;

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

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg">
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
                  <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={news.id === 1}
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
    </section>
  );
}