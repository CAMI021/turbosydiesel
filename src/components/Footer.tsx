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
    <footer className="bg-[#e3001b] text-white w-full">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Columna 1: Logo y contacto */}
        <div className="space-y-4">
          {/* Logo en lugar de texto */}
          <div className="flex items-center">
            <img 
              src="/logonegativo.png" 
              alt="Diesel y Turbos SAS Logo" 
              className="h-16 w-auto"
            />
          </div>
          <p className="text-sm">Tecnología Diesel en sus Manos</p>
          
          {/* Información de contacto */}
          <div className="space-y-2 text-white/90">
            <p className="flex items-start">
              <FaMapMarkerAlt className="mt-1 mr-2 flex-shrink-0" /> 
              Carrera 72 # 76-95, Bogotá
            </p>
            <p className="flex items-center">
              <FaWhatsapp className="mr-2" /> 
              <a href="https://wa.me/573114782000" className="hover:underline transition-colors">311 478-2000</a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> 
              <a href="mailto:bogota@dieselyturbos.com" className="hover:underline transition-colors">bogota@dieselyturbos.com</a>
            </p>
          </div>
          
          {/* Horarios */}
          <div className="space-y-1 text-white/90 mt-2">
            <p className="font-semibold">Horario de Atención:</p>
            <p>Lun-Jue: 8:30-17:00</p>
            <p>Vie: 8:30-17:30</p>
            <p>Sáb: 8:30-12:30</p>
          </div>
        </div>

        {/* Columna 2: Redes sociales */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold border-b-2 border-white pb-2">Síguenos</h2>
          <p className="text-sm">Mantente conectado con nosotros en redes sociales</p>
          
          <div className="space-y-3 mt-4">
            <a 
              href="https://www.facebook.com/dieselyturbossas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FaFacebookF className="text-2xl mr-3" />
              <span>Síguenos en Facebook</span>
            </a>
            
            <a 
              href="https://www.instagram.com/dieselyturbossas/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <FaInstagram className="text-2xl mr-3" />
              <span>Visita nuestro Instagram</span>
            </a>
          </div>
          
          {/* Sección modificada con los números específicos */}
          <div className="mt-4 p-3 bg-white/10 rounded-lg">
            <p className="font-semibold mb-2">Números Directos</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Ventas:</span>
                <a href="tel:+573185141582" className="underline hover:text-white">318 514 1582</a>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Taller:</span>
                <a href="tel:+573185141580" className="underline hover:text-white">318 514 1580</a>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 3: Formulario de contacto */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold border-b-2 border-white pb-2">Contáctanos</h2>
          <p className="text-sm">Escríbenos mediante correo electrónico</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="w-full p-3 rounded-lg border-none outline-none text-gray-800 text-base" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="w-full bg-white text-[#e3001b] px-6 py-3 rounded-lg font-bold text-base hover:bg-gray-100 transition-colors">
              ENVIAR MENSAJE
            </button>
          </form>
          <p className="text-sm text-white/90">
            Responderemos a la brevedad posible
          </p>
          
          <div className="mt-4">
            <button 
              onClick={() => navigate('/contact')}
              className="w-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Formulario de contacto completo
            </button>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="container mx-auto px-4">
        <div className="border-t border-white/20 pt-4 pb-2">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-2 md:mb-0">
              ©2025 Diesel y Turbos SAS. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="/privacy" className="text-white/80 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="/terms" className="text-white/80 hover:text-white text-sm transition-colors">Términos y Condiciones</a>
              <a href="/sitemap" className="text-white/80 hover:text-white text-sm transition-colors">Mapa del Sitio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;