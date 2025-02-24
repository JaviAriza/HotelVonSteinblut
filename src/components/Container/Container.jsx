import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import RestaurantServices from "../RestaurantServices/RestaurantServices";
import Restaurant from "../Restaurant/Restaurant";
import Title from "../Title/Title";

const Container = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-full">
      <Hero />
      <div className="h-[1000px] w-full">
        <Booking />
        <Title text={"Von Steinblut Hotel"}/>
            <Restaurant title={"von steinblut restaurant"} link={""} image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"}/>
            <Restaurant title={"escape room"} link={""} image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"}/>
            <RestaurantServices />
            <RestaurantServices />
      </div>
    </main>
  );
};

export default Container;
