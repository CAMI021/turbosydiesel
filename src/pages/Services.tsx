// src/pages/Services.tsx
import { useState } from "react";
import { 
  FaWrench, 
  FaCog, 
  FaTools, 
  FaCheckCircle,
  FaCertificate,
  FaGasPump,
  FaTachometerAlt,
  FaSearch,
  FaFlask
} from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState("Reparación");

  const services = [
    {
      id: "reparacion",
      title: "Reparación",
      icon: <FaWrench className="text-4xl" />,
      description: "Reparación especializada de sistemas diesel y turbos con tecnología de última generación. Nuestros técnicos certificados diagnostican y resuelven problemas complejos con precisión.",
      features: [
        "Diagnóstico avanzado con equipos de última generación",
        "Reparación de inyectores, bombas y sistemas de alimentación",
        "Análisis de fallos con reporte detallado",
        "Garantía extendida de 12 meses en todas las reparaciones"
      ],
      image: "/reparacion.png"
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento",
      icon: <FaCog className="text-4xl" />,
      description: "Programas de mantenimiento preventivo y correctivo para maximizar la vida útil de tus sistemas diesel y turbos, evitando fallas costosas y mejorando el rendimiento.",
      features: [
        "Planes de mantenimiento personalizados",
        "Limpieza y calibración de sistemas",
        "Revisión periódica de componentes críticos",
        "Optimización de rendimiento y eficiencia"
      ],
      image: "/mantenimiento.png"
    },
    {
      id: "instalacion",
      title: "Instalación",
      icon: <FaTools className="text-4xl" />,
      description: "Instalación profesional de sistemas diesel y turbos en vehículos y maquinaria pesada. Garantizamos un trabajo preciso que cumple con todas las normas de seguridad y rendimiento.",
      features: [
        "Instalación de turbos y sistemas de alimentación",
        "Adaptación de sistemas a diferentes tipos de motor",
        "Configuración electrónica avanzada",
        "Soporte post-instalación completo"
      ],
      image: "/instalacion.png"
    }
  ];

  const certifications = [
    {
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Delphi Diesel Excellence",
      description: "Servicio Autorizado",
      image: "/cert-delphi.png"
    },
    {
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Bosch Diesel Center",
      description: "Servicio Autorizado",
      image: "/cert-bosch.jpg"
    },
    {
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "Zexel, Stanadyne, Doowan",
      description: "Servicio Autorizado",
      image: "/cert-zexel.png"
    },
    {
      icon: <FaCertificate className="text-[#e3001b] text-2xl" />,
      title: "HOLSET Turbos",
      description: "Servicio Autorizado",
      image: "/cert-holset.png"
    }
  ];

  const technicalServices = [
    {
      icon: <FaWrench className="text-[#e3001b]" />,
      title: "Sistemas de Inyección",
      description: "Diesel convencionales, Common Rail, EUI, PLD"
    },
    {
      icon: <FaTools className="text-[#e3001b]" />,
      title: "Bombas Mecánicas y Electrónicas",
      description: "Tic s, RE 30/36 y Covec VP44"
    },
    {
      icon: <FaTachometerAlt className="text-[#e3001b]" />,
      title: "Turbos",
      description: "Reparación de todas las marcas"
    },
    {
      icon: <FaSearch className="text-[#e3001b]" />,
      title: "Motores Diesel",
      description: "Diagnóstico, sincronización y reparación"
    },
    {
      icon: <FaGasPump className="text-[#e3001b]" />,
      title: "Inyectores",
      description: "Convencionales y electrónicos STH, EUI, HEUI, Common Rail"
    },
    {
      icon: <FaFlask className="text-[#e3001b]" />,
      title: "Análisis de Combustible",
      description: "Lavado, diálisis de tanques y medición de opacidad"
    }
  ];

  const currentService = services.find(s => s.title === activeService) || services[0];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/services.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Nuestros <span className="text-[#e3001b]">Servicios</span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Soluciones profesionales para sistemas diesel y turbos
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-20" />
        </div>
      </header>

      {/* Service Navigation */}
      <section className="py-8 bg-[#f8f8f8] border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.title)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  activeService === service.title
                    ? "bg-[#e3001b] text-white shadow-lg shadow-[#e3001b]/30"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {service.icon}
                <span className="ml-2">{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white border-2 border-[#e3001b] rounded-2xl overflow-hidden shadow-md">
                <div className="aspect-video bg-gray-100 flex items-center justify-center relative">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const imgElement = e.currentTarget as HTMLImageElement;
                      imgElement.style.display = 'none';
                      const nextSibling = imgElement.nextElementSibling;
                      if (nextSibling) {
                        (nextSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center bg-gray-100">
                    <span className="text-5xl text-[#e3001b]">{currentService.icon}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#e3001b] text-white px-6 py-3 rounded-xl font-bold shadow-lg hidden md:block">
                {currentService.title}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#e3001b]">{currentService.title}</h2>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {currentService.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#e3001b] mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#e3001b]">Certificaciones Oficiales</h2>
            <p className="text-gray-600">
              Autorizados por las principales marcas del mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm text-center"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#e3001b]">Servicios Técnicos Especializados</h2>
            <p className="text-gray-600">
              Tecnología avanzada para el diagnóstico y reparación de sistemas diesel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 group"
              >
                <div className="flex items-start mb-4">
                  <div className="bg-[#e3001b]/10 p-2 rounded-lg mr-4 group-hover:bg-[#e3001b] transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 ml-12">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;