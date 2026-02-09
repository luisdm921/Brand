"use client";

import { useState } from "react";
import { FaEye, FaTimes } from "react-icons/fa";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: "Tacos Dorados",
      price: "$85",
      category: "Antojitos",
      image: "/images/pexels-8pcarlos-morocho-2150734957-35739871.jpg",
      description:
        "Deliciosos tacos dorados de papa con lechuga, crema, queso y salsa al gusto. Incluye 4 piezas.",
      ingredients: "Papa, tortilla, lechuga, crema, queso fresco",
    },
    {
      id: 2,
      name: "Enchiladas Verdes",
      price: "$120",
      category: "Platillos",
      image: "/images/pexels-cristian-rojas-8448319.jpg",
      description:
        "Enchiladas bañadas en salsa verde con pollo deshebrado, crema y queso. Servidas con arroz y frijoles.",
      ingredients:
        "Tortilla, pollo, salsa verde, crema, queso, arroz, frijoles",
    },
    {
      id: 3,
      name: "Tamales de Pollo",
      price: "$30",
      category: "Antojitos",
      image: "/images/pexels-cristian-rojas-8448323.jpg",
      description:
        "Tamal tradicional de pollo en salsa verde, envuelto en hoja de maíz. Suavecito y delicioso.",
      ingredients: "Masa de maíz, pollo, salsa verde, manteca",
    },
    {
      id: 4,
      name: "Mole Poblano",
      price: "$150",
      category: "Platillos",
      image: "/images/pexels-cristian-rojas-8448330.jpg",
      description:
        "Auténtico mole poblano con pollo, servido con arroz y tortillas. Receta tradicional de familia.",
      ingredients:
        "Pollo, chile mulato, chile pasilla, chocolate, especias, arroz",
    },
    {
      id: 5,
      name: "Pozole Rojo",
      price: "$100",
      category: "Caldos",
      image: "/images/pexels-diego-cancino-467067322-32757024.jpg",
      description:
        "Pozole rojo tradicional con carne de puerco, maíz pozolero y guarniciones. Porción generosa.",
      ingredients:
        "Maíz pozolero, carne de puerco, chile guajillo, lechuga, rábano, orégano",
    },
    {
      id: 6,
      name: "Chiles Rellenos",
      price: "$110",
      category: "Platillos",
      image: "/images/pexels-oswaldo-damazo-3807246-8725719.jpg",
      description:
        "Chiles poblanos rellenos de queso, capeados y bañados en caldillo de jitomate. Con arroz.",
      ingredients: "Chile poblano, queso, huevo, jitomate, arroz",
    },
  ];

  const selectedProductData = products.find((p) => p.id === selectedProduct);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Menú
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Nuestros Platillos
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Descubre nuestro menú de comida casera preparada con recetas
            tradicionales y ingredientes frescos del día.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-primary-600 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-800 mt-2 mb-4">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-primary-600">
                    {product.price}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(product.id)}
                    className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProduct && selectedProductData && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProductData.image}
                  alt={selectedProductData.name}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors shadow-lg"
                >
                  <FaTimes className="text-slate-700" />
                </button>
              </div>

              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                  {selectedProductData.category}
                </span>
                <h3 className="text-3xl font-bold text-slate-800 mb-2">
                  {selectedProductData.name}
                </h3>
                <p className="text-4xl font-bold text-primary-600 mb-6">
                  {selectedProductData.price}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    Descripción
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProductData.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    Ingredientes
                  </h4>
                  <p className="text-slate-600">
                    {selectedProductData.ingredients}
                  </p>
                </div>

                <a
                  href={`https://wa.me/525551234567?text=Hola,%20quiero%20ordenar:%20${selectedProductData.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white text-center rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105"
                >
                  Ordenar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
