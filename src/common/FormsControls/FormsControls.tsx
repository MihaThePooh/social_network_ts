import React from "react";
import s from "./FormsControls.module.css"
import {Field, WrappedFieldProps} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}: any) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

type ValidatorsType = (value: any) => "field is Required!!!" | undefined
export const createField = (placeholder: string,
                            name: string,
                            validators: ValidatorsType,
                            component: React.ComponentType<WrappedFieldProps>,
                            props = {},
                            text?: string) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
        {text}
    </div>
);

export default Textarea
