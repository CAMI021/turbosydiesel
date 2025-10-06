// src/pages/Services.tsx
import { useState } from "react";
import { 
  FaWrench, 
  FaCog, 
  FaTools, 
  FaCheckCircle,
  FaGasPump,
  FaTachometerAlt,
  FaSearch,
  FaFlask,
  FaLaptop,
  FaFilter,
  FaTint,
  FaCogs
} from "react-icons/fa";

const Services = () => {
  const [activeService, setActiveService] = useState("Diagnóstico y Reparación");

  const services = [
    {
      id: "reparacion",
      title: "Diagnóstico y Reparación",
      icon: <FaWrench className="text-4xl" />,
      description: "Diagnóstico especializado y reparación de Motores Diesel, Sistemas de Inyección y Turboalimentadores con tecnología de última generación. Nuestros técnicos certificados realizan análisis detallados para identificar y resolver problemas complejos con precisión, garantizando un rendimiento óptimo de tu motor.",
      features: [
        "Diagnóstico avanzado con equipos de última generación",
        "Análisis especializado de motores diesel para identificar fallas",
        "Solución para alto consumo de combustible",
        "Corrección de problemas de poca fuerza",
        "Medición y corrección de opacidad",
        "Preparación para revisión tecnomecánica",
        "Reparación de inyectores, bombas, turbos y sistemas de alimentación",
        "Análisis de fallos con reporte detallado",
      ],
      image: "/reparacion.png"
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento",
      icon: <FaCog className="text-4xl" />,
      description: "Programas de mantenimiento preventivo y correctivo para maximizar la vida útil de sus sistemas diesel y turbos, evitando fallas costosas y mejorando el rendimiento.",
      features: [
        "Planes de mantenimiento personalizados",
        "Limpieza y calibración de sistemas",
        "Revisión periódica de componentes críticos",
        "Optimización de rendimiento y eficiencia",
        "Mantenimiento por kilometraje programado",
        "Servicio especializado para flotas",
        "Asesoría en montaje de laboratorios",
        "Capacitación técnica en sistemas diesel"
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
        "Soporte post-instalación completo",
        "Sistemas de filtración RACOR",
        "Adaptación de filtros separadores de agua",
        "Venta de bancos de prueba especializados",
        "Servicio a domicilio disponible"
      ],
      image: "/instalacion.png"
    }
  ];

  const technicalServices = [
    {
      icon: <FaWrench className="text-[#e3001b]" />,
      title: "Sistemas de Inyección",
      description: "Electrónicos: PLD, Cummins, Caterpillar, Common Rail, EUI, HEUI, PLD y Diesel\nConvencionales"
    },
    {
      icon: <FaTools className="text-[#e3001b]" />,
      title: "Bombas Mecánicas y Electrónicas",
      description: "Mecánicas: Lineales, Rotativas, Unitarias y PT Eléctronicas: Tic s, RE 30/36, PLD, Covec y VP44"
    },
    {
      icon: <FaTachometerAlt className="text-[#e3001b]" />,
      title: "Turbos",
      description: "Reparación especializada de turbos de todas las marcas.\n Balanceo electrónico, ajuste y limpieza de sus componentes por ultrasonido y sandblasting. "
    },
    {
      icon: <FaSearch className="text-[#e3001b]" />,
      title: "Motores Diesel",
      description: "Diagnóstico, sincronización y reparación"
    },
    {
      icon: <FaGasPump className="text-[#e3001b]" />,
      title: "Inyectores",
      description: "Convencionales y electrónicos STH, EUI, HEUI, Common Rail, Cummins y ISX"
    },
    {
      icon: <FaFlask className="text-[#e3001b]" />,
      title: "Análisis de Muestras de Combustible",
      description: "Análisis microbial, Porcentaje de Biodiésel, Porcentaje de Cetano"
    },
    {
      icon: <FaLaptop className="text-[#e3001b]" />,
      title: "Servicio de Escáner",
      description: "Diagnóstico avanzado con equipos especializados"
    },
    {
      icon: <FaFilter className="text-[#e3001b]" />,
      title: "Sistemas de Filtración RACOR",
      description: "Instalación y mantenimiento de sistemas RACOR"
    },
    {
      icon: <FaTint className="text-[#e3001b]" />,
      title: "Adaptación de Filtros Separadores de Agua",
      description: "Aumenta la vida útil de los sistemas de inyección. Diferentes tamaños según el caballaje del motor."
    },
    {
      icon: <FaCogs className="text-[#e3001b]" />,
      title: "Diálisis de Tanques para Motores diesel",
      description: "Mantenimiento de Tanques y Venta de Equipos Portatiles para Diálisis"
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
              <div dangerouslySetInnerHTML={{ __html: currentService.description }} />
              <div className="mt-6"> {/* Espacio entre descripción y características */}</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[#e3001b] mt-1 mr-3 flex-shrink-0" />
                    <div dangerouslySetInnerHTML={{ __html: feature }} />
                  </div>
                ))}
              </div>
            </div>
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
                {/* CAMBIO CLAVE: Agregado whitespace-pre-line aquí */}
                <p className="text-gray-600 ml-12 whitespace-pre-line">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;