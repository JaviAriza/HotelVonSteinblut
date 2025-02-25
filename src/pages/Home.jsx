import Hero from "../components/Hero/Hero";
import Booking from "../components/Booking/Booking";
import Restaurant from "../components/Restaurant/Restaurant";
import Title from "../components/Title/Title";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Booking />
      <Title text={"Von Steinblut Hotel"} />
      <Restaurant
        title={"von steinblut restaurant"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
        }
      />
      <Restaurant
        title={"von steinblut escape room"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
        }
      />
    </div>
  );
};

export default Home;
