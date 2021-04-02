import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostAC, changeNewTextAC} from "../../../redux/profile_reducer";
import {Dispatch} from "redux";
import {PostsType, ProfilePageType} from "../../../types";
import {AppStateType} from "../../../redux/redux_store";


type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}
type MapStatePropsType = {
    posts: Array<PostsType>
    messageForNewPost: string
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profile_reducer.posts,
        messageForNewPost: state.profile_reducer.messageForNewPost
    }
};
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewPostText: (text: string) => dispatch(changeNewTextAC(text)),
        addPost: () => dispatch(addPostAC())
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
