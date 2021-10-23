import React from "react";
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    debugger;
    const path = '/dialogs/' + props.id;
    return (
        <div className={classes.dialog + ' ' + classes.active + ' ' + classes.item}>
            <img src={`${props.ava}`} />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )

}

export default DialogItem;


{/* <div className={classes.FriendsItemBlock}>
            <div className={classes.item}>
                <img src={`${props.ava}`} />
                <div>{props.name}</div>
            </div>
        </div> */}