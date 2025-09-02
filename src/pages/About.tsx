

const About = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      {/* Header con imagen de fondo */}
      <header className="relative h-64 bg-red-700 text-white flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/e3001b/ffffff?text=About+Us')" }}></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About</h1>
          <p className="mt-2 text-lg opacity-90">Conoce más sobre nuestra empresa</p>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda: descripción */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Sobre Nuestra Empresa</h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>DieselPro®</strong> es una empresa líder en el mercado colombiano especializada en la fabricación, reparación y distribución de componentes diesel de alta calidad, incluyendo <strong>tubopartes, inyectores, bombas de combustible, filtros y sistemas de inyección electrónica</strong>. Desde su fundación en 2005, nos hemos posicionado como referencia en la industria por nuestro compromiso con la excelencia técnica y la innovación.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Fundada por el ingeniero <strong>Juan Carlos Mendoza</strong>, DieselPro nació con la visión de ofrecer soluciones confiables y duraderas para vehículos comerciales, camiones pesados y maquinaria agrícola. Con más de 18 años de experiencia, nuestros técnicos certificados han resuelto miles de casos complejos, garantizando el rendimiento óptimo de cada motor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nos enfocamos en ofrecer productos remanufacturados con estándares superiores al original (OE), asegurando un rendimiento superior y una vida útil extendida. Todos nuestros procesos están certificados bajo normas ISO 9001, lo que refuerza nuestro compromiso con la calidad.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy en día, contamos con una red de distribuidores en todo el país y brindamos soporte técnico personalizado para mecánicos, talleres y clientes finales. Nuestro lema: <em>“Potencia. Precisión. Confianza.”</em>
            </p>
          </div>

          {/* Columna derecha: contacto y ubicación */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-red-700 mb-4">Nuestras Ubicaciones</h3>
            <hr className="border-gray-300 mb-4" />

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Sede Principal:</h4>
                <p className="text-gray-600">Cl. 12a #39-21</p>
                <p className="text-gray-600">Bogotá, Cundinamarca</p>
                <p className="text-gray-600">Colombia</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Teléfono:</h4>
                <p className="text-gray-600">(57) 312 456-7890</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Correo:</h4>
                <p className="text-gray-600">info@dieselpromx.com</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">Horario:</h4>
                <p className="text-gray-600">Lunes a Viernes: 8:00 AM – 6:00 PM</p>
                <p className="text-gray-600">Sábados: 9:00 AM – 1:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;