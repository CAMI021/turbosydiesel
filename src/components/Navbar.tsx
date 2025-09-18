// Navbar.tsx
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 100) {
        setShowTopBar(true);
      } else {
        setShowTopBar(currentScrollY < lastScrollY);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const routeMap: Record<string, string> = {
    "Inicio": "/",
    "Sobre Nosotros": "/about",
    "Servicios": "/services",
    "Productos": "/products",
    "Equipos": "/equipos",
    "Descargas": "/downloads",
    "Pago": "/payments",
  };

  const menuItems = [
    { title: "Inicio", submenu: [] },
    { title: "Sobre Nosotros", submenu: [] },
    {
      title: "Servicios",
      submenu: ["Reparación Profesional", "Mantenimiento Preventivo", "Instalación Especializada"],
    },
    { title: "Productos", submenu: ["Bombas de Alta Presión", "Inyectores de Precisión", "Turbos de Alto Rendimiento"] },
    { title: "Equipos", submenu: ["Para Motores Diesel", "Sistemas de Gas", "Equipos Universales"] },
    { title: "Preguntas Frecuentes", submenu: [] },
    { title: "Descargas", submenu: [] },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Bar */}
      <div
        className={`text-white transition-all duration-300 overflow-hidden bg-[#141313] ${
          showTopBar ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center h-full px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span>📞 (57) 311 478-2000</span>
            <span className="hidden sm:inline">|</span>
            <span>✉️ bogota@dieselyturbos.com</span>
          </div>
          <div className="flex items-center gap-3 mt-1 sm:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-red-500 transition-colors">
              <FaFacebookF />
            </a>
            
            <a href="#" aria-label="Instagram" className="hover:text-red-500 transition-colors">
              <FaInstagram />
            </a>
            
            <Link 
              to={routeMap["Pago"]} 
              className="ml-2 px-3 py-1 bg-[#e3001b] hover:bg-[#c00000] rounded transition-colors text-xs sm:text-sm font-medium shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"
            >
              Pago Seguro
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="bg-[#e3001b] shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="relative flex items-center justify-center w-40 h-12 transition-all duration-500 ease-in-out">
            <img
              src="/logonegativo.png"
              alt="Logo Diesel & Turbos SAS"
              className={`absolute object-contain transition-all duration-500 ease-in-out
                ${showTopBar 
                  ? "opacity-100 scale-100 w-40 h-12 translate-x-0" 
                  : "opacity-0 scale-95 w-40 h-12 translate-x-5"}
              `}
            />
            <img
              src="/logonegativoD.png"
              alt="Logo Diesel & Turbos SAS Compact"
              className={`absolute object-contain transition-all duration-500 ease-in-out
                ${showTopBar 
                  ? "opacity-0 scale-95 w-20 h-12 -translate-x-full" 
                  : "opacity-100 scale-100 w-20 h-12 translate-x-0"}
              `}
            />
          </div>

          {/* Menu */}
          <ul className="flex flex-wrap items-center gap-1 md:gap-2">
            {menuItems.map((item, idx) => {
              const toPath = routeMap[item.title] || (item.title === "Contacto" ? "/" : "#");
              
              return (
                <li key={idx} className="relative group">
                  <Link
                    to={toPath}
                    className="text-white hover:bg-[#c00000] transition-all duration-300 px-3 py-2 rounded-md font-medium text-sm md:text-base flex items-center"
                  >
                    {item.title}
                    {item.submenu.length > 0 && (
                      <svg 
                        className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.submenu.length > 0 && (
                    <ul className="absolute top-full left-0 mt-2 w-64 bg-[#c00000] border-t-2 border-[#e3001b] rounded-xl shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50 scale-y-95 group-hover:scale-y-100 origin-top transform">
                      {item.submenu.map((sub, subIdx) => (
                        <li
                          key={subIdx}
                          className="px-4 py-3 hover:bg-[#e3001b] hover:pl-5 transition-all duration-300 border-l-2 border-transparent hover:border-white"
                        >
                          <Link to="#" className="block text-white font-medium">
                            {sub}
                          </Link>
                        </li>
                      ))}
                      {/* Separador y enlace especial en submenús */}
                      <div className="border-t border-[#e3001b]/30 my-1"></div>
                      <li className="px-4 py-2 text-[#e3001b] font-semibold hover:bg-[#b00000] transition-colors">
                        <Link to="#" className="flex items-center">
                          Ver todos los {item.title.toLowerCase()}
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              );
            })}
            {/* Botón de contacto */}
            <li>
              <Link
                to="/#contact"
                className="px-4 py-2 bg-white text-[#e3001b] rounded-md hover:bg-gray-100 transition-colors font-bold text-sm md:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;