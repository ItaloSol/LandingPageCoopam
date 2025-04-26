"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Target, Compass, Heart } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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

const identityCards = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Missão",
    content: "Oferecer ao cooperado serviços do ramo de transporte de cargas, buscando a excelência e a satisfação dos nossos clientes e cooperados, com segurança e qualidade por meio do cooperativismo."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Visão",
    content: "Ser reconhecida como uma das melhores empresas de transportes de carga na percepção dos nossos clientes, colaboradores, sociedade e principalmente dos nossos cooperados, tendo como pilares a melhoria contínua e o crescimento constante."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Valores",
    content: "Cooperação, Transparência, Ética, Profissionalismo, Parceria de respeito com clientes e colaboradores, Comprometimento e Organização."
  }
];

export default function CorporateSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.2
      }
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.2,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-3xl font-bold text-[#9D9D9D] mb-4">
            Quem Somos?
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-6">
              COOPCAM 15 ANOS. JUNTOS VAMOS ALÉM!
            </p>
            <p className="text-gray-600">
              A Coopcam, cooperativa de transportes que se destaca pela excelência e 
              compromisso com a qualidade, celebra 15 anos de uma trajetória bem-sucedida.
            </p>
            <p className="text-gray-600 mt-4">
              Fundada em 2008, através da união e cooperação entre 20 sócios fundadores 
              e com apenas 2 colaboradores, a Coopcam vem evoluindo constantemente para 
              oferecer o melhor aos seus cooperados e se consagrando como referência na 
              oferta de serviços de transporte seguros e eficientes.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={timelineVariants}
              custom={index}
              initial="hidden"
              animate={controls}
            >
              <Card className="overflow-hidden">
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
                  <h3 className="font-bold text-lg mb-2 text-[#257367]">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-center text-[#9D9D9D] mb-12">
            Identidade Corporativa
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {identityCards.map((card, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                custom={index}
                initial="hidden"
                animate={controls}
              >
                <Card className="bg-white">
                  <CardContent className="pt-6">
                    <div className="text-[#257367] mb-4 flex justify-center">
                      {card.icon}
                    </div>
                    <h4 className="text-xl font-bold text-center mb-4 text-[#257367]">
                      {card.title}
                    </h4>
                    <p className="text-gray-600 text-center">
                      {card.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}