import Logo from '../Logo/Logo'

const Hero = () => {
  return (
    <div className="w-full h-[1400px] relative -z-10">
      <Logo />
      <div id='hero'
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
