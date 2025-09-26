import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";

interface Equipment {
  id: string;
  name: string;
  images: string[]; // Ahora es un array de imágenes
  description: string;
  specifications: string[];
  applications: string[];
}

const EquipmentCategory: React.FC = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryKey) {
      setError("Categoría no especificada");
      setLoading(false);
      return;
    }

    // Mapeo de categoryKey a nombre visual (estructura exacta)
    const categoryNames: Record<string, string> = {
      hartridge: "Hartridge",
      ultrasonidos: "Ultrasonidos",
      balanceadoras: "Balanceadoras",
      dpf: "DPF",
      millennium: "Millennium",
      "sand-blasters": "Sand Blasters (Equipos de limpieza por arena a presión)",
      luxometro: "Luxómetros",
    };

    // Establecer el nombre de la categoría
    setCategoryName(categoryNames[categoryKey] || categoryKey);

    // Cargar datos específicos
    import(`../data/equipment/${categoryKey}.json`)
      .then((module) => {
        const equipments: Equipment[] = module.default;
        setEquipments(equipments);
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
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Encabezado de categoría */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {categoryName}
          </h1>

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
                  src={equipment.images[0]} // Mostrar primera imagen del array
                  alt={equipment.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-equipment.jpg";
                    e.currentTarget.parentElement?.classList.add('bg-gray-100');
                  }}
                />
                <div className="absolute top-4 right-4 bg-[#e3001b] text-white px-3 py-1 rounded-full text-sm font-medium">
                  Profesional
                </div>
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
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
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