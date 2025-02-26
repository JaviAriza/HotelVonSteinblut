import Cookies from 'js-cookie';
export const calculateStay = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const difference = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      const cookie = Cookies.get('nights');
      if (difference != cookie){
          Cookies.set('nights', difference);
      }
      return difference > 0 ? difference : 0;
    }
    return 0;
  };
  