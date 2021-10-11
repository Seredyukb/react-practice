import React from "react";
import classes from './Profile.module.css';


const Profile = () => {
    return (
        <div className={classes.content}>
            <img src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div className={classes.item}>Post 1</div>
                <div className={classes.item}>Post 2</div>
            </div>
        </div>
    )
}
export default Profile;