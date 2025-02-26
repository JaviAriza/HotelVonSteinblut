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
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Enviar Mensaje</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <input
          type="email"
          name="mail"
          placeholder="Tu email"
          value={formData.mail}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
      {status && <p className="mt-2 text-center">{status}</p>}
    </div>
  );
}
