// src/pages/EquipmentDetails.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate, useLocation } from "react-router-dom";

interface Equipment {
  id: string;
  name: string;
  img: string;
  description: string;
  specifications: string[];
  applications: string[];
}

const EquipmentDetails: React.FC = () => {
  const { categoryKey, equipmentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryKey || !equipmentId) {
      setError("Equipo no especificado");
      setLoading(false);
      return;
    }

    try {
      // Determinar nombre de la categoría
      if (categoryKey === "hartridge") {
        setCategoryName("Equipos Hartridge");
      } else if (categoryKey === "ultrasonidos") {
        setCategoryName("Sistemas de Ultrasonidos");
      } else {
        throw new Error("Categoría no válida");
      }

      // Cargar datos específicos
      import(`../data/equipment/${categoryKey}.json`)
        .then((data) => {
          const equipments = data.default;
          const selectedEquipment = equipments.find((e: Equipment) => e.id === equipmentId);
          
          if (selectedEquipment) {
            setEquipment(selectedEquipment);
          } else {
            setError("Equipo no encontrado");
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error loading equipment details", err);
          setError("No se pudo cargar la información del equipo");
          setLoading(false);
        });
    } catch (err) {
      setError("Categoría no válida");
      setLoading(false);
    }
  }, [categoryKey, equipmentId]);

  const handleBack = () => {
    if (location.state?.fromEquipment) {
      navigate(-1);
    } else {
      navigate(`/equipos/${categoryKey}`);
    }
  };

  // Animaciones
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e3001b] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando detalles del equipo...</p>
        </div>
      </div>
    );
  }

  if (error || !equipment) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 py-20">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md text-center">
          <h2 className="text-xl font-bold text-red-700 mb-2">Error</h2>
          <p className="text-gray-700 mb-4">{error || "Equipo no encontrado"}</p>
          <button 
            onClick={() => navigate('/equipos')}
            className="text-[#e3001b] hover:underline font-medium"
          >
            Volver al catálogo de equipos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <button 
                onClick={() => navigate('/equipos')}
                className="text-gray-500 hover:text-[#e3001b] transition-colors"
              >
                Catálogo de Equipos
              </button>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <button 
                onClick={() => navigate(`/equipos/${categoryKey}`)}
                className="text-gray-500 hover:text-[#e3001b] transition-colors"
              >
                {categoryName}
              </button>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-[#e3001b] font-medium">{equipment.name}</li>
          </ol>
        </nav>

        {/* Contenido principal */}
        <motion.div 
          className="bg-white rounded-2xl shadow-md overflow-hidden"
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header con imagen */}
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-10">
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={equipment.img}
                  alt={equipment.name}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-equipment.jpg";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#e3001b] shadow-md">
                  {categoryName}
                </div>
              </motion.div>
            </div>
            
            <div className="p-6 lg:p-10 bg-gray-50">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#e3001b]/10 text-[#e3001b] rounded-full text-sm font-medium mb-4">
                    Equipo Profesional
                  </span>
                  <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    {equipment.name}
                  </h1>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {equipment.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center text-[#e3001b] hover:text-[#c8001a] font-medium transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 mr-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    Volver a {categoryName}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Detalles técnicos */}
          <div className="p-6 lg:p-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Especificaciones */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-8 bg-[#e3001b] rounded-r-lg mr-3"></span>
                  Especificaciones Técnicas
                </h2>
                
                <div className="space-y-4">
                  {equipment.specifications.map((spec, index) => (
                    <div 
                      key={index} 
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-[#e3001b] rounded-full mr-3"></div>
                      </div>
                      <p className="text-gray-700">{spec}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Aplicaciones */}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="w-3 h-8 bg-[#e3001b] rounded-r-lg mr-3"></span>
                  Aplicaciones
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {equipment.applications.map((app, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 border border-gray-100 rounded-lg p-4 hover:border-[#e3001b]/30 transition-colors"
                    >
                      <p className="text-gray-700 font-medium">{app}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sección de soporte */}
          <div className="p-6 lg:p-10 bg-gradient-to-r from-[#e3001b]/5 to-gray-50 border-t border-gray-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Soporte Técnico Especializado
              </h2>
              <p className="text-gray-600 mb-6">
                Nuestro equipo está disponible para brindarle asesoramiento 
                personalizado sobre la implementación y uso de este equipo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => navigate('/contact')}
                  className="bg-[#e3001b] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c8001a] transition-colors duration-300 flex items-center justify-center"
                >
                  Solicitar Asesoría
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
                <button
                  onClick={() => navigate('/downloads')}
                  className="bg-white border border-[#e3001b] text-[#e3001b] px-6 py-3 rounded-lg font-semibold hover:bg-[#e3001b]/5 transition-colors duration-300"
                >
                  Descargar Manual Técnico
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EquipmentDetails;