import ExpandablePanel from "../ExpandablePanel/ExpandablePanel";

const RestaurantServices = () => {
  return (
    <>
      <section className="my-[20%] restaurant-services w-full h-screen bg-black flex flex-col sm:flex-row">
        <ExpandablePanel
          image={
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
          }
          isLeadPanel={true}
          text={"cena grupal"}
        />
        <span className="h-[1px] w-full sm:h-full sm:w-[1px] border-b sm:border-l border-white"></span>
        <ExpandablePanel
          image={
            "https://res.cloudinary.com/dw94v5tvs/image/upload/v1739958637/image_13_oz5cyv.png"
          }
          isLeadPanel={false}
          text={"cena con espectáculo"}
        />
      </section>
    </>
  );
};

export default RestaurantServices;

