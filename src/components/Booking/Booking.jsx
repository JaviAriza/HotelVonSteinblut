import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calculateStay } from "../../utils/calculateStayUtil";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const datePickerRef = useRef(null);
  
  const [nights, setNights] = useState(0);

  useEffect(() => {
    setNights(calculateStay(startDate, endDate));
  }, [startDate, endDate]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Cerrar el calendario cuando ambas fechas sean seleccionadas
    if (start && end) {
      setTimeout(() => setShowCalendar(false), 200); 
    }
  };

  const handleSearchClick = () => {
    console.log("Fecha de entrada:", startDate);
    console.log("Fecha de salida:", endDate);
  };

  return (
    <div className="relative left-1/2 transform -translate-1/2 flex flex-col items-center bg-gray-75 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg h-auto max-w-md mx-4 my-8">
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornamento"
        className="absolute top-0 left-0 w-20 h-20"
      />
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornamento"
        className="absolute top-0 right-0 w-20 h-20 rotate-90"
      />
       <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornamento"
        className="absolute bottom-0 right-0 w-20 h-20 rotate-90 scale-x-[-1]"
      />
       <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornamento"
        className="absolute bottom-0 left-0 w-20 h-20 rotate-[-90deg]"
      />
      <h2 className="text-white text-2xl mb-4 font-semibold">
        ¡Haz tu reserva!
      </h2>
      <div className="bg-black p-4 rounded-lg w-full">
        <label className="text-white block mb-2 text-center text-lg">
          Selecciona las fechas
        </label>

        <div className="flex flex-row gap-2">
          {/* Fecha de entrada */}
          <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
            <DatePicker
              ref={datePickerRef}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Entrada"
              className="w-full p-2 text-sm focus:outline-none"
              onFocus={() => setShowCalendar(true)}
              readOnly
            />
          </div>

          {/* Fecha de salida */}
          <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="Salida"
              className="w-full p-2 text-sm focus:outline-none"
              onFocus={() => setShowCalendar(true)}
              readOnly
            />
          </div>
        </div>
        
        {nights > 0 && (
         <p className="text-white text-center mt-4">
         Noches de estadía: {nights}
          </p>
        )}

        {/* Botón de búsqueda */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSearchClick}
            className="bg-red-700 text-white px-8 py-1 hover:bg-black transition-colors rounded-md text-sm border border-transparent hover:border-red-700 hover:border-1"
          >
            Buscar
          </button>
        </div>

        {/* Calendario flotante con animación */}
        <div
          className={`transition-all duration-300 ease-in-out transform ${
            showCalendar ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          {showCalendar && (
            <div className="mt-4">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                onCalendarClose={() => setShowCalendar(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;


