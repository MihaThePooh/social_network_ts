import React from "react";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes} from "../../redux/state";

type RootStateType = {
    profilePage: ProfilePageType
    message: string
    dispatch: (action: ActionsTypes) => void
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
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     message={props.message}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile