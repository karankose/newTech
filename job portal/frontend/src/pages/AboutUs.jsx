import React from "react";
import Navbars from "../componts/screens/Navbars";
import Footer from "../componts/screens/Footer";
import Testimonial from "../componts/screens/Testimonial";
import Section2 from "../componts/screens/Section2";
import Section3 from "../componts/screens/Section3";
import OurMission from "../componts/screens/OurMission";
import Section1 from "../componts/screens/Section1";


const AboutUs = () => {
  return (
    <>
     <Navbars/>
    <div className="container-fluid" style={{backgroundColor:'#071A44'}}>
    <div className=" d-flex justify-content-center align-items-center text-light py-5 "><h1>About Us</h1>
    </div>



    </div>
   

    <Section1/>
    <OurMission/>
    <Section3/>
    <Section2 />
    <Testimonial/>
    <Footer/>
    </>
  )
}


export default AboutUs;


