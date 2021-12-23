import React, { Component } from "react";
import "./App.css";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import NavBar from "./Components/NavBar/NavBar";
import { Route } from "react-router";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import newsContainer from "./Components/News/NewsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "../src/Redux/App-reducer";
import Preloader from "./Components/Common/Preloader/preloader";
import { compose } from "redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Redux-store";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper spinnerWrapper">
        <HeaderContainer />
        <NavBar />
        {/* <Profile /> */}
        <div className="app-wrapper-content">
          <Route path="/Dialogs" render={() => <DialogsContainer />}></Route>
          <Route
            path="/Profile/:userId?"
            render={() => <ProfileContainer />}
          ></Route>
          <Route path="/Users" component={UsersContainer}></Route>
          <Route path="/News" component={newsContainer}></Route>
          <Route path="/Login" component={() => <Login />}></Route>
          <Route path="/Settings" component={Settings}></Route>
          <Route path="/Friends" render={() => <FriendsContainer />}></Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);


let MainApp = (props) => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}


export default MainApp;