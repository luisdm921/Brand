const Hero = () => {
  return (
    <section
      id="inicio"
      className="pt-24 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-left">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              Comida Casera
              <span className="gradient-text block">Con Sabor a Hogar</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Platillos caseros preparados con amor y dedicación. Sabor
              tradicional y ingredientes frescos en cada bocado.
            </p>
            <div className="flex gap-4">
              <a
                href="#productos"
                className="px-8 py-4 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-all transform hover:scale-105"
              >
                Ver Menú
              </a>
              <a
                href="#marca"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-full font-bold hover:bg-primary-50 transition-all"
              >
                Conocer Más
              </a>
            </div>
          </div>
          <div className="animate-slide-right">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/pexels-cristian-rojas-7613555.jpg"
                alt="Comida casera deliciosa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
