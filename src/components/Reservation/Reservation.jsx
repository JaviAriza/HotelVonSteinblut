import React, { useState, useEffect } from "react";
import BookingSummary from "../BookingSummary/BookingSummary";

const Reservation = () => {
  const [reservationData, setReservationData] = useState(null);

  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    console.log("Datos de reserva cargados:", storedReservation); // Verifica si hay datos
    if (storedReservation) {
      setReservationData(storedReservation);
    }
  }, []);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-4 text-center">Detalles de tu reserva</h1>
      {reservationData && reservationData.checkIn && reservationData.checkOut ? (
        <BookingSummary
          checkIn={reservationData.checkIn}
          checkOut={reservationData.checkOut}
          selectedRoom="Standard"
        />
      ) : (
        <p className="text-center text-white mt-4">No hay datos de reserva disponibles.</p>
      )}
    </div>
  );
};

export default Reservation;

