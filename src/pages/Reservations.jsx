import Booking from "../components/Booking/Booking";
import Cookies from "js-cookie";


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

export default Reservations;