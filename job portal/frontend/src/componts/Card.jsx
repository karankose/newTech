import React from 'react'
import icon from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon.png'
import icon1 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon (1).png'
import icon2 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Icon (2).png'
 const Card = () => {
  return (
  <div  className='d-flex' style={{background:'#46B6EEDB',paddingBottom:'50px' , paddingTop:'50px', justifyContent:'center', alignItems:'center'}}>
      <div className='d-flex' style={{background:'white', width:'200px', padding:'15px', borderRadius:'10px',marginRight:'25PX', marginLeft:'50px'}}>
        <div >
          <img src={icon} style={{height:'40px', width:'40px' ,marginTop:'12px', marginRight:'10px'}} alt="" />
          </div>
        <div>
          <h4>12456</h4>
          <p>Live Job</p>
          </div>
      </div>
      <div className='d-flex' style={{ background:'white',marginRight:'25PX', borderRadius:'10px',width:'200px',padding:'15px',  marginLeft:'50PX'}}>
      <div>
          <img src={icon1} style={{height:'40px', width:'40px',marginTop:'12px', marginRight:'10px'}} alt="" />
          </div>
        <div>
          <h4>9854</h4>
          <p>Companies</p>
          </div>
      </div>
      
      <div className='d-flex' style={{ background:'white',padding:'15px',borderRadius:'10px', width:'200px', marginRight:'25PX', marginLeft:'50PX'}}>
      <div>
          <img src={icon2} style={{height:'40px', width:'40px',marginTop:'12px', marginRight:'10px'}} alt="" />
          </div>
        <div>
          <h4>9855635</h4>
          <p>Candidates</p>
          </div>
      </div>
      <div className='d-flex' style={{background:'white', padding:'15px', width:'200px', borderRadius:'10px', marginRight:'25PX', marginLeft:'50PX'}}>
        <div>
          <img src={icon} style={{height:'40px', width:'40px ',marginTop:'12px', marginRight:'10px'}} alt="" />
          </div>
        <div>
          <h4>7585</h4>
          <p>New Jobs</p>
          </div>
      </div>
    </div>
  )
}


export default Card;