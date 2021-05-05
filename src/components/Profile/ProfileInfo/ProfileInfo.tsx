import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileType} from "../../../types";

const ProfileInfo = (props: ProfileType) => {

    if (!props) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img className={s.avaWallpaper} src=""/>
            </div>
            <span className={s.discriptionBlock}>
                <img className={s.avaProfile} src={props.photos.large} />
                <div>fullName: {props.fullName}</div>
                <div>userАЙДИ: {props.userId}</div>
                <div>aboutMe: {props.aboutMe}</div>
            </span>
        </div>
    )
};

export default ProfileInfo