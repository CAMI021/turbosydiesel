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
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20"> {/* Agregado pt-20 para ajustar el espacio superior */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Nuestros Servicios <span className="text-[#e3001b]"></span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Especialistas en sistemas de inyección diesel y nuevas tecnologías
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-20" />
        </div>
      </header>

      {/* Sección de logotipos autorizados con diseño mimetizado */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-10 bg-red-600 rounded-r-lg mr-4"></span>
              Servicios Autorizados por las Principales Marcas
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
          {/* Columna izquierda: servicios y descripción */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-7 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-10 bg-red-600 rounded-r-lg mr-4"></span>
                Servicios Especializados Diesel
              </h2>

              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="mb-5">
                  Somos un <strong className="text-red-700">taller especialista en sistemas diesel</strong> con enfoque en las nuevas tecnologías de inyección. Ofrecemos un servicio completo de diagnóstico, reparación, comprobación en vehículo y soporte técnico especializado para todos los motores diesel, en vehículos turismos, comerciales e industriales.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Nuestras Ventajas</h3>
                <p className="mb-5">
                  Contamos con una alta cualificación técnica, posicionándonos como el especialista más completo para sistemas <strong>Diesel de la Red Bosch, Delphi, Holset, Stanadyne, Doowan y Zexel</strong>. Estamos autorizados por las fábricas para gestionar garantías de repuestos y componentes.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Sistemas que Atendemos</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-5">
                  <li><strong>Sistemas Common Rail</strong> – Alta presión electrónica</li>
                  <li><strong>Inyectores EUI (UIS) y PLD (EUP)</strong> – Bombas solidarias</li>
                  <li><strong>Inyectores HEUI</strong> – Tecnología hidráulica</li>
                  <li><strong>Turboalimentadores</strong> – Reparación y balanceo</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Servicios que Ofrecemos</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-5">
                  <li>Diagnóstico avanzado del sistema del vehículo</li>
                  <li>Desmontaje e instalación de componentes</li>
                  <li>Inspección, mantenimiento y reparación de sistemas de inyección diesel convencional y electrónico</li>
                  <li>Lavado de tanques de combustible</li>
                  <li>Análisis de combustible y medición de contaminación por partículas</li>
                  <li>Pruebas de opacidad de humo</li>
                  <li>Campañas de reparación por kilometraje</li>
                </ul>

                <p className="italic text-gray-600 border-l-4 border-amber-300 pl-4 py-2 bg-amber-50 rounded-r-lg mt-6">
                  "Precisión. Tecnología. Confianza." – Nuestro compromiso técnico
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
                  Nuestra Ubicación
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.11 21 3 14.89 3 7V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Teléfono:</h4>
                    <p className="text-gray-600 text-sm">(57) 311 478-2000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Correo:</h4>
                    <p className="text-gray-600 text-sm">bogota@dieselyturbos.com</p>
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
                      <h4 className="font-bold text-gray-900">Horario:</h4>
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