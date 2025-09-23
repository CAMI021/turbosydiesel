import { useState, useEffect } from "react";

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY;
      const isNearTop = currentScrollY <= 100;

      setShowTopBar(isNearTop || !isScrollingDown);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Define un tipo para las claves de routeMap
  type RouteKeys = "Inicio" | "Sobre Nosotros" | "Servicios" | "Productos" | "Equipos" | "Descargas";

  const routeMap: Record<RouteKeys, string> = {
    "Inicio": "/",
    "Sobre Nosotros": "/about",
    "Servicios": "/services",
    "Productos": "/products",
    "Equipos": "/equipos",
    "Descargas": "/downloads",
  };

  // Submenús para Productos basado en el código de Products.tsx
  const productSubmenu = [
    { name: "Filtros", path: "/products/filters" },
    { name: "Turboalimentadores", path: "/products/turbochargers" },
    { name: "Inyectores EUI", path: "/products/eui-injectors" },
    { name: "Inyectores HEUI", path: "/products/heui-injectors" },
    { name: "Sistemas Convencionales", path: "/products/conventional-injection-systems" },
    { name: "Common Rail", path: "/products/common-rail-systems" },
    { name: "Bombas PLD", path: "/products/pld-pumps" },
    { name: "Líquido de Calibración", path: "/products/calibration-fluid" }
  ];

  // Submenús para Equipos (actualizados según las categorías reales)
  const equipmentSubmenu = [
    { name: "Hartridge", path: "/equipos/hartridge" },
    { name: "Ultrasonidos", path: "/equipos/ultrasonidos" },
    { name: "Balanceadoras", path: "/equipos/balanceadoras" },
    { name: "DPF", path: "/equipos/dpf" },
    { name: "Luxómetros", path: "/equipos/luxometro" },
    { name: "Millennium", path: "/equipos/millennium" },
    { name: "Sand Blasters", path: "/equipos/sand-blasters" }
  ];

  const menuItems = [
    { title: "Inicio", submenu: [] },
    { title: "Sobre Nosotros", submenu: [] },
    { title: "Servicios", submenu: [] }, // Sin submenú como solicitaste
    { title: "Productos", submenu: productSubmenu },
    { title: "Equipos", submenu: equipmentSubmenu },
    { title: "Descargas", submenu: [] },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* ===== TOP BAR: Contacto + Redes + Wompi ===== */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden bg-gradient-to-r from-gray-50 to-white shadow-sm border-b border-gray-100 ${
          showTopBar ? "max-h-20 opacity-100 py-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          {/* Left: Contact Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 font-medium">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(57) 311 478-2000</span>
            </div>
            <span className="hidden sm:inline text-gray-400">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>bogota@dieselyturbos.com</span>
            </div>
          </div>

          {/* Right: Social Icons + Wompi Button */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-600 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 transform hover:scale-110"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-600 hover:text-red-600 transition-all duration-300 p-2 rounded-full hover:bg-gray-100 transform hover:scale-110"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.281-.073-1.689-.073-4.948 0-3.259.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Wompi Button */}
            <a
              href="https://www.wompi.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:from-red-700 hover:to-red-800 border border-red-500/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pago Seguro
            </a>
          </div>
        </div>
      </div>

      {/* ===== MAIN NAVBAR ===== */}
      <nav className="bg-white shadow-2xl border-b-4 border-red-500 transition-all duration-500">
        <div className="container mx-auto px-4 flex justify-between items-center h-20">
          {/* Logo Container */}
          <div className="relative flex items-center justify-start">
            <div className="relative w-40 h-12 md:w-48 md:h-14 overflow-hidden">
              <img
                src="/logonormal.png"
                alt="Logo Diesel & Turbos SAS"
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out ${
                  showTopBar ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4"
                }`}
              />
              <img
                src="/logonormalD.png"
                alt="Logo Diesel & Turbos SAS Compact"
                className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-out ${
                  showTopBar ? "opacity-0 scale-95 -translate-x-4" : "opacity-100 scale-100 translate-x-0"
                }`}
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, idx) => {
              // Asegúrate de que item.title sea de tipo RouteKeys
              const toPath = routeMap[item.title as RouteKeys] || "#";

              return (
                <li key={idx} className="relative group">
                  <a
                    href={toPath}
                    className="relative px-5 py-3 text-gray-800 hover:text-red-600 font-medium text-base transition-all duration-300 rounded-lg hover:bg-red-50 group-hover:shadow-md flex items-center"
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </a>

                  {/* Dropdown Submenu */}
                  {item.submenu.length > 0 && (
                    <ul className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform scale-95 group-hover:scale-100 transition-all duration-300 ease-out z-50 p-3">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={sub.path}
                            className="block px-4 py-3 text-gray-800 font-medium hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                          >
                            {sub.name}
                          </a>
                        </li>
                      ))}
                      <li className="border-t border-gray-100 my-2"></li>
                      <li>
                        <a
                          href={toPath}
                          className="flex items-center px-4 py-3 text-red-600 font-semibold hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200"
                        >
                          Ver todos los {item.title.toLowerCase()}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Contact Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden bg-white border-t border-gray-100 ${
            isMobileMenuOpen 
              ? 'max-h-[80vh] overflow-y-auto' 
              : 'max-h-0 overflow-hidden'
          } transition-[max-height] duration-300 ease-in-out`}
          style={{ 
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 transparent'
          }}
        >
          <div className="px-4 py-6 space-y-2">
            {menuItems.map((item, idx) => {
              // Asegúrate de que item.title sea de tipo RouteKeys
              const toPath = routeMap[item.title as RouteKeys] || "#";
              return (
                <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0">
                  <a
                    href={toPath}
                    className="block py-3 px-4 text-gray-800 hover:text-red-600 font-medium text-base transition-colors duration-200 rounded-lg hover:bg-red-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.title}
                  </a>
                  {item.submenu.length > 0 && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <a
                          key={subIdx}
                          href={sub.path}
                          className="block py-2 px-4 text-sm text-gray-600 hover:text-red-600 transition-colors duration-200 rounded-lg hover:bg-red-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4">
              <a
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-full shadow-lg transition-all duration-300 text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;