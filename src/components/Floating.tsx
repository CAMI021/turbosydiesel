import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <motion.a
      href="https://wa.me/573114782000?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20componentes%20turbo%20diesel"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ 
        scale: 1.15,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.2 
      }}
    >
      {/* Botón principal con efecto 3D */}
      <div className="relative">
        {/* Sombra suave */}
        <div className="absolute inset-0 bg-green-600 rounded-full opacity-30 blur-md"></div>
        
        {/* Botón principal */}
        <div className="relative bg-[#25D366] hover:bg-[#128C7E] transition-colors 
                        w-16 h-16 rounded-full flex items-center justify-center
                        shadow-[0_0_20px_rgba(37,211,102,0.4)] 
                        active:shadow-[0_0_5px_rgba(18,140,126,0.6)]
                        border-2 border-white">
          <FaWhatsapp 
            size={32} 
            className="text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)] 
                      animate-bounce-slow" 
          />
        </div>
      </div>
    </motion.a>
  );
};

// Animación personalizada para el icono
const bounceKeyframes = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' }
};

export default FloatingButton;