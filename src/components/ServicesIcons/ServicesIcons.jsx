import services from "./servicesIcons.json";

const ServicesIcons = () => {
  return (
    <>
      <div className="w-full h-[100px] flex justify-center items-center gap-2 md:gap-10 bg-black p-8">
        {services.icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt="service-icon"
            className="w-auto h-full object-contain"
          />
        ))}
      </div>
    </>
  );
};

export default ServicesIcons;
