import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
    message: string
    onPostChange: (newText: string) => void
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

function MyPosts(props: MyPostsPropsType) {

    let posts = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    const addPost = () => {
        props.addPost(props.message)
    };

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    };


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea value={props.message} onChange={newTextChangeHandler}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts