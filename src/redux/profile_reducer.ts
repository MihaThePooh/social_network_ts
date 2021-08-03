import {ActionsType, PostsType, ProfilePageType, ProfileType} from "../types";
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
// const DELET_POST = "DELET_POST";
// const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 45},
        {id: 2, message: 'Programming.....', likesCount: 18}
    ] as Array<PostsType>,
    profile: {
        fullName: 'undefined',
        userId: 99999999,
        aboutMe: "some about me",
        photos: {
            small: "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg",
            large: "https://t4.ftcdn.net/jpg/03/32/59/65/360_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg"
        },
        status: "statusFromReducer"
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
                    {id: new Date().getTime(), message: action.newPostText, likesCount: 0}
                ]
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                profile: {
                    ...state.profile,
                    status: action.status
                }
            };
        }
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
            return state
    }
};

export const addPost = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
};
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
};
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const profile = await usersAPI.getProfile(+userId);
    const status = await profileAPI.getStatus(+userId);
    dispatch(setUserProfile(profile));
    dispatch(setStatus(status))
};
export const setStatus = (status: string) => {

    return {
        type: SET_STATUS,
        status
    } as const
};
// export const updateStatus = (status: string) => {
//     return {
//         type:
//     } as const
// }
// export const deletePostAC = (postId: number) => {
//     return {
//         type: DELET_POST,
//         postId
//     } as const
// };
// export const savePhotoSuccessAC = (photos: PhotosType) => {
//     return {
//         type: SAVE_PHOTO_SUCCESS,
//         photos
//     } as const
// };
export const getStatus = (userId: number) => async (dispatch: any) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};
export const updateStatus = (status: string) => async (dispatch: any) => {
    try {
        const response = await profileAPI.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (error) {
        //
    }
};
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
