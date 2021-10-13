import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>
            My posts
            <Post message='Hello, how r u?' count='15' />
            <Post message='Do you love me?' count='20' />
        </div>
    )
}
export default MyPosts;