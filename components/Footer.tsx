"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#257367] text-white py-8">
      <div className="container mx-auto px-4 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          {/* Contact Info */}
          <div>
            {/* Logo and Title */}
            <div className="flex items-center gap-2 mb-3">
             
              <div>
                <Image
                  src="/logo.png"
                  alt="COOPCAM Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <span className="block text-sm text-white/80">Cooperativa de Transportes</span>
              </div>
            </div>
            {/* Description */}
            <p className="text-white/90 max-w-prose">
              Fundada em julho de 2008, a COOPCAM nasceu do sonho coletivo de motoristas e proprietários de veículos em criar uma cooperativa forte, unida e comprometida com o desenvolvimento de todos. Hoje, seguimos juntos, promovendo benefícios e oportunidades para nossos cooperados e para a comunidade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">Início</Link>
              </li>
              <li>
                <Link href="#about" className="hover:underline">Quem Somos</Link>
              </li>
              <li>
                <Link href="#services" className="hover:underline">Serviços</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:underline">Notícias</Link>
              </li>
              <li>
                <Link href="#contact" className="hover:underline">Contato</Link>
              </li>
            </ul>
          </div>

         
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} COOPCAM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}