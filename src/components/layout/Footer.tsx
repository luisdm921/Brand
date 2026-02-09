import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaBox,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold mb-4"
            >
              <FaBox className="text-primary-500" />
              <span>Mi Marca</span>
            </Link>
            <p className="text-slate-300">
              Productos artesanales únicos hechos con amor y dedicación.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#productos"
                  className="text-slate-300 hover:text-primary-500 transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#marca"
                  className="text-slate-300 hover:text-primary-500 transition-colors"
                >
                  Mi Marca
                </a>
              </li>
              <li>
                <a
                  href="#tienda"
                  className="text-slate-300 hover:text-primary-500 transition-colors"
                >
                  Tienda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              {[FaFacebook, FaInstagram, FaTwitter, FaWhatsapp].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="text-white" />
                  </a>
                ),
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>
            © {currentYear} Mi Marca Personal. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
