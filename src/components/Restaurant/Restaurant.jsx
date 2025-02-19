import React from "react";

export default function Restaurant() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="text-white w-full max-w-4xl px-4 text-center">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl font-semibold border-b border-gray-500 pb-2">
          VON STEINBLUT RESTAURANT
        </h2>

        {/* Imagen con borde difuminado */}
        <div className="mt-6 relative">
          <img
            src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
            alt="Von Steinblut Restaurant"
            className="w-full h-auto object-cover rounded-lg shadow-lg 
              brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 rounded-lg"></div>
        </div>

        {/* Botones */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-800 transition">
            Info
          </button>
          <button className="bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-800 transition">
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
