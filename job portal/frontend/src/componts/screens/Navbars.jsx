import React from 'react'

const Navbars = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
        <div className="container-fluid">
          
         
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/public/images/Logo2.png" alt="Job Portal Logo" className="img-fluid" style={{ height: '50px' }} />
          </a>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

         
          <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            
          
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">How To Use?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing Plans</a>
              </li>
            </ul>

           
            <form className="d-flex">
              <button className="btn btn-outline-primary me-2" type="button">Sign Up</button>
              <button className="btn btn-primary" type="button">Login</button>
            </form>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbars;
