// src/pages/ContactSimple.tsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// 🔑 Configuración con Gmail en EmailJS
const EMAILJS_PUBLIC_KEY = '_glOK3OQFHUeXoSxA'; // tu public key
const EMAILJS_SERVICE_ID = 'service_pq1jlp8';   // tu nuevo Gmail service ID
const EMAILJS_TEMPLATE_ID = 'template_571hqtm'; // tu template ID

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const ContactSimple = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          // 👇 Ajusta estos nombres EXACTAMENTE a los parámetros de tu template en EmailJS
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setStatus('idle');
      }, 3000);

    } catch (error) {
      console.error('Error al enviar:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="pt-24 max-w-md mx-auto bg-white p-6">
      <h1 className="text-xl font-bold text-center mb-4">Contacto</h1>

      {status === 'success' && (
        <div className="mb-4 p-2 bg-green-100 text-green-700 rounded text-center">
          ¡Enviado correctamente!
        </div>
      )}

      {status === 'error' && (
        <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-center">
          Error al enviar
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          required
          rows={3}
          className="w-full p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={`w-full py-2 rounded text-white ${
            status === 'sending' ? 'bg-gray-400' : 'bg-red-600'
          }`}
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ContactSimple;
