"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre-dr" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/haroldo.png"
            alt="Dr. Haroldo Peixoto"
            width={600}
            height={500}
            className="shadow-lg max-w-sm w-full object-cover"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 89% 100%, 0% 100%)",
              borderRadius: "20px",
            }}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-700"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Sobre o Dr. Haroldo Peixoto
          </h2>
          <p className="mb-4 leading-relaxed">
            O Dr. Haroldo Peixoto é um profissional dedicado com vasta
            experiência em psiquiatria, combinando um sólido conhecimento
            acadêmico com uma abordagem humana e empática. Formado pela [Nome da
            Universidade] com especialização em [Área de Especialização], o Dr.
            [Nome do Psiquiatra] é membro ativo da Associação Brasileira de
            Psiquiatria (ABP), comprometido com as melhores práticas e a
            contínua atualização científica.
          </p>
          <p className="leading-relaxed">
            Sua filosofia de trabalho baseia-se na compreensão profunda das
            necessidades individuais de cada paciente, utilizando abordagens
            terapêuticas personalizadas que integram psicoterapia e, quando
            necessário, farmacoterapia. O objetivo é promover a saúde mental de
            forma integral, ajudando os pacientes a alcançar uma melhor
            qualidade de vida e bem-estar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
