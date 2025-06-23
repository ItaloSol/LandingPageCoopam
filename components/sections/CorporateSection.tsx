"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

export default function CorporateSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const facilities = [
    {
      title: "Instalações Modernas",
      description: "Sede administrativa ampla e moderna com escritórios, sala de reunião, sala vip para cooperados e loja de conveniências.",
      image: "/insta.webp"
    },
    {
      title: "Amplo Pátio Logístico",
      description: "Espaço amplo para manobras e estacionamento seguro monitorado 24 horas.",
      image: "/patio.webp"
    },
    {
      title: "Ponto de Combustível",
      description: "Abastecimento com preços e vantagens exclusivas para cooperados, representando grande economia.",
      image: "/posto-2.webp"
    },
    {
      title: "Área de Lazer",
      description: "Espaço para recreação e lazer composto por campo de futebol, espaço para festas e quiosque com bela vista para o lago.",
      image: "/area.webp"
    }
  ];
  const images = [
    {
      src: "/patio.webp",
      alt: "Amplo pátio logístico da Coopcam"
    },
    {
      src: "/posto-2.webp",
      alt: "Ponto de combustível da Coopcam"
    },
    {
      src: "/insta.webp",
      alt: "Instalações modernas da Coopcam"
    },
    {
      src: "/area.webp",
      alt: "Área de lazer da Coopcam"
    }
  ];

  const features = [
    "Frota moderna\nE diversificada",
    "Operação logística\nIntegrada",
    "Atendimento\nPersonalizado",
    "Preços justos e\nCompetitivos",
    "Frota rastreada\ne segura",
    "Responsabilidade\ncom o Meio Ambiente"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative min-h-screen bg-[#f97316] overflow-x-hidden">
     

      <div className="relative z-10 container mx-auto px-4 max-w-7xl overflow-x-hidden">
        {/* Main content */}
        <div className="max-w-[1440px] mx-auto px-6 py-10 md:py-16 lg:py-20 flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Left text block */}
          <div className="flex flex-col max-w-[480px] text-white">
            <h1 className="text-[56px] sm:text-[72px] font-normal leading-[1.1] font-montserrat">
              Somos a
              <strong className="font-extrabold block mt-1 text-[56px] sm:text-[72px] leading-[1.1]">
                Coopcam
              </strong>
            </h1>
            <p className="mt-6 font-extrabold text-[15px] leading-5 max-w-[350px] text-white/90">
              Transporte com segurança, agilidade e compromisso com o seu destino.
            </p>
            <p className="mt-6 text-[15px] leading-5 max-w-[350px] text-white/90 font-normal">
              Desde 2008 a COOPCAM atua com excelência no transporte de cargas e passageiros, unindo a força do cooperativismo à confiança de quem conhece o caminho.
            </p>
            <p className="mt-6 text-[15px] leading-5 max-w-[350px] text-white/90 font-normal">
              Como uma cooperativa de transportes, temos o compromisso com uma gestão profissional e transparente que garantem diferenciais exclusivos aos nossos clientes.
            </p>
          </div>

          {/* Right image with navigation */}
          <div className="flex-1 max-w-[720px] relative">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              width={720}
              height={400}
              className="w-full h-auto object-cover rounded-xl border-4 border-white/60 shadow-lg"
            />
            <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
              <Button
                onClick={prevImage}
                className="bg-white/40 hover:bg-white/60 text-white rounded-full w-12 h-12 border border-white/60"
              >
                &lt;
              </Button>
              <Button
                onClick={nextImage}
                className="bg-white/40 hover:bg-white/60 text-white rounded-full w-12 h-12 border border-white/60"
              >
                &gt;
              </Button>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="max-w-[1200px] mx-auto px-6 pb-10 md:pb-16 lg:pb-20 text-white font-extrabold text-[18px] leading-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 max-w-[360px]">
              <div className="bg-white/20 text-white rounded-lg p-3 shrink-0">
                <FaCheck />
              </div>
              <div>
                {feature.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < feature.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="opacity-0 animate-fade-slide-up"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <Card className="overflow-hidden h-full bg-white/90">
                <div className="aspect-[4/3] relative">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={false}
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2 text-[#f97316]">
                    {facility.title}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .font-montserrat { font-family: 'Montserrat', 'Arial', sans-serif; }
      `}</style>
    </section>
  );
}