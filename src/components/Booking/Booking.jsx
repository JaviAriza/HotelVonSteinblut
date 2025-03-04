import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";
import Swal from "sweetalert2";

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
      Swal.fire({
            title: `Please enter date before continuing`,
            icon: "error",
            background: "#1e1e1e",
            color: "#ffffff",
            confirmButtonColor: "#ff4d4d",
          })
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
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="relative bg-opacity-50 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-lg w-full mx-auto my-12">
        
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
          alt="Ornamento"
          className="absolute top-0 left-0 w-16 h-16"
        />
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
          alt="Ornamento"
          className="absolute top-0 right-0 w-16 h-16 rotate-90"
        />
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
          alt="Ornamento"
          className="absolute bottom-0 right-0 w-16 h-16 rotate-180"
        />
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
          alt="Ornamento"
          className="absolute bottom-0 left-0 w-16 h-16 -rotate-90"
        />

        <h2 className="text-white text-2xl mb-4 font-semibold text-center">
          Make your reservation!
        </h2>

        <div className="bg-black p-4 rounded-lg w-full">
          <label className="text-white block mb-2 text-center text-lg">
            Select the dates
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex items-center bg-white rounded-md overflow-hidden w-full sm:w-1/2">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                placeholderText="Entrada"
                className="w-full p-2 text-sm focus:outline-none bg-white text-black text"
              />
            </div>

            <div className="flex items-center bg-white rounded-md overflow-hidden w-full sm:w-1/2">
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

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSearchClick}
              className="bg-red-700 text-white px-8 py-2 hover:bg-black transition-colors rounded-md text-sm border border-transparent hover:border-red-700"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;

