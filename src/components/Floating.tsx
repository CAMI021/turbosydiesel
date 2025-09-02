import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaFilePdf } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        delay: 0.3 
      }}
    >
      {/* Menú desplegable (solo en hover) */}
      <motion.div 
        className="absolute bottom-16 right-0 flex flex-col items-end gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.a
          href="https://wa.me/573124567890?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20componentes%20turbo%20diesel"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg shadow-md transition-all"
          whileHover={{ x: -5 }}
        >
          <FaWhatsapp className="group-hover:animate-pulse" />
          <span className="hidden md:inline">WhatsApp</span>
        </motion.a>

        <motion.a
          href="tel:+573124567890"
          className="group flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg shadow-md transition-all"
          whileHover={{ x: -5 }}
        >
          <FaPhone />
          <span className="hidden md:inline">Llamar</span>
        </motion.a>

        <motion.a
          href="/catalogo-dieselpro.pdf"
          className="group flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-lg shadow-md transition-all"
          whileHover={{ x: -5 }}
        >
          <FaFilePdf />
          <span className="hidden md:inline">Catálogo</span>
        </motion.a>
      </motion.div>

      {/* Botón principal (siempre visible) */}
      <motion.button
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.5 }
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-700 hover:bg-red-800 text-white p-3 rounded-full shadow-xl transition-colors flex items-center justify-center"
      >
        <span className="text-xl font-bold hidden md:inline mr-2">+</span>
        <FaWhatsapp size={24} />
      </motion.button>
    </motion.div>
  );
};

export default FloatingButton;