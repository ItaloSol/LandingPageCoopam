import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Facebook, Linkedin, Share2 } from "lucide-react";
import Link from "next/link";
import type { NewsArticle } from "@/app/types/cms";

const allNews = [
  {
    id: 1,
    title: "Nova frota de caminhões elétricos",
    content: `<p>A Coopcam dá mais um passo importante em direção à sustentabilidade com a aquisição de uma nova frota de caminhões elétricos. Este investimento significativo representa não apenas uma evolução em nossa capacidade operacional, mas também um compromisso firme com a redução de nossa pegada de carbono.</p>
    
    <h2>Impacto Ambiental</h2>
    <p>Com esta iniciativa, estimamos uma redução de 40% em nossas emissões de CO2 nos próximos dois anos. Os novos veículos são equipados com tecnologia de ponta em eficiência energética e possuem autonomia suficiente para atender nossa demanda de entregas urbanas.</p>
    
    <h2>Tecnologia e Inovação</h2>
    <p>Cada veículo conta com sistemas avançados de telemetria e monitoramento em tempo real, permitindo otimização de rotas e maior eficiência operacional. A recarga completa é realizada em nossas instalações durante a noite, garantindo disponibilidade máxima durante o dia.</p>`,
    summary: "Investimento em sustentabilidade com aquisição de veículos elétricos para entregas urbanas.",
    image: "https://images.unsplash.com/photo-1589309736098-538675d2f8f4?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581092067387-f15e4ed2e8ee?auto=format&fit=crop&q=80"
    ],
    date: "2024-02-15",
    category: "Sustentabilidade"
  },
  {
    id: 2,
    title: "Expansão das operações no Nordeste",
    content: `<p>A Coopcam marca presença ainda mais forte no Nordeste com a inauguração de seu novo centro de distribuição em Recife. Esta expansão estratégica fortalece nossa capacidade de atendimento em toda a região.</p>
    
    <h2>Estrutura Moderna</h2>
    <p>O novo CD conta com 5.000m² de área construída, sistemas automatizados de separação e tecnologia de ponta em gestão de estoques. A localização privilegiada permite fácil acesso às principais rodovias da região.</p>`,
    summary: "Coopcam inaugura novo centro de distribuição em Recife para melhor atender a região.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116493-da15085c5f4c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586528116425-28821ce6da6c?auto=format&fit=crop&q=80"
    ],
    date: "2024-02-10",
    category: "Operações"
  }
];

const relatedNews = [
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
  }
];

export function generateStaticParams() {
  return allNews.map((news) => ({
    id: news.id.toString(),
  }));
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = allNews.find(news => news.id === parseInt(params.id));

  if (!article) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-[#257367]">Home</Link>
          <span>/</span>
          <Link href="/noticias" className="hover:text-[#257367]">Notícias</Link>
          <span>/</span>
          <span className="text-gray-700">{article.title}</span>
        </nav>

        <article className="bg-white rounded-lg shadow-sm p-8 mb-12">
          {/* Header */}
          <header className="mb-8">
            <Badge className="mb-4 bg-[#257367]">{article.category}</Badge>
            <h1 className="text-4xl font-bold text-[#525252] mb-4">
              {article.title}
            </h1>
            <div className="flex items-center justify-between">
              <time className="text-sm text-[#9D9D9D]">
                {new Date(article.date).toLocaleDateString('pt-BR')}
              </time>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#257367]"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`, '_blank')}
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#257367]"
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`, '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#257367]"
                  onClick={() => window.open(`https://api.whatsapp.com/send?text=${article.title} ${typeof window !== 'undefined' ? window.location.href : ''}`, '_blank')}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Summary */}
          <div className="text-lg text-[#525252] mb-8 font-medium">
            {article.summary}
          </div>

          {/* Content */}
          <div
            className="prose max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Gallery */}
          {article.gallery && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#525252] mb-6">Galeria</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {article.gallery.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`${article.title} - Imagem ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related News */}
        <section>
          <h2 className="text-2xl font-bold text-[#525252] mb-8">
            Você também pode gostar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedNews.map((news) => (
              <Link href={`/noticias/${news.id}`} key={news.id}>
                <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
                  <div className="aspect-[4/3] relative">
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
                    <time className="text-sm text-gray-500">
                      {new Date(news.date).toLocaleDateString('pt-BR')}
                    </time>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/noticias">
              <Button variant="outline" className="text-[#257367]">
                Ver Todas as Notícias
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}