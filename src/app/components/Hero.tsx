"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: "url('/bg-clinica.png')", // coloque aqui sua imagem de fundo
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50"/>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Cuidado Psiquiátrico Abrangente
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl"
        >
          Transforme sua saúde mental com suporte profissional e acolhedor.
          Agende sua consulta hoje.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="#contato"
            className="bg-sky-400 hover:bg-sky-500 text-black font-semibold py-3 px-6 rounded-md shadow-md transition"
          >
            Agende sua Consulta
          </Link>
          <Link
            href="#sobre"
            className="border border-sky-200 hover:bg-sky-200 hover:text-black text-white font-semibold py-3 px-6 rounded-md transition"
          >
            Saiba Mais
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
