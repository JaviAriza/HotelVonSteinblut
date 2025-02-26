import { useState } from "react";

const Filter = ({filterUtil}) => {
  const [type, setType] = useState("estandar");
  const [price, setPrice] = useState(600);

  const handleSubmit = (e) =>{
        e.preventDefault();
        filterUtil(price, type);
  }

  return (
    <>
      <div className="w-full h-[20%]">
        <form id="filter-form" method="" action="" onSubmit={handleSubmit}>
          <div className="flex gap-3 items-center justify-center">
            <span className="text-white">${price}</span>
            <input
              type="range"
              name="price"
              min="15"
              max="1000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="accent-red-600"
            />
            {["estandar", "familiar", "suit"].map((roomType) => (
              <div key={roomType}>
                <label>
                  <input className="mx-1 accent-red-600"
                    type="radio"
                    name="type"
                    value={roomType}
                    checked={type === roomType}
                    onChange={(e) => setType(e.target.value)}
                  />
                  {roomType}
                </label>
              </div>
            ))}
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
