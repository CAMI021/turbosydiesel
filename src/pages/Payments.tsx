
import { motion } from 'framer-motion';

const Payments = () => {
  const services = [
    {
      title: "Servicio Autorizado Bosch Diesel Center",
      description:
        "Ofrecemos diagnóstico, reparación y mantenimiento certificado por Bosch para sistemas de inyección diesel. Utilizamos herramientas originales y piezas de repuesto genuinas para garantizar un rendimiento óptimo y duradero.",
      image: "https://via.placeholder.com/500x300/2d2d2d/ffffff?text=Bosch+Diesel+Center",
      color: "#e3001b",
    },
    {
      title: "Servicio Autorizado Delphi Diesel Excellence",
      description:
        "Contamos con tecnología avanzada para la calibración y reparación de componentes Delphi. Nuestros técnicos están certificados para trabajar con sistemas de inyección electrónica, bombas de alta presión y sensores críticos.",
      image: "https://via.placeholder.com/500x300/2d2d2d/ffffff?text=Delphi+Excellence",
      color: "#0066cc",
    },
    {
      title: "Servicio Autorizado Holset Turbo",
      description:
        "Reparación y remanufactura de turbocompresores Holset con garantía extendida. Realizamos pruebas dinámicas en banco para asegurar que cada turbo funcione a plena capacidad antes de salir de nuestros talleres.",
      image: "https://via.placeholder.com/500x300/2d2d2d/ffffff?text=Holset+Turbo",
      color: "#3399ff",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      {/* Header con imagen de fondo */}
      <header className="relative h-64 bg-red-700 text-white flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/e3001b/ffffff?text=Our+Services')" }}></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Servicios</h1>
          <p className="mt-2 text-lg opacity-90">Soluciones autorizadas para motores diesel</p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Imagen */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Botón opcional */}
                <div className="p-6 pt-0">
                  <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                    Ver Detalles
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sección de contacto o llamado a acción */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">¿Necesitas ayuda con tu motor?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contáctanos hoy mismo para programar una revisión técnica completa con nuestros expertos certificados.
            </p>
            <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
              Programar Servicio
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payments;