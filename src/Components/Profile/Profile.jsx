import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
    return (

        <div>
            <ProfileInfo profile={props.profile} status={props.status} thunkUpdateStatus={props.thunkUpdateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
export default Profile;