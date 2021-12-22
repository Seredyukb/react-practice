import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, thunkUpdateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={classes.content}>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large} alt="asd" />
        <div>
          <span>{profile.fullName}</span>
          <br />
          <ProfileStatusWithHooks
            status={status}
            thunkUpdateStatus={thunkUpdateStatus}
          />
          <span className={classes.status}>{profile.aboutMe}</span>
          <br />
          <br />
          <span>Мои контакты:</span>
          <br />
          <br />
          <span>facebook: {profile.contacts.facebook}</span>
          <br />
          <span>
            website:{" "}
            {!profile.contacts.website
              ? "Информация не заполнена"
              : profile.contacts.website}
          </span>
          <br />
          <span>
            vk:{" "}
            {!profile.contacts.vk
              ? "Информация не заполнена"
              : profile.contacts.vk}
          </span>
          <br />
          <span>
            twitter:{" "}
            {!profile.contacts.twitter
              ? "Информация не заполнена"
              : profile.contacts.twitter}
          </span>
          <br />
          <span>
            instagram:{" "}
            {!profile.contacts.instagram
              ? "Информация не заполнена"
              : profile.contacts.instagram}
          </span>
          <br />
          <span>
            youtube:{" "}
            {!profile.contacts.youtube
              ? "Информация не заполнена"
              : profile.contacts.youtube}
          </span>
          <br />
          <span>
            github:{" "}
            {!profile.contacts.github
              ? "Информация не заполнена"
              : profile.contacts.github}
          </span>
          <br />
          <span>
            mainLink:{" "}
            {!profile.contacts.mainLink
              ? "Информация не заполнена"
              : profile.contacts.mainLink}
          </span>
          <br />
          <br />
          <br />
          <span>
            {" "}
            В поиске работы: {!profile.lookingForAJob ? "ДА" : "НЕТ"}
          </span>
          <br />
          <span> Описание: {profile.lookingForAJobDescription}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
