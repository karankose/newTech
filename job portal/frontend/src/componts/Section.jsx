import React from 'react'
import Img from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Frame 5212.png'

 const Section = () => {
  return (
    <>
     <div className='container-fluid d-flex ' style={{background:"#091F4F", height:'100%', width:'100%' , justifyContent:'center', alignItems:'center'}}>
        //img div
        <div className='' style={{width:'50%', margin:'50px'}}>
            <img src={Img} style={{height:'100%',width:'100%'}} alt="" />
        </div>
        // text div
        <div className='' style={{width:'50%'}}>
            <div>
                <h1>Why Choose JobPortal</h1>
                <p>Welcome to Job Portal, where we connect UK job seekers with exceptional sponsorship opportunities, empowering diverse individuals to navigate the job market with confidence.</p>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        






     </div>
    </>
  )
}




export default Section;