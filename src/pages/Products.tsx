// src/pages/Products.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Tipos TypeScript
interface Brand {
  name: string;
  img: string;
}

interface Product {
  slug: string;
  name: string;
  img: string;
  description: string;
  categoryKey: string;
}

// Datos de marcas (miniaturas)
const brands: Brand[] = [
  { name: "Delphi", img: "/marcas/delphi.png" },
  { name: "Holset", img: "/marcas/holset.png" },
  { name: "Racor", img: "/marcas/racor.png" },
  { name: "Hartridge", img: "/marcas/hartridge.png" },
];

// Datos de productos (ahora coinciden con las categorías en products.ts)
const products: Product[] = [
  {
    slug: "filtros",
    categoryKey: "filters",
    name: "Filtros",
    img: "/productos/filtros_racor.jpg",
    description: "Filtros de combustible y aceite con tecnología de separación de agua avanzada.",
  },
  {
    slug: "inyectores",
    categoryKey: "injectors",
    name: "Sistemas de inyección",
    img: "/productos/sistemas_inyeccion.jpg",
    description: "Sistemas de inyección diesel convencionales y electrónicos de alta precisión.",
  },
  {
    slug: "turbo-holset",
    categoryKey: "turbos",
    name: "Turboalimentadores Holset",
    img: "/productos/turbo_holset.jpg",
    description: "Turbos de alto rendimiento con durabilidad comprobada en condiciones extremas.",
  },
  {
    slug: "equipos-hartridge",
    categoryKey: "testBenches",
    name: "Equipos Hartridge",
    img: "/productos/hartridge.jpg",
    description: "Equipos de prueba y calibración para inyectores diesel de última generación.",
  },
  {
    slug: "balanceadoras",
    categoryKey: "balanceadoras",
    name: "Balanceadoras",
    img: "/productos/balanceadoras.jpg",
    description: "Soluciones para balanceo dinámico de motores y componentes rotativos.",
  },
  {
    slug: "equipo-dpf",
    categoryKey: "dpf",
    name: "Limpieza DPF",
    img: "/productos/dpf_cleaning.jpg",
    description: "Sistemas profesionales para limpieza y recuperación de filtros DPF.",
  },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  const handleProductClick = (categoryKey: string): void => {
    navigate(`/products/${categoryKey}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, categoryKey: string): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleProductClick(categoryKey);
    }
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80,
        damping: 15 
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Sección de Marcas con Imagen de Fondo */}
      <section 
        className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center mb-20 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/products.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Marcas que distribuimos"
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestras Marcas{" "}
            <span className="text-[#e3001b] drop-shadow-lg">Premium</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Trabajamos exclusivamente con las marcas líderes en tecnología diesel 
            para garantizar la máxima calidad y rendimiento en cada proyecto
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-[#e3001b] mx-auto mt-8 rounded-full shadow-lg"
          />
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Sección de Marcas (logos) */}
        {brands.length > 0 && (
          <section className="mb-20" aria-label="Logos de marcas">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {brands.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  variants={itemVariants}
                  className="flex items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 aspect-square"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={brand.img}
                    alt={`Logo de ${brand.name}`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-brand.jpg";
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        )}

        {/* Catálogo de Productos */}
        <section aria-label="Catálogo de productos" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestro <span className="text-[#e3001b]">Catálogo</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Descubre nuestra selección de productos especializados para el 
              mantenimiento y reparación de sistemas diesel de última generación
            </motion.p>
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-[#e3001b] mx-auto mt-8 rounded-full"
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.article
                key={product.slug}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProductClick(product.categoryKey)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 hover:border-[#e3001b]/30 group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${product.name}`}
                onKeyDown={(e) => handleKeyDown(e, product.categoryKey)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={`Imagen de ${product.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-product.jpg";
                    }}
                  />
                  
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#e3001b] transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm line-clamp-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-[#e3001b] font-semibold group-hover:underline transition-all duration-300">
                      Ver productos
                    </span>
                    
                    <div className="w-10 h-10 rounded-full bg-[#e3001b]/10 flex items-center justify-center group-hover:bg-[#e3001b] transition-all duration-300 group-hover:scale-110">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-[#e3001b] group-hover:text-white transition-colors duration-300" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                        aria-hidden="true"
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
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Call to Action final */}
        <motion.section 
          className="text-center py-16 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos para consultas especializadas y soluciones personalizadas
          </p>
          <motion.button
            className="bg-[#e3001b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c8001a] transition-colors duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Contáctanos
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default Products;