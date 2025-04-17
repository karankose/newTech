// import React from 'react'
// import Navbars from './Navbars';
// import Footer from './Footer';
// import FormInputs from '../reuseComponts/reuseFormComponent/FormInputs;';
// import CustomButton from '../reuseComponts/reuseButton/CustomButton';

// const SignUp = () => {
//     return (
//         <>  
//             <Navbars />
//             <div className='container'>
//                 <div className='d-flex align-items-center justify-content-center   '>
//                     <div className='' ><h1>Welcome</h1>
//                         <p>Find Your Next Sponsored Job in the UK!</p>
//                     </div>
//                 </div >
//                 <form action="">
//                     <div className='row align-items-center justify-content-center '>
//                         <FormInputs
//                             wrapperClassName='col-md-3'
//                             label={'First Name'}
//                             name={'First Name'}
//                             placeholder='enter first '
//                             required={true}
//                         />

//                         <FormInputs wrapperClassName='col-md-3' label={'last name'} placeholder={'enter last name'}
//                             name={'last name'}
//                         />
//                     </div>
//                     <div className='row align-items-center justify-content-center '>
//                         <FormInputs
//                             wrapperClassName='col-md-6'
//                             label={'Email Address'}
//                             name={'email'}
//                             placeholder='enter your email '
//                             required={true}
//                             type={'email'}
//                         />
   
//                     </div>
//                     <div className='row align-items-center justify-content-center '>
//                         <FormInputs
//                             wrapperClassName='col-md-6'
//                             label={'Password '}
//                             name={'Password'}
//                             placeholder='enter your password'
//                             required={true}
//                             type='password'
//                         />
   
//                     </div>

//                     <div className='row align-items-center justify-content-center '>
//                         <FormInputs
//                             wrapperClassName='col-md-6'
//                             label={'Confirm Password '}
//                             name={'Confirm Password'}
//                             placeholder='enter your password'
//                             required={true}
//                             type='password' 
//                         />
                    
//                     </div>
//                     <div className='row align-items-center justify-content-center '>          
//       <CustomButton
//         label="Submit"
//         btnClassName="btn-primary col-md-12 "
//         onClick={()=>{}}
//         wrapperClassName='col-md-6'
//         type='submit'
//       /> 
//       </div>
       
//                     <div className='' >
//                         <p>or continue with</p>
//                     </div>
              

//                 </form>
//             </div>
//             <Footer />
//         </>
//     )
// }


// export default SignUp;



import React from 'react';
import Navbars from './Navbars';
import Footer from './Footer';
import FormInputs from '../reuseComponts/reuseFormComponent/FormInputs;';
import CustomButton from '../reuseComponts/reuseButton/CustomButton';

const SignUp = () => {
  return (
    <>
      <Navbars />
      <div className='container'>
        <div className='d-flex align-items-center justify-content-center'>
          <div className='border rounded shadow col-md-6'>
            <div className='text-start mb-2'>
              <h1>Welcome</h1>
              <p>Find Your Next Sponsored Job in the UK!</p>
            </div>
            <form action="">
              <div className='row justify-content-center'>
                <FormInputs
                  wrapperClassName='col-md-6 col-lg-3'
                  label={'First Name'}
                  name={'firstName'}
                  placeholder='Enter First Name'
                  required={true}
                />
                <FormInputs
                  wrapperClassName='col-md-6 col-lg-3'
                  label={'Last Name'}
                  name={'lastName'}
                  placeholder='Enter Last Name'
                />
              </div>

              <div className='row justify-content-center'>
                <FormInputs
                  wrapperClassName='col-md-8'
                  label={'Email Address'}
                  name={'email'}
                  placeholder='Enter your email'
                  required={true}
                  type='email'
                />
              </div>

              <div className='row justify-content-center'>
                <FormInputs
                  wrapperClassName='col-md-8'
                  label={'Password'}
                  name={'password'}
                  placeholder='Enter your password'
                  required={true}
                  type='password'
                />
              </div>

              <div className='row justify-content-center'>
                <FormInputs
                  wrapperClassName='col-md-8'
                  label={'Confirm Password'}
                  name={'confirmPassword'}
                  placeholder='Re-enter your password'
                  required={true}
                  type='password'
                />
              </div>

              <div className='row justify-content-center'>
                <CustomButton
                  label="Submit"
                  btnClassName="btn-primary w-100"
                  onClick={() => {}}
                  wrapperClassName='col-md-8'
                  type='submit'
                />
              </div>

              <div className='text-start mt-3'>
                <p>or continue with</p>
              </div>

              <div className='row justify-content-center'>
                <CustomButton
                  label="google"
                  btnClassName="btn-primary w-100"
                  onClick={() => {}}
                  wrapperClassName='col-md-8'
                  type='submit'
                />
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
