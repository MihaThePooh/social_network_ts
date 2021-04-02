import {addPostAC, changeNewTextAC} from "./redux/profile_reducer";
import {sendMessageAC, updateNewMessageBodyAC} from "./redux/dialogs_reducer";
import {followAC, setUsers, unfollowAC} from "./redux/users_reducer";

export type UsersPageType = {
    users: Array<UserProfileType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number> // array of users ids
}

export type UserProfileType = {
    id: number
    fullName: string
    status: string
    photoURL: string
    followed: boolean
    location: LocationUserType
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
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDecription: string
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
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
    newMessageBody: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}

export type ProfileActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewTextAC>
export type DialogsActionsTypes = ReturnType<typeof updateNewMessageBodyAC> | ReturnType<typeof sendMessageAC>
export type UsersActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsers>

export type ActionsType = ProfileActionsTypes | DialogsActionsTypes | UsersActionsTypes
