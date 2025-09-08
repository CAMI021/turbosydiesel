// src/pages/Category.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { motion } from "framer-motion";

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

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <a 
            href="/products" 
            onClick={(e) => {
              e.preventDefault();
              navigate('/products');
            }}
            className="hover:text-[#e3001b]"
          >
            Catálogo
          </a>
          <span>/</span>
          <span className="text-gray-900">{category.title}</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {category.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {category.description}
          </p>
        </div>

        {/* Grid de productos */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {category.products.map((product) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 }
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div 
                className="h-56 bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    e.currentTarget.src = "/img/placeholder-product.jpg";
                  }}
                />
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs bg-[#e3001b]/10 text-[#e3001b] rounded-full mb-3">
                  {product.brand}
                </span>
                
                <h2 
                  className="text-xl font-bold text-gray-800 mb-2 cursor-pointer hover:text-[#e3001b] transition-colors"
                  onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
                >
                  {product.name}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.shortDesc}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-[#e3001b] font-bold text-lg">
                    {product.price}
                  </span>
                  <button 
                    className="bg-[#e3001b] text-white px-4 py-2 rounded-lg hover:bg-[#c8001a] transition-colors"
                    onClick={() => navigate(`/products/${categoryKey}/${product.id}`)}
                  >
                    Ver detalles
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Category;