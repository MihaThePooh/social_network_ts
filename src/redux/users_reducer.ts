import {ActionsType, UserProfileType} from "../types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
// const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
// const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [
        {
            id: 1,
            fullName: "Yury",
            status: "I am a programmer",
            photoURL: "",
            followed: true,
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 2,
            photoURL: "",
            followed: true,
            fullName: "Sergey",
            status: "I am a boss",
            location: {city: "Moscow", country: "Russia"}
        },
        {
            id: 3,
            photoURL: "",
            followed: true,
            fullName: "Sasha",
            status: "I am a storekeeper",
            location: {city: "Kiev", country: "Ukraine"}
        }
    ] as Array<UserProfileType>,
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };
        // case SET_USERS:
        //     return {
        //         ...state,
        //         users: action.users
        //     };
        // case SET_CURRENT_PAGE:
        //     return {
        //         ...state,
        //         currentPage: action.currentPage
        //     };
        // case SET_TOTAL_USERS_COUNT:
        //     return {
        //         ...state,
        //         totalUsersCount: action.count
        //     };
        // case TOGGLE_IS_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     };
        // case TOGGLE_IS_FOLLOWING_PROGRESS:
        //     return {
        //         ...state,
        //         followingInProgress: action.isFetching
        //             ? [...state.followingInProgress, action.userId]
        //             : state.followingInProgress.filter(id => id != action.userId)
        //     };

        default:
            return state
    }
};

export const followAC = (userId: number) => ({type: FOLLOW, userId}  as const);
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId}  as const);
export const setUsers = (users: Array<UserProfileType>) => ({type: SET_USERS, users}  as const);

// export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
// export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
// export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
// export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});
//
// export const getUsers = (setCurrentPage, pageSize) => {
//     return (dispatch) => {
//         dispatch(toggleIsFetching(true));
//
//         usersAPI.getUsers(setCurrentPage, pageSize)
//             .then(data => {
//                 dispatch(toggleIsFetching(false));
//                 dispatch(setUsers(data.items));
//                 dispatch(setUsersTotalCount(data.totalCount))
//             })
//     }
// };
//
// export const follow = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         usersAPI.follow(userId)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(followAC(userId))
//                 }
//                 dispatch(toggleFollowingProgress(false, userId))
//             })
//     }
// };
//
// export const unfollow = (userId) => {
//     return (dispatch) => {
//         dispatch(toggleFollowingProgress(true, userId));
//         usersAPI.unfollow(userId)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(unfollowAC(userId))
//                 }
//                 dispatch(toggleFollowingProgress(false, userId))
//             })
//     }
// };

export default usersReducer


/*
import {UserProfileType, UsersPageType} from "../types";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";


const initialState = {
    users: [
        {
            id: 1,
            fullName: "Misha",
            status: "Still learning =)",
            photoURL: "",
            followed: false,
            location: {city: "Saint-P", country: "Russia"}
        },
        {
            id: 2,
            fullName: "LoL",
            status: "What?!",
            photoURL: "",
            followed: false,
            location: {city: "Minsk", country: "Belarus"}
        },
        {
            id: 3,
            fullName: "Dog",
            status: "Hrrrr",
            photoURL: "",
            followed: false,
            location: {city: "Kiev", country: "Ukraine"}
        }
    ] as Array<UserProfileType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, // array of users ids
};

type InitialStateType = typeof initialState

const users_reducer = (state: UsersPageType, action: any): InitialStateType => {
    switch (action.type) {
        // case FOLLOW:
        //     return {
        //         ...state,
        //         users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        //     };
        // case UNFOLLOW:
        //     return {
        //         ...state,
        //         users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
        //     };
        // case SET_USERS:
        //     return {
        //         ...state,
        //         status: action.status
        //     };
        // case SET_USER_PROFILE:
        //     return {
        //         ...state,
        //         users: action.users
        //     };
        // case SET_CURRENT_PAGE:
        //     return {
        //         ...state,
        //         followingInProgress: action.isFetching
        //             ? [...state.followingInProgress, action.userIf]
        //             : state.followingInProgress.filter(id => != action.userId)
        //     };
        default:
            return state
    }
};

export const followSuccess = (userId: number) => ({type: FOLLOW, userId} as const);
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsers = (users: Array<UserProfileType>) => ({type: SET_USERS, users} as const);
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const);
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const);
export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const);

// export const requestUsers = (page: number, pageSize: number) => {
//     return async (dispatch: any) => {
//         dispatch(toggleIsFetching(true));
//         dispatch(setCurrentPage(page));
//
//         let data = await usersAPI.getUsers(page, pageSize);
//         dispatch(toggleIsFetching(false));
//         dispatch(setUsers(data.items));
//         dispatch(setTotalUsersCount(data.totalCount))
//     }
// };
//
// const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
//     dispatch(toggleFollowingInProgress(true, userId))
//     let response = await apiMethod(userId)
//
//     if (response.data.resultCode === 0) {
//         dispatch(actionCreator(userId))
//     }
//     dispatch(toggleFollowingInProgress(false, userId))
// };
//
// export const follow = (userId: number) => {
//     return async (dispatch: any) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), followSuccess)
//     }
// };
//
// export const unfollow = (userId: number) => {
//     return async (dispatch: any) => {
//         followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
//     }
// };


// export const getUserProfile = (userId: number) => async (dispatch: any) => {
//     const response = await usersAPI.getProfile(userId);
//     dispatch(setUserProfileAC(response.data))
// };
// export const getStatus = (userId: number) => async (dispatch: any) => {
//     const response = await usersAPI.getStatus(userId);
//     dispatch(setStatusAC(response.data))
// };
// export const updateStatus = (userId: string) => async (dispatch: any) => {
//     try {
//         const response = await usersAPI.updateStatus(status);
//
//         if (response.data.resultCode === 0) {
//             dispatch(setStatus(status))
//         }
//     } catch (error) {
//         //
//     }
// };
// export const savePhoto = (file: any) => async (dispatch: any) => {
//     const response = await usersAPI.savePhoto(file);
//
//     if (response.data.resultCode === 0) {
//         dispatch(savePhotoSuccessAC(response.data.data.photos))
//     }
// };
// export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
//     const userId = getState().auth.userId;
//     const response = await profileAPI.saveProfile(profile)
// };


export default users_reducer
*/