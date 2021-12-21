import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "../../Redux/Auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  id: state.auth.userId,
  email: state.auth.email,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
