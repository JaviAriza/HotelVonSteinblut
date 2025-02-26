import data from "../data/rooms.json";

const roomFilter = (price, type) => {
  const filtered = data.filter((room) => {
    const hasType = type ? room.type === type : true;
    const hasPrice = room.nightPrice <= price;
    return hasType && hasPrice;
  });
  return filtered;
};

export default roomFilter;
