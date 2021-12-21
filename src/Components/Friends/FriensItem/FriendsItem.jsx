import React from "react";
import classes from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <div className={classes.FriendsItemBlock}>
      <div className={classes.item}>
        <img src={`${props.ava}`} alt="boom" />
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default FriendsItem;
