import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserProfileType} from "../../types";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";
import axios from "axios";
import {Users} from "./Users";
import React, {useEffect} from "react";
import {Preloader} from "../../common/Preloader/Preloader";


type MapStatePropsType = {
    users: Array<UserProfileType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserProfileType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export function UsersAPI(props: UsersPropsType) {

    useEffect(() => {
        if (props.users.length === 0) {
            props.toggleIsFetching(true);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
                .then(response => {
                    props.toggleIsFetching(false);
                    props.setUsers(response.data.items);
                    props.setTotalUsersCount(response.data.totalCount);
                })
        }
    }, [])


    const setCurrentPageHandler = (p: number) => {
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setCurrentPage(p);
                debugger
                props.setUsers(response.data.items);
                props.setTotalUsersCount(response.data.totalCount);
            })
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
        />
    </>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPI);