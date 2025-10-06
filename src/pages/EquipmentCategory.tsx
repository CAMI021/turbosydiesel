// src/pages/EquipmentCategory.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

interface Equipment {
  id: string;
  name: string;
  images: string[];
  description: string;
  specifications: string[];
  applications: string[];
  technicalSheetPdf?: string;
}

interface CategoryData {
  categoryDescription?: string;
  equipments: Equipment[];
}

const EquipmentCategory: React.FC = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryKey) {
      setError("Categoría no especificada");
      setLoading(false);
      return;
    }

    // Mapeo de categoryKey a nombre visual - ACTUALIZADO CON LOS NUEVOS NOMBRES
    const categoryNames: Record<string, string> = {
      hartridge: "Equipos Hartridge",
      ultrasonidos: "Ultrasonidos",
      balanceadoras: "Balanceadoras",
      dpf: "Filtrado de partículas diesel",
      millennium: "Bancos de prueba",
      "sand-blasters": "Sand Blasters (Equipos de limpieza por arena a presión)",
      luxometro: "Luxómetros",
    };

    // Establecer el nombre de la categoría
    setCategoryName(categoryNames[categoryKey] || categoryKey);

    // Cargar datos específicos
    import(`../data/equipment/${categoryKey}.json`)
      .then((module) => {
        const data: CategoryData = module.default;
        
        // Manejar tanto el formato antiguo (array) como el nuevo (objeto con .equipments)
        if (Array.isArray(data)) {
          setEquipments(data);
          setCategoryDescription(null);
        } else {
          setCategoryDescription(data.categoryDescription || null);
          setEquipments(data.equipments || []);
        }
        
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading equipment category", err);
        setError("No se pudieron cargar los equipos de esta categoría");
        setLoading(false);
      });
  }, [categoryKey]);

  const handleEquipmentClick = (equipmentId: string): void => {
    navigate(`/equipos/${categoryKey}/${equipmentId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent, equipmentId: string): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleEquipmentClick(equipmentId);
    }
  };

  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e3001b] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando equipos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 py-20">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error}</p>
          <button
            onClick={() => navigate("/equipos")}
            className="text-[#e3001b] hover:underline font-medium"
          >
            Volver al catálogo de equipos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Encabezado de categoría */}
        <motion.div
          className={`${categoryKey === 'hartridge' ? '' : 'text-center'} mb-12`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categoryKey === 'hartridge' ? (
            // NUEVO DISEÑO PARA HARRIDGE - SIEMPRE VISIBLE
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center gap-6 h-full">
                {/* Logo */}
                <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#e3001b]/5 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <img 
                        src="/marcas/hartridge.png" 
                        alt="Logo de Equipos Hartridge" 
                        className="h-20 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Texto descriptivo */}
                <div className="md:flex-1 min-w-0 flex flex-col justify-center">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Hartridge, Empresa fundada en 1930 fabricante de Equipos de prueba para sistemas de inyección Diesel para las fábricas y los Servicios autorizados de los fabricantes DELPHI, STANADYNE, DENSO, CONTINENTAL, CATERPILLAR, YANMAR, CUMMINS y otros.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Nosotros somos Distribuidores para Colombia, Brindamos soporte técnico en instalación de los equipos, asesoría en la compra y capacitación. Garantía según condiciones de fábrica, tenemos en stock Inventario de repuestos de consumo.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              {categoryName}
            </h1>
          )}

          {/* Descripción genérica para otras categorías */}
          {categoryKey !== 'hartridge' && categoryDescription && (
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
              {categoryDescription}
            </p>
          )}
        </motion.div>

        {/* Grid de equipos centrado */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {equipments.map((equipment) => (
            <motion.article
              key={equipment.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleEquipmentClick(equipment.id)}
              className="w-full sm:w-80 lg:w-96 bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border border-gray-100 hover:border-[#e3001b]/30"
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${equipment.name}`}
              onKeyDown={(e) => handleKeyDown(e, equipment.id)}
            >
              <div className="relative h-56 overflow-hidden bg-white">
                <img
                  src={equipment.images[0]}
                  alt={equipment.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-equipment.jpg";
                    e.currentTarget.parentElement?.classList.add('bg-gray-100');
                  }}
                />

              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {equipment.name}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {equipment.description}
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

        {/* Mensaje si no hay equipos */}
        {equipments.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md mt-12">
            <p className="text-gray-600 text-lg">
              Actualmente no hay equipos disponibles en esta categoría. Por favor,
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
              del equipo más adecuado para tus necesidades específicas
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

export default EquipmentCategory;