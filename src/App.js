import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import { Route, Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import Friends from './Components/Friends/Friends';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/Profile' render={() => <Profile state={props.state.profilePage} addPosta={props.addPosta} />} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
          <Route path='/Friends' render={() => <Friends state={props.state.friendsPage} />} />
        </div>
      </div>
    </BrowserRouter>

  )

}

export default App;