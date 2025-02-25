import data from "../components/Rooms/rooms.json";

const roomFilter = (price, type) => {
  const filtered = data.filter((room) => {
    const hasType = type ? room.tipo === type : true;
    const hasPrice = room.precioNoche <= price;
    console.log(hasPrice, hasType);
    return hasType && hasPrice;
  });
  return filtered;
};

export default roomFilter;
