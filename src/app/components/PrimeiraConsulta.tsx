"use client";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaHandsHelping, FaUserCheck, FaRegClipboard } from "react-icons/fa";

export default function PrimeiraConsulta() {
  const etapas = [
    {
      icon: <FaCalendarCheck className="text-yellow-700 text-3xl mb-3" />,
      titulo: "Agendamento",
      descricao: "Entre em contato e escolha o melhor horário para sua consulta."
    },
    {
      icon: <FaHandsHelping className="text-yellow-700 text-3xl mb-3" />,
      titulo: "Acolhimento",
      descricao: "Recepção humanizada para você se sentir confortável desde o início."
    },
    {
      icon: <FaUserCheck className="text-yellow-700 text-3xl mb-3" />,
      titulo: "Avaliação Inicial",
      descricao: "Análise completa do seu histórico e necessidades de tratamento."
    },
    {
      icon: <FaRegClipboard className="text-yellow-700 text-3xl mb-3" />,
      titulo: "Plano de Tratamento",
      descricao: "Definição de estratégias personalizadas para sua saúde mental."
    },
  ];

  return (
    <section id="primeira-consulta" className="py-20 bg-yellow-100">
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
            Sua Primeira Consulta: O Caminho para o Bem-Estar
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Entenda como funciona nossa abordagem desde o primeiro contato até a elaboração de um plano de tratamento exclusivo para você.
          </p>
        </motion.div>

        {/* Grid de Etapas */}
        <div className="grid sm:grid-cols-2 gap-8">
          {etapas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.titulo}</h3>
              <p className="text-gray-600 text-sm">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
