import useTrackPosition from "../../hooks/useTrackPosition";
import {
  getRelativeContainerMiddle,
  getTrackPosition,
} from "../../utils/positionUtils";
import PropTypes from "prop-types";

const Logo = ({ page }) => {
  const logoImages = [
    "https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740937609/logo_hotel_blanco_imoyr1.png",
    "https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740902347/logo_restaurante_ncyrau.png",
  ];
  const options = {
    hotel: 0,
    restaurant: 1,
  };

  const isFixed = useTrackPosition("hero");
  const restingPos =
    getRelativeContainerMiddle("hero") + getTrackPosition("logo");
  return (
    <img
      id="logo"
      className={`${isFixed ? "fixed bottom-1/2" : "absolute"} ${
        options[page] ? "sm:w-[400px]" : "sm:w-[250px]"
      } pointer-events-none sm:w-[250px] w-1/2 opacity-80 left-1/2 -translate-x-1/2 translate-y-1/2 z-10`}
      style={!isFixed ? { top: `${restingPos}px` } : {}}
      src={logoImages[options[page]]}
      alt="hotel von Steinblut logo"
    />
  );
};

export default Logo;

Logo.propTypes = {
  page: PropTypes.string,
};
