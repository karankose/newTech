


import React from 'react';
import Navbars from '../componts/screens/Navbars';
import Footer from '../componts/screens/Footer';
import FormInputs from '../componts/reuseComponts/reuseFormComponent/FormInputs;';
import CustomButton from '../componts/reuseComponts/reuseButton/CustomButton';
import { Images } from '../assets/image';
import routers from '../Routers';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <>
      <Navbars />
      <div className='container-fuild' 
      style={{ backgroundImage : `url(${Images.FromBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      }}> 
        <div className='d-flex align-items-center justify-content-center min-vh-100'>
          <div className='border rounded shadow col-md-6 bg-white p-4'>
            <div className='text-start mb-3'>
              <h1>Welcome Back</h1>
              <p>Please enter your details to sign in.</p>
            </div>
            <form>

            <div className='row justify-content-center'>
                <FormInputs
                  label='First Name'
                  placeholder='Enter first name'
                  type='text'
                  required={true}
                  wrapperClassName='col-md-6'
                  name='First Name'
                />
                 <FormInputs
                  label='Last Name'
                  placeholder='Enter last name'
                  type='text'
                  required={true}
                  wrapperClassName='col-md-6'
                  name='Last Name'
                />
                
              </div>

              <div className='row justify-content-center'>
                <FormInputs
                  label='Email Address'
                  placeholder='Enter your email'
                  type='email'
                  required={true}
                  wrapperClassName='col'
                  name='email'
                />
              </div>
              <div className='row justify-content-center'>
                <FormInputs
                  label='Password'
                  placeholder='Enter your password'
                  type='password'
                  required={true}
                  wrapperClassName='col'
                  name='password'
                />
              </div>
              <div className='row justify-content-center'>
                <FormInputs
                  label='Confirm Password'
                  placeholder='Re-enter your password'
                  type='password'
                  required={true}
                  wrapperClassName='col'
                  name='password'
                />
              </div>

              <div className="row justify-content-between align-items-center mt-3">
                <div className="col-md-6">
                  <FormInputs
                    type="checkbox"
                    label="Keep me logged in"
                    name="keepLoggedIn"
                  />
                </div>
                
              </div>

              <div className='row justify-content-center align-items-center'>

                <CustomButton
                  wrapperClassName='col'
                  btnClassName='btn-primary w-100'
                  label={'Sign Up'}
                  onClick={() => { }}
                />
              </div>
              <div className='d-flex align-items-center my-3'>
                <p className='text-gray ' style={{ color: '#999' }}>Or continue with</p>
              </div>
              <div className='row justify-content-center align-items-center'>
                <CustomButton
                  wrapperClassName='col-md-4 '

                  icon={<img src={Images.LogoGoogle} />}
                  btnClassName='btn-light w-100'
                />
                <CustomButton
                  btnClassName='btn-light w-100'
                  wrapperClassName='col-md-4'

                  icon={<img src={Images.LogoApple} />}

                />
                <CustomButton
                  btnClassName='btn-light w-100'
                  icon={<img src={Images.LogoFb} />}
                  wrapperClassName='col-md-4'
                />
              </div>
              <div className="d-flex align-items-center justify-content-center my-3">
                <p className="mb-0 me-2">Already have an account?</p>
                <Link to={routers.loginRouter} style={{ color: '#53B4E4', textDecoration: 'line', fontWeight: '500' }}>
                  LOGIN HERE
                </Link>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
