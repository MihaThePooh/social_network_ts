import React from "react";
import {UserProfileType} from "../../types";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserProfileType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPageHandler: (p: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followinInProgress: number[]
}

export function Users(props: UsersPropsType) {

    return <>
        <Paginator currentPage={props.currentPage}
                   pageSize={props.pageSize}
                   totalUsersCount={props.totalUsersCount}
                   setCurrentPageHandler={props.setCurrentPageHandler}/>
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       followinInProgress={props.followinInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
            />)
        }
    </>
}