import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  shortDesc: string;
  brand: string;
}

const Category: React.FC = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const navigate = useNavigate();

  // Validación explícita para manejar categoryKey undefined
  if (!categoryKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categoría no encontrada</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  // Solución: usar bracket notation con type assertion o verificar la existencia de la key
  const category = products[categoryKey as keyof typeof products];
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categoría no encontrada</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const filteredProducts = useMemo(() => {
    return category.products;
  }, [category.products]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Encabezado de categoría */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {category.title}
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {category.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="bg-[#e3001b]/10 text-[#e3001b] px-4 py-2 rounded-full font-medium">
              Tecnología Profesional
            </span>
            <span className="bg-[#e3001b]/10 text-[#e3001b] px-4 py-2 rounded-full font-medium">
              Soporte Técnico Incluido
            </span>
            <span className="bg-[#e3001b]/10 text-[#e3001b] px-4 py-2 rounded-full font-medium">
              Documentación Completa
            </span>
          </div>
        </motion.div>

        {/* Grid de productos centrado */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {filteredProducts.map((product: Product) => (
            <motion.article
              key={product.id}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
              className="w-full sm:w-80 lg:w-96 bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border border-gray-100 hover:border-[#e3001b]/30"
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${product.name}`}
            >
              <div className="relative h-56 overflow-hidden bg-white">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-product.jpg";
                    e.currentTarget.parentElement?.classList.add('bg-gray-100');
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#e3001b] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Profesional
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e3001b] font-semibold">
                      Ver detalles técnicos
                    </span>

                    <div className="w-8 h-8 rounded-full bg-[#e3001b]/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#e3001b]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg">
              Actualmente no hay productos disponibles en esta categoría. Por favor,
              contacte con nuestro equipo técnico para más información.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="mt-4 text-[#e3001b] hover:underline font-medium"
            >
              Contactar con soporte técnico
            </button>
          </div>
        )}

        {/* CTA final */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-[#e3001b]/5 to-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo técnico está disponible para asesorarte en la selección
              del producto más adecuado para tus necesidades específicas.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#e3001b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c8001a] transition-colors duration-300 inline-flex items-center"
            >
              Solicitar Asesoría Técnica
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Category;