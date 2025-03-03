import React, { useState } from "react";
import CurrentBookings from "../components/CurrentBookings/CurrentBookings";
import PreviusBookings from "../components/PreviusBookings/PreviusBookings";


const Profile = () => {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.firstName && u.lastName && u.email);


  return (
    <>
    
    <div className="bg-red text-white p-6 font-serif relative mt-35">


      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornament Corner"
        className="absolute top-[-4rem] left-5 w-30 h-30"
      />
      <img
        src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740385677/ornamentCorner1_xe1anj.png"
        alt="Ornament Corner"
        className="absolute top-[-4rem] right-10 w-30 h-30 rotate-90"
      />

      <div className="relative mt-10">
        <img
          src="https://res.cloudinary.com/dgzgzx9ov/image/upload/v1740397694/OrnamentLine1_xrziiw.png"
          alt="Ornament Separator Top"
          className="mx-auto w-1/2 h-full"
        />
        <h3 className="absolute top-[-1.5rem] left-30 text-white font-bold text-3xl">PROFILE</h3>
      </div>
      <div className="p-6 rounded-lg flex flex-col sm:flex-row items-center justify-center sm:justify-center gap-6 relative mt-10">
        <div className="text-center sm:text-right">
          <h2 className="text-2xl font-bold"> {user?.firstName.toUpperCase() || "Guest"}</h2>
          <p className="text-gray-400">First Name: {user?.firstName || "N/A"}</p>
          <p className="text-gray-400">Last Name: {user?.lastName || "N/A"}</p>
          <p className="text-gray-400">Email: {user?.email || "N/A"}</p>
        </div>
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 flex items-center justify-center mt-10">
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
          className="mx-auto w-1/2 h-full mt-10"
        />
    </div>

    <CurrentBookings />
    <PreviusBookings />



    </>

    
  );
};



export default Profile;

