import RestaurantServices from "../components/RestaurantServices/RestaurantServices";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";

const Restaurant = () => {
  return (
    <div className="w-full">
      <Hero image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1740502637/00001-1368405656_tedmzv.jpg"}/>
      <Title text={"Von Steinblut Restaurant"} />
      <Title text={"Services"} />
      <RestaurantServices />
      <Title text={"Services"} />
      <RestaurantServices />
    </div>
  );
};

export default Restaurant;
