"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Clinica() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-gray-700"
        >
          <p className="text-2xl text-sky-600 font-medium mb-8">
            Boas-Vindas à Sua Jornada de Bem-Estar
          </p>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">A Clínica</h2>
          <p className="text-lg leading-relaxed">
            Na nossa clínica, cada paciente é único. Oferecemos um ambiente
            seguro e acolhedor, onde você pode se sentir à vontade para discutir
            suas preocupações e iniciar sua jornada de recuperação. Nossa equipe
            está dedicada a proporcionar o melhor cuidado psiquiátrico, focado
            em sua saúde e bem-estar.
          </p>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/psicoterapia.png"
            alt="Atendimento Psiquiátrico"
            width={600}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
