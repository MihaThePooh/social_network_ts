import {ActionsType} from "../types";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: 0,
    email: "none",
    login: "none",
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
            return state
    }
};

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        userId,
        email,
        login,
        isAuth
    } as const
};

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        } else if (response.data.resultCode === 1) {
            return alert(response.data.messages[0])
        }
    })
};

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {



    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else if (response.data.resultCode === 1) {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}));
        }
    })
};

export const logout = () => (dispatch: any) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(0, "none", "none", false))
        } else if (response.data.resultCode === 1) {
            return alert(response.data.messages[0])
        }
    })
};

export default auth_reducer