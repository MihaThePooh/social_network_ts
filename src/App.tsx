import React from 'react';
import s from "./App.module.css"
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ReduxStoreType} from "./redux/redux_store";
import ProfileContainer from "./components/Profile/ProfileContainer";

type PropsType = {
    store: ReduxStoreType
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();

    return (
        <BrowserRouter>
            <div className={s.appWrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/users'} render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
