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
import { thunkAuthCreator } from './Redux/Auth-reducer'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { compose } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.thunkAuthCreator();
  }
  render() {
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

export default connect(null, { thunkAuthCreator })(App)

