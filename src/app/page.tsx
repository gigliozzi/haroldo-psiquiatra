import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clinica from "./components/Clinica";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Abordagens from "./components/Abordagens";
import PrimeiraConsulta from "./components/PrimeiraConsulta";
import Convenios from "./components/Convenios";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clinica />
      <Sobre />
      <Servicos />
      <Abordagens />
      <PrimeiraConsulta />
      <Convenios />
      <Contato />
      <a
        href="https://wa.me/5562999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326a7.889 7.889 0 0 0-5.596-2.325C3.35.001 0 3.351 0 7.451c0 1.313.344 2.6.999 3.724L.018 15.982l4.934-1.331a7.447 7.447 0 0 0 3.05.65h.003c4.101 0 7.451-3.35 7.451-7.45a7.419 7.419 0 0 0-2.327-5.525z" />
        </svg>
      </a>

      <Footer />
    </main>
  );
}
