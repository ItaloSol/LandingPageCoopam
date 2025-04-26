"use client";

import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from '@/lib/supabase';
import type { NewsArticle, Section } from '../types/cms';

export default function AdminPanel() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [newArticle, setNewArticle] = useState({
    title: '',
    content: '',
    image_url: ''
  });

  useEffect(() => {
    loadContent();
  }, []);

  async function loadContent() {
    const { data: newsData } = await supabase
      .from('news')
      .select('*')
      .order('published_at', { ascending: false });

    const { data: sectionsData } = await supabase
      .from('sections')
      .select('*')
      .order('order', { ascending: true });

    if (newsData) setNews(newsData);
    if (sectionsData) setSections(sectionsData);
  }

  async function handleNewsSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const { data, error } = await supabase
      .from('news')
      .insert([newArticle])
      .select();

    if (!error && data) {
      setNewArticle({ title: '', content: '', image_url: '' });
      loadContent();
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Painel Administrativo</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* News Management */}
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Notícias</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleNewsSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Título da notícia"
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({
                    ...newArticle,
                    title: e.target.value
                  })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Conteúdo da notícia"
                  value={newArticle.content}
                  onChange={(e) => setNewArticle({
                    ...newArticle,
                    content: e.target.value
                  })}
                />
              </div>
              <div>
                <Input
                  placeholder="URL da imagem"
                  value={newArticle.image_url}
                  onChange={(e) => setNewArticle({
                    ...newArticle,
                    image_url: e.target.value
                  })}
                />
              </div>
              <Button type="submit">Publicar Notícia</Button>
            </form>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Notícias Publicadas</h3>
              <div className="space-y-4">
                {news.map((article) => (
                  <Card key={article.id}>
                    <CardContent className="pt-4">
                      <h4 className="font-semibold">{article.title}</h4>
                      <p className="text-sm text-gray-500">
                        {new Date(article.published_at).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section Management */}
        <Card>
          <CardHeader>
            <CardTitle>Gerenciar Seções</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sections.map((section) => (
                <Card key={section.id}>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{section.name}</h4>
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}