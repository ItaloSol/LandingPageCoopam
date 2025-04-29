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
    "Utilitários para agilidade nas pequenas cargas e entregas urbanas",
    "Caminhões de pequeno e médio porte proporcionando adequada rapidez",
    "Caminhões pesados – Carretas e Truck's – para carga seca e a granel"
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
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center text-[#257367] mb-12">
          Serviços e Frota
        </h2>

        {/* Cargo Services */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10 mb-16">
          <div className="w-full md:w-1/2">
            <Image 
              src="/transp_c.webp" 
              alt="Transporte de Cargas"
              width={600}
              height={400}
              className="rounded-md object-cover w-full"
            />
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2">
            <h2 className="text-[#257367] font-extrabold text-xl md:text-2xl uppercase">
              TRANSPORTE DE CARGAS
            </h2>
            <div className="h-0.5 w-10 bg-[#257367] mt-2 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              {cargoServices.map(service => service.title).join('\n')}
            </p>
            <p className="text-[#257367] font-bold mt-6 mb-2">
              Possuímos em nossa frota:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              {fleetInfo.cargo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            
          </div>
        </div>

        <hr className="border-t border-gray-200 mb-16" />

        {/* Passenger Services */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-10">
          <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
            <h2 className="text-[#257367] font-extrabold text-xl md:text-2xl uppercase">
              TRANSPORTE DE PASSAGEIROS
            </h2>
            <div className="h-0.5 w-10 bg-[#257367] mt-2 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">
              {passengerServices.map(service => service.title).join('\n')}
            </p>
            <p className="text-[#257367] font-bold mt-6 mb-2">
              Possuímos em nossa frota:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              {fleetInfo.passenger.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <Image 
              src="/trans_p.webp" 
              alt="Transporte de Passageiros"
              width={600}
              height={400}
              className="rounded-md object-cover w-full"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-[#fa8028] hover:bg-[#e67323] text-white transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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