import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <>
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/></div>
            <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me</div>
            <div><button>log in</button></div>
        </form>
    </>
};

const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm);

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    };

    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
};

export default Login

