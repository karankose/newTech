import React from 'react';


const Section1 = () => {
  return (
    <div className="container-fluid py-5" style={{ background: '#46B6EEDB' }}>
      <div className="row justify-content-center g-4">
       
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex bg-white p-3 rounded">
            <img src='/public/icons/Icon6.png' alt="Live Job" className="me-2" style={{ width: '40px', height: '40px', marginTop: '12px' }} />
            <div>
              <h4>12456</h4>
              <p className="mb-0">Live Job</p>
            </div>
          </div>
        </div>
        
     
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex bg-white p-3 rounded">
            <img src='/public/icons/Icon1.png' alt="Companies" className="me-2" style={{ width: '40px', height: '40px', marginTop: '12px' }} />
            <div>
              <h4>9854</h4>
              <p className="mb-0">Companies</p>
            </div>
          </div>
        </div>

       
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex bg-white p-3 rounded">
            <img src='/public/icons/Icon2.png' alt="Candidates" className="me-2" style={{ width: '40px', height: '40px', marginTop: '12px' }} />
            <div>
              <h4>9855635</h4>
              <p className="mb-0">Candidates</p>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="d-flex bg-white p-3 rounded">
            <img src='/public/icons/Icon6.png' alt="New Jobs" className="me-2" style={{ width: '40px', height: '40px', marginTop: '12px' }} />
            <div>
              <h4>7585</h4>
              <p className="mb-0">New Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
