import {connect} from "react-redux";
import {UserProfileType} from "../../types";
import {follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";
import {Users} from "./Users";
import React, {useEffect} from "react";
import {Preloader} from "../../common/Preloader/Preloader";


type MapStatePropsType = {
    users: Array<UserProfileType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

function UsersAPI(props: UsersPropsType) {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize);
    }, []);

    const setCurrentPageHandler = (p: number) => {
        props.getUsers(p, props.pageSize);
    };

    return <>
        {props.isFetching ? <Preloader/> : null}
        <Users
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            users={props.users}
            currentPage={props.currentPage}
            follow={props.follow}
            unfollow={props.unfollow}
            setCurrentPageHandler={setCurrentPageHandler}
            toggleFollowingProgress={props.toggleFollowingProgress}
            followinInProgress={props.followingInProgress}
        />
    </>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
})(UsersAPI);