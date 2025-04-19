import React from 'react'
import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Home from './pages/Home';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import routers from './Routers';
import AboutUs from './pages/AboutUs';


const App = () => {
  return (
    <>
    <Routes>
      <Route path={routers.homeRouter} element={<Home/>}    />
      <Route path={routers.loginRouter} element={<Login/>}/>
      <Route path={routers.signupRouter} element={<SignUp/>} />
      <Route path={routers.aboutRouter} element={<AboutUs/>} />
    </Routes> 
      
   
    
    </>
    )
}
export default App;