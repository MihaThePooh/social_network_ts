import {ActionsType} from "../types";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: 123,
    email: "example@mail.com",
    login: "login",
    isAuth: false
};

type InitialStateType = typeof initialState

const auth_reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            };
        }
        default:
            return initialState
    }
};

export const setAuthUserData = (userId: number, email: string, login: string) => {

    return {
        type: SET_USER_DATA,
        userId,
        email,
        login
    } as const
};

// export const getAuthUserData = () => (dispatch) => {
//     authAPI.me().then(response => {
//         if (response.data.resultCode === 0) {
//             let {id, login, email} = response.data.data;
//             dispatch(setAuthUserData(id, login, email))
//         } else if (response.data.resultCode === 1) {
//             return alert(response.data.messages[0])
//         }
//     })
// };

export default auth_reducer