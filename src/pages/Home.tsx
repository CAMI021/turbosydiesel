import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Truck, Wrench, Award, Clock, ChevronLeft, ChevronRight, Phone, MessageCircle, CheckCircle } from "lucide-react";

const Home = () => {
  // Datos para testimonios
  const testimonials = [
    {
      name: "Juan Pérez",
      role: "Transportista profesional",
      content: "Repararon mi inyector Common Rail en 24 horas con garantía extendida. El servicio técnico es impecable y los precios justos. ¡Altamente recomendado!",
      rating: 5,
      avatar: "/avatar1.jpg"
    },
    {
      name: "María López",
      role: "Propietaria de taller mecánico",
      content: "La calidad de sus repuestos y la atención personalizada hacen la diferencia. Siempre confío en ellos para los sistemas diesel de mis clientes.",
      rating: 5,
      avatar: "/avatar2.jpg"
    },
    {
      name: "Carlos Mendoza",
      role: "Ingeniero mecánico",
      content: "Técnicos altamente capacitados y equipos de diagnóstico de última generación. La mejor opción para sistemas diesel en toda la región.",
      rating: 5,
      avatar: "/avatar3.jpg"
    }
  ];

  return (
    <div className="no-horizontal-scroll bg-[#f4f4f4]">
      {/* Hero mejorado con animaciones de texto */}
      <section className="full-width relative bg-black text-white h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 z-0">
            <motion.img
              src="/hero-diesel.jpg"
              alt="Inyectores Diesel Profesionales"
              className="w-full h-full object-cover"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.7, 0.8, 0.7]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight hero-text-shadow"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.03
                  }
                }
              }}
            >
              {Array.from("VENTA, REPARACIÓN Y MANTENIMIENTO").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  style={{ 
                    display: 'inline-block',
                    color: index >= 24 ? '#e3001b' : 'white',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 mb-10"
            >
              Especialistas certificados en sistemas de inyección diesel de alta precisión con tecnología europea
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-[#e3001b] hover:bg-red-700 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[220px] btn-diesel">
                <Truck className="mr-2 h-5 w-5" /> Cotiza ahora
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[220px] btn-outline-diesel">
                <Wrench className="mr-2 h-5 w-5" /> Servicio urgente
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-12 flex flex-wrap justify-center gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: <Award className="h-6 w-6" />, text: "Certificados Bosch" },
                { icon: <Clock className="h-6 w-6" />, text: "24/7 Soporte técnico" },
                { icon: <Truck className="h-6 w-6" />, text: "Envíos nacionales" },
                { icon: <Wrench className="h-6 w-6" />, text: "Garantía extendida" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 + index * 0.1 }}
                  className="flex items-center bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20"
                >
                  <span className="text-[#e3001b] mr-2">{item.icon}</span>
                  <span className="text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Efecto de partículas sutiles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: Math.random() * 0.5 + 0.2
                }}
                animate={{
                  y: [null, -20, 0],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Galería de productos con movimiento */}
      <section className="full-width py-16 bg-white overflow-hidden">
        <div className="container-wide">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-black mb-4"
          >
            Nuestros Productos en Acción
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Componentes premium y reparaciones de alta precisión para sistemas diesel
          </motion.p>
          
          <div className="relative">
            <motion.div 
              className="flex gap-6 pb-8 product-gallery"
              animate={{ 
                x: [0, -1000, 0],
                transition: {
                  x: {
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear"
                  }
                }
              }}
            >
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 w-64 h-80 rounded-xl overflow-hidden shadow-2xl card-hover"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={`/product-${(i % 4) + 1}.jpg`} 
                    alt={`Producto diesel ${i + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium text-lg">Inyector Common Rail Series {i + 1}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios mejorados con iconos animados */}
      <section className="full-width py-16 px-6 md:px-20 bg-gray-50">
        <div className="container-wide">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Diagnóstico, reparación y mantenimiento con tecnología de punta y certificación europea
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Wrench className="h-10 w-10" />,
                title: "Inyectores Diesel",
                desc: "Reparación y calibración de inyectores Common Rail, EUI, HEUI y sistemas de última generación con equipos de diagnóstico Bosch.",
                features: ["Calibración láser", "Pruebas de presión", "Garantía 12 meses"]
              },
              {
                icon: <Truck className="h-10 w-10" />,
                title: "Turbos",
                desc: "Venta, reparación y mantenimiento de turbos Holset, KKK, Borg Warner, Garrett y más con tecnología de balanceo dinámico.",
                features: ["Análisis de vibraciones", "Recubrimientos cerámicos", "Garantía extendida"]
              },
              {
                icon: <Award className="h-10 w-10" />,
                title: "Bombas Diesel",
                desc: "Mantenimiento de bombas mecánicas y electrónicas de última generación con equipos de medición de precisión alemana.",
                features: ["Reconstrucción completa", "Pruebas en banco", "Certificación CE"]
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ y: -10 }}
                className="rounded-2xl shadow-xl bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl card-hover"
              >
                <div className="bg-[#e3001b] p-6 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-4 rounded-xl icon-container"
                  >
                    {item.icon}
                  </motion.div>
                </div>
                <Card className="border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#e3001b] text-center mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-center text-sm"
                        >
                          <span className="w-2 h-2 bg-[#e3001b] rounded-full mr-2"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas con contador animado */}
      <section className="full-width py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Años de Experiencia", icon: <Award className="h-6 w-6 mx-auto" /> },
              { value: "500+", label: "Clientes Satisfechos", icon: <Star className="h-6 w-6 mx-auto" /> },
              { value: "2,500+", label: "Reparaciones Completadas", icon: <Wrench className="h-6 w-6 mx-auto" /> },
              { value: "24/7", label: "Soporte Técnico", icon: <Clock className="h-6 w-6 mx-auto" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="text-[#e3001b] mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-[#e3001b]">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección info mejorada */}
      <section className="full-width bg-gradient-to-r from-white to-gray-50 py-16 px-6 md:px-20">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img 
                src="/team.jpg" 
                alt="Equipo técnico especializado" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover" 
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-black mb-6">
                Sobre <span className="text-[#e3001b]">Delphi Diesel Excellence</span>
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Somos distribuidores autorizados de marcas premium como Zexel, Stanadyne, Doowon y Bosch, 
                especialistas en sistemas de inyección diésel convencionales y modernos (Common Rail, EUI, PLD, VP44).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Nuestro laboratorio cuenta con tecnología de última generación para diagnóstico avanzado con scanner, 
                análisis de combustibles, medición de opacidad y calibración láser de componentes.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <div className="bg-[#e3001b] text-white p-2 rounded-lg mr-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Certificación Bosch</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#e3001b] text-white p-2 rounded-lg mr-3">
                    <Truck className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Envíos nacionales</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#e3001b] text-white p-2 rounded-lg mr-3">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Soporte 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#e3001b] text-white p-2 rounded-lg mr-3">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <span className="text-gray-700">Garantía extendida</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios con carrusel */}
      <section className="full-width py-20 bg-gray-50">
        <div className="container-wide">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-black mb-4"
          >
            Lo que dicen nuestros clientes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Confía en nosotros como lo han hecho cientos de clientes satisfechos en toda Latinoamérica
          </motion.p>
          
          <div className="relative">
            <motion.div
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 testimonial-card"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12 flex items-center justify-center text-gray-400">
                      {testimonial.avatar ? (
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover rounded-xl" 
                        />
                      ) : "👤"}
                    </div>
                    <div className="ml-3">
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current' : 'stroke-current'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic line-clamp-4">
                    "{testimonial.content}"
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 flex justify-end"
                  >
                    <div className="bg-[#e3001b]/10 text-[#e3001b] text-xs font-semibold px-3 py-1 rounded-full badge-diesel">
                      Cliente desde 2020
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Controles de carrusel */}
            <div className="flex justify-center gap-4 mt-10">
              <Button 
                variant="outline" 
                size="icon"
                className="border-[#e3001b] text-[#e3001b] hover:bg-[#e3001b] hover:text-white btn-outline-diesel"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon"
                className="border-[#e3001b] text-[#e3001b] hover:bg-[#e3001b] hover:text-white btn-outline-diesel"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA mejorado */}
      <section className="full-width py-20 bg-gradient-to-r from-[#e3001b] to-[#b00000] text-white text-center relative overflow-hidden">
        <div className="container-wide">
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              ¿Necesitas asesoría técnica o un servicio urgente?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Nuestros técnicos certificados están disponibles 24/7 para resolver tus problemas con sistemas diesel
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button className="bg-white text-[#e3001b] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[250px] font-semibold btn-diesel">
                <Phone className="mr-2 h-5 w-5" /> Llama ahora: +57 300 123 4567
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-xl min-w-[250px] font-semibold btn-outline-diesel">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp técnico
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto"
            >
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Respuesta en menos de 15 minutos</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Diagnóstico gratuito</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <span>Presupuesto sin compromiso</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sello de calidad */}
      <section className="full-width py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-6 md:mb-0"
            >
              <div className="flex items-center">
                <Award className="h-8 w-8 text-[#e3001b] mr-2" />
                <span className="text-2xl font-bold text-gray-800">Certificación <span className="text-[#e3001b]">Bosch</span> Excellence</span>
              </div>
              <p className="text-gray-600 mt-2">Centro autorizado de servicio técnico para sistemas diesel</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex space-x-8"
            >
              {["Bosch", "Zexel", "Stanadyne", "Doowon"].map((brand, index) => (
                <div key={index} className="opacity-70 hover:opacity-100 transition-opacity">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-24 h-12 flex items-center justify-center text-gray-400 font-bold">
                    {brand}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;