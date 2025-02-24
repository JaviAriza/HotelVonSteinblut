import useTrackPosition from "../../hooks/useTrackPosition";
import {
  getContainerMiddle,
  getTrackPosition,
} from "../../utils/positionUtils";

const Logo = () => {
  const isFixed = useTrackPosition("hero");
  const restingPos = getContainerMiddle("hero") + getTrackPosition("logo");
  return (
    <img
      id="logo"
      className={`${
        isFixed ? "fixed bottom-1/2" : `absolute top-[${restingPos}px] max-sm:top-[920px]`
      }  pointer-events-none sm:w-[250px] w-1/2 opacity-80 left-1/2 -translate-x-1/2 translate-y-1/2 z-10`}
      src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
      alt="hotel von Steinblut logo"
    />
  );
};

export default Logo;
