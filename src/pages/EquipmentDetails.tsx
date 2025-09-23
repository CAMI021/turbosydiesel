import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

interface Equipment {
  id: string;
  name: string;
  images: string[]; // Array de imágenes
  description: string;
  specifications: string[];
  applications: string[];
  technicalSheetPdf?: string;
}

const EquipmentDetails: React.FC = () => {
  const { categoryKey, equipmentId } = useParams();
  const navigate = useNavigate();

  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Número de WhatsApp (reemplaza con el tuyo)
  const whatsappNumber = "+5491112345678"; // Formato internacional

  // Mapeo de categoryKey a nombre visual
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

    // Cargar datos del equipo desde el JSON específico
    import(`../data/equipment/${categoryKey}.json`)
      .then((module) => {
        const equipments: Equipment[] = module.default;
        const found = equipments.find((eq) => eq.id === equipmentId);

        if (found) {
          setEquipment(found);
          setSelectedImage(found.images[0]); // Establecer primera imagen como seleccionada
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

  const handleWhatsAppClick = () => {
    const message = `Hola, estoy interesado en el equipo ${equipment?.name} de la categoría ${getCategoryName(categoryKey || "")}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
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
      <div className="min-h-screen flex items-center justify-center p-4 py-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{error}</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver atrás
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800">
      {/* Header section - Igual que ProductDetails */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden" style={{ backgroundImage: `url('/products.jpg')` }}>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20"> {/* Ajuste de padding superior agregado */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{equipment.name}</h1>
          <p className="text-base md:text-lg text-gray-100 mb-6">{getCategoryName(categoryKey || "")}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna Izquierda: Imágenes y características */}
          <div className="space-y-6">
            {/* Galería de imágenes interactiva */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <img
                  src={selectedImage}
                  alt={equipment.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-equipment.jpg";
                  }}
                />
              </div>
              <div className="flex justify-center gap-4 p-4">
                {equipment.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${equipment.name} - ${index + 1}`}
                    className={`w-24 h-24 object-cover cursor-pointer transition-transform hover:scale-105 ${
                      selectedImage === img ? "ring-2 ring-[#e3001b]" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Características principales */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Características principales</h2>
              <ul className="list-disc pl-5 space-y-2">
                {equipment.applications.map((app, index) => (
                  <li key={index} className="text-gray-700">
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna Derecha: Especificaciones y descarga */}
          <div className="space-y-6">
            {/* Especificaciones técnicas */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Especificaciones técnicas</h2>
              <div className="grid grid-cols-2 gap-4">
                {equipment.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-gray-500 font-medium">Detalle {index + 1}</span>
                    <span className="text-gray-800">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Descargar ficha técnica */}
            {equipment.technicalSheetPdf && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Descargar ficha técnica</h2>
                <a
                  href={equipment.technicalSheetPdf}
                  download
                  className="text-[#e3001b] hover:underline flex items-center"
                >
                  Descargar PDF <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            )}

            {/* Descripción general (abajo de todo en columna derecha) */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">{equipment.description}</p>
              <p className="text-sm text-gray-500 mt-4">ID: {equipment.id}</p>
            </div>
          </div>
        </div>

        {/* Botón de Contacto por WhatsApp al final - Mismo estilo que ProductDetails */}
        <div className="mt-12 mb-8 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>Contactar por WhatsApp</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default EquipmentDetails;