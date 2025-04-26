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
        <h2 className="text-3xl font-bold text-center text-[#9D9D9D] mb-12">
          Serviços e Frota
        </h2>

        <Tabs defaultValue="cargo" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="cargo">Transporte de Cargas</TabsTrigger>
            <TabsTrigger value="passenger">Transporte de Passageiros</TabsTrigger>
          </TabsList>

          <TabsContent value="cargo">
            <div className="space-y-12">
              <div className="aspect-[21/9] relative rounded-lg overflow-hidden mb-12">
                <Image
                  src="/transp_c.webp"
                  alt="Transporte de Cargas"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#257367]/80 to-transparent flex items-center">
                  <div className="text-white p-8 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4">
                      Transporte de Cargas
                    </h3>
                    <p className="text-lg">
                      Soluções completas em transporte de cargas, com segurança e eficiência para sua empresa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {cargoServices.map((service, index) => (
                  <div
                    key={index}
                    className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-[#257367] mb-4">
                          {service.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-[#257367]">Nossa Frota</h3>
                <ul className="space-y-3">
                  {fleetInfo.cargo.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Truck className="h-5 w-5 text-[#257367]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="passenger">
            <div className="space-y-12">
              <div className="aspect-[21/9] relative rounded-lg overflow-hidden mb-12">
                <Image
                  src="/trans_p.webp"
                  alt="Transporte de Passageiros"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#257367]/80 to-transparent flex items-center">
                  <div className="text-white p-8 max-w-2xl">
                    <h3 className="text-3xl font-bold mb-4">
                      Transporte de Passageiros
                    </h3>
                    <p className="text-lg">
                      Conforto e segurança em viagens para grupos, escolas e empresas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {passengerServices.map((service, index) => (
                  <div
                    key={index}
                    className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-[#257367] mb-4">
                          {service.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-[#257367]">Nossa Frota</h3>
                <ul className="space-y-3">
                  {fleetInfo.passenger.map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-center gap-2 text-gray-600"
                    >
                      <Bus className="h-5 w-5 text-[#257367]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-[#257367] hover:bg-[#1a5249] text-white transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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