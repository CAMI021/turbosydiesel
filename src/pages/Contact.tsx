// Contact.tsx
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // En un entorno real, aquí llamarías a tu API backend
      // Este es un ejemplo simulado
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulación de envío exitoso
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Redirigir a WhatsApp después de enviar el formulario
      // setTimeout(() => {
      //   window.open('https://wa.me/573114782000?text=Hola,%20he%20enviado%20un%20formulario%20de%20contacto%20en%20su%20sitio%20web', '_blank');
      // }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header 
        className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          backgroundImage: "url('/contact.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Contenido centrado */}
        <div className="relative z-10 text-center text-white max-w-4xl px-6 pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Contáctanos <span className="text-[#e3001b]"></span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto">
            Estamos listos para ayudarte con tus necesidades en sistemas diesel
          </p>
          <div className="h-1 bg-[#e3001b] mx-auto mt-6 rounded-full shadow-lg w-20" />
        </div>
      </header>

      {/* Contenido principal */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-red-700 to-red-800">
                <h2 className="text-2xl font-bold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Envíanos un Mensaje
                </h2>
                <p className="text-amber-100 mt-1">Completa el formulario y te responderemos pronto</p>
              </div>
              
              <div className="p-6">
                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                      <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">¡Mensaje enviado con éxito!</h3>
                    <p className="text-gray-600 mb-6">Gracias por contactarnos. Un especialista se pondrá en contacto contigo en las próximas 24 horas.</p>
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transition-all duration-300"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="Juan Pérez"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Correo electrónico <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="juan@ejemplo.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Teléfono
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2 3a1 1 0 011-1h2.68a1 1 0 01.949.659l1.55 4.65a1 1 0 01-.416 1.073L6.35 10.5a1 1 0 01-.949.659l-1.55 1.55A2 2 0 004.6 15.4l1.549 4.647a1 1 0 01-.659 1.252 1 1 0 01-1.252-.66L3 5a1 1 0 01-1-1z" />
                              <path d="M14.06 15.4c.758 0 1.41-.492 1.618-1.17l1.073-3.22a2 2 0 00-.434-1.948l-.943-.943a1 1 0 00-1.393 0l-2.46 2.46a1 1 0 00-.276.659v2.68a1 1 0 001 1h2.68a1 1 0 00.659-.276l2.46-2.46a1 1 0 000-1.393l-.943-.943a2 2 0 00-1.948-.434l-3.22 1.073A1.99 1.99 0 0112 13.35v-2.68a1 1 0 00-.276-.659l-3.998-3.998A1 1 0 006.35 5h-2.68a1 1 0 00-1 1v2.68a2 2 0 00.659 1.618l3.22 1.073a1 1 0 001.393 0l.943-.943a1 1 0 011.393 0l2.46 2.46c.208.208.477.327.758.327h2.68a1 1 0 001-1v-2.68a2 2 0 00-1.17-1.842l-1.073-3.22a1 1 0 00-1.393-0.659 1 1 0 00-.659 1.393l1.073 3.22a2 2 0 01.434 1.948l-.943.943a1 1 0 000 1.393l2.46 2.46c.28.28.648.439 1.03.439h2.68a1 1 0 001-1v-2.68a2 2 0 00-1.618-1.948z" />
                            </svg>
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500"
                            placeholder="(57) 311 478-2000"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Asunto <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 appearance-none bg-white"
                        >
                          <option value="" disabled>Selecciona un asunto</option>
                          <option value="consulta_tecnica">Consulta Técnica</option>
                          <option value="reparacion">Solicitud de Reparación</option>
                          <option value="presupuesto">Solicitud de Presupuesto</option>
                          <option value="garantia">Trámites de Garantía</option>
                          <option value="otro">Otro</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                          <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Mensaje <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
                        placeholder="Describe tu consulta o necesidad..."
                      ></textarea>
                    </div>
                    
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm text-red-700">
                              Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md flex items-center justify-center ${
                          isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Enviar Mensaje
                          </>
                        )}
                      </button>
                      
                      <p className="mt-3 text-xs text-gray-500 text-center sm:text-left">
                        Los campos marcados con <span className="text-red-500">*</span> son obligatorios
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Información de contacto */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-8">
              <div className="p-5 bg-gradient-to-r from-red-700 to-red-800">
                <h3 className="text-xl font-bold text-white flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Datos de Contacto
                </h3>
              </div>
              
              <div className="p-5 space-y-5">
                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Sede Principal:</h4>
                    <p className="text-gray-600 text-sm">Cl. 12a #39-21, Bogotá</p>
                    <p className="text-gray-600 text-sm">Cundinamarca, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.11 21 3 14.89 3 7V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Teléfono:</h4>
                    <p className="text-gray-600 text-sm">(57) 311 478-2000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Correo:</h4>
                    <p className="text-gray-600 text-sm">bogota@dieselyturbos.com</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="bg-red-100 p-2.5 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Horario:</h4>
                      <p className="text-gray-600 text-sm">Lunes a Jueves: 8:30 AM – 5:00 PM</p>
                      <p className="text-gray-600 text-sm">Viernes: 8:30 AM – 5:30 PM</p>
                      <p className="text-gray-600 text-sm">Sábados: 8:30 AM – 12:30 PM</p>
                    </div>
                  </div>
                </div>
                
                {/* Botón de WhatsApp */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <a
                    href="https://wa.me/573114782000?text=Hola,%20necesito%20información%20sobre%20sus%20servicios%20de%20sistemas%20diesel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white font-medium rounded-xl transition-all duration-300 text-center shadow-md transform hover:scale-[1.02]"
                  >
                    <span className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.765-1.653-2.062-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.357-.01-.539-.01-.181 0-.498.074-.759.372-.26.297-1.009.981-1.009 2.414 0 1.433 1.038 2.824 1.187 2.997.148.173 2.108 3.249 5.069 4.48.708.297 1.228.469 1.665.623.712.251 1.343.116 1.85.09.507-.026 1.569-.642 1.791-.717.222-.074.471-.148.422-.272-.048-.125-.197-.47-.395-.767z"/>
                        <path d="M12 2C6.486 2 2 6.486 2 12c0 1.996.566 3.854 1.535 5.432L2.01 22.999l5.568-1.465c1.46.858 3.173 1.312 4.984 1.312 5.514 0 10-4.486 10-10S17.514 2 12 2zm0 18c-4.365 0-7.9-3.536-7.9-7.9 0-1.333.337-2.588.92-3.707l-.925-3.493 3.489-.923c1.123.585 2.378.923 3.712.923 4.364 0 7.9-3.535 7.9-7.9 0-4.365-3.536-7.9-7.9-7.9-4.365 0-7.9 3.535-7.9 7.9 0 1.334.338 2.589.92 3.708-.585 1.122-.92 2.377-.92 3.708 0 4.365 3.535 7.9 7.9 7.9z"/>
                      </svg>
                      Escribir por WhatsApp
                    </span>
                  </a>
                </div>
                
                {/* Mapa */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Nuestra Ubicación
                  </h4>
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.649922332027!2d-74.07132848528407!3d4.641616243351573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a2f7b9c8b3%3A0x5e8b6b5b4b5b4b5b!2sCl.%2012a%20%2339-21%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1627757083537!5m2!1ses!2sco"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Ubicación de DieselyTurbos"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;