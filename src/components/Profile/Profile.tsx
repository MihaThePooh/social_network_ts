import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types";

function Profile(props: ProfileType) {

    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile