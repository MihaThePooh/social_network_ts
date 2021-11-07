import React from "react";
import s from "./Users.module.css"
import {UserProfileType} from "../../types";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserProfileType
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followinInProgress: number[]
}

const User = ({user, followinInProgress, unfollow, follow}: UserPropsType) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                        <img className={s.userAva}
                             src={user.photos.small != null ?
                                 user.photos.small :
                                 "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followinInProgress.some(id => id === user.id)} onClick={() => {
                                unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={followinInProgress.some(id => id === user.id)} onClick={() => {
                                follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
            <span>
                        <div>{user.name}</div>
                        <hr/>
                </span>
        </div>
    )
};

export default User