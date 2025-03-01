import { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ filterUtil }) => {
  const [selectedTypes, setSelectedTypes] = useState(["standard", "family", "suite"]);
  const [order, setOrder] = useState("");
  const [maxPrice, setMaxPrice] = useState(600);

  const handleSubmit = (e) => {
    e.preventDefault();
    filterUtil(maxPrice, selectedTypes, order);
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;

    setSelectedTypes((prevSelected) =>
      checked
        ? [...prevSelected, value]
        : prevSelected.filter((t) => t !== value)
    );
  };

  return (
    <>
      <div className="w-full h-[20%] pt-[10%] mb-[5%]">
        <form id="filter-form" method="" action="" onSubmit={handleSubmit}>
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
            <div className="">
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
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filterUtil: PropTypes.func,
};
