import React from 'react'
import logo from '/home/ntf-409/karan/job portal/frontend/src/componts/Img/image 7.png'

const Footer = () => {
    return (
        <>
            <div style={{ background: '#091F4F', color: 'white', justifyContent: 'center', paddingBottom:'20px', alignItems: 'center' }}>
                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center',paddingTop:'52px' }} ><h4 >Stay updated with the latest job listings, career tips, and exclusive offers.</h4></div>
                <div className='d-flex' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <input style={{ margin: '10px' }} type="text" placeholder='enter your email' />
                    <button className='btn' style={{ background: 'skyblue', color: 'white' }}>Subscribe Now</button>
                </div>
                <p style={{ textAlign: 'center', fontSize: '8px' }}>Unsubscribe anytime. We respect your privacy.</p>
            </div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  <div style={{color : 'white', background:'#004595'}} className="container-fluid d-flex justify-content-center  align-items-start  ">
                   
                    <img src={logo} style={{marginLeft:'10%', marginRight:'15%'}} alt="" />
                    <button className="navbar-toggler" type=" button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                          <a className="nav-link  " aria-current="page" href="#">How To Use?</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">Pricing Plans</a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                </nav>

            
        </>)
}



export default Footer;