import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, MapPin, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { FaCertificate } from "react-icons/fa";

interface CertificationDetails {
  title: string;
  description: string;
  highlights: string[];
  details: string;
  equipment?: {
    image: string;
    caption: string;
    description: string;
  };
}

// Definimos interfaces para tipar correctamente las variables
interface Certification {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface Brand {
  id: string;
  image: string;
}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(9000);
  const [isImageFixed, setIsImageFixed] = useState(false);
  const mediaItems = [
    '/videohome1.mp4',
    '/image2.jpg',
    '/image1.jpg',
    '/image3.png'
  ];

  useEffect(() => {
    const initialTime = currentIndex === 0 ? 9000 : 6000;
    setTimeRemaining(initialTime);
  }, [currentIndex]);

  useEffect(() => {
    if (isImageFixed) return;
    
    const timer = setTimeout(() => {
      if (!isImageFixed) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % mediaItems.length);
      }
    }, timeRemaining);

    return () => clearTimeout(timer);
  }, [currentIndex, timeRemaining, isImageFixed]);

  const handleImageClick = (index: number) => {
    if (index === currentIndex && !isImageFixed) {
      if (index === 1) {
        window.open('https://wa.me/573185141579', '_blank');
      } else {
        setTimeRemaining(prev => prev + 5000);
        setIsImageFixed(true);
        
        const timer = setTimeout(() => {
          setIsImageFixed(false);
        }, 5000);
        
        return () => clearTimeout(timer);
      }
    }
  };

  const certificationDetails: Record<string, CertificationDetails> = {
    "Bosch": {
      title: "Certificación Bosch",
      description: "Servicio autorizado para sistemas de inyección diesel Bosch",
      highlights: [
        "Técnicos certificados por Bosch",
        "Equipo especializado para diagnóstico",
        "Repuestos originales Bosch",
        "Garantía extendida en reparaciones"
      ],
      details: "Nuestro taller cuenta con la certificación oficial de Bosch para la reparación y mantenimiento de sistemas de inyección diesel, garantizando la máxima calidad en cada servicio.",
      equipment: {
        image: "/bosch-test-bench.jpg",
        caption: "Banco de pruebas Bosch",
        description: "Equipo especializado para diagnóstico y calibración de componentes Bosch"
      }
    },
    "Delphi": {
      title: "Certificación Delphi",
      description: "Servicio autorizado para sistemas de inyección diesel Delphi",
      highlights: [
        "Técnicos certificados por Delphi",
        "Herramientas especializadas",
        "Repuestos originales Delphi",
        "Diagnóstico preciso"
      ],
      details: "Contamos con la certificación oficial de Delphi, lo que nos permite ofrecer servicios de reparación y mantenimiento con estándares de calidad reconocidos internacionalmente.",
      equipment: {
        image: "/delphi-test-bench.jpg",
        caption: "Banco de pruebas Delphi",
        description: "Equipo especializado para diagnóstico y calibración de componentes Delphi"
      }
    },
    "Denso": {
      title: "Certificación Denso",
      description: "Servicio autorizado para sistemas de inyección diesel Denso",
      highlights: [
        "Técnicos certificados por Denso",
        "Tecnología de punta",
        "Repuestos originales Denso",
        "Servicio integral"
      ],
      details: "Nuestro centro de servicio cuenta con la certificación oficial de Denso, garantizando que todos nuestros procesos cumplan con los estándares de calidad exigidos por la marca.",
      equipment: {
        image: "/denso-test-bench.jpg",
        caption: "Banco de pruebas Denso",
        description: "Equipo especializado para diagnóstico y calibración de componentes Denso"
      }
    }
  };

  // Definimos los tipos explícitamente para evitar errores de TypeScript
  const certifications: Certification[] = [
    {
      id: "bosch",
      title: "Bosch",
      description: "Servicio autorizado para sistemas de inyección diesel Bosch",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      image: "/cert-bosch.jpg"
    },
    {
      id: "delphi",
      title: "Delphi",
      description: "Servicio autorizado para sistemas de inyección diesel Delphi",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      image: "/cert-delphi.jpg"
    },
    {
      id: "denso",
      title: "Denso",
      description: "Servicio autorizado para sistemas de inyección diesel Denso",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      image: "/cert-denso.jpg"
    }
  ];

  // Definimos los tipos explícitamente para evitar errores de TypeScript
  const allBrands: Brand[] = [
    { id: "bosch", image: "/brand-bosch.jpg" },
    { id: "delphi", image: "/brand-delphi.jpg" },
    { id: "denso", image: "/brand-denso.jpg" },
    { id: "continental", image: "/brand-continental.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" },
    { id: "mitsubishi", image: "/brand-mitsubishi.jpg" }
  ];

  const getCertificationDetails = (certId: string | null): CertificationDetails | null => {
    if (!certId) return null;
    
    const certMap: Record<string, string> = {
      "bosch": "Bosch",
      "delphi": "Delphi",
      "denso": "Denso"
    };
    
    const certName = certMap[certId];
    if (!certName) return null;
    
    return certificationDetails[certName] || null;
  };

  const selectedCertDetails = getCertificationDetails(selectedCertification);
  const selectedCert = selectedCertification 
    ? certifications.find(c => c.id === selectedCertification) 
    : null;

  return (
    <div className="no-horizontal-scroll bg-[#f4f4f4]">
      {/* Hero Section */}
      <section className="full-width relative bg-black text-white h-screen flex items-center justify-center overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 z-0">
            {mediaItems.map((src, index) => (
              <motion.div
                key={index}
                className={`w-full h-full absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => handleImageClick(index)}
                style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
              >
                {index === 0 ? (
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`w-full h-full object-cover`}
                  />
                ) : (
                  <img src={src} alt={`Background ${index}`} className={`w-full h-full ${index === 0 ? 'object-cover' : 'object-contain'}`} loading="eager" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {mediaItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  const time = index === 0 ? 9000 : 6000;
                  setTimeRemaining(time + 5000);
                  setIsImageFixed(true);
                }}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
          {currentIndex === 0 && (
            <motion.div initial="hidden" animate="visible" className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight hero-text-shadow font-space-grotesk" variants={{ visible: { transition: { staggerChildren: 0.03 } } }}>
                {Array.from("VENTAS Y SERVICIO").map((char, index) => (
                  <motion.span
                    key={index}
                    className="font-orbitron"
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    style={{ display: 'inline-block', color: 'white', textShadow: '0 0 25px rgba(0,0,0,0.9)' }}
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
                Tecnología Diesel en sus Manos
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
              >
                {[
                  { icon: "🔧", text: "Venta de Repuestos" },
                  { icon: "🛠️", text: "Mantenimiento" },
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

      {/* SECCIÓN 1: CERTIFICACIONES OFICIALES */}
      <section className="full-width py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-[#e3001b]"
            >
              Servicios Autorizados de las Siguentes Marcas
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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

      {/* SECCIÓN 2: VENTAS Y SERVICIO */}
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

          {!showAllBrands ? (
            <>
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
                      src={`/product-${(i % 12) + 1}.jpg`}
                      alt={`Producto diesel ${i + 1}`}
                      className="w-full h-full object-cover scale-100"
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex justify-center mt-2">
                <button
                  onClick={() => setShowAllBrands(true)}
                  className="bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-lg hover:bg-[#e3001b] hover:text-white transition-colors duration-300 font-medium"
                >
                  Ver todas las marcas
                </button>
              </div>
            </>
          ) : (
            <div className="mb-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-2xl font-bold mb-2 text-black">Nuestras marcas</h2>
                <p className="text-gray-600">Trabajamos con las mejores marcas del mercado</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {allBrands.map((brand) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center"
                  >
                    <div className="mb-4 h-32 bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={brand.image}
                        alt={`Marca ${brand.id}`}
                        className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
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
                        Logo de marca
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllBrands(false)}
                  className="bg-gray-100 text-gray-700 text-sm px-4 py-1 rounded-lg hover:bg-[#e3001b] hover:text-white transition-colors duration-300 font-medium"
                >
                  Ver menos marcas
                </button>
              </div>
            </div>
          )}

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center text-black mb-8">Empresas del grupo:</h3>
            <div className="flex justify-center gap-2">
              <div className="w-80 h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
                <img src={`/brand-1.jpg`} alt="Asociado 1" className="w-full h-full object-contain" />
              </div>
              <div className="w-80 h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
                <img src={`/brand-2.jpg`} alt="Asociado 2" className="w-full h-full object-contain" />
              </div>
            </div>
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
            onClick={(e) => e.stopPropagation()}
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
                <h3 className="text-2xl font-bold text-[#e3001b]">{selectedCertDetails.title}</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-4">{selectedCertDetails.description}</p>
                  <p className="text-gray-600 italic mb-6">{selectedCertDetails.details}</p>

                  <h4 className="font-bold text-gray-900 mb-3">Principales beneficios:</h4>
                  <ul className="space-y-2">
                    {selectedCertDetails.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#e3001b] mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedCertDetails.equipment && (
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <h5 className="font-bold text-gray-900 mb-2 text-center">{selectedCertDetails.equipment.caption}</h5>
                      <div className="flex justify-center mb-3">
                        <img
                          src={selectedCertDetails.equipment.image}
                          alt={selectedCertDetails.equipment.caption}
                          className="max-w-md max-h-48 object-contain rounded border border-gray-300"
                        />
                      </div>
                      <p className="text-gray-700 text-sm text-center">{selectedCertDetails.equipment.description}</p>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="h-40 mb-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                    <img src={selectedCert.image} alt={`Certificación ${selectedCert.title}`} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{selectedCert.title}</h4>
                  <p className="text-gray-600 mb-4">{selectedCert.description}</p>
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

      {/* CTA Final */}
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
              {["Respuesta rápida en horarios de atención", "Diagnóstico", "Presupuestos"].map((item, index) => (
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

export default Home;