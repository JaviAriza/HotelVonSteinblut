import React, { useState, useEffect } from "react";

const CurrentBookings = () => {
  let existingBookings = JSON.parse(localStorage.getItem("confirmedBooking"));
  if (!Array.isArray(existingBookings)) {
    existingBookings = [];
  }

  return (
    <div className="text-white p-6 font-serif text-center">
      {existingBookings.length > 0 && (
        <h3 className="text-3xl font-bold mb-6">CURRENT BOOKINGS</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {existingBookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};

const BookingCard = ({ booking }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (booking.photo.length > 1) {
      const intervalId = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % booking.photo.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [booking.photo.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % booking.photo.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + booking.photo.length) % booking.photo.length);
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornament Separator"
        className="mx-auto w-1/3 h-auto"
      />
      <div className="relative w-full h-60 bg-gray-700 overflow-hidden rounded-lg mt-4">
        <div
          className="w-full h-full flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentImage * 100}%)` }}
        >
          {booking.photo.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Room"
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: "100%" }}
            />
          ))}
        </div>
        {booking.photo.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              &#8249;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      <div className="text-gray-300 mt-4 text-left p-4">
        <p className="text-lg font-bold">Number: FDFSFS349589</p>
        <p>Type: {booking.type}</p>
        <p>Check In: {booking.date_checking}</p>
        <p>Check Out: {booking.date_checkout}</p>
        <p>Price: ${booking.price}</p>
      </div>
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
        alt="Ornament Separator"
        className="mx-auto w-1/3 h-auto mt-4"
      />
    </div>
  );
};

export default CurrentBookings;
