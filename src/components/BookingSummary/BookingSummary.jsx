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
      Swal.fire({
        title: "Discount applied",
        text: "You received a 10% discount.",
        icon: "success",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonColor: "#ff4d4d",
      });
    } else if (discountCode === "VIP25") {
      discountValue = 25;
      Swal.fire({
        title: "Discount applied",
        text: "You received a €25 discount.",
        icon: "success",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonColor: "#ff4d4d",
      });
    } else {
      Swal.fire({
        title: "Invalid code",
        text: "The entered code is not valid.",
        icon: "error",
        background: "#1e1e1e",
        color: "#ffffff",
        confirmButtonColor: "#ff4d4d",
      });
    }

    setDiscount(discountValue);
  };

  const handlePayment = () => {
    const finalPrice = Math.max(0, totalPrice - discount);

    Swal.fire({
      title: "Payment successful",
      html: `
        <p style="font-size: 16px; margin-bottom: 10px;">
          You have booked the <strong>${selectedRoom?.type}</strong> room from 
          <strong>${format(new Date(checkIn), "dd/MM/yyyy")}</strong> to 
          <strong>${format(new Date(checkOut), "dd/MM/yyyy")}</strong>.
        </p>
        <p style="font-size: 18px; font-weight: bold;">Total paid: €${finalPrice}</p>
      `,
      icon: "success",
      background: "#1e1e1e",
      color: "#ffffff",
      confirmButtonColor: "#ff4d4d",
      confirmButtonText: "Go to homepage",
    }).then(() => {
      window.location.href = "/"; 
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="mt-16 mb-12 ml-4 mr-4 w-full max-w-lg bg-gradient-to-b from-red-800 to-black border-2 border-red-800 text-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Booking Summary</h2>
        {selectedRoom ? (
          <>
            <div className="p-6 text-black rounded-lg bg-white mb-6 border-2 border-black">
              <p className="mb-2"><strong>Check-in:</strong> {format(new Date(checkIn), "EEE, d MMM yyyy")}</p>
              <p className="mb-2"><strong>Check-out:</strong> {format(new Date(checkOut), "EEE, d MMM yyyy")}</p>
              <p className="mb-2"><strong>Your stay:</strong> {nights} nights, 1 room ({selectedRoom.type})</p>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="p-2 rounded text-black border-2 border-black w-full"
                  value={discountCode}
                  onChange={(e) => setDiscountCode(e.target.value)}
                />
                <button onClick={applyDiscount} className="bg-red-700 px-4 py-2 rounded text-white hover:bg-black border-2 border-red-700 transition duration-300">
                  Apply
                </button>
              </div>
            </div>
            <div className="bg-white text-black p-6 rounded-lg mb-6 border-2 border-gray-700">
              <p><strong>Base price:</strong> €{totalPrice.toFixed(2)}</p>
              <p><strong>Discount code:</strong> €{discount.toFixed(2)}</p>
              <p className="text-xl font-bold mt-2">Total: €{Math.max(0, totalPrice - discount).toFixed(2)}</p>
            </div>
            <button
              className="w-full bg-red-700 text-white p-4 rounded-lg text-lg hover:bg-black border-2 border-red-700 transition duration-300"
              onClick={handlePayment}
            >
              Pay now €{Math.max(0, totalPrice - discount).toFixed(2)}
            </button>
          </>
        ) : (
          <p className="text-center text-white mt-4">No booking data available.</p>
        )}
      </div>
    </div>
  );
};

export default BookingSummary;


