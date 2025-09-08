// Navbar.tsx
import { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // 👈 IMPORTA Link

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

  // 🔹 Mapeo de rutas a tus páginas
  const routeMap: Record<string, string> = {
    "Inicio": "/",
    "Sobre Nosotros": "/about",
    "Servicios": "/services",
    "Productos": "/products",
    "Equipos": "/equipos",
    "Descargas": "/downloads",
    "Pago": "/payments", // Para el botón de pago
  };

  const menuItems = [
    { title: "Inicio", submenu: [] },
    { title: "Sobre Nosotros", submenu: [] },
    {
      title: "Servicios",
      submenu: ["Reparación", "Mantenimiento", "Instalación"],
    },
    { title: "Productos", submenu: ["Bombas", "Inyectores", "Turbos"] },
    { title: "Equipos", submenu: ["Diesel", "Gas", "Universal"] },
    { title: "Preguntas Frecuentes", submenu: [] },
    { title: "Descargas", submenu: [] },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black">
      {/* 🔹 Top Bar */}
      <div
        className={`text-white transition-all duration-300 overflow-hidden bg-[#141313] ${
          showTopBar ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-wrap justify-between items-center h-full px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span>📞 +57 123 456 789</span>
            <span className="hidden sm:inline">|</span>
            <span>✉️ contacto@dieselyturbos.com</span>
          </div>
          <div className="flex items-center gap-3 mt-1 sm:mt-0">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            {/* 🔹 CAMBIO CLAVE: Botón de pago ahora es un Link */}
            <Link 
              to={routeMap["Pago"]} 
              className="ml-2 px-3 py-1 bg-red-600 hover:bg-red-700 rounded transition-colors text-xs sm:text-sm"
            >
              Pago
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar principal */}
      <nav className="bg-black shadow-md">
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
          <ul className="flex flex-wrap items-center gap-3 md:gap-5">
            {menuItems.map((item, idx) => {
              // 🔹 Determina la ruta correcta
              const toPath = routeMap[item.title] || (item.title === "Contacto" ? "/" : "#");
              
              return (
                <li key={idx} className="relative group">
                  {/* 🔹 CAMBIO CLAVE: Usa Link en lugar de <a> */}
                  <Link
                    to={toPath}
                    className="text-white hover:text-red-600 transition-colors block py-1 text-sm md:text-base"
                  >
                    {item.title}
                  </Link>
                  {item.submenu.length > 0 && (
                    <ul className="absolute top-full left-0 mt-1 w-48 bg-black border border-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                      {item.submenu.map((sub, subIdx) => (
                        <li
                          key={subIdx}
                          className="px-4 py-2 hover:bg-red-600 hover:text-white transition-colors"
                        >
                          {/* 🔹 Submenús: Usa # temporalmente (deberías crear rutas específicas después) */}
                          <Link to="#" className="block">
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
            {/* 🔹 Botón de contacto */}
            <li>
              <Link
                to="/#contact" // 👈 Así mantienes el scroll a la sección
                className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold block text-center text-sm md:text-base"
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