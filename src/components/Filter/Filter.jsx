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
    <div className="w-full flex justify-center mt-14">
      <div className="mb-10 mt-10 bg-gradient-to-b from-red-800 to-black border-2 border-red-800 rounded-lg p-6 w-4/5 lg:w-2/5 shadow-lg">
        <form id="filter-form" onSubmit={handleSubmit} className="flex flex-col items-center space-y-6">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
              <label className="text-white">Check-in:</label>
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                minDate={new Date()}
                dateFormat="dd/MM/yyyy"
                className="px-4 py-2 border rounded bg-white text-black w-full lg:w-auto"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-2 items-center w-full">
              <label className="text-white">Check-out:</label>
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                minDate={checkIn || new Date()}
                dateFormat="dd/MM/yyyy"
                className="px-4 py-2 border rounded bg-white text-black w-full lg:w-auto"
              />
            </div>
          </div>

          <div className="w-full flex flex-col items-center">
            <label className="text-white text-lg font-semibold">Max Price: €{maxPrice}</label>
            <input
              type="range"
              min="20"
              max="1500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="accent-red-800 w-full"
            />
          </div>

          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <label className="text-white text-lg font-semibold">Sort by Price:</label>
              <select
                className="px-4 py-2 border rounded bg-white w-full lg:w-auto"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              {["standard", "family", "suite"].map((roomType) => (
                <label key={roomType} className="text-white flex items-center">
                  <input
                    className="mr-2 accent-red-800"
                    type="checkbox"
                    value={roomType}
                    checked={selectedTypes.includes(roomType)}
                    onChange={handleTypeChange}
                  />
                  {roomType.charAt(0).toUpperCase() + roomType.slice(1)}
                </label>
              ))}
            </div>
          </div>

          <button className="bg-red-800 text-white px-6 py-2 rounded-lg border-red-900 border-2 hover:bg-black hover:text-white transition w-full lg:w-auto">
            Apply Filters
          </button>
        </form>
      </div>
    </div>
  );
};

Filter.propTypes = {
  filterUtil: PropTypes.func,
};

export default Filter;

