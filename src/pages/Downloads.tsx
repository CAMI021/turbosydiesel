import React from 'react';

const DownloadsPage = () => {
  // Simulación de archivos para descargar
  const files = [
    { name: 'Manual de Instalación v2.0', size: '2.5 MB', type: 'PDF', link: '#download1' },
    { name: 'Guía Técnica Completa', size: '4.1 MB', type: 'PDF', link: '#download2' },
    { name: 'Ficha Técnica del Producto', size: '800 KB', type: 'PDF', link: '#download3' },
    { name: 'Software de Diagnóstico', size: '12.7 MB', type: 'EXE', link: '#download4' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-gray-800">
      {/* Header con imagen de fondo */}
      <header className="relative h-64 bg-red-700 text-white flex items-center justify-center shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080/e3001b/ffffff?text=Download+Center')" }}></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Downloads</h1>
          <p className="mt-2 text-lg opacity-90">Descarga los recursos más importantes</p>
        </div>
      </header>

      {/* Contenido principal dividido en dos columnas */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sección de descargas - izquierda */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Archivos Disponibles</h2>
            <div className="space-y-4">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">{file.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {file.size} • {file.type}
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(file.link, '_blank')}
                    className="mt-2 md:mt-0 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Descargar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Barra lateral derecha - Categorías */}
        <aside className="w-64 bg-white border-l border-gray-200 p-6 overflow-y-auto shadow-sm">
          <h3 className="text-xl font-bold text-gray-800 mb-4">S&S Categories</h3>
          <div className="space-y-2">
            {[
              { name: 'All S&S Products', count: 37 },
              { name: 'Duramax', count: 8 },
              { name: 'Cummins', count: 8 },
              { name: 'Power Stroke', count: 5 },
              { name: 'Fuel Pumps', count: 4 },
              { name: 'Electronics', count: 13 },
              { name: 'Injectors', count: 16 },
              { name: 'Fuel System Kits', count: 4 },
              { name: 'BMW', count: 1 },
            ].map((category, idx) => (
              <div key={idx} className="flex justify-between items-center text-sm">
                <span className="text-gray-700 cursor-pointer hover:text-red-600 transition-colors">
                  {category.name}
                </span>
                <span className="text-gray-500">({category.count})</span>
              </div>
            ))}
          </div>

          {/* Buscador opcional */}
          <div className="mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH PRODUCTS..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute right-3 top-2.5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DownloadsPage;