import Booking from "../components/Booking/Booking";
import Cookies from "js-cookie";

import SearchResults from "../components/searchResults/SearchResults";

const Reservations = () => {
    return (
        <div>
        <h1 className="text-white" >Home</h1>
        <h1 className="text-white">noches de estadía: {Cookies.get('nights')}</h1>
        <div className="mt-40">
        <Booking /> 
        </div>
        
        </div>

    );
}
  return (
    <div className="w-full">
      <SearchResults />
    </div>
  );
};

export default Reservations;
