const Brand = () => {
  return (
    <section
      id="marca"
      className="py-20 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/pexels-snappr-27365284.jpg"
              alt="Preparando comida casera"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Mi Historia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Cocina con <span className="gradient-text">Amor</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Cada platillo que preparamos lleva el sabor de la cocina
              tradicional mexicana. Usamos recetas de familia que han pasado de
              generación en generación, con ingredientes frescos y naturales.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nuestra pasión es llevar a tu mesa ese sabor casero que te hace
              sentir como en casa. Preparamos todo con dedicación y mucho
              cariño.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-slate-700">
                  Ingredientes frescos diarios
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-slate-700">
                  Recetas tradicionales caseras
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </span>
                <span className="text-slate-700">
                  Entrega a domicilio disponible
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;
