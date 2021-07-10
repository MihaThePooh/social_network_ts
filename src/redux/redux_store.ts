import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import {usersReducer} from "./users_reducer";
import auth_reducer from "./auth_reducer";
import thunkMiddleware from "redux-thunk";

const rootReduser = combineReducers({
    profile_reducer,
    dialogs_reducer,
    usersPage: usersReducer,
    auth_reducer
});

export type AppStateType = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser, applyMiddleware(thunkMiddleware));

export type ReduxStoreType = typeof store
