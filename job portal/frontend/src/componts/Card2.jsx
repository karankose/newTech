import React from 'react'
import icon8 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon8.png'
import icon4 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon4.png'
import icon5 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon 5.png'
import icon6 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon 6.png'

 const Card2 = () => {
  return (
  
    <div>
      <div className='d-flex' style={{justifyContent:'center', justifyItems:'center', alignItems:'center', marginTop:'50px'}}><h2>How Job Portal Works</h2></div>
   <div  className='d-flex' style={{paddingBottom:'50px' , paddingTop:'50px', justifyContent:'center', alignItems:'center'}}>
        <div style={{background:'white', width:'200px', padding:'15px', borderRadius:'10px',marginRight:'25PX', marginLeft:'50px'}}>
          <div >
            <img src={icon4} style={{height:'40px', width:'40px' ,marginTop:'12px', marginRight:'10px'}} alt="" />
            </div>
          <div>
            <h6>Create account</h6>
            <p style={{fontSize: '14px' }}> Sign up for a free account and create a profile to showcase your skills and career goals.</p>
            </div>
        </div>
        <div  style={{ background:'#ECF4FE',marginRight:'25PX', borderRadius:'10px',width:'200px',padding:'15px',  marginLeft:'50PX'}}>
        <div>
            <img src={icon8} style={{height:'40px', width:'40px',marginTop:'12px', marginRight:'10px'}} alt="" />
            </div>
          <div>
            <h6>Job Search</h6>
            <p style={{fontSize: '14px' }}>Explore a variety of sponsorship job listings using filters for location, keywords, and industry.</p>
            </div>
        </div>
        
        <div style={{ background:'white',padding:'15px',borderRadius:'10px', width:'200px', marginRight:'25PX', marginLeft:'50PX'}}>
        <div>
            <img src={icon5} style={{height:'40px', width:'40px',marginTop:'12px', marginRight:'10px'}} alt="" />
            </div>
          <div>
            <h6>Application Preparation</h6>
            <p style={{fontSize: '14px' }}>Use our resources to craft standout CVs and cover letters, tailoring them for each application.</p>
            </div>
        </div>
        <div  style={{background:'white', padding:'15px', width:'200px', borderRadius:'10px', marginRight:'25PX', marginLeft:'50PX'}}>
          <div>
            <img src={icon6} style={{height:'40px', width:'40px ',marginTop:'12px', marginRight:'10px'}} alt="" />
            </div>
          <div>
            <h6>Apply and Secure Employment</h6>
            <p style={{fontSize: '14px' }}>Submit your applications, track their status, and receive support to help you land your dream job in the UK.</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Card2;