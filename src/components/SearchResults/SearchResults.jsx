import Filter from "../Filter/Filter";
import roomFilter from "../../utils/roomFilterUtils";
import { useFetchRooms } from "../../hooks/useFetchRooms";
import CardInfo from "../CardInfo/CardInfo";
import { useState } from "react";

const SearchResults = () => {
  const { rooms, loading, error } = useFetchRooms();
  const [results, setResults] = useState([]);

  const handleFilter = (price, selectedType, order) => {
    const filtered = roomFilter(rooms, price, selectedType, order);
    setResults(filtered);
  };

  //Crear Componentes
  //if (isloading) return <Loading />;
  //if (fail) return <Fail message={fail} />;

  return (
    <div className="w-screen bg-[#1a1a1a] pb-[10%]">
      <Filter filterUtil={handleFilter} />
      <div className="results-container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-[5%] justify-center">
        {results.length > 0 ? (
          <>
            {results.map((result, index) => (
              <CardInfo key={index} room={result} />
            ))}
          </>
        ) : (
          <>
            {rooms.map((room, index) => (
              <CardInfo key={index} room={room} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
