import { BsGithub, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
<<<<<<< HEAD
    <footer className="font-[Triodion] text-gray-500 absolute bottom-0 w-full bg-base">
      <div className="flex flex-col items-center text-center justify-center sm:flex-row sm:justify-between sm:ml-10 sm:mr-10">
        <div className="follow sm:ml-0  mb-2 sm:mt-0 sm:mb-0 flex flex-col items-center justify-center">
          <h4 className="text-white text-xl mt-2 font-bold">Follow us on:</h4>
=======
    <footer className="font-[Triodion] text-gray-500 bg-stone-800 w-full mt-auto">
      <div className="flex flex-col items-center text-center justify-center sm:flex-row sm:justify-between sm:ml-10 sm:mr-10 py-4">
        <div className="follow flex flex-col items-center justify-center mb-2 sm:mb-0">
          <h4 className="text-white text-xl font-bold">Follow us on:</h4>
>>>>>>> 224e87b4cf64593382144042498e6571ff6a1e72
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-red-700 text-2xl">
              <BsInstagram />
            </a>
            <a href="https://github.com/JaviAriza/HotelVonSteinblut" className="text-gray-500 hover:text-red-700 text-2xl">
              <BsGithub />
            </a>
          </div>
        </div>

        <div className="rights text-center sm:text-left mr-2">
          <p className="my-1">© Hotel Von Steinblut 2025. All rights reserved.</p>
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