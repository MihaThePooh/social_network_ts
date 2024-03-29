import {addPost, setStatus, setUserProfile} from "./redux/profile_reducer";
import {sendMessageAC} from "./redux/dialogs_reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./redux/users_reducer";
import {setAuthUserData} from "./redux/auth_reducer";
import {initializedSuccess} from "./redux/app_reducer";

export type UsersPageType = {
    users: Array<UserProfileType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> // array of users ids
}

export type UserProfileType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: any
        large: any
    }
    status: null | string | undefined
    followed: boolean
}
export type LocationUserType = {
    city: string
    country: string
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}

export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    aboutMe?: string
    contacts?: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string
    }
    fullName?: string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    photos?: {
        small: string,
        large: string
    }
    userId?: number
    isAuth?: boolean
    status?: string
}

export type MessageType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType
}

export type AuthStateType = {
    auth_reducer: {
        userId: number
        email: string
        login: string
        isAuth: boolean
    }
}

export type ProfileActionsTypes = ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatus>

export type DialogsActionsTypes = ReturnType<typeof sendMessageAC>

export type UsersActionsTypes = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>

export type AuthActionsTypes = ReturnType<typeof setAuthUserData>

export type AppActionsTypes = ReturnType<typeof initializedSuccess>

export type ActionsType = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes | AuthActionsTypes | AppActionsTypes
