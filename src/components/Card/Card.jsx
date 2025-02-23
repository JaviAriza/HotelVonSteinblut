import "./Card.css"
export default function Card() {
  return (
    <div className="bodyCard">
        <img className="imgCard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWi29mOalQDV_Z3OQs5RojJxdAZhjnDjSMYg&s" alt="card image" />
        <img className="imgBorder" src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338442/marcoHab_7_r9qulo.png" alt="card image" />
        <button className="back" src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338995/icon_yfpyxn.png"></button>
        <button className="next" src="https://res.cloudinary.com/dnjosjzrj/image/upload/v1740338995/icon_yfpyxn.png"></button>
    </div>
  );
}
