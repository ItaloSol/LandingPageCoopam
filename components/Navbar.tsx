"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#257367]">COOPCAM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-[#257367]" : "text-white hover:text-white/80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Button 
              className="bg-[#257367] hover:bg-[#1a5249] text-white"
              onClick={handleWhatsAppClick}
            >
              <Phone className="mr-2 h-4 w-4" />
              (27) 3721-4242
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className={isScrolled ? "text-gray-700" : "text-white"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
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
                className="w-full bg-[#257367] hover:bg-[#1a5249] mt-4"
                onClick={handleWhatsAppClick}
              >
                <Phone className="mr-2 h-4 w-4" />
                (27) 3721-4242
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}