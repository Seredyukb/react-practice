import React from 'react';
import './App.css';
import Profile from './Components/Profile';
import Header from './Components/Header';
import NavBar from './Components/NavBar';

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