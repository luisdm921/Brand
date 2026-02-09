import { FaTruck, FaShieldAlt, FaHeart, FaUtensils } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: FaTruck,
      title: "Entrega Rápida",
      description: "A domicilio en tu zona",
    },
    {
      icon: FaShieldAlt,
      title: "Calidad Garantizada",
      description: "Ingredientes frescos",
    },
    {
      icon: FaHeart,
      title: "Hecho con Amor",
      description: "Recetas tradicionales",
    },
    {
      icon: FaUtensils,
      title: "Sabor Casero",
      description: "Como lo hace mamá",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="text-4xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
