import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, CheckCircle, MapPin } from "lucide-react";
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  avatar: string;
  role?: string;
}

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/videohome.gif',
    '/image1.jpg',
    '/image2.jpg',
    '/image3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  const testimonials: Testimonial[] = [
    {
      name: "Ivan Aldana Martinez",
      content: "Gran servicio y excelente mano de obra.",
      rating: 4,
      avatar: "/avatar1.jpg",
      role: "Cliente regular"
    },
    {
      name: "Hector Jamaica",
      content: "Buena atencion para reparacion de bombas de inyeccion e inyectores.todas las marcas.Ademas venta de equipos para pruebas de inyectores y bombas nuevas tecnologías.",
      rating: 5,
      avatar: "/avatar2.jpg",
      role: "Taller mecánico"
    },
    {
      name: "Oscar Julian Zambrano Martin",
      content: "Una excelente atención",
      rating: 5,
      avatar: "/avatar3.jpg",
      role: "Transportista"
    }
  ];

  // Función para navegar al catálogo (simulada para el ejemplo)
  const handleViewCatalog = () => {
    // En tu aplicación real, esto funcionará con react-router-dom
    window.location.href = '/products';
  };

  return (
    <div className="no-horizontal-scroll bg-[#f4f4f4]">
      <section className="full-width relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 z-0">
            {images.map((src, index) => (
              <motion.div
                key={index}
                className={`w-full h-full absolute inset-0 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={src} 
                  alt={`Background ${index}`} 
                  className={`w-full h-full ${index === 0 ? 'object-cover' : 'object-contain'}`} 
                  loading="eager" 
                />
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
          {currentIndex === 0 && (
            <motion.div 
              initial="hidden" 
              animate="visible" 
              className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight hero-text-shadow font-space-grotesk" 
                variants={{ 
                  visible: { transition: { staggerChildren: 0.03 } } 
                }}
              >
                {Array.from("VENTAS Y SERVICIO").map((char, index) => (
                  <motion.span 
                    key={index}
                    className="font-orbitron"
                    variants={{ 
                      hidden: { opacity: 0, y: 30 }, 
                      visible: { opacity: 1, y: 0 } 
                    }}
                    style={{ 
                      display: 'inline-block', 
                      color: 'white',
                      textShadow: '0 0 25px rgba(0,0,0,0.9)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 1.2, duration: 0.8 }} 
                className="text-xl md:text-2xl max-w-3xl mx-auto text-white mb-10"
                style={{ textShadow: '0 0 35px rgba(0,0,0,0.9)' }}
              >
                tecnología Diesel en sus manos
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 2, duration: 0.8 }} 
                className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
              >
                {[
                  { icon: "🔧", text: "Sincronización de vehículos" },
                  { icon: "🛠️", text: "Servicio de scáner" },
                  { icon: "🚗", text: "Medición de gases" },
                  { icon: "🧼", text: "Limpieza y diálisis de tanques" }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 2.2 + index * 0.1 }} 
                    className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                  >
                    <span className="mr-2 text-[#e3001b]">{item.icon}</span>
                    <span className="text-white">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <section className="full-width py-16 bg-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-[#e3001b]/20 rounded-full" 
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.03, 0.06, 0.03] }} 
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
            className="absolute bottom-1/3 right-1/3 w-96 h-96 border-2 border-[#e3001b]/15 rounded-full" 
          />
        </div>
        <div className="container-wide relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
          >
            Ventas y Servicio para estas marcas y muchas más...
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Componentes premium y reparaciones de alta precisión para sistemas diesel
          </motion.p>
          
          {/* PRIMER CARRUSEL - MODIFICADO CON MENOS ESPACIO Y ZOOM */}
          <div className="relative mb-8">
            <motion.div 
              className="flex gap-1 pb-6" 
              animate={{ x: [0, -1200, 0], transition: { x: { repeat: Infinity, duration: 45, ease: "linear" } } }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="flex-shrink-0 w-48 h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100" 
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <img 
                    src={`/product-${(i % 9) + 1}.jpg`} 
                    alt={`Producto diesel ${i + 1}`} 
                    className="w-full h-full object-cover scale-100" 
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* SEGUNDO CARRUSEL - MODIFICADO (ahora estático con título) */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-black mb-8">Estamos asociados con:</h3>
            <div className="flex justify-center gap-2">
              {/* Primera imagen */}
              <div className="w-80 h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
                <img 
                  src={`/brand-1.jpg`} 
                  alt="Asociado 1" 
                  className="w-full h-full object-contain" 
                />
              </div>
              
              {/* Segunda imagen */}
              <div className="w-80 h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
                <img 
                  src={`/brand-2.jpg`} 
                  alt="Asociado 2" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width py-16 bg-gray-50">
        <div className="container-wide">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            className="text-3xl font-bold text-center text-black mb-2"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ delay: 0.2 }} 
            className="text-center text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Confía en nosotros como lo han hecho cientos de clientes satisfechos
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.25,
                  delayChildren: 0.2
                }
              }
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { 
                    opacity: 0, 
                    y: 30,
                    scale: 0.95,
                    filter: "blur(5px)"
                  },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }
                  }
                }}
                className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#e3001b]/5 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 flex items-center justify-center text-gray-400 mr-3">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover rounded-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < testimonial.rating ? 'fill-current' : 'stroke-current'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic text-sm line-clamp-3">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-3 flex justify-end">
                    <div className="bg-[#e3001b]/10 text-[#e3001b] text-xs font-semibold px-2 py-0.5 rounded-full">
                      Cliente satisfecho
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="full-width bg-gradient-to-r from-gray-900 to-black py-20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10" 
          />
        </div>
        <div className="container-wide relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-white/10">
                <img src="/injector.png" alt="Inyectores electrónicos diesel" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="text-white"
            >
              <h2 className="text-4xl font-bold mb-6">Sistemas de Inyección</h2>
              <ul className="space-y-4 mb-8">
                {["Common Rail", "Unit Pump System (UPS)", "Bomba en línea (line pump)", "Mira nuestro catálogo entero para más"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-3 h-3 bg-[#e3001b] rounded-full mr-3"></span> {item}
                  </li>
                ))}
              </ul>
              <Button 
                onClick={handleViewCatalog}
                className="bg-[#e3001b] text-white hover:bg-[#b00000] px-6 py-3 rounded-full font-bold text-lg min-w-[200px] cursor-pointer"
              >
                Ver catálogo completo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="full-width py-20 bg-gradient-to-r from-[#e3001b] to-[#b00000] text-white text-center relative overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 z-0">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10" 
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }} 
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Necesitas asesoría técnica o un servicio urgente?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.4 }} 
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Nuestros técnicos certificados están disponibles para resolver tus problemas con sistemas diesel
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.6 }} 
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="https://maps.app.goo.gl/QiaGzeCGtQh3RKKbA      " 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#e3001b] hover:bg-gray-100 hover:text-[#b00000] text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[250px] font-semibold text-center"
              >
                <MapPin className="inline mr-2 h-5 w-5" /> Ver ubicación
              </a>
              <a 
                href="https://wa.me/573185141579      " 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#e3001b] hover:bg-gray-100 hover:text-[#b00000] text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[250px] font-semibold text-center"
              >
                <MessageCircle className="inline mr-2 h-5 w-5" /> Escribir al WhatsApp
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.7 }} 
              className="mt-8 flex justify-center"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8555787914743!2d-74.10359652454618!3d4.619842342352263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f995d7ec17ded%3A0x91d29e1da34260fc!2sDiesel%20y%20Turbos%20SAS!5e0!3m2!1ses-419!2sco!4v1758565470155!5m2!1ses-419!2sco" 
                width="1000" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.8 }} 
              className="mt-8 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
            >
              {[
                "Respuesta rápida en horarios de atención",
                "Diagnóstico",
                "Presupuestos"
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" /> 
                  <span>{item}</span> 
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;