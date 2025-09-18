import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ProductDetails = () => {
  const { categoryKey, productId } = useParams();
  const category = products[categoryKey as keyof typeof products];
  const product = category?.products.find(p => p.id === productId);

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
    <div className="min-h-screen text-gray-800">
      {/* Header section */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden" style={{ backgroundImage: `url('/products.jpg')` }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-base md:text-lg text-gray-100 mb-6">{product.shortDesc}</p>
        </div>
      </section>

      <main className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="relative h-96">
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => { e.currentTarget.src = "/img/placeholder-product.jpg"; }}
                />
              </div>
              <div className="flex justify-center gap-4 p-4">
                {product.images.slice(1).map((img, index) => (
                  <img 
                    key={index}
                    src={img}
                    alt={`${product.name} - ${index + 1}`}
                    className="w-24 h-24 object-cover cursor-pointer hover:scale-105 transition-transform"
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;