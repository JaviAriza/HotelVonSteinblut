import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import RestaurantServices from "../RestaurantServices/RestaurantServices";
import Restaurant from "../Restaurant/Restaurant";

const Container = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full h-full">
            <Hero />
            <Booking />
            <Restaurant />
            <Restaurant />
            <RestaurantServices />
            <RestaurantServices />
        </main>
    );
}

export default Container;