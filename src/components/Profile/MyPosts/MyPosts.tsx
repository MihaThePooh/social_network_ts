import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";


function MyPosts(props: MyPostsPropsType) {

    let posts = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPostHandler = () => {
        props.addPost()
    };


    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value;
        props.updateNewPostText(text)
    };


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.messageForNewPost} onChange={newTextChangeHandler}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts