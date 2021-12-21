import { connect } from "react-redux";
import News from "./News";

let mapStateToProps = (state) => {
  return {
    newsData: state.newsPage.newsData,
    isAuth: state.auth.isAuth,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const newsContainer = connect(mapStateToProps, mapDispatchToProps)(News);
export default newsContainer;
