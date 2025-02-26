import RestaurantServices from "../components/RestaurantServices/RestaurantServices";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import ServicesInfo from "../components/ServicesInfo/ServicesInfo";
import Text from "../components/Texts/Texts";
import Gallery from "../components/Gallery/Gallery";

const Restaurant = () => {
  return (
    <div className="w-full">
      <Hero
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740502637/00001-1368405656_tedmzv.jpg"
        }
      />
      <div className="about mb-[20%] flex flex-col">
        <Title text={"Von Steinblut Restaurant"} />
        <Text />
      </div>
      <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740504408/00002-3120151442_nkvrke.jpg" />
      <Title text={"Services"} />
      <RestaurantServices />
      <Title text={"Services"} />
      <RestaurantServices />
      <Gallery />
    </div>
  );
};

export default Restaurant;
