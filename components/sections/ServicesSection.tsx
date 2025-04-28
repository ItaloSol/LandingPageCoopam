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
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#fa8028] mb-12">
          Serviços e Frota
        </h2>

        <div className="space-y-16">
          {/* Cargo Services */}
          <div className="space-y-8">
            <div className="text-center">
              <Truck className="h-10 w-10 mx-auto text-[#fa8028]" />
              <h3 className="text-2xl font-bold mt-4 text-[#fa8028]">Transporte de Cargas</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cargoServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="text-[#fa8028] mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#fa8028]">Nossa Frota de Cargas</h3>
              <ul className="space-y-2">
                {fleetInfo.cargo.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Truck className="h-5 w-5 mt-1 text-[#fa8028]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Passenger Services */}
          <div className="space-y-8">
            <div className="text-center">
              <Bus className="h-10 w-10 mx-auto text-[#fa8028]" />
              <h3 className="text-2xl font-bold mt-4 text-[#fa8028]">Transporte de Passageiros</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {passengerServices.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="text-[#fa8028] mb-4">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#fa8028]">Nossa Frota de Passageiros</h3>
              <ul className="space-y-2">
                {fleetInfo.passenger.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <Bus className="h-5 w-5 mt-1 text-[#fa8028]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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