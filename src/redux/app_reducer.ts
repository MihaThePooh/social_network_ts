import {ActionsType} from "../types";
import {getAuthUserData} from "./auth_reducer";

const SET_INITIALAIZED_SUCCESS = "SET_INITIALAIZED_SUCCESS";

const initialState = {
    initialized: false
};

type InitialStateType = typeof initialState

const app_reducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALAIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state
    }
};

export const initializedSuccess = () => {
    return {
        type: SET_INITIALAIZED_SUCCESS,
    } as const
};

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then( () => {
            dispatch(initializedSuccess())
        })
};

export default app_reducer