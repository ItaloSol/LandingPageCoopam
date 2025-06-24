'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import { EditNewsModal } from '@/components/EditNewsModal';

interface News {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  data: string;
  imagens: string[];
  slug: string;
  conteudo: string;
}

export default function AdminPanel() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/noticias');
      const data = await response.json();
      setNews(data.noticias);
    } catch (error) {
      console.error('Error fetching news:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao carregar notícias"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta notícia?')) {
      return;
    }

    try {
      const response = await fetch(`/api/noticia?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        toast({
          title: "Sucesso",
          description: "Notícia excluída com sucesso"
        });
        fetchNews();
      } else {
        throw new Error('Failed to delete news');
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao excluir notícia"
      });
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#257367]">Painel Administrativo</h1>
          <Link href="/administrador/criar">
            <Button className="bg-[#257367] hover:bg-[#1a5249]">
              <Plus className="mr-2 h-4 w-4" />
              Nova Notícia
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {loading ? (
            <p className="text-center py-8">Carregando notícias...</p>
          ) : news.length === 0 ? (
            <p className="text-center py-8">Nenhuma notícia encontrada</p>
          ) : (
            news.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 p-4">
                    <div className="w-24 h-24 relative flex-shrink-0">
                      <Image
                        src={`/${item.imagens[0]}`}
                        alt={item.titulo}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <Badge className="mb-2 bg-[#257367]">{item.categoria}</Badge>
                      <h2 className="text-lg font-semibold mb-1">
                        {item.titulo}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {format(new Date(item.data), "dd 'de' MMMM 'de' yyyy", {
                          locale: ptBR,
                        })}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => setSelectedNews(item)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        <EditNewsModal
          isOpen={!!selectedNews}
          onClose={() => setSelectedNews(null)}
          news={selectedNews}
          onUpdate={fetchNews}
        />
      </div>
    </main>
  );
}