// src/pages/ProductDetails.tsx
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft, Shield, Star } from "lucide-react";

const ProductDetails = () => {
  const { categoryKey, productId } = useParams();
  const navigate = useNavigate();
  
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

  // Número de WhatsApp y mensaje predefinido
  const whatsappNumber = "573001234567"; // Reemplaza con tu número real
  const whatsappMessage = `Hola, estoy interesado en el producto ${product.name} (modelo: ${product.id})`;

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

              {/* Características principales (ahora por producto) */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">Características Principales</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.mainFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-[#e3001b] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botón de WhatsApp */}
              <div className="mb-6">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-4 rounded-lg hover:bg-[#128C7E] transition-colors font-bold text-lg shadow-md hover:shadow-lg"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472,14.382c-0.267-0.132-1.068-0.522-1.229-0.585c-0.161-0.063-0.277-0.084-0.397,0.085 c-0.119,0.169-0.466,0.565-0.561,0.659c-0.095,0.094-0.189,0.114-0.35,0.051c-0.161-0.063-0.669-0.245-1.264-0.762 c-0.501-0.458-1.044-1.064-1.164-1.233c-0.12-0.17-0.01-0.263,0.09-0.354c0.099-0.09,0.219-0.259,0.329-0.37 c0.11-0.11,0.14-0.209,0.203-0.349c0.063-0.14,0.032-0.259-0.021-0.349c-0.054-0.09-0.466-1.117-0.638-1.525 c-0.171-0.408-0.343-0.328-0.463-0.338c-0.12-0.011-0.259-0.011-0.398-0.011c-0.14,0-0.349,0.042-0.52,0.212 c-0.171,0.17-0.64,0.628-0.64,1.506c0,0.878,0.68,1.705,0.779,1.825c0.099,0.119,1.328,2.02,3.219,2.858 c0.24,0.106,0.45,0.17,0.64,0.212c0.267,0.057,0.506,0.078,0.726,0.078c0.615,0,1.112-0.41,1.201-0.499 C17.64,15.07,17.74,14.701,17.472,14.382z M12,2.001c-5.514,0-9.999,4.486-9.999,9.999c0,5.515,4.486,10.001,10.001,10.001 c5.513,0,9.998-4.486,9.998-9.999C21.999,6.487,17.514,2.001,12,2.001z M12,20c-4.411,0-8-3.589-8-8c0-4.411,3.589-8,8-8 s8,3.589,8,8C20,16.411,16.411,20,12,20z"/>
                  </svg>
                  <span>Consultar por WhatsApp</span>
                </a>
              </div>

              {/* Garantía y envío */}
              <div className="border-t pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Garantía: 12 meses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Especificaciones técnicas - Tabla mejorada */}
          <div className="border-t p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Especificaciones Técnicas</h3>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Característica
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Detalle
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {product.technicalSpecs.map((spec, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                        {spec.label}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-gray-500 italic">
              Las especificaciones técnicas pueden variar según el modelo y región.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;