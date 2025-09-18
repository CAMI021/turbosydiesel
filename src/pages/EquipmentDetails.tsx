import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Download, ChevronLeft, ChevronRight } from "lucide-react";

interface Equipment {
  id: string;
  name: string;
  images: string[]; // Ahora es un array de imágenes
  description: string;
  specifications: string[];
  applications: string[];
  technicalSheetPdf?: string; // Campo opcional para PDF
}

const EquipmentDetails: React.FC = () => {
  const { categoryKey, equipmentId } = useParams(); // CORRECCIÓN: equipmentId en lugar de productId
  const navigate = useNavigate();

  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mapeo de categoryKey a nombre visual (estructura exacta)
  const getCategoryName = (key: string): string => {
    const map: Record<string, string> = {
      hartridge: "Hartridge",
      ultrasonidos: "Ultrasonidos",
      balanceadoras: "Balanceadoras",
      dpf: "DPF",
      millennium: "Millennium",
      "sand-blasters": "Sand Blasters (Equipos de limpieza por arena a presión)",
      luxometro: "Luxómetros",
    };
    return map[key] || key;
  };

  useEffect(() => {
    if (!categoryKey || !equipmentId) {
      setError("Categoría o equipo no especificados");
      setLoading(false);
      return;
    }

    setCategoryName(getCategoryName(categoryKey));

    // Cargar datos del equipo desde el JSON específico
    import(`../data/equipment/${categoryKey}.json`)
      .then((module) => {
        const equipments: Equipment[] = module.default;
        const found = equipments.find((eq) => eq.id === equipmentId);

        if (found) {
          setEquipment(found);
          // Inicializar la imagen actual con la primera del array
          if (found.images && found.images.length > 0) {
            setCurrentImageIndex(0);
          }
        } else {
          setError("Equipo no encontrado en esta categoría");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando equipo:", err);
        setError("No se pudieron cargar los datos del equipo");
        setLoading(false);
      });
  }, [categoryKey, equipmentId]);

  const handlePrevImage = () => {
    if (!equipment?.images) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? equipment.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!equipment?.images) return;
    setCurrentImageIndex((prev) => 
      prev === equipment.images.length - 1 ? 0 : prev + 1
    );
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
          <p className="text-gray-700 mb-4">{error}</p>
          <Link to={`/equipos/${categoryKey}`} className="text-[#e3001b] hover:underline font-medium">
            Volver a la categoría
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/equipos" className="hover:text-[#e3001b]">Catálogo de Equipos</Link>
          <span>/</span>
          <Link to={`/equipos/${categoryKey}`} className="hover:text-[#e3001b]">
            {categoryName}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{equipment.name}</span>
        </nav>

        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#e3001b] hover:text-red-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a {categoryName}</span>
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="space-y-8 p-6 md:p-8">
            {/* Galería de imágenes mejorada con carrusel */}
            <div className="rounded-xl overflow-hidden border border-gray-200">
              <div className="relative">
                <div className="relative h-[400px]">
                  {equipment.images && equipment.images.length > 0 && (
                    <>
                      <img
                        src={equipment.images[currentImageIndex]}
                        alt={equipment.name}
                        className="w-full h-full object-contain bg-gray-50"
                        onError={(e) => {
                          e.currentTarget.src = "/img/placeholder-equipment.jpg";
                        }}
                      />
                      {equipment.images.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
                            aria-label="Imagen anterior"
                          >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md"
                            aria-label="Siguiente imagen"
                          >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                          </button>
                        </>
                      )}
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{equipment.name}</h3>
                  <p className="text-sm opacity-90">{categoryName}</p>
                </div>
              </div>

              {equipment.images && equipment.images.length > 1 && (
                <div className="flex overflow-x-auto pb-4 px-2 space-x-3 bg-gray-50 rounded-b-xl">
                  {equipment.images.map((img, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                        index === currentImageIndex ? 'ring-2 ring-[#e3001b]' : 'opacity-70 hover:opacity-100'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={img}
                        alt={`Vista ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Información del equipo */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 text-sm bg-[#e3001b]/10 text-[#e3001b] rounded-full">
                    {categoryName}
                  </span>
                  <div className="ml-3 h-px flex-1 bg-gray-200" />
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">{equipment.name}</h1>
                <p className="text-gray-600 text-lg mb-6">ID: {equipment.id}</p>

                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{equipment.description}</p>
                </div>
              </div>

              {/* Especificaciones técnicas */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#e3001b] rounded-full mr-3" />
                  Especificaciones Técnicas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipment.specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#e3001b] transition-colors"
                    >
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-[#e3001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aplicaciones / Usos */}
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#e3001b] rounded-full mr-3" />
                  Aplicaciones
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {equipment.applications.map((app, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-[#e3001b] transition-colors"
                    >
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-[#e3001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ficha técnica - SECCIÓN DE DESCARGA */}
              {equipment.technicalSheetPdf && (
                <div className="border-t border-gray-200 pt-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#e3001b] rounded-full mr-3" />
                    Descargar Ficha Técnica
                  </h2>

                  <div className="flex justify-center">
                    <a
                      href={equipment.technicalSheetPdf}
                      download
                      className="inline-flex items-center px-6 py-3 bg-[#e3001b] text-white rounded-xl hover:bg-[#c8001a] transition-colors shadow-md"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Descargar Ficha Técnica (PDF)
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="mt-16 text-center py-12 bg-white/70 backdrop-blur-sm rounded-2xl max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          ¿Necesitas ayuda para elegir o instalar?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Nuestro equipo técnico está disponible para asesorarte en la selección, instalación y mantenimiento de tus equipos.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#e3001b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c8001a] transition-colors duration-300 inline-flex items-center"
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
    </div>
  );
};

export default EquipmentDetails;