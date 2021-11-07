import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types";

type ProfilePagePropsType = {
    profile: ProfileType
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

function Profile(props: ProfilePagePropsType) {

    return (
        <div>
            <ProfileInfo {...props} getStatus={props.getStatus} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile