import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from 'react';
import { FaCertificate } from "react-icons/fa";

interface EquipmentItem {
  image: string;
  caption: string;
  description: string;
}

interface CertificationDetails {
  title: string;
  description: string;
  highlights: string[];
  details: string;
  equipment?: EquipmentItem | EquipmentItem[];
}

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(9000);
  const [isImageFixed, setIsImageFixed] = useState(false);
  const [equipmentIndex, setEquipmentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const images = [
    '/asd.mp4',
    '/image2.jpg',
    '/image1.jpg',
    '/image3.png'
  ];

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Obtener el número de imágenes visibles según el dispositivo
  const getVisibleImageCount = () => {
    return isMobile ? 3 : images.length;
  };

  // Este efecto se encarga de inicializar el tiempo restante cuando cambia el índice
  useEffect(() => {
    const initialTime = currentIndex === 0 ? 9000 : 6000;
    setTimeRemaining(initialTime);
  }, [currentIndex]);

  // Este efecto maneja el temporizador para cambiar de imagen
  useEffect(() => {
    if (isImageFixed) return;
    
    const timer = setTimeout(() => {
      if (!isImageFixed) {
        const visibleCount = getVisibleImageCount();
        setCurrentIndex(prevIndex => (prevIndex + 1) % visibleCount);
      }
    }, timeRemaining);

    return () => clearTimeout(timer);
  }, [currentIndex, timeRemaining, isImageFixed, isMobile]);

  // Efecto para reproducir el video cuando está visible
  useEffect(() => {
    if (currentIndex === 0 && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Error playing video:", err));
    }
  }, [currentIndex]);

  // Efecto para auto-avanzar el carrusel de equipos - CORREGIDO
  useEffect(() => {
    if (!selectedCertification) return;
    
    const details = getCertificationDetails(selectedCertification);
    const equipmentArray = getEquipmentArray(details?.equipment);
    
    // Si no hay equipos o solo hay uno, no necesitamos el carrusel automático
    if (equipmentArray.length <= 1) return;
    
    const timer = setInterval(() => {
      setEquipmentIndex(prev => (prev + 1) % equipmentArray.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [selectedCertification]);

  // Resetear el índice de equipos cuando se abre un modal
  useEffect(() => {
    if (selectedCertification) {
      setEquipmentIndex(0);
    }
  }, [selectedCertification]);

  const handleImageClick = (index: number) => {
    if (index === currentIndex && !isImageFixed) {
      if (index === 1) {
        window.open('https://wa.me/573185141579      ', '_blank');
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
    "Bosch Diesel Center": {
      title: "Servicio Autorizado Bosch Diesel Center",
      description: "Con más de dos décadas de trayectoria en el país, somos autorizados Bosch Diesel Center para sistemas electrónicos Diesel.",
      highlights: [
        "Pruebas de sistemas diésel y reparación de componentes de primera calidad",
        "Mantenimiento y reparación expertos de todos los sistemas y marcas diésel",
        "Soluciones de reparación a medida para talleres, clientes comerciales y operadores de flotas",
        "Todo el trabajo realizado por especialistas en diésel altamente calificados y experimentados",
        "Repuestos Bosch con calidad de equipo original",
        "Diagnóstico y pruebas del sistema con la tecnología de pruebas de Bosch más moderna",
        "Garantía de piezas + mano de obra"
      ],
      details: "En un Bosch Diesel Center, puede estar seguro de soluciones confiables y tecnología de última generación para el sector automotor liviano y pesado, industrial, agrícola y generación. Nuestra experiencia, junto al respaldo directo de fábrica, nos permite ofrecer servicios de calidad, seguridad y confianza en cada reparación.",
      equipment: {
        image: "/equipos/boscheps.png",
        caption: "Banco de Pruebas BOSCH EPS815 KMA",
        description:
          "Diseñado para probar la nueva generación de sistemas de inyección electrónica, el banco de pruebas BOSCH EPS815 KMA ofrece excelentes informes y elimina muchas imperfecciones tradicionales, como errores humanos, todo lo cual conduce a una calibración precisa. Esto se puede traducir en un rendimiento óptimo del motor y un mayor ahorro para los usuarios de equipos."
      }
    },
    "Delphi Diesel Excellence": {
      title: "Delphi Diesel Excellence",
      description: "Servicio Autorizado Delphi Diesel Excellence con experiencia comprobada en reparación confiable y garantía de fábrica.",
      highlights: [
        "Reparación y diagnóstico de sistemas de inyección de combustible diésel para vehículos ligeros, medianos y pesados",
        "Bombas e inyectores Common Rail",
        "Inyectores unitarios electrónicos, bombas unitarias electrónicas",
        "Filtros diesel, boquillas e inyectores, y bombas rotativas y piezas",
        "Más de 40 años en Colombia",
        "Repuestos originales y soporte técnico especializado",
        "Equipos de prueba oficiales para sistemas Common Rail y EUI"
      ],
      details: "Delphi Diesel Systems fabrica sistemas de inyección de combustible diésel para una amplia gama de vehículos. Somos su aliado de confianza en sistemas de inyección DELPHI DIESEL, asegurando la máxima durabilidad para su inversión. Contamos con la tecnología necesaria para garantizar el correcto funcionamiento de sus sistemas de inyección electrónica y mecánica.",
      equipment: [
        {
          image: "/equipos/avm2.jpg",
          caption: "Banco de Pruebas AVM2-PC",
          description: "Nuestro banco de pruebas AVM2-PC permite codificar inyectores Common Rail y EUI. Es una plataforma avanzada y potente para el diagnóstico de bombas de combustible e inyectores. Cuando se utiliza con cualquiera de nuestras soluciones de aplicación, proporciona evaluaciones detalladas y eficientes del estado de los inyectores y bombas."
        },
        {
          image: "/equipos/sabre-cri-expert.png",
          caption: "Banco de Pruebas SABRE CRI Expert",
          description: "El SABRE CRI Expert es un equipo de última generación para pruebas y diagnóstico de sistemas Common Rail. Ofrece capacidades avanzadas de medición y calibración, garantizando la precisión y el rendimiento óptimo de los sistemas de inyección diesel modernos."
        }
      ]
    },
    "Hartridge": {
      title: "Distribuidor y Servicio Autorizado Hartridge",
      description: "Especialistas en equipos de prueba y diagnóstico para sistemas de inyección diesel de alta precisión.",
      highlights: [
        "Distribuidores autorizados de equipos Hartridge en Colombia",
        "Diagnóstico avanzado y calibración precisa de sistemas diesel",
        "Soporte técnico especializado y garantía directa de fábrica",
        "Tecnología de vanguardia para pruebas de inyección diesel"
      ],
      details: "Hartridge es reconocida mundialmente por sus equipos de prueba y diagnóstico de alta precisión para sistemas de inyección diesel. Como distribuidores autorizados, ofrecemos equipos Hartridge junto con servicios técnicos especializados. Contamos con personal altamente calificado y tecnología de punta para garantizar resultados precisos y confiables en todas las pruebas y calibraciones de sistemas diesel."
    },
    "HOLSET Turbos": {
      title: "Distribuidor y Servicio Autorizado Holset en Colombia",
      description: "Con más de 40 años de experiencia en el país, ofrecemos soluciones confiables en ya que somos especialistas en ventas y servicio de turbocargadores con el respaldo directo de fábrica.",
      highlights: [
        "Distribuidores autorizados de Turbos Holset (Cummins Turbo Technologies)",
        "Turbocargadores y repuestos 100% originales",
        "Laboratorio con equipos de última generación para diagnóstico y calibración",
        "Reparaciones por kilometraje para mayor vida útil"
      ],
      details: "Nuestra trayectoria garantiza confianza, calidad y un servicio especializado reconocido en el sector automotriz, industrial y de transporte. Contamos con soporte técnico y garantía directa de fábrica, asegurando el máximo rendimiento y durabilidad de sus turbocargadores."
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
      details: "Trabajamos con estas marcas reconocidas mundialmente. Nuestra laboratorio está equipado con tecnología específica para cada sistema, garantizando reparaciones de la más alta calidad. Contamos con soporte técnico especializado para estos sistemas de inyección."
    }
  };

  const certifications = [
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
      id: "hartridge",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Hartridge",
      description: "Servicio Autorizado",
      image: "/marcas/hartridge.png"
    },
    {
      id: "holset",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "HOLSET Turbos",
      description: "Distribuidor y Servicio Autorizado",
      image: "/cert-holset.png"
    },
    {
      id: "zexel",
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Zexel, Stanadyne, Doowan",
      description: "Especialistas en sistemas de inyección",
      image: "/cert-zexel.png"
    }
  ];

  // Actualizado para mostrar 23 imágenes en el carrusel
  const allBrands = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    image: `/product-${(i % 23) + 1}.jpg`
  }));

  const getCertificationDetails = (certId: string | null): CertificationDetails | null => {
    if (!certId) return null;
    const cert = certifications.find(c => c.id === certId);
    if (!cert) return null;
    return certificationDetails[cert.title] || null;
  };

  const selectedCertDetails = getCertificationDetails(selectedCertification);
  const selectedCert = selectedCertification ? certifications.find(c => c.id === selectedCertification) : null;

  const getEquipmentArray = (equipment: EquipmentItem | EquipmentItem[] | undefined): EquipmentItem[] => {
    if (!equipment) return [];
    return Array.isArray(equipment) ? equipment : [equipment];
  };

  const handlePrevEquipment = () => {
    const equipmentArray = getEquipmentArray(selectedCertDetails?.equipment);
    setEquipmentIndex(prev => (prev - 1 + equipmentArray.length) % equipmentArray.length);
  };

  const handleNextEquipment = () => {
    const equipmentArray = getEquipmentArray(selectedCertDetails?.equipment);
    setEquipmentIndex(prev => (prev + 1) % equipmentArray.length);
  };

  return (
    <div className="no-horizontal-scroll bg-[#f4f4f4]">
      {/* Hero Section - CORREGIDO: Añadido padding-top más grande para evitar que la navbar tape el contenido */}
      <section className="full-width relative bg-black text-white min-h-screen flex flex-col overflow-hidden pt-24 md:pt-0">
        <div className="container-wide flex-1 flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            {images.map((src, index) => {
              // En móviles, no mostrar la cuarta imagen (índice 3)
              if (isMobile && index === 3) return null;
              
              return (
                <motion.div
                  key={index}
                  className={`w-full h-full absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  animate={{ opacity: index === currentIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => handleImageClick(index)}
                  style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
                >
                  {index === 0 ? (
                    <div className="relative w-full h-full">
                      {/* Capa de fondo difuminada */}
                      <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-[-50%] w-[200%] h-[200%]">
                          <video
                            src={src}
                            className="w-full h-full object-cover blur-xl scale-[1.1]"
                            autoPlay
                            muted
                            loop
                            playsInline
                          />
                        </div>
                      </div>
                      {/* Video principal */}
                      <video
                        ref={videoRef}
                        src={src}
                        className="relative w-full h-full object-contain"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  ) : isMobile && index === 1 ? (
                    // Contenido de texto para la segunda imagen en móviles
                    <div className="w-full h-full bg-black flex flex-col justify-center items-center p-6 text-white">
                      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Capacitación Técnicos Diesel</h2>
                      <p className="text-xl md:text-2xl text-center max-w-3xl">
                        Aprende de los mejores. Instructores expertos y contenido actualizado para el mercado actual.
                      </p>
                    </div>
                  ) : isMobile && index === 2 ? (
                    // Contenido de texto para la tercera imagen en móviles
                    <div className="w-full h-full bg-black flex flex-col justify-center items-center p-6 text-white">
                      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Eficiencia en Cada Componente:</h2>
                      <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl">
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          Bombas
                        </div>
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          Inyectores
                        </div>
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          Turbos
                        </div>
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          Filtros
                        </div>
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          Equipos
                        </div>
                        <div className="bg-gray-800 p-3 md:p-4 rounded-lg flex items-center justify-center text-xl md:text-2xl font-medium">
                          AFS
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img src={src} alt={`Background ${index}`} className="w-full h-full object-contain" loading="eager" />
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: getVisibleImageCount() }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const visibleCount = getVisibleImageCount();
                  const newIndex = Math.min(index, visibleCount - 1);
                  setCurrentIndex(newIndex);
                  const time = newIndex === 0 ? 9000 : 6000;
                  setTimeRemaining(time + 5000);
                  setIsImageFixed(true);
                }}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              />
            ))}
          </div>
          {currentIndex === 0 && (
            <motion.div initial="hidden" animate="visible" className="relative z-10 text-center px-4 max-w-5xl mx-auto">
              {/* CORREGIDO: Reducido el tamaño de la fuente en móviles */}
              <motion.h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight hero-text-shadow font-space-grotesk" variants={{ visible: { transition: { staggerChildren: 0.03 } } }}>
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
                className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-10"
                style={{ textShadow: '0 0 35px rgba(0,0,0,0.9)' }}
              >
                Tecnología Diesel en sus Manos
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.8 }}
                className="mt-12 flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
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
                    className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
                  >
                    <span className="mr-2 text-[#e3001b]">{item.icon}</span>
                    <span className="text-white text-sm md:text-base">{item.text}</span>
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
              className="text-2xl md:text-3xl font-bold mb-4 text-[#e3001b]"
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
                className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center cursor-pointer"
                onClick={() => setSelectedCertification(cert.id)}
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="bg-[#e3001b]/10 p-2 md:p-3 rounded-full">
                    {cert.icon}
                  </div>
                </div>

                <div className="mb-3 md:mb-4 h-24 md:h-32 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
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

                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-1 md:mb-2">{cert.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm">{cert.description}</p>
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
            className="text-2xl md:text-3xl font-bold text-center text-black mb-4"
          >
            Ventas y Servicio para estas marcas y muchas más...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base"
          >
            Componentes premium y reparaciones de alta precisión para sistemas diesel
          </motion.p>

          {!showAllBrands ? (
            <>
              <motion.div
                className="flex gap-1 pb-6"
                animate={{ 
                  x: [0, -2200, 0], 
                  transition: { x: { repeat: Infinity, duration: 60, ease: "linear" } } 
                }}
              >
                {Array.from({ length: 23 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="flex-shrink-0 w-40 h-20 md:w-48 md:h-24 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <img
                      src={`/product-${(i % 12) + 1}.jpg`}
                      alt={`Producto diesel ${i + 1}`}
                      className="w-full h-full object-contain" // Cambié object-cover por object-contain aquí también
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex justify-center mt-2">
                <button
                  onClick={() => setShowAllBrands(true)}
                  className="bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-lg hover:bg-[#e3001b] hover:text-white transition-colors duration-300 font-medium"
                >
                  Ver todas las marcas
                </button>
              </div>
            </>
          ) : (
            <div className="mb-8">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-xl md:text-2xl font-bold mb-2 text-black">Nuestras marcas</h2>
                <p className="text-gray-600 text-sm md:text-base">Trabajamos con las mejores marcas del mercado</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {allBrands.map((brand) => (
                  <motion.div
                    key={brand.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center"
                  >
                    <div className="mb-3 md:mb-4 h-24 md:h-32 bg-white rounded-lg border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
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

              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowAllBrands(false)}
                  className="bg-gray-100 text-gray-700 text-xs md:text-sm px-3 py-1 rounded-lg hover:bg-[#e3001b] hover:text-white transition-colors duration-300 font-medium"
                >
                  Ver menos marcas
                </button>
              </div>
            </div>
          )}

          <div className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-2xl font-bold text-center text-black mb-6 md:mb-8">Empresas del grupo:</h3>
            <div className="flex justify-center gap-2">
              <div className="w-64 h-16 md:w-80 md:h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
                <img src={`/brand-1.jpg`} alt="Asociado 1" className="w-full h-full object-contain" />
              </div>
              <div className="w-64 h-16 md:w-80 md:h-20 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 border border-gray-100">
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

            <div className="p-4 md:p-6">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-[#e3001b]/10 p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <FaCertificate className="text-[#e3001b] text-xl md:text-2xl" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#e3001b]">{selectedCertDetails.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{selectedCertDetails.description}</p>
                  <p className="text-gray-600 italic mb-4 md:mb-6 text-xs md:text-sm">{selectedCertDetails.details}</p>

                  <h4 className="font-bold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">Principales beneficios:</h4>
                  <ul className="space-y-1 md:space-y-2">
                    {selectedCertDetails.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-xs md:text-sm">
                        <span className="text-[#e3001b] mr-2">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedCertDetails.equipment && (
                    <div className="mt-6 md:mt-8 p-3 md:p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <button 
                          onClick={handlePrevEquipment}
                          className="text-[#e3001b] hover:text-[#b00000] transition-colors"
                        >
                          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                        <h5 className="font-bold text-gray-900 text-center flex-1 text-sm md:text-base">
                          {getEquipmentArray(selectedCertDetails.equipment)[equipmentIndex].caption}
                        </h5>
                        <button 
                          onClick={handleNextEquipment}
                          className="text-[#e3001b] hover:text-[#b00000] transition-colors"
                        >
                          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                      </div>
                      <div className="flex justify-center mb-2 md:mb-3">
                        <img
                          src={getEquipmentArray(selectedCertDetails.equipment)[equipmentIndex].image}
                          alt={getEquipmentArray(selectedCertDetails.equipment)[equipmentIndex].caption}
                          className="max-w-full max-h-32 md:max-h-48 object-contain rounded border border-gray-300"
                        />
                      </div>
                      <p className="text-gray-700 text-xs md:text-sm text-center">
                        {getEquipmentArray(selectedCertDetails.equipment)[equipmentIndex].description}
                      </p>
                      <div className="flex justify-center mt-1 md:mt-2 space-x-1">
                        {getEquipmentArray(selectedCertDetails.equipment).map((_, index) => (
                          <div
                            key={index}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${
                              index === equipmentIndex ? 'bg-[#e3001b]' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 rounded-xl p-3 md:p-5 border border-gray-200">
                  <div className="h-28 md:h-40 mb-3 md:mb-4 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                    <img src={selectedCert.image} alt={`Certificación ${selectedCert.title}`} className="w-full h-full object-contain" />
                  </div>
                  <h4 className="font-bold text-base md:text-lg text-gray-900 mb-1 md:mb-2">{selectedCert.title}</h4>
                  <p className="text-gray-600 mb-3 md:mb-4 text-xs md:text-sm">{selectedCert.description}</p>
                  <Button
                    className="bg-[#e3001b] text-white hover:bg-[#b00000] w-full text-sm md:text-base py-2 md:py-3"
                    onClick={() => {
                      window.open('https://wa.me/573185141579      ', '_blank');
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
      <section className="full-width py-12 md:py-20 bg-gradient-to-r from-[#e3001b] to-[#b00000] text-white text-center relative overflow-hidden">
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
              className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            >
              ¿Necesitas asesoría técnica o un servicio urgente?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto"
            >
              Nuestros técnicos certificados están disponibles para resolver tus problemas con sistemas diesel
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
            >
              <a
                href="https://maps.app.goo.gl/QiaGzeCGtQh3RKKbA      "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#e3001b] hover:bg-gray-100 hover:text-[#b00000] text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px] md:min-w-[250px] font-semibold text-center"
              >
                <MapPin className="inline mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" /> Ver ubicación
              </a>
              
              <a
                href="https://wa.me/573185141579      "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-[#e3001b] hover:bg-gray-100 hover:text-[#b00000] text-base md:text-lg px-6 py-4 md:px-8 md:py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 min-w-[200px] md:min-w-[250px] font-semibold text-center"
              >
                <MessageCircle className="inline mr-1 md:mr-2 h-4 md:h-5 w-4 md:w-5" /> Escribir al WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4 max-w-2xl mx-auto"
            >
              {["Respuesta rápida en horarios de atención", "Diagnóstico", "Presupuestos"].map((item, index) => (
                <div key={index} className="flex items-center text-sm md:text-base">
                  <CheckCircle className="h-4 md:h-5 w-4 md:w-5 text-green-400 mr-1 md:mr-2" />
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