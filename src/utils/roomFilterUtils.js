const sortRoomsByPrice = (order) => (a, b) => 
  order === "asc" ? a.nightPrice - b.nightPrice : b.nightPrice - a.nightPrice;

const roomFilter = (data, price, type, order) => {
  const filtered = data.filter((room) => {
    const hasType = type.includes(room.type);
    const hasPrice = price >= room.nightPrice;
    return hasType && hasPrice;
  });
  return filtered.sort(sortRoomsByPrice(order));
};

export default roomFilter;
