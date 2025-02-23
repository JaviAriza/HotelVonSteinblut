import PropTypes from "prop-types";

export default function Restaurant(props) {
  return (
    <section className="my-[20%] w-full h-[1300px] flex flex-col items-center justify-between py-[10%]">
      <h3 className="text-2xl sm:text-3xl font-semibold border-b border-gray-500 pb-2">
        {props.title}
      </h3>

      <div
        className="mt-6 w-full h-full bg-bottom bg-cover relative"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <div
          className="z-5 black-gradient w-full h-full bg-gradient-to-b from-black via-[transparent] to-black absolute top-0 left-0"
        ></div>
      </div>

      <div className="flex justify-center gap-[5%] mt-6 w-full">
        <button className="py-4 w-1/5 rounded-lg text-lg font-semibold hover:bg-red-800 transition">
          Info
        </button>
        <button className="py-4 w-1/5 rounded-lg text-lg font-semibold hover:bg-red-800 transition">
          <a href={props.link}>Book</a>
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
