import Hero from "../Hero/Hero";
import Booking from "../Booking/Booking";
import RestaurantServices from "../RestaurantServices/RestaurantServices";
import Restaurant from "../Restaurant/Restaurant";
import Title from "../Title/Title";
import CardInfo from "../CardInfo/CardInfo";
import SearchResults from "../searchResults/SearchResults";
import Gallery from "../Gallery/Gallery";


const Container = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-full">
      <Hero />
      <div className="h-[1000px] w-full">
        <Booking />
        <Title text={"Von Steinblut Hotel"} />
        <Gallery />
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
        <RestaurantServices />
        <RestaurantServices />
        {/* <Rooms /> */}
        <CardInfo />
        <SearchResults />
      </div>
    </main>
  );
};

export default Container;
