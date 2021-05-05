import React, {useEffect} from 'react'
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AuthStateType} from "../../types";
import {setAuthUserData} from "../../redux/auth_reducer";

type mapStateToProps = {
    isAuth: boolean
    login: string
    email: string
    userId: number
}
type mapDispatchToProps = {
    setAuthUserData: (id: number, login: string, email: string) => void
}
type HeaderContainerPropsType = mapStateToProps & mapDispatchToProps

function HeaderContainer(props: HeaderContainerPropsType) {

    useEffect( () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                        let {id, email, login} = response.data.data;
                        props.setAuthUserData(id, email, login);
                    } else if (response.data.resultCode === 1) {
                        return alert(response.data.messages[0])
                    }
            })
    }, []);

    return <Header {...props} />
}

const mapStateToProps = (state: AuthStateType) => {

    return {
        isAuth: state.auth_reducer.isAuth,
        login: state.auth_reducer.login,
        email: state.auth_reducer.email,
        userId: state.auth_reducer.userId
    }
};

export default connect(mapStateToProps, {
    setAuthUserData
})(HeaderContainer)