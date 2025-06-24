"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
export default function ContactSection() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const containerStyle = {
    width: '800px',
    maxWidth: '100%',
    margin: '0 auto'
  };

  const handleWhatsAppClick = (phone: string) => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da COOPCAM.";
    const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.",
        });
        e.currentTarget.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4" style={containerStyle}>
        <div className="flex flex-col gap-12" style={{width: '800px', maxWidth: '100%', margin: '0 auto'}}>
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                placeholder="Nome"
                className="bg-gray-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                required
              />
              <Input
                name="company"
                placeholder="Empresa"
                className="bg-gray-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
              />
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                className="bg-gray-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                required
              />
              <Input
                name="phone"
                type="tel"
                placeholder="Telefone"
                className="bg-gray-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
              />
              <Textarea
                name="message"
                placeholder="Mensagem"
                className="bg-gray-100 border-gray-300 text-gray-800 placeholder:text-gray-500"
                rows={4}
                required
              />
              <div className="flex items-center gap-2">
                <Checkbox id="newsletter" name="newsletter" />
                <label htmlFor="newsletter">
                  Desejo receber novidades por e-mail
                </label>
              </div>
              <Button 
                type="submit" 
                className="bg-[#257367] text-white hover:bg-[#1a5249] w-full"
                disabled={isLoading}
              >
                {isLoading ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 text-[#257367] hover:text-[#1a5249] w-full justify-start"
                  onClick={() => handleWhatsAppClick('27 99911 0772')}
                >
                  <Phone className="h-5 w-5" />
                  <span>(27) 99911-0772</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex items-center gap-3 text-[#257367] hover:text-[#1a5249] w-full justify-start"
                >
                  <Phone className="h-5 w-5" />
                  <span>(27) 3727-1374</span>
                  </Button>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span>coopcam@coopcam.coop.br</span>
                </div>
                <div className="w-full h-64 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.222366160044!2d-40.524913!3d-18.962455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU3JzQ0LjgiUyA0MMKwMzEnMjkuNyJX!5e0!3m2!1sen!2sbr!4v1620000000000!5m2!1sen!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}