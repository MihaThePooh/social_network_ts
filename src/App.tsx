import React, {useEffect} from 'react';
import s from "./App.module.css"
import Navbar from "./components/Navbar/Navbar";
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {AppStateType, ReduxStoreType} from "./redux/redux_store";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import {Preloader} from "./common/Preloader/Preloader";

type PropsType = {
    initializeApp: () => void,
    initialized: boolean
}

const App = (props: any) => {
    useEffect( () => {
        props.initializeApp()
    }, []);
    console.log(props)

    if (!props.initialized) return <Preloader/>

    return <div className={s.appWrapper}>
                <HeaderContainer/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                    <Route path={'/dialogs'} render={() => <DialogsContainer />}/>
                    <Route path={'/users'} render={() => <UsersContainer />} />
                    <Route path={'/login'} render={() => <Login />} />
                </div>
            </div>
};

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
});

export default connect(mapStateToProps, { initializeApp })(App);
