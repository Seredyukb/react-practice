import React from "react";
import Field from "redux-form/lib/Field";
import reduxForm from "redux-form/lib/reduxForm";
import {
  MaxLength30,
  MinLength2,
  required,
} from "../../../Utils/Validators/validators";
import { TextArea } from "../../Common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  let postsElements = props.postData.map((p) => {
    return <Post message={p.message} count={p.count} />;
  });

  let addNewPosta = (values) => {
    props.addPost(values.mypoststextarea);
  };

  let myPostsForm = (props) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            component={TextArea}
            name="mypoststextarea"
            validate={[required, MaxLength30, MinLength2]}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    );
  };

  let MyPostsFormRedux = reduxForm({
    form: "MyPosts",
  })(myPostsForm);

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostsFormRedux onSubmit={addNewPosta} />
      <div className={classes.posts}>
        {postsElements}
        {/* <Post message={postData[0].message} count={postData[0].count} />
                <Post message={postData[1].message} count={postData[1].count} /> */}
      </div>
    </div>
  );
});
export default MyPosts;
