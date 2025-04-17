import React from 'react'
import img1 from '/home/ntf-409/karan/newTech/job portal/frontend/src/componts/Img/Logo j 1.png'

const Navbars = () => {
  return (
    <>    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-center  align-items-start  ">
       
        <img src={img1} style={{marginLeft:'10%', marginRight:'15%'}} alt="" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
          <form className="d-flex" role="search">
            <button className="btn btn-outline-primary "style={{marginRight:"10px"}} type="submit">sign up</button>
            <button className="btn btn-primary" type="submit">login</button>
          </form>
        </div>
        
      </div>
    </nav>
    </>
  )
}
export default Navbars;