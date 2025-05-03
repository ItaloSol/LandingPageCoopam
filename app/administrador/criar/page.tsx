import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function CreateNews() {
  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto py-8">
        <div className="mb-8 flex items-center gap-4">
          <Link href="/administrador/painel">
            <Button variant="outline" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-[#257367]">Nova Notícia</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Informações da Notícia</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Título</label>
                <Input placeholder="Digite o título da notícia" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Descrição</label>
                <Textarea 
                  placeholder="Digite uma breve descrição da notícia"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Conteúdo</label>
                <Textarea 
                  placeholder="Digite o conteúdo completo da notícia"
                  rows={10}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Categoria</label>
                <Input placeholder="Ex: Sustentabilidade, Operações, Novidades" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Data</label>
                <Input type="date" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Imagens</label>
                <Input type="file" multiple accept="image/*" />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#257367] hover:bg-[#1a5249]"
              >
                Publicar Notícia
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}