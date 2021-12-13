import React from "react";
import Preloader from "../../Common/Preloader/preloader";
import classes from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
        
    }

    return (
        <div className={classes.content}>
            {/* <img src='https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' /> */}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} alt="asd" />
                <div>
                <span>{props.profile.fullName}</span><br />

                <ProfileStatus status={props.status} thunkUpdateStatus={props.thunkUpdateStatus}/>

                <span className={classes.status}>{props.profile.aboutMe}</span><br />


                <br />
                <span>Мои контакты:</span><br />
                <br />
                <span>facebook: {props.profile.contacts.facebook}</span><br />
                <span>website: {(!props.profile.contacts.website)?'Информация не заполнена':props.profile.contacts.website}</span><br />
                <span>vk: {(!props.profile.contacts.vk)?'Информация не заполнена':props.profile.contacts.vk}</span><br />
                <span>twitter: {(!props.profile.contacts.twitter)?'Информация не заполнена':props.profile.contacts.twitter}</span><br />
                <span>instagram: {(!props.profile.contacts.instagram)?'Информация не заполнена':props.profile.contacts.instagram}</span><br />
                <span>youtube: {(!props.profile.contacts.youtube)?'Информация не заполнена':props.profile.contacts.youtube}</span><br />
                <span>github: {(!props.profile.contacts.github)?'Информация не заполнена':props.profile.contacts.github}</span><br />
                <span>mainLink: {(!props.profile.contacts.mainLink)?'Информация не заполнена':props.profile.contacts.mainLink}</span><br />
                <br /><br />
                <span> В поиске работы: {(!props.profile.lookingForAJob)?'ДА':'НЕТ'}</span><br />
                <span> Описание: {props.profile.lookingForAJobDescription}</span>

                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;

