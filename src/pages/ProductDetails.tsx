import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { ArrowRight, Phone } from "lucide-react";
import { useState } from "react";

const ProductDetails = () => {
  const { categoryKey, productId } = useParams();
  const category = products[categoryKey as keyof typeof products];
  const product = category?.products.find(p => p.id === productId);

  // Estado para la imagen seleccionada
  const [selectedImage, setSelectedImage] = useState<string>(
    product?.images[0] || "/img/placeholder-product.jpg"
  );

  // Número de WhatsApp (reemplaza con el tuyo)
  const whatsappNumber = "+5491112345678"; // Formato internacional
  const whatsappMessage = `Hola, estoy interesado en el producto ${product?.name}`;

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  // Verificar si el producto debe mostrar el PDF (solo ISO4113)
  const shouldShowPdf = product?.id === "iso4113" && product?.technicalSheetPdf;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
          <button 
            onClick={() => window.history.back()}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver atrás
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header moderno con imagen de fondo profesional */}
      <header
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/products.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20"> {/* Agregado pt-20 para ajustar el espacio superior */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            {product.shortDesc}
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {/* Imagen principal grande */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={selectedImage} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = "/img/placeholder-product.jpg"; }}
                />
              </div>

              {/* Thumbnails pequeños */}
              <div className="flex justify-center gap-4 p-4">
                {product.images.map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    className={`w-24 h-24 object-cover cursor-pointer transition-transform hover:scale-105 ${
                      selectedImage === img ? "ring-2 ring-[#e3001b]" : ""
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Características principales</h2>
              <ul className="list-disc pl-5 space-y-2">
                {product.mainFeatures.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Especificaciones técnicas</h2>
              <div className="grid grid-cols-2 gap-4">
                {product.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-gray-500 font-medium">{spec.label}</span>
                    <span className="text-gray-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mostrar sección de PDF solo para productos ISO4113 */}
            {shouldShowPdf && (
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Descargar ficha técnica</h2>
                <a 
                  href={product.technicalSheetPdf}
                  download
                  className="text-[#e3001b] hover:underline flex items-center"
                >
                  Descargar PDF <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Botón de Contacto por WhatsApp al final */}
        <div className="mt-12 mb-8 flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105"
          >
            <Phone className="w-6 h-6" />
            <span>Preguntar por WhatsApp</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;