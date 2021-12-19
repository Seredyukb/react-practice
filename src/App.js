import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import { initializeApp } from '../src/Redux/App-reducer'
import Preloader from './Components/Common/Preloader/preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }


    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBar />
          {/* <Profile /> */}
          <div className='app-wrapper-content'>
            <Route path='/Dialogs' render={() => <DialogsContainer />} ></Route>
            <Route path='/Profile/:userId?' render={() => <ProfileContainer />} ></Route>
            <Route path='/Users' component={UsersContainer} ></Route>
            <Route path='/News' component={newsContainer} ></Route>
            <Route path='/Login' component={() => <Login />} ></Route>
            <Route path='/Settings' component={Settings} ></Route>
            <Route path='/Friends' render={() => <FriendsContainer />} ></Route>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)

