import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    userId: number
    email: string
    login: string
    isAuth: boolean
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img />
            { props.isAuth ?
                <span className={s.loginBlock}>{props.login}</span> :
                <NavLink to={'/login'}><span className={s.loginBlock}>LogIn</span></NavLink>
            }
        </header>
    )
}

export default Header