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
       <div className="flex justify-center my-6">
        <a
          href="/data/Restaurant-Menu.pdf"
          download="Restaurant-Menu.pdf"
          className="bg-red-700 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-800 transition-all"
        >
          Ver Carta
        </a>
      </div>
      <div className="about mb-[50px] flex flex-col">
        <Title text={"Von Steinblut Restaurant"} />
        <Text />
      </div>
      <div id="restaurant-services">
        <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740504408/00002-3120151442_nkvrke.jpg" />
        <Title text={"dining options"} />
        <RestaurantServices first={true}/>
        <Title text={"Scheduled services"} />
        <RestaurantServices first={false}/>
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
      <section id="restaurant-contact" className="flex h-[1200px] flex-col md:flex-row w-full md:h-screen max-md:my-10 gap-5 px-[5%] md:p-30 md:py-25">
        <Map />
        <EmailForm />
      </section>
    </div>
  );
};

export default Restaurant;
