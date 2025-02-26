import PropTypes from "prop-types";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

export default function HotelServices(props) {
  return (
    <section className="mt-[30%] w-full flex flex-col items-center gap-5 justify-center">
      <div
        className="w-full h-screen bg-center bg-cover relative"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="flex items-center w-full h-[20%] absolute">
          <Title text={props.title} />
        </div>
        <div className="z-5 black-gradient w-full h-full bg-gradient-to-b from-black via-[transparent] to-black absolute top-0 left-0"></div>
        <div className="flex justify-center gap-[3%] h-[5%] w-full z-50 absolute bottom-[5%]">
          <button className="h-full w-[20%] rounded-lg text-lg font-semibold hover:bg-red-800 transition-all">
            Info
          </button>
          <Link to={`/${props.title}`}>
            <button className="h-full w-full px-10 rounded-lg text-lg font-semibold border-1 border-white hover:bg-black hover:text-white hover:border-white bg-white text-red-800 transition-all">
              Book
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

HotelServices.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
