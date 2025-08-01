"use client";
import { motion } from "framer-motion";
import { FaBrain, FaSmile, FaUserMd } from "react-icons/fa";
import { MdOutlinePsychology } from "react-icons/md";
import { GiBrainstorm } from "react-icons/gi";
import { ImSleepy } from "react-icons/im";

export default function Servicos() {
  const servicos = [
    {
      icon: <ImSleepy className="text-sky-600 text-4xl mb-3" />,
      titulo: "Distúrbios do Sono",
      descricao: "Suporte e tratamento para auxiliar no manejo e superação da depressão, promovendo bem-estar emocional."
    },
    {
      icon: <FaBrain className="text-sky-600 text-4xl mb-3" />,
      titulo: "Depressão",
      descricao: "Suporte e tratamento para auxiliar no manejo e superação da depressão, promovendo bem-estar emocional."
    },
    {
      icon: <FaSmile className="text-sky-600 text-4xl mb-3" />,
      titulo: "Ansiedade",
      descricao: "Abordagens eficazes para controlar a ansiedade e seus sintomas, restaurando a tranquilidade no dia a dia."
    },
    {
      icon: <MdOutlinePsychology className="text-sky-600 text-4xl mb-3" />,
      titulo: "TOC",
      descricao: "Tratamento especializado para o Transtorno Obsessivo-Compulsivo, ajudando a gerenciar pensamentos e rituais repetitivos."
    },
    {
      icon: <GiBrainstorm className="text-sky-600 text-4xl mb-3" />,
      titulo: "Transtorno Bipolar",
      descricao: "Manejo e acompanhamento do transtorno bipolar para estabilizar o humor e melhorar a qualidade de vida."
    },
    {
      icon: <FaUserMd className="text-sky-600 text-4xl mb-3" />,
      titulo: "TDAH",
      descricao: "Diagnóstico e tratamento para TDAH, auxiliando no foco, organização e desempenho diário."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
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
            Nossos Serviços e Tratamentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos tratamentos especializados para diversas condições de saúde mental,
            utilizando abordagens baseadas em evidências e adaptadas às suas necessidades.
          </p>
        </motion.div>

        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {servicos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col items-center text-center">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.titulo}</h3>
                <p className="text-gray-600 text-sm">{item.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
