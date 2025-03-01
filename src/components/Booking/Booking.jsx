import { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import dayjs from "dayjs";
>>>>>>> d29e241 (fix: add dayjs to booking)

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const datePickerRef = useRef(null);

<<<<<<< HEAD
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    // Cerrar el calendario cuando ambas fechas sean seleccionadas
    if (start && end) {
      setTimeout(() => setShowCalendar(false), 200); 
=======
  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    if (storedReservation) {
      setStartDate(dayjs(storedReservation.checkIn).toDate());
      setEndDate(dayjs(storedReservation.checkOut).toDate());
>>>>>>> d29e241 (fix: add dayjs to booking)
    }
  };

  const handleSearchClick = () => {
<<<<<<< HEAD
    console.log("Fecha de entrada:", startDate);
    console.log("Fecha de salida:", endDate);
=======
    if (!startDate || !endDate) {
      alert("Selecciona fechas antes de continuar");
      return;
    }

    const reservationData = {
      checkIn: dayjs(startDate).format("YYYY-MM-DD"),
      checkOut: dayjs(endDate).format("YYYY-MM-DD"),
    };
    localStorage.setItem("reservation", JSON.stringify(reservationData));

    navigate("/rooms"); // 🔹 Redirige a la página de habitaciones
>>>>>>> d29e241 (fix: add dayjs to booking)
  };

  return (
<div className="relative left-1/2 transform -translate-x-1/2 flex flex-col items-center bg-gray-75 bg-opacity-50 backdrop-blur-sm p-6 rounded-xl shadow-lg h-auto max-w-md mx-4 my-8">      <img
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
<<<<<<< HEAD
              onChange={(date) => setStartDate(date)}
=======
              onChange={date => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
>>>>>>> d29e241 (fix: add dayjs to booking)
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
<<<<<<< HEAD
              onChange={(date) => setEndDate(date)}
=======
              onChange={date => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || new Date()}
>>>>>>> d29e241 (fix: add dayjs to booking)
              dateFormat="dd/MM/yyyy"
              placeholderText="Salida"
              className="w-full p-2 text-sm focus:outline-none"
              onFocus={() => setShowCalendar(true)}
              readOnly
            />
          </div>
        </div>

        {/* Botón de búsqueda */}
        <div className="flex justify-center mt-4">
<<<<<<< HEAD
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
=======
          <Link to={"/reservations"}>
            <button
              onClick={handleSearchClick}
              className="bg-red-700 text-white px-8 py-1 hover:bg-black transition-colors rounded-md text-sm border border-transparent hover:border-red-700 hover:border-1"
            >
              Buscar
            </button>
          </Link>
>>>>>>> d29e241 (fix: add dayjs to booking)
        </div>
      </div>
    </div>
  );
};

export default Booking;
<<<<<<< HEAD


=======
>>>>>>> d29e241 (fix: add dayjs to booking)
