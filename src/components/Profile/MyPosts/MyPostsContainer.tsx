import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profile_reducer";
import {Dispatch} from "redux";
import {PostsType} from "../../../types";
import {AppStateType} from "../../../redux/redux_store";


type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}
type MapStatePropsType = {
    posts: Array<PostsType>
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile_reducer.posts
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: (newPostText: string) => dispatch(addPost(newPostText))
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
