import {AppStateType} from "./redux_store";
import {createSelector} from "reselect";

export const getUsers = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUsersSelector = (state: AppStateType) => {
    return getUsers(state).filter(u => true)
}
export const getUsersSelectorSuper = createSelector( getUsers, (users) => {
    debugger
    return users.filter(u => true)
})



export const getPageSizeSelector = (state: AppStateType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCountSelector = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPageSelector = (state: AppStateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingSelector = (state: AppStateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgressSelector = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}
