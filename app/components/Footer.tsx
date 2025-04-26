"use client";

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#257367] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            {/* Logo and Title */}
            <div className="flex items-center gap-3 mb-3">
              {/* <img
                src="/logo-coopcam.webp"
                alt="COOPCAM Logo"
                className="h-10 w-10 object-contain"
              /> */}
              <div>
                <h3 className="text-2xl font-bold tracking-tight">COOPCAM</h3>
                <span className="block text-sm text-white/80">Cooperativa de Transportes</span>
              </div>
            </div>
            {/* Description */}
            <p className="text-white/90">
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

          {/* Social Media & Business Hours */}
          <div>
          <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p>Av. Bartimeu Gomes de Aguiar, 1777, Santa Helena, São Gabriel da Palha - ES, Brasil</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <p>+55 27 3727 1374</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <p>+55 27 99911 0772</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <p>+55 27 99522 3452</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <a href="mailto:coopcam@coopcam.coop.br" className="hover:underline">
                  coopcam@coopcam.coop.br
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} COOPCAM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}