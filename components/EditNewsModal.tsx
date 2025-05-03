import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface News {
  id: string;
  titulo: string;
  descricao: string;
  conteudo: string;
  categoria: string;
  data: string;
  imagens: string[];
  slug: string;
}

interface EditNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: News | null;
  onUpdate: () => void;
}

export function EditNewsModal({ isOpen, onClose, news, onUpdate }: EditNewsModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<News>>({});
  const [newImages, setNewImages] = useState<File[]>([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  // Update form data when news changes or modal opens
  useEffect(() => {
    if (news && isOpen) {
      setFormData({
        titulo: news.titulo,
        descricao: news.descricao,
        conteudo: news.conteudo,
        categoria: news.categoria,
        data: news.data.split('T')[0], // Format date for input
        imagens: news.imagens,
        slug: news.slug
      });
      setNewImages([]);
    }
  }, [news, isOpen]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setNewImages(prev => [...prev, ...files]);
    }
  };

  const removeImage = (index: number, isNewImage: boolean) => {
    if (isNewImage) {
      setNewImages(prev => prev.filter((_, i) => i !== index));
    } else {
      setFormData(prev => ({
        ...prev,
        imagens: prev.imagens?.filter((_, i) => i !== index)
      }));
    }
  };

  const uploadImages = async (): Promise<string[]> => {
    const uploadedPaths: string[] = [];

    for (const file of newImages) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');

        const data = await response.json();
        uploadedPaths.push(data.path);
      } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
      }
    }

    return uploadedPaths;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.titulo || !formData.descricao || !formData.data) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Preencha todos os campos obrigatórios"
      });
      return;
    }

    try {
      setLoading(true);
      setUploadingImages(true);

      // Upload new images if any
      let newImagePaths: string[] = [];
      if (newImages.length > 0) {
        newImagePaths = await uploadImages();
      }

      // Combine existing and new image paths
      const allImages = [
        ...(formData.imagens || []),
        ...newImagePaths
      ];

      const response = await fetch('/api/noticia', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          id: news?.id,
          imagens: allImages
        }),
      });

      if (response.ok) {
        toast({
          title: "Sucesso",
          description: "Notícia atualizada com sucesso"
        });
        onUpdate();
        onClose();
      } else {
        throw new Error('Failed to update news');
      }
    } catch (error) {
      console.error('Error updating news:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro ao atualizar notícia"
      });
    } finally {
      setLoading(false);
      setUploadingImages(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Reset form when modal closes
  const handleClose = () => {
    setFormData({});
    setNewImages([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Editar Notícia</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Título</label>
            <Input
              name="titulo"
              value={formData.titulo || ''}
              onChange={handleChange}
              placeholder="Digite o título da notícia"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Descrição</label>
            <Textarea
              name="descricao"
              value={formData.descricao || ''}
              onChange={handleChange}
              placeholder="Digite uma breve descrição da notícia"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Conteúdo</label>
            <Textarea
              name="conteudo"
              value={formData.conteudo || ''}
              onChange={handleChange}
              placeholder="Digite o conteúdo completo da notícia"
              rows={10}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Categoria</label>
            <Input
              name="categoria"
              value={formData.categoria || ''}
              onChange={handleChange}
              placeholder="Ex: Sustentabilidade, Operações, Novidades"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Data</label>
            <Input
              type="date"
              name="data"
              value={formData.data || ''}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium">Imagens</label>
            
            {/* Current Images */}
            {formData.imagens && formData.imagens.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {formData.imagens.map((image, index) => (
                  <div key={index} className="relative group aspect-video">
                    <Image
                      src={image}
                      alt={`Imagem ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                    <button
                      title="Remove image"
                      type="button"
                      onClick={() => removeImage(index, false)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* New Images Preview */}
            {newImages.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
                {newImages.map((file, index) => (
                  <div key={index} className="relative group aspect-video">
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={`Nova imagem ${index + 1}`}
                      fill
                      className="object-cover rounded-md"
                    />
                    <button
                      title="Remove image"
                      type="button"
                      onClick={() => removeImage(index, true)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <Input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              multiple
              className="mt-2"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#257367] hover:bg-[#1a5249]"
              disabled={loading || uploadingImages}
            >
              {loading ? 'Salvando...' : uploadingImages ? 'Enviando imagens...' : 'Salvar Alterações'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}