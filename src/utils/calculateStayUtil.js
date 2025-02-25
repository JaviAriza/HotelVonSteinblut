export const calculateStay = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const difference = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      return difference > 0 ? difference : 0;
    }
    return 0;
  };
  