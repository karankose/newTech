import React from 'react'
import Navbars from './Navbars';
import Footer from './Footer';
import FormInputs from '../reuseComponts/reuseFormComponent/FormInputs;';

 const Login = () => {
  return (
    <>
    <Navbars/>
    <div className='container bg-danger'>
      <div className='d-flex align-items-center justify-content-center'>
        <div className='border rounded shadow col-md-6'>
          <div className='text-start mb-2'>
            <h1>Welcome Back</h1>
            <p>Please enter your details to sign in.</p>
          </div>
          <form action="">
            <div className='row justify-content-center'>
              <FormInputs label={'Email Address'} placeholder={'enter your email'} type={'email'} required={true} wrapperClassName='col-md-6' name={'email'}/>
            </div>
            <div className='row justify-content-center'>
              <FormInputs label={'Password'} placeholder={'enter your password'} type={'password'} required={true} wrapperClassName='col-md-6' name={'password'}/>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    )
  
}

export default Login;