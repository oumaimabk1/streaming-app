import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Navbar from './components/Navbar';
import ForgotPassword from './pages/forgotPassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import RegistrationForm from './pages/Registration';
import { Search } from './pages/Search';
import ResetPassord from './pages/resetPassord';
import DetailMovie from './pages/DetailMovie';
import FavoriteMovies from './pages/FavoritePage';
import Serie from './pages/Serie';
import Detailserie from './pages/DetailSerie';

function App() {
  const isLoggedIn = localStorage.getItem('token');
  console.log(isLoggedIn)
  return (
    <div className='App'>
      {/* app routes */}

      {isLoggedIn ?
        <>
          <Navbar />
          <Routes>
          <Route path="/Home" element={<Home />}></Route>
            <Route path="/Search" element={<Search />}></Route>
            <Route path="/Movies" element={<Movies />}></Route>
            <Route path="/Series" element={<Serie />}></Route>
            <Route path="/Serie/:id" element={<Detailserie />}></Route>
            <Route path="/Movie/:id" element={<DetailMovie />}></Route>
            <Route path="/FavoriteMovies" element={<FavoriteMovies />}></Route>
          </Routes>
        </>
        :
        <Routes>
          <Route path="/register" element={<RegistrationForm />}></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/forgotPassword" element={<ForgotPassword />} ></Route>
          <Route path="/ResetPassord/:token" element={<ResetPassord />} ></Route>
          <Route path="/" element={<Home />}></Route>

        </Routes>}

      {/* app routes */}
    </div>
  );
}

export default App;