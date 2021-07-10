import {ActionsType, PhotosType, PostsType, ProfilePageType, ProfileType} from "../types";
import {usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";
const SET_STATUS = "SET_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELET_POST = "DELET_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 45},
        {id: 2, message: 'Programming.....', likesCount: 18}
    ] as Array<PostsType>,
    messageForNewPost: "",
    profile: {
        fullName: 'undefined',
        userId: 99999999,
        aboutMe: "some about me",
        photos: {
            small: "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
            large: "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
        }
    }
};

type InitialStateType = typeof initialState

const profile_reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {id: new Date().getTime(), message: state.messageForNewPost, likesCount: 0}
                ],
                messageForNewPost: ""
            };
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            };
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        // case SET_STATUS:
        //     return {
        //         ...state,
        //         status: action.status
        //     };
        // case DELET_POST:
        //     return {
        //         ...state,
        //         posts: state.posts.filter(p => p.id != action.postId)
        //     };
        // case SAVE_PHOTO_SUCCESS:
        //     return {
        //         ...state,
        //         profile: {...state.profile, photos: action.photos}
        //     };
        default:
            return initialState
    }
};

export const addPost = () => {
    return {
        type: ADD_POST
    } as const
};
export const changeNewText = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
};
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
};
export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(+userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
};
export const setStatusAC = (status: string) => {
    return {
        type: SET_STATUS,
        status
    } as const
};
export const deletePostAC = (postId: number) => {
    return {
        type: DELET_POST,
        postId
    } as const
};
export const savePhotoSuccessAC = (photos: PhotosType) => {
    return {
        type: SAVE_PHOTO_SUCCESS,
        photos
    } as const
};


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


export default profile_reducer
