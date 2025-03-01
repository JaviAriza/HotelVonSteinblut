import Hero from "../components/Hero/Hero";
import Booking from "../components/Booking/Booking";
import HotelServices from "../components/HotelServices/HotelServices";
import Title from "../components/Title/Title";
import ServicesInfo from "../components/ServicesInfo/ServicesInfo";
import Text from "../components/Texts/Texts";
import Gallery from "../components/Gallery/Gallery";
import EmailForm from "../components/EmailJS/Email";
import Map from "../components/Map/Map";

const Home = () => {
  return (
    <div className="w-full">
      <Hero
        image={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png"
        }
      />
      <Booking />
      <div className="about mb-5 flex flex-col">
        <Title text={"Von Steinblut Hotel"} />
        <Text />
      </div>
      <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740505200/00001-1368405656_ojwogn.png" />
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
      <Gallery
        pictures={[
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png",
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846521/00008-4088081042_gf5lko.png",
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740504408/00002-3120151442_nkvrke.jpg",
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740847639/00013-250311533_ya6dbc.png",
        ]}
      />
      <EmailForm />
      <Map />
    </div>
  );
};

export default Home;
