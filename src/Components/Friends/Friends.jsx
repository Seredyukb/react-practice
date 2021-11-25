import React from "react";
import classes from "./Friends.module.css";
import FriendsItem from "./FriensItem/FriendsItem";


const Friends = (props) => {
    debugger;
    let arrFriendsData = props.friendsData.map((el) => {
        return (
            <FriendsItem ava={el.ava} name={el.name} />
        )
    }

    )
    return (
        <div className={classes.FriendsBlock}>
            {arrFriendsData}
            {/* <FriendsItem ava={props.state.friendsData[0].ava} name={props.state.friendsData[0].name} />
            <FriendsItem ava={props.state.friendsData[1].ava} name={props.state.friendsData[1].name} />
            <FriendsItem ava={props.state.friendsData[2].ava} name={props.state.friendsData[2].name} />
            <FriendsItem ava={props.state.friendsData[3].ava} name={props.state.friendsData[3].name} /> */}
        </div>
    )

}

export default Friends;