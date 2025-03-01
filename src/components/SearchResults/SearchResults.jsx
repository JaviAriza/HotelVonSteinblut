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


  const totalPages = Math.ceil((results.length > 0 ? results.length : rooms.length) / roomsPerPage);

 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  window.scrollTo({ top: 90, behavior: "smooth"});
  return (
    <div className="w-screen bg-[#1a1a1a] pb-[10%]">
  
      <Filter filterUtil={handleFilter} />

      
      <div className="results-container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-[5%] justify-center">
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
                currentPage === i + 1 ? "bg-red text-white" : "bg-gray-300"
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
