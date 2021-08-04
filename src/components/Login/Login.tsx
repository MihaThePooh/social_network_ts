import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
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

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
            { props.error && <div className={s.formSummaryError}>{props.error}</div> }
            <div><button>log in</button></div>
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

