"use client";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Nome e Direitos */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-white">
            Clínica Psiquiátrica Haroldo Peixoto
          </h3>
          <p className="text-sm mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:text-sky-400 transition">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-sky-400 transition">
            Termos de Uso
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
