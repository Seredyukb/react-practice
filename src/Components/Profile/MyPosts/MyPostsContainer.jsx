import { connect } from "react-redux";
import { actionCreatorAddPosta } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (mypoststextarea) => {
      dispatch(actionCreatorAddPosta(mypoststextarea));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
