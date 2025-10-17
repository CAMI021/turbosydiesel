// category.tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  shortDesc: string;
  brand: string;
}

interface Category {
  title: string;
  description: string;
  products: Product[];
  brands?: string[];
  mainBrands?: string[];
  categoryDescription?: string;
}

const Category: React.FC = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const navigate = useNavigate();

  if (!categoryKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categoría no encontrada</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const category = products[categoryKey as keyof typeof products] as Category | undefined;
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Categoría no encontrada</h2>
          <button 
            onClick={() => navigate('/products')}
            className="text-[#e3001b] hover:underline"
          >
            ← Volver al catálogo
          </button>
        </div>
      </div>
    );
  }

  const filteredProducts = useMemo(() => {
    return category.products;
  }, [category.products]);

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-12"> {/* AQUÍ ESTÁ EL CAMBIO PRINCIPAL: py-12 → pt-40 pb-12 */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Encabezado de categoría */}
        <motion.div
          className={`${categoryKey === 'filters' ? '' : 'text-center'} mb-12`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categoryKey === 'filters' ? (
            // NUEVO DISEÑO PARA FILTROS - ESTILO HARTRIDGE
            <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center gap-6 h-full">
                {/* Logo */}
                <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 flex justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-[#e3001b]/5 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <div className="relative bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                      <img 
                        src="/marcas/racor.png" 
                        alt="Logo Racor" 
                        className="h-20 w-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Texto descriptivo */}
                <div className="md:flex-1 min-w-0 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    Filtros Separadores de agua tipo "Racor"
                  </h2>
                  <ul className="space-y-2 text-gray-600 leading-relaxed">
                    <li className="flex items-start">
                      <span className="text-[#e3001b] font-bold mr-2">•</span>
                      <span>Separan 99.5% del agua del combustible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e3001b] font-bold mr-2">•</span>
                      <span>Alargan la vida del sistema de inyección</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e3001b] font-bold mr-2">•</span>
                      <span>Filtración de 2, 10 o 30 micrones</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e3001b] font-bold mr-2">•</span>
                      <span>Fácil instalación y mantenimiento</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#e3001b] font-bold mr-2">•</span>
                      <span>Disponible en varios tamaños</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                {category.title}
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-6">
                {category.description}
              </p>

              {/* MARCAS - ESTILO UNIFORME SIN TONOS ROJOS */}
              {((category.mainBrands && category.mainBrands.length > 0) || (category.brands && category.brands.length > 0)) && (
                <div className="mt-8 max-w-6xl mx-auto space-y-4">
                  
                  {/* MARCAS PRINCIPALES - ESTILO UNIFICADO */}
                  {category.mainBrands && category.mainBrands.length > 0 && (
                    <div className="bg-white rounded-xl shadow-md p-5 border border-gray-200">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 h-full">
                        {/* Left: Brands - LOGOS EN HORIZONTAL */}
                        <div className="md:w-1/3 lg:w-1/4 flex-shrink-0 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.293 9 11.622 5.176-1.329 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">Especialistas en:</span>
                          </div>
                          
                          <div className="flex flex-row items-center justify-center md:justify-start gap-6 flex-wrap">
                            {category.mainBrands.map((brand) => (
                              <div key={brand} className="relative group flex-shrink-0">
                                <img 
                                  src={`/marcas/${brand}.png`} 
                                  alt={brand} 
                                  className={`h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110`}
                                  loading="lazy"
                                  onError={(e) => {
                                    e.currentTarget.src = "/img/placeholder-brand.png";
                                  }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Descripciones específicas por categoría */}
                        {categoryKey === 'turbochargers' && (
                          <div className="md:flex-1 min-w-0 flex flex-col justify-center">
                            <p className="text-gray-600 leading-relaxed">
                              <span className="font-semibold text-gray-800">Holset</span> es líder en turbocargadores para motores diésel, diseñados y fabricados por Cummins Turbo Technologies. Somos distribuidores autorizados de la gama de productos Holset, ofreciendo soluciones integrales para el máximo rendimiento y la durabilidad de su motor.
                            </p>
                          </div>
                        )}

                        {categoryKey === 'common-rail-systems' && (
                          <div className="md:flex-1 min-w-0 flex flex-col justify-center">
                            <p className="text-gray-600 leading-relaxed">
                              Somos distribuidores autorizados de sistemas de inyección. Ofrecemos la tecnología Bosch (líder en Common Rail) y las soluciones avanzadas de Delphi. Garantizamos productos originales y soporte técnico especializado para la máxima eficiencia de su motor.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* MARCAS SECUNDARIAS */}
                  {category.brands && category.brands.length > 0 && (
                    <div className="bg-gray-50 rounded-xl shadow-sm p-5 border border-gray-200">
                      <div className="flex flex-wrap items-center justify-center gap-5">
                        <span className="text-sm font-medium text-gray-600">También vendemos otras marcas:</span>
                        {category.brands.map((brand) => (
                          <div key={brand} className="group">
                            <img 
                              src={`/marcas/${brand}.png`} 
                              alt={brand} 
                              className="h-12 object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
                              loading="lazy"
                              onError={(e) => {
                                e.currentTarget.src = "/img/placeholder-brand.png";
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </motion.div>

        {/* GRID DE PRODUCTOS - MISMO TAMAÑO QUE EQUIPMENTCATEGORY */}
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {filteredProducts.map((product: Product) => (
            <motion.article
              key={product.id}
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-80 lg:w-96 bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl cursor-pointer border border-gray-100 hover:border-[#e3001b]/30 flex flex-col"
              role="button"
              tabIndex={0}
              aria-label={`Ver detalles de ${product.name}`}
              onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
            >
              <div className="relative h-56 overflow-hidden bg-white">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain object-center transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-product.jpg";
                    e.currentTarget.parentElement?.classList.add('bg-gray-100');
                  }}
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {product.name}
                </h2>

                <div className="flex-1">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
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

        {/* Mensaje si no hay productos */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-md">
            <p className="text-gray-600 text-lg">
              Actualmente no hay productos disponibles en esta categoría. Por favor,
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
              del producto más adecuado para tus necesidades específicas.
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

export default Category;