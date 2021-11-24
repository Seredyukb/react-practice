import React from "react";
import { NavLink } from "react-router-dom";
import classes from './NavBar.module.css';
import FriendsItem from "../Friends/FriensItem/FriendsItem";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/Profile' activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Dialogs' activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Users' activeClassName={classes.active}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Settings' activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/Friends' activeClassName={classes.active}>Friends</NavLink>
            </div>
        </nav>

    )

};
export default NavBar;