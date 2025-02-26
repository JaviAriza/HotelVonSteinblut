import Filter from "../Filter/Filter";
import roomFilter from "../../utils/roomFilterUtils";
import CardInfo from "../CardInfo/CardInfo";
import { useState } from "react";

const SearchResults = () => {
  const [results, setResults] = useState([]);

  const handleFilter = (price, type) => {
    const filtered = roomFilter(price, type);
    setResults(filtered);
  };

  return (
    <div className="w-screen bg-black pb-[10%]">
      <Filter filterUtil={handleFilter} />
      {results.length > 0 ? (
        <div className="results-container grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-[5%] justify-center">
          {results.map((result) => (
            <CardInfo key={result.id} room={result} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl mt-10">No rooms match the criteria</p>
      )}
    </div>
  );
};

export default SearchResults;
