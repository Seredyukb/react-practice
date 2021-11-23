import { connect } from "react-redux";
import { actionCreatorAddPosta, actionCreatorUpdateNewPosta } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";




let mapStateToProps=(state)=>{
    debugger;
    return {
        postData:state.profilePage.postData,
        newPostText:state.profilePage.newPostText
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addPost:()=>{dispatch(actionCreatorAddPosta())},
        addNewPost:(text)=>{dispatch(actionCreatorUpdateNewPosta(text))}
    }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default MyPostsContainer;


