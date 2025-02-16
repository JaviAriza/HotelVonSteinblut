import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bottom-0 absolute bg-stone-800 w-full h-[80px] text-stone-500">
      <div className="flex items-center text-center justify-between px-5 h-full">
        <div className="flex items-center justify-between">
          <a href="#" className="s-24">
            <BsInstagram />
          </a>
          <a href="https://github.com/JaviAriza/HotelVonSteinblut.git" className="s-24">
            <BsGithub />
          </a>
        </div>

        <div className="">
          <p className="hover:text-color-blood-500">© Hotel Von Steinblut 2025. All rights reserved.</p>
          <div className="">
            <a className="" href="#">Legal Notice</a> |<a href="#">Privacy Policy</a> |
            <a href="#">Terms and Conditions</a>
          </div>
        </div>

        <div className="h-full flex items-center">
          <img className="h-2/3"
            src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png"
            alt="Hotel Von Steinblut Logo"
          />
        </div>
      </div>
    </footer>
  );
}
export default Footer;
