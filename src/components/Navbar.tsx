// Navbar.tsx
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
            <button className="ml-2 px-3 py-1 bg-red-600 hover:bg-red-700 rounded transition-colors text-xs sm:text-sm">
              Pago
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Navbar principal */}
      <nav className="bg-black shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
<div className="relative flex items-center justify-center w-40 h-12 transition-all duration-500 ease-in-out">
  {/* Logo grande */}
  <img
    src="/logonegativo.png"
    alt="Logo Diesel & Turbos SAS"
    className={`absolute object-contain transition-all duration-500 ease-in-out
      ${showTopBar 
        ? "opacity-100 scale-100 w-40 h-12 translate-x-0" 
        : "opacity-0 scale-95 w-40 h-12 translate-x-5"}
    `}
  />
  {/* Logo compacto - CORREGIDO PARA QUE VENGA DE LA IZQUIERDA */}
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
            {menuItems.map((item, idx) => (
              <li key={idx} className="relative group">
                <a
                  href="#"
                  className="text-white hover:text-red-600 transition-colors block py-1 text-sm md:text-base"
                >
                  {item.title}
                </a>
                {item.submenu.length > 0 && (
                  <ul className="absolute top-full left-0 mt-1 w-48 bg-black border border-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
                    {item.submenu.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="px-4 py-2 hover:bg-red-600 hover:text-white transition-colors"
                      >
                        <a href="#" className="block">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors font-semibold block text-center text-sm md:text-base"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
