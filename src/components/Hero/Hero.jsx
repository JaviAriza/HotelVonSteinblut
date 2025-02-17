const Hero = () => {
  return (
    <div className="w-full h-2/3">
      <img
        className="fixed pointer-events-none w-1/2 sm:w-[250px] left-1/2 top-1/2 -translate-1/2 z-10 transition-all opacity-80"
        src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
        alt="hotel von Steinblut logo"
      />
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
