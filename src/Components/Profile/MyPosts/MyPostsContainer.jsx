import React from "react";
import { actionCreatorAddPosta, actionCreatorUpdateNewPosta } from "../../../Redux/ProfileReducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {


    return (

        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    let action = actionCreatorAddPosta();
                    store.dispatch(action);
                }
                let addNewPosta = (text) => {
                    let action = actionCreatorUpdateNewPosta(text);
                    store.dispatch(action);
                }
                return < MyPosts addNewPost={addNewPosta} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
            }}

        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;


