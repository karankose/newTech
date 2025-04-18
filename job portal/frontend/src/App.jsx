import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Navbars from './componts/screens/Navbars';
import HeroSection from './componts/screens/HeroSection'
import Footer from './componts/screens/Footer';
import Section1 from './componts/screens/Section1';
import Section2 from './componts/screens/Section2';
import Section3 from './componts/screens/Section3';
import Testimonial from './componts/screens/Testimonial';
import PricingPlans from './componts/screens/PricingPlans';
import FaqSection from './componts/screens/FaqSection'
import SignUp from './componts/screens/SignUp';
import Login from './componts/screens/Login';


const App = () => {
  return (
    <>
   
      <Navbars/>
      <HeroSection/>
      <Section1/>
      <Section2/>
      <Section3/>
      <PricingPlans/>
      <Testimonial/>
      <FaqSection/>
      <Footer/>
      {/* <SignUp /> */}
      <Login/>
   
    
    </>
    )
}
export default App;