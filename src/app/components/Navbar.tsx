"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "Início", href: "#" },
    { name: "A Clínica", href: "#sobre" },
    { name: "Sobre", href: "#sobre-dr" },
    { name: "Serviços", href: "#servicos" },
    { name: "Abordagens", href: "#abordagens" },
    { name: "Primeira Consulta", href: "#primeira-consulta" },
    { name: "Convênios", href: "#convenios" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="font-bold text-xl text-sky-600">
          Clínica Haroldo Peixoto
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-sky-600 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Botão Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-sky-600"
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-gray-700 hover:text-sky-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
