import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      navigate(`/contact?email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <footer className="bg-gradient-to-r from-[#d00015] to-[#b00010] text-white w-full">
      <div className="container mx-auto px-3 py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        
        {/* Columna 1: Logo y contacto */}
        <div className="space-y-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logonegativo.png" 
              alt="Diesel y Turbos SAS Logo" 
              className="h-12 w-auto"
            />
          </div>
          <p className="text-sm opacity-90">Tecnología Diesel en sus Manos</p>
          
          {/* Información de contacto */}
          <div className="space-y-2 text-white/90">
            <p className="flex items-start text-sm">
              <FaMapMarkerAlt className="mt-0.5 mr-2 flex-shrink-0 opacity-85" /> 
              Cl. 12a #39-21, Bogotá
            </p>
            <p className="flex items-center text-sm">
              <FaWhatsapp className="mr-2 text-[#25D366] transition-all duration-300 hover:scale-110" /> 
              <a href="https://wa.me/573114782000" className="hover:underline transition-colors">311 478-2000</a>
            </p>
            <p className="flex items-center text-sm">
              <FaEnvelope className="mr-2 opacity-85" /> 
              <a href="mailto:bogota@dieselyturbos.com" className="hover:underline transition-colors">bogota@dieselyturbos.com</a>
            </p>
          </div>
          
          {/* Horarios */}
          <div className="space-y-1 text-white/85 mt-1">
            <p className="font-semibold text-sm">Horario de Atención:</p>
            <p className="text-sm">Lun-Jue: 8:30-17:00</p>
            <p className="text-sm">Vie: 8:30-17:30</p>
            <p className="text-sm">Sáb: 8:30-12:30</p>
          </div>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="space-y-3">
          <h2 className="text-base font-bold border-b border-white/25 pb-2">Síguenos</h2>
          <p className="text-sm opacity-85">Mantente conectado con nosotros</p>
          
          <div className="space-y-2 mt-2">
            <a 
              href="https://www.facebook.com/people/Diesel-y-Turbos/61581889411881/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-[#1877F2] p-1.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                <FaFacebookF className="text-lg text-white" />
              </div>
              <span className="ml-3 text-sm group-hover:text-[#4267B2] transition-colors">Facebook</span>
            </a>
            
            <a 
              href="https://www.instagram.com/dieselyturbossas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-[#E1306C] to-[#C13584] p-1.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                <FaInstagram className="text-lg text-white" />
              </div>
              <span className="ml-3 text-sm group-hover:text-[#E1306C] transition-colors">Instagram</span>
            </a>
            
            <a 
              href="https://wa.me/573114782000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="bg-[#25D366] p-1.5 rounded-full transition-transform duration-300 group-hover:scale-105">
                <FaWhatsapp className="text-lg text-white" />
              </div>
              <span className="ml-3 text-sm group-hover:text-[#25D366] transition-colors">WhatsApp</span>
            </a>
          </div>
          
          {/* Números Directos */}
          <div className="mt-3 p-2 rounded-lg bg-white/5">
            <p className="font-semibold mb-1 text-sm opacity-90">Números Directos</p>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Ventas:</span>
                <a href="tel:+573185141582" className="hover:text-[#25D366] transition-colors">318 514 1582</a>
              </div>
              <div className="flex justify-between text-sm">
                <span>Taller:</span>
                <a href="tel:+573185141580" className="hover:text-[#25D366] transition-colors">318 514 1580</a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3: Formulario de contacto */}
        <div className="space-y-3">
          <h2 className="text-base font-bold border-b border-white/25 pb-2">Contáctanos</h2>
          <p className="text-sm opacity-85">Escríbenos mediante correo electrónico</p>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full p-2 rounded-lg border-none outline-none text-gray-800 text-sm bg-white/90 placeholder-gray-600" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-gradient-to-r from-white to-gray-100 text-[#d00015] px-3 py-2 rounded-lg font-bold text-sm hover:from-gray-100 hover:to-white transition-colors">
              ENVIAR MENSAJE
            </button>
          </form>
          <p className="text-sm text-white/75">
            Responderemos a la brevedad posible
          </p>
        </div>
      </div>

      {/* Footer inferior con gris */}
      <div className="container mx-auto px-3">
        <div className="border-t border-white/15 pt-2 pb-1.5 bg-gray-900/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-1 md:mb-0">
              ©2025 Diesel y Turbos SAS. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
              <a href="/privacy" className="text-white/70 hover:text-white text-sm transition-colors px-1 py-0.5 hover:bg-white/10 rounded">Política de Privacidad</a>
              <a href="/terms" className="text-white/70 hover:text-white text-sm transition-colors px-1 py-0.5 hover:bg-white/10 rounded">Términos y Condiciones</a>
              <a href="/sitemap" className="text-white/70 hover:text-white text-sm transition-colors px-1 py-0.5 hover:bg-white/10 rounded">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;