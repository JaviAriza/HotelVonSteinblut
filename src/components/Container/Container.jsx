import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import RestaurantServices from "../RestaurantServices/RestaurantServices";
import Restaurant from "../Restaurant/Restaurant";

const Container = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full h-full">
            <Hero />
            <Booking />
            <Restaurant title={"von steinblut restaurant"} link={""} image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"}/>
            <Restaurant title={"escape room"} link={""} image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"}/>
            <RestaurantServices />
            <RestaurantServices />
        </main>
    );
}

export default Container;