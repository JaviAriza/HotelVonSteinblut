import Logo from '../Logo/Logo'
const Hero = (props) => {
  return (
    <div className="w-full h-[1400px] relative -z-10">
      <Logo />
      <div id="hero"
        className="bg-center bg-cover w-full h-[1400px] bg-no-repeat"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
