import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://genlogo.com/u_ajax.php?handler=GenLogo&command=ajax_site_get_colors&t=Connect&s=Connect%20to%20connect&g=315&l=79&f=264&c=250&x=1637844578&oid=278732"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
