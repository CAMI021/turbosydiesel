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
  categoryKey: string;
  name: string;
  img: string;
  description: string;
}
// Datos de marcas (miniaturas)
const brands: Brand[] = [
  { name: "Delphi", img: "/marcas/delphi.png" },
  { name: "Holset", img: "/marcas/holset.png" },
  { name: "Racor", img: "/marcas/racor.png" },
  { name: "Hartridge", img: "/marcas/hartridge.png" },
];
// Datos de productos (solo componentes y repuestos)
const products: Product[] = [
  {
    slug: "filtros",
    categoryKey: "filters",
    name: "Filtros",
    img: "/productos/filtros_racor.jpg",
    description: "Filtros de combustible y aceite con tecnología de separación de agua avanzada.",
  },
  {
    slug: "common-rail-systems",
    categoryKey: "common-rail-systems",
    name: "Sistemas de inyección Common Rail",
    img: "/productos/common-rail.jpg",
    description: "Sistemas de inyección diesel de alta precisión con tecnología Common Rail",
  },
  {
    slug: "eui-injectors",
    categoryKey: "eui-injectors",
    name: "Inyectores EUI",
    img: "/productos/inyectores_eui.jpg",
    description: "Inyectores de tipo Unidad Electrónica (EUI) para motores diesel",
  },
  {
    slug: "pld-pumps",
    categoryKey: "pld-pumps",
    name: "Bombas PLD",
    img: "/productos/bombas_pld.jpg",
    description: "Bombas de alta precisión para sistemas PLD de inyección diesel",
  },
  {
    slug: "heui-injectors",
    categoryKey: "heui-injectors",
    name: "Inyectores HEUI",
    img: "/productos/inyectores_heui.jpg",
    description: "Inyectores HEUI para motores de alta presión y rendimiento",
  },
  {
    slug: "conventional-injection-systems",
    categoryKey: "conventional-injection-systems",
    name: "Sistemas de inyección convencionales",
    img: "/productos/sistemas_convencionales.jpg",
    description: "Sistemas de inyección tradicionales para motores diesel",
  },
  {
    slug: "turbochargers",
    categoryKey: "turbochargers",
    name: "Turboalimentadores",
    img: "/productos/turbo_holset.jpg",
    description: "Turbos de alto rendimiento con durabilidad comprobada en condiciones extremas",
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
        type: "spring" as const,
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
    <div 
      className="min-h-screen text-gray-800"
      style={{
        backgroundImage: "url(\"image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H-2v4H-6v2h4v4h2V4h4V2H0zM6 34v-4H4v4H0v2h4v4h2V4h4V2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}
    >
      {/* Sección de Marcas con Imagen de Fondo */}
      <section 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden"
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestras Marcas{" "}
            <span className="text-[#e3001b] drop-shadow-lg">Premium</span>
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed max-w-2xl mx-auto"
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
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg"
          />
        </div>
      </section>
      {/* Sección de Marcas (logos) - AHORA OCUPA TODO EL ANCHO DE LA PANTALLA */}
      {brands.length > 0 && (
        <section 
          className="w-full relative overflow-hidden py-6"
          aria-label="Logos de marcas"
        >
          {/* Degradado lateral oscuro en los bordes (OCUPA TODO EL ANCHO) */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/8 via-white to-gray-900/8" />
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.name}
                  variants={itemVariants}
                  className="flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 aspect-[4/3]"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <img
                    src={brand.img}
                    alt={`Logo de ${brand.name}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-brand.jpg";
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl mt-12">
        {/* Catálogo de Productos */}
        <section aria-label="Catálogo de productos" className="mb-20">
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestro <span className="text-[#e3001b]">Catálogo</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed"
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
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full"
            />
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.article
                key={product.slug}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleProductClick(product.categoryKey)}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-[#e3001b]/20 group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${product.name}`}
                onKeyDown={(e) => handleKeyDown(e, product.categoryKey)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.img}
                    alt={`Imagen de ${product.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-product.jpg";
                    }}
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Contenido superpuesto */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#e3001b] transition-colors duration-300 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[#e3001b] font-medium group-hover:underline transition-all duration-300 text-sm">
                      Ver productos
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#e3001b]/10 flex items-center justify-center group-hover:bg-[#e3001b] transition-all duration-300">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-[#e3001b] group-hover:text-white transition-colors duration-300" 
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
          className="text-center py-12 mb-12 rounded-xl bg-white/70 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto text-base">
            Contáctanos para consultas especializadas y soluciones personalizadas
          </p>
          <motion.button
            className="bg-[#e3001b] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#c8001a] transition-colors duration-300 shadow-md hover:shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
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