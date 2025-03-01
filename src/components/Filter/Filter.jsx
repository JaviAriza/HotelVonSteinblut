import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const Filter = ({ filterUtil }) => {
  const [selectedTypes, setSelectedTypes] = useState(["standard", "family", "suite"]);
  const [order, setOrder] = useState("");
  const [maxPrice, setMaxPrice] = useState(600);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  useEffect(() => {
    const storedReservation = JSON.parse(localStorage.getItem("reservation"));
    if (storedReservation) {
      setCheckIn(dayjs(storedReservation.checkIn).toDate());
      setCheckOut(dayjs(storedReservation.checkOut).toDate());
    }
  }, []);

  useEffect(() => {
    if (checkIn && checkOut) {
      const reservationData = {
        checkIn: dayjs(checkIn).format("YYYY-MM-DD"),
        checkOut: dayjs(checkOut).format("YYYY-MM-DD"),
      };
      localStorage.setItem("reservation", JSON.stringify(reservationData));
    }
  }, [checkIn, checkOut]);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterUtil(maxPrice, selectedTypes, order, checkIn, checkOut);
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedTypes((prevSelected) =>
      checked ? [...prevSelected, value] : prevSelected.filter((t) => t !== value)
    );
  };

  return (
    <div className="w-full h-[20%] pt-[10%] mb-[5%]">
      <form id="filter-form" onSubmit={handleSubmit}>
        <div className="flex gap-3 flex-col sm:flex-row items-center justify-center">
          <div className="flex gap-5">
            <span className="text-white">${maxPrice}</span>
            <input
              type="range"
              name="price"
              min="20"
              max="1500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="accent-red-600"
            />
          </div>

          <div className="flex items-center gap-2">
            {["standard", "family", "suite"].map((roomType) => (
              <div key={roomType}>
                <label>
                  <input
                    className="mx-1 accent-red-600"
                    type="checkbox"
                    name="type"
                    value={roomType}
                    checked={selectedTypes.includes(roomType)}
                    onChange={handleTypeChange}
                  />
                  {roomType}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center">
            <label className="text-white">Check-in:</label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              className="p-1 border rounded bg-white text-black"
            />
            <label className="text-white">Check-out:</label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              minDate={checkIn || new Date()}
              dateFormat="dd/MM/yyyy"
              className="p-1 border rounded bg-white text-black"
            />
          </div>
          <div>
            <label className="mr-2">Sort by Price:</label>
            <select
              className="p-1 border rounded bg-white"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>

          <button className="bg-red-900 text-white px-4 py-1 rounded-3xl border-red-900 border-2 hover:bg-black hover:text-white transition">
            Apply filters
          </button>
        </div>
      </form>
    </div>
  );
};

Filter.propTypes = {
  filterUtil: PropTypes.func,
};

export default Filter;
