import React from "react";
import { Redirect } from "react-router";
import classes from "./News.module.css";

const News = (props) => {
  if (!props.isAuth) {
    return <Redirect to="/Login" />;
  }
  return (
    <div>
      {props.newsData.map((m) => (
        <div key={m.id} className={classes.main}>
          <div>
            <img
              src={m.resourceLogo}
              alt="resourcePic"
              className={classes.resourceLogo}
            />
          </div>
          <div>
            <span>{m.description}</span>
            <div>
              <br />
              <span>{m.description1}</span>
              <br />
            </div>
            <div>
              <a href={m.linkUrl}>
                <span className={classes.cage}>Подробнее...</span>
              </a>
            </div>
          </div>
          <div>
            <img
              src={m.photoUrl}
              alt="publicPhoto"
              className={classes.photoUrl}
            />
          </div>
        </div>
      ))}
      <div className={classes.buttonWrapper}>
        <button className={classes.button}>Далее</button>
      </div>
    </div>
  );
};
export default News;
