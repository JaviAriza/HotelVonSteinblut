import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { format } from "date-fns";

const BookingSummary = ({ checkIn, checkOut, selectedRoom }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [roomDetails, setRoomDetails] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    if (checkIn && checkOut && selectedRoom) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nightsCount = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      setNights(nightsCount);

      fetch("/data/rooms.json")
        .then((response) => response.json())
        .then((roomsData) => {
          const room = roomsData.find((room) => room.type === selectedRoom);
          if (room) {
            setRoomDetails(room);
            setTotalPrice(nightsCount * room.pricePerNight);
          }
        })
        .catch((error) => console.error("Error cargando rooms.json", error));
    }
  }, [checkIn, checkOut, selectedRoom]);

  const applyDiscount = () => {
    if (discountCode === "HOTEL10") {
      setDiscount(totalPrice * 0.10); // 10% de descuento
      Swal.fire("Descuento aplicado", "Has recibido un 10% de descuento", "success");
    } else if (discountCode === "VIP25") {
      setDiscount(25); // Descuento fijo de 25€
      Swal.fire("Descuento aplicado", "Has recibido un descuento de 25€", "success");
    } else {
      Swal.fire("Código inválido", "El código ingresado no es válido", "error");
      setDiscount(0);
    }
  };

  const handlePayment = () => {
    Swal.fire({
      title: "Pago realizado con éxito",
      text: `Has reservado la habitación ${roomDetails?.type} del ${format(
        new Date(checkIn),
        "dd/MM/yyyy"
      )} al ${format(new Date(checkOut), "dd/MM/yyyy")} por un total de ${totalPrice - discount}€.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Resumen de la reserva</h2>
      {roomDetails && (
        <>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2">
              <strong>Entrada:</strong> {format(new Date(checkIn), "EEEE, d MMM yyyy")}
            </p>
            <p className="mb-2">
              <strong>Salida:</strong> {format(new Date(checkOut), "EEEE, d MMM yyyy")}
            </p>
            <p className="mb-2">
              <strong>Tu reserva:</strong> {nights} noches, 1 hab ({roomDetails.type})
            </p>
            <a href="#" className="text-blue-400 text-sm">
              Cambia tu selección
            </a>
            <div className="mt-4 flex gap-2">
              <input
                type="text"
                placeholder="Código de descuento"
                className="p-2 rounded text-black w-full"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
              />
              <button onClick={applyDiscount} className="bg-gray-700 px-4 py-2 rounded">
                Aplicar
              </button>
            </div>
          </div>
          <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <p>
              <strong>Precio base:</strong> {totalPrice}€
            </p>
            <p>
              <strong>Código descuento:</strong> -{discount}€
            </p>
            <p className="text-xl font-bold mt-2">Total: {totalPrice - discount}€</p>
          </div>
          <button
            className="w-full bg-red-700 text-white p-3 rounded mt-4"
            onClick={handlePayment}
          >
            Pagar ahora {totalPrice - discount}€
          </button>
        </>
      )}
    </div>
  );
};

export default BookingSummary;


