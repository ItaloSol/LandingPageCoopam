import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, Award } from "lucide-react";
import Image from "next/image";
const timelineEvents = [
  {
    year: "2008",
    title: "Fundação",
    description: "Início das operações com 20 sócios fundadores"
  },
  {
    year: "2013",
    title: "Expansão",
    description: "Ampliação da frota e área de cobertura"
  },
  {
    year: "2018",
    title: "Certificação",
    description: "Conquista de certificações de qualidade"
  },
  {
    year: "2023",
    title: "15 Anos",
    description: "Marco de excelência em transporte"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#9D9D9D] mb-6">
              Nossa História
            </h2>
            <p className="text-gray-600 mb-6">
              Há 15 anos, a Coopcam nasceu do sonho de 20 sócios fundadores que 
              acreditavam em um novo modelo de transporte cooperativo. Hoje, 
              somos referência em qualidade e eficiência no setor.
            </p>
            <p className="text-gray-600 mb-8">
              Nossa frota moderna e equipe especializada garantem a excelência 
              em cada entrega, sempre priorizando a segurança e satisfação 
              dos nossos clientes.
            </p>
            <Button 
              className="bg-[#257367] hover:bg-[#1a5249] text-white"
            >
              Conheça Nossa História Completa
            </Button>
          </div>
          
          <div className="space-y-6">
            {timelineEvents.map((event, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#257367]"></div>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-[#257367] mb-2">
                    {event.year}
                  </div>
                  <div className="font-semibold mb-1">{event.title}</div>
                  <div className="text-gray-600">{event.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/photo.avif"
                  alt="Cliente"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">João Silva</div>
                  <div className="text-gray-600">Diretor Comercial - ABC Logistics</div>
                </div>
              </div>
              <p className="text-lg text-gray-700 italic">
                &ldquo;A parceria com a Coopcam tem sido fundamental para o crescimento da
                nossa empresa. A pontualidade e segurança nas entregas são diferenciais 
                que fazem toda diferença.&rdquo;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}