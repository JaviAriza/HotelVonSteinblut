import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import Title from "../Title/Title";

const Container = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-full">
      <Hero />
      <div className="h-[1000px] w-full">
        <Booking />
        <Title text={"Von Steinblut Hotel"}/>
      </div>
    </main>
  );
};

export default Container;
