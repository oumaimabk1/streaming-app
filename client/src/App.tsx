import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ForgotPassword from './pages/forgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import RegistrationForm from './pages/Registration';
import {Search} from './pages/Search';
import ResetPassord from './pages/resetPassord';

function App() {

  return (
    <div className='App'>
      {/* app routes */}
      <Navbar />
        <Routes>

          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
          <Route path="/ResetPassord/:token" element={<ResetPassord />} ></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Search" element={<Search />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
        </Routes>
      {/* app routes */}
    </div>
  );
}

export default App;