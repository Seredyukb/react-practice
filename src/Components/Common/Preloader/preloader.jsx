import React from "react";
import classes from "./preloader.module.css";

let Preloader = () => {
  return (
    <div className={classes.spinnerWrapper}>
      <div className={classes.spinner}></div>;
    </div>
  );
};
export default Preloader;
