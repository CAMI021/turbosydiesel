
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Columna 1: Logo, slogan, redes, contacto */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-[#e3001b]">Diesel y Turbos SAS</h1>
          <p>Be a Part of Team #DieselyTurbos!</p>
          <div className="flex space-x-4 text-[#e3001b] text-2xl">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
          </div>
          <div className="space-y-1 text-gray-400 mt-4">
            <p>📞 (123) 456-7890</p>
            <p>✉ info@dieselyturbos.com</p>
            <p>🕒 Lun-Vie 8:00am - 5:00pm</p>
          </div>
        </div>

        {/* Columna 2: Facebook widget */}
        <div className="bg-gray-900 p-4 rounded-lg overflow-auto max-h-80">
          <h2 className="font-semibold text-lg mb-2">Facebook Feed</h2>
          {/* Aquí puedes incrustar tu widget de Facebook */}
          <iframe
            title="Facebook"
            src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/facebook&tabs=timeline&width=340&height=400&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="100%"
            height="400"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="yes"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* Columna 3: Instagram widget */}
        <div className="bg-gray-900 p-4 rounded-lg overflow-auto max-h-80">
          <h2 className="font-semibold text-lg mb-2">Instagram Feed</h2>
          {/* Aquí puedes incrustar tu widget de Instagram */}
          <iframe
            title="Instagram"
            src="https://snapwidget.com/embed/123456" 
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
          ></iframe>
        </div>

        {/* Columna 4: Newsletter */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold border-b-2 border-[#e3001b] inline-block pb-1">Boletín</h2>
          <p>Enter your email to get news about products, events, and sales.</p>
          <div className="flex mt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-2 rounded-l-md border-none outline-none text-black" 
            />
            <button className="bg-[#e3001b] px-4 rounded-r-md text-white font-semibold hover:bg-red-700">
              GO
            </button>
          </div>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-800 pt-4 text-sm">
        ©2025 Diesel y Turbos SAS. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
