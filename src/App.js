import React from 'react';
import './App.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import NavBar from './Components/NavBar/NavBar';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import FriendsContainer from './Components/Friends/FriendsContainer';
import newsContainer from './Components/News/NewsContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        {/* <Profile /> */}
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <DialogsContainer />} />
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/Users' component={UsersContainer} />
          <Route path='/News' component={newsContainer} />
          <Route path='/Login' component={Login} />
          <Route path='/Settings' component={Settings} />
          <Route path='/Friends' render={() => <FriendsContainer />} />
        </div>
      </div>
    </BrowserRouter>

  )

}

export default App;