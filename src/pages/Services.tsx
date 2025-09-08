// src/pages/Services.tsx
import { useState } from "react";
import { 
  FaWrench, 
  FaCog, 
  FaTools, 
  FaShieldAlt, 
  FaClock, 
  FaCheckCircle
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
      image: "/reparacion.jpg",
      process: [
        { step: "1", title: "Evaluación Inicial", description: "Análisis completo del sistema" },
        { step: "2", title: "Diagnóstico", description: "Identificación precisa del problema" },
        { step: "3", title: "Presupuesto", description: "Cotización sin compromiso" },
        { step: "4", title: "Reparación", description: "Trabajo especializado con repuestos originales" },
        { step: "5", title: "Pruebas", description: "Verificación de funcionamiento" }
      ]
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
      image: "/mantenimiento.jpg",
      process: [
        { step: "1", title: "Inspección", description: "Revisión completa del sistema" },
        { step: "2", title: "Limpieza", description: "Eliminación de depósitos y residuos" },
        { step: "3", title: "Calibración", description: "Ajuste preciso de componentes" },
        { step: "4", title: "Pruebas", description: "Verificación de parámetros operativos" },
        { step: "5", title: "Reporte", description: "Documentación detallada del servicio" }
      ]
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
      image: "/instalacion.jpg",
      process: [
        { step: "1", title: "Análisis", description: "Evaluación de requerimientos específicos" },
        { step: "2", title: "Preparación", description: "Selección de componentes adecuados" },
        { step: "3", title: "Instalación", description: "Montaje profesional con herramientas especializadas" },
        { step: "4", title: "Configuración", description: "Ajuste de parámetros electrónicos" },
        { step: "5", title: "Pruebas", description: "Verificación de funcionamiento óptimo" }
      ]
    }
  ];

  const benefits = [
    {
      icon: <FaShieldAlt className="text-[#e3001b] text-3xl" />,
      title: "Garantía Extendida",
      description: "Todas nuestras reparaciones incluyen garantía de 12 meses"
    },
    {
      icon: <FaClock className="text-[#e3001b] text-3xl" />,
      title: "Atención Personalizada",
      description: "Cada caso es único. Diseñamos soluciones a medida según las necesidades específicas de tu equipo"
    },
    {
      icon: <FaCheckCircle className="text-[#e3001b] text-3xl" />,
      title: "Técnicos Certificados",
      description: "Equipo con más de 10 años de experiencia especializada"
    },
    {
      icon: <FaWrench className="text-[#e3001b] text-3xl" />,
      title: "Repuestos Originales",
      description: "Usamos únicamente componentes de calidad premium"
    }
  ];

  const currentService = services.find(s => s.title === activeService) || services[0];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <header 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/boch.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6">
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
                <div className="aspect-video bg-gray-100 flex items-center justify-center">
                  <span className="text-5xl text-[#e3001b]">{currentService.icon}</span>
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

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#e3001b]">Nuestro Proceso de Trabajo</h2>
            <p className="text-gray-600">
              Un enfoque estructurado para garantizar la máxima calidad en cada servicio
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#e3001b]"></div>
            
            {currentService.process.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-5/12 mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#e3001b] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-2/12 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#e3001b] flex items-center justify-center text-white font-bold text-xl border-4 border-white shadow-md">
                    {index + 1}
                  </div>
                </div>
                
                {index < currentService.process.length - 1 && (
                  <div className="hidden md:block md:w-2/12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#e3001b]">¿Por qué Elegirnos?</h2>
            <p className="text-gray-600">
              Compromiso con la excelencia en cada servicio que ofrecemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#e3001b] transition-all duration-300 transform hover:scale-[1.02] shadow-sm"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;