import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-screen top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-gray-75 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl shadow-lg  h-[300px] max-w-md mx-4 my-8">
      <h2 className="text-white text-2xl mb-6 font-semibold">
        ¡Haz tu reserva!
      </h2>
      <div className="bg-black p-5 rounded-lg w-full">
        <label className="text-white block mb-3 text-center text-lg">
          Fecha
        </label>
        <div className="flex items-center bg-white rounded-md overflow-hidden">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/aaaa"
            className="w-full p-3 focus:outline-none flex-grow"
          />
          <button className="bg-red-700 text-white px-6 py-3 hover:bg-black hover:text-red-800 transition-colors flex-shrink-0 ml-auto">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
