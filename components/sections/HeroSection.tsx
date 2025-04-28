"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/capa.jpg"
        alt="Capa"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}