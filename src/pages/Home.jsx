import Hero from "../components/Hero/Hero";
import Booking from "../components/Booking/Booking";
import HotelServices from "../components/HotelServices/HotelServices";
import Title from "../components/Title/Title";

const Home = () => {
  return (
    <div className="w-full">
      <Hero image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png"}/>
      <Booking />
      <Title text={"Von Steinblut Hotel"} />
      <HotelServices
        title={"von steinblut restaurant"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505200/00001-1368405656_ojwogn.png"
        }
      />
      <HotelServices
        title={"von steinblut escape room"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505257/00036-616249523_df1j2f.png"
        }
      />
    </div>
  );
};

export default Home;
