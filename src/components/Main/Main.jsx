import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import Card from "../Card/Card"


const Main = () => {
    return (
        <main className="flex flex-col items-center justify-between w-full">
            <Hero />
            <Card />
            <Booking />
        </main>
    );
}

export default Main;