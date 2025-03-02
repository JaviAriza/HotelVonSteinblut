import RestaurantServices from "../components/RestaurantServices/RestaurantServices";
import Hero from "../components/Hero/Hero";
import Title from "../components/Title/Title";
import ServicesInfo from "../components/ServicesInfo/ServicesInfo";
import Text from "../components/Texts/Texts";
import Gallery from "../components/Gallery/Gallery";
import EmailForm from "../components/EmailJS/Email";
import Map from "../components/Map/Map";

const Restaurant = () => {
  return (
    <div className="w-full">
      <Hero
        type={"restaurant"}
        background={
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740502637/00001-1368405656_tedmzv.jpg"
        }
      />
      <div className="about mb-5 flex flex-col">
        <Title text={"Von Steinblut Restaurant"} />
        <Text />
      </div>
      <div id="restaurant-services">
        <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740504408/00002-3120151442_nkvrke.jpg" />
        <Title text={"Services"} />
        <RestaurantServices />
        <Title text={"Services"} />
        <RestaurantServices />
      </div>
      <div className="flex h-[1000px] flex-col md:flex-row w-full md:h-screen max-md:my-10 gap-5 px-[5%] md:p-30 md:py-35">
        <Map />
        <EmailForm />
      </div>
      <div id="restaurant-gallery">
        <Gallery
          pictures={[
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740845364/00001-711020556_tdmwls.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846014/00005-3739568703_iyko6t.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846521/00008-4088081042_gf5lko.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740845514/00002-4248152933_vk4tmo.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740845698/00003-2333386820_xsog87.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846166/00006-959514903_skf8km.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846626/00009-3659831855_fgqfe6.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740845857/00004-786710061_fqidry.png",
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846334/00007-3487642673_yfzwfj.png",
          ]}
        />
      </div>
    </div>
  );
};

export default Restaurant;
