"use client";
import { motion } from "framer-motion";
import { FaComments, FaPills, FaHandsHelping } from "react-icons/fa";

export default function Abordagens() {
  const abordagens = [
    {
      icon: <FaComments className="text-sky-600 text-3xl mb-3" />,
      titulo: "Psicoterapia",
      descricao:
        "Sessões de conversa que ajudam a explorar emoções, pensamentos e comportamentos, promovendo autoconhecimento e estratégias de enfrentamento.",
    },
    {
      icon: <FaPills className="text-sky-600 text-3xl mb-3" />,
      titulo: "Farmacoterapia",
      descricao:
        "Uso de medicamentos específicos, quando clinicamente indicado, para equilibrar a química cerebral e aliviar sintomas, sempre com acompanhamento rigoroso.",
    },
    {
      icon: <FaHandsHelping className="text-sky-600 text-3xl mb-3" />,
      titulo: "Acompanhamento Personalizado",
      descricao:
        "Um plano de tratamento exclusivo, desenhado para suas necessidades, combinando as abordagens mais adequadas para sua recuperação e bem-estar.",
    },
  ];

  return (
    <section id="abordagens" className="py-20 bg-rose-50">
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Abordagens Terapêuticas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa prática integra diferentes métodos para um tratamento completo e personalizado, buscando os melhores resultados para cada paciente.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {abordagens.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{item.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
