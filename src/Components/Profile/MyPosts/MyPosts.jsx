import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    let postsElements = props.postData.map(p => { return <Post message={p.message} count={p.count} /> })
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
                {/* <Post message={postData[0].message} count={postData[0].count} />
                <Post message={postData[1].message} count={postData[1].count} /> */}
            </div>
        </div>
    )
}
export default MyPosts;