import PropTypes from "prop-types";
import Title from "../Title/Title";

export default function Restaurant(props) {
  return (
    <section className="my-[20%] w-full h-[1000px] flex flex-col items-center gap-5 justify-center">
      <div className="flex items-center w-full h-[20%]">
        <Title text={props.title} />
      </div>
      <div
        className="w-full h-2/4 bg-bottom bg-cover relative"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div className="z-5 black-gradient w-full h-full bg-gradient-to-b from-black via-[transparent] to-black absolute top-0 left-0"></div>
      </div>

      <div className="flex justify-center gap-[3%] w-full h-[3%]">
        <button className="h-full w-[10%] rounded-lg text-lg font-semibold hover:bg-red-800 transition-all">
          Info
        </button>
        <button className="h-full w-[10%] rounded-lg text-lg font-semibold hover:bg-black transition bg-white text-red-800 transition-all">
          <a className="block w-full h-full flex items-center justify-center transition-all" href={props.link}>Book</a>
        </button>
      </div>
    </section>
  );
}

Restaurant.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
