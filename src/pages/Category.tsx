//Category.tsx

import {  useMemo } from "react";
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

  // Productos (sin filtrar)
  const filteredProducts = useMemo(() => {
    return category.products;
  }, [category.products]);

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
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20"> {/* AJUSTE PRINCIPAL AQUÍ */}
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
          {/* Contenido Principal */}
          <div className="w-full">
            {/* Encabezado con contador */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {filteredProducts.length} {filteredProducts.length === 1 ? ' tipo de producto' : 'tipo de producto productos'} disponibles
              </h2>
            </div>
            
            {/* Grid de productos */}
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Category;