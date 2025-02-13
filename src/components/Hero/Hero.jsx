import "./Hero.css";

const Header = () => {
  return (
    <div className="background">
      <img
        className="hero-logo"
        src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
        alt="hotel von Steinblut logo"
      />
      <div
        className="bg-center bg-cover h-64 w-full h-[1400px]"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/castle-2_zxiibh.png')",
        }}
      ></div>
    </div>
  );
};

export default Header;
