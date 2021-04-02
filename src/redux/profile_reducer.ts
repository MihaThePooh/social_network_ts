import {ActionsType, PhotosType, PostsType, ProfileType} from "../types";

const ADD_POST = "ADD_POST";
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT";
const SET_STATUS = "SET_STATUS";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELET_POST = "DELET_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

const initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 45},
        {id: 2, message: 'Programming.....', likesCount: 18}
    ] as Array<PostsType>,
    messageForNewPost: ""
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
        // case SET_STATUS:
        //     return {
        //         ...state,
        //         status: action.status
        //     };
        // case SET_USER_PROFILE:
        //     return {
        //         ...state,
        //         profile: action.profile
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

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
};
export const changeNewTextAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
};
export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const
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