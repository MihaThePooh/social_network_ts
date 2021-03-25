import React from 'react';
import s from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {StoreType} from "./redux/state";
// import state, {addPost, onPostChange, StoreType} from './redux/state'

type PropsType = {
    store: StoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                    message={state.profilePage.messageForNewPost}
                                                                    dispatch={props.store.dispatch.bind(props.store)} />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
