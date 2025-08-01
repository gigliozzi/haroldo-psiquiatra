"use client";
import { motion } from "framer-motion";
import { FaCreditCard, FaMoneyBillWave, FaPix } from "react-icons/fa6"; // FaPix requer react-icons v5

export default function Convenios() {
  const convenios = [
    "Unimed",
    "Bradesco Saúde",
    "SulAmérica",
    "Amil",
    "Particular",
  ];

  const pagamentos = [
    {
      icon: <FaCreditCard className="text-green-600 text-2xl" />,
      titulo: "Cartão de Crédito e Débito",
    },
    {
      icon: <FaPix className="text-green-600 text-2xl" />,
      titulo: "PIX",
    },
    {
      icon: <FaMoneyBillWave className="text-green-600 text-2xl" />,
      titulo: "Pagamento Particular",
    },
  ];

  return (
    <section id="convenios" className="py-20 bg-gray-50">
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
            Convênios e Formas de Pagamento
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aceitamos diversos convênios e formas de pagamento para facilitar
            seu atendimento.
          </p>
        </motion.div>

        {/* Convênios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center mb-12"
        >
          {convenios.map((nome, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center text-gray-800 font-medium"
            >
              {nome}
            </div>
          ))}
        </motion.div>

        {/* Pagamentos */}
        <div className="grid sm:grid-cols-3 gap-6">
          {pagamentos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-gray-800 mt-3">
                {item.titulo}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
