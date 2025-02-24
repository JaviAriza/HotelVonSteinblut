import React, { useState } from "react";

import CurrentBookings from "../components/CurrentBookings/CurrentBookings";



const Profile = () => {
  return (
    <>
    
    <div className="bg-red text-white p-6 font-serif">
      {/* Profile Section */}

      <div className="relative">
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
          alt="Ornament Separator Top"
          className="mx-auto w-1/2 h-full"
        />
        <h3 className="absolute top-[-1.5rem] left-0 text-white font-bold text-3xl">PROFILE</h3>
      </div>
      <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-6 relative">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl font-bold">USERNAME NAME</h2>
          <p className="text-gray-400">Gender: Male</p>
          <p className="text-gray-400">Birthdate: 09/06/2025</p>
          <p className="text-gray-400">Number of guests: 3</p>
          <p className="text-gray-400">Email: example.com</p>
          <p className="text-gray-400">Phone: 684 56 21 54</p>
        </div>
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740391675/ornamentCircle1_qexw5g.png"
            alt="Ornament Frame"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden">
            <img
              src="https://s03.s3c.es/imag/_v0/1200x655/4/2/5/lucas-1200.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
          alt="Ornament Separator Top"
          className="mx-auto w-1/2 h-full"
        />
    </div>

    <CurrentBookings />
    </>
  );
};



export default Profile;

