import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";

const Main = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full">
            <Hero />
            <Booking />
        </main>
    );
}

export default Main;