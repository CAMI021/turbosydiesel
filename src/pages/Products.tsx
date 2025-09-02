import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Datos de marcas (miniaturas)
const brands = [
  { name: "Delphi", img: "/marcas/delphi.png" },
  { name: "Holset", img: "/marcas/holset.png" },
  { name: "Racor", img: "/marcas/racor.png" },
  { name: "Hartridge", img: "/marcas/hartridge.png" },
];

// Datos de productos
const products = [
  {
    slug: "sistemas-inyeccion",
    name: "Sistemas de inyección",
    img: "/productos/sistemas_inyeccion.jpg",
    description: "Sistemas de inyección diesel convencionales y electrónicos.",
  },
  {
    slug: "turbo-holset",
    name: "Turboalimentadores Holset",
    img: "/productos/turbo_holset.jpg",
    description: "Turbos de alto rendimiento y durabilidad garantizada.",
  },
  {
    slug: "filtros-racor",
    name: "Filtros Racor",
    img: "/productos/filtros_racor.jpg",
    description: "Filtros Racor de alta eficiencia para combustible y aceite.",
  },
  {
    slug: "equipos-hartridge",
    name: "Equipos de prueba Hartridge",
    img: "/productos/hartridge.jpg",
    description: "Equipos para diagnóstico y calibración de inyectores.",
  },
  {
    slug: "balanceadoras",
    name: "Balanceadoras",
    img: "/productos/balanceadoras.jpg",
    description: "Balanceadoras de motores y componentes rotativos.",
  },
  {
    slug: "equipo-dpf",
    name: "Equipo de limpieza DPF",
    img: "/productos/dpf_cleaning.jpg",
    description: "Limpieza profesional de filtros de partículas diesel.",
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  // Manejo seguro de la navegación
  const handleProductClick = (slug: string) => {
    navigate(`/products/${slug}`);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4]">
      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/fondos/productos-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Sección de productos"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <h1 className="relative text-4xl sm:text-5xl font-bold z-10">
          Nuestros Productos
        </h1>
      </section>

      <main className="p-6 max-w-7xl mx-auto">
        {/* Carrusel de Marcas */}
        <section className="mb-16" aria-label="Marcas que distribuimos">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Marcas Destacadas
          </h2>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-12 animate-infinite-scroll"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {/* Duplicamos para efecto de scroll infinito suave */}
              {[...brands, ...brands, ...brands].map((brand, index) => (
                <motion.div
                  key={`${brand.name}-${index}`} // Clave única
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 w-40 text-center"
                  aria-label={`Marca ${brand.name}`}
                >
                  <img
                    src={brand.img}
                    alt={`Logo de ${brand.name}`}
                    className="h-24 w-full object-contain rounded-lg shadow-md bg-white p-2 mx-auto"
                    loading="lazy" // Mejora de rendimiento
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-brand.png"; // Imagen de respaldo
                    }}
                  />
                  <p className="text-gray-700 mt-2 font-medium">{brand.name}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Lista de Productos */}
        <section aria-label="Catálogo de productos">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.article
                key={product.slug}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProductClick(product.slug)}
                className="bg-white rounded-xl shadow-lg cursor-pointer overflow-hidden transition-transform duration-300 hover:shadow-xl"
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${product.name}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleProductClick(product.slug);
                  }
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-product.jpg"; // Imagen por defecto
                  }}
                />
                <div className="p-5">
                  <h3 className="font-bold text-[#e3001b] text-lg">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;