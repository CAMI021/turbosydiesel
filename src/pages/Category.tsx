import { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
const Category = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  // Obtener la categoría seleccionada
  const category = products[categoryKey as keyof typeof products];
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
  // Estado para filtros
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  // Obtener marcas únicas
  const brands = useMemo(() => {
    return Array.from(new Set(category.products.map(p => p.brand)));
  }, [category.products]);
  // Productos filtrados
  const filteredProducts = useMemo(() => {
    if (selectedBrands.length === 0) return category.products;
    return category.products.filter(p => selectedBrands.includes(p.brand));
  }, [category.products, selectedBrands]);
  // Manejador de cambios en filtros
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };
  return (
    <div 
      className="min-h-screen text-gray-800"
      style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4d4d4' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V4h4V2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
      }}
    >
      {/* Sección de Título con Imagen de Fondo */}
      <section 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden"
        style={{
          backgroundImage: `url('/products.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-label={`Categoría: ${category.title}`}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {category.title}
          </motion.h1>
          <motion.p 
            className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {category.description}
          </motion.p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg"
          />
        </div>
      </section>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl mb-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <a 
            href="/products" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/products');
            }}
            className="hover:text-[#e3001b] transition-colors"
          >
            Catálogo
          </a>
          <span>/</span>
          <span className="text-gray-900 font-medium">{category.title}</span>
        </nav>
      </div>
      <main className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Panel Lateral de Filtros */}
          <aside className="lg:w-64 sticky top-24 bg-white rounded-2xl shadow-lg p-6 border border-gray-100/50">
            <h3 className="text-lg font-bold mb-4 text-[#e3001b] flex items-center">
              <span className="w-3 h-3 bg-[#e3001b] rounded-full mr-2" />
              Filtrar por marca
            </h3>
            <div className="space-y-4">
              {brands.map(brand => (
                <label key={brand} className="flex items-center justify-between w-full p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="w-4 h-4 text-[#e3001b] rounded border-gray-300 focus:ring-[#e3001b]"
                    />
                    <span className="text-gray-700 font-medium">{brand}</span>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">
                    {category.products.filter(p => p.brand === brand).length}
                  </span>
                </label>
              ))}
              {selectedBrands.length > 0 && (
                <button 
                  onClick={() => setSelectedBrands([])}
                  className="mt-4 w-full flex items-center justify-center space-x-2 bg-[#e3001b]/10 text-[#e3001b] py-3 rounded-xl hover:bg-[#e3001b]/20 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Limpiar filtros ({selectedBrands.length})</span>
                </button>
              )}
            </div>
          </aside>
          {/* Contenido Principal */}
          <div className="lg:flex-1">
            {/* Encabezado con contador */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'} disponibles
              </h2>
            </div>
            {/* Mensaje de no resultados */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#e3001b]/10 mb-6">
                  <svg className="w-10 h-10 text-[#e3001b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron productos</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  No hay productos que coincidan con los filtros seleccionados. Prueba eliminando algunos filtros para ver más opciones.
                </p>
                <button 
                  onClick={() => setSelectedBrands([])}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#e3001b] hover:bg-[#c8001a] transition-colors"
                >
                  <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2A8.001 8.001 0 0020.418 9m0 0h-5m-5 5v-5m-1.641 6.641L3 14m-1 3 1-1m16-4.641L21 14m-1-3 1 1"></path>
                  </svg>
                  Ver todos los productos
                </button>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100/50 group relative"
                  >
                    {/* Imagen del producto */}
                    <div 
                      className="h-48 bg-gray-50 cursor-pointer relative overflow-hidden"
                      onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
                    >
                      <img
                        src={product.images?.[0] || '/img/placeholder-product.jpg'}
                        alt={product.name}
                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.src = "/img/placeholder-product.jpg";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-bold text-sm">{product.name}</h3>
                        <span className="text-xs bg-[#e3001b] px-2 py-1 rounded">{product.brand}</span>
                      </div>
                    </div>
                    {/* Contenido del producto */}
                    <div className="p-5">
                      <div className="flex justify-between items-start">
                        <span className="inline-block px-3 py-1 text-xs bg-[#e3001b]/10 text-[#e3001b] rounded-full font-medium">
                          {product.brand}
                        </span>
                      </div>
                      <h2 
                        className="text-xl font-bold text-gray-800 mt-3 mb-2 cursor-pointer hover:text-[#e3001b] transition-colors line-clamp-2"
                        onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
                      >
                        {product.name}
                      </h2>
                      {/* Descripción oculta que se muestra al pasar el cursor */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-gray-600 text-sm mt-2 line-clamp-3 group-hover:block"
                      >
                        {product.shortDesc}
                      </motion.div>
                      <div className="flex justify-end mt-4">
                        <button 
                          className="text-[#e3001b] font-medium hover:underline flex items-center"
                          onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
                        >
                          Ver detalles
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default Category;