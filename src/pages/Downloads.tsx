const DownloadsPage = () => {
  const files = [
    { 
      name: 'Condiciones de Garantía de turbos', 
      size: '642.2kB ', 
      type: 'PDF', 
      link: '/pdfs/GS-I-004 Instructivo condiciones de garantia.pdf' 
    },
    { 
      name: 'Instructivo Condiciones de Garantía Sistemas de Inyección', 
      size: '222.8kB', 
      type: 'PDF', 
      link: '/pdfs/GS-I-007 Instructivo Condiciones De Garantia Sistemas De Inyeccion.pdf' 
    },
    { 
      name: 'Condiciones de Garantía sobre Repuestos de Sistema de Inyección', 
      size: '245.2 kB ', 
      type: 'PDF', 
      link: '/pdfs/Condiciones de Garantia sobre Repuestos de Sistema de Inyección.pdf' 
    }
  ];

  const categories = [
    { name: "Todos los Documentos", count: 3 },
    
    { name: "Garantías", count: 3 }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/downloads.jpg')",
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
            Descargas
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Archivos que podrían interesarte
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-20" />
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Sección de descargas */}
        <main className="flex-1 pr-0 lg:pr-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-red-700 to-red-800">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Recursos Disponibles
              </h2>
              <p className="text-amber-100 mt-1">Documentación técnica y herramientas esenciales</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-red-300 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center">
                        <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v4m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-700 transition-colors">{file.name}</h3>
                      </div>
                      <p className="text-gray-500 mt-1 ml-9">
                        {file.size} • Formato: <span className="font-medium text-red-700">{file.type}</span>
                      </p>
                    </div>
                    <a
                      href={file.link}
                      download
                      className="mt-3 sm:mt-0 px-5 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md inline-flex items-center justify-center sm:justify-start"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Descargar
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Barra lateral */}
        <aside className="w-full lg:w-72 mt-8 lg:mt-0 lg:ml-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
            <div className="p-5 bg-gradient-to-r from-red-700 to-red-800">
              <h3 className="text-xl font-bold text-white flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Categorías
              </h3>
            </div>
            
            <div className="p-5">
              <div className="space-y-2.5">
                {categories.map((category, idx) => (
                  <div 
                    key={idx} 
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-red-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="text-gray-700 group-hover:text-red-700 font-medium transition-colors text-sm">
                        {category.name}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-red-100 group-hover:text-red-700 transition-colors">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Buscador */}
             
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DownloadsPage;