"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Truck,
  Bus,
  Package,
  Users,
  Building,
  Clock,
  MessageSquare
} from "lucide-react";
import Image from "next/image";

const cargoServices = [
  {
    icon: <Package className="h-6 w-6" />,
    title: "Carga Seca e Granel",
    description: "Transporte especializado para cargas secas e granéis sólidos"
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Cargas em Geral",
    description: "Soluções flexíveis para diversos tipos de mercadorias"
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Estruturas de Apoio",
    description: "Infraestrutura completa para operações logísticas"
  }
];

const passengerServices = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Transporte Escolar",
    description: "Serviço seguro e pontual para estudantes"
  },
  {
    icon: <Bus className="h-6 w-6" />,
    title: "Viagens e Excursões",
    description: "Conforto e segurança para suas viagens"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Locação Empresarial",
    description: "Soluções personalizadas para empresas"
  }
];

const fleetInfo = {
  cargo: [
    "Utilitários (pequenas cargas urbanas)",
    "Caminhões pequenos/médios (rapidez)",
    "Carretas e Truck's (cargas pesadas)"
  ],
  passenger: [
    "Ônibus Leito, Executivo ou Convencional",
    "Micro ônibus e Vans",
    "Veículos utilitários para transportes ágeis"
  ]
};

export default function ServicesSection() {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para serviços de transporte.";
    const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      {/* Agricultural Producers Section */}
     
      {/* The rest of the ServicesSection (Passenger Services, WhatsApp button, etc.) remains unchanged */}
      <div className="container  mx-auto px-4 max-w-7xl">

        {/* Cargo Services */}
       

      <div className="flex flex-col lg:flex-row min-h-[700px] w-full">
        <div className="bg-gray-50 w-full lg:w-[45%] flex flex-col justify-center p-6 md:p-8 lg:p-10 clip-custom relative">
          <h1 className="text-[#257367] text-[48px] leading-[56px] font-normal max-w-[480px]">
            Transporte<br />de <strong className="font-extrabold">Cargas</strong>
          </h1>
          <p className="text-black text-[16px] leading-6 mt-6 max-w-[480px] font-normal">
            Nosso compromisso é garantir que a sua carga ou produção chegue ao destino com eficiência e segurança.
          </p>
          <ul className="text-[#257367] text-[18px] leading-7 font-extrabold mt-6 max-w-[480px] list-disc list-inside space-y-1">
            <li>Cargas secas</li>
            <li>Granel sólido</li>
            <li>Estruturas de apoio</li>
          </ul>
          <h2 className="text-[#257367] text-[36px] leading-[44px] font-extrabold max-w-[480px] mt-12">
            Frota <span className="font-normal">ampla e Moderna</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:space-x-20 mt-8 max-w-[480px]">
            <div className="flex items-start space-x-3 max-w-[280px] mb-8 sm:mb-0">
              <div className="w-1.5 h-8 bg-black rounded-full mt-1"></div>
              <p className="font-extrabold text-[18px] leading-7 max-w-[260px] text-[#257367]">
                Caminhões Truck’s<br />e Carretas
              </p>
            </div>
            <div className="flex items-start space-x-3 max-w-[280px] mb-6 sm:mb-0">
              <div className="w-1.5 h-8 bg-black rounded-full mt-1"></div>
              <p className="font-extrabold text-[18px] leading-7 max-w-[260px] text-[#257367]">
                Caminhões de pequeno<br />e médio porte
              </p>
            </div>
            <div className="flex items-start space-x-3 max-w-[280px]">
              <div className="w-1.5 h-8 bg-black rounded-full mt-1"></div>
              <p className="font-extrabold text-[18px] leading-7 max-w-[260px] text-[#257367]">
                Veículos utilitários<br />para pequenas cargas
              </p>
            </div>
          </div>
          <style jsx>{`
            .clip-custom {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px));
            }
            @media (max-width: 1024px) {
              .clip-custom {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px));
                padding: 2rem !important;
              }
            }
            @media (max-width: 768px) {
              .clip-custom {
                clip-path: none !important;
                padding: 1.5rem !important;
              }
            }
          `}</style>
        </div>
        <div className="w-full lg:w-[55%]">
          <Image
            src="/transporte_cargas.webp"
            alt="Large white truck driving on a road at sunset with an orange sky and clouds"
            width={1920}
            height={1080}
            className="w-full h-full object-cover object-right"
            priority
          />
        </div>
      </div>

              {/*asdasd*/}
 <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 md:px-20 py-10 md:py-16 gap-8 md:gap-0"> 
          <div className="max-w-xl text-left">
            <p className="text-black text-[22px] md:text-[24px] font-normal leading-tight mb-2 md:mb-4">
              Parceria ideal para
            </p>
            <h1 className="text-[#257367] font-extrabold text-[40px] md:text-[48px] leading-[1.1] mb-4 md:mb-6">
              Produtores,
              <br />
              Agroindústria
              <br />
              e Cooperativas
            </h1>
            <p className="text-black text-[16px] md:text-[18px] font-normal leading-relaxed max-w-md">
              As melhores soluções para o transporte de grãos como café, pimenta, milho, trigo, produtos de hortifruti como coco e verduras, insumos fertilizantes, máquinas e equipamentos.
            </p>
          </div>
          <div className="flex-shrink-0 max-w-[320px] md:max-w-[420px]">
            <Image
              src="/maos_cafe.webp"
              alt="Handshake formed by coffee beans arranged to look like two hands shaking"
              width={420}
              height={280}
              className="w-full h-auto object-contain "
              priority={false}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-around bg-[#2a1a0f] px-6 md:px-20 py-10 gap-10 md:gap-0">
          <div className="flex items-center gap-6 max-w-xs md:max-w-sm">
            <Image
              src="/icone_seguranca.webp"
              alt="3D shield icon in orange and white with a padlock in the center"
              width={100}
              height={120}
              className="w-[100px] h-[120px] object-contain"
              priority={false}
            />
            <p className="text-white font-extrabold text-[20px] leading-snug">
              Seguro total das cargas contra furto, roubo e acidentes.
            </p>
          </div>
          <div className="flex items-center gap-6 max-w-xs md:max-w-sm">
            <Image
              src="/icone_caminhao.webp"
              alt="Illustration of a yellow and blue truck with an orange location pin icon above it with signal waves"
              width={120}
              height={120}
              className="w-[120px] h-[120px] object-contain"
              priority={false}
            />
            <p className="text-white font-extrabold text-[20px] leading-snug">
              Roteirização inteligente e rastreamento em tempo real
            </p>
          </div>
          <Image
            src="/folha_cafe.webp"
            alt="Bright green coffee plant leaves with visible veins and texture"
            width={120}
            height={120}
            className="hidden md:block w-[120px] h-[120px] object-contain"
            priority={false}
          />
        </div>
      </div>
        <hr className="border-t border-gray-200 mb-16" />

        {/* Passenger Services */}

        {/* Passenger Transport Section */}
        <div className="flex flex-col lg:flex-row min-h-[700px] w-full">
          <div className="bg-gray-50 w-full lg:w-[45%] flex flex-col justify-center p-6 md:p-8 lg:p-10 clip-custom relative">
            <h1 className="text-[#257367] text-[48px] leading-[56px] font-normal max-w-[480px]">
              Transporte<br />de <strong className="font-extrabold">Pessoas</strong>
            </h1>
            <p className="text-black text-[16px] leading-6 mt-6 max-w-[480px] font-normal">
              Na estrada, nossa missão é levar você com tranquilidade, segurança e conforto.
              <br />
              Contamos com motoristas experientes, veículos revisados regularmente e atenção total ao bem-estar dos passageiros.
            </p>
            <ul className="text-[#257367] text-[18px] leading-7 font-extrabold mt-6 max-w-[480px] list-disc list-inside space-y-1">
              {passengerServices.map(service => (
                <li key={service.title}>{service.title}</li>
              ))}
            </ul>
            <h2 className="text-[#257367] text-[36px] leading-[44px] font-extrabold max-w-[480px] mt-12">
              Frota <span className="font-normal">ampla e Moderna</span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:space-x-20 mt-6 max-w-[480px]">
              {fleetInfo.passenger.map((item, index) => (
                <div key={index} className="flex items-start space-x-3 max-w-[280px] mb-6 sm:mb-0">
                  <div className="w-1.5 h-8 bg-black rounded-full mt-1"></div>
                  <p className="font-extrabold text-[18px] leading-7 max-w-[260px] text-[#257367]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <style jsx>{`
            .clip-custom {
              clip-path: polygon(0 0, 100% 0, 100% 100%, 40px 100%, 0 calc(100% - 40px));
            }
            @media (max-width: 1024px) {
              .clip-custom {
                clip-path: polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px));
                padding: 2rem !important;
              }
            }
            @media (max-width: 768px) {
              .clip-custom {
                clip-path: none !important;
                padding: 1.5rem !important;
              }
            }
          `}</style>
          </div>
          <div className="w-full lg:w-[55%]">
            <Image
              src="/onibus.webp"
              alt="White modern bus driving on a road at sunset with an orange sky and clouds"
              width={1920}
              height={1080}
              className="w-full h-full object-cover object-left"
              priority
            />
          </div>
        </div>
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-[#fa8028] hover:bg-[#e67323] text-black transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            onClick={handleWhatsAppClick}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Solicite um Orçamento
          </Button>
        </div>
      </div>

    </section>
  );
}