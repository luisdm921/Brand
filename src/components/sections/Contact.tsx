"use client";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            ¿Listo para Ordenar?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Contáctanos para hacer tu pedido o visítanos en nuestro local.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPhone className="text-2xl text-white" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Teléfono</h3>
            <p className="text-slate-600 text-sm">55 5123 4567</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="text-2xl text-white" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">WhatsApp</h3>
            <p className="text-slate-600 text-sm">55 5123 4567</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="text-2xl text-white" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Email</h3>
            <p className="text-slate-600 text-sm">contacto@micocina.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-2xl text-white" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Horario</h3>
            <p className="text-slate-600 text-sm">Lun-Sáb: 10am-8pm</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 bg-gradient-to-r from-primary-500 to-secondary-500">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  <FaMapMarkerAlt />
                  Nuestra Ubicación
                </h3>
                <p className="text-white/90 text-lg">
                  Calle Principal #123, Col. Centro, CDMX
                </p>
              </div>
              <a
                href="https://www.google.com/maps/dir//19.4326,-99.1332"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-primary-600 rounded-full font-bold hover:bg-slate-100 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <FaMapMarkerAlt />
                Cómo Llegar
              </a>
            </div>
          </div>

          <div className="h-[500px] relative group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6157437347774!2d-99.13320668509308!3d19.432607986886195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sZócalo%2C%20Centro%20Histórico%20de%20la%20Cdad.%20de%20México%2C%20Centro%2C%20Cuauhtémoc%2C%2006010%20Ciudad%20de%20México%2C%20CDMX!5e0!3m2!1ses!2smx!4v1650000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-300"
            ></iframe>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/525551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-xl"
          >
            <FaWhatsapp className="text-2xl" />
            Pedir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
