"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Agilidade, Segurança e Qualidade em cada entrega";
  const [numbers, setNumbers] = useState({
    founders: 0,
    vehicles: 0,
    years: 0,
  });

  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de transporte.";
    const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Number counter effect
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const interval = duration / steps;

    const animate = (start: number, end: number, key: keyof typeof numbers) => {
      let current = 0;
      const increment = end / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setNumbers(prev => ({ ...prev, [key]: Math.round(current) }));
      }, interval);
    };

    animate(0, 20, 'founders');
    animate(0, 100, 'vehicles');
    animate(0, 15, 'years');
  }, []);

  return (
    <section className="relative min-h-screen  flex items-center overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about.webp"
          alt="Background"
          fill
          className="object-cover  bg-black"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#257367]/80 to-[#1a5249]/80"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl ">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            15 anos de excelência em transporte cooperativo
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {typedText}
          </motion.p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Button 
              size="lg" 
              className="bg-[#257367] hover:bg-[#1a5249] text-white transition-all duration-300 hover:-translate-y-0.5"
              onClick={handleWhatsAppClick}
            >
              Solicite um Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white bg-white/10 -translate-y-0.5 shadow-lg transition-all duration-300"
              onClick={scrollToServices}
            >
              Saiba Mais
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2 [text-shadow:_0_1px_0_black,_1px_0_0_black,_0_-1px_0_black,_-1px_0_0_black]">{numbers.founders}+</div>
              <div className="text-sm">Sócios Fundadores</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2 [text-shadow:_0_1px_0_black,_1px_0_0_black,_0_-1px_0_black,_-1px_0_0_black]">{numbers.vehicles}+</div>
              <div className="text-sm">Veículos</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2 [text-shadow:_0_1px_0_black,_1px_0_0_black,_0_-1px_0_black,_-1px_0_0_black]">{numbers.years}</div>
              <div className="text-sm">Anos de Mercado</div>
            </div>
            <div className="text-white text-center">
              <div className="text-3xl font-bold mb-2 [text-shadow:_0_1px_0_black,_1px_0_0_black,_0_-1px_0_black,_-1px_0_0_black]">24/7</div>
              <div className="text-sm">Suporte</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}