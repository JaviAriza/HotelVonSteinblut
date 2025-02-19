import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";

const Container = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full h-full">
            <Hero />
            <Booking />
        </main>
    );
}

export default Container;