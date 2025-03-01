import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");
    
    try {
      await emailjs.send(
        "service_od4wgvv", 
        "template_25hofgt", 
        formData,
        "iJOFnkl0pueJEOyfu" 
      );
      setStatus("Correo enviado con éxito.");
    } catch (error) {
      setStatus("Error al enviar el correo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="relative w-96 h-[28rem]">
        <div className="absolute w-full h-full bg-gradient-to-b from-red-800 to-black p-8 rounded-lg shadow-lg border-red-900 border-2">
          <h2 className="text-2xl font-bold mb-6 text-white text-center">Contact us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                style={{ backgroundColor: 'white' }}
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="mail">
                Email
              </label>
              <input
                type="email"
                name="mail"
                id="mail"
                style={{ backgroundColor: 'white' }}
                placeholder="Your email"
                value={formData.mail}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                style={{ backgroundColor: 'white' }}
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
            >
              Send
            </button>
          </form>
          {status && <p className="mt-2 text-center text-gray-300 text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
}