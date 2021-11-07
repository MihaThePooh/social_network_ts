import {ActionsType} from "../types";
import {getAuthUserData} from "./auth_reducer";
import {ThunkDispatch} from "redux-thunk";
import {AppStateType} from "./redux_store";

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

export const initializeApp = () => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsType>) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then( () => {
            dispatch(initializedSuccess())
        })
};

export default app_reducer