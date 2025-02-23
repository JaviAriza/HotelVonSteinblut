import "./Card.css";

export default function Card({ title, images, imageIndex, onNextImage, onPrevImage }) {
  return (
    <div className="bodyCard">
      <h2 className="text-white text-xl font-bold mb-2">{title}</h2>
      <img className="imgCard" src={images[imageIndex]} alt="card image" />
      <img className="imgBorder" src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338442/marcoHab_7_r9qulo.png" alt="card image" />
      <button className="back" onClick={onPrevImage}>
        <img src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338995/icon_yfpyxn.png" alt="Previous" />
      </button>
      <button className="next" onClick={onNextImage}>
        <img src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338995/icon_yfpyxn.png" alt="Next" />
      </button>
    </div>
  );
}
