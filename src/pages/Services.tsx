// src/pages/Services.tsx
import { useState } from "react";
import { 
  FaWrench, 
  FaCog, 
  FaTools, 
  FaShieldAlt, 
  FaClock, 
  FaCheckCircle, 
  FaArrowRight,
  FaPhone
} from "react-icons/fa";
import { Link } from "react-router-dom";

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
      icon: <FaShieldAlt className="text-red-600 text-3xl" />,
      title: "Garantía Extendida",
      description: "Todas nuestras reparaciones incluyen garantía de 12 meses"
    },
    {
      icon: <FaClock className="text-red-600 text-3xl" />,
      title: "Rápida Entrega",
      description: "Tiempo promedio de reparación de 24-48 horas"
    },
    {
      icon: <FaCheckCircle className="text-red-600 text-3xl" />,
      title: "Técnicos Certificados",
      description: "Equipo con más de 10 años de experiencia especializada"
    },
    {
      icon: <FaWrench className="text-red-600 text-3xl" />,
      title: "Repuestos Originales",
      description: "Usamos únicamente componentes de calidad premium"
    }
  ];

  const currentService = services.find(s => s.title === activeService) || services[0];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/bg-services.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-red-600 font-bold uppercase tracking-wider">Nuestros Servicios</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
              Soluciones Profesionales para <span className="text-red-600">Sistemas Diesel y Turbos</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expertos certificados con tecnología de punta para maximizar el rendimiento y durabilidad de tus sistemas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/#contact" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                Solicitar Servicio
                <FaArrowRight className="ml-2" />
              </Link>
              <a 
                href="tel:+57123456789" 
                className="border-2 border-white hover:border-red-600 text-white font-bold px-6 py-3 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                Llamar Ahora: +57 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Navigation */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.title)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                  activeService === service.title
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
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
              <div className="bg-gray-800 border-2 border-red-600 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gray-700 flex items-center justify-center">
                  <span className="text-5xl text-red-600">{currentService.icon}</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg hidden md:block">
                {currentService.title}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">{currentService.title}</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {currentService.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/#contact" 
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Solicitar {currentService.title}
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-gray-400">
              Un enfoque estructurado para garantizar la máxima calidad en cada servicio
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-red-600"></div>
            
            {currentService.process.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-5/12 mb-4 md:mb-0">
                  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all">
                    <div className="flex items-center mb-3">
                      <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
                
                <div className="md:w-2/12 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl border-4 border-black shadow-lg">
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
            <h2 className="text-3xl font-bold mb-4">¿Por qué Elegirnos?</h2>
            <p className="text-gray-400">
              Compromiso con la excelencia en cada servicio que ofrecemos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas un servicio <span className="text-red-600">profesional</span> para tus sistemas diesel?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte con la solución perfecta para tu vehículo o maquinaria.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/#contact" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                Solicitar Servicio Ahora
                <FaArrowRight className="ml-2" />
              </Link>
              <a 
                href="tel:+57123456789" 
                className="border-2 border-red-600 text-red-500 hover:bg-red-600/10 font-bold px-8 py-3 rounded-lg text-lg transition-colors inline-flex items-center"
              >
                <FaPhone className="mr-2" /> Llamar: +57 123 456 789
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;