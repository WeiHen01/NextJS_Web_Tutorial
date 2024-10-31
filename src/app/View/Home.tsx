import React from 'react';
import Marquee from "react-fast-marquee";
import Health from "../../Images/Blood.png"; 
import MainLayout from "../../Components/MainLayout";

const Home = () => {
  return (
    // Recall the component in MainLayout.js
    <div>
        <MainLayout>
            <title>Next JS | Dental Appointment System</title>
            <Marquee speed={100} className=" font-special text-sm py-1" style={{ backgroundColor: '#FF4081', color: 'white'}}>
                Welcome to Dental Appointment System!
            </Marquee>
            <div style = {{fontFamily: 'Poppins, sans-serif'}} className="bg-gradient-to-r from-purple-dark to-red-deep min-h-max h-max ">
                <div className="grid grid-cols-2 items-center ">
                    <img src={Health.src} className="px-3 w-[570px]" alt="welcome" />
                    <div className="grid grid-cols-1">
                        <p className="font-special text-white">Have you ever thought about your health?</p>
                        <p className="font-special text-white">Get started now!</p>
                    </div>
                </div>
            </div>
            
        </MainLayout>

    </div>

    
  );
};

export default Home;
