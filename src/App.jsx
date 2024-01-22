import React from 'react';
import { AuthProvider } from './components/Authentication/auth';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Authentication/Login';
// import MyAccount from './components/MyAccount/MyAccount';
import RequireAuth from './components/Authentication/RequireAuth';
import Signup from './components/Authentication/Signup';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Chat/Home';


function App(props) {
  return (
    <div>
         <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/login"  element={<Login/>} ></Route>
                    {/* <Route path="/account" element={<RequireAuth><MyAccount/></RequireAuth>}></Route> */}
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Routes>
            </Router>
            </AuthProvider>
      
    </div>
  );
}

export default App;