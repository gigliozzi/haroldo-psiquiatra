"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contato() {
  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID as string
  );
  // <-- seu ID do Formspree

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Formulário */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Entre em contato para agendar sua consulta ou tirar dúvidas.
          </p>

          {state.succeeded ? (
            <p className="text-green-600 font-medium">
              ✅ Sua mensagem foi enviada com sucesso!
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                placeholder="Seu Nome"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu E-mail"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Sua Mensagem"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition w-full"
              >
                {state.submitting ? "Enviando..." : "Enviar Mensagem"}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contato e Mapa */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Informações de Contato
          </h3>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-sky-600" />
              <span suppressHydrationWarning>(62) 98250-0300</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaWhatsapp className="text-sky-600" />
              <span suppressHydrationWarning>WhatsApp: (62) 99173-5598</span>
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-sky-600" />
              <span suppressHydrationWarning>contato@clinica.com</span>
            </li>
          </ul>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.954111524142!2d-49.2506439!3d-16.679179599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef17ba52023f9%3A0xf9e4ae3b007c7ed7!2sR.%2010%2C%20420%20-%20St.%20Sul%2C%20Goi%C3%A2nia%20-%20GO%2C%2074080-420!5e0!3m2!1spt-BR!2sbr!4v1754052349742!5m2!1spt-BR!2sbr"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
