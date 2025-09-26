import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, MapPin, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { FaCertificate } from "react-icons/fa";

interface Testimonial {
  name: string;
  content: string;
  rating: number;
  avatar: string;
  role?: string;
}

interface CertificationDetails {
  title: string;
  description: string;
  highlights: string[];
  details: string;
}

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const images = [
    '/videohome.gif',
    '/image1.jpg',
    '/image3.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  // Mantenemos testimonials aunque no se use actualmente (por si se necesita después)
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

  const certificationDetails: Record<string, CertificationDetails> = {
    "HOLSET Turbos": {
      title: "Servicio Autorizado Holset en Colombia",
      description: "Con más de 40 años de experiencia en el país, ofrecemos soluciones confiables en ya que somos especialistas en ventas y servicio de turbocargadores con el respaldo directo de fábrica.",
      highlights: [
        "Distribuidores autorizados de Turbos Holset (Cummins Turbo Technologies)",
        "Turbocargadores y repuestos 100% originales",
        "Laboratorio con equipos de última generación para diagnóstico y calibración",
        "Reparaciones por kilometraje para mayor vida útil"
      ],
      details: "Nuestra trayectoria garantiza confianza, calidad y un servicio especializado reconocido en el sector automotriz, industrial y de transporte. Contamos con soporte técnico y garantía directa de fábrica, asegurando el máximo rendimiento y durabilidad de sus turbocargadores."
    },
    "Bosch Diesel Center": {
      title: "Servicio Autorizado Bosch Diesel Center",
      description: "Con más de dos décadas de trayectoria en el país, somos autorizados Bosch Diesel Center para sistemas electrónicos Diesel.",
      highlights: [
        "Sistemas Common Rail, Unidades EUI/UPS, Bombas VP37/VP44",
        "Repuestos genuinos Bosch con respaldo de la marca",
        "Bancos de pruebas exclusivos Bosch",
        "Asesoría técnica y capacitación especializada"
      ],
      details: "Nuestra experiencia, junto al respaldo directo de fábrica, nos permite ofrecer soluciones confiables y tecnología de última generación para el sector automotor liviano y pesado, industrial, agrícola y generación. Elegir repuestos Bosch es sinónimo de calidad, seguridad y confianza."
    },
    "Delphi Diesel Excellence": {
      title: "Delphi Diesel Excellence",
      description: "Servicio Autorizado Delphi Diesel Excellence con experiencia comprobada en reparación confiable y garantía de fábrica.",
      highlights: [
        "Más de 40 años en Colombia",
        "Repuestos originales y soporte técnico especializado",
        "Equipos de prueba oficiales para sistemas Common Rail",
        "Software directo de fábrica para codificación"
      ],
      details: "Somos su aliado de confianza en sistemas de inyección DELPHI DIESEL, asegurando la máxima durabilidad para su inversión. Contamos con la tecnología necesaria para garantizar el correcto funcionamiento de sus sistemas de inyección electrónica y mecánica."
    },
    "Zexel, Stanadyne, Doowan": {
      title: "Zexel, Stanadyne, Doowan",
      description: "Especialistas en sistemas de inyección para marcas premium con soporte técnico especializado.",
      highlights: [
        "Reparación y servicio para sistemas Zexel",
        "Componentes Stanadyne originales",
        "Tecnología Doowan de última generación",
        "Diagnóstico avanzado y calibración precisa"
      ],
      details: "Trabajamos con estas marcas reconocidas mundialmente. Nuestro laboratorio está equipado con tecnología específica para cada sistema, garantizando reparaciones de la más alta calidad. Contamos con soporte técnico especializado para estos sistemas de inyección."
    }
  };

  const certifications = [
    {
      id: "holset",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "HOLSET Turbos",
      description: "Servicio Autorizado",
      image: "/cert-holset.png"
    },
    {
      id: "bosch",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Bosch Diesel Center",
      description: "Servicio Autorizado",
      image: "/cert-bosch.jpg"
    },
    {
      id: "delphi",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Delphi Diesel Excellence",
      description: "Servicio Autorizado",
      image: "/cert-delphi.png"
    },
    {
      id: "zexel",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Zexel, Stanadyne, Doowan",
      description: "Especialistas en sistemas de inyección",
      image: "/cert-zexel.png"
    }
  ];

  // Función para navegar al catálogo (simulada para el ejemplo)
  const handleViewCatalog = () => {
    // En tu aplicación real, esto funcionará con react-router-dom
    window.location.href = '/products';
  };

  // Función helper para obtener los detalles de certificación de forma segura
  const getCertificationDetails = (certId: string | null): CertificationDetails | null => {
    if (!certId) return null;
    const cert = certifications.find(c => c.id === certId);
    if (!cert) return null;
    return certificationDetails[cert.title] || null;
  };

  const selectedCertDetails = getCertificationDetails(selectedCertification);
  const selectedCert = selectedCertification ? certifications.find(c => c.id === selectedCertification) : null;

  // Suprimir warnings para variables no utilizadas (temporal)
  console.log({ testimonials, handleViewCatalog }); // Se puede remover en producción

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
            <h3 className="text-2xl font-bold text-center text-black mb-8">Empresas del grupo:</h3>
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

      {/* Sección de Certificaciones Oficiales - Reemplaza a Sistemas de Inyección */}
      <section className="full-width py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className="text-3xl font-bold mb-4 text-[#e3001b]"
            >
              Certificaciones Oficiales
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }} 
              className="text-gray-600"
            >
              Autorizados por las principales marcas del mercado
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center cursor-pointer"
                onClick={() => setSelectedCertification(cert.id)}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#e3001b]/10 p-3 rounded-full">
                    {cert.icon}
                  </div>
                </div>
                
                <div className="mb-4 h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={`Certificación ${cert.title}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const imgElement = e.currentTarget as HTMLImageElement;
                      imgElement.style.display = 'none';
                      const nextSibling = imgElement.nextElementSibling;
                      if (nextSibling) {
                        (nextSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="hidden items-center justify-center text-gray-400 text-sm">
                    Imagen de certificación
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Detalles de Certificación */}
      {selectedCertification && selectedCertDetails && selectedCert && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertification(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={() => setSelectedCertification(null)}
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-[#e3001b]/10 p-3 rounded-lg mr-4">
                  <FaCertificate className="text-[#e3001b] text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#e3001b]">
                  {selectedCertDetails.title}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-4">
                    {selectedCertDetails.description}
                  </p>
                  
                  <p className="text-gray-600 italic mb-6">
                    {selectedCertDetails.details}
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">Principales beneficios:</h4>
                  <ul className="space-y-2">
                    {selectedCertDetails.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#e3001b] mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="h-40 mb-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                    <img 
                      src={selectedCert.image} 
                      alt={`Certificación ${selectedCert.title}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">
                    {selectedCert.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {selectedCert.description}
                  </p>
                  <Button 
                    className="bg-[#e3001b] text-white hover:bg-[#b00000] w-full"
                    onClick={() => {
                      window.open('https://wa.me/573185141579', '_blank');
                      setSelectedCertification(null);
                    }}
                  >
                    Consultar más información
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

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
                href="https://maps.app.goo.gl/QiaGzeCGtQh3RKKbA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#e3001b] hover:bg-gray-100 hover:text-[#b00000] text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[250px] font-semibold text-center"
              >
                <MapPin className="inline mr-2 h-5 w-5" /> Ver ubicación
              </a>
              <a 
                href="https://wa.me/573185141579" 
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