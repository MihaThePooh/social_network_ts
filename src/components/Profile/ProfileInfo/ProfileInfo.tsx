import React from 'react'
import s from './ProfileInfo.module.css'
// import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = () => {
    // if(!props.profile) {
    //     return <Preloader/>
    // }

    return (
        <div>
            <div>
                <img className={s.avaWallpaper} src="" alt="avaWallpaper"/>
            </div>
            <div className={s.discriptionBlock}>
                {/*<img src={props.profile.photos.large} />*/}
                <img src="" alt="ava" />
                <br></br>
                    <label>aboutMe: props.profile.aboutMe</label>
                <br></br>
                    <label>fullName: props.profile.fullName</label>
            </div>
        </div>
    )
}

export default ProfileInfo