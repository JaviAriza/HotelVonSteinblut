import { useState, useEffect } from "react"; 
import Swal from "sweetalert2";
import { format } from "date-fns";

const BookingSummary = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountCode, setDiscountCode] = useState("");

  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    const storedRoom = JSON.parse(localStorage.getItem("selectedRoom"));

    if (storedReservation && storedRoom && storedRoom.nightPrice) {
      setCheckIn(storedReservation.checkIn);
      setCheckOut(storedReservation.checkOut);
      setSelectedRoom(storedRoom);

      const checkInDate = new Date(storedReservation.checkIn);
      const checkOutDate = new Date(storedReservation.checkOut);

      if (checkOutDate > checkInDate) {
        const nightsCount = Math.max(0, (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
        setNights(nightsCount);
        setTotalPrice(nightsCount * storedRoom.nightPrice);
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    }
  }, []);

  const applyDiscount = () => {
    let discountValue = 0;

    if (discountCode === "HOTEL10") {
      discountValue = totalPrice * 0.10;
      Swal.fire("Descuento aplicado", "Has recibido un 10% de descuento", "success");
    } else if (discountCode === "VIP25") {
      discountValue = 25;
      Swal.fire("Descuento aplicado", "Has recibido un descuento de 25€", "success");
    } else {
      Swal.fire("Código inválido", "El código ingresado no es válido", "error");
    }

    setDiscount(discountValue);
  };

  const handlePayment = () => {
    const finalPrice = Math.max(0, totalPrice - discount);

    Swal.fire({
      title: "Pago realizado con éxito",
      text: `Has reservado la habitación ${selectedRoom?.type} del ${format(
        new Date(checkIn),
        "dd/MM/yyyy"
      )} al ${format(new Date(checkOut), "dd/MM/yyyy")} por un total de ${finalPrice}€.`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white text-base p-6 rounded-lg shadow-lg my-[24%]">
      <h2 className="text-2xl font-semibold mb-4">Resumen de la reserva</h2>
      {selectedRoom ? (
        <>
          <div className="p-4 rounded-lg">
            <p className="mb-2">
              <strong>Entrada:</strong> {format(new Date(checkIn), "EEEE, d MMM yyyy")}
            </p>
            <p className="mb-2">
              <strong>Salida:</strong> {format(new Date(checkOut), "EEEE, d MMM yyyy")}
            </p>
            <p className="mb-2">
              <strong>Tu reserva:</strong> {nights} noches, 1 hab ({selectedRoom.type})
            </p>
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
            <p><strong>Precio base:</strong> {totalPrice.toFixed(2)}€</p>
            <p><strong>Código descuento:</strong> {discount.toFixed(2)}€</p>
            <p className="text-xl font-bold mt-2">Total: {Math.max(0, totalPrice - discount).toFixed(2)}€</p>
          </div>
          <button className="w-full bg-red-700 text-black p-3 rounded mt-4" onClick={handlePayment}>
            Pagar ahora {Math.max(0, totalPrice - discount).toFixed(2)}€
          </button>
        </>
      ) : (
        <p className="text-center text-black mt-4">No hay datos de reserva disponibles.</p>
      )}
    </div>
  );
};

export default BookingSummary;



