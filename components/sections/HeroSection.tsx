"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const handleWhatsAppClick = () => {
  const message = "Olá! Gostaria de solicitar um orçamento para serviços de transporte.";
  const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <picture>
          <source media="(min-width: 768px)" srcSet="/Banner_Topo.webp" />
          <Image
            src="/Banner_Topo.webp"
            alt="Background"
            fill
            className="object-cover bg-black"
            priority
          />
        </picture>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-16 [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
            Tradição e Excelência em transportes de cargas e passageiros
          </h1>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              variant="outline"
              className="text-white bg-white/10 -translate-y-0.5 shadow-lg transition-all duration-300"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-4 w-4" />
              FALE CONOSCO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}