import PropTypes from "prop-types";
import Title from "../Title/Title";

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
          <button className="h-full w-[20%] rounded-lg text-lg font-semibold hover:bg-black bg-white text-red-800 transition-all">
            <a
              className="w-full h-full flex items-center justify-center transition-all"
              href={props.link}
            >
              Book
            </a>
          </button>
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
