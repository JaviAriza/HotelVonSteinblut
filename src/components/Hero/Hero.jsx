import Logo from "../Logo/Logo";
import PropTypes from "prop-types"
const Hero = ({type, background}) => {
  return (
    <div className="w-full h-[1400px] relative -z-10">
      <Logo page={type}/>
      <div
        id="hero"
        className="bg-center bg-cover w-full h-[1400px] bg-no-repeat"
        data-testid="background-image"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, #1a1a1a 99.9%), url(${background})`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
Hero.propTypes = {
  type: PropTypes.string,
  background: PropTypes.string
}
