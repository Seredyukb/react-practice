import React from "react";
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div className={classes.content}>
            <img src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;