"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
const administrationCouncil = [
  {
    name: "Advaldo A. Zotelle",
    role: "Diretor Presidente",
    image: "/advaldo-500x500.webp"
  },
  {
    name: "João Batista de Oliveira",
    role: "Diretor Financeiro",
    image: "/joao_batista_oliveira-500x500.webp"
  },
  {
    name: "João Carlos Borges",
    role: "Diretor Secretário",
    image: "/joao_carlos-500x500.webp"
  },
  {
    name: "Ivão Sartori",
    role: "Diretor Vogal",
    image: "/ivao_sartori-500x500.webp"
  },
  {
    name: "Sergio Ganho",
    role: "Diretor Vogal",
    image: "/sergio_gancho-500x500.webp"
  }
];

const fiscalCouncil = [
  {
    name: "Ademilson Rigo",
    role: "Efetivo",
    image: "/ademilson_rigo-500x500.webp"
  },
  {
    name: "Ilson Ardison",
    role: "Efetivo",
    image: "/ilson_ardisom-500x500.webp"
  },
  {
    name: "Welinton Bortoloti",
    role: "Efetivo",
    image: "/welington_bortoloti-500x500.webp"
  },
  {
    name: "Anjo Gabriel Fioroti",
    role: "Suplente",
    image: "/anjo_fiorot-500x500.webp"
  },
  {
    name: "Josiane Bruziguini de Jesus",
    role: "Suplente",
    image: "/josiane-500x500.webp"
  },
  {
    name: "Wendel Stressmann",
    role: "Suplente",
    image: "/wendel-500x500.webp"
  }
];

export default function CouncilSection() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-[#9D9D9D] mb-16"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          Conselheiros
        </motion.h2>

        <div className="space-y-16">
          {/* Conselho de Administração */}
          <div>
            <motion.h3 
              className="text-2xl font-bold text-center text-[#257367] mb-8"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              Conselho de Administração
            </motion.h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {administrationCouncil.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <Card className="text-center bg-white h-full flex flex-col">
                    <CardContent className="pt-6 flex flex-col flex-grow">
                      <div className="mb-4 flex-shrink-0">
                        <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h4 className="font-bold text-lg text-[#257367] mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {member.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Conselho Fiscal */}
          <div>
            <motion.h3 
              className="text-2xl font-bold text-center text-[#257367] mb-8"
              variants={titleVariants}
              initial="hidden"
              animate={controls}
            >
              Conselho Fiscal
            </motion.h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {fiscalCouncil.map((member, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <Card className="text-center bg-white h-full flex flex-col">
                    <CardContent className="pt-6 flex flex-col flex-grow">
                      <div className="mb-4 flex-shrink-0">
                        <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            priority
                          />
                        </div>
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h4 className="font-bold text-lg text-[#257367] mb-1">
                          {member.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {member.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}