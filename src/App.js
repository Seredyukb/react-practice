import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
  return ( 
    <div className="app-wrapper">
    <Header/>
    <NavBar/>
    <Profile/>
    </div>

  )

}

export default App;