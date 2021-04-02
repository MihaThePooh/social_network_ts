import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return (
        <div>
            <div>
                <img className={s.avaWallpaper} src=""/>
            </div>
            <span className={s.discriptionBlock}>
                <img className={s.avaProfile} src="" />
                <div>aboutMe: props.profile.aboutMe</div>
                <div>fullName: props.profile.fullName</div>
            </span>
        </div>
    )
};

export default ProfileInfo