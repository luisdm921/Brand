"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUtensils } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#productos", label: "Menú" },
    { href: "#marca", label: "Nosotros" },
    { href: "#testimonios", label: "Reseñas" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary-600"
          >
            <FaUtensils className="text-3xl" />
            <span>Mi Cocina</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-700 hover:text-primary-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-medium text-slate-700 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
