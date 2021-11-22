import React from "react";
import { actionCreatorAddPosta, actionCreatorUpdateNewPosta } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        let action = actionCreatorAddPosta();
        props.store.dispatch(action);
    }
    let addNewPosta = (text) => {
        debugger;
        let action = actionCreatorUpdateNewPosta(text);
        props.store.dispatch(action);
    }
    return (
        < MyPosts addNewPost={addNewPosta} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer;


