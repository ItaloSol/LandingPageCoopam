import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Shield, Clock, Award } from "lucide-react";

const values = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Agilidade",
    description: "Entregas pontuais e eficientes"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Segurança",
    description: "Sua carga protegida em todo o trajeto"
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Pontualidade",
    description: "Compromisso com seus prazos"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Qualidade",
    description: "Excelência em cada serviço"
  }
];

export default function ValuesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#9D9D9D] mb-12">
          Missão & Valores
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-[#9D9D9D] border-opacity-20">
              <CardHeader>
                <div className="text-[#257367] mb-4">{value.icon}</div>
                <CardTitle className="text-[#257367]">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}