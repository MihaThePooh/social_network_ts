import {combineReducers, createStore} from "redux";
import dialogs_reducer from "./dialogs_reducer";
import profile_reducer from "./profile_reducer";
import {usersReducer} from "./users_reducer";

const rootReduser = combineReducers({
    profile_reducer,
    dialogs_reducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReduser>

export const store = createStore(rootReduser);

export type ReduxStoreType = typeof store
