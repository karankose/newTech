import React from 'react'

import HeroImg from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Group 39523.png'
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
    <div>  <img src={HeroImg}  style={{height:'250px'  }} alt="" />
            
            </div>
    </div>







       
    </div>
    </>)
}

export default HeroSection;