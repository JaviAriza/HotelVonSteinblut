import Hero from "../components/Hero/Hero";
import Booking from "../components/Booking/Booking";
import HotelServices from "../components/HotelServices/HotelServices";
import Title from "../components/Title/Title";
import ServicesInfo from "../components/ServicesInfo/ServicesInfo";
import Text from "../components/Texts/Texts";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <div className="w-full">
      <Hero image={"https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png"}/>
      <Booking />
      <div className="about mb-[20%] flex flex-col">
      <Title text={"Von Steinblut Hotel"} />
      <Text />
      </div>
      <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505200/00001-1368405656_ojwogn.png"/>
      <HotelServices
        title={"restaurant"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505200/00001-1368405656_ojwogn.png"
        }
      />
      <HotelServices
        title={"escape room"}
        link={""}
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505257/00036-616249523_df1j2f.png"
        }
      />
      <Gallery />
    </div>
  );
};

export default Home;
