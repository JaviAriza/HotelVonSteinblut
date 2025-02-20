import Title from "../Title/Title";
const Hero = () => {
  return (
    <div className="w-full h-2/3 relative">

      <Title />
     
      <div
        className="bg-center bg-cover w-full h-[1400px] bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png')",
        }}
      ></div>
    </div>
  );
};

export default Hero;
