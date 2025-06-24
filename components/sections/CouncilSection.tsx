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
    image: "/Advaldo Antonio Zottelle - Diretor Presidente.webp"
  },
  {
    name: "João Batista de Oliveira",
    role: "Diretor Financeiro",
    image: "/Joao-Batista-de-Oliveira-Diretor-Financeiro.webp"
  },
  {
    name: "João Carlos Borges",
    role: "Diretor Secretário",
    image: "/Joao-Carlos-Borges-Diretor-Secretário.webp"
  },
  {
    name: "Ivão Sartori",
    role: "Diretor Vogal",
    image: "/Ivao-Sartori-Diretor-Vogal.webp"
  },
  {
    name: "Sergio Ganho",
    role: "Diretor Vogal",
    image: "/Sergio-Ganho-Diretor-Vogal.webp"
  }
];

const fiscalCouncil = [
    {
    name: "Welinton Bortoloti",
    role: "Efetivo",
    image: "/Welinton-Bortoloti-Efetivo.webp"
  },
  {
    name: "Joicy Rigo",
    role: "Efetivo",
    image: "/Joicy-Rigo-Efetivo.webp"
  },
  {
    name: "Adrieli Rigo",
    role: "Suplente",
    image: "/Adrieli Rigo - Suplente.webp"
  },
  {
    name: "Flávia da Costa Gali",
    role: "Suplente",
    image: "/Flavia da Costa Gali - Suplente.webp"
  },
  {
    name: "Luciano Savio Arpini",
    role: "Suplente",
    image: "/Luciano-Savio-Arpini-Suplente.webp"
  },
  {
    name: "Wendel Stressmann",
    role: "Suplente",
    image: "/Wendel-Strassmann-Efetivo.webp"
  }
];

export default function CouncilSection() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.01,  // Very small threshold to trigger almost immediately
    triggerOnce: true,
    rootMargin: '-100px 0px'  // Adds 100px detection area above the viewport
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
          className="text-3xl font-bold text-center text-[#257367] mb-16"
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
                            className="w-full h-full object-cover object-left-top"
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
                            className="w-full h-full object-cover object-left-top"
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