import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      comment:
        "Los tacos dorados están deliciosos, saben igual que los de mi abuela. Muy recomendados.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      comment:
        "El pozole está increíble, con muy buen sabor y porciones generosas. Pediré más seguido.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      comment:
        "Las enchiladas verdes son mi favoritas. Se nota que usan ingredientes frescos y de calidad.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Lo que Dicen Nuestros Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic">
                &ldquo;{testimonial.comment}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
                <div>
                  <p className="font-bold text-slate-800">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
