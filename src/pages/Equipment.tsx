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

// Datos actualizados para todos los equipos (estructura exacta)
const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "hartridge",
    categoryKey: "hartridge",
    name: "Hartridge",
    img: "/equipos/hartridge-catalogo.jpg",
    description:
      "Equipos profesionales de prueba y calibración para sistemas de inyección diesel de última generación, con tecnología de precisión milimétrica.",
  },
  {
    slug: "ultrasonidos",
    categoryKey: "ultrasonidos",
    name: "Ultrasonidos",
    img: "/equipos/ultrasonidos-catalogo.jpg",
    description:
      "Soluciones avanzadas de limpieza y diagnóstico con tecnología ultrasónica para componentes diesel de alto rendimiento.",
  },
  {
    slug: "balanceadoras",
    categoryKey: "balanceadoras",
    name: "Balanceadoras",
    img: "/equipos/balanceadoras-catalogo.jpg",
    description:
      "Máquinas de equilibrio dinámico de alta precisión para ruedas, volantes y componentes rotativos de motores diesel y pesados.",
  },
  {
    slug: "dpf",
    categoryKey: "dpf",
    name: "DPF",
    img: "/equipos/dpf-catalogo.jpg",
    description:
      "Sistemas especializados para la limpieza, regeneración y diagnóstico de filtros de partículas diesel (DPF), cumpliendo con normativas Euro 6.",
  },
  {
    slug: "luxometro",
    categoryKey: "luxometro",
    name: "Luxómetros",
    img: "/equipos/luxometro-catalogo.jpg",
    description:
      "Medidores de intensidad luminosa para verificar iluminación de faros y sistemas de iluminación automotriz según estándares internacionales.",
  },
  {
    slug: "millennium",
    categoryKey: "millennium",
    name: "Millennium",
    img: "/equipos/millennium-catalogo.jpg",
    description: "Fichas pendientes",
  },
  {
    slug: "sand-blasters",
    categoryKey: "sand-blasters",
    name: "Sand Blasters (Equipos de limpieza por arena a presión)",
    img: "/equipos/sand-blasters-catalogo.jpg",
    description: "Fichas pendientes",
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
      className="min-h-screen text-gray-800 pt-4" // Añadido padding top base como en Products.tsx
      style={{
        backgroundImage: "url(\"image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM0 34v-4H-2v4H-6v2h4v4h2V4h4V2H0zM6 34v-4H4v4H0v2h4v4h2V4h4V2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}
    >
      {/* Sección de Marcas con Imagen de Fondo (Header) */}
      <section 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/equipment.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label="Catálogo completo de equipos especializados"
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado - AJUSTADO CON pt-20 como en Products.tsx */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Nuestro <span className="text-[#e3001b] drop-shadow-lg">Catálogo Completo</span>
          </motion.h1>

          <motion.p 
            className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Soluciones profesionales para mantenimiento, diagnóstico y reparación de sistemas diesel y componentes automotrices de alta gama
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

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl mt-20"> {/* Ajustado a mt-20 como en Products.tsx */}
        {/* Catálogo de Productos */}
        <section aria-label="Catálogo de equipos" className="mb-20 scroll-mt-24"> {/* Añadido scroll-mt-24 */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nuestro <span className="text-[#e3001b]">Catálogo</span> de Equipos
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Descubre nuestra selección de equipos especializados para el mantenimiento, diagnóstico y reparación de sistemas diesel y componentes automotrices de última generación
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
            {equipmentCategories.map((category) => (
              <motion.article
                key={category.slug}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCategoryClick(category.categoryKey)}
                className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100/50 hover:border-[#e3001b]/20 group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Ver detalles de ${category.name}`}
                onKeyDown={(e) => handleKeyDown(e, category.categoryKey)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.img}
                    alt={`Imagen de ${category.name}`}
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
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-xs line-clamp-2">
                      {category.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#e3001b] transition-colors duration-300 line-clamp-1">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-[#e3001b] font-medium group-hover:underline transition-all duration-300 text-sm">
                      Ver equipos
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

export default Equipment;