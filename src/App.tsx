import React from 'react';
import s from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import state, {addPost, onPostChange} from './redux/state'

function App() {

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                    addPost={addPost}
                                                                    message={state.profilePage.messageForNewPost}
                                                                    onPostChange={onPostChange} />}/>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
