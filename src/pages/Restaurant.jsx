import RestaurantServices from "../components/RestaurantServices/RestaurantServices";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";

const Restaurant = () => {
  return (
    <div className="w-full">
      <Hero />
      <RestaurantServices />
      <Title text={"Von Steinblut Hotel"} />
      <Restaurant
        title={"von steinblut restaurant"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
        }
      />
      <RestaurantServices />
      <RestaurantServices />
    </div>
  );
};

export default Restaurant;
