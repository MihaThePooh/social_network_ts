import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../types";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.avaWallpaper} src=""/>*/}
            {/*</div>*/}
            <span className={s.discriptionBlock}>
                <img className={s.avaProfile} src={props.profile.photos!.large} />
                <ProfileStatus status={props.profile.status} updateStatus={props.updateStatus}/>
                <div>fullName: {props.profile.fullName}</div>
                <div>userАЙДИ: {props.profile.userId}</div>
                <div>aboutMe: {props.profile.aboutMe}</div>
            </span>
        </div>
    )
};

export default ProfileInfo