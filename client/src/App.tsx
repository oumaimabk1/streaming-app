import React from 'react';
import { ChakraProvider, Switch } from '@chakra-ui/react';
import './App.css'
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './pages/forgotPassword';
import { RegistrationForm } from './pages/Registration';

function App() {
  return (
    <div className='App'>
      {/* app routes */}
      
        <Routes>
          <Route path="/" element={<RegistrationForm />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
          
        </Routes>
      
      {/* app routes */}


    </div>
  );
}

export default App;
