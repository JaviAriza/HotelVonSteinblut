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
      <div id="label-cover" className="bg-base h-1/5 w-full z-16"></div>
      <div id="bgImage"
        className="w-full h-3/5 bg-center bg-cover relative"
        style={{ backgroundImage: `url(${props.bgImage})` }}
      ></div>
      <div className="bg-base h-1/5 w-full"></div>
      {isVisible && (
        <div
          id="label"
          className={`${
            isFixed ? "fixed bottom-1/2 h-[10%]" : "absolute h-[13%]"
          }  pointer-events-none w-full  pt-13 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-black flex items-center transition-all ease-in-out duration-400`}
          style={!isFixed ? { top: `${restingPos}px` } : {}}
        >
          <Title text="Our Services" />
        </div>
      )}
    </section>
  );
};

export default ServicesInfo;

ServicesInfo.propTypes = {
  bgImage: PropTypes.string.isRequired,
};
