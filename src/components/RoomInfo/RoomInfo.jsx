const RoomInfo = ({ room, isOpen }) => {
  return (
    <div className={`flex justify-center items-center w-full backdrop-blur-md h-[20%] rounded-xl absolute bottom-0 left-0 pointer-events-none transition-all ${isOpen? "translate-y-[100%]": "-translate-y-0"}`}>
      <div className="flex items-center flex-wrap gap-2">
        {room.features.wifi === "yes" && (
          <span className=" bg-gray-200 text-black px-4 py-1 rounded-lg text-md">
            Wifi
          </span>
        )}
        {room.features.tv === "yes" && (
          <span className=" bg-gray-200 text-black px-4 py-1 rounded-lg text-md">
            TV
          </span>
        )}
        {room.features.airConditioning === "yes" && (
          <span className="bg-gray-200 text-black px-4 py-1 rounded-lg text-md">
            Air Conditioning
          </span>
        )}
      </div>
    </div>
  );
};

export default RoomInfo;
