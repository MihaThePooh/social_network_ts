import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {AuthStateType} from "../../types";
import {logout} from "../../redux/auth_reducer";

type mapStateToProps = {
    isAuth: boolean
    login: string
    email: string
    userId: number
}
type mapDispatchToProps = {
    logout: () => void
}
type HeaderContainerPropsType = mapStateToProps & mapDispatchToProps

function HeaderContainer(props: HeaderContainerPropsType) {
    return <Header {...props} />
}

const mapStateToProps = (state: AuthStateType): mapStateToProps => {
    return {
        isAuth: state.auth_reducer.isAuth,
        login: state.auth_reducer.login,
        email: state.auth_reducer.email,
        userId: state.auth_reducer.userId
    }
};

export default connect(mapStateToProps, {
    logout
})(HeaderContainer)