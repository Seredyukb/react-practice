import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateMode = () => {
    setEditMode(true);
  };
  const deActivateMode = () => {
    setEditMode(false);
  };
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
    props.thunkUpdateStatus(status);
  };

  return (
    <div>
      {!editMode && (
        <div onDoubleClick={activateMode}>
          <span className={classes.status}>Check(click) my Status: </span>
          <span className={(classes.status, classes.statusBorder)}>
            {props.status || "-------"}
          </span>
        </div>
      )}
      {editMode && (
        <div onBlur={deActivateMode}>
          <span className={classes.status}>Check(click) my Status: </span>
          <input
            className={classes.status}
            autoFocus
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
