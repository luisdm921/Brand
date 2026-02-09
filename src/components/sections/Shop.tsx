import { FaWhatsapp, FaEye } from "react-icons/fa";

const Shop = () => {
  return (
    <section
      id="tienda"
      className="py-24 bg-gradient-to-br from-primary-600 to-secondary-600"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          ¿Antojo de Comida Casera?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Revisa nuestro menú completo y contáctanos para hacer tu pedido.
          Entregamos en tu zona.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#productos"
            className="px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-lg hover:bg-slate-100 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            <FaEye className="text-2xl" />
            Ver Menú Completo
          </a>
          <a
            href="https://wa.me/525551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3"
          >
            <FaWhatsapp className="text-2xl" />
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
