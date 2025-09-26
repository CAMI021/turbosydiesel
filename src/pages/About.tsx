const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header moderno con imagen de fondo profesional */}
      <header
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/products.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Nuestra <span className="text-[#e3001b]">Esencia Empresarial</span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Comprometidos con la excelencia en repuestos y servicios para sistemas diesel
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-24" />
        </div>
      </header>

      {/* Sección de logotipos autorizados con diseño mimetizado */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-10 bg-red-600 rounded-r-lg mr-4"></span>
              Certificados oficiales
            </h2>
            <div className="text-center">
              <img
                src="/authorized-services-logos.png"
                alt="Logotipos de marcas autorizadas: Bosch, Delphi, Holset, Stanadyne, Doowan, Zexel"
                className="mx-auto max-w-full h-auto max-h-40 object-contain opacity-90"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contenido principal */}
      <main className="flex-1 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda: misión, visión y políticas */}
          <div className="lg:col-span-2 space-y-6">
            {/* Misión */}
            <div className="bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl p-7 border border-gray-100 border-l-4 border-l-[#e3001b]">
              <div className="flex items-center mb-5">
                <div className="bg-[#e3001b] p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">MISIÓN</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-12">
                Representaciones Diésel y Turbos SAS es una empresa importadora y distribuidora a nivel nacional de repuestos para sistemas de inyección diésel, Turbo alimentadores, Filtración, Equipos de pruebas y herramientas, así mismo presta servicios de reparación y mantenimiento para estos productos, soportada con personal con cultura de calidad, calificada y con gran vocación de servicio. Nos apropiamos de los problemas de los clientes para lograr la mejor solución ofreciendo servicios diferenciales.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-7 border border-gray-100 border-l-4 border-l-[#e3001b]">
              <div className="flex items-center mb-5">
                <div className="bg-[#e3001b] p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">VISIÓN</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-12">
                Para el año 2030 estaremos posicionados en el mercado como la primera opción del cliente en ventas y servicios para sistemas de inyección diésel, equipos y herramientas. Ofreciendo un servicio técnico especializado y desarrollando una ventaja competitiva en calidad, infraestructura, tecnología y talento humano. Buscando continuo crecimiento, y perdurables en el tiempo.
              </p>
            </div>

            {/* Política de Calidad */}
            <div className="bg-gradient-to-br from-white to-amber-50 rounded-2xl shadow-xl p-7 border border-gray-100 border-l-4 border-l-[#e3001b]">
              <div className="flex items-center mb-5">
                <div className="bg-[#e3001b] p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">POLÍTICA DE CALIDAD</h2>
              </div>
              <p className="text-gray-700 leading-relaxed pl-12">
                Ofrecer productos y servicios de excelente calidad que satisfagan los requerimientos y necesidades de nuestros clientes, proveedores, empleados y accionistas mejorando continuamente nuestros procesos para lograr fidelización con valores agregados que nos convierta en la primera opción del mercado.
              </p>
            </div>

            {/* Objetivos de Calidad */}
            <div className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl shadow-xl p-7 border border-gray-100 border-l-4 border-l-[#e3001b]">
              <div className="flex items-center mb-5">
                <div className="bg-[#e3001b] p-3 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">OBJETIVOS DE CALIDAD</h2>
              </div>
              <ol className="list-decimal list-inside text-gray-700 space-y-3 pl-12">
                <li className="ml-2">Incrementar ventas ofreciendo a nuestros clientes productos y servicios de excelente calidad buscando siempre fidelizarlos aumentando su nivel de satisfacción, disminuyendo tiempos de respuesta y número de reclamos.</li>
                <li className="ml-2">Asegurar y optimizar los recursos para el desarrollo de actividades de todos los procesos garantizando la rentabilidad y perdurabilidad de la organización.</li>
                <li className="ml-2">Mantener altos estándares en las competencias de nuestros empleados para optimizar el servicio al cliente.</li>
                <li className="ml-2">Mejorar continuamente los procesos de Sistema de Gestión de Calidad para lograr mayor efectividad.</li>
              </ol>
              
              <div className="mt-6 p-4 bg-[#e3001b]/5 rounded-lg border border-[#e3001b]/20">
                <p className="text-[#e3001b] font-semibold flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Compromiso con la excelencia en cada proceso
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: contacto y ubicación */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 sticky top-8">
              <div className="bg-gradient-to-r from-red-700 to-red-800 p-5">
                <h3 className="text-2xl font-bold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Contacto Directo
                </h3>
              </div>

              <div className="p-5 space-y-5">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sede Principal:</h4>
                    <p className="text-gray-600 text-sm">Cl. 12a #39-21, Bogotá</p>
                    <p className="text-gray-600 text-sm">Cundinamarca, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Taller:</h4>
                    <p className="text-gray-600 text-sm">318 514 580</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.11 21 3 14.89 3 7V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Ventas:</h4>
                    <p className="text-gray-600 text-sm">318 514 1582</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Servicios:</h4>
                    <p className="text-gray-600 text-sm">servicio@dieselyturbos@gmail.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Horario de Atención:</h4>
                      <p className="text-gray-600 text-sm">Lunes a Jueves: 8:30 AM – 5:00 PM</p>
                      <p className="text-gray-600 text-sm">Viernes: 8:30 AM – 5:30 PM</p>
                      <p className="text-gray-600 text-sm">Sábados: 8:30 AM – 12:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;