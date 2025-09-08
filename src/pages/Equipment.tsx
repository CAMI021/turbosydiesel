// src/pages/Equipment.tsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Tipos TypeScript
interface EquipmentCategory {
  slug: string;
  categoryKey: string;
  name: string;
  img: string;
  description: string;
}

// Datos SOLO para equipos (Hartridge y Ultrasonidos)
const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "hartridge",
    categoryKey: "hartridge",
    name: "Equipos Hartridge",
    img: "/equipos/hartridge-catalogo.jpg",
    description: "Equipos profesionales de prueba y calibración para sistemas de inyección diesel de última generación, con tecnología de precisión milimétrica.",
  },
  {
    slug: "ultrasonidos",
    categoryKey: "ultrasonidos",
    name: "Sistemas de Ultrasonidos",
    img: "/equipos/ultrasonidos-catalogo.jpg",
    description: "Soluciones avanzadas de limpieza y diagnóstico con tecnología ultrasónica para componentes diesel de alto rendimiento.",
  },
];

const Equipment: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryKey: string): void => {
    navigate(`/equipos/${categoryKey}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, categoryKey: string): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleCategoryClick(categoryKey);
    }
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 70,
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
      {/* Sección Principal */}
      <section 
        className="relative w-full h-[55vh] min-h-[400px] flex items-center justify-center mb-20 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/equipos-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Catálogo de equipos especializados"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/70" />

        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestros <span className="text-[#e3001b]">Equipos Especializados</span>
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Soluciones profesionales para mantenimiento y diagnóstico de sistemas diesel 
            con tecnología de vanguardia y precisión milimétrica
          </motion.p>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-[#e3001b] mx-auto mt-8 rounded-full shadow-lg"
          />
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Catálogo de Categorías de Equipos */}
        <section aria-label="Categorías de equipos" className="mb-24">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestras <span className="text-[#e3001b]">Soluciones Profesionales</span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Seleccione una categoría para explorar nuestros equipos especializados 
              diseñados para talleres y profesionales del sector diesel
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
            className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {equipmentCategories.map((category) => (
              <motion.article
                key={category.slug}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.categoryKey)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 border-transparent hover:border-[#e3001b] group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Explorar ${category.name}`}
                onKeyDown={(e) => handleKeyDown(e, category.categoryKey)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.img}
                    alt={`Categoría ${category.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "/img/placeholder-category.jpg";
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e3001b] font-semibold">
                      Ver equipos disponibles
                    </span>
                    
                    <div className="w-10 h-10 rounded-full bg-[#e3001b]/10 flex items-center justify-center group-hover:bg-[#e3001b] transition-all duration-300">
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

        {/* Sección de Beneficios */}
        <motion.section 
          className="bg-white rounded-2xl shadow-md p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e3001b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e3001b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tecnología Certificada</h3>
              <p className="text-gray-600">Equipos homologados y calibrados según estándares internacionales de precisión</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e3001b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e3001b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Soporte Técnico Especializado</h3>
              <p className="text-gray-600">Asesoramiento profesional para la implementación y uso óptimo de los equipos</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#e3001b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#e3001b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm7-6h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2v-6a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Documentación Completa</h3>
              <p className="text-gray-600">Manuales técnicos detallados y protocolos de operación para cada equipo</p>
            </div>
          </div>
        </motion.section>

        {/* Call to Action final */}
        <motion.section 
          className="text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Necesitas asesoramiento especializado?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo técnico está disponible para ayudarte a seleccionar 
            la solución óptima para tus necesidades
          </p>
          <motion.button
            className="bg-[#e3001b] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#c8001a] transition-colors duration-300 shadow-lg hover:shadow-xl text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Solicitar Asesoría Técnica
          </motion.button>
        </motion.section>
      </main>
    </div>
  );
};

export default Equipment;