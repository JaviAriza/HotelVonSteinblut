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
      <div className="about mb-5 flex flex-col">
        <Title text={"Von Steinblut Restaurant"} />
        <Text />
      </div>
      <ServicesInfo bgImage="https://res.cloudinary.com/dw94v5tvs/image/upload/v1740504408/00002-3120151442_nkvrke.jpg" />
      <Title text={"Services"} />
      <RestaurantServices />
      <Title text={"Services"} />
      <RestaurantServices />
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
          "https://res.cloudinary.com/dw94v5tvs/image/upload/v1740846334/00007-3487642673_yfzwfj.png"
        ]}
      />
    </div>
  );
};

export default Restaurant;
