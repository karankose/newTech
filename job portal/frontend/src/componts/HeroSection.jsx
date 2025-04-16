import React from 'react'
import pic2 from '/home/ntf-409/karan/job portal/frontend/src/componts/Img/pic2.png'
import pic1 from '/home/ntf-409/karan/job portal/frontend/src/componts/Img/pic1.png'
const HeroSection = () => {
  return (
    <>
    <div className='container-fluid d-flex ' style={{background:"#091F4F", height:'100%', width:'100%' , justifyContent:'center', alignItems:'center'}}>

    <div>
    <div >
                <h1 style={{color: '#3EA1CC'}}>Helping You Find</h1>   
            </div>
            <div >
                <h1 style={{color: '#3EA1CC'}}>Sponsorship </h1>
                <h1 style={{color: 'white'}}>Jobs in the UK</h1>
            </div>
            <div>
                <p style={{color:'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt dolorem ad dolorum vb hic, libero eius dicta?</p>               
            </div>
    </div>
    <div className='d-flex'>
    <div>  <img src={pic1}  style={{height:'250px'  }} alt="" />
            <img src={pic2} style={{height:'250px'}} alt="" />
            </div>
    </div>







       
    </div>
    </>)
}

export default HeroSection;