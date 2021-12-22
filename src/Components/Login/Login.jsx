import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";
import { login, logout } from "../../Redux/Auth-reducer";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const Login = ({ login, isAuth }) => {
  let onSubmit = (values) => {
    login(values.email, values.password, values.rememberMe);
  };
  if (isAuth) {
    return <Redirect to="profile" />;
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
