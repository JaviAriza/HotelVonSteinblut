import PropTypes from "prop-types";
import Title from "../Title/Title";
import useTrackPosition from "../../hooks/useTrackPosition";
import useShouldRender from "../../hooks/useShouldRender";
import {
  getContainePositionFromTop,
  getRelativeContainerMiddle,
  getTrackPosition,
} from "../../utils/positionUtils";

const ServicesInfo = (props) => {
  const isVisible = useShouldRender("services-info", "bgImage");

  const isFixed = useTrackPosition("services-info");

  const restingPos =
    getRelativeContainerMiddle("services-info") +
    getTrackPosition("label") -
    getContainePositionFromTop("services-info");

  return (
    <section
      id="services-info"
      className="w-full h-[1500px] relative flex flex-col"
    >
      <div
        id="bgImage"
        className="w-full h-full bg-center bg-cover relative"
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        {" "}
        <div
          className={`absolute bg-gradient-to-t from-base via-transparent to-base left-0 top-0 w-full h-full`}
        ></div>
      </div>
      <div
        id="label"
        className={`${
          isVisible
            ? isFixed
              ? "fixed bottom-1/2"
              : "absolute"
            : "absolute top-[10%]"
        }  pointer-events-none w-full left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-transparent flex items-center transition-all ease-in-out duration-400`}
        style={!isFixed ? { top: `${restingPos}px` } : {}}
      >
        <Title text="Our Services" />
        <div className="bg-black w-full h-1/2 absolute left-0 top-1/2 -translate-y-1/2"></div>
      </div>
    </section>
  );
};

export default ServicesInfo;

ServicesInfo.propTypes = {
  bgImage: PropTypes.string.isRequired,
};
