import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import RestaurantServices from "../RestaurantServices/RestaurantServices";

const Container = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full h-full">
            <Hero />
            <Booking />
            <RestaurantServices />
            <RestaurantServices />
        </main>
    );
}

export default Container;