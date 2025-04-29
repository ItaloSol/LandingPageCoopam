"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image and Gradient Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/about.webp"
          alt="Background"
          fill
          className="object-cover bg-black"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#257367]/80 to-[#1a5249]/80"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-[800px]">
        <div className="mb-8">
          <Image 
            src="/logo.png" 
            alt="Logo"
            width={200}
            height={80}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Tradição e Excelência em transportes de cargas e passageiros
        </h1>
      </div>
    </section>
  );
}