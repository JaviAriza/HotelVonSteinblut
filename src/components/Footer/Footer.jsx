import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <footer className="text-gray-500 w-full bg-base z-50">
      <div className="flex flex-col items-center text-center justify-center sm:flex-row sm:justify-between sm:ml-10 sm:mr-10">
        <div className="follow sm:ml-0  mb-2 sm:mt-0 sm:mb-0 flex flex-col items-center justify-center">
          <h2 className="text-lg  mt-3 pb-1">Follow us on:</h2>          
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-red-700 transition duration-300 ease-in-out text-2xl">
              <BsInstagram />
            </a>
            <a href="https://github.com/JaviAriza/HotelVonSteinblut" className="text-gray-500 hover:text-red-800 transition duration-300 ease-in-out text-2xl">
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="rights text-center sm:text-left mr-2">
          <p className="my-1 text-center">© Hotel Von Steinblut 2025. All rights reserved.</p>
          <div className="legal-links">
            <a href="#" className="text-gray-500 hover:text-red-700 mx-1">Legal Notice</a> |
            <a href="#" className="text-gray-500 hover:text-red-700 mx-1">Privacy Policy</a> |
            <a href="#" className="text-gray-500 hover:text-red-700 mx-1">Terms and Conditions</a>
          </div>
        </div>

        <div className="logo flex ml-10 mb-2 mt-2 sm:ml-0 mr-6">
          <img className="w-16 h-16" src="https://res.cloudinary.com/dw94v5tvs/image/upload/v1739433825/logo_ggptnk.png" alt="Hotel Von Steinblut Logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
