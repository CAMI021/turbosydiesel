// src/pages/Payments.tsx
import { useState } from "react";
import { 
  FaCreditCard, 
  FaMoneyBillWave, 
  FaMobileAlt, 
  FaLock, 
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Payments = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const paymentMethods = [
    {
      id: "credit-card",
      title: "Tarjeta de Crédito/Débito",
      icon: <FaCreditCard className="text-3xl text-red-600" />,
      description: "Paga de forma segura con tu tarjeta Visa, Mastercard o American Express"
    },
    {
      id: "cash",
      title: "Efectivo",
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      description: "Paga en efectivo al recoger tu servicio o producto"
    },
    {
      id: "mobile",
      title: "Transferencia Móvil",
      icon: <FaMobileAlt className="text-3xl text-red-600" />,
      description: "Realiza tu pago mediante Nequi, Davivienda o Bancolombia"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    
    // En una implementación real, aquí enviarías los datos a tu gateway de pago
    setTimeout(() => {
      setShowConfirmation(false);
    }, 5000);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-black to-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mb-6">
              <FaCreditCard className="text-red-600 text-3xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Realiza tu <span className="text-red-600">pago</span> de forma segura
            </h1>
            <p className="text-gray-400 text-lg">
              Elige tu método de pago preferido y completa tu transacción con total confianza
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Payment Methods */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Métodos de Pago</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all ${
                    paymentMethod === method.id
                      ? "border-red-600 bg-red-600/5"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <div className="flex items-center mb-3">
                    {method.icon}
                    <h3 className="font-bold ml-3">{method.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Form */}
          {!showConfirmation ? (
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-800">
              <h2 className="text-2xl font-bold mb-6">Información de Pago</h2>
              
              {paymentMethod === "credit-card" && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-5">
                    <label className="block text-sm font-medium mb-2">Número de tarjeta</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="**** **** **** ****"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
                        maxLength={19}
                        required
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                        <div className="w-8 h-5 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-sm font-medium mb-2">Fecha de expiración</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="***"
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
                        maxLength={3}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Nombre en la tarjeta</label>
                    <input
                      type="text"
                      placeholder="Nombre Completo"
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Procesar Pago
                    <FaCreditCard className="ml-2" />
                  </button>
                </form>
              )}

              {paymentMethod === "cash" && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mx-auto mb-4">
                    <FaMoneyBillWave className="text-red-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pago en Efectivo</h3>
                  <p className="text-gray-400 mb-6">
                    Puedes realizar el pago en efectivo al momento de recoger tu servicio o producto en nuestras instalaciones.
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="font-bold">Dirección:</p>
                    <p>Calle 123 # 45-67, Bogotá, Colombia</p>
                    <p className="mt-2">Horario: Lunes a Viernes 8:00 AM - 5:00 PM</p>
                  </div>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Ver en Mapa
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              )}

              {paymentMethod === "mobile" && (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600/10 mx-auto mb-4">
                    <FaMobileAlt className="text-red-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Transferencia Móvil</h3>
                  <p className="text-gray-400 mb-6">
                    Realiza tu pago mediante Nequi, Davivienda o Bancolombia con los siguientes datos:
                  </p>
                  <div className="bg-gray-800 rounded-lg p-4 mb-6">
                    <p className="font-bold">Número de Teléfono:</p>
                    <p className="text-2xl font-bold text-red-500">+57 321 456 7890</p>
                    <p className="mt-2">Nombre: Diesel & Turbos SAS</p>
                  </div>
                  <button
                    onClick={() => setShowConfirmation(true)}
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Confirmar Pago
                    <FaCheckCircle className="ml-2" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Confirmation Message
            <div className="bg-gray-900 rounded-2xl p-8 text-center border border-green-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mx-auto mb-4">
                <FaCheckCircle className="text-green-500 text-3xl" />
              </div>
              <h2 className="text-2xl font-bold mb-3">¡Pago Exitoso!</h2>
              <p className="text-gray-400 mb-6">
                Tu pago ha sido procesado correctamente. Recibirás un comprobante en tu correo electrónico en unos minutos.
              </p>
              <div className="bg-gray-800 rounded-lg p-4 mb-6">
                <p className="font-bold">Número de Confirmación:</p>
                <p className="text-xl text-red-500">PAY-2023-789456</p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Volver al Inicio
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          )}

          {/* Security Information */}
          <div className="mt-10 p-5 bg-gray-900 rounded-xl border border-gray-800">
            <div className="flex items-start">
              <FaLock className="text-red-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">Seguridad de Pagos</h3>
                <p className="text-gray-400 text-sm">
                  Todos los pagos se procesan a través de pasarelas de pago seguras con encriptación SSL de 256 bits. 
                  No almacenamos información sensible de tus métodos de pago. Tu seguridad es nuestra prioridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;