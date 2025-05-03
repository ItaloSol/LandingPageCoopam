'use client';

import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { format, isValid } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from './ui/button';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: {
    id: number;
    title: string;
    content?: string;
    image: string;
    gallery?: string[];
    date: string;
    category: string;
  } | null;
}

export function NewsModal({ isOpen, onClose, news }: NewsModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!news) return null;

  // Use news.gallery directly if it exists and has items, otherwise use news.image
  const images = news.gallery && news.gallery.length > 0 ? news.gallery : [news.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (!isValid(date)) {
        return 'Data não informada';
      }
      return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
    } catch {
      return 'Data não informada';
    }
  };

  const formatContent = (content: string) => {
    if (!content) return '';
    
    return content
      .split('\n')
      .map((paragraph) => {
        // Format quotes
        paragraph = paragraph.replace(/"([^"]+)"/g, '<div class="bg-gray-100 p-4 my-4 rounded-lg italic">"$1"</div>');
        
        // Format bold text
        paragraph = paragraph.replace(/##([^#]+)##/g, '<strong>$1</strong>');
        
        // Format list items
        paragraph = paragraph.replace(/\*\*([^*]+)\*\*/g, '<li class="ml-6 list-disc">$1</li>');
        
        return paragraph;
      })
      .join('<br />');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogTitle className="sr-only">{news.title}</DialogTitle>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-4 z-50 bg-white/80 hover:bg-white shadow-md"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </Button>

        <div className="relative w-full aspect-video group">
          <Image
            src={images[currentImageIndex]}
            alt={`${news.title} - Imagem ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            priority
          />
          {images.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div 
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1.5 rounded-full text-white text-sm"
                role="status"
                aria-live="polite"
              >
                {currentImageIndex + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        <div className="p-6">
          {images.length > 1 && (
            <div 
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-9 gap-2 mb-4"
              role="tablist"
              aria-label="Galeria de imagens"
            >
              {images.map((image, index) => ( // This map will now use the corrected 'images' array
                <button
                  type="button"
                  key={index}
                  className={`relative aspect-video cursor-pointer rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#257367] ${
                    index === currentImageIndex ? 'ring-2 ring-[#257367]' : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  role="tab"
                  aria-selected={index === currentImageIndex}
                  aria-label={`Imagem ${index + 1} de ${images.length}`}
                >
                  <Image
                    src={image} // Ensure image paths start with '/' or are absolute URLs
                    alt={`${news.title} - Miniatura ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge className="bg-[#257367]">{news.category}</Badge>
              <time 
                dateTime={news.date}
                className="text-sm text-gray-500"
              >
                {formatDate(news.date)}
              </time>
            </div>
            <h2 className="text-2xl font-bold">{news.title}</h2>
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(news.content || '') }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}