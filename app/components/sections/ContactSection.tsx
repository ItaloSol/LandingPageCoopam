"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function ContactSection() {
  const handleWhatsAppClick = (phone: string) => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da COOPCAM.";
    const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-[#257367] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Nome"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="Empresa"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="E-mail"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input
                  type="tel"
                  placeholder="Telefone"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Textarea
                placeholder="Mensagem"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                rows={4}
              />
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" />
                <label htmlFor="newsletter">
                  Desejo receber novidades por e-mail
                </label>
              </div>
              <Button type="submit" className="bg-white text-[#257367] hover:bg-white/90">
                Enviar Mensagem
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 text-white hover:text-white/90 w-full justify-start"
                  onClick={() => handleWhatsAppClick('27 99911 0772')}
                >
                  <Phone className="h-5 w-5" />
                  <span>+55 27 99911 0772</span>
                </Button>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>coopcam@coopcam.coop.br</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <span>Av. Bartimeu Gomes de Aguiar, 1777, Santa Helena, São Gabriel da Palha - ES, Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white/80">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white/80">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-white/80">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}