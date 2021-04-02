import {Users} from "./Users"
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {UserProfileType, UsersPageType} from "../../types";
import {followAC, setUsers, unfollowAC} from "../../redux/users_reducer";
import {AppStateType} from "../../redux/redux_store";


type MapStatePropsType = {
    users: Array<UserProfileType>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserProfileType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserProfileType>) => {
            dispatch(setUsers(users))
        }
    }
};

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);