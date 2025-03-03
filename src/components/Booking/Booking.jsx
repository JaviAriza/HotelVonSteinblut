import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    if (storedReservation) {
      setStartDate(dayjs(storedReservation.checkIn).toDate());
      setEndDate(dayjs(storedReservation.checkOut).toDate());
    }
  }, []);

  const handleSearchClick = () => {
    if (!startDate || !endDate) {
      alert("Selecciona fechas antes de continuar");
      return;
    }
    const reservationData = {
      checkIn: dayjs(startDate).format("YYYY-MM-DD"),
      checkOut: dayjs(endDate).format("YYYY-MM-DD"),
    };
    localStorage.setItem("reservation", JSON.stringify(reservationData));

    navigate("/reservations");
  };

  return (
    <div className="relative left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-gray-75 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg h-auto max-w-md mx-4 my-8">
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
        Make your reservation!
      </h2>
      <div className="bg-black p-4 rounded-lg w-full">
        <label className="text-white block mb-2 text-center text-lg">
          Select the dates
        </label>

        <div className="flex flex-row gap-2">
          {/* Fecha de entrada */}
          <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Entrada"
              className="w-full p-2 text-sm focus:outline-none bg-white text-black"
            />
          </div>

          {/* Fecha de salida */}
          <div className="flex items-center bg-white rounded-md overflow-hidden w-1/2">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
              dateFormat="dd/MM/yyyy"
              placeholderText="Salida"
              className="w-full p-2 text-sm focus:outline-none bg-white text-black"
            />
          </div>
        </div>

        {/* Botón de búsqueda */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleSearchClick}
            className="bg-red-700 text-white px-8 py-1 hover:bg-black transition-colors rounded-md text-sm border border-transparent hover:border-red-700 hover:border-1"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
