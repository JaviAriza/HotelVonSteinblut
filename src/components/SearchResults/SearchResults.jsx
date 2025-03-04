import Filter from "../Filter/Filter";
import roomFilter from "../../utils/roomFilterUtils";
import { useFetchRooms } from "../../hooks/useFetchRooms";
import CardInfo from "../CardInfo/CardInfo";
import { useState } from "react";

const SearchResults = () => {
  const { rooms, loading, error } = useFetchRooms();
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 8;

  const [hasOpenFilter, setHasOpenFilter] = useState(false);

  const handleFilter = (price, selectedType, order) => {
    const filtered = roomFilter(rooms, price, selectedType, order);
    setResults(filtered);
    setCurrentPage(1);
  };

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = (results.length > 0 ? results : rooms).slice(
    indexOfFirstRoom,
    indexOfLastRoom
  );

  const totalPages = Math.ceil(
    (results.length > 0 ? results.length : rooms.length) / roomsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  window.scrollTo({ top: 90, behavior: "smooth" });
  return (
    <div className="w-screen bg-[#1a1a1a] py-[10%] relative">
      <button
        className="fixed left-1/2 -translate-1/2 top-[4%] z-600 rounded-xl w-[150px] py-2 flex items-center justify-center gap-2"
        onClick={() => {
          setHasOpenFilter((prev) => !prev);
        }}
      >
        <img className="size-5"
          src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1741049483/filtrar_1_jhc8bi.png"
          alt="filter"
        ></img>
        Filter
      </button>
      <Filter
        filterUtil={handleFilter}
        openFilter={hasOpenFilter}
        changeFilter={setHasOpenFilter}
      />

      <div className="results-container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-[5%] mx-auto justify-center">
        {currentRooms.map((room, index) => (
          <CardInfo key={index} room={room} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === i + 1 ? "bg-red text-white" : "bg-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
