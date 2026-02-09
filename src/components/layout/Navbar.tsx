"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Menú" },
    { href: "#marca", label: "Nosotros" },
    { href: "#testimonios", label: "Reseñas" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg py-3" : "bg-white/95 backdrop-blur-sm shadow-md py-3"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="text-primary-600 transition-colors duration-300">
                <FaUtensils className="text-3xl group-hover:scale-110 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800 transition-colors duration-300">
                  Mi Cocina
                </span>
                <span className="text-xs text-primary-600 transition-colors duration-300">
                  Comida Casera
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                className="ml-4 px-6 py-2.5 rounded-full font-semibold bg-primary-600 text-white hover:bg-primary-700 shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Hacer Pedido
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-2xl relative z-[60] p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-white" />
              ) : (
                <FaBars className="text-slate-700 transition-colors" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 z-[55] transition-all duration-500 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl hover:text-primary-200 transition-colors z-[60] p-2"
          aria-label="Cerrar menú"
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6 px-4">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white text-2xl font-semibold transition-all hover:text-primary-200 hover:scale-110"
              onClick={handleLinkClick}
              style={{
                animation: isOpen
                  ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleLinkClick}
            className="mt-8 px-8 py-4 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-primary-100 transition-all transform hover:scale-105 shadow-xl"
            style={{
              animation: isOpen
                ? `fadeInUp 0.5s ease-out ${navLinks.length * 0.1}s both`
                : "none",
            }}
          >
            Hacer Pedido
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
