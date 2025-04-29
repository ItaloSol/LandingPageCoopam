"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X, Phone, Truck } from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Início", href: "/" },
  { name: "Quem Somos", href: "#about" },
  { name: "Serviços", href: "#services" },
  { name: "Conselheiros", href: "#council" },
  { name: "Notícias", href: "/noticias" },
  { name: "Contato", href: "#contact" }
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Height of the navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de mais informações sobre os serviços da COOPCAM.";
    const whatsappUrl = `https://wa.me/5527999110772?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className={`fixed w-full md:h-20 z-50 transition-all duration-300 bg-[#257367]`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/logo.png" 
              alt="COOPCAM Logo"
              width={150}
              height={50}
              className="h-7 w-auto md:h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-[#257367] hover:bg-[#1a5249] text-white"
              onClick={() => window.open('https://coopcam.coop.br/carga/pages/login.php', '_blank')}
            >
               <Truck className="mr-2 h-4 w-4" />
               ACOMPANHAR CARGA
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={isScrolled ? "text-gray-700" : "text-white"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <div className="flex flex-col items-center">
                  <X className="h-5 w-5 text-white" />
                  <span className="text-xs text-white mt-1">Menu</span>
                </div>
              ) : (
                <div className="flex flex-col items-center">
                  <Menu className="h-5 w-5 text-white" />
                  <span className="text-xs text-white mt-1">Menu</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#257367] min-h-[380px]">
            <div className="bg-white rounded-lg">
            <div className="px-3 py-3 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#257367] hover:bg-gray-50 rounded-md"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
              className="bg-[#257367] h-12 w-full hover:bg-[#1a5249] text-white"
              onClick={() => window.open('https://coopcam.coop.br/carga/pages/login.php', '_blank')}
            >
                <Truck className="mr-2 h-4 w-4" />
                ACOMPANHAR CARGA
              </Button>
            </div>
          </div>
          </div>
        )}
      </div>
    </nav>
  );
}