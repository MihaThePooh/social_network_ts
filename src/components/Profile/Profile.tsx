import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

type RootStateType = {
    profilePage: ProfilePageType
    addPost: (postMessage: string) => void
    message: string
    onPostChange: (newText: string) => void
}
type ProfilePageType = {
    posts: Array<PostsType>
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}

function Profile(props: RootStateType) {

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     message={props.message}
                     onPostChange={props.onPostChange} />
        </div>
    )
}

export default Profile