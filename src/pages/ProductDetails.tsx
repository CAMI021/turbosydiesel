// src/pages/ProductDetails.tsx
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft, Package, Shield, Star, ShoppingCart, Heart } from "lucide-react";

const ProductDetails = () => {
  const { categoryKey, productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Obtener el producto directamente
  const category = products[categoryKey as keyof typeof products];
  const product = category?.products.find(p => p.id === productId) || null;

  if (!category || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Producto no encontrado</h2>
          <Link to="/products" className="text-[#e3001b] hover:underline">
            ← Volver al catálogo
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
          <Link to="/products" className="hover:text-[#e3001b]">Catálogo</Link>
          <span>/</span>
          <Link to={`/products/${categoryKey}`} className="hover:text-[#e3001b]">
            {category.title}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Botón volver */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#e3001b] hover:text-red-800 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Galería de imágenes */}
            <div>
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg bg-gray-100 p-4"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-product.jpg";
                  }}
                />
              </div>
            </div>

            {/* Información del producto */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm bg-[#e3001b]/10 text-[#e3001b] rounded-full mb-2">
                  {product.brand}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-gray-600 mb-2">Modelo: {product.id}</p>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">4.8 (127 reseñas)</span>
                </div>
              </div>

              {/* Precio */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-[#e3001b]">
                    {product.price}
                  </span>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descripción</h3>
                <p className="text-gray-700">
                  {product.shortDesc}
                </p>
              </div>

              {/* Disponibilidad */}
              <div className="mb-6">
                <div className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-medium">En Stock - Envío inmediato</span>
                </div>
              </div>

              {/* Controles de compra */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-sm font-medium">Cantidad:</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-[#e3001b] text-white px-6 py-3 rounded-lg hover:bg-red-800 flex items-center justify-center space-x-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Agregar al Carrito</span>
                  </button>
                  <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Garantía y envío */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Garantía: 12 meses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-4 h-4 text-[#e3001b]">🚚</span>
                    <span>Envío gratuito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Especificaciones técnicas */}
          <div className="border-t p-6">
            <h3 className="text-xl font-bold mb-4">Especificaciones Técnicas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.technicalSpecs.map((spec, index) => (
                <div 
                  key={index} 
                  className="flex justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="font-medium text-gray-700">{spec.label}:</span>
                  <span className="text-gray-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Características */}
          <div className="border-t p-6">
            <h3 className="text-xl font-bold mb-4">Características Principales</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                "Alta durabilidad en condiciones extremas",
                "Tecnología probada en campo",
                "Fácil instalación y mantenimiento",
                "Cumple con estándares internacionales"
              ].map((feature, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-[#e3001b] rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;