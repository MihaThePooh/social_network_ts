import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth_reducer";
import { Redirect } from "react-router-dom";
import {AppStateType} from "../../redux/redux_store";
import s from "./../../common/FormsControls/FormsControls.module.css"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return <>
        <form onSubmit={handleSubmit}>
            {createField("Login", "login", required, Input)}
            {createField("Password", "password", required, Input, {type: "password"})}
            {createField("", "rememberMe", () => undefined, Input, {type: "checkbox"}, "remember me")}
            { error && <div className={s.formSummaryError}>{error}</div> }
            <button>log in</button>
        </form>
    </>
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm);

const Login = (props: any) => {
    console.log(props)
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth_reducer.isAuth
});

export default connect(mapStateToProps, {login})(Login)

