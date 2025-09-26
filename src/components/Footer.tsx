import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#e3001b] text-white w-full">
      <div className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Columna 1: Logo y contacto */}
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Diesel y Turbos SAS</h1>
          <p className="text-sm">tecnología Diesel en sus manos #DieselyTurbos</p>
          <div className="flex space-x-4 text-white text-2xl mt-2">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <FaInstagram />
            </a>
          </div>
          <div className="space-y-1 text-white/90 mt-3 text-sm">
            <p>📞 (57) 311 478-2000</p>
            <p>✉ bogota@dieselyturbos.com</p>
            <p>🕒 Lun-Jue: 8:30-17:00</p>
            <p>🕒 Vie: 8:30-17:30</p>
            <p>🕒 Sáb: 8:30-12:30</p>
          </div>
        </div>

        {/* Columna 2: Facebook widget */}
        <div className="bg-[#b30016] p-3 rounded-xl overflow-hidden max-h-60">
          <h2 className="font-bold text-base mb-2">Facebook</h2>
          <iframe
            title="Facebook"
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/facebook&tabs=timeline&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false"
            width="100%"
            height="260"
            style={{ border: "none", overflow: "hidden", borderRadius: "8px" }}
            frameBorder="0"
            allow="encrypted-media"
          ></iframe>
        </div>

        {/* Columna 3: Instagram widget */}
        <div className="bg-[#b30016] p-3 rounded-xl overflow-hidden max-h-60">
          <h2 className="font-bold text-base mb-2">Instagram</h2>
          <iframe
            title="Instagram"
            src="https://snapwidget.com/embed/123456"
            width="100%"
            height="260"
            frameBorder="0"
            scrolling="no"
            style={{ borderRadius: "8px" }}
          ></iframe>
        </div>

        {/* Columna 4: Formulario de contacto */}
        <div className="space-y-4">
          <h2 className="text-base font-bold border-b-2 border-white pb-1">Contáctanos</h2>
          <p className="text-sm">Escríbenos mediante correo electrónico</p>
          <div className="flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Tu correo" 
              className="w-full p-3 rounded-l-lg border-none outline-none text-gray-800 text-base mb-2 sm:mb-0" 
            />
            <button className="bg-white text-[#e3001b] px-6 py-3 rounded-r-lg font-bold text-base hover:bg-gray-100 transition-colors whitespace-nowrap">
              ENVIAR
            </button>
          </div>
          <p className="text-sm text-white/90">
            Responderemos a la brevedad posible
          </p>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="text-center text-white/80 py-3 border-t border-white/20 text-sm">
        ©2025 Diesel y Turbos SAS. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;